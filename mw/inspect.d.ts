declare global {
    namespace mw {
        /**
         * Tools for inspecting page composition and performance.
         *
         * @class mw.inspect
         * @singleton
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.inspect
         */
        const inspect: {
            /**
             * @inheritdoc mw.inspect#runReports
             * @method
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-method-inspect
             */
            (): void;

            /**
             * Given CSS source, count both the total number of selectors it
             * contains and the number which match some element in the current
             * document.
             *
             * @param {string} css CSS source
             * @return {Object} Selector counts
             * @return {number} return.selectors Total number of selectors
             * @return {number} return.matched Number of matched selectors
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.inspect-method-auditSelectors
             */
            auditSelectors(css: string): {
                selectors: number;
                matched: number;
            };

            /**
             * Print tabular data to the console using console.table.
             *
             * @param {Array} data Tabular data represented as an array of objects
             *  with common properties.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.inspect-method-dumpTable
             */
            dumpTable: typeof console.table;

            /**
             * Return a map of all dependency relationships between loaded modules.
             *
             * @return {Object} Maps module names to objects. Each sub-object has
             *  two properties, 'requires' and 'requiredBy'.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.inspect-method-getDependencyGraph
             */
            getDependencyGraph(): Record<string, { requires: string[]; requiredBy: string[] }>;

            /**
             * Get a list of all loaded ResourceLoader modules.
             *
             * @return {Array} List of module names
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.inspect-method-getLoadedModules
             */
            getLoadedModules(): string[];

            /**
             * Calculate the byte size of a ResourceLoader module.
             *
             * @param {string} moduleName The name of the module
             * @return {number|null} Module size in bytes or null
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.inspect-method-getModuleSize
             */
            getModuleSize(moduleName: string): number | null;

            /**
             * Perform a string search across the JavaScript and CSS source code
             * of all loaded modules and return an array of the names of the
             * modules that matched.
             *
             * @param {string|RegExp} pattern String or regexp to match.
             * @return {Array} Array of the names of modules that matched.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.inspect-method-grep
             */
            grep(pattern: string | RegExp): string[];

            /**
             * Generate and print reports.
             *
             * When invoked without arguments, prints all available reports.
             *
             * @param {...string} [reports] One or more of "size", "css", "store", or "time".
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.inspect-method-runReports
             */
            runReports(report?: string, ...reports: string[]): void;

            /**
             * @private
             * @class mw.inspect.reports
             * @singleton
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.inspect.reports
             */
            reports: {
                /**
                 * For each module with styles, count the number of selectors, and
                 * count how many match against some element currently in the DOM.
                 *
                 * @return {Object[]} CSS reports
                 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.inspect.reports-method-css
                 */
                css(): any[];

                /**
                 * Generate a breakdown of all loaded modules and their size in
                 * kibibytes. Modules are ordered from largest to smallest.
                 *
                 * @return {Object[]} Size reports
                 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.inspect.reports-method-size
                 */
                size(): any[];

                /**
                 * Report stats on mw.loader.store: the number of localStorage
                 * cache hits and misses, the number of items purged from the
                 * cache, and the total size of the module blob in localStorage.
                 *
                 * @return {Object[]} Store stats
                 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.inspect.reports-method-store
                 */
                store(): any[];

                /**
                 * Generate a breakdown of all loaded modules and their time
                 * spent during initialisation (measured in milliseconds).
                 *
                 * This timing data is collected by mw.loader.profiler.
                 *
                 * @return {Object[]} Table rows
                 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.inspect.reports-method-time
                 */
                time(): any[];
            };
        };
    }
}

export {};
