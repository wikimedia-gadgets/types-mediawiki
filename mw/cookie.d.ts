type SameSite = "none" | "lax" | "strict";

declare global {
    namespace mw {
        /**
         * Manage cookies in a way that is syntactically and functionally similar
         * to the `WebRequest#getCookie` and `WebResponse#setcookie` methods in PHP.
         *
         * @class mw.cookie
         * @singleton
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.cookie
         */
        namespace cookie {
            /**
             * Get the value of a cookie.
             *
             * @param {string} key
             * @param {string} [prefix=wgCookiePrefix] The prefix of the key. If `prefix` is
             *   `undefined` or `null`, then `wgCookiePrefix` is used
             * @param {T} [defaultValue=null]
             * @return {string|null|T} If the cookie exists, then the value of the
             *   cookie, otherwise `defaultValue`
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.cookie-method-get
             */
            function get<T>(key: string, prefix?: string | null, defaultValue?: T): string | T;
            function get(key: string, prefix?: string): string;

            /**
             * Get the value of a SameSite=None cookie, using the legacy ss0- cookie if needed.
             *
             * @param {string} key
             * @param {string} [prefix=wgCookiePrefix] The prefix of the key. If `prefix` is
             *   `undefined` or `null`, then `wgCookiePrefix` is used
             * @param {T} [defaultValue=null]
             * @return {string|null|T} If the cookie exists, then the value of the
             *   cookie, otherwise `defaultValue`
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.cookie-method-getCrossSite
             */
            function getCrossSite<T>(
                key: string,
                prefix?: string | null,
                defaultValue?: T
            ): string | T;
            function getCrossSite(key: string, prefix?: string): string;

            /**
             * Set or delete a cookie.
             *
             * **Note:** If explicitly passing `null` or `undefined` for an options key,
             * that will override the default. This is natural in JavaScript, but noted
             * here because it is contrary to MediaWiki's `WebResponse#setcookie()` method
             * in PHP.
             *
             * When using this for persistent storage of identifiers (e.g. for tracking
             * sessions), be aware that persistence may vary slightly across browsers and
             * browser versions, and can be affected by a number of factors such as
             * storage limits (cookie eviction) and session restore features.
             *
             * Without an expiry, this creates a session cookie. In a browser, session cookies persist
             * for the lifetime of the browser *process*. Including across tabs, page views, and windows,
             * until the browser itself is *fully* closed, or until the browser clears all storage for
             * a given website. An exception to this is if the user evokes a "restore previous
             * session" feature that some browsers have.
             *
             * @param {string} key
             * @param {string|null} value Value of cookie. If `value` is `null` then this method will
             *   instead remove a cookie by name of `key`.
             * @param {Object|Date|number} [options] Options object, or expiry date
             * @param {Date|number|null} [options.expires=wgCookieExpiration] The expiry date of the cookie,
             *  or lifetime in seconds. If `options.expires` is null or 0, then a session cookie is set.
             * @param {string} [options.prefix=wgCookiePrefix] The prefix of the key
             * @param {string} [options.domain=wgCookieDomain] The domain attribute of the cookie
             * @param {string} [options.path=wgCookiePath] The path attribute of the cookie
             * @param {boolean} [options.secure=false] Whether or not to include the secure attribute.
             *   (Does **not** use the wgCookieSecure configuration variable)
             * @param {string} [options.sameSite=''] The SameSite flag of the cookie ('None' / 'Lax'
             *   / 'Strict', case-insensitive; default is to omit the flag, which results in Lax on
             *   modern browsers). Set to None AND set secure=true if the cookie needs to be visible on
             *   cross-domain requests.
             * @param {boolean} [options.sameSiteLegacy=$wgUseSameSiteLegacyCookies] If true, sameSite=None
             *   cookies will also be sent as a non-SameSite cookie with an 'ss0-' prefix, to work around
             *   old browsers interpreting the standard differently.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.cookie-method-set
             */
            // see https://stackoverflow.com/a/64932909 for <SS>
            function set<SS extends string = SameSite>(
                key: string,
                value: string | null,
                options?:
                    | Date
                    | number
                    | Partial<{
                          expires: Date | number | null;
                          prefix: string;
                          domain: string;
                          path: string;
                          secure: boolean;
                          sameSite: Lowercase<SS> extends SameSite ? SS : SameSite;
                          sameSiteLegacy: boolean;
                      }>
            ): void;

            /**
             * Cookie Plugin
             * Based on https://github.com/carhartl/jquery-cookie
             *
             * Copyright 2013 Klaus Hartl
             * Released under the MIT license
             *
             * Now forked by MediaWiki.
             *
             * @private
             * @class mw.cookie.jar
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.cookie.jar
             */
            namespace jar {
                /**
                 * Get, set, or remove a cookie.
                 *
                 * @method cookie
                 * @param {string} [key] Cookie name or (when getting) omit to return an object with all
                 *  current cookie keys and values.
                 * @param {string|null} [value] Cookie value to set. If `null`, this method will remove the cookie.
                 *  If omited, this method will get and return the current value.
                 * @param {Object} [options]
                 * @param {string} [options.path] Custom scope for cookie key.
                 * @param {string} [options.domain] Custom scope for cookie key.
                 * @param {boolean} [options.secure] Custom scope for cookie key.
                 * @param {string} [options.sameSite] Custom scope for cookie key.
                 * @param {number} [options.expires] Number of days to store the value (when setting)
                 * @return {string|Object} The current value (if getting a cookie), or an internal `document.cookie`
                 *  expression (if setting or removing).
                 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.cookie.jar-method-cookie
                 */
                // see https://stackoverflow.com/a/64932909 for <SS>
                function cookie<SS extends string = SameSite>(
                    key?: string,
                    value?: string | null,
                    options?: Partial<{
                        path: string;
                        domain: string;
                        secure: boolean;
                        sameSite: Lowercase<SS> extends SameSite ? SS : SameSite;
                        expires: number;
                    }>
                ): string | Record<string, string>;

                /**
                 * Remove a cookie by key
                 *
                 * @param {string} key
                 * @param {Object} [options] Custom scope for cookie key, must match the way it was set.
                 * @param {string} [options.path]
                 * @param {string} [options.domain]
                 * @param {boolean} [options.secure]
                 * @param {string} [options.sameSite]
                 * @return {boolean} True if the cookie previously existed
                 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.cookie.jar-method-removeCookie
                 */
                // see https://stackoverflow.com/a/64932909 for <SS>
                function removeCookie<SS extends string = SameSite>(
                    key: string,
                    options?: Partial<{
                        path: string;
                        domain: string;
                        secure: boolean;
                        sameSite: Lowercase<SS> extends SameSite ? SS : SameSite;
                    }>
                ): boolean;
            }
        }
    }
}

export {};
