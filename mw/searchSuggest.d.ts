import { ApiResponse } from "./Api";

declare global {
    namespace mw.searchSuggest {
        /**
         * Queries the wiki and calls response with the result.
         */
        function request(
            api: Api,
            query: string,
            response: (result: string[], info: ResultInfo) => void,
            maxRows?: number | "max",
            namespace?: number | number[]
        ): JQuery.Promise<ApiResponse>;

        interface ResultInfo {
            type: string;
            searchId: string;
            query: string;
        }
    }
}

export {};
