import {
    ApiEditPageParams,
    ApiParseParams,
    ApiQueryAllMessagesParams,
    ApiRollbackParams,
    ApiUploadParams,
} from "./api_params";

type title = string | mw.Title;
type ApiParams = Record<
    string,
    string | string[] | boolean | number | number[]
>;
type ApiResponse = Record<string, any>; // it will always be a JSON object, the rest is uncertain ...

/**
 * Default options for jQuery#ajax calls. Can be overridden by passing
 * `options` to {@link mw.Api} constructor.
 *
 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api-property-defaultOptions
 */
interface ApiOptions {
    /**
     * Default query parameters for API requests
     */
    parameters?: Record<string, string>;
    /**
     * Default options for jQuery#ajax
     */
    ajax?: JQuery.AjaxSettings;
    /**
     * Whether to use U+001F when joining multi-valued parameters (since 1.28).
     * Default is true if ajax.url is not set, false otherwise for compatibility.
     */
    useUS?: boolean;
}

interface ForeignApiOptions extends ApiOptions {
    anonymous?: boolean;
}

declare global {
    namespace mw {
        /**
         * Constructor to create an object to interact with the API of a particular
         * MediaWiki server. mw.Api objects represent the API of a particular MediaWiki server.
         *
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api
         */
        class Api {
            /**
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api-method-constructor
             */
            constructor(options?: ApiOptions);

            abort(): void;

            /**
             * Perform API get request
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api-method-get
             */
            get(
                parameters: ApiParams,
                ajaxOptions?: JQuery.AjaxSettings
            ): JQuery.Promise<ApiResponse>;

            post(
                parameters: ApiParams,
                ajaxOptions?: JQuery.AjaxSettings
            ): JQuery.Promise<ApiResponse>;

            preprocessParameters(parameters: ApiParams, useUS: boolean): void;

            // index.js
            ajax(
                parameters: ApiParams,
                ajaxOptions?: JQuery.AjaxSettings
            ): JQuery.Promise<ApiResponse>;

            postWithToken(
                tokenType: string,
                params: ApiParams,
                ajaxOptions?: JQuery.AjaxSettings
            ): JQuery.Promise<ApiResponse>;

            getToken(
                type: string,
                additionalParams?: ApiParams
            ): JQuery.Promise<string>;

            badToken(type: string): void;

            getErrorMessage(data: ApiResponse): JQuery;

            // edit.js
            /**
             * Post to API with csrf token. If we have no token, get one and try to post. If
             * we have a cached token try using that, and if it fails, blank out the cached
             * token and start over.
             *
             * @param params API parameters
             * @param ajaxOptions
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.edit-method-postWithEditToken
             */
            postWithEditToken(
                params: ApiParams,
                ajaxOptions?: JQuery.AjaxSettings
            ): JQuery.Promise<ApiResponse>;

            getEditToken(): JQuery.Promise<string>;

            create(
                title: title,
                params: ApiEditPageParams,
                content: string
            ): JQuery.Promise<ApiResponse>;

            edit(
                title: title,
                transform: (data: {
                    timestamp: string;
                    content: string;
                }) => string | ApiEditPageParams
            ): JQuery.Promise<any>;

            newSection(
                title: title,
                header: string,
                message: string,
                additionalParams?: ApiEditPageParams
            ): JQuery.Promise<ApiResponse>;

            // user.js
            getUserInfo(): JQuery.Promise<{
                groups: string[];
                rights: string[];
            }>;

            assertCurrentUser(
                query: ApiParams
            ): JQuery.Promise<{
                assert: "anon" | "user";
                assertUser: string;
            }>;

            // options.js
            saveOption(
                name: string,
                value: string
            ): JQuery.Promise<ApiResponse>;

            saveOptions(options: {
                [optionName: string]: string;
            }): JQuery.Promise<ApiResponse>;

            // watch.js
            watch(
                pages: title | title[]
            ): JQuery.Promise<{
                watch:
                    | { title: string; watched: boolean }
                    | Array<{ title: string; watched: boolean }>;
            }>;

            unwatch(
                pages: title | title[]
            ): JQuery.Promise<{
                watch:
                    | { title: string; watched: boolean }
                    | Array<{ title: string; watched: boolean }>;
            }>;

            // parse.js
            parse(
                content: string | mw.Title,
                additionalParams?: ApiParseParams
            ): JQuery.Promise<ApiResponse>;

            // messages.js
            getMessages(
                messages: string[],
                options?: ApiQueryAllMessagesParams
            ): JQuery.Promise<ApiResponse>;

            loadMessages(
                messages: string[],
                options?: ApiQueryAllMessagesParams
            ): JQuery.Promise<ApiResponse>;

            loadMessagesIfMissing(
                messages: string[],
                options?: ApiQueryAllMessagesParams
            ): JQuery.Promise<ApiResponse>;

            // category.js
            isCategory(title: title): JQuery.Promise<boolean>;

            getCategoriesByPrefix(prefix: string): JQuery.Promise<string[]>;

            getCategories(title: title): JQuery.Promise<boolean | mw.Title[]>;

            // rollback.js
            /**
             * Convenience method for `action=rollback`.
             *
             * @param {string|mw.Title} page
             * @param {string} user
             * @param {Object} [params] Additional parameters
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.rollback-method-rollback
             */
            rollback(
                page: title,
                user: string,
                params?: ApiRollbackParams
            ): JQuery.Promise<any>;

            // upload.js
            chunkedUpload(
                file: File,
                data: ApiUploadParams,
                chunkSize?: number,
                chunkRetries?: number
            ): JQuery.Promise<ApiResponse>;

            chunkedUploadToStash(
                file: File,
                data?: ApiUploadParams,
                chunkSize?: number,
                chunkRetries?: number
            ): JQuery.Promise<ApiResponse>;

            upload(
                file: File | Blob | HTMLInputElement,
                data: ApiUploadParams
            ): JQuery.Promise<ApiResponse>;

            uploadFromStash(
                filekey: string,
                data: ApiUploadParams
            ): JQuery.Promise<ApiResponse>;

            uploadToStash(
                file: File | HTMLInputElement,
                data?: ApiUploadParams
            ): JQuery.Promise<ApiResponse>;

            // login.js
            login(
                username: string,
                password: string
            ): JQuery.Promise<ApiResponse>;
        }

        class ForeignApi extends mw.Api {
            constructor(url: string | mw.Uri, options?: ForeignApiOptions);

            getOrigin(): string | void;
        }
    }
}

export {};
