// This generates the content of `api_params/index.d.ts`, by extracting online MediaWiki API module information.
// Go to a Wikimedia site, paste this into the browser console, and copy the log output.
//
// This process is done in 4 steps:
//
//                                  main
//                                  └── action=                                                                       namespace Params {
//   https://w1/api.php  ══[ML]══>      ├── query   ═══╗          main                      Params                     namespace Action {
//                                      └── block      ║          └── action=               └── Action                  interface Query {}
//                                                     ╠══[MM]══>     ├── query   ══[MP]══>     ├── Query   ══[MF]══>   interface Block {}
//                                  main               ║              ├── block                 ├── Block               interface WBSearch {}
//                                  └── action=        ║              └── wbsearch              └── WBSearch           }
//   https://w2/api.php  ══[ML]══>      ├── query     ═╝                                                              }
//                                      └── wbsearch
//
// [ML] ModuleLoader: load module data from all APIs.
// [MM] ModuleMerger: merge module data into a single hierarchy.
// [MP] ModuleParser: process module data to deduce API parameter types.
// [MF] ModuleFormatter: format module data into TS type declarations.

/** @type {import("./api-types-generator-types")} */

/**
 * Entry points of MediaWiki sites from which API types are loaded.
 * If there is an ambiguity, the first ones are given priority.
 *
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
 * Mapping of API module parameter types to TS types.
 *
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
 * Patterns used to properly capitalize TS type names.
 * By default, PHP namespaces and class name are used to find proper capitalizations, this can be used to
 * override bad deductions or when there is not enough information for the script to capitalize anything.
 *
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
 * Hardcoded list of (unprefixed) parameter names that should always be optional.
 * Used with any module.
 *
 * @type {string[]}
 */
const FORCE_OPTIONAL_PARAMS = [];

/**
 * Hardcoded list of (unprefixed) parameter names that should be required or optional.
 * Only applies to the specified module.
 *
 * @type {Record<string, Record<string, boolean>>}
 */
const REQUIRED_PARAMS_MAP = {
    // e.g. allfileusages: { somerequiredparam: true, someoptionalparam: false },
};

const log = mw.log;
const logError = mw.log.error;

class ModuleLoader {
    /** @type {Record<string, Promise<APIModuleDict>>} */
    cache = {};

    /**
     * Creates a module loader.
     *
     * @param {string} api URI to the foreign API.
     */
    constructor(api) {
        this.api = new mw.ForeignApi(api);
    }

    /**
     * @param {any} module
     * @returns {Promise<APIModuleDict>}
     */
    processAndLoadSubmodules = async (module) => {
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
    };

    /**
     * @param {string[]} paths Module paths
     * @returns {Promise<RawModule[]>} Module data
     */
    queryModules = (paths) => {
        log("Querying module data...", paths);

        /** @type {mw.Api.Params.Action.ParamInfo & mw.Api.Params.Format.Json} */
        const params = {
            action: "paraminfo",
            format: "json",
            modules: paths,
            formatversion: 2,
        };

        const { promise, resolve, reject } = Promise.withResolvers();
        this.api.get(params).then((response) => resolve(response.paraminfo.modules), reject);
        return promise;
    };

    /**
     * Get module data from the API.
     * @param {string[]} paths Module paths
     * @returns {Promise<APIModuleDict>} Module data
     */
    getModules = async (paths) => {
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
    };

    load = () => this.getModules(["main"]).then((m) => m["main"]);
}

class ModuleMerger {
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
    extract = (key, o, o1, o2, path, merge, ...args) => {
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
    };

    /**
     * @template T
     * @param {T} v1
     * @param {T} v2
     * @param {string} path
     * @param {T} [def]
     */
    expectSame = (v1, v2, path, def) => {
        if (v1 === v2) {
            return v1;
        }
        if (def !== undefined) {
            return def;
        }
        throw `Found different values ("${v1}" and "${v2}") for "${path}".`;
    };

