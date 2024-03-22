// Paste this into the browser console
// and copy the console log output

/** @type {import("..")} */

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
 * @typedef ModuleData
 * @property {string} name
 * @property {string} classname
 * @property {string} path
 * @property {string} [group]
 * @property {string} prefix
 * @property {string} source
 * @property {string} sourcename
 * @property {string} licensetag
 * @property {string} licenselink
 * @property {boolean} [internal]
 * @property {boolean} [readrights]
 * @property {boolean} [writerights]
 * @property {boolean} [mustbeposted]
 * @property {string[]} helpurls
 * @property {ModuleParamData[]} parameters
 * @property {ModuleTemplateParamData[]} templatedparameters
 * @property {boolean} [dynamicparameters]
 */
/**
 * @typedef {ModuleParamData&ModuleTemplateParamData_} ModuleTemplateParamData
 * @typedef ModuleTemplateParamData_
 * @property {Record<string, string>} templatevars
 */
/**
 * @typedef ModuleParamData
 * @property {number} index
 * @property {string} name
 * @property {string|string[]} type
 * @property {unknown} [default]
 * @property {boolean} [multi]
 * @property {number} [lowlimit]
 * @property {number} [highlimit]
 * @property {number} [limit]
 * @property {number} [min]
 * @property {number} [max]
 * @property {boolean} [mustExist]
 * @property {boolean} [mustExist]
 * @property {boolean} [required]
 * @property {boolean} [sensitive]
 * @property {boolean} [deprecated]
 * @property {string} [allspecifier]
 * @property {string[]} [subtypes]
 * @property {Record<string, ModuleData>} [submodules]
 * @property {string} [submoduleparamprefix]
 * @property {string[]} [internalvalues]
 * @property {string} [tokentype]
 */

/**
 * @typedef InterfaceData
 * @property {string} name Interface name
 * @property {string} [parentName] Name of the API param interface to inherit properties from
 * @property {PropertyData[]} props Sorted list of properties
 */
/**
 * @typedef PropertyData
 * @property {string} name Property name
 * @property {string|string[]} type Property type or list of different types
 * @property {boolean} [multi] Whether multiple values can be specified as a list
 * @property {boolean} required Whether the property is required or optional
 */

/**
 * @param {any} parameter
 * @returns {Promise<Record<string, ModuleData>>}
 */
async function loadSubmodules(parameter) {
    if (!parameter.submodules) {
        return Promise.resolve({});
    }

    /** @type {Array<Promise<Record<string, ModuleData>>>} */
    const promises = [];
    /** @type {Record<string, string>} */
    const toResolve = {};

    Object.entries(parameter.submodules).forEach(([key, path]) => {
        if (getModules._cache[path]) {
            const submodulePromise = getModules._cache[path].then((data) => {
                parameter.submodules[key] = data;
                return { key: data };
            });
            promises.push(submodulePromise);
        } else {
            toResolve[path] = key;
        }
    });

    if (Object.keys(toResolve).length) {
        const submodulePromise = getModules(Object.keys(toResolve));
        promises.unshift(submodulePromise);

        const submoduleRecordPromise = submodulePromise.then((data) => {
            Object.entries(data).forEach(([k, v]) => {
                parameter.submodules[toResolve[k]] = v;
            });
            return data;
        });

        Object.keys(toResolve).forEach((path) => {
            getModules._cache[path] = submoduleRecordPromise.then(
                (resolvedData) => resolvedData[path]
            );
        });
    }

    const data = await Promise.all(promises);
    return Object.assign({}, ...data);
}

/**
 * Get module data from the API.
 * @param {string[]} [modules] Module names
 * @returns {Promise<Record<string, ModuleData>>} Module data
 */
async function getModules(modules) {
    if (modules === undefined) {
        modules = ["main"];
    }

    const promises = [];
    for (let i = 0; i < modules.length; i += 50) {
        const modulesToQuery = modules.slice(i, i + 50);
        console.log("Querying module data...", modulesToQuery);

        const apiRequest = getModules._api.get({
            action: "paraminfo",
            format: "json",
            modules: modulesToQuery,
            formatversion: 2,
        });

        const promise = new Promise((resolve, reject) => {
            apiRequest.then(async (response) => {
                const rawData = response.paraminfo.modules;
                const data = Object.fromEntries(rawData.map((module) => [module.path, module]));
                const submoduleData = await Promise.all(
                    rawData.flatMap((module) => module.parameters.map(loadSubmodules))
                );
                resolve(Object.assign(data, ...submoduleData));
            }, reject);
        });

        promises.push(promise);
    }

    return Object.assign({}, ...(await Promise.all(promises)));
}
getModules._api = new mw.Api();
/** @type {Record<string, Promise<ModuleData>>} */
getModules._cache = {};

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
 * @param {ModuleData} module API module data
 * @param {ModuleParamData} param API paramerer data
 * @returns {PropertyData}
 */
