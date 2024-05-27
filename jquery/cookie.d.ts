declare global {
    interface JQueryStatic {
        /**
         * Set a cookie.
         *
         * @example
         * ```js
         * mw.loader.using( 'mediawiki.cookie' ).then( () => {
         *     $.cookie( 'name', 'value', {} );
         * } );
         * ```
         * @param {string} [key] Cookie name or (when getting) omit to return an object with all
         *  current cookie keys and values.
         * @param {string|null} [value] Cookie value to set. If `null`, this method will remove the cookie.
         *  If omited, this method will get and return the current value.
         * @param {mw.cookie.CookieOptions} [options]
         * @returns {string|Object} The current value (if getting a cookie), or an internal `document.cookie`
         *  expression (if setting or removing).
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/module-mediawiki.cookie.html#.$.cookie
         */
        cookie(key: string, value: string | null, options?: mw.cookie.CookieOptions): string;
        cookie(key: string): unknown;
        cookie(): Record<string, unknown>;

        /**
         * Remove a cookie by key.
         *
         * @example
         * ```js
         * mw.loader.using( 'mediawiki.cookie' ).then( () => {
         *     $.removeCookie( 'name', {} );
         * } );
         * ```
         * @param {string} key
         * @param {mw.cookie.CookieOptions} options
         * @returns {boolean} True if the cookie previously existed
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/module-mediawiki.cookie.html#.$.removeCookie
         */
        removeCookie(key: string, options: mw.cookie.CookieOptions): boolean;
    }
}

export {};
