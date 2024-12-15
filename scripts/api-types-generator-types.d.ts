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
    /**
     * Raw API module data.
     */
    interface RawModule {
        name: string;
        classname: string[];
        path: string;
        group?: string;
        prefix: string;
        source?: string;
        sourcename: string;
        licensetag: string;
        licenselink: string;
        description: string;
        internal?: boolean;
        readrights?: boolean;
        writerights?: boolean;
        mustbeposted?: boolean;
        deprecated?: boolean;
        generator?: boolean;
        helpurls: string[];
        examples: RawModule.Example[];
        parameters: RawModule.Parameter[];
        dynamicparameters?: string;
    }

    namespace RawModule {
        interface Example {
            query: string;
            description: string;
        }

        /**
         * Raw API module parameter data.
         */
        interface Parameter {
            index: number;
            module: RawModule;
            name: string;
            description: string;
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
            submodules?: Record<string, string>;
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

    /**
     * Processed API module data.
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
        /**
         * Full parameter prefix.
         */
        prefix: string;
        /**
         * Module JSdoc.
         */
        jsdoc?: Declaration.JSdoc;
    }

    /**
     * If it is not an API root module, indicates a parameter and associated value providing this
     * module as a sub-module.
     */
    interface ParentPath {
        parameter: Parameter;
        value: string;
    }

    /**
     * Processed API parameter data.
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
         * Whether the type name is a string template or literal.
         */
        template?: boolean;
        /**
         * TS type.
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
        /**
         * TS type of an API module parameter.
         */
        type Type = Type.Single | Type.Multi;

        namespace Type {
            interface Base {
                /**
                 * Native type or map of submodules.
                 */
                base?: string | Record<string, Module>;
                /**
                 * Possible literals, that may not be part of the base type above.
                 */
                lits?: Set<string>;
                /**
                 * Whether literals can be specified as a list.
                 */
                multi?: boolean;
            }

            interface Single extends Base {
                multi?: false;
            }

            interface Multi extends Base {
                multi: true;
                /**
                 * Possible literals, that may not be part of the base type above, and can not be
                 * used in a list.
                 */
                singleLits?: Set<string>;
            }
        }
    }

    /**
     * Stack of parent module parameters of a sub-module.
     */
    type ParentStack =
        | {
              path: ParentPath;
              next: ParentStack;
          }
        | undefined;

    /**
     * Type declaration (either a type alias or interface).
     */
    type Declaration = Declaration.Type | Declaration.Interface;

    namespace Declaration {
        /**
         * Something.
         */
        interface Base {
            /**
             * JSdoc declaration.
             */
            jsdoc?: JSdoc;
        }

        /**
         * Something that can be exported.
         */
        interface Standalone extends Base {
            /**
             * Declaration modifier.
             */
            modifier?: Modifier;
        }

        /**
         * Something that is a type-like declaration.
         */
        interface Extendable extends Standalone {
            /**
             * Type name.
             */
            name: string;
            /**
             * List of template type variables.
             */
            template?: string[];
        }

        /**
         * Namespace declaration.
         */
        interface Namespace extends Standalone {
            /**
             * Type declarations.
             */
            declarations?: Declaration[];
            /**
             * Sub-namespaces.
             */
            subnamespaces?: Record<string, Namespace>;
            /**
             * Set of deprecated type aliases.
             */
            deprecated?: Record<string, DeprecationTarget[]>;
        }

        /**
         * Type alias declaration.
         */
        interface Type extends Extendable {
            /**
             * Type expression.
             */
            type: string;
        }

        /**
         * Interface declaration.
         */
        interface Interface extends Extendable {
            /**
             * Set of parent types to inherit from.
             */
            parents: string[];
            /**
             * Ordered list of properties.
             */
            properties: Property[];
        }

        /**
         * Interface property declaration.
         */
        interface Property extends Base {
            /**
             * Property name, as an interpolated TS string if `template`, otherwise as a string
             * literal.
             */
            name: string;
            /**
             * True if the property name is an interpolated TS string, false or undefined if it is
             * a single literal.
             */
            template?: boolean;
            /**
             * Property type.
             */
            type: string;
            /**
             * True if the property is required, false or undefined if it is optional.
             */
            required?: boolean;
        }

        /**
         * Declaration modifier.
         */
        type Modifier = CombinationOf<["export", "declare"]>;

        /**
         * JSdoc declaration, associated to something.
         */
        interface JSdoc {
            /**
             * JSdoc-compatible description.
             */
            description?: string[];
            /**
             * True if the thing is private (and that can not be expressed with the TS type system),
             * false or undefined otherwise.
             */
            private?: boolean;
            /**
             * True or a JSdoc-compatible message if the thing is deprecated, false or undefined
             * otherwise.
             */
            deprecated?: string | boolean;
            /**
             * List of related links to include at the end of the JSdoc.
             */
            seelinks?: string[];
        }
    }

    /**
     * Possible replacement of a deprecated type alias.
     */
    interface DeprecationTarget {
        /**
         * Replacement type expression.
         */
        type: string;
        /**
         * Link to put on the replacement type expression, used in JSdoc.
         */
        link?: string;
    }
}

export {};
