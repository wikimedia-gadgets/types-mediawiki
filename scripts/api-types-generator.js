// Paste this into the browser console
// and copy the console log output

/**
 * Order in which API modules are displayed, depending on their group.
 * Modules from another group are added at the end.
 * @type {string[]}
 */
const MODULE_GROUP_SORT_ORDER = ["action", "format"]; // "list", "meta", and "props" are intentionally mixed up

/**
 * An API type with this name will be replaced with its associated TS type.
 * @type {Record<string, string>}
 */
const TYPE_MAP = {
    integer: "number",
    raw: "string",
    text: "string",
    title: "string",
    user: "string",
};

/**
 * An enum parameter with this name with get generalized back to a string.
 * @type {string[]}
 */
const NAME_TYPE_GENERALIZE = [
    "site", // gusite used by ApiQueryGlobalUsage
    "tags",
    "tagfilter", // edit tags, used in core
    "wikis", // used by Extension:Echo APIs
];

/**
 * An API module with this name will have its interface name overriden.
 * @type {Record<string, string>}
 */
const NAME_PATH_MAP = {
    allfileusages: "ApiQueryAllFileUsages",
    allredirects: "ApiQueryAllRedirects",
    alltransclusions: "ApiQueryAllTransclusions",
    embeddedin: "ApiQueryEmbeddedIn",
    fileusage: "ApiQueryFileUsage",
    imageusage: "ApiQueryImageUsage",
    linkshere: "ApiQueryLinksHere",
    redirects: "ApiQueryRedirects",
    templates: "ApiQueryTemplates",
    transcludedin: "ApiQueryTranscludedIn",
    unlinkaccount: "ApiQueryUnlinkAccount",
};

/**
 * A parameter with this name will always be optional.
 * @type {string[]}
 */
const FORCE_OPTIONAL_PARAMS = ["token"];

/**
 * An API module with this name will have the given parameters be required or optional, as specified.
 * @type {Record<string, Record<string, boolean>>}
 */
const REQUIRED_PARAMS_MAP = {
    // e.g. allfileusages: { somerequiredparam: true, someoptionalparam: false },
};

/**
 * @typedef InterfaceData
 * @property {string} name Interface name
 * @property {string} parentName Name of the API param interface to inherit properties from
 * @property {PropertyData[]} props Sorted list of properties
 */

/**
 * @typedef PropertyData
 * @property {string} name Property name
 * @property {string|string[]} type Property type or list of different types
 * @property {boolean} multi Whether multiple values can be specified as a list
 * @property {boolean} required Whether the property is required or optional
 */

/**
 * Get module data from the API.
 * @param {...string} args Module names
 * @returns {Promise<any[]>} Module data
 */
async function getModules() {
    getModules._api ??= new mw.Api();
    const results = await Promise.all(
        Array.prototype.map.call(arguments, (modules) =>
            getModules._api.get({
                action: "paraminfo",
                format: "json",
                modules,
                formatversion: 2,
            })
        )
    );
    return results.flatMap((r) => r.paraminfo.modules);
}

/**
 * @param {string} s
 */
