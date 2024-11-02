declare global {
    namespace mw {
        /**
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Rest.html
         */
        class Rest {
            /**
             * Constructor to create an object to interact with the REST API of a particular
             * MediaWiki server. mw.Rest objects represent the REST API of a particular
             * MediaWiki server.
             *
             * @example
             * ```js
             * var api = new mw.Rest();
             * api.get( '/v1/page/Main_Page/html' )
             * .done( function ( data ) {
             *     console.log( data );
             * } );
             *
             * api.post( '/v1/page/Main_Page', {
             *     token: 'anon_token',
             *     source: 'Lörem Ipsüm',
             *     comment: 'tästing',
             *     title: 'My_Page'
             * }, {
             *     'authorization': 'token'
             * } )
             * .done( function ( data ) {
             *     console.log( data );
             * } );
             * ```
             * @param {Rest.Options} [options] See {@link mw.Rest.Options}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Rest.html#Rest
             */
            constructor(options?: Rest.Options);

            private defaults: Required<Rest.Options>;

            /**
             * Abort all unfinished requests issued by this Api object.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Rest.html#abort
             */
            abort(): void;

            /**
             * Perform the API call.
             *
             * @param {string} path
             * @param {JQuery.AjaxSettings} [ajaxOptions]
             * @returns {JQuery.Promise<Rest.Response>} Done: API response data and the jqXHR object.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Api.html#ajax
             */
            ajax(path: string, ajaxOptions?: JQuery.AjaxSettings): JQuery.Promise<Rest.Response>;

            /**
             * Perform REST API DELETE request.
             *
             * Note: only sending `application/json` is currently supported.
             *
             * @since 1.39
             * @param {string} path
             * @param {Object.<string, any>} body
             * @param {Object.<string, any>} [headers]
             * @returns {JQuery.Promise<Rest.Response>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Rest.html#delete
             */
            delete(
                path: string,
                body: Record<string, any>,
                headers?: Record<string, any>
            ): JQuery.Promise<Rest.Response>;

            /**
             * Perform REST API get request.
             *
             * @param {string} path
             * @param {Object.<string, any>} query
             * @param {Object.<string, any>} [headers]
             * @returns {JQuery.Promise<Rest.Response>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Rest.html#get
             */
            get(
                path: string,
                query: Record<string, any>,
                headers?: Record<string, any>
            ): JQuery.Promise<Rest.Response>;

            /**
             * Perform REST API post request.
             *
             * Note: only sending `application/json` is currently supported.
             *
             * @since 1.42 - body parameter is optional.
             * @param {string} path
             * @param {Object.<string, any>} [body]
             * @param {Object.<string, any>} [headers]
             * @returns {JQuery.Promise<Rest.Response>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Rest.html#post
             */
            post(
                path: string,
                body?: Record<string, any>,
                headers?: Record<string, any>
            ): JQuery.Promise<Rest.Response>;

            /**
             * Perform REST API PUT request.
             *
             * Note: only sending `application/json` is currently supported.
             *
             * @since 1.39
             * @param {string} path
             * @param {Object.<string, any>} body
             * @param {Object.<string, any>} [headers]
             * @returns {JQuery.Promise<Rest.Response>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Rest.html#put
             */
            put(
                path: string,
                body: Record<string, any>,
                headers?: Record<string, any>
            ): JQuery.Promise<Rest.Response>;
        }

        namespace Rest {
            /**
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Rest.html#.Options
             */
            interface Options {
                /**
                 * Default options for {@link Rest.ajax ajax()} calls. Can be overridden by passing `options` to
                 * the {@link mw.Rest} constructor.
                 */
                ajax?: JQuery.AjaxSettings;
            }

            // Unknown JSON object
            type Response = Record<string, any>;
        }
    }
}

/** @deprecated Use {@link mw.Rest.Options} instead. Note that `RestOptions` is strictly equivalent to `Required<mw.Rest.Options>` as properties are now optional for consistency. */
export type RestOptions = Required<mw.Rest.Options>;
/** @deprecated Use {@link mw.Rest.Response} instead */
export type RestResponse = mw.Rest.Response;

export {};
