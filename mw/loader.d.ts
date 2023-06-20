declare global {
    namespace mw {
        /**
         * Client for ResourceLoader server end point.
         *
         * This client is in charge of maintaining the module registry and state
         * machine, initiating network (batch) requests for loading modules, as
         * well as dependency resolution and execution of source code.
         *
         * For more information, refer to
         * <https://www.mediawiki.org/wiki/ResourceLoader/Features>
         *
         * @class mw.loader
         * @singleton
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader
         */
        namespace loader {
            /**
             * Create a new style element and add it to the DOM.
             *
             * @param {string} text CSS text
             * @param {Node|null} [nextNode] The element where the style tag
             *  should be inserted before
             * @return {HTMLStyleElement} Reference to the created style element
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-addStyleTag
             */
            function addStyleTag(text: string, nextNode?: Node | null): HTMLStyleElement;

            /**
             * Get the names of all registered ResourceLoader modules.
             *
             * @member mw.loader
             * @return {string[]}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-getModuleNames
             */
            function getModuleNames(): string[];

            /**
             * Load a script by URL.
             *
             * Example:
             *
             *     mw.loader.getScript(
             *         'https://example.org/x-1.0.0.js'
             *     )
             *         .then( function () {
             *             // Script succeeded. You can use X now.
             *         }, function ( e ) {
             *             // Script failed. X is not avaiable
             *             mw.log.error( e.message ); // => "Failed to load script"
             *         } );
             *     } );
             *
             * @member mw.loader
             * @param {string} url Script URL
             * @return {JQuery.Promise} Resolved when the script is loaded
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-getScript
             */
            function getScript(url: string): JQuery.Promise<any>;

            /**
             * Get the state of a module.
             *
             * @param {string} module Name of module
             * @return {string|null} The state, or null if the module (or its state) is not
             *  in the registry.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-getState
             */
            function getState(module: string): string | null;

            /**
             * Load an external script or one or more modules.
             *
             * This method takes a list of unrelated modules. Use cases:
             *
             * - A web page will be composed of many different widgets. These widgets independently
             *   queue their ResourceLoader modules (`OutputPage::addModules()`). If any of them
             *   have problems, or are no longer known (e.g. cached HTML), the other modules
             *   should still be loaded.
             * - This method is used for preloading, which must not throw. Later code that
             *   calls #using() will handle the error.
             *
             * @param {string|Array} modules Either the name of a module, array of modules,
             *  or a URL of an external script or style
             * @param {string} [type='text/javascript'] MIME type to use if calling with a URL of an
             *  external script or style; acceptable values are "text/css" and
             *  "text/javascript"; if no type is provided, text/javascript is assumed.
             * @throws {Error} If type is invalid
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-load
             */
            function load(modules: string | string[], type?: string): void;

            /**
             * Register a module, letting the system know about it and its properties.
             *
             * The startup module calls this method.
             *
             * When using multiple module registration by passing an array, dependencies that
             * are specified as references to modules within the array will be resolved before
             * the modules are registered.
             *
             * @param {string|Array} modules Module name or array of arrays, each containing
             *  a list of arguments compatible with this method
             * @param {string|number} [version] Module version hash (falls backs to empty string)
             *  Can also be a number (timestamp) for compatibility with MediaWiki 1.25 and earlier.
             * @param {string[]} [dependencies] Array of module names on which this module depends.
             * @param {string} [group=null] Group which the module is in
             * @param {string} [source='local'] Name of the source
             * @param {string} [skip=null] Script body of the skip function
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-register
             */
            function register(
                modules: string | string[],
                version?: string | number,
                dependencies?: string[],
                group?: string | null,
                source?: string,
                skip?: string | null
            ): void;

            /**
             * Change the state of one or more modules.
             *
             * @param {Object} states Object of module name/state pairs
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-state
             */
            function state(states: any): void;

            /**
             * Execute a function after one or more modules are ready.
             *
             * Use this method if you need to dynamically control which modules are loaded
             * and/or when they loaded (instead of declaring them as dependencies directly
             * on your module.)
             *
             * This uses the same loader as for regular module dependencies. This means
             * ResourceLoader will not re-download or re-execute a module for the second
             * time if something else already needed it. And the same browser HTTP cache,
             * and localStorage are checked before considering to fetch from the network.
             * And any on-going requests from other dependencies or using() calls are also
             * automatically re-used.
             *
             * Example of inline dependency on OOjs:
             *
             *     mw.loader.using( 'oojs', function () {
             *         OO.compare( [ 1 ], [ 1 ] );
             *     } );
             *
             * Example of inline dependency obtained via `require()`:
             *
             *     mw.loader.using( [ 'mediawiki.util' ], function ( require ) {
             *         var util = require( 'mediawiki.util' );
             *     } );
             *
             * Since MediaWiki 1.23 this returns a promise.
             *
             * Since MediaWiki 1.28 the promise is resolved with a `require` function.
             *
             * @member mw.loader
             * @param {string|Array} dependencies Module name or array of modules names the
             *  callback depends on to be ready before executing
             * @param {Function} [ready] Callback to execute when all dependencies are ready
             * @param {Function} [error] Callback to execute if one or more dependencies failed
             * @return {JQuery.Promise} With a `require` function
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-using
             */
            function using(
                dependencies: string | string[],
                ready?: (...args: any[]) => any,
                error?: (...args: any[]) => any
            ): JQuery.Promise<any>;

            /**
             * @private
             * @property {Array} baseModules
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-property-baseModules
             */
            const baseModules: string[];

            /**
             * List of callback jobs waiting for modules to be ready.
             *
             * Jobs are created by #enqueue() and run by #doPropagation().
             * Typically when a job is created for a module, the job's dependencies contain
             * both the required module and all its recursive dependencies.
             *
             *     @example Format:
             *
             *     {
             *         'dependencies': [ module names ],
             *         'ready': Function callback
             *         'error': Function callback
             *     }
             *
             * @private
             * @property {Object[]} jobs
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-property-jobs
             */
            const jobs: Array<{
                dependencies: string[];
                ready: (...args: any[]) => any;
                error: (...args: any[]) => any;
            }>;

            /**
             * For #addEmbeddedCSS() and #addLink()
             *
             * @private
             * @property {HTMLMetaElement|null} marker
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-property-marker
             */
            const marker: HTMLMetaElement | null;

            /**
             * Exposed for testing and debugging only.
             *
             * @private
             * @property {number}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-property-maxQueryLength
             */
            const maxQueryLength: number;

            /**
             * The module registry is exposed as an aid for debugging and inspecting page
             * state; it is not a public interface for modifying the registry.
             *
             * @private
             * @property {Object}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-property-moduleRegistry
             */
            const moduleRegistry: Record<
                string,
                {
                    dependencies: string[];
                    group: any;
                    module: {
                        exports: any;
                    };
                    packageExports: any;
                    skip: "string" | null;
                    source: string;
                    state: "error" | "loaded" | "missing" | "registered" | "ready";
                    version: string;
                }
            >;

            /**
             * Mapping of registered modules.
             *
             * See #implement and #execute for exact details on support for script, style and messages.
             *
             *     @example Format:
             *
             * ```json
             *     {
             *         'moduleName': {
             *             // From mw.loader.register()
             *             'version': '#####' (five-character hash)
             *             'dependencies': ['required.foo', 'bar.also', ...]
             *             'group': string, integer, (or) null
             *             'source': 'local', (or) 'anotherwiki'
             *             'skip': 'return !!window.Example;', (or) null, (or) boolean result of skip
             *             'module': export Object
             *
             *             // Set from execute() or mw.loader.state()
             *             'state': 'registered', 'loading', 'loaded', 'executing', 'ready', 'error', or 'missing'
             *
             *             // Optionally added at run-time by mw.loader.implement()
             *             'script': closure, array of urls, or string
             *             'style': { ... } (see #execute)
             *             'messages': { 'key': 'value', ... }
             *         }
             *     }
             * ```
             *
             * State machine:
             *
             * - `registered`:
             *    The module is known to the system but not yet required.
             *    Meta data is registered via mw.loader#register. Calls to that method are
             *    generated server-side by the startup module.
             * - `loading`:
             *    The module was required through mw.loader (either directly or as dependency of
             *    another module). The client will fetch module contents from the server.
             *    The contents are then stashed in the registry via mw.loader#implement.
             * - `loaded`:
             *    The module has been loaded from the server and stashed via mw.loader#implement.
             *    Once the module has no more dependencies in-flight, the module will be executed,
             *    controlled via #setAndPropagate and #doPropagation.
             * - `executing`:
             *    The module is being executed.
             * - `ready`:
             *    The module has been successfully executed.
             * - `error`:
             *    The module (or one of its dependencies) produced an error during execution.
             * - `missing`:
             *    The module was registered client-side and requested, but the server denied knowledge
             *    of the module's existence.
             *
             * @private
             * @property {Object}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-property-registry
             */
            const registry: Record<string, any>;

            /**
             * Add a bit of CSS text to the current browser page.
             *
             * The creation and insertion of the `<style>` element is debounced for two reasons:
             *
             * - Performing the insertion before the next paint round via requestAnimationFrame
             *   avoids forced or wasted style recomputations, which are expensive in browsers.
             * - Reduce how often new stylesheets are inserted by letting additional calls to this
             *   function accumulate into a buffer for at least one JavaScript tick. Modules are
             *   received from the server in batches, which means there is likely going to be many
             *   calls to this function in a row within the same tick / the same call stack.
             *   See also T47810.
             *
             * @private
             * @param {string} cssText CSS text to be added in a `<style>` tag.
             * @param {Function} callback Called after the insertion has occurred.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-addEmbeddedCSS
             */
            function addEmbeddedCSS(cssText: string, callback: (...args: any[]) => any): void;

            /**
             * Load and execute a script.
             *
             * @private
             * @param {string} src URL to script, will be used as the src attribute in the script tag
             * @param {Function} [callback] Callback to run after request resolution
             * @param {string[]} [modules] List of modules being requested, for state to be marked as error
             * in case the script fails to load
             * @return {HTMLScriptElement}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/source/mediawiki.loader.html#mw-loader-method-addScript
             */
            function addScript(
                src: string,
                callback?: (...args: any[]) => any,
                modules?: string[]
            ): HTMLScriptElement;

            /**
             * Register a source.
             *
             * The #work() method will use this information to split up requests by source.
             *
             *     @example
             *     mw.loader.addSource( { mediawikiwiki: 'https://www.mediawiki.org/w/load.php' } );
             *
             * @private
             * @param {Object} ids An object mapping ids to load.php end point urls
             * @throws {Error} If source id is already registered
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-addSource
             */
            function addSource(ids: Record<string, string>): void;

            /**
             * Append an HTML element to `document.head` or before a specified node.
             *
             * @private
             * @param {HTMLElement} el
             * @param {Node|null} [nextNode]
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-addToHead
             */
            function addToHead(el: HTMLElement, nextNode?: Node | null): void;

            /**
             * Determine whether all dependencies are in state 'ready', which means we may
             * execute the module or job now.
             *
             * @private
             * @param {string[]} modules Names of modules to be checked
             * @return {boolean} True if all modules are in state 'ready', false otherwise
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-allReady
             */
            function allReady(modules: string[]): boolean;

            /**
             * Determine whether all direct and base dependencies are in state 'ready'
             *
             * @private
             * @param {string} module Name of the module to be checked
             * @return {boolean} True if all direct/base dependencies are in state 'ready'; false otherwise
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-allWithImplicitReady
             */
            function allWithImplicitReady(module: string): boolean;

            /**
             * Determine whether all dependencies are in state 'ready', which means we may
             * execute the module or job now.
             *
             * @private
             * @param {string[]} modules Names of modules to be checked
             * @return {boolean|string} False if no modules are in state 'error' or 'missing';
             *  failed module otherwise
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-anyFailed
             */
            function anyFailed(modules: string[]): boolean | string;

            /**
             * @private
             * @param {string[]} implementations Array containing pieces of JavaScript code in the
             *  form of calls to mw.loader#implement().
             * @param {Function} cb Callback in case of failure
             * @param {Error} cb.err
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-asyncEval
             */
            function asyncEval(implementations: string[], cb: (err: Error) => any): void;

            /**
             * Create network requests for a batch of modules.
             *
             * This is an internal method for #work(). This must not be called directly
             * unless the modules are already registered, and no request is in progress,
             * and the module state has already been set to `loading`.
             *
             * @private
             * @param {string[]} batch
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-batchRequest
             */
            function batchRequest(batch: string[]): void;

            /**
             * Converts a module map of the form `{ foo: [ 'bar', 'baz' ], bar: [ 'baz, 'quux' ] }`
             * to a query string of the form `foo.bar,baz|bar.baz,quux`.
             *
             * See `ResourceLoader::makePackedModulesString()` in PHP, of which this is a port.
             * On the server, unpacking is done by `ResourceLoader::expandModuleNames()`.
             *
             * Note: This is only half of the logic, the other half has to be in #batchRequest(),
             * because its implementation needs to keep track of potential string size in order
             * to decide when to split the requests due to url size.
             *
             * @private
             * @param {Object} moduleMap Module map
             * @return {Object}
             * @return {string} return.str Module query string
             * @return {Array} return.list List of module names in matching order
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-buildModulesString
             */
            function buildModulesString(moduleMap: any): { str: string; list: string[] };

            /**
             * Handle propagation of module state changes and reactions to them.
             *
             * - When a module reaches a failure state, this should be propagated to
             *   modules that depend on the failed module.
             * - When a module reaches a final state, pending job callbacks for the
             *   module from mw.loader.using() should be called.
             * - When a module reaches the 'ready' state from #execute(), consider
             *   executing dependent modules now having their dependencies satisfied.
             * - When a module reaches the 'loaded' state from mw.loader.implement,
             *   consider executing it, if it has no unsatisfied dependencies.
             *
             * @private
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-doPropagation
             */
            function doPropagation(): void;

            /**
             * @private
             * @param {string} code JavaScript code
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-domEval
             */
            function domEval(code: string): void;

            /**
             * Add one or more modules to the module load queue.
             *
             * See also #work().
             *
             * @private
             * @param {string[]} dependencies Array of module names in the registry
             * @param {Function} [ready] Callback to execute when all dependencies are ready
             * @param {Function} [error] Callback to execute when any dependency fails
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-enqueue
             */
            function enqueue(
                dependencies: string[],
                ready?: (...args: any[]) => any,
                error?: (...args: any[]) => any
            ): void;

            /**
             * Executes a loaded module, making it ready to use
             *
             * @private
             * @param {string} module Module name to execute
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-execute
             */
            function execute(module: string): void;

            /**
             * @private
             * @param {Object} cssBuffer
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-flushCssBuffer
             */
            function flushCssBuffer(cssBuffer: {
                cssText: string;
                callbacks: Array<(...args: any[]) => any>;
            }): void;

            /**
             * FNV132 hash function
             *
             * This function implements the 32-bit version of FNV-1.
             * It is equivalent to hash( 'fnv132', ... ) in PHP, except
             * its output is base 36 rather than hex.
             * See <https://en.wikipedia.org/wiki/Fowler–Noll–Vo_hash_function>
             *
             * @private
             * @param {string} str String to hash
             * @return {string} hash as a five-character base 36 string
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-fnv132
             */
            function fnv132(str: string): string;

            /**
             * See also `ResourceLoader.php#makeVersionQuery` on the server.
             *
             * @private
             * @param {string[]} modules List of module names
             * @return {string} Hash of concatenated version hashes.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-getCombinedVersion
             */
            function getCombinedVersion(modules: string[]): string;

            /**
             * Make a versioned key for a specific module.
             *
             * @private
             * @param {string} module Module name
             * @return {string|null} Module key in format '`[name]@[version]`',
             *  or null if the module does not exist
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-getModuleKey
             */
            function getModuleKey(module: string): string | null;

            /**
             * Implement a module given the components that make up the module.
             *
             * When #load() or #using() requests one or more modules, the server
             * response contain calls to this function.
             *
             * @param {string} module Name of module and current module version. Formatted
             *  as '`[name]@[version]`". This version should match the requested version
             *  (from #batchRequest and #registry). This avoids race conditions (T117587).
             *  For back-compat with MediaWiki 1.27 and earlier, the version may be omitted.
             * @param {Function|Array|string|Object} [script] Module code. This can be a function,
             *  a list of URLs to load via `<script src>`, a string for `domEval()`, or an
             *  object like {"files": {"foo.js":function, "bar.js": function, ...}, "main": "foo.js"}.
             *  If an object is provided, the main file will be executed immediately, and the other
             *  files will only be executed if loaded via require(). If a function or string is
             *  provided, it will be executed/evaluated immediately. If an array is provided, all
             *  URLs in the array will be loaded immediately, and executed as soon as they arrive.
             * @param {Object} [style] Should follow one of the following patterns:
             *
             *     { "css": [css, ..] }
             *     { "url": { <media>: [url, ..] } }
             *
             * The reason css strings are not concatenated anymore is T33676. We now check
             * whether it's safe to extend the stylesheet.
             *
             * @private
             * @param {Object} [messages] List of key/value pairs to be added to mw#messages.
             * @param {Object} [templates] List of key/value pairs to be added to mw#templates.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-implement
             */
            function implement(
                module: string,
                script?: any,
                style?: any,
                messages?: any,
                templates?: any
            ): void;

            /**
             * @private
             * @param {Object} params Map of parameter names to values
             * @return {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-makeQueryString
             */
            function makeQueryString(params: Record<string, string>): string;

            /**
             * Make a require() function scoped to a package file
             *
             * @private
             * @param {Object} moduleObj Module object from the registry
             * @param {string} basePath Path of the file this is scoped to. Used for relative paths.
             * @return {Function}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-makeRequireFunction
             */
            function makeRequireFunction(
                moduleObj: Record<string, any>,
                basePath: string
            ): (moduleName: string) => any;

            /**
             * Create a new style element and add it to the DOM.
             *
             * @private
             * @param {string} text CSS text
             * @param {Node|null} [nextNode] The element where the style tag
             *  should be inserted before
             * @return {HTMLStyleElement} Reference to the created style element
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-newStyleTag
             */
            function newStyleTag(text: string, nextNode?: Node | null): HTMLStyleElement;

            /**
             * Queue the loading and execution of a script for a particular module.
             *
             * This does for legacy debug mode what runScript() does for production.
             *
             * @private
             * @param {string} src URL of the script
             * @param {string} moduleName Name of currently executing module
             * @param {Function} callback Callback to run after addScript() resolution
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-queueModuleScript
             */
            function queueModuleScript(
                src: string,
                moduleName: string,
                callback: (...args: any[]) => any
            ): void;

            /**
             * @private
             * @param {string} module
             * @param {string|number} [version]
             * @param {string[]} [dependencies]
             * @param {string} [group]
             * @param {string} [source]
             * @param {string} [skip]
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-registerOne
             */
            function registerOne(
                module: string,
                version?: string | number,
                dependencies?: string[],
                group?: string,
                source?: string,
                skip?: string
            ): void;

            /**
             * Get the exported value of a module.
             *
             * This static method is publicly exposed for debugging purposes
             * only and must not be used in production code. In production code,
             * please use the dynamically provided `require()` function instead.
             *
             * In case of lazy-loaded modules via mw.loader#using(), the returned
             * Promise provides the function, see #using() for examples.
             *
             * @since 1.27
             * @private
             * @param {string} moduleName Module name
             * @return {any} Exported value
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-require
             */
            function require(moduleName: string): any;

            /**
             * Get names of module that a module depends on, in their proper dependency order.
             *
             * @private
             * @param {string[]} modules Array of string module names
             * @return {Array} List of dependencies, including 'module'.
             * @throws {Error} If an unregistered module or a dependency loop is encountered
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-resolve
             */
            function resolve(modules: string[]): string[];

            /**
             * Resolve a relative file path.
             *
             * For example, resolveRelativePath( '../foo.js', 'resources/src/bar/bar.js' )
             * returns 'resources/src/foo.js'.
             *
             * @private
             * @param {string} relativePath Relative file path, starting with ./ or ../
             * @param {string} basePath Path of the file (not directory) relativePath is relative to
             * @return {string|null} Resolved path, or null if relativePath does not start with ./ or ../
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-resolveRelativePath
             */
            function resolveRelativePath(relativePath: string, basePath: string): string | null;

            /**
             * Like #resolve(), except it will silently ignore modules that
             * are missing or have missing dependencies.
             *
             * @private
             * @param {string[]} modules Array of string module names
             * @return {Array} List of dependencies.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-resolveStubbornly
             */
            function resolveStubbornly(modules: string[]): string[];

            /**
             * Update a module's state in the registry and make sure any necessary
             * propagation will occur, by adding a (debounced) call to doPropagation().
             * See #doPropagation for more about propagation.
             * See #registry for more about how states are used.
             *
             * @private
             * @param {string} module
             * @param {string} state
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-setAndPropagate
             */
            function setAndPropagate(module: string, state: string): void;

            /**
             * Resolve dependencies and detect circular references.
             *
             * @private
             * @param {string} module Name of the top-level module whose dependencies shall be
             *  resolved and sorted.
             * @param {Array} resolved Returns a topological sort of the given module and its
             *  dependencies, such that later modules depend on earlier modules. The array
             *  contains the module names. If the array contains already some module names,
             *  this function appends its result to the pre-existing array.
             * @param {Set} [unresolved] Used to detect loops in the dependency graph.
             * @throws {Error} If an unknown module or a circular dependency is encountered
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-sortDependencies
             */
            function sortDependencies(
                module: string,
                resolved: string[],
                unresolved: Set<string>
            ): void;

            /**
             * @private
             * @param {string} key Module name or '`[name]@[version]`'
             * @return {Object}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-splitModuleKey
             */
            function splitModuleKey(key: string): { name: string; version: string };

            /**
             * Start loading of all queued module dependencies.
             *
             * @private
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader-method-work
             */
            function work(): void;

            /**
             * Utility function for execute()
             *
             * @ignore
             * @param {string} url URL
             * @param {string} [media] Media attribute
             * @param {Node|null} [nextNode]
             * @return {HTMLLinkElement}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/source/mediawiki.loader.html#global-method-addLink
             */
            function addLinkTag(
                url: string,
                media?: string,
                nextNode?: Node | null
            ): HTMLLinkElement;

            /**
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader.store
             */
            namespace store {
                /**
                 * The localStorage key for the entire module store. The key references
                 * $wgDBname to prevent clashes between wikis which share a common host.
                 *
                 * @property {string}
                 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader.store-property-key
                 */
                const key: string;

                /**
                 * A string containing various factors by which the module cache should vary.
                 *
                 * Defined by ResourceLoader\StartupModule::getStoreVary() in PHP.
                 *
                 * @property {string}
                 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader.store-property-vary
                 */
                const vary: string;

                /**
                 * Queue the name of a module that the next update should consider storing.
                 *
                 * @since 1.32
                 * @param {string} module Module name
                 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader.store-method-add
                 */
                function add(module: string): void;

                /**
                 * Clear the entire module store right now.
                 *
                 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader.store-method-clear
                 */
                function clear(): void;

                /**
                 * Retrieve a module from the store and update cache hit stats.
                 *
                 * @param {string} module Module name
                 * @return {string|boolean} Module implementation or false if unavailable
                 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader.store-method-get
                 */
                function get(module: string): string | boolean;

                /**
                 * Initialize the store.
                 *
                 * Retrieves store from localStorage and (if successfully retrieved) decoding
                 * the stored JSON value to a plain object.
                 *
                 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader.store-method-init
                 */
                function init(): void;

                /**
                 * Internal helper for init(). Separated for ease of testing.
                 *
                 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader.store-method-load
                 */
                function load(): void;

                /**
                 * Iterate through the module store, removing any item that does not correspond
                 * (in name and version) to an item in the module registry.
                 *
                 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader.store-method-prune
                 */
                function prune(): void;

                /**
                 * Construct a JSON-serializable object representing the content of the store.
                 *
                 * @return {Object} Module store contents.
                 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader.store-method-toJSON
                 */
                function toJSON(): { items: string; vary: string; asOf: number };

                /**
                 * Whether the store is in use on this page.
                 *
                 * @see https://doc.wikimedia.org/mediawiki-core/master/js/source/mediawiki.loader.html
                 */
                const enabled: boolean | null;

                /**
                 * The contents of the store, mapping '[name]@[version]' keys
                 * to module implementations.
                 *
                 * @see https://doc.wikimedia.org/mediawiki-core/master/js/source/mediawiki.loader.html
                 */
                const items: any;

                /**
                 * Names of modules to be stored during the next update.
                 *
                 * @see https://doc.wikimedia.org/mediawiki-core/master/js/source/mediawiki.loader.html
                 */
                const queue: string[];

                /**
                 * Cache hit stats
                 *
                 * @see https://doc.wikimedia.org/mediawiki-core/master/js/source/mediawiki.loader.html
                 */
                const stats: { hits: number; misses: number; expired: number; failed: number };

                /**
                 * Add the contents of the named module to the in-memory store.
                 *
                 * This method does not guarantee that the module will be stored.
                 * Inspection of the module's meta data and size will ultimately decide that.
                 *
                 * This method is considered internal to mw.loader.store and must only
                 * be called if the store is enabled.
                 *
                 * @private
                 * @param {string} module Module name
                 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader.store-method-set
                 */
                function set(module: string): void;

                /**
                 * Request a sync of the in-memory store back to persisted localStorage.
                 *
                 * This function debounces updates. The debouncing logic should account
                 * for the following factors:
                 *
                 * - Writing to localStorage is an expensive operation that must not happen
                 *   during the critical path of initialising and executing module code.
                 *   Instead, it should happen at a later time after modules have been given
                 *   time and priority to do their thing first.
                 *
                 * - This method is called from mw.loader.store.add(), which will be called
                 *   hundreds of times on a typical page, including within the same call-stack
                 *   and eventloop-tick. This is because responses from load.php happen in
                 *   batches. As such, we want to allow all modules from the same load.php
                 *   response to be written to disk with a single flush, not many.
                 *
                 * - Repeatedly deleting and creating timers is non-trivial.
                 *
                 * - localStorage is shared by all pages from the same origin, if multiple
                 *   pages are loaded with different module sets, the possibility exists that
                 *   modules saved by one page will be clobbered by another. The impact of
                 *   this is minor, it merely causes a less efficient cache use, and the
                 *   problem would be corrected by subsequent page views.
                 *
                 * This method is considered internal to mw.loader.store and must only
                 * be called if the store is enabled.
                 *
                 * @private
                 * @method
                 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.loader.store-method-requestUpdate
                 */
                function requestUpdate(): void;
            }
        }
    }
}

export {};
