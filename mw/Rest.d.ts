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
             * Constructor to create an object to interact with the REST API of a particular MediaWiki server.
             * mw.Rest objects represent the REST API of a particular MediaWiki server.
             *
             *     var api = new mw.Rest();
             *     api.get( '/v1/page/Main_Page/html' )
             *     .done( function ( data ) {
             *         console.log( data );
             *     } );
             *
             *     api.post( '/v1/page/Main_Page', {
             *          token: 'anon_token',
             *          source: 'Lörem Ipsüm',
             *          comment: 'tästing',
             *          title: 'My_Page'
             *     }, {
             *         'authorization': 'token'
             *     } )
             *     .done( function ( data ) {
             *         console.log( data );
             *     } );
             *
             * @constructor
             * @param {RestOptions} options
             */
            constructor(options?: RestOptions);

            /**
             * Abort all unfinished requests issued by this Api object.
             *
             * @method
             */
            abort(): void;

            /**
             * Perform the API call.
             *
             * @method
             * @param {string} path
             * @param {JQuery.AjaxSettings} [ajaxOptions]
             * @return {JQuery.Promise<RestResponse>} API response data and the jqXHR object
             */
            ajax(path: string, ajaxOptions?: JQuery.AjaxSettings): JQuery.Promise<RestResponse>;

            /**
             * Perform REST API DELETE request.
             *
             * Note: only sending application/json is currently supported.
             *
             * @param {string} path
             * @param {Object} body
             * @param {Object} [headers]
             * @return {JQuery.Promise<RestResponse>}
             */
            delete(
                path: string,
                body: Record<string, any>,
                headers?: JQuery.AjaxSettings["headers"]
            ): JQuery.Promise<RestResponse>;

            /**
             * Perform REST API get request
             *
             * @method
             * @param {string} path
             * @param {Object} query
             * @param {Object} [headers]
             * @return {JQuery.Promise<RestResponse>} API response data and the jqXHR object
             */
            get(
                path: string,
                query: Record<string, any>,
                headers?: JQuery.AjaxSettings["headers"]
            ): JQuery.Promise<RestResponse>;

            /**
             * Perform REST API post request.
             *
             * Note: only sending application/json is currently supported.
             *
             * @method
             * @param {string} path
             * @param {Object} body
             * @param {Object} [headers]
             * @return {JQuery.Promise<RestResponse>}
             */
            post(
                path: string,
                body: Record<string, any>,
                headers?: JQuery.AjaxSettings["headers"]
            ): JQuery.Promise<RestResponse>;

            /**
             * Perform REST API PUT request.
             *
             * Note: only sending application/json is currently supported.
             *
             * @method
             * @param {string} path
             * @param {Object} body
             * @param {Object} [headers]
             * @return {JQuery.Promise<RestResponse>}
             */
            put(
                path: string,
                body: Record<string, any>,
                headers?: JQuery.AjaxSettings["headers"]
            ): JQuery.Promise<RestResponse>;

            /**
             * Lower cases the key names in the provided object.
             *
             * @private
             * @param {Object} headers
             * @return {Object}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Rest-method-objectKeysToLowerCase
             */
            objectKeysToLowerCase(headers: Record<string, any>): Record<string, any>;

            /**
             * @private
             */
            defaults: RestOptions;

            requests: JQuery.jqXHR[];
        }
    }
}

export {};
