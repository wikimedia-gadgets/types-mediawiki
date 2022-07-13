import {
    ApiEditPageParams,
    ApiParseParams,
    ApiQueryAllMessagesParams,
    ApiRollbackParams,
    ApiUploadParams,
} from "../api_params";

export interface RestOptions {
    ajax: JQuery.AjaxSettings;
}

export type RestResponse = Record<string, any>; // Unknown JSON object

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
             * @param {RestOptions} options
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Rest-method-constructor
             */
            constructor(options?: RestOptions);

            /**
             * @private
             */
            defaultOptions: RestOptions;

            /**
             * Abort all unfinished requests issued by this Api object.
             *
             * @returns {void}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Rest-method-abort
             */
            abort(): void;

            /**
             * Perform REST API get request.
             *
             * @param {string} path
             * @param {Object.<string, any>} query
             * @param {Object.<string, any>} [headers]
             * @returns {JQuery.Promise<RestResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Rest-method-get
             */
            get(
                path: string,
                query: Record<string, any>,
                headers?: Record<string, any>
            ): JQuery.Promise<RestResponse>;

            /**
             * Perform REST API post request.
             *
             * Note: only sending application/json is currently supported.
             *
             * @param {string} path
             * @param {Object.<string, any>} body
             * @param {Object.<string, any>} [headers]
             * @returns {JQuery.Promise<RestResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Rest-method-post
             */
            post(
                path: string,
                body: Record<string, any>,
                headers?: Record<string, any>
            ): JQuery.Promise<RestResponse>;

            /**
             * Perform REST API PUT request.
             *
             * Note: only sending application/json is currently supported.
             *
             * @param {string} path
             * @param {Object.<string, any>} body
             * @param {Object.<string, any>} [headers]
             * @returns {JQuery.Promise<RestResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Rest-method-put
             */
            put(
                path: string,
                body: Record<string, any>,
                headers?: Record<string, any>
            ): JQuery.Promise<RestResponse>;

            /**
             * Perform REST API DELETE request.
             *
             * Note: only sending application/json is currently supported.
             *
             * @param {string} path
             * @param {Object.<string, any>} body
             * @param {Object.<string, any>} [headers]
             * @returns {JQuery.Promise<RestResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Rest-method-delete
             */
            delete(
                path: string,
                body: Record<string, any>,
                headers?: Record<string, any>
            ): JQuery.Promise<RestResponse>;

            /**
             * Perform the API call.
             *
             * @param {string} path
             * @param {JQuery.AjaxSettings?} ajaxOptions
             * @returns {JQuery.Promise<RestResponse>} API response data and the jqXHR object
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api-method-ajax
             */
            ajax(path: string, ajaxOptions?: JQuery.AjaxSettings): JQuery.Promise<RestResponse>;
        }
    }
}

export {};
