import "./Api";
import "./language";
import "./util";
import "./user";
import "./loader";
import "./Title";
import "./Uri";
import "./hook";
import "./storage";
import "./notification";
import "./message";

declare global {
    /**
     * Base library for MediaWiki.
     *
     * Exposed globally as `mw`, with `mediaWiki` as alias.
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw
     */
    namespace mw {
        /**
         * Map of configuration values.
         *
         * Check out [the complete list of configuration values](https://www.mediawiki.org/wiki/Manual:Interface/JavaScript#mw.config)
         * on mediawiki.org.
         *
         * If `$wgLegacyJavaScriptGlobals` is true, this Map will add its values to the
         * global `window` object.
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-property-config
         */
        const config: mw.Map;

        namespace html {
            function escape(s: string): string;

            function element(name: string, attrs?: any, contents?: string): string;
        }

        namespace log {
            function deprecate(
                obj: any,
                key: string,
                val: any,
                msg?: string,
                logName?: string
            ): void;

            function error(...msg: any[]): void;

            function warn(...msg: string[]): void;
        }

        /**
         * Create an object that can be read from or written to via methods that allow interaction both
         * with single and multiple properties at once.
         *
         * **NOTE**: This is a private utility class for internal use by the framework.
         * Don't rely on its existence.
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Map
         */
        class Map {
            /**
             * Get the value of one or more keys.
             *
             * If called with no arguments, all values are returned.
             * @param selection Key or array of keys to retrieve values for.
             * @param fallback Value for keys that don't exist.
             * @returns If selection was a string, returns the value, If selection was an array, returns
             * an object of key/values. If no selection is passed, a new object with all key/values is returned.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Map-method-get
             */
            get(selection: string | string[], fallback?: any): any;

            /**
             * Get the value of one or more keys.
             *
             * If called with no arguments, all values are returned.
             * @param selection Key to set value for, or object mapping keys to values
             * @param value Value to set (optional, only in use when key is a string)
             * @returns True on success, false on failure
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Map-method-set
             */
            set(selection: string | Record<string, any>, value?: any): boolean;

            /**
             * Check if a given key exists in the map.
             * @param selection Key to check
             * @returns True if the key exists
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Map-method-exists
             */
            exists(selection: string): boolean;
        }

        // types for mw.widgets are out of scope!
        const widgets: any;
    }
}

export {};