function firstToUppercase(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * @param {string} s
 */
function quote(s) {
    return `"${s}"`;
}

/**
 * @param {string} s
 */
function indent(s) {
    if (s !== "") {
        s = " ".repeat(4) + s;
    }
    return s;
}

/**
 * @template {string[]} T
 * @param {T} l
 */
function addEmptyLine(l) {
    l.push("");
    return l;
}

/**
 * Get some data about an interface property.
 * @param {any} param API paramerer data
 * @returns {PropertyData}
 */
function processParam(param) {
    let name = param.name,
        type = param.type,
        multi = param.multi,
        required = param.required;

    if (type in TYPE_MAP) {
        type = TYPE_MAP[type];
    } else if (Array.isArray(type)) {
        if (NAME_TYPE_GENERALIZE.includes(name)) {
            type = "string";
        } else {
            type = type.map(quote);
        }
    }

    if (this.name in REQUIRED_PARAMS_MAP && name in REQUIRED_PARAMS_MAP[this.name]) {
        required = REQUIRED_PARAMS_MAP[this.name][name];
    } else if (FORCE_OPTIONAL_PARAMS.includes(name)) {
        required = false;
    }

    return { name, type, multi, required };
}

/**
 * Get some data about a module interface.
 * @param {any} module API module data
 * @returns {InterfaceData}
 */
function processModule(module) {
    let name = module.classname,
        parentName = "ApiParams",
        props = module.parameters.map(processParam.bind(module));

    name = name
        .replace(/\\/g, "")
        .replace(/^MediaWikiExtensions?/, "")
        .replace(/ApiApi/g, "Api");

    for (const prop of props) {
        prop.name = module.prefix + prop.name;
    }

    switch (module.group) {
        case "format":
            name = `ApiFormat${firstToUppercase(module.name).replace("fm", "FM")}`;
        case "action":
            props.unshift({ name: module.group, type: quote(module.name), required: true });
            break;
        case "list":
        case "meta":
        case "prop":
            parentName = "ApiQueryParams";
            break;
        default:
            console.error(`Unknown group "${module.group}" for module "${module.name}".`);
    }

    if (module.name in NAME_PATH_MAP) {
        name = NAME_PATH_MAP[module.name];
    }

    name += "Params";

    processModule._pathMap ??= new Map();
    if (processModule._pathMap.has(name)) {
        const otherModuleName = processModule._pathMap.get(name);
        console.error(
            `Interface "${name}" is used by both "${otherModuleName}" and "${module.name}" API modules.`,
            "Add an entry to NAME_PATH_MAP to manually set the path of one of these."
        );
    } else {
        processModule._pathMap.set(name, module.name);
    }

    return { name, parentName, props };
}

/**
 * Get some data about a list of modules.
 * @param {any[]} modules API module data
 * @returns {InterfaceData[]}
 */
function processAllModules(modules) {
    const groupKey = {};
    modules.forEach((module) => {
        groupKey[module.group] ??= MODULE_GROUP_SORT_ORDER.includes(module.group)
            ? MODULE_GROUP_SORT_ORDER.indexOf(module.group)
            : MODULE_GROUP_SORT_ORDER.length;
    });
    modules = modules.sort((m1, m2) => groupKey[m1.group] - groupKey[m2.group]);

    return modules.map(processModule);
}

/**
 * Format an interface property as a TS string.
 * @param {PropertyData} prop Interface property data
 * @returns {string}
 */
function formatProperty(prop) {
    let { name, type, multi, required } = prop;

    if (!name.match(/^[0-9a-z]+$/i)) {
        name = quote(name);
    }

    if (!required) {
        name += "?";
    }

    if (typeof type === "object") {
        type = type.join(" | ");
    }

    if (multi) {
        if (type.match(/^[a-z]{0,10}$/)) {
            type = `${type} | ${type}[]`;
        } else {
            type = `OneOrMore<${type}>`;
        }
    }

    return `${name}: ${type};`;
}

/**
 * Format a module interface as a TS string.
 * @param {InterfaceData} interface Module interface data
 * @returns {string[]}
 */
function formatInterface(interface) {
    let lines;
    if (interface.props.length) {
        lines = [
            `export interface ${interface.name} extends ${interface.parentName} {`,
            ...interface.props.map(formatProperty).map(indent),
            "}",
        ];
    } else {
        lines = [
            "// tslint:disable-next-line:no-empty-interface",
            `export interface ${interface.name} extends ${interface.parentName} {}`,
        ];
    }

    if (interface.name.match(/^I[^a-z]/)) {
        lines.unshift("// tslint:disable-next-line:interface-name");
    }

    return lines;
}

/**
 * Format some module interface data as a TS declaration file.
 * @param {InterfaceData[]} interfaces All module interface data
 * @returns {string[]}
 */
function formatContent(interfaces) {
    return [...interfaces.map(formatInterface).flatMap(addEmptyLine), "export {};"];
}

const modules = await getModules("*", "query+*");
const interfaces = processAllModules(modules);
const lines = formatContent(interfaces);
console.log(lines.join("\n"));
