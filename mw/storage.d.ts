/**
 * A wrapper for the HTML5 Storage interface (`localStorage` or `sessionStorage`)
 * that is safe to call in all browsers.
 *
 * @class mw.SafeStorage
 * @private
 * @param {Object|undefined} store The Storage instance to wrap around
 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.SafeStorage
 */
interface SafeStorage {
    /**
     * Retrieve value from device storage.
     *
     * @param {string} key Key of item to retrieve
     * @return {string|null|boolean} String value, null if no value exists, or false
     *  if storage is not available.
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.SafeStorage-method-get
     */
    get(key: string): string | null | boolean;

    /**
     * Retrieve JSON object from device storage.
     *
     * @param {string} key Key of item to retrieve
     * @return {Object|null|boolean} Object, null if no value exists or value
     *  is not JSON-parseable, or false if storage is not available.
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.SafeStorage-method-getObject
     */
    getObject(key: string): any;

    /**
     * Remove a value from device storage.
     *
     * @param {string} key Key of item to remove
     * @return {boolean} Whether the key was removed
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.SafeStorage-method-remove
     */
    remove(key: string): boolean;

    /**
     * Set a value in device storage.
     *
     * @param {string} key Key name to store under
     * @param {string} value Value to be stored
     * @param {number} [expiry] Number of seconds after which this item can be deleted
     * @return {boolean} The value was set
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.SafeStorage-method-set
     */
    set(key: string, value: string, expiry?: number): boolean;

    /**
     * Set the expiry time for an item in the store
     *
     * @param {string} key Key name
     * @param {number} [expiry] Number of seconds after which this item can be deleted,
     *  omit to clear the expiry (either making the item never expire, or to clean up
     *  when deleting a key).
     * @return {boolean} The expiry was set (or cleared) [since 1.41]
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.SafeStorage-method-setExpires
     */
    setExpires(key: string, expiry?: number): void;

    /**
     * Set an object value in device storage by JSON encoding
     *
     * @param {string} key Key name to store under
     * @param {Object} value Object value to be stored
     * @param {number} [expiry] Number of seconds after which this item can be deleted
     * @return {boolean} The value was set
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.SafeStorage-method-setObject
     */
    setObject(key: string, value: any, expiry?: number): boolean;

    /**
     * Clear any expired items from the store
     *
     * @private
     * @return {JQuery.Promise} Resolves when items have been expired
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.SafeStorage-method-clearExpired
     */
    clearExpired(): JQuery.Promise<any>;

    /**
     * Get all keys with expiry values
     *
     * @private
     * @return {JQuery.Promise} Promise resolving with all the keys which have
     *  expiry values (unprefixed), or as many could be retrieved in the allocated time.
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.SafeStorage-method-getExpiryKeys
     */
    getExpiryKeys(): JQuery.Promise<any>;

    /**
     * Check if a given key has expired
     *
     * @private
     * @param {string} key Key name
     * @return {boolean} Whether key is expired
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.SafeStorage-method-isExpired
     */
    isExpired(key: string): boolean;
}

interface MwStorage extends SafeStorage {
    session: SafeStorage;
}

declare global {
    namespace mw {
        /**
         * A safe interface to HTML5 `localStorage`.
         *
         * This normalises differences across browsers and silences any and all
         * exceptions that may occur.
         *
         * **Note**: Storage keys are not automatically prefixed in relation to
         * MediaWiki and/or the current wiki. Always **prefix your keys** with "mw" to
         * avoid conflicts with gadgets, JavaScript libraries, browser extensions,
         * internal CDN or webserver cookies, and third-party applications that may
         * be embedded on the page.
         *
         * **Warning**: This API has limited storage space and does not use an expiry
         * by default. This means unused **keys are stored forever**, unless you
         * opt-in to the `expiry` parameter or otherwise make sure that your code
         * can rediscover and delete keys you created in the past.
         *
         * If you don't use the `expiry` parameter, avoid keys with variable
         * components as this leads to untracked keys that your code has no way
         * to know about and delete when the data is no longer needed. Instead,
         * store dynamic values in an object under a single constant key that you
         * manage or replace over time.
         * See also <https://phabricator.wikimedia.org/T121646>.
         *
         * Example:
         *
         *     mw.storage.set( key, value, expiry );
         *     mw.storage.set( key, value ); // stored indefinitely
         *     mw.storage.get( key );
         *
         * Example:
         *
         *     var local = require( 'mediawiki.storage' ).local;
         *     local.set( key, value, expiry );
         *     local.get( key );
         *
         * @class
         * @singleton
         * @extends mw.SafeStorage
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.storage
         */
        const storage: MwStorage;
    }
}

export {};
