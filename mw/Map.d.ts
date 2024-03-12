import { PickOrDefault, TypeOrArray } from "./utils";

// `ExtensibleMap<V, TX>` is an alternative to `Map<V & Record<string, TX>>`, but unlike the latter
// ExtensibleMap provides additional overloads to improve selection autocompletion and type checking.

export interface ExtensibleMap<V extends Record<string, any>, TX = unknown>
    extends mw.Map<V & Record<string, TX>> {
    /**
     * Check if a given key exists in the map.
     *
     * @param selection Key to check
     * @returns True if the key exists
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Map-method-exists
     */
    exists<S extends keyof V>(selection: S): selection is S;
    exists<S extends string>(selection: S): selection is S;

    /**
     * Get the value of one or more keys.
     *
     * If called with no arguments, all values are returned.
     *
     * @param selection Key or array of keys to retrieve values for.
     * @param fallback Value for keys that don't exist.
     * @returns If selection was a string, returns the value. If selection was an array, returns
     * an object of key/values. If no selection is passed, a new object with all key/values is returned.
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Map-method-get
     */
    get<S extends TypeOrArray<keyof V>, TD>(
        selection: S,
        fallback: TD
    ): PickOrDefault<V, S, TD, TX>;
    get<S extends TypeOrArray<string>, TD>(selection: S, fallback: TD): PickOrDefault<V, S, TD, TX>;
    get<S extends TypeOrArray<keyof V>>(selection: S): PickOrDefault<V, S, null, TX>;
    get<S extends TypeOrArray<string>>(selection: S): PickOrDefault<V, S, null, TX>;
    get(): V & Record<string, TX>;

    /**
     * Set the value of one or more keys.
     *
     * @param selection Key to set value for, or object mapping keys to values
     * @param value Value to set (optional, only in use when key is a string)
     * @returns True on success, false on failure
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Map-method-set
     */
    set<S extends keyof V>(selection: S, value: V[S]): boolean;
    set<S extends string>(selection: S, value: TX): boolean;
    set<S extends Partial<V> & Record<string, TX>>(selection: S): boolean;
}

declare global {
    namespace mw {
        /**
         * Create an object that can be read from or written to via methods that allow interaction both
         * with single and multiple properties at once.
         *
         * **NOTE**: This is a private utility class for internal use by the framework.
         * Don't rely on its existence.
         *
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Map
         */
        class Map<V extends Record<string, any> = any> {
            private values: V;

            /**
             * Check if a given key exists in the map.
             *
             * @param selection Key to check
             * @returns True if the key exists
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Map-method-exists
             */
            exists<S extends keyof V>(selection: S): selection is S;

            /**
             * Get the value of one or more keys.
             *
             * If called with no arguments, all values are returned.
             *
             * @param selection Key or array of keys to retrieve values for.
             * @param fallback Value for keys that don't exist.
             * @returns If selection was a string, returns the value. If selection was an array, returns
             * an object of key/values. If no selection is passed, a new object with all key/values is returned.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Map-method-get
             */
            get<S extends TypeOrArray<keyof V>, TD>(
                selection: S,
                fallback: TD
            ): PickOrDefault<V, S, TD>;
            get<S extends TypeOrArray<keyof V>>(selection: S): PickOrDefault<V, S, null>;
            get(): V;

            /**
             * Set the value of one or more keys.
             *
             * @param selection Key to set value for, or object mapping keys to values
             * @param value Value to set (optional, only in use when key is a string)
             * @returns True on success, false on failure
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Map-method-set
             */
            set<S extends keyof V>(selection: S, value: V[S]): boolean;
            set<S extends Partial<V>>(selection: S): boolean;
        }
    }
}

export {};