    /**
     * @template T
     * @template {unknown[]} U
     * @param {T[] | undefined} a1
     * @param {T[] | undefined} a2
     * @param {string} path
     * @param {(v1: T, v2: T, path: string, ...args: U) => T} [merge]
     * @param {U} args
     */
    expectSameSizeArray = (a1, a2, path, merge, ...args) => {
        if (a1 === undefined && a1 === undefined) {
            return undefined;
        }
        if (a1 === undefined || a2 === undefined || a1.length !== a2.length) {
            throw `Found arrays of different lengths ("${a1?.length ?? 0}" and "${
                a2?.length ?? 0
            }") for "${path}".`;
        }
        return merge ? a1.map((v1, i) => merge(v1, a2[i], `${path}[${i}]`, ...args)) : [...a1];
    };

    /**
     * @param {boolean | undefined} v1
     * @param {boolean | undefined} v2
     * @param {string} _
     */
    mergeRequired = (v1, v2, _) => {
        if (v1 === undefined || v2 === undefined) {
            return undefined;
        }
        return v1 && v2;
    };

    /**
     * @param {number | undefined} v1
     * @param {number | undefined} v2
     * @param {string} _
     */
    mergeMin = (v1, v2, _) => {
        if (v1 === undefined || v2 === undefined) {
            return undefined;
        }
        return Math.min(v1, v2);
    };

    /**
     * @param {number | undefined} v1
     * @param {number | undefined} v2
     * @param {string} _
     */
    mergeMax = (v1, v2, _) => {
        if (v1 === undefined || v2 === undefined) {
            return undefined;
        }
        return Math.max(v1, v2);
    };

    /**
     * @template T
     * @param {T[] | undefined} a1
     * @param {T[] | undefined} a2
     * @param {string} _
     */
    mergeKeyArray = (a1, a2, _) => {
        if (a1 === undefined) {
            return a2;
        }
        if (a2 === undefined) {
            return a1;
        }
        return new Set([...a1, ...a2]).values().toArray();
    };

    /**
     * @template T
     * @template {unknown[]} U
     * @param {Record<string, T> | undefined} o1
     * @param {Record<string, T> | undefined} o2
     * @param {string} path
     * @param {(v1: T, v2: T, path: string, ...args: U) => T} [merge]
     * @param {U} args
     */
    mergeObject = (o1, o2, path, merge, ...args) => {
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
    };

    /**
     * @param {string | string[]} t1
     * @param {string | string[]} t2
     * @param {string} path
     */
    mergeParameterType = (t1, t2, path) => {
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
    };

    /**
     * @param {RawModuleParam} p1
     * @param {RawModuleParam} p2
     * @param {string} path
     */
    mergeParameter = (p1, p2, path) => {
        /** @type {RawModuleParam} */
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
        this.extract("required", p, p1, p2, path, this.mergeRequired);
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
    };

    /**
     * @param {RawModuleParam[]} a1
     * @param {RawModuleParam[]} a2
     * @param {string} path
     */
    mergeParameterArray = (a1, a2, path) => {
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
    };

    /**
     * @param {RawModule} m1
     * @param {RawModule} m2
     * @param {string} path
     */
    mergeModule = (m1, m2, path) => {
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
    };

    /**
     * @param {RawModule} m1
     * @param {RawModule} m2
     */
    merge = (m1, m2) => {
        try {
            return this.mergeModule(m1, m2, m1.path);
        } catch (e) {
            logError(e);
            return m1;
        }
    };
}

/**
 * @param {string} s
 */
