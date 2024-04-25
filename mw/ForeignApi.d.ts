declare global {
    namespace mw {
        /**
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.ForeignApi.html
         */
        class ForeignApi extends Api {
            static static: {};
            static super: typeof Api;
            /** @deprecated Use `super` instead */
            static parent: typeof Api;

            /**
             * Create an object like {@link mw.Api}, but automatically handling everything required to communicate
             * with another MediaWiki wiki via cross-origin requests (CORS).
             *
             * The foreign wiki must be configured to accept requests from the current wiki. See
             * {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:$wgCrossSiteAJAXdomains} for details.
             *
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
             * To ensure that the user at the foreign wiki is logged in, pass the `assert: 'user'` parameter
             * to {@link mw.ForeignApi.get}/{@link mw.ForeignApi.post} (since MW 1.23), otherwise the API
             * request will fail. (Note that this doesn't guarantee that it's the same user. To assert that
             * the user at the foreign wiki has a specific username, pass the `assertuser` parameter with
             * the desired username.)
             *
             * Authentication-related MediaWiki extensions may extend this class to ensure that the user authenticated on the current wiki will be automatically authenticated on the foreign one. These extension modules should be registered using the ResourceLoaderForeignApiModules hook. See CentralAuth for a practical example. The general pattern to extend and override the name is:
             *
             * ```js
             * function MyForeignApi() {};
             * OO.inheritClass( MyForeignApi, mw.ForeignApi );
             * mw.ForeignApi = MyForeignApi;
             * ```
             *
             * @since 1.26
             * @param {string|Uri} url URL pointing to another wiki's `api.php` endpoint.
             * @param {ForeignApi.Options} [options] Also accepts all the options from {@link mw.Api.Options}.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.ForeignApi.html#ForeignApi
             */
            constructor(url: string | Uri, options?: ForeignApi.Options);

            /**
             * Return the origin to use for API requests, in the required format (protocol, host and port, if any).
             *
             * @returns {string|undefined}
             */
            protected getOrigin(): "*" | `${string}//${string}` | undefined;
        }

        namespace ForeignApi {
            interface Options extends Api.Options {
                /**
                 * Whether to perform all requests anonymously. Use this option if the target wiki may otherwise not accept cross-origin requests, or if you don't need to perform write actions or read restricted information and want to avoid the overhead.
                 */
                anonymous?: boolean;
            }
        }
    }
}

/** @deprecated Use `mw.ForeignApi.Options` instead. Note that `ForeignApiOptions` is strictly equivalent to `Required<mw.ForeignApi.Options>` as properties are now optional for consistency. */
export type ForeignApiOptions = Required<mw.ForeignApi.Options>;

export {};
