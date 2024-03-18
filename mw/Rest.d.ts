declare global {
    namespace mw {
        /**
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Rest
         */
        class Rest {
            /**
             * Constructor to create an object to interact with the REST API of a particular
             * MediaWiki server. mw.Rest objects represent the REST API of a particular
             * MediaWiki server.
             *
             * ```js
             * var api = new mw.Rest();
             * api.get( '/v1/page/Main_Page/html' )
             * .done( function ( data ) {
             *     console.log( data );
             * } );
             *
             * api.post( '/v1/page/Main_Page', {
             *      token: 'anon_token',
             *      source: 'Lörem Ipsüm',
             *      comment: 'tästing',
             *      title: 'My_Page'
             * }, {
             *     'authorization': 'token'
             * } )
             * .done( function ( data ) {
             *     console.log( data );
             * } );
             * ```
             *
             * @param {Partial<Rest.Options>} [options]
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Rest-method-constructor
             */
            constructor(options?: Partial<Rest.Options>);

            private defaults: Rest.Options;

            /**
             * Abort all unfinished requests issued by this Api object.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Rest-method-abort
             */
            abort(): void;

            /**
             * Perform REST API get request.
             *
             * @param {string} path
             * @param {Object.<string, any>} query
             * @param {Object.<string, any>} [headers]
             * @returns {JQuery.Promise<Rest.Response>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Rest-method-get
             */
            get(
                path: string,
                query: Record<string, any>,
                headers?: Record<string, any>
            ): JQuery.Promise<Rest.Response>;

            /**
             * Perform REST API post request.
             *
             * Note: only sending application/json is currently supported.
             *
             * @param {string} path
             * @param {Object.<string, any>} body
             * @param {Object.<string, any>} [headers]
             * @returns {JQuery.Promise<Rest.Response>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Rest-method-post
             */
            post(
                path: string,
                body: Record<string, any>,
                headers?: Record<string, any>
            ): JQuery.Promise<Rest.Response>;

            /**
             * Perform REST API PUT request.
             *
             * Note: only sending application/json is currently supported.
             *
             * @param {string} path
             * @param {Object.<string, any>} body
             * @param {Object.<string, any>} [headers]
             * @returns {JQuery.Promise<Rest.Response>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Rest-method-put
             */
            put(
                path: string,
                body: Record<string, any>,
                headers?: Record<string, any>
            ): JQuery.Promise<Rest.Response>;

            /**
             * Perform REST API DELETE request.
             *
             * Note: only sending application/json is currently supported.
             *
             * @param {string} path
             * @param {Object.<string, any>} body
             * @param {Object.<string, any>} [headers]
             * @returns {JQuery.Promise<Rest.Response>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Rest-method-delete
             */
            delete(
                path: string,
                body: Record<string, any>,
                headers?: Record<string, any>
            ): JQuery.Promise<Rest.Response>;

            /**
             * Perform the API call.
             *
             * @param {string} path
             * @param {JQuery.AjaxSettings} [ajaxOptions]
             * @returns {JQuery.Promise<Rest.Response>} Done: API response data and the jqXHR object.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api-method-ajax
             */
            ajax(path: string, ajaxOptions?: JQuery.AjaxSettings): JQuery.Promise<Rest.Response>;
        }

        namespace Rest {
            interface Options {
                ajax: JQuery.AjaxSettings;
            }

            // Unknown JSON object
            type Response = Record<string, any>;
        }
    }
}

/** @deprecated Use {@link mw.Rest.Options} instead */
export type RestOptions = mw.Rest.Options;
/** @deprecated Use {@link mw.Rest.Response} instead */
export type RestResponse = mw.Rest.Response;

export {};