function firstToUppercase(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

class ModuleParser {
    /**
     * Try to find a suitable module name for TS formatting.
     * Name generation used before PR #41, used in type aliases for compatibility.
     *
     * @param {RawModule} rawModule API module data.
     * @returns Formatted module name, `false` if the module did not have an interface.
     */
    findOldModuleName = (rawModule) => {
        if (rawModule.path.includes("+") && !rawModule.path.startsWith("query+")) {
            return false;
        }

        return (
            rawModule.classname
                .replace(/\\/g, "")
                .replace(/^MediaWikiApi/g, "Api")
                .replace(/^MediaWikiExtensions?/g, "")
                .replace(/ApiApi/g, "Api") + "Params"
        );
    };

    /**
     * Try to find a suitable module name for TS formatting.
     *
     * @param {RawModule} rawModule API module data
     * @returns Formatted module name (and source if not from MediaWiki)
     */
    findModuleName = (rawModule) => {
        const result = {
            name: rawModule.name,
            source: rawModule.source === "MediaWiki" ? "" : rawModule.source.replace(/[\s-]/g, ""),
        };

        // Main module.
        if (!rawModule.group) {
            result.name = "Params";
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
         * Recursively replace prefixes and suffixes of the module name.
         *
         * @param {string} name
         * @returns {{ name: string, optimal: boolean }}
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
            log(
                `Could not find a proper name capitalization for module "${rawModule.name}", using "${result.name}".`
            );
        }

        return result;
    };

    /**
     * @param {RawModuleParam} rawParameter
     */
    findParameterName = (rawParameter) => {
        return firstToUppercase(rawParameter.name);
    };

    /**
     * Get some data about a module parameter.
     * @param {ModuleData} module Formatted module data
     * @param {RawModuleParam} rawParameter API parameter data
     */
    processParameter = (module, rawParameter) => {
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
    };

    /**
     * Get some data about a module interface.
     * @param {RawModule} rawModule API module data
     * @param {string} [prefix]
     * @param {ParentPath} [parent] API data of the module this one is an extension of
     * @returns {ModuleData}
     */
    processModule = (rawModule, prefix, parent) => {
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

        const oldName = this.findOldModuleName(rawModule);
        if (oldName !== false) {
            module.oldName = oldName;
        }

        if (parent) {
            module.parents.push(parent);
        }

        const rawParameters = rawModule.parameters.toSorted((p1, p2) => p1.index - p2.index);

        module.parameters = rawParameters.map((rawParameter) =>
            this.processParameter(module, rawParameter)
        );

        return module;
    };
}

class ModuleFormatter {
    /**
     * @type {Record<string, string[]>};
     */
    deprecatedAliases = {};

    /**
     * @param {string} s
     */
    quote = (s) => {
        return `"${s}"`;
    };

    /**
     * @param {string} s
     */
    indent = (s) => {
        if (s !== "") {
            s = " ".repeat(4) + s;
        }
        return s;
    };

    /**
     * @template T
     * @param {Array<string|T>} block
     */
    flatWithLine = (block) => {
        if (!block.length) {
            return [];
        }

        const newBlock = [block[0]];
        for (let i = 1; i < block.length; ++i) {
            newBlock.push("", block[i]);
        }

        return newBlock.flat(1);
    };

    /**
     * @param {ModuleData} source
     * @param {ModuleFormatter.ParentStack} parentStack
     */
    formatParameterPrefix = (source, parentStack) => {
        let prefix = source.prefix;
        for (let parent = parentStack; parent !== null; parent = parent.next) {
            prefix = `${parent.path.parameter.module.prefix}${prefix}`;
        }
        return prefix;
    };

    /**
     * Disable a linter rule for the next line.
     * @param {string} name Rule name
     * @returns TS string line
     */
    disableRule = (name) => {
        return `// tslint:disable-next-line:${name}`;
    };

    /**
     * @param {JSdocData|undefined} jsdoc
     */
    formatJSdoc = (jsdoc) => {
        jsdoc ??= {};

        /** @type {LineBlock} */
        const lineBlock = [];

        if (jsdoc.description !== undefined) {
            lineBlock.push(jsdoc.description);
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
            tags.push(...jsdoc.seelinks.map((l) => `@see ${l}`));
        }

        if (tags.length) {
            lineBlock.push(tags);
        }

        return lineBlock.length
            ? ["/**", ...this.flatWithLine(lineBlock).map((l) => ` * ${l}`), " */"]
            : [];
    };

    /**
     * @param {LineBlock} content
     */
    formatGlobal = (content) => {
        return ["declare global {", ...this.flatWithLine(content).map(this.indent), "}"];
    };

    /**
     * @param {string} name
     * @param {LineBlock} content
     * @param {ModuleFormatter.DeclarationModifier} [modifier]
     */
    formatNamespace = (name, content, modifier) => {
        return [
            `${modifier ? `${modifier} ` : ""}namespace ${name} {`,
            ...this.flatWithLine(content).map(this.indent),
            "}",
        ];
    };

    /**
     * Format an interface parameter as a TS string.
     * @param {PropertyData} prop Interface parameter data
     * @returns {string[]}
     */
    formatProperty = (prop) => {
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

        return [...this.formatJSdoc(prop.jsdoc), `${key}: ${type};`];
    };

    /**
     * @param {string} name
     * @param {PropertyData[]} properties
     * @param {InterfaceOptions} [options]
     * @returns {string[]}
     */
    formatInterface = (name, properties, options) => {
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
    };

    /**
     * Format a module interface as a TS string.
     * @param {ModuleData} module Module interface data
     * @param {ModuleFormatter.ParentStack} parentStack
     * @returns {LineBlock}
     */
    formatModule = (module, parentStack) => {
        const parameterPrefix = this.formatParameterPrefix(module, parentStack);

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
        const options = {};

        // Set parent interface, and overload parameter from parent interface
        if (parentStack !== null) {
            const parameter = parentStack.path.parameter;
            options.parent = parameter.module.name;
            if (!parameter.multi) {
                prefixedParameters.unshift({
                    ...parameter,
                    type: [parentStack.path.value],
                    // required: false,
                });
            }
        }

        /** @type {LineBlock} */
        const types = [];

        types.push([
            ...this.formatJSdoc(module.jsdoc),
            ...this.formatInterface(module.name, prefixedParameters, options),
        ]);

        /** @type {[string, LineBlock][]} */
        const submoduleBlocks = [];
        for (const submoduleSet of submoduleSets) {
            const parameter = submoduleSet.parameter;
            /** @type {LineBlock} */
            const submoduleBlock = [];

            for (const [value, submodule] of submoduleSet.values) {
                const path = { parameter, value };
                submoduleBlock.push(...this.formatModule(submodule, { path, next: parentStack }));
            }

            if (submoduleBlock.length) {
                submoduleBlocks.push([parameter.name, submoduleBlock]);
            }
        }

        if (submoduleBlocks.length === 1) {
            const [parameterName, submoduleBlock] = submoduleBlocks[0];
            types.push(this.formatNamespace(`${module.name}.${parameterName}`, submoduleBlock));
        } else if (submoduleBlocks.length) {
            const submoduleNamespaces = submoduleBlocks.map(([parameterName, submoduleBlock]) =>
                this.formatNamespace(parameterName, submoduleBlock)
            );
            types.push(this.formatNamespace(module.name, submoduleNamespaces));
        }

        if (module.oldName) {
            const nameParts = [module.name];
            for (let parent = parentStack; parent !== null; parent = parent.next) {
                nameParts.unshift(parent.path.parameter.module.name, parent.path.parameter.name);
            }

            this.deprecatedAliases[module.oldName] ??= [];
            this.deprecatedAliases[module.oldName].push(nameParts.join("."));
        }

        return types;
    };

    formatDeprecatedAliases = () => {
        return Object.entries(this.deprecatedAliases).map(([typeName, targetNames]) => [
            `/** @deprecated Use ${targetNames
                .map((t) => `{@link mw.Api.${t} \`Partial<mw.Api.${t}>\`}`)
                .join(" / ")} instead. */`,
            `export type ${typeName} = Partial<mw.Api.${targetNames[0]}>;`,
        ]);
    };

    /**
     * Format some module interface data as a TS declaration file.
     * @param {ModuleData} rootModule Formatted module data
     * @returns {string[]}
     */
    formatContent = (rootModule) => {
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
            this.formatGlobal([
                this.formatNamespace("mw.Api", this.formatModule(rootModule, null)),
            ]),
            ...this.formatDeprecatedAliases(),
            "export {};",
        ]);
    };
}

const loaders = Object.values(SOURCES).map((s) => new ModuleLoader(s));
const merger = new ModuleMerger();
const parser = new ModuleParser();
const formatter = new ModuleFormatter();

const rawRootModules = await Promise.all(loaders.map((l) => l.load()));
const rawRootModule = rawRootModules.reduce(merger.merge);
const rootModule = parser.processModule(rawRootModule);
console.log(formatter.formatContent(rootModule).join("\n"));