function processParam(module, param) {
    /** @type {PropertyData} */
    const property = {
        name: param.name,
        type: param.type,
        multi: !!param.multi,
        required: !!param.required,
    };

    if (typeof property.type === "object") {
        if (NAME_TYPE_GENERALIZE.includes(property.name)) {
            property.type = "string";
        } else {
            property.type = property.type.map(quote);
        }
    } else if (property.type in TYPE_MAP) {
        property.type = TYPE_MAP[property.type];
    }

    if (module.name in REQUIRED_PARAMS_MAP && property.name in REQUIRED_PARAMS_MAP[module.name]) {
        property.required = REQUIRED_PARAMS_MAP[module.name][property.name];
    } else if (FORCE_OPTIONAL_PARAMS.includes(property.name)) {
        property.required = false;
    }

    return property;
}

/**
 * Get some data about a module interface.
 * @param {ModuleData} module API module data
 * @returns {InterfaceData}
 */
function processModule(module) {
    /** @type {InterfaceData} */
    const interface = {
        name: module.classname,
        parentName: "ApiParams",
        props: module.parameters.map((param) => processParam(module, param)),
    };

    interface.name = interface.name
        .replace(/\\/g, "")
        .replace(/^MediaWikiExtensions?/, "")
        .replace(/ApiApi/g, "Api");

    for (const prop of interface.props) {
        prop.name = module.prefix + prop.name;
    }

    switch (module.group) {
        case undefined:
            interface.name = "Api";
            delete interface.parentName;
            break;
        case "format":
            interface.name = `ApiFormat${firstToUppercase(module.name).replace("fm", "FM")}`;
            interface.props.unshift({ name: "format", type: quote(module.name), required: true });
            break;
        case "action":
            interface.props.unshift({ name: "action", type: quote(module.name), required: true });
            break;
        case "list":
        case "meta":
        case "prop":
            interface.parentName = "ApiQueryParams";
            break;
        case "command":
            switch (module.source) {
                case "Echo":
                    interface.parentName = "NotificationsPushApiEchoPushSubscriptionsParams";
                    break;
                case "ReadingLists":
                    interface.parentName = "ReadingListsApiQueryReadingListsParams";
                    break;
                default:
                    console.error(`Unknown source "${module.source}" for module "${module.name}".`);
            }
            interface.props.unshift({ name: "command", type: quote(module.name), required: true });
            break;
        case "submodule":
            switch (module.source) {
                case "Flow":
                    interface.parentName = "FlowApiFlowParams";
                    break;
                case "Collection":
                    interface.parentName = "CollectionApiCollectionParams";
                    break;
                default:
                    console.error(`Unknown source "${module.source}" for module "${module.name}".`);
            }
            interface.props.unshift({
                name: "submodule",
                type: quote(module.name),
                required: true,
            });
            break;
        default:
            console.error(`Unknown group "${module.group}" for module "${module.name}".`);
    }

    if (module.name in NAME_PATH_MAP) {
        interface.name = NAME_PATH_MAP[module.name];
    }

    interface.name += "Params";

    if (processModule._pathMap.has(interface.name)) {
        const otherModuleName = processModule._pathMap.get(interface.name);
        console.error(
            `Interface "${name}" is used by both "${otherModuleName}" and "${module.name}" API modules.`,
            "Add an entry to NAME_PATH_MAP to manually set the path of one of these."
        );
    } else {
        processModule._pathMap.set(interface.name, module.name);
    }

    return interface;
}
/** @type {Map<string, string>} */
processModule._pathMap = new Map();

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
    let name = interface.name;
    if (interface.parentName) {
        name += ` extends ${interface.parentName}`;
    }

    let lines;
    if (interface.props.length) {
        lines = [
            `export interface ${name} {`,
            ...interface.props.map(formatProperty).map(indent),
            "}",
        ];
    } else {
        lines = ["// tslint:disable-next-line:no-empty-interface", `export interface ${name} {}`];
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

const modules = await getModules();
const interfaces = Object.values(modules).map(processModule);
console.log(formatContent(interfaces).join("\n"));
