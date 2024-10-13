// Paste this into the browser console
// and copy the console log output

/**
 * Where to look API types from. If there is an ambiguity, the first ones are given priority.
 * @type {Record<string, string>}
 */
const SOURCES = {
    "mediawiki": "https://www.mediawiki.org/w/api.php",
    "wikibooks-en": "https://en.wikibooks.org/w/api.php",
    "wikidata": "https://www.wikidata.org/w/api.php",
    "wikidata-test": "https://test.wikidata.org/w/api.php",
    "wikifunctions": "https://www.wikifunctions.org/w/api.php",
    "wikimedia-api": "https://api.wikimedia.org/w/api.php",
    "wikimedia-commons": "https://commons.wikimedia.org/w/api.php",
    "wikimedia-commons-test": "https://test-commons.wikimedia.org/w/api.php",
    "wikimedia-labtestwikitech": "https://labtestwikitech.wikimedia.org/w/api.php",
    "wikimedia-meta": "https://meta.wikimedia.org/w/api.php",
    "wikinews-en": "https://en.wikinews.org/w/api.php",
    "wikipedia-en": "https://en.wikipedia.org/w/api.php",
    "wikipedia-test": "https://test.wikipedia.org/w/api.php",
    "wikipedia-test2": "https://test2.wikipedia.org/w/api.php",
    "wikiquote-en": "https://en.wikiquote.org/w/api.php",
    "wikisource-en": "https://en.wikisource.org/w/api.php",
    "wikiversity-en": "https://en.wikiversity.org/w/api.php",
    "wikivoyage-en": "https://en.wikivoyage.org/w/api.php",
    "wiktionary-en": "https://en.wiktionary.org/w/api.php",
};

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
const NAME_TYPE_GENERALIZE = [];

/**
 * An API module with this name will have its interface name overriden.
 * @type {Record<string, string>}
 */
const NAME_PATH_MAP = {
    account: "Account",
    all: "All",
    call: "Call",
    check: "Check",
    embedded: "Embedded",
    file: "File",
    help: "Help",
    homepage: "HomePage",
    image: "Image",
    lang: "Lang",
    links: "Links",
    objects: "Objects",
    panel: "Panel",
    question: "Question",
    section: "Section",
    transcluded: "Transcluded",
    translation: "Translation",
    url: "Url",
    usage: "Usage",
    usages: "Usages",
    value: "Value",

    cx: "CX",
    fm: "FM",
    sx: "SX",
    wb: "WB",
    wbl: "WBL",
    wbs: "WBS",
};

/**
 * A parameter with this name will always be optional.
 * @type {string[]}
 */
const FORCE_OPTIONAL_PARAMS = [];

/**
 * An API module with this name will have the given parameters be required or optional, as specified.
 * @type {Record<string, Record<string, boolean>>}
 */
const REQUIRED_PARAMS_MAP = {
    // e.g. allfileusages: { somerequiredparam: true, someoptionalparam: false },
};

/**
 * @template {number} [N=0]
 * @template {null[]} [_A=[]]
 * @typedef {_A["length"] extends N ? string : Array<string | LineBlock<N, [null, ..._A]>>} LineBlock
 */

/**
 * @typedef RawModule
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
 * @property {boolean} [deprecated]
 * @property {boolean} [generator]
 * @property {string[]} helpurls
 * @property {RawModule.Param[]} parameters
 * @property {boolean} [dynamicparameters]
 */
/**
 * @typedef RawModule.Param
 * @property {number} index
 * @property {RawModule} module
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
 * @property {boolean} [required]
 * @property {boolean} [sensitive]
 * @property {boolean} [deprecated]
 * @property {string} [allspecifier]
 * @property {string[]} [subtypes]
 * @property {Record<string, RawModule>} [submodules]
 * @property {string} [submoduleparamprefix]
 * @property {string[]} [internalvalues]
 * @property {string} [tokentype]
 * @property {Record<string, string>} [templatevars]
 */
/** @typedef {Record<string, RawModule>} APIModuleDict */

class ModuleLoader {
    logger = console.log;
    /** @type {Record<string, Promise<APIModuleDict>>} */
    cache = {};

    /**
     * @param {string|mw.Api} api
     */
    constructor(api) {
        this.processAndLoadSubmodules = this.processAndLoadSubmodules.bind(this);

        if (typeof api === "string") {
            this.api = new mw.ForeignApi(api);
        } else {
            this.api = api;
        }
    }

