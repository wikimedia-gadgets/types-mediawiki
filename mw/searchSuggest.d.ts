import { ApiResponse } from "./Api";

/**
 * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.searchSuggest.html#~ResponseFunction
 */
interface ResponseFunction {
    /**
     * @param titles titles of pages that match search
     * @param meta meta data relating to search
     */
    (titles: string[], meta: ResponseMetaData): void;
}

/**
 * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.searchSuggest.html#~ResponseMetaData
 */
interface ResponseMetaData {
    query: string;
    /**
     * The contents of the X-Search-ID response header.
     */
    searchId: string;
    /**
     * The contents of the X-OpenSearch-Type response header.
     */
    type: string;
}

declare global {
    namespace mw {
        /**
         * Convenience library for making searches for titles that match a string.
         * Loaded via the `mediawiki.searchSuggest` ResourceLoader library.
         *
         * @example
         * ```js
         * mw.loader.using('mediawiki.searchSuggest').then(() => {
         *     var api = new mw.Api();
         *     mw.searchSuggest.request(api, 'Dogs that', ( results ) => {
         *         alert( `Results that match: ${results.join( '\n' );}` );
         *     });
         * });
         * ```
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.searchSuggest.html
         */
        namespace searchSuggest {
            /**
             * Queries the wiki and calls response with the result.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.searchSuggest.html#.request
             */
            function request(
                api: Api,
                query: string,
                response: ResponseFunction,
                limit?: number | "max",
                namespace?: number | number[]
            ): JQuery.Promise<ApiResponse>;
        }
    }
}

export {};
