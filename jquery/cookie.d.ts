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
         */
        cookie(key: string, value: string | null, options?: mw.cookie.CookieOptions): string;
        cookie(key: string): unknown;
        cookie(): Record<string, unknown>;

        /**
         * Remove a cookie by key.
         *
         * @example
         * mw.loader.using( 'mediawiki.cookie' ).then( () => {
         *     $.removeCookie( 'name', {} );
         * } );
         *
         * @memberof jQueryPlugins
         * @method removeCookie
         * @param {string} key
         * @param {mw.cookie.CookieOptions} options
         * @returns {boolean} True if the cookie previously existed
         */
        removeCookie(key: string, options: mw.cookie.CookieOptions): boolean;
    }
}

export {};
