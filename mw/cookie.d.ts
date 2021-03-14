type SameSite = "none" | "lax" | "strict";

declare global {
    namespace mw {
        /**
         * Manage cookies in a way that is syntactically and functionally similar to the `WebRequest#getCookie` and `WebResponse#setcookie` methods in PHP.
         *
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.cookie
         */
        namespace cookie {
            /**
             * Set or delete a cookie.
             *
             * **Note:** If explicitly passing `null` or `undefined` for an options key, that will override the default. This is natural in JavaScript, but noted here because it is contrary to MediaWiki's `WebResponse#setcookie()` method in PHP.
             *
             * When using this for persistent storage of identifiers (e.g. for tracking sessions), be aware that persistence may vary slightly across browsers and browser versions, and can be affected by a number of factors such as storage limits (cookie eviction) and session restore features.
             *
             * Without an expiry, this creates a session cookie. In a browser, session cookies persist for the lifetime of the browser *process*. Including across tabs, page views, and windows, until the browser itself is *fully* closed, or until the browser clears all storage for a given website. An exception to this is if the user evokes a "restore previous session" feature that some browsers have.
             *
             * @param {string} key
             * @param {string | null} value Value of cookie. If `value` is `null` then this method will instead remove a cookie by name of `key`
             * @param {(Object | Date | number)?} options Options object, or expiry date
             * @param {(Date | number | null)?} options.expires The expiry date of the cookie or lifetime in seconds. If `options.expires` is null or 0, then a session cookie is set
             * @param {string?} options.prefix The prefix of the key
             * @param {string?} options.domain The domain attribute of the cookie
             * @param {string?} options.path The path attribute of the cookie
             * @param {boolean?} options.secure Whether or not to include the secure attribute (Does **not** use the wgCookieSecure configuration variable)
             * @param {string?} options.sameSite The `SameSite` flag of the cookie (case-insensitive; default is to omit the flag, which results in `Lax` on modern browsers). Set to `None` *and* set `secure` to `true` if the cookie needs to be visible on cross-domain requests
             * @param {boolean?} options.sameSiteLegacy If true, `SameSite` = `None` cookies will also be sent as non-`SameSite` cookies with an "ss0-" prefix, to work around old browsers interpreting the standard differently
             * @returns {void}
             */
            // see https://stackoverflow.com/a/64932909 for <SS>
            function set<SS extends string = SameSite>(
                key: string,
                value: any,
                options?:
                    | Date
                    | number
                    | Partial<{
                          expires: Date | number;
                          prefix: string;
                          domain: string;
                          path: string;
                          secure: boolean;
                          sameSite: Lowercase<SS> extends SameSite ? SS : SameSite;
                      }>
            ): void;

            /**
             * Get the value of a cookie.
             *
             * @param {string} key The key for the cookie
             * @param {string?} prefix The prefix of the key. If undefined or null, `$wgCookiePrefix` is used
             * @param {*} defaultValue A value to return if the cookie does not exist
             * @returns {*} If the cookie exists, the value of the cookie, otherwise `defaultValue`
             */
            function get<D>(
                key: string,
                prefix: string | undefined | null,
                defaultValue: D
            ): string | D;
            function get(key: string, prefix?: string): string;

            /**
             * Get the value of a `SameSite` = `None` cookie, using the legacy `ss0-` prefix if needed.
             *
             * @param {string} key The key for the cookie
             * @param {string?} prefix The prefix of the key. If undefined or null, `$wgCookiePrefix` is used
             * @param {*} defaultValue A value to return if the cookie does not exist
             * @returns {*} If the cookie exists, the value of the cookie, otherwise `defaultValue`
             */
            function getCrossSite<D>(
                key: string,
                prefix: string | undefined | null,
                defaultValue: D
            ): string | D;
            function getCrossSite(key: string, prefix?: string): string;
        }
    }
}

export {};
