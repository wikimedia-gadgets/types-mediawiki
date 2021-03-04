declare global {
    namespace mw {
        namespace log {
            /**
             * Create a property on a host object that, when accessed, will produce a deprecation warning in the console.
             * @param {*} obj Host object of deprecated property
             * @param {string} key Name of property to create in `obj`
             * @param {*} val The value this property should return when accessed
             * @param {string?} msg Optional text to include in the deprecation message
             * @param {string?} logName Name for the feature for logging and tracking purposes. Except for properties of the window object, tracking is only enabled if logName is set
             * @returns {void}
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
             * Most browsers also print a stacktrace when calling this method if the argument is an Error object.
             *
             * This method is a no-op in browsers that don't implement the Console API.
             * @param {Array<*>} msg Messages to output to console
             * @returns {void}
             */
            function error(...msg: any[]): void;

            /**
             * Write a message to the browser console's warning channel.
             *
             * This method is a no-op in browsers that don't implement the Console API.
             * @param msg Messages to output to console
             * @returns {void}
             */
            function warn(...msg: any[]): void;
        }
    }
}

export {};
