// Types for api-types-generator.js

import "..";
import "../api_params";

type CombinationOf<T extends string[], S extends string = " "> = T extends [infer U, ...infer T2]
    ? U extends string
        ? T2 extends string[]
            ? U | `${U}${S}${CombinationOf<T2, S>}` | CombinationOf<T2, S>
            : never
        : never
    : never;

declare global {
    type LineBlock = string[][];

    interface RawModule {
        name: string;
        classname: string[];
        path: string;
        group?: string;
        prefix: string;
        source: string;
        sourcename: string;
        licensetag: string;
        licenselink: string;
        internal?: boolean;
        readrights?: boolean;
        writerights?: boolean;
        mustbeposted?: boolean;
        deprecated?: boolean;
        generator?: boolean;
        helpurls: string[];
        parameters: RawModule.Parameter[];
        dynamicparameters?: boolean;
    }

    namespace RawModule {
        interface Parameter {
            index: number;
            module: RawModule;
            name: string;
            type: Parameter.Type;
            required?: boolean;
            default?: unknown;
            multi?: boolean;
            allowsduplicates?: boolean;
            limit?: number;
            lowlimit?: number;
            highlimit?: number;
            sensitive?: boolean;
            deprecated?: boolean;
            templatevars?: Record<string, string>;
            info?: Parameter.Info[];
            // integer, limit
            min?: number;
            max?: number;
            // limit
            highmax?: number;
            // namespace, enum
            allspecifiers?: string[];
            // namespace
            extranamespaces?: number[];
            // string
            maxbytes?: number;
            maxchars?: number;
            tokentype?: string;
            // title
            mustExist?: boolean;
            // user
            subtypes?: string[];
            // enum
            submodules?: Record<string, RawModule>;
            submoduleparamprefix?: string;
            internalvalues?: string[];
            deprecatedvalues?: string[];
        }

        namespace Parameter {
            interface Info {
                name: string;
            }

            type Type =
                | "boolean"
                | "expiry"
                | "integer"
                | "limit"
                | "namespace"
                | "password"
                | "raw"
                | "string"
                | "text"
                | "timestamp"
                | "title"
                | "upload"
                | "user"
                | string[];
        }
    }

    type RawModuleDict = Record<string, RawModule>;

    /**
     * Pre-processed API module data.
     */
    interface Module {
        /**
         * API module path.
         */
        path: string;
        /**
         * Formatted extension name.
         */
        source: string;
        /**
         * Formatted module name.
         */
        name: string;
        /**
         * Interfaces to inherit from.
         */
        parents: ParentPath[];
        /**
         * Sorted list of properties.
         */
        parameters: Parameter[];
        prefix: string;
        jsdoc?: Declaration.JSdoc;
    }

    /**
     * If it is not an API root module, indicates a parameter and associated value providing this module as a sub-module.
     */
    interface ParentPath {
        parameter: Parameter;
        value: string;
    }

    /**
     * Pre-processed API parameter data.
     */
    interface Parameter {
        /**
         * Property name.
         */
        key: string;
        /**
         * Formatted parameter name.
         */
        name: string;
        /**
         * Interface data.
         */
        module: Module;
        /**
         * Whether the type name is a string template or litteral.
         */
        template?: boolean;
        /**
         * Type.
         */
        type: Parameter.Type;
        /**
         * Whether the parameter is required or optional.
         */
        required: boolean;
        /**
         * Default parameter value.
         */
        default?: unknown;
        jsdoc?: Declaration.JSdoc;
    }

    namespace Parameter {
        type Type = Type.Single | Type.Multi;

        namespace Type {
            interface Base {
                /**
                 * Native type or map of submodules.
                 */
                base?: string | Record<string, Module>;
                /**
                 * Possible litterals, that may not be part of the base type above.
                 */
                lits?: Set<string>;
                /**
                 * Whether litterals can be specified as a list.
                 */
                multi?: boolean;
            }

            interface Single extends Base {
                multi?: false;
            }

            interface Multi extends Base {
                multi: true;
                /**
                 * Possible litterals, that may not be part of the base type above, and can not be used in a list.
                 */
                singleLits?: Set<string>;
            }
        }
    }

    type ParentStack =
        | {
              path: ParentPath;
              next: ParentStack;
          }
        | undefined;

    type Declaration = Declaration.Type | Declaration.Interface;

    namespace Declaration {
        interface Base {
            jsdoc?: JSdoc;
        }

        interface Standalone extends Base {
            modifier?: Modifier;
        }

        interface Extendable extends Standalone {
            name: string;
            template?: string[];
        }

        interface Namespace extends Standalone {
            declarations?: Declaration[];
            subnamespaces?: Record<string, Namespace>;
            deprecated?: Record<string, DeprecationTarget[]>;
        }

        interface Type extends Extendable {
            type: string;
        }

        interface Interface extends Extendable {
            parents: string[];
            properties: Property[];
        }

        interface Property extends Base {
            name: string;
            template?: boolean;
            type: string;
            required?: boolean;
        }

        type Modifier = CombinationOf<["export", "declare"]>;

        interface JSdoc {
            description?: string[];
            private?: boolean;
            deprecated?: string | boolean;
            seelinks?: string[];
        }
    }

    interface DeprecationTarget {
        type: string;
        link?: string;
    }
}

export {};
