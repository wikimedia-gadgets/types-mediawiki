type KeyOrArray<T> = keyof T | Array<keyof T>;
type GetOrDefault<V, K extends keyof V, T> = V extends Required<Pick<V, K>>
    ? V[K]
    : Required<V>[K] | T;
type PickOrDefault<V, S extends keyof V | Array<keyof V>, T> = S extends Array<infer SS>
    ? { [K in SS & keyof V]-?: GetOrDefault<V, K, T> }
    : GetOrDefault<V, S & keyof V, null>;

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
            exists(selection: keyof V): boolean;

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
            get<S extends KeyOrArray<V>, T>(selection: S, fallback: T): PickOrDefault<V, S, T>;
            get<S extends KeyOrArray<V>>(selection: S): PickOrDefault<V, S, null>;
            get<T extends V = V>(): T;

            /**
             * Set the value of one or more keys.
             *
             * @param selection Key to set value for, or object mapping keys to values
             * @param value Value to set (optional, only in use when key is a string)
             * @returns True on success, false on failure
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Map-method-set
             */
            set<S extends keyof V>(selection: S, value: V[S]): boolean;
            set(selection: Partial<V>): boolean;
        }
    }
}

export {};