    /**
     * @param {any} module
     * @returns {Promise<APIModuleDict>}
     */
    async processAndLoadSubmodules(module) {
        /** @type {Array<Promise<APIModuleDict>>} */
        const promises = [];

        // Merge parameters with templated parameters.
        // We do not care about having 2 distinct parameter lists, since a
        // templated parameter can still be distinguished using templatevars.
        const parameters = [];
        let i = 0,
            j = 0;
        while (i < module.parameters.length && j < module.templatedparameters.length) {
            parameters.push(
                module.parameters[i].index < module.templatedparameters[j].index
                    ? module.parameters[i++]
                    : module.templatedparameters[j++]
            );
        }
        parameters.push(...module.parameters.slice(i), ...module.templatedparameters.slice(j));
        module.parameters = parameters;
        delete module.templatedparameters;

        // Retrieve sub-modules
        for (const parameter of module.parameters) {
            parameter.module = module;

            const submodules = parameter.submodules;
            if (!submodules) {
                continue;
            }

            const paths = Object.values(submodules);
            if (paths.length) {
                const submodulePromise = this.getModules(paths).then((submoduleData) => {
                    for (const [key, path] of Object.entries(submodules)) {
                        const submodule = submoduleData[path];
                        submodules[key] = submodule;
                    }
                    return submoduleData;
                });
                promises.unshift(submodulePromise);
            }
        }

        return Object.assign({}, ...(await Promise.all(promises)));
    }

    /**
     * @param {string[]} paths Module paths
     * @returns {Promise<RawModule[]>} Module data
     */
    queryModules(paths) {
        this.logger("Querying module data...", paths);

        /** @type {import("../api_params").ApiActionParamInfoParams & import("../api_params").ApiFormatJsonParams} */
        const params = {
            action: "paraminfo",
            format: "json",
            modules: paths,
            formatversion: 2,
        };

        const { promise, resolve, reject } = Promise.withResolvers();
        this.api.get(params).then((response) => resolve(response.paraminfo.modules), reject);
        return promise;
    }

    /**
     * Get module data from the API.
     * @param {string[]} paths Module paths
     * @returns {Promise<APIModuleDict>} Module data
     */
    async getModules(paths) {
        /** @type {Array<Promise<APIModuleDict>>} */
        const promises = [];
        /** @type {string[]} */
        const pathsToQuery = [];

        for (const path of paths) {
            if (!path.includes("*") && path in this.cache) {
                promises.push(this.cache[path].then((data) => ({ [path]: data[path] })));
            } else {
                pathsToQuery.push(path);
            }
        }

        for (let i = 0; i < pathsToQuery.length; i += 50) {
            const batch = pathsToQuery.slice(i, i + 50);
            const batchPromise = this.queryModules(batch).then(async (modules) => {
                const moduleData = Object.fromEntries(
                    modules.map((module) => [module.path, module])
                );
                const submoduleData = await Promise.all(
                    modules.flatMap(this.processAndLoadSubmodules)
                );
                return Object.assign(moduleData, ...submoduleData);
            });

            promises.push(batchPromise);
            for (const path of pathsToQuery) {
                this.cache[path] = batchPromise;
            }
        }

        return Object.assign({}, ...(await Promise.all(promises)));
    }

    /**
     * @returns {Promise<RawModule>}
     */
    async getRootModule() {
        const modules = await this.getModules(["main"]);
        return modules["main"];
    }
}

class ModuleMerger {
    constructor() {
        this.expectSame = this.expectSame.bind(this);
        this.expectSameSizeArray = this.expectSameSizeArray.bind(this);
        this.mergeMin = this.mergeMin.bind(this);
        this.mergeMax = this.mergeMax.bind(this);
        this.mergeKeyArray = this.mergeKeyArray.bind(this);
        this.mergeParameterType = this.mergeParameterType.bind(this);
        this.mergeParameterArray = this.mergeParameterArray.bind(this);
        this.mergeParameter = this.mergeParameter.bind(this);
        this.mergeModule = this.mergeModule.bind(this);
        this.merge = this.merge.bind(this);
    }

