import { ApiOptions } from "./Api";

interface ForeignApiOptions extends ApiOptions {
    /**
     * Whether to perform all requests anonymously. Use this option if the target wiki may otherwise not accept cross-origin requests, or if you don't need to perform write actions or read restricted information and want to avoid the overhead.
     */
    anonymous?: boolean;
}

declare global {
    namespace mw {
        /**
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.ForeignApi
         */
        class ForeignApi extends mw.Api {
            /**
             * Create an object like `mw.Api`, but automatically handling everything required to communicate with another MediaWiki wiki via cross-origin requests (CORS).
             *
             * The foreign wiki must be configured to accept requests from the current wiki. See <https://www.mediawiki.org/wiki/Manual:$wgCrossSiteAJAXdomains> for details.
             * ```js
             * var api = new mw.ForeignApi( 'https://commons.wikimedia.org/w/api.php' );
             * api.get( {
             *     action: 'query',
             *     meta: 'userinfo'
             * } ).done( function ( data ) {
             *     console.log( data );
             * } );
             * ```
             *
             * To ensure that the user at the foreign wiki is logged in, pass the `assert: 'user'` parameter to `get()`/`post()` (since MW 1.23): if they are not, the API request will fail. (Note that this doesn't guarantee that it's the same user.)
             *
             * Authentication-related MediaWiki extensions may extend this class to ensure that the user authenticated on the current wiki will be automatically authenticated on the foreign one. These extension modules should be registered using the ResourceLoaderForeignApiModules hook. See CentralAuth for a practical example. The general pattern to extend and override the name is:
             * ```js
             * function MyForeignApi() {};
             * OO.inheritClass( MyForeignApi, mw.ForeignApi );
             * mw.ForeignApi = MyForeignApi;
             * ```
             *
             * @param {string | mw.Uri} url URL pointing to another wiki's `api.php` endpoint.
             * @param {ForeignApiOptions?} options
             * @since 1.26
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.ForeignApi-method-constructor
             */
            constructor(url: string | mw.Uri, options?: ForeignApiOptions);

            /**
             * Return the origin to use for API requests, in the required format (protocol, host and port, if any).
             *
             * @protected
             * @return {string | undefined}
             */
            protected getOrigin(): string | undefined;
        }
    }
}

export {};
