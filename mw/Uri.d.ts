type Options =
    | {
          strictMode?: boolean;
          overrideKeys?: boolean;
          arrayParams?: boolean;
      }
    | boolean;

declare global {
    namespace mw {
        /**
         * A factory method to create an mw.Uri class with a default location to resolve relative URLs
         * against (including protocol-relative URLs).
         *
         * @method
         * @param {string|Function} documentLocation A full url, or function returning one.
         *  If passed a function, the return value may change over time and this will be honoured. (T74334)
         * @member mw
         * @return {Function} An mw.Uri class constructor
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-method-UriRelative
         */
        function UriRelative(documentLocation: string | ((...args: any[]) => string)): Uri;

        class Uri {
            /**
             * @property {string|undefined} fragment For example `top`
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Uri-property-fragment
             */
            fragment: string | undefined;
            /**
             * @property {string} host For example `www.example.com` (always present)
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Uri-property-host
             */
            host: string;
            /**
             * @property {string|undefined} password For example `pwd`
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Uri-property-password
             */
            password: string | undefined;
            /**
             * @property {string} path For example `/dir/dir.2/index.htm` (always present)
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Uri-property-path
             */
            path: string;
            /**
             * @property {string|undefined} port For example `81`
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Uri-property-port
             */
            port: string | undefined;
            /**
             * @property {string} protocol For example `http` (always present)
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Uri-property-protocol
             */
            protocol: string;
            /**
             * @property {Object} query For example `{ a: '0', b: '', c: 'value' }` (always present)
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Uri-property-query
             */
            query: any;
            /**
             * @property {string|undefined} user For example `usr`
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Uri-property-user
             */
            user: string | undefined;

            /**
             * Regular expressions to parse many common URIs.
             *
             * These are gnarly expressions. For improved readability, they have been moved to a separate
             * file where they make use of named capture groups. That syntax isn't valid in JavaScript ES5,
             * so the server-side strips these before delivering to the client.
             *
             * @private
             * @static
             * @property {Object} parser
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Uri-static-property-parser
             */
            static parser: {
                strict: RegExp;
                loose: RegExp;
            };

            /**
             * The order here matches the order of captured matches in the `parser` property regexes.
             *
             * @private
             * @static
             * @property {string[]} properties
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Uri-static-property-properties
             */
            static properties: [
                "protocol",
                "user",
                "password",
                "host",
                "port",
                "path",
                "query",
                "fragment"
            ];

            /**
             * Construct a new URI object. Throws error if arguments are illegal/impossible, or
             * otherwise don't parse.
             *
             * @class mw.Uri
             * @constructor
             * @param {Object|string} [uri] URI string, or an Object with appropriate properties (especially
             *  another URI object to clone). Object must have non-blank `protocol`, `host`, and `path`
             *  properties. If omitted (or set to `undefined`, `null` or empty string), then an object
             *  will be created for the default `uri` of this constructor (`location.href` for mw.Uri,
             *  other values for other instances -- see mw.UriRelative for details).
             * @param {Object|boolean} [options] Object with options, or (backwards compatibility) a boolean
             *  for strictMode
             * @param {boolean} [options.strictMode=false] Trigger strict mode parsing of the url.
             * @param {boolean} [options.overrideKeys=false] Whether to let duplicate query parameters
             *  override each other (`true`) or automagically convert them to an array (`false`).
             * @param {boolean} [options.arrayParams=false] Whether to parse array query parameters (e.g.
             *  `&foo[0]=a&foo[1]=b` or `&foo[]=a&foo[]=b`) or leave them alone. Currently this does not
             *  handle associative or multi-dimensional arrays, but that may be improved in the future.
             *  Implies `overrideKeys: true` (query parameters without `[...]` are not parsed as arrays).
             * @throws {Error} when the query string or fragment contains an unknown % sequence
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Uri-method-constructor
             */
            constructor(
                uri?:
                    | string
                    | Uri
                    | Partial<{
                          fragment: string;
                          host: string;
                          password: string;
                          path: string;
                          port: string;
                          protocol: string;
                          query: any;
                          user: string;
                      }>,
                options?: Options
            );

            /**
             * Clone this URI
             *
             * @return {Uri} New URI object with same properties
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Uri-method-clone
             */
            clone(): Uri;

            /**
             * Extend the query section of the URI with new parameters.
             *
             * @param {Object} parameters Query parameters to add to ours (or to override ours with) as an
             *  object
             * @return {Uri} This URI object
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Uri-method-extend
             */
            extend(parameters: Record<string, any>): Uri;

            /**
             * Get the userInfo, host and port section of the URI.
             *
             * In most real-world URLs this is simply the hostname, but the definition of 'authority' section is more general.
             *
             * @return {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Uri-method-getAuthority
             */
            getAuthority(): string;

            /**
             * Get host and port section of a URI.
             *
             * @return {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Uri-method-getHostPort
             */
            getHostPort(): string;

            /**
             * Get the query arguments of the URL, encoded into a string.
             *
             * Does not preserve the original order of arguments passed in the URI. Does handle escaping.
             *
             * @return {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Uri-method-getQueryString
             */
            getQueryString(): string;

            /**
             * Get everything after the authority section of the URI.
             *
             * @return {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Uri-method-getRelativePath
             */
            getRelativePath(): string;

            /**
             * Get user and password section of a URI.
             *
             * @return {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Uri-method-getUserInfo
             */
            getUserInfo(): string;

            /**
             * Get the entire URI string.
             *
             * Note that the output may not be precisely the same as the constructor input,
             * due to order of query arguments.
             * Note also that the fragment is not always roundtripped as-is; some characters will
             * become encoded, including the slash character, which can cause problems with e.g.
             * mediawiki.router. It is recommended to use the native URL class (via
             * web2017-polyfills, which loads a polyfill if needed) in contexts where the fragment
             * is important.
             *
             * @return {string} The URI string
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Uri-method-toString
             */
            toString(): string;

            /**
             * Parse a string and set our properties accordingly.
             *
             * @private
             * @param {string} str URI, see constructor.
             * @param {Object} options See constructor.
             * @throws {Error} when the query string or fragment contains an unknown % sequence
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Uri-method-parse
             */
            parse(str: string, options: Options): void;

            /**
             * Decode a url encoded value.
             *
             * Reversed #encode. Standard decodeURIComponent, with addition of replacing
             * `+` with a space.
             *
             * @static
             * @param {string} s String to decode
             * @return {string} Decoded string
             * @throws {Error} when the string contains an unknown % sequence
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Uri-static-method-decode
             */
            static decode(s: string): string;

            /**
             * Encode a value for inclusion in a url.
             *
             * Standard encodeURIComponent, with extra stuff to make all browsers work similarly and more
             * compliant with RFC 3986. Similar to rawurlencode from PHP and our JS library
             * mw.util.rawurlencode, except this also replaces spaces with `+`.
             *
             * @static
             * @param {string} s String to encode
             * @return {string} Encoded string for URI
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Uri-static-method-encode
             */
            static encode(s: string): string;

            /**
             * Function that's useful when constructing the URI string -- we frequently encounter the pattern
             * of having to add something to the URI as we go, but only if it's present, and to include a
             * character before or after if so.
             *
             * @private
             * @static
             * @param {string|undefined} pre To prepend
             * @param {string} val To include
             * @param {string} post To append
             * @param {boolean} raw If true, val will not be encoded
             * @return {string} Result
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Uri-static-method-cat
             */
            static cat(pre: string | undefined, val: string, post: string, raw: boolean): string;
        }
    }
}

export {};
