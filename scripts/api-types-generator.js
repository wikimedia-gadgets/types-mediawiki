// Paste this into the browser console
// and copy the console log output

/** @type {import("..")} */
/** @type {import("../api_params")} */

/**
 * Where to look API types from.
 * @type {Record<string, string>}
 */
const SOURCES = {
    "mediawiki": "https://www.mediawiki.org/w/api.php",
    "translatewiki": "https://translatewiki.net/w/api.php",
    "wikibooks-en": "https://en.wikibooks.org/w/api.php",
    "wikidata": "https://www.wikidata.org/w/api.php",
    "wikifunctions": "https://www.wikifunctions.org/w/api.php",
    "wikimedia-commons": "https://commons.wikimedia.org/w/api.php",
    "wikipedia-en": "https://en.wikipedia.org/w/api.php",
    "wikimedia-meta": "https://meta.wikimedia.org/w/api.php",
    "wikipedia-test": "https://test.wikipedia.org/w/api.php",
    "wikisource-en": "https://en.wikisource.org/w/api.php",
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
    allfileusages: "QueryAllFileUsages",
    allredirects: "QueryAllRedirects",
    alltransclusions: "QueryAllTransclusions",
    embeddedin: "QueryEmbeddedIn",
    fileusage: "QueryFileUsage",
    imageusage: "QueryImageUsage",
    linkshere: "QueryLinksHere",
    redirects: "QueryRedirects",
    templates: "QueryTemplates",
    transcludedin: "QueryTranscludedIn",
    unlinkaccount: "QueryUnlinkAccount",
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
 * @property {RawModule.Param[]} [parentparameter]
 * @property {RawModule.Param[]} parameters
 * @property {RawModule.Param.Template[]} templatedparameters
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
 */
/**
 * @typedef {RawModule.Param & RawModule.Param.Template._} RawModule.Param.Template
 */
/**
 * @typedef RawModule.Param.Template._
 * @property {Record<string, string>} templatevars
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
        this.loadSubmodules = this.loadSubmodules.bind(this);

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
    async loadSubmodules(module) {
        /** @type {Array<Promise<APIModuleDict>>} */
        const promises = [];

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
                        submodule.parentparameter ??= [];
                        submodule.parentparameter.push(parameter);
                        submodules[key] = submodule;
                    }
                    return submoduleData;
                });
                promises.unshift(submodulePromise);
            }
        }

        for (const parameter of module.templatedparameters) {
            parameter.module = module;
        }

        return Object.assign({}, ...(await Promise.all(promises)));
    }

    /**
     * @param {string[]} paths Module paths
     * @returns {Promise<RawModule[]>} Module data
     */
    queryModules(paths) {
        this.logger("Querying module data...", paths);

        const apiRequest = this.api.get({
            action: "paraminfo",
            format: "json",
            modules: paths,
            formatversion: 2,
        });

        return new Promise((resolve, reject) => {
            apiRequest.then((response) => resolve(response.paraminfo.modules), reject);
        });
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
            if (!path.includes("*") && Object.hasOwn(this.cache, path)) {
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
                const submoduleData = await Promise.all(modules.flatMap(this.loadSubmodules));
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

        if (result.name in NAME_PATH_MAP) {
            result.name = NAME_PATH_MAP[result.name];
            return result;
        }

        // main module
        if (!rawModule.group) {
            result.name = "";
            return result;
        }

        // "format" module
        if (rawModule.group === "format") {
            result.name = firstToUppercase(result.name).replace("fm", "FM");
            return result;
        }

        // try to find the module name in the source or classname for proper capitalization
        let formatted = "";
        let toFormat = result.name.replace(/-/g, "");
        if (result.source) {
            for (const word of Array.from(result.source.matchAll(/[A-Z][^A-Z]*/g), (m) => m[0])) {
                const wordIndex = toFormat.indexOf(word.toLowerCase());
                if (wordIndex === 0) {
                    formatted += word;
                    toFormat = toFormat.substring(word.length);
                }
            }
        }
        const plainClassName = rawModule.classname.replace(/Api|Extensions?|\\/g, "") + "s";
        const nameIndex = plainClassName.toLowerCase().indexOf(toFormat);
        if (nameIndex >= 0) {
            result.name =
                formatted + plainClassName.substring(nameIndex, nameIndex + toFormat.length);
            return result;
        }

        // otherwise, just uppercase the 1st letter
        result.name = result.name
            .split("-")
            .map((v) => v[0].toUpperCase() + v.slice(1))
            .join("");
        console.warn(
            `Could not find a proper name capitalization for module "${rawModule.name}", using "${result.name}".`
        );
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
     * @param {RawModule.Param|RawModule.Param.Template} rawParameter API parameter data
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
            const isUsedAsTemplateVariable = rawModule.templatedparameters.some((p) =>
                Object.values(p.templatevars).includes(rawParameter.name)
            );

            // we do not have a generic way to detect which parameters may get unspecified new values,
            // so for now we generalize all parameter types referenced in templated parameters
            // to be sure we are not being too specific
            if (NAME_TYPE_GENERALIZE.includes(rawParameter.name) || isUsedAsTemplateVariable) {
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

        if ("templatevars" in rawParameter) {
            const varPattern = new RegExp(
                `\\{(${Object.keys(rawParameter.templatevars).join("|")})\\}`,
                "g"
            );
            parameter.template = true;
            parameter.key = parameter.key.replaceAll(varPattern, (_, varName) => {
                const varParam = rawParameter.templatevars[varName];
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

        const rawParameters = [...rawModule.parameters, ...rawModule.templatedparameters];
        rawParameters.sort((p1, p2) => p1.index - p2.index);

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
        this.formatModule = this.formatModule.bind(this);
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
     * @param {string} name
     * @param {string} mapName
     * @param {boolean} [exported]
     * @returns {string}
     */
    formatKeyType(name, mapName, exported) {
        let line = `type ${name} = keyof ${mapName};`;
        if (exported) {
            line = `export ${line}`;
        }

        return line;
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
            type = type.map(this.quote).join(" | ");
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

        const paramsName = `${this.formatModuleName(module)}Params`;

        /** @type {LineBlock<2>} */
        const types = [];

        // Sub-module interfaces & key types
        for (const submoduleSet of submoduleSets) {
            const parameter = submoduleSet.parameter;
            const enumName = `${paramsName}${parameter.name}`;
            const mapName = `${enumName}Map`;

            parameter.type = enumName;

            types.push(this.formatKeyType(enumName, mapName));
            types.push(
                this.formatInterface(
                    mapName,
                    submoduleSet.values.map(([value, submodule]) => {
                        this.pathStack.push({ parameter, value });
                        const type = `${this.formatModuleName(submodule)}Params`;
                        this.pathStack.pop();
                        return {
                            key: value,
                            type,
                            required: true,
                        };
                    })
                )
            );
        }

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

        types.unshift(
            this.addJsdoc(
                module.jsdoc,
                this.formatInterface(paramsName, prefixedParameters, options)
            )
        );

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

const loader = new ModuleLoader("https://en.wikipedia.org/w/api.php");
const parser = new ModuleParser();
const formatter = new ModuleFormatter();

const rawRootModule = await loader.getRootModule();
const rootModule = parser.processModule(rawRootModule);
console.log(formatter.formatContent(rootModule).join("\n"));
// Object.values(await getModules())
//     .map((m) => `${m.source}\t${m.path}`)
//     .sort()
//     .join("\n");