    /**
     * @template {{}} T
     * @template {string & keyof T} K
     * @template {unknown[]} U
     * @param {K} key
     * @param {T} o
     * @param {T} o1
     * @param {T} o2
     * @param {string} path
     * @param {(v1: T[K], v2: T[K], path: string, ...args: U) => T[K] | undefined} [merge]
     * @param {U} args
     */
    extract(key, o, o1, o2, path, merge, ...args) {
        if (key in o1 && key in o2 && merge) {
            const v = merge(o1[key], o2[key], `${path}.${key}`, ...args);
            if (v !== undefined) {
                o[key] = v;
            }
        } else if (key in o1) {
            o[key] = o1[key];
        } else if (key in o2) {
            o[key] = o2[key];
        }
    }

    /**
     * @template T
     * @param {T} v1
     * @param {T} v2
     * @param {string} path
     * @param {T} [def]
     */
    expectSame(v1, v2, path, def) {
        if (v1 === v2) {
            return v1;
        }
        if (def !== undefined) {
            return def;
        }
        throw `Found different values ("${v1}" and "${v2}") for "${path}".`;
    }

    /**
     * @template T
     * @template {unknown[]} U
     * @param {T[] | undefined} a1
     * @param {T[] | undefined} a2
     * @param {string} path
     * @param {(v1: T, v2: T, path: string, ...args: U) => T} [merge]
     * @param {U} args
     */
    expectSameSizeArray(a1, a2, path, merge, ...args) {
        if (a1 === undefined && a1 === undefined) {
            return undefined;
        }
        if (a1 === undefined || a2 === undefined || a1.length !== a2.length) {
            throw `Found arrays of different lengths ("${a1?.length ?? 0}" and "${
                a2?.length ?? 0
            }") for "${path}".`;
        }
        return merge ? a1.map((v1, i) => merge(v1, a2[i], `${path}[${i}]`, ...args)) : [...a1];
    }

    /**
     * @param {number | undefined} v1
     * @param {number | undefined} v2
     * @param {string} _
     */
    mergeMin(v1, v2, _) {
        if (v1 === undefined || v2 === undefined) {
            return undefined;
        }
        return Math.min(v1, v2);
    }

    /**
     * @param {number | undefined} v1
     * @param {number | undefined} v2
     * @param {string} _
     */
    mergeMax(v1, v2, _) {
        if (v1 === undefined || v2 === undefined) {
            return undefined;
        }
        return Math.max(v1, v2);
    }

    /**
     * @template T
     * @param {T[] | undefined} a1
     * @param {T[] | undefined} a2
     * @param {string} _
     */
    mergeKeyArray(a1, a2, _) {
        if (a1 === undefined) {
            return a2;
        }
        if (a2 === undefined) {
            return a1;
        }
        return new Set([...a1, ...a2]).values().toArray();
    }

    /**
     * @template T
     * @template {unknown[]} U
     * @param {Record<string, T> | undefined} o1
     * @param {Record<string, T> | undefined} o2
     * @param {string} path
     * @param {(v1: T, v2: T, path: string, ...args: U) => T} [merge]
     * @param {U} args
     */
    mergeObject(o1, o2, path, merge, ...args) {
        if (o1 === undefined) {
            return o2;
        }
        if (o2 === undefined) {
            return o1;
        }
        const o = { ...o1 };
        for (const k in o2) {
            if (k in o) {
                if (merge) {
                    o[k] = merge(o[k], o2[k], `${path}.${k}`, ...args);
                }
            } else {
                o[k] = o2[k];
            }
        }
        return o;
    }

    /**
     * @param {string | string[]} t1
     * @param {string | string[]} t2
     * @param {string} path
     */
    mergeParameterType(t1, t2, path) {
        if (typeof t1 === "string" && typeof t2 === "string") {
            return this.expectSame(t1, t2, path);
        }
        if (typeof t1 === "string") {
            return t1;
        }
        if (typeof t2 === "string") {
            return t2;
        }

        // If one type is a subset of the other, just take the more generalized one.
        if (t2.every(t1.includes, t1)) {
            return t1;
        }
        if (t1.every(t2.includes, t2)) {
            return t2;
        }

        // If types are incompatible enumerations, we assume values are wiki-dependent,
        // so we generalize it back to a string.
        try {
            return this.expectSameSizeArray(t1, t2, path, this.expectSame);
        } catch {
            return "string";
        }
    }

