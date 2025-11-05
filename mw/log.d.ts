declare global {
    namespace mw {
        /**
         * Write a verbose message to the browser's console in debug mode.
         *
         * In ResourceLoader debug mode, this writes to the browser's console.
         * In production mode, it is a no-op.
         *
         * See {@link mw.log} for other logging methods.
         *
         * @variation 2
         * @param msg Messages to output to console.
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.log2
         */
        function log(...msg: any[]): void;

        /**
         * Log debug messages and developer warnings to the browser console.
         *
         * See {@link mw.log(2) mw.log()} for verbose debug logging.
         *
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.log.html
         */
        namespace log {
            /**
             * Create a property on a host object that, when accessed, will log
             * a deprecation warning to the console.
             *
             * @example
             * ```js
             * mw.log.deprecate( window, 'myGlobalFn', myGlobalFn );
             * ```
             * @example
             * ```js
             * mw.log.deprecate( Thing, 'old', old, 'Use Other.thing instead', 'Thing.old'  );
             * ```
             * @param obj Host object of deprecated property
             * @param key Name of property to create in `obj`
             * @param val The value this property should return when accessed
             * @param msg Optional extra text to add to the deprecation warning
             * @param logName Name of the feature for deprecation tracker.
             *  Tracking is disabled by default, except for global variables on `window`.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.log.html#.deprecate
             */
            function deprecate<T, K extends string & keyof T>(
                obj: T,
                key: K,
                val: T[K],
                msg?: string,
                logName?: string
            ): void;

            /**
             * Write a message to the browser console's error channel.
             *
             * Most browsers also print a stacktrace when calling this method if the
             * argument is an Error object.
             *
             * @since 1.26
             * @param msg Messages to output to console
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.log.html#.error
             */
            function error(...msg: any[]): void;

            /**
             * Create a function that logs a deprecation warning when called.
             *
             * @example
             * ```js
             * var deprecatedNoB = mw.log.makeDeprecated( 'hello_without_b', 'Use of hello without b is deprecated.' );
             *
             * function hello( a, b ) {
             *     if ( b === undefined ) {
             *         deprecatedNoB();
             *         b = 0;
             *     }
             *     return a + b;
             * }
             *
             * hello( 1 );
             * ```
             * @since 1.38
             * @param key Name of the feature for deprecation tracker,
             *  or null for a console-only deprecation.
             * @param msg Deprecation warning.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.log.html#.makeDeprecated
             */
            function makeDeprecated(key: string | null, msg: string): () => void;

            /**
             * Write a message to the browser console's warning channel.
             *
             * @param msg Messages to output to console
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.log.html#.warn
             */
            function warn(...msg: any[]): void;
        }
    }
}

export {};
