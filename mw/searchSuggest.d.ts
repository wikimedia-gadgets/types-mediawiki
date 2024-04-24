import { ApiResponse } from "./Api";

interface ResponseFunction {
    /**
     * @param {string[]} titles titles of pages that match search
     * @param {ResponseMetaData} meta meta data relating to search
     */
    (titles: string[], meta: ResponseMetaData): void;
}

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
         * ```
         * mw.loader.using('mediawiki.searchSuggest').then(() => {
         *     var api = new mw.Api();
         *     mw.searchSuggest.request(api, 'Dogs that', ( results ) => {
         *         alert( `Results that match: ${results.join( '\n' );}` );
         *     });
         * });
         * ```
         */
        namespace searchSuggest {
            /**
             * Queries the wiki and calls response with the result.
             *
             * @param {Api} api
             * @param {string} query
             * @param {ResponseFunction} response
             * @param {string|number} [limit]
             * @param {string|number|string[]|number[]} [namespace]
             * @returns {JQuery.Promise<ApiResponse>}
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