    /**
     * @param {RawModule.Param} p1
     * @param {RawModule.Param} p2
     * @param {string} path
     */
    mergeParameter(p1, p2, path) {
        /** @type {RawModule.Param} */
        // @ts-ignore
        const p = {};
        this.extract("name", p, p1, p2, path, this.expectSame);
        if (p1.submodules) {
            this.extract("type", p, p1, p2, path, this.mergeKeyArray);
        } else {
            this.extract("type", p, p1, p2, path, this.mergeParameterType);
        }
        this.extract("default", p, p1, p2, path, this.expectSame, "string");
        this.extract("multi", p, p1, p2, path, this.expectSame);
        this.extract("lowlimit", p, p1, p2, path, this.mergeMin);
        this.extract("highlimit", p, p1, p2, path, this.mergeMax);
        this.extract("limit", p, p1, p2, path, this.mergeMax);
        this.extract("min", p, p1, p2, path, this.mergeMin);
        this.extract("max", p, p1, p2, path, this.mergeMax);
        this.extract("mustExist", p, p1, p2, path, this.expectSame);
        this.extract("required", p, p1, p2, path, this.expectSame);
        this.extract("sensitive", p, p1, p2, path, this.expectSame);
        this.extract("deprecated", p, p1, p2, path, this.expectSame);
        this.extract("allspecifier", p, p1, p2, path, this.expectSame);
        this.extract("subtypes", p, p1, p2, path, this.expectSameSizeArray, this.expectSame);
        this.extract("submodules", p, p1, p2, path, this.mergeObject, this.mergeModule);
        this.extract("submoduleparamprefix", p, p1, p2, path, this.expectSame);
        this.extract("internalvalues", p, p1, p2, path, this.mergeKeyArray);
        this.extract("tokentype", p, p1, p2, path, this.expectSame);
        this.extract("templatevars", p, p1, p2, path);
        return p;
    }

    /**
     * @param {RawModule.Param[]} a1
     * @param {RawModule.Param[]} a2
     * @param {string} path
     */
    mergeParameterArray(a1, a2, path) {
        const a = [];
        let i1 = 0,
            i2 = 0;

        while (i1 < a1.length && i2 < a2.length) {
            const p1 = a1[i1],
                p2 = a2[i2];
            if (p1.name === p2.name) {
                a.push(this.mergeParameter(p1, p2, `${path}[${i1}]`));
                ++i1, ++i2;
                continue;
            }

            let i1Next = a1.findIndex((p) => p.name === p2.name),
                i2Next = a2.findIndex((p) => p.name === p1.name);
            if (i2Next > 0 && i1Next > 0) {
                throw `Inconsistent parameter order for "${path}".`;
            }

            if (i1Next > 0) {
                a.push(...a1.slice(i1, i1Next));
                i1 = i1Next;
            } else if (i2Next > 0) {
                a.push(...a2.slice(i2, i2Next));
                i2 = i2Next;
            } else {
                a.push(p1);
                ++i1;
            }
        }

        a.push(...a1.slice(i1), ...a2.slice(i2));

        a.forEach((p, i) => (p.index = i));
        return a;
    }

    /**
     * @param {RawModule} m1
     * @param {RawModule} m2
     * @param {string} path
     */
    mergeModule(m1, m2, path) {
        /** @type {RawModule} */
        // @ts-ignore
        const m = {};
        this.extract("name", m, m1, m2, path, this.expectSame);
        this.extract("classname", m, m1, m2, path);
        this.extract("path", m, m1, m2, path, this.expectSame);
        this.extract("group", m, m1, m2, path, this.expectSame);
        this.extract("prefix", m, m1, m2, path, this.expectSame);
        this.extract("source", m, m1, m2, path, this.expectSame);
        this.extract("sourcename", m, m1, m2, path);
        this.extract("licensetag", m, m1, m2, path, this.expectSame);
        this.extract("licenselink", m, m1, m2, path);
        this.extract("internal", m, m1, m2, path, this.expectSame);
        this.extract("readrights", m, m1, m2, path, this.expectSame);
        this.extract("writerights", m, m1, m2, path, this.expectSame);
        this.extract("mustbeposted", m, m1, m2, path, this.expectSame);
        this.extract("deprecated", m, m1, m2, path, this.expectSame);
        this.extract("generator", m, m1, m2, path, this.expectSame);
        this.extract("helpurls", m, m1, m2, path, this.expectSameSizeArray);
        this.extract("parameters", m, m1, m2, path, this.mergeParameterArray);
        m.parameters.forEach((p) => (p.module = m));
        this.extract("dynamicparameters", m, m1, m2, path, this.expectSame);
        return m;
    }

