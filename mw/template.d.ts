type CompiledTemplate = any; // Can this be made more specific?

interface Compiler {
    compile: (src: string) => CompiledTemplate;
}

declare global {
    namespace mw {
        /**
         * Requires mediawiki.template ResourceLoader module
         *
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.template
         */
        namespace template {
            /**
             * Register a new compiler.
             *
             * A compiler is any object that implements a compile() method. The compile() method must
             * return a Template interface with a method render() that returns HTML.
             *
             * The compiler name must correspond with the name suffix of templates that use this compiler.
             *
             * @param {string} name Compiler name
             * @param {Object} compiler
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.template-method-registerCompiler
             */
            function registerCompiler(name: string, compiler: Compiler): void;

            /**
             * Get the name of the associated compiler based on a template name.
             *
             * @param {string} templateName Name of a template (including suffix)
             * @return {string} Name of a compiler
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.template-method-getCompilerName
             */
            function getCompilerName(templateName: string): string;

            /**
             * Get a compiler via its name.
             *
             * @param {string} name Name of a compiler
             * @return {Object} The compiler
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.template-method-getCompiler
             */
            function getCompiler(name: string): Compiler;

            /**
             * Register a template associated with a module.
             *
             * Precompiles the newly added template based on the suffix in its name.
             *
             * @param {string} moduleName Name of the ResourceLoader module the template is associated with
             * @param {string} templateName Name of the template (including suffix)
             * @param {string} templateBody Contents of the template (e.g. html markup)
             * @return {Object} Compiled template
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.template-method-add
             */
            function add(
                moduleName: string,
                templateName: string,
                templateBody: string
            ): CompiledTemplate;

            /**
             * Get a compiled template by module and template name.
             *
             * @param {string} moduleName Name of the module to retrieve the template from
             * @param {string} templateName Name of template to be retrieved
             * @return {Object} Compiled template
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.template-method-get
             */
            function get(moduleName: string, templateName: string): CompiledTemplate;

            /**
             * Compile a string of template markup with an engine of choice.
             *
             * @param {string} templateBody Template body
             * @param {string} compilerName The name of a registered compiler
             * @return {Object} Compiled template
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.template-method-compile
             */
            function compile(templateBody: string, compilerName: string): CompiledTemplate;
        }
    }
}

export {};
