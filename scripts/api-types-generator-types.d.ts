// Types for api-types-generator.js

import "..";
import "../api_params";

declare global {
    type LineBlock = (string | string[])[];

    interface RawModule {
        name: string;
        classname: string;
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
        parameters: RawModuleParam[];
        dynamicparameters?: boolean;
    }

    interface RawModuleParam {
        index: number;
        module: RawModule;
        name: string;
        type: string | string[];
        default?: unknown;
        multi?: boolean;
        lowlimit?: number;
        highlimit?: number;
        limit?: number;
        min?: number;
        max?: number;
        mustExist?: boolean;
        required?: boolean;
        sensitive?: boolean;
        deprecated?: boolean;
        allspecifier?: string;
        subtypes?: string[];
        submodules?: Record<string, RawModule>;
        submoduleparamprefix?: string;
        internalvalues?: string[];
        tokentype?: string;
        templatevars?: Record<string, string>;
    }

    type APIModuleDict = Record<string, RawModule>;

    /**
     * Pre-processed API module data.
     */
    interface ModuleData {
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
        parameters: ParameterData[];
        prefix: string;
        jsdoc?: JSdocData;
    }

    /**
     * If it is not an API root module, indicates a parameter and associated value providing this module as a sub-module.
     */
    interface ParentPath {
        parameter: ParameterData;
        value: string;
    }

    /**
     * Pre-processed API parameter data.
     */
    interface ParameterData {
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
        module: ModuleData;
        /**
         * Whether the type name is a string template or litteral.
         */
        template?: boolean;
        /**
         * Type, list of possible values, or map of submodules.
         */
        type: string | string[] | Record<string, ModuleData>;
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

    type PropertyData = Omit<ParameterData, "module" | "name">;

    namespace ModuleFormatter {
        type DeclarationModifier = "declare" | "export" | "export declare";

        type ParentStack = {
            path: ParentPath;
            next: ParentStack;
        } | null;
    }
}

export {};