    /**
     * @param {RawModule} m1
     * @param {RawModule} m2
     */
    merge(m1, m2) {
        try {
            return this.mergeModule(m1, m2, m1.path);
        } catch (e) {
            console.error(e);
            return m1;
        }
    }
}

/**
 * @param {string} s
 */
function firstToUppercase(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * @typedef ModuleData
 * Pre-processed API module data.
 *
 * @property {string} path API module path
 * @property {string} source Formatted extension name
 * @property {string} name Formatted module name
 * @property {ParentPath[]} parents Interfaces to inherit from
 * @property {ParameterData[]} parameters Sorted list of properties
 * @property {string} prefix
 * @property {JSdocData} [jsdoc]
 */

/**
 * @typedef ParentPath
 * If it is not an API root module, indicates a parameter and associated value providing this module as a sub-module.
 *
 * @property {ParameterData} parameter
 * @property {string} value
 */

/**
 * @typedef ParameterData
 * Pre-processed API parameter data.
 *
 * @property {string} key Property name
 * @property {string} name Formatted parameter name
 * @property {ModuleData} module Interface data
 * @property {boolean} [template] Whether the type name is a string template or litteral
 * @property {string|string[]|Record<string, ModuleData>} type Type, list of possible values, or map of submodules
 * @property {boolean} [multi] Whether multiple values can be specified as a list
 * @property {boolean} required Whether the parameter is required or optional
 * @property {unknown} [default] Default parameter value
 * @property {JSdocData} [jsdoc]
 */

/**
 * @typedef JSdocData
 * Some additional information about an API module or parameter.
 *
 * @property {string|string[]} [description]
 * @property {boolean} [private]
 * @property {string|boolean} [deprecated]
 * @property {string[]} [seelinks]
 */

class ModuleParser {
    /**
     * Try to find a suitable module name for TS formatting.
     *
     * @param {RawModule} rawModule API module data
     * @returns Formatted module name (and source if not from MediaWiki)
     */
    findModuleName(rawModule) {
        const result = {
            name: rawModule.name,
            source: rawModule.source === "MediaWiki" ? "" : rawModule.source.replace(/[\s-]/g, ""),
        };

        // Main module.
        if (!rawModule.group) {
            result.name = "";
            return result;
        }

        // Try to properly capitalize the module name.

        // We generate patterns from the source, presets, and class name, then we try to find the
        // best combination to match the full name. Not that we test all possible combinations, but
        // only keep the ones with maximized pattern lengths.

        result.name = result.name.split(/[-_]/g).map(firstToUppercase).join("");

        const plainClassName = rawModule.classname.replace(/Api|Extensions?|\\/g, "") + "s",
            possibleReplacements = Object.entries({
                ...Object.fromEntries(
                    result.source.matchAll(/[A-Z][^A-Z]*/g).map((m) => [m[0].toLowerCase(), m[0]])
                ),
                ...NAME_PATH_MAP,
            });
        possibleReplacements.sort(([p1], [p2]) => p2.length - p1.length);

        /**
         * @param {string} name
         * @returns {{name:string,optimal:boolean}}
         */
        function findBestReplacement(name) {
            const nameIndex = plainClassName.toLowerCase().indexOf(name.toLowerCase());
            if (nameIndex >= 0) {
                return {
                    name: plainClassName.substring(nameIndex, nameIndex + name.length),
                    optimal: true,
                };
            }

            let bestReplacement = firstToUppercase(name),
                bestRemainingLength = name.length;
            for (const [p, v] of possibleReplacements) {
                const remainingLength = name.length - p.length;
                if (remainingLength < 0) {
                    continue;
                }

                if (name.toLowerCase().startsWith(p)) {
                    const repl = findBestReplacement(name.substring(p.length));
                    repl.name = `${v}${repl.name}`;
                    if (repl.optimal) {
                        return repl;
                    }
                    if (remainingLength < bestRemainingLength) {
                        bestReplacement = repl.name;
                        bestRemainingLength = remainingLength;
                    }
                }

                if (name.toLowerCase().endsWith(p)) {
                    const repl = findBestReplacement(name.substring(0, remainingLength));
                    repl.name = `${repl.name}${v}`;
                    if (repl.optimal) {
                        return repl;
                    }
                    if (remainingLength < bestRemainingLength) {
                        bestReplacement = repl.name;
                        bestRemainingLength = remainingLength;
                    }
                }
            }

            return {
                name: bestReplacement,
                optimal: false,
            };
        }

        const bestRepl = findBestReplacement(
            result.name.split(/[-_]/g).map(firstToUppercase).join("")
        );
        result.name = bestRepl.name;
        if (!bestRepl.optimal) {
            console.warn(
                `Could not find a proper name capitalization for module "${rawModule.name}", using "${result.name}".`
            );
        }

        return result;
    }

    /**
     * @param {RawModule.Param} rawParameter
     */
    findParameterName(rawParameter) {
        return firstToUppercase(rawParameter.name);
    }

    /**
     * Get some data about a module parameter.
     * @param {ModuleData} module Formatted module data
     * @param {RawModule.Param} rawParameter API parameter data
     */
    processParameter(module, rawParameter) {
        const rawModule = rawParameter.module;

        /** @type {JSdocData} */
        const jsdoc = { deprecated: !!rawParameter.deprecated };
        /** @type {ParameterData} */
        const parameter = {
            key: rawParameter.name,
            name: rawParameter.name,
            module: module,
            type: rawParameter.type,
            multi: !!rawParameter.multi,
            required: !!rawParameter.required,
            jsdoc,
        };

        if (Array.isArray(rawParameter.type)) {
            const isUsedAsTemplateVariable = rawModule.parameters.some((p) =>
                Object.values(p.templatevars ?? {}).includes(rawParameter.name)
            );

            // we do not have a generic way to detect which parameters may get unspecified new values,
            // so for now we generalize all parameter types referenced in templated parameters
            // to be sure we are not being too specific
            if (
                NAME_TYPE_GENERALIZE.includes(rawParameter.name) ||
                isUsedAsTemplateVariable ||
                (!rawParameter.submodules && rawParameter.type.length > 100)
            ) {
                parameter.type = "string";
            } else {
                parameter.type = [...rawParameter.type];
                if (rawParameter.internalvalues) {
                    parameter.type.push(...rawParameter.internalvalues);
                }
                if (rawParameter.allspecifier) {
                    parameter.type.push(rawParameter.allspecifier);
                }
            }
        } else if (rawParameter.type in TYPE_MAP) {
            parameter.type = TYPE_MAP[rawParameter.type];
        }

        if (
            rawModule.name in REQUIRED_PARAMS_MAP &&
            rawParameter.name in REQUIRED_PARAMS_MAP[rawModule.name]
        ) {
            parameter.required = REQUIRED_PARAMS_MAP[rawModule.name][rawParameter.name];
        } else if (FORCE_OPTIONAL_PARAMS.includes(rawParameter.name) || rawParameter.sensitive) {
            parameter.required = false;
        }

        if (rawParameter.default) {
            parameter.default = rawParameter.default;
        }

        const templatevars = rawParameter.templatevars;
        if (templatevars) {
            const varPattern = new RegExp(`\\{(${Object.keys(templatevars).join("|")})\\}`, "g");
            parameter.template = true;
            parameter.key = parameter.key.replaceAll(varPattern, (_, varName) => {
                const varParam = templatevars[varName];
                const varType = rawModule.parameters.find((p) => p.name === varParam)?.type;
                if (Array.isArray(varType)) {
                    return `\${string}`;
                } else {
                    return `\${${varType}}`;
                }
            });
        }

        parameter.name = this.findParameterName(rawParameter);

        const rawSubmodules = rawParameter.submodules;
        if (rawSubmodules && Array.isArray(parameter.type)) {
            parameter.type = Object.fromEntries(
                parameter.type.map((value) => [
                    value,
                    this.processModule(rawSubmodules[value], rawParameter.submoduleparamprefix, {
                        parameter,
                        value,
                    }),
                ])
            );
        }

        return parameter;
    }

    /**
     * Get some data about a module interface.
     * @param {RawModule} rawModule API module data
     * @param {string} [prefix]
     * @param {ParentPath} [parent] API data of the module this one is an extension of
     * @returns {ModuleData}
     */
    processModule(rawModule, prefix, parent) {
        /** @type {JSdocData} */
        const jsdoc = {
            private: !!rawModule.internal,
            deprecated: !!rawModule.deprecated,
            seelinks: rawModule.helpurls,
        };

        const { name, source } = this.findModuleName(rawModule);

        /** @type {ModuleData} */
        const module = {
            path: rawModule.path,
            source,
            name,
            parents: [],
            parameters: [],
            prefix: `${prefix ?? ""}${rawModule.prefix}`,
            jsdoc,
        };

        if (parent) {
            module.parents.push(parent);
        }

        const rawParameters = rawModule.parameters.toSorted((p1, p2) => p1.index - p2.index);

        module.parameters = rawParameters.map((rawParameter) =>
            this.processParameter(module, rawParameter)
        );

        return module;
    }
}

/**
 * @typedef InterfaceOptions
 * @property {string} [parent]
 * @property {boolean} [exported]
 */
/**
 * @typedef {Omit<ParameterData, "module" | "name">} PropertyData
 */

class ModuleFormatter {
    /**
     * @type {ParentPath[]}
     */
    pathStack = [];

    constructor() {
        this.quote = this.quote.bind(this);
        this.indent = this.indent.bind(this);
        this.formatProperty = this.formatProperty.bind(this);
    }

    /**
     * @param {string} s
     */
    quote(s) {
        return `"${s}"`;
    }

    /**
     * @param {string} s
     */
    indent(s) {
        if (s !== "") {
            s = " ".repeat(4) + s;
        }
        return s;
    }

    /**
     * @template T
     * @param {Array<string|T>} block
     */
    flatWithLine(block) {
        if (!block.length) {
            return [];
        }

        const newBlock = [block[0]];
        for (let i = 1; i < block.length; ++i) {
            newBlock.push("", block[i]);
        }

        return newBlock.flat(1);
    }

    /**
     * @param {ModuleData} module
     */
    formatModuleName(module) {
        const nameParts = [
            ...this.pathStack.flatMap((p) => [p.parameter.module, p.parameter]),
            module,
        ];
        return `Api${nameParts.map((o) => o.name).join("")}`;
    }

    /**
     * @param {ModuleData} source
     */
    formatParameterPrefix(source) {
        const modules = [...this.pathStack.map((p) => p.parameter.module), source];
        return modules.map((m) => m.prefix).join("");
    }

    /**
     * Disable a linter rule for the next line.
     * @param {string} name Rule name
     * @returns TS string line
     */
    disableRule(name) {
        return `// tslint:disable-next-line:${name}`;
    }

    /**
     * @param {JSdocData|undefined} jsdoc
     * @param {string|string[]} [typeLines]
     */
    addJsdoc(jsdoc, typeLines) {
        if (typeof typeLines === "string") {
            typeLines = [typeLines];
        }

        jsdoc ??= {};

        /** @type {LineBlock<2>} */
        let lineBlocks = [];

        if (jsdoc.description?.length) {
            lineBlocks.push(jsdoc.description);
        }

        /** @type {string[]} */
        const tags = [];

        if (typeof jsdoc.deprecated === "string") {
            tags.push(`@deprecated ${jsdoc.deprecated}`);
        } else if (jsdoc.deprecated) {
            tags.push("@deprecated");
        }

        if (jsdoc.private) {
            tags.push("@private");
        }

        if (jsdoc.seelinks?.length) {
            tags.push(...jsdoc.seelinks.map((l) => `@see {@link ${l}}`));
        }

        if (tags.length) {
            lineBlocks.push(tags);
        }

        /** @type {string[]} */
        const lines = [];
        if (lineBlocks.length) {
            lines.push("/**", ...this.flatWithLine(lineBlocks).map((l) => ` * ${l}`), " */");
        }

        if (typeLines) {
            lines.push(...typeLines);
        }

        return lines;
    }

    /**
     * Format an interface parameter as a TS string.
     * @param {PropertyData} prop Interface parameter data
     * @returns {string[]}
     */
    formatProperty(prop) {
        let { key, type } = prop;

        if (prop.template) {
            key = `[k: \`${key}\`]`;
        } else {
            if (!key.match(/^[0-9a-z]+$/i)) {
                key = this.quote(key);
            }

            if (!prop.required) {
                key += "?";
            }
        }

        if (Array.isArray(type)) {
            type = type.length > 0 ? type.map(this.quote).join(" | ") : "never";
        } else if (typeof type === "object") {
            type = "string";
        }

        if (prop.multi) {
            if (type.match(/^[a-z]{0,10}$/)) {
                type = `${type} | ${type}[]`;
            } else {
                type = `OneOrMore<${type}>`;
            }
        }

        return this.addJsdoc(prop.jsdoc, `${key}: ${type};`);
    }

    /**
     * @param {string} name
     * @param {PropertyData[]} properties
     * @param {InterfaceOptions} [options]
     * @returns {string[]}
     */
    formatInterface(name, properties, options) {
        options ??= {};
        /** @type {string[]} */
        const lines = [];

        if (name.match(/^I[^a-z]/)) {
            lines.push(this.disableRule("interface-name"));
        }

        let intro = `interface ${name}`;
        if (options.exported) {
            intro = `export ${intro}`;
        }

        if (options.parent) {
            intro = `${intro} extends ${options.parent}`;
        }

        if (properties.length) {
            lines.push(
                `${intro} {`,
                ...properties.flatMap(this.formatProperty).map(this.indent),
                "}"
            );
        } else {
            lines.push(this.disableRule("no-empty-interface"), `${intro} {}`);
        }

        return lines;
    }

    /**
     * Format a module interface as a TS string.
     * @param {ModuleData} module Module interface data
     * @returns {string[]}
     */
    formatModule(module) {
        const interfaceName = `${this.formatModuleName(module)}Params`;
        const parameterPrefix = this.formatParameterPrefix(module);

        /** @type {ParameterData[]} */
        const prefixedParameters = module.parameters.map((parameter) => ({
            ...parameter,
            key: `${parameterPrefix}${parameter.key}`,
        }));

        const submoduleSets = prefixedParameters.flatMap((parameter) => {
            if (Array.isArray(parameter.type) || typeof parameter.type !== "object") {
                return [];
            } else {
                const values = Object.entries(parameter.type).sort((e1, e2) =>
                    e1[0].localeCompare(e2[0])
                );
                return { values, parameter };
            }
        });

        /** @type {InterfaceOptions} */
        const options = { exported: true };

        // Set parent interface, and overload parameter from parent interface
        const parentPath = this.pathStack.pop();
        if (parentPath) {
            const parameter = parentPath.parameter;
            options.parent = `${this.formatModuleName(parameter.module)}Params`;
            this.pathStack.push(parentPath);
            if (!parameter.multi) {
                prefixedParameters.unshift({
                    ...parameter,
                    type: [parentPath.value],
                    // required: false,
                });
            }
        }

        /** @type {LineBlock<2>} */
        const types = [
            this.addJsdoc(
                module.jsdoc,
                this.formatInterface(interfaceName, prefixedParameters, options)
            ),
        ];

        for (const submoduleSet of submoduleSets) {
            const parameter = submoduleSet.parameter;
            for (const [value, submodule] of submoduleSet.values) {
                this.pathStack.push({ parameter, value });
                types.push(this.formatModule(submodule));
                this.pathStack.pop();
            }
        }

        return this.flatWithLine(types);
    }

    /**
     * Format some module interface data as a TS declaration file.
     * @param {ModuleData} rootModule Formatted module data
     * @returns {string[]}
     */
    formatContent(rootModule) {
        return this.flatWithLine([
            "// AUTOMATICALLY GENERATED (see scripts/api-types-generator.js)",
            [
                "type timestamp = string;",
                "type expiry = string;",
                "type namespace = number;",
                'type limit = number | "max";',
                "type password = string;",
                "type upload = File; // XXX",
                "type OneOrMore<T> = T | T[];",
            ],
            'export type ApiAssert = "anon" | "bot" | "user";',
            'export type ApiTokenType = "createaccount" | "csrf" | "deleteglobalaccount" | "login" | "patrol" | "rollback" | "setglobalaccountstatus" | "userrights" | "watch";',
            'export type ApiLegacyTokenType = "block" | "delete" | "edit" | "email" | "import" | "move" | "options" | "protect" | "unblock";',
            this.formatModule(rootModule),
            "export {};",
        ]);
    }
}

const loaders = Object.values(SOURCES).map((s) => new ModuleLoader(s));
const merger = new ModuleMerger();
const parser = new ModuleParser();
const formatter = new ModuleFormatter();

const rawRootModules = await Promise.all(loaders.map((l) => l.getRootModule()));
const rawRootModule = rawRootModules.reduce(merger.merge);
const rootModule = parser.processModule(rawRootModule);
console.log(formatter.formatContent(rootModule).join("\n"));
// Object.values(await getModules())
//     .map((m) => `${m.source}\t${m.path}`)
//     .sort()
//     .join("\n");
