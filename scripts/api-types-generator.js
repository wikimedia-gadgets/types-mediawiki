// Paste this into the browser console
// and copy the console log output

// All types are put here.
const PARAMS_NS = "mw.Api.Params";

// A PHP namespace with this name will not be put back in type names.
const MODULE_PATH_EXCLUDE = ["Action", "Api", "Client", "Extension", "MediaWiki", "Module"];

// An API type with this name will be replaced with its associated TS type.
const TYPE_MAP = {
    expiry: "string",
    integer: "number",
    limit: "Limit",
    namespace: "number",
    password: "string",
    raw: "string",
    text: "string",
    timestamp: "string",
    title: "string",
    upload: "File",
    user: "string",
};

// An enum parameter with this name with get generalized back to a string.
const NAME_TYPE_GENERALIZE = [
    "site", // gusite used by ApiQueryGlobalUsage
    "tags",
    "tagfilter", // edit tags, used in core
    "wikis", // used by Extension:Echo APIs
];

// An API module with this name will have its interface path and name overriden.
// Use a string to only replace the interface name, and an array to replace the full type path.
const NAME_PATH_MAP = {
    allfileusages: "AllFileUsages",
    allredirects: "AllRedirects",
    alltransclusions: "AllTransclusions",
    embeddedin: "EmbeddedIn",
    fileusage: "FileUsage",
    imageusage: "ImageUsage",
    linkshere: "LinksHere",
    redirects: "Redirects",
    templates: "Templates",
    transcludedin: "TranscludedIn",
    unlinkaccount: "UnlinkAccount",
};

async function getModules(modules) {
    getModules._api ??= new mw.Api();
    const result = await getModules._api.get({
        action: "paraminfo",
        format: "json",
        modules,
        formatversion: "2",
    });
    return result.paraminfo.modules;
}

function firstToUppercase(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function quote(s) {
    return `"${s}"`;
}

function indent(s) {
    return s === "" ? s : `${" ".repeat(4)}${s}`;
}

function addEmptyLine(l) {
    l.push("");
    return l;
}

function getOldInterfaceName(module) {
    return module.classname
        .replace(/\\/g, "")
        .replace(/^MediaWikiExtensions?/, "")
        .replace(/ApiApi/g, "Api");
}

function processParamInfo(param) {
    let name = param.name,
        type = param.type;

    if (Array.isArray(type)) {
        type = NAME_TYPE_GENERALIZE.includes(name) ? "string" : type.map(quote).join(" | ");
    } else if (type in TYPE_MAP) {
        type = TYPE_MAP[type];
    }

    if (param.multi) {
        type = `TypeOrArray<${type}>`;
    }

    return { name, type, optional: true };
}

function processModule(module) {
    const oldName = getOldInterfaceName(module),
        props = module.parameters.map(processParamInfo);
    let path = module.classname.split("\\");

    // remove redundant parts
    path = path.filter((s) => !MODULE_PATH_EXCLUDE.includes(s)).map((s) => s.replace("Api", ""));

    for (const prop of props) {
        prop.name = module.prefix + prop.name;
    }

    switch (module.group) {
        case "action":
            break;
        case "format":
            // Xxx  -->  Format.Xxx  or  Format.XxxFM
            path = ["Format", firstToUppercase(module.name).replace("fm", "FM")];
            break;
        case "list":
        case "meta":
        case "prop":
            // Xxx.QueryYyy  -->  Query.Xxx.Yyy
            path = ["Query", ...path.map((s) => s.replace("Query", ""))];
            break;
        default:
            throw `Unknown group "${module.group}"`;
    }

    if (module.name in NAME_PATH_MAP) {
        if (typeof NAME_PATH_MAP[module.name] === "string") {
            path[path.length - 1] = NAME_PATH_MAP[module.name];
        } else {
            path = NAME_PATH_MAP[module.name];
        }
    } else {
        // remove duplicated parts
        const pathSet = new Set();
        path = path.filter((e) => (pathSet.has(e) ? false : pathSet.add(e)));
    }

    const strPath = path.join(".");
    processModule._pathMap ??= new Map();
    if (processModule._pathMap.has(strPath)) {
        console.error(
            `Path "${strPath}" is used by both "${processModule._pathMap.get(strPath)}" and "${
                module.name
            }" API modules.`,
            "Add an entry to NAME_PATH_MAP to manually set the path of one of these."
        );
    } else {
        processModule._pathMap.set(strPath, module.name);
    }

    return { oldName, path, props };
}

function formatProperty(prop) {
    let name = prop.name;
    if (!name.match(/^[0-9a-z]+$/i)) {
        name = quote(name);
    }

    return `${name}${prop.optional ? "?" : ""}: ${prop.type};`;
}

function formatInterface(interface) {
    const path = [...interface.path];
    const name = path.pop();

    let lines;
    if (interface.props.length) {
        lines = [
            `interface ${name} extends Params {`,
            ...interface.props.map(formatProperty).map(indent),
            "}",
        ];
    } else {
        lines = [
            "// tslint:disable-next-line:no-empty-interface",
            `interface ${name} extends Params {}`,
        ];
    }

    if (name.match(/^I[^a-z]/)) {
        lines.unshift("// tslint:disable-next-line:interface-name");
    }

    if (path.length) {
        lines = [`namespace ${path.join(".")} {`, ...lines.map(indent), "}"];
    }

    return lines;
}

function formatExportAlias(typeName, paths) {
    paths = paths.map((path) => [PARAMS_NS, ...path]);
    return [
        `/** @deprecated Use ${paths.map((s) => `{@link ${s.join(".")}}`).join(" / ")} instead */`,
        `export type ${typeName} = ${paths[0].join(".")};`,
    ];
}

function formatContent(interfaces) {
    const oldNameMap = {};
    interfaces.forEach((interface) => {
        if (!(interface.oldName in oldNameMap)) {
            oldNameMap[interface.oldName] = [];
        }
        oldNameMap[interface.oldName].push(interface.path);
    });

    return [
        "declare global {",
        ...[
            `namespace ${PARAMS_NS} {`,
            ...interfaces.map(formatInterface).flatMap(addEmptyLine).map(indent),
            "}",
        ].map(indent),
        "}",
        "",
        ...Object.entries(oldNameMap).flatMap(([s, l]) => formatExportAlias(s, l)),
        "",
        "export {};",
    ];
}

const modules = (await Promise.all([getModules("*"), getModules("query+*")])).flat(1);
const interfaces = modules.map(processModule);
console.log(formatContent(interfaces).join("\n"));
