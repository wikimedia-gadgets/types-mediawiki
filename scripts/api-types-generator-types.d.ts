// Types for api-types-generator.js

import "..";
import "../api_params";

declare global {
    type LineBlock = (string | string[])[];

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
        type Parameter =
            | (Parameter.Base<string[]> & Parameter.SubmoduleType)
            | {
                  [T in keyof Parameter.TypeMap]: Parameter.Base<T> & Parameter.TypeMap[T];
              }[keyof Parameter.TypeMap];

        namespace Parameter {
            interface Base<T extends string | string[]> {
                index: number;
                module: RawModule;
                name: string;
                type: T;
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
                info?: Info[];
            }

            interface Info {
                name: string;
            }

            interface TypeMap {
                boolean: BooleanType;
                expiry: ExpiryType;
                integer: IntegerType;
                limit: LimitType;
                namespace: NamespaceType;
                password: PasswordType;
                raw: RawType;
                string: StringType;
                title: TitleType;
                text: TextType;
                timestamp: TimestampType;
                upload: UploadType;
                user: UserType;
            }

            interface BooleanType {}

            interface ExpiryType {}

            interface IntegerType {
                min?: number;
                max?: number;
            }

            interface LimitType extends IntegerType {
                highmax?: number;
            }

            interface EnumType {
                allspecifier?: string;
            }

            interface NamespaceType extends EnumType {
                extranamespaces?: number[];
            }

            interface PasswordType {}

            interface RawType {}

            interface StringType {
                maxbytes?: number;
                maxchars?: number;
                tokentype?: string;
            }

            interface TextType {}

            interface TimestampType {}

            interface TitleType {
                mustExist?: boolean;
            }

            interface UploadType {}

            interface UserType {
                subtypes?: string[];
            }

            interface SubmoduleType extends EnumType {
                submodules?: Record<string, RawModule>;
                submoduleparamprefix?: string;
                internalvalues?: string[];
                deprecatedvalues?: string[];
            }
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
         * Formatted module name, before PR #41.
         */
        oldName?: string;
        /**
         * Interfaces to inherit from.
         */
        parents: ParentPath[];
        /**
         * Sorted list of properties.
         */
        parameters: Parameter[];
        prefix: string;
        jsdoc?: JSdocData;
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
         * Type, list of possible values, or map of submodules.
         */
        type: string | string[] | Record<string, Module>;
        /**
         * Whether multiple values can be specified as a list.
         */
        multi?: boolean;
        /**
         * Whether the parameter is required or optional.
         */
        required: boolean;
        /**
         * Default parameter value.
         */
        default?: unknown;
        jsdoc?: JSdocData;
    }

    /**
     * Some additional information about an API module or parameter.
     */
    interface JSdocData {
        description?: string | string[];
        private?: boolean;
        deprecated?: string | boolean;
        seelinks?: string[];
    }

    interface InterfaceOptions {
        parent?: string;
        exported?: boolean;
    }

    type PropertyData = Omit<Parameter, "module" | "name">;

    namespace ModuleFormatter {
        type DeclarationModifier = "declare" | "export" | "export declare";

        type ParentStack = {
            path: ParentPath;
            next: ParentStack;
        } | null;
    }
}

export {};
