import { RestOptions } from "./Rest";

declare global {
    namespace mw {
        /**
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.ForeignRest
         */
        class ForeignRest extends Rest {
            static static: {};
            static super: typeof Rest;
            /** @deprecated Use `super` instead */
            static parent: typeof Rest;

            /**
             * Create an object like {@link mw.Rest}, but automatically handling everything required
             * to communicate with another MediaWiki wiki via cross-origin requests (CORS).
             *
             * The foreign wiki must be configured to accept requests from the current wiki. See https://www.mediawiki.org/wiki/Manual:$wgCrossSiteAJAXdomains for details.
             *
             * ```js
             * var api = new mw.ForeignRest( 'https://commons.wikimedia.org/w/rest.php' );
             * api.get( '/page/Main_Page/html' )
             * .done( function ( data ) {
             *     console.log( data );
             * } );
             * ```
             *
             * Authentication-related MediaWiki extensions may extend this class to ensure that
             * the user authenticated on the current wiki will be automatically authenticated on
             * the foreign one. These extension modules should be registered using the
             * ResourceLoaderForeignApiModules hook. See CentralAuth for a practical example.
             * The general pattern to extend and override the name is:
             *
             * ```js
             * function MyForeignRest() {};
             * OO.inheritClass( MyForeignRest, mw.ForeignRest );
             * mw.ForeignRest = MyForeignRest;
             * ```
             *
             * @since 1.36
             * @param {string} url URL pointing to another wiki's `rest.php` endpoint.
             * @param {ForeignApi} foreignActionApi
             * @param {Partial<ForeignRest.Options>} [options]
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.ForeignRest-method-constructor
             */
            constructor(
                url: string,
                foreignActionApi: ForeignApi,
                options?: Partial<ForeignRest.Options>
            );
        }

        namespace ForeignRest {
            interface Options extends RestOptions {
                /**
                 * Perform all requests anonymously. Use this option if the target wiki may otherwise not
                 * accept cross-origin requests, or if you don't need to perform write actions or read
                 * restricted information and want to avoid the overhead.
                 */
                anonymous: boolean;
            }
        }
    }
}

export type ForeignRestOptions = mw.ForeignRest.Options;

export {};
