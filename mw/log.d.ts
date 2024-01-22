declare global {
    namespace mw {
        /**
         * Collection of methods to help log messages to the console.
         *
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.log
         */
        namespace log {
            /**
             * Create a property on a host object that, when accessed, will log
             * a deprecation warning to the console.
             *
             * Usage:
             *
             * ```js
             * mw.log.deprecate( window, 'myGlobalFn', myGlobalFn );
             *
             * mw.log.deprecate( Thing, 'old', old, 'Use Other.thing instead', 'Thing.old'  );
             * ```
             *
             * @param {Object} obj Host object of deprecated property
             * @param {string} key Name of property to create in `obj`
             * @param {Mixed} val The value this property should return when accessed
             * @param {string} [msg] Optional extra text to add to the deprecation warning
             * @param {string} [logName] Name of the feature for deprecation tracker.
             *  Tracking is disabled by default, except for global variables on `window`.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-method-deprecate
             */
            function deprecate(
                obj: any,
                key: string,
                val: any,
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
             * @param {...Mixed} msg Messages to output to console
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-method-error
             */
            function error(...msg: any[]): void;

            /**
             * Write a message to the browser console's warning channel.
             *
             * @param {...string} msg Messages to output to console
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.log-method-warn
             */
            function warn(...msg: any[]): void;
        }
    }
}

export {};
