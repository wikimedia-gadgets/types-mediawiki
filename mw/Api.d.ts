import {
    ApiEditPageParams,
    ApiParseParams,
    ApiQueryAllMessagesParams,
    ApiRollbackParams,
    ApiUploadParams,
} from "../api_params";

type TitleLike = string | mw.Title;
type TitleLikeArray = string[] | mw.Title[]; // TitleLike[] would be a mixed array
type ApiParams = Record<string, string | string[] | boolean | number | number[]>;
type ApiResponse = Record<string, any>; // it will always be a JSON object, the rest is uncertain ...

/**
 * Default options for jQuery#ajax calls. Can be overridden by passing
 * `options` to {@link mw.Api} constructor.
 *
 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api-property-defaultOptions
 */
export interface ApiOptions {
    /**
     * Default query parameters for API requests
     */
    parameters?: ApiParams;
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

declare global {
    namespace mw {
        /**
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api
         */
        class Api {
            /**
             * Constructor to create an object to interact with the API of a particular MediaWiki server. mw.Api objects represent the API of a particular MediaWiki server.
             * ```js
             * var api = new mw.Api();
             * api.get( {
             *     action: 'query',
             *     meta: 'userinfo'
             * } ).done( function ( data ) {
             *     console.log( data );
             * } );
             * ```
             * Since MW 1.25, multiple values for a parameter can be specified using an array:
             * ```js
             * var api = new mw.Api();
             * api.get( {
             *     action: 'query',
             *     meta: [ 'userinfo', 'siteinfo' ] // same effect as 'userinfo|siteinfo'
             * } ).done( function ( data ) {
             *     console.log( data );
             * } );
             * ```
             * Since MW 1.26, boolean values for a parameter can be specified directly. If the value is false or undefined, the parameter will be omitted from the request, as required by the API.
             *
             * @param {ApiOptions} options
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api-method-constructor
             */
            constructor(options?: ApiOptions);

            /**
             * @private
             */
            defaults: ApiOptions;

            /**
             * Abort all unfinished requests issued by this Api object.
             *
             * @returns {void}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api-method-abort
             */
            abort(): void;

            /**
             * Perform API get request.
             *
             * @param {ApiParams} parameters
             * @param {JQuery.AjaxSettings?} ajaxOptions
             * @returns {JQuery.Promise<ApiResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api-method-get
             */
            get(
                parameters: ApiParams,
                ajaxOptions?: JQuery.AjaxSettings
            ): JQuery.Promise<ApiResponse>;

            /**
             * Perform API post request.
             *
             * @param {ApiParams} parameters
             * @param {JQuery.AjaxSettings?} ajaxOptions
             * @returns {JQuery.Promise<ApiResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api-method-post
             */
            post(
                parameters: ApiParams,
                ajaxOptions?: JQuery.AjaxSettings
            ): JQuery.Promise<ApiResponse>;

            /**
             * Massage parameters from the nice format we accept into a format suitable for the API.
             *
             * @private
             * @param {ApiParams} parameters (modified in-place)
             * @param {boolean} useUS Whether to use U+001F when joining multi-valued parameters.
             * @returns {void}
             */
            private preprocessParameters(parameters: ApiParams, useUS: boolean): void;

            /**
             * Perform the API call.
             *
             * @param {ApiParams} parameters
             * @param {JQuery.AjaxSettings?} ajaxOptions
             * @returns {JQuery.Promise<ApiResponse>} API response data and the jqXHR object
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api-method-ajax
             */
            ajax(
                parameters: ApiParams,
                ajaxOptions?: JQuery.AjaxSettings
            ): JQuery.Promise<ApiResponse>;

            /**
             * Post to API with specified type of token. If we have no token, get one and try to post.
             * If we have a cached token try using that, and if it fails, blank out the
             * cached token and start over. For example to change an user option you could do:
             * ```js
             * new mw.Api().postWithToken( 'csrf', {
             *     action: 'options',
             *     optionname: 'gender',
             *     optionvalue: 'female'
             * } );
             * ```
             *
             * @param {string} tokenType The name of the token, like `options` or `edit`
             * @param {ApiParams} params API parameters
             * @param {JQuery.AjaxSettings?} ajaxOptions
             * @returns {JQuery.Promise<ApiResponse>}
             * @since 1.22
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api-method-postWithToken
             */
            postWithToken(
                tokenType: string,
                params: ApiParams,
                ajaxOptions?: JQuery.AjaxSettings
            ): JQuery.Promise<ApiResponse>;

            /**
             * Get a token for a certain action from the API.
             *
             * @param {string} type Token type
             * @param {(ApiParams | string)?} additionalParams Additional parameters for the API (since 1.35). When given a string, it's treated as the `assert` parameter (since 1.25)
             * @returns {JQuery.Promise<string>} Received token
             * @since 1.22
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api-method-getToken
             */
            getToken(type: string, additionalParams?: ApiParams | string): JQuery.Promise<string>;

            /**
             * Indicate that the cached token for a certain action of the API is bad.
             *
             * Call this if you get a `badtoken` error when using the token returned by `getToken()`.
             * You may also want to use `postWithToken()` instead, which invalidates bad cached tokens
             * automatically.
             *
             * @param {string} type Token type
             * @returns {void}
             * @since 1.26
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api-method-badToken
             */
            badToken(type: string): void;

            /**
             * Given an API response indicating an error, get a jQuery object containing a human-readable
             * error message that you can display somewhere on the page.
             *
             * For better quality of error messages, it's recommended to use the following options in your
             * API queries:
             *
             * ```js
             * errorformat: 'html',
             * errorlang: mw.config.get( 'wgUserLanguage' ),
             * errorsuselocal: true,
             * ```
             *
             * Error messages, particularly for editing pages, may consist of multiple paragraphs of text.
             * Your user interface should have enough space for that.
             *
             * Example usage:
             *
             * ```js
             * var api = new mw.Api();
             * // var title = 'Test valid title';
             * var title = 'Test invalid title <>';
             * api.postWithToken( 'watch', {
             *     action: 'watch',
             *     title: title
             * } ).then( function ( data ) {
             *     mw.notify( 'Success!' );
             * }, function ( code, data ) {
             *     mw.notify( api.getErrorMessage( data ), { type: 'error' } );
             * } );
             * ```
             *
             * @param {Object} data API response indicating an error
             * @returns {JQuery} Error messages, each wrapped in a `<div>`
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api-method-getErrorMessage
             */
            getErrorMessage(data: ApiResponse): JQuery;

            /**
             * Post to API with csrf token. If we have no token, get one and try to post. If we have a cached token try using that, and if it fails, blank out the cached token and start over.
             *
             * @param {APIParams} params API parameters
             * @param {JQuery.AjaxSettings?} ajaxOptions
             * @returns {JQuery.Promise<ApiResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.edit-method-postWithEditToken
             */
            postWithEditToken(
                params: ApiParams,
                ajaxOptions?: JQuery.AjaxSettings
            ): JQuery.Promise<ApiResponse>;

            /**
             * API helper to grab a csrf token.
             *
             * @returns {JQuery.Promise<string>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.edit-method-getEditToken
             */
            getEditToken(): JQuery.Promise<string>;

            /**
             * Create a new page.
             *
             * Example:
             * ```js
             * new mw.Api().create( 'Sandbox',
             *     { summary: 'Load sand particles.' },
             *     'Sand.'
             * );
             * ```
             *
             * @param {TitleLike} title Page title
             * @param {ApiEditPageParams} params Edit API parameters
             * @param {string} content Page content
             * @returns {}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.edit-method-create
             */
            create(
                title: TitleLike,
                params: ApiEditPageParams,
                content: string
            ): JQuery.Promise<ApiResponse>;

            /**
             * Edit an existing page.
             *
             * To create a new page, use create() instead.
             *
             * Simple transformation:
             * ```js
             * new mw.Api()
             *     .edit( 'Sandbox', function ( revision ) {
             *         return revision.content.replace( 'foo', 'bar' );
             *     } )
             *     .then( function () {
             *         console.log( 'Saved!' );
             *     } );
             * ```
             * Set save parameters by returning an object instead of a string:
             * ```js
             * new mw.Api().edit(
             *     'Sandbox',
             *     function ( revision ) {
             *         return {
             *             text: revision.content.replace( 'foo', 'bar' ),
             *             summary: 'Replace "foo" with "bar".',
             *             assert: 'bot',
             *             minor: true
             *         };
             *     }
             * )
             * .then( function () {
             *     console.log( 'Saved!' );
             * } );
             * ```
             * Transform asynchronously by returning a promise.
             * ```js
             * new mw.Api()
             *     .edit( 'Sandbox', function ( revision ) {
             *         return Spelling
             *             .corrections( revision.content )
             *             .then( function ( report ) {
             *                 return {
             *                     text: report.output,
             *                     summary: report.changelog
             *                 };
             *             } );
             *     } )
             *     .then( function () {
             *         console.log( 'Saved!' );
             *     } );
             * ```
             *
             * @param {TitleLike} title Page title
             * @param {(data: { timestamp: string, content: string }) => string | ApiEditPageParams} transform Callback that prepares the edit
             * @returns {JQuery.Promise<any>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.edit-method-edit
             */
            edit(
                title: TitleLike,
                transform: (data: {
                    timestamp: string;
                    content: string;
                }) => string | ApiEditPageParams
            ): JQuery.Promise<any>;

            /**
             * Post a new section to the page.
             *
             * @param {TitleLike} title Target page
             * @param {string} header
             * @param {string} message Wikitext message
             * @param {ApiEditPageParams} additionalParams Additional API parameters
             * @returns {JQuery.Promise<ApiResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.edit-method-newSection
             */
            newSection(
                title: TitleLike,
                header: string,
                message: string,
                additionalParams?: ApiEditPageParams
            ): JQuery.Promise<ApiResponse>;

            /**
             * Get the current user's groups and rights.
             *
             * @returns {JQuery.Promise<{ groups: string[], rights: string[] }>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.user-method-getUserInfo
             */
            getUserInfo(): JQuery.Promise<{
                groups: string[];
                rights: string[];
            }>;

            /**
             * Extend an API parameter object with an assertion that the user won't change.
             *
             * This is useful for API calls which create new revisions or log entries. When the current page was loaded when the user was logged in, but at the time of the API call the user is not logged in anymore (e.g. due to session expiry), their IP is recorded in the page history or log, which can cause serious privacy issues. Extending the API parameters via this method ensures that that won't happen, by checking the user's identity that was embedded into the page when it was rendered against the active session on the server.
             *
             * Use it like this: `api.postWithToken( 'csrf', api.assertCurrentUser( { action: 'edit', ... } ) )`. When the assertion fails, the API request will fail, with one of the following error codes:
             * * `apierror-assertanonfailed`: when the client-side logic thinks the user is anonymous but the server thinks it is logged in
             * * `apierror-assertuserfailed`: when the client-side logic thinks the user is logged in but the server thinks it is anonymous
             * * `apierror-assertnameduserfailed`: when both the client-side logic and the server thinks the user is logged in but they see it logged in under a different username.
             *
             * @param {ApiParams} query Query parameters. The object will not be changed
             * @returns {JQuery.Promise<{ assert: "anon" | "user", assertUser: string }>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.user-method-assertCurrentUser
             */
            assertCurrentUser(
                query: ApiParams
            ): JQuery.Promise<{
                assert: "anon" | "user";
                assertUser: string;
            }>;

            /**
             * Asynchronously save the value of a single user option using the API. See `saveOptions()`.
             *
             * @param {string} name
             * @param {string|null} value
             * @returns {JQuery.Promise<ApiResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.options-method-saveOption
             */
            saveOption(name: string, value: string | null): JQuery.Promise<ApiResponse>;

            /**
             * Asynchronously save the values of user options using the API.
             *
             * If a value of `null` is provided, the given option will be reset to the default value.
             *
             * Any warnings returned by the API, including warnings about invalid option names or values, are ignored. However, do not rely on this behavior.
             *
             * If necessary, the options will be saved using several sequential API requests. Only one promise is always returned that will be resolved when all requests complete.
             *
             * If a request from a previous `saveOptions()` call is still pending, this will wait for it to be completed, otherwise MediaWiki gets sad. No requests are sent for anonymous users, as they would fail anyway. See T214963.
             *
             * @param {Object} options
             * @returns {JQuery.Promise<ApiResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.options-method-saveOptions
             */
            saveOptions(options: Record<string, string | null>): JQuery.Promise<ApiResponse>;

            /**
             * Convenience method for `action=watch`.
             *
             * @param {TitleLike | TitleLikeArray} pages
             * @param {string?} expiry
             * @returns {JQuery.Promise<{ watch: { title: string, watched: boolean } | Array<{ title: string, watched: boolean }> }>}
             * @since 1.35: expiry parameter can be passed when watchlist expiry is enabled
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.watch-method-watch
             */
            watch<P extends TitleLike | TitleLikeArray>(
                pages: P,
                expiry?: string
            ): JQuery.Promise<{
                watch: P extends TitleLikeArray
                    ? Array<{ title: string; watched: boolean }>
                    : { title: string; watched: boolean };
            }>;

            /**
             * Convenience method for `action=watch&unwatch=1`.
             *
             * @param {TitleLike | TitleLikeArray} pages
             * @returns {JQuery.Promise<{ watch: { title: string, watched: boolean } | Array<{ title: string, watched: boolean }> }>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.watch-method-unwatch
             */
            unwatch<P extends TitleLike | TitleLikeArray>(
                pages: P
            ): JQuery.Promise<{
                watch: P extends TitleLikeArray
                    ? Array<{ title: string; watched: boolean }>
                    : { title: string; watched: boolean };
            }>;

            /**
             * Convenience method for `action=parse`.
             *
             * @param {string | mw.Title} content Content to parse, either as a wikitext string or a mw.Title
             * @param {ApiParseParams} additionalParams
             * @returns {JQuery.Promise<string>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.parse-method-parse
             */
            parse(
                content: string | mw.Title,
                additionalParams?: ApiParseParams
            ): JQuery.Promise<string>;

            /**
             * Get a set of messages.
             *
             * @param {string[]} messages Messages to retrieve
             * @param {ApiQueryAllMessagesParams?} options Additional parameters for the API call
             * @returns {JQuery.Promise<ApiResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.messages-method-getMessages
             */
            getMessages(
                messages: string[],
                options?: ApiQueryAllMessagesParams
            ): JQuery.Promise<ApiResponse>;

            /**
             * Load a set of messages and add them to `mw.messages`.
             *
             * @param {string[]} messages Messages to retrieve
             * @param {ApiQueryAllMessagesParams?} options Additional parameters for the API call
             * @returns {JQuery.Promise<ApiResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.messages-method-loadMessages
             */
            loadMessages(
                messages: string[],
                options?: ApiQueryAllMessagesParams
            ): JQuery.Promise<ApiResponse>;

            /**
             * Load a set of messages and add them to `mw.messages`. Only messages that are not already known are loaded. If all messages are known, the returned promise is resolved immediately.
             *
             * @param {string[]} messages Messages to retrieve
             * @param {ApiQueryAllMessagesParams?} options Additional parameters for the API call
             * @returns {JQuery.Promise<ApiResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.messages-method-loadMessagesIfMissing
             */
            loadMessagesIfMissing(
                messages: string[],
                options?: ApiQueryAllMessagesParams
            ): JQuery.Promise<ApiResponse>;

            /**
             * Determine if a category exists.
             *
             * @param {TitleLike} title
             * @returns {JQuery.Promise<boolean>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.category-method-isCategory
             */
            isCategory(title: TitleLike): JQuery.Promise<boolean>;

            /**
             * Get a list of categories that match a certain prefix.
             *
             * E.g. given "Foo", return "Food", "Foolish people", "Foosball tables"...
             *
             * @param {string} prefix Prefix to match.
             * @returns {JQuery.Promise<string[]>} Matched categories
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.category-method-getCategoriesByPrefix
             */
            getCategoriesByPrefix(prefix: string): JQuery.Promise<string[]>;

            /**
             * Get the categories that a particular page on the wiki belongs to.
             *
             * @param {TitleLike} title
             * @returns {JQuery.Promise<false | mw.Title[]>} List of category titles or false if title was not found
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.category-method-getCategories
             */
            getCategories(title: TitleLike): JQuery.Promise<false | mw.Title[]>;

            /**
             * Convenience method for `action=rollback`.
             *
             * @param {TitleLike} page
             * @param {string} user
             * @param {ApiRollbackParams?} params Additional parameters
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.rollback-method-rollback
             */
            rollback(
                page: TitleLike,
                user: string,
                params?: ApiRollbackParams
            ): JQuery.Promise<ApiResponse>;

            /**
             * Upload a file in several chunks.
             *
             * @param {File} file
             * @param {ApiUploadParams} data Other upload options, see `action=upload` API docs for more
             * @param {number?} chunkSize Size (in bytes) per chunk (default: 5MB)
             * @param {number?} chunkRetries Amount of times to retry a failed chunk (default: 1)
             * @returns {JQuery.Promise<ApiResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.upload-method-chunkedUpload
             */
            chunkedUpload(
                file: File,
                data: ApiUploadParams,
                chunkSize?: number,
                chunkRetries?: number
            ): JQuery.Promise<ApiResponse>;

            /**
             * Upload a file to the stash, in chunks.
             *
             * This function will return a promise that will resolve with a function to finish the stash upload.
             *
             * @param {File | HTMLInputElement} file
             * @param {ApiUploadParams?} data
             * @param {number?} chunkSize Size (in bytes) per chunk (default: 5MB)
             * @param {number?} chunkRetries Amount of times to retry a failed chunk (default: 1)
             * @returns {JQuery.Promise<(data?: ApiUploadParams) => JQuery.Promise<ApiResponse>>} Call this function to finish the upload
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.upload-method-chunkedUploadToStash
             */
            chunkedUploadToStash(
                file: File,
                data?: ApiUploadParams,
                chunkSize?: number,
                chunkRetries?: number
            ): JQuery.Promise<(data?: ApiUploadParams) => JQuery.Promise<ApiResponse>>;

            /**
             * Upload a file to MediaWiki.
             *
             * The file will be uploaded using AJAX and FormData.
             *
             * @param {HTMLInputElement | File | Blob} file HTML `input type=file` element with a file already inside of it, or a File object.
             * @param {ApiUploadParams} data Other upload options, see `action=upload` API docs for more
             * @return {JQuery.Promise<ApiResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.upload-method-upload
             */
            upload(
                file: File | Blob | HTMLInputElement,
                data: ApiUploadParams
            ): JQuery.Promise<ApiResponse>;

            /**
             * Finish an upload in the stash.
             *
             * @param {string} filekey
             * @param {ApiUploadParams} data
             * @returns {JQuery.Promise<ApiResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.upload-method-uploadFromStash
             */
            uploadFromStash(filekey: string, data: ApiUploadParams): JQuery.Promise<ApiResponse>;

            /**
             * Upload a file to the stash.
             *
             * This function will return a promise that will resolve with a function to finish the stash upload. You can call that function with an argument containing more, or conflicting, data to pass to the server. For example:
             * ```js
             * // upload a file to the stash with a placeholder filename
             * api.uploadToStash( file, { filename: 'testing.png' } ).done( function ( finish ) {
             *     // finish is now the function we can use to finalize the upload
             *     // pass it a new filename from user input to override the initial value
             *     finish( { filename: getFilenameFromUser() } ).done( function ( data ) {
             *         // the upload is complete, data holds the API response
             *     } );
             * } );
             * ```
             *
             * @param {File | HTMLInputElement} file
             * @param {ApiUploadParams?} data
             * @return {JQuery.Promise}
             * @returns {JQuery.Promise<(data?: ApiUploadParams) => JQuery.Promise<ApiResponse>>} Call this function to finish the upload
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.upload-method-uploadToStash
             */
            uploadToStash(
                file: File | HTMLInputElement,
                data?: ApiUploadParams
            ): JQuery.Promise<(data?: ApiUploadParams) => JQuery.Promise<ApiResponse>>;

            /**
             * @param {string} username
             * @param {string} password
             * @returns {JQuery.Promise<ApiResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.login-method-login
             */
            login(username: string, password: string): JQuery.Promise<ApiResponse>;
        }
    }
}

export {};
