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
type ApiResponse = Record<string, any>; // it will always be a JSON object, the rest is uncertain...

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
         * Client library for the action API. See mw.Rest for the REST API.
         *
         * See also <https://www.mediawiki.org/wiki/API:Main_page>.
         *
         * Interact with the API of a particular MediaWiki site. mw.Api objects represent the API of
         * one particular MediaWiki site.
         *
         *     var api = new mw.Api();
         *     api.get( {
         *         action: 'query',
         *         meta: 'userinfo'
         *     } ).done( function ( data ) {
         *         console.log( data );
         *     } );
         *
         * Since MW 1.25, multiple values for a parameter can be specified using an array:
         *
         *     var api = new mw.Api();
         *     api.get( {
         *         action: 'query',
         *         meta: [ 'userinfo', 'siteinfo' ] // same effect as 'userinfo|siteinfo'
         *     } ).done( function ( data ) {
         *         console.log( data );
         *     } );
         *
         * Since MW 1.26, boolean values for API parameters can be specified natively. Parameter
         * values set to `false` or `undefined` will be omitted from the request, as required by
         * the API.
         *
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api
         */
        class Api {
            /**
             * Constructor to create an object to interact with the API of a particular MediaWiki
             * server. mw.Api objects represent the API of a particular MediaWiki server.
             *
             * @param {ApiOptions} options
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api-method-constructor
             */
            constructor(options?: ApiOptions);

            /**
             * Abort all unfinished requests issued by this Api object.
             *
             * @method
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api-method-abort
             */
            abort(): void;

            /**
             * Perform the API call.
             *
             * @param {ApiParams} parameters Parameters to the API. See also #defaultOptions.parameters.
             * @param {JQuery.AjaxSettings} [ajaxOptions] Parameters to pass to jQuery.ajax. See also
             *   #defaultOptions.ajax.
             * @return {JQuery.Promise<ApiResponse>} A promise that settles when the API response is processed.
             *   Has an 'abort' method which can be used to abort the request.
             *
             *   - On success, resolves to `( result, jqXHR )` where `result` is the parsed API response.
             *   - On an API error, rejects with `( code, result, result, jqXHR )` where `code` is the
             *     [API error code](https://www.mediawiki.org/wiki/API:Errors_and_warnings), and `result`
             *     is as above. When there are multiple errors, the code from the first one will be used.
             *     If there is no error code, "unknown" is used.
             *   - On other types of errors, rejects with `( 'http', details )` where `details` is an object
             *     with three fields: `xhr` (the jqXHR object), `textStatus`, and `exception`.
             *     The meaning of the last two fields is as follows:
             *     - When the request is aborted (the abort method of the promise is called), textStatus
             *       and exception are both set to "abort".
             *     - On a network timeout, textStatus and exception are both set to "timeout".
             *     - On a network error, textStatus is "error" and exception is the empty string.
             *     - When the HTTP response code is anything other than 2xx or 304 (the API does not
             *       use such response codes but some intermediate layer might), textStatus is "error"
             *       and exception is the HTTP status text (the text following the status code in the
             *       first line of the server response). For HTTP/2, `exception` is always an empty string.
             *     - When the response is not valid JSON but the previous error conditions aren't met,
             *       textStatus is "parsererror" and exception is the exception object thrown by
             *       `JSON.parse`.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api-method-ajax
             */
            ajax(
                parameters: ApiParams,
                ajaxOptions?: JQuery.AjaxSettings
            ): JQuery.Promise<ApiResponse>;

            /**
             * Extend an API parameter object with an assertion that the user won't change.
             *
             * This is useful for API calls which create new revisions or log entries. When the current
             * page was loaded when the user was logged in, but at the time of the API call the user
             * is not logged in anymore (e.g. due to session expiry), their IP is recorded in the page
             * history or log, which can cause serious privacy issues. Extending the API parameters via
             * this method ensures that that won't happen, by checking the user's identity that was
             * embedded into the page when it was rendered against the active session on the server.
             *
             * Use it like this:
             *     api.postWithToken( 'csrf', api.assertCurrentUser( { action: 'edit', ... } ) )
             * When the assertion fails, the API request will fail, with one of the following error codes:
             * - apierror-assertanonfailed: when the client-side logic thinks the user is anonymous
             *   but the server thinks it is logged in;
             * - apierror-assertuserfailed: when the client-side logic thinks the user is logged in but the
             *   server thinks it is anonymous;
             * - apierror-assertnameduserfailed: when both the client-side logic and the server thinks the
             *   user is logged in but they see it logged in under a different username.
             *
             * @param {ApiParams} query Query parameters. The object will not be changed
             * @return {JQuery.Promise<{ assert: "anon" | "user", assertUser: string }>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.user-method-assertCurrentUser
             */
            assertCurrentUser(
                query: ApiParams
            ): JQuery.Promise<{
                assert: "anon" | "user";
                assertUser: string;
            }>;

            /**
             * Indicate that the cached token for a certain action of the API is bad.
             *
             * Call this if you get a 'badtoken' error when using the token returned by #getToken.
             * You may also want to use #postWithToken instead, which invalidates bad cached tokens
             * automatically.
             *
             * @since 1.26
             * @param {string} type Token type
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api-method-badToken
             */
            badToken(type: string): void;

            /**
             * Upload a file in several chunks.
             *
             * @param {File} file
             * @param {ApiUploadParams} data Other upload options, see `action=upload` API docs for more
             * @param {number} [chunkSize] Size (in bytes) per chunk (default: 5 MiB)
             * @param {number} [chunkRetries] Amount of times to retry a failed chunk (default: 1)
             * @return {JQuery.Promise<ApiResponse>}
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
             * This function will return a promise, which when resolved, will pass back a function
             * to finish the stash upload.
             *
             * @param {File | HTMLInputElement} file
             * @param {ApiUploadParams} [data]
             * @param {number} [chunkSize] Size (in bytes) per chunk (default: 5 MiB)
             * @param {number} [chunkRetries] Amount of times to retry a failed chunk (default: 1)
             * @return {JQuery.Promise<(data?: ApiUploadParams) => JQuery.Promise<ApiResponse>>} Call this function to finish the upload
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.upload-method-chunkedUploadToStash
             */
            chunkedUploadToStash(
                file: File | HTMLInputElement,
                data?: ApiUploadParams,
                chunkSize?: number,
                chunkRetries?: number
            ): JQuery.Promise<(data?: ApiUploadParams) => JQuery.Promise<ApiResponse>>;

            /**
             * Create a new page.
             *
             * Example:
             *
             *     new mw.Api().create( 'Sandbox',
             *         { summary: 'Load sand particles.' },
             *         'Sand.'
             *     );
             *
             * @param {TitleLike} title Page title
             * @param {ApiEditPageParams} params Edit API parameters
             * @param {string} content Page content
             * @return {JQuery.Promise<ApiResponse>}
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
             * To create a new page, use #create() instead.
             *
             * Simple transformation:
             *
             *     new mw.Api()
             *         .edit( 'Sandbox', function ( revision ) {
             *             return revision.content.replace( 'foo', 'bar' );
             *         } )
             *         .then( function () {
             *             console.log( 'Saved!' );
             *         } );
             *
             * Set save parameters by returning an object instead of a string:
             *
             *     new mw.Api().edit(
             *         'Sandbox',
             *         function ( revision ) {
             *             return {
             *                 text: revision.content.replace( 'foo', 'bar' ),
             *                 summary: 'Replace "foo" with "bar".',
             *                 assert: 'bot',
             *                 minor: true
             *             };
             *         }
             *     )
             *     .then( function () {
             *         console.log( 'Saved!' );
             *     } );
             *
             * Transform asynchronously by returning a promise.
             *
             *     new mw.Api()
             *         .edit( 'Sandbox', function ( revision ) {
             *             return Spelling
             *                 .corrections( revision.content )
             *                 .then( function ( report ) {
             *                     return {
             *                         text: report.output,
             *                         summary: report.changelog
             *                     };
             *                 } );
             *         } )
             *         .then( function () {
             *             console.log( 'Saved!' );
             *         } );
             *
             * @since 1.28
             * @param {TitleLike} title Page title
             * @param {(data: { timestamp: string, content: string }) => string | ApiEditPageParams} transform Callback that prepares the edit
             * @return {JQuery.Promise}
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
             * Perform API get request.
             *
             * @param {ApiParams} parameters
             * @param {JQuery.AjaxSettings} [ajaxOptions]
             * @return {JQuery.Promise<ApiResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api-method-get
             */
            get(
                parameters: ApiParams,
                ajaxOptions?: JQuery.AjaxSettings
            ): JQuery.Promise<ApiResponse>;

            /**
             * Get the categories that a particular page on the wiki belongs to.
             *
             * @param {TitleLike} title
             * @return {JQuery.Promise<false | mw.Title[]>} List of category titles or false
             * if title was not found
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.category-method-getCategories
             */
            getCategories(title: TitleLike): JQuery.Promise<false | mw.Title[]>;

            /**
             * Get a list of categories that match a certain prefix.
             *
             * E.g. given "Foo", return "Food", "Foolish people", "Foosball tables"...
             *
             * @param {string} prefix Prefix to match.
             * @return {JQuery.Promise<string[]>} Matched categories
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.category-method-getCategoriesByPrefix
             */
            getCategoriesByPrefix(prefix: string): JQuery.Promise<string[]>;

            /**
             * API helper to grab a csrf token.
             *
             * @return {JQuery.Promise<string>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.edit-method-getEditToken
             */
            getEditToken(): JQuery.Promise<string>;

            /**
             * Given an API response indicating an error, get a jQuery object containing a human-readable
             * error message that you can display somewhere on the page.
             *
             * For better quality of error messages, it's recommended to use the following options in your
             * API queries:
             *
             *     errorformat: 'html',
             *     errorlang: mw.config.get( 'wgUserLanguage' ),
             *     errorsuselocal: true,
             *
             * Error messages, particularly for editing pages, may consist of multiple paragraphs of text.
             * Your user interface should have enough space for that.
             *
             * Example usage:
             *
             *     var api = new mw.Api();
             *     // var title = 'Test valid title';
             *     var title = 'Test invalid title <>';
             *     api.postWithToken( 'watch', {
             *       action: 'watch',
             *       title: title
             *     } ).then( function ( data ) {
             *       mw.notify( 'Success!' );
             *     }, function ( code, data ) {
             *       mw.notify( api.getErrorMessage( data ), { type: 'error' } );
             *     } );
             *
             * @param {ApiResponse} data API response indicating an error
             * @return {JQuery} Error messages, each wrapped in a `<div>`
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api-method-getErrorMessage
             */
            getErrorMessage(data: ApiResponse): JQuery;

            /**
             * Get a set of messages.
             *
             * @param {string|string[]} messages Messages to retrieve
             * @param {ApiQueryAllMessagesParams} [options] Additional parameters for the API call
             * @return {JQuery.Promise<ApiResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.messages-method-getMessages
             */
            getMessages(
                messages: string | string[],
                options?: ApiQueryAllMessagesParams
            ): JQuery.Promise<ApiResponse>;

            /**
             * Get a token for a certain action from the API.
             *
             * @since 1.22
             * @param {string} type Token type
             * @param {(ApiParams | string)} [additionalParams] Additional parameters for the API (since 1.35). When given a string, it's treated as the `assert` parameter (since 1.25)
             * @return {JQuery.Promise<string>} Received token
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api-method-getToken
             */
            getToken(type: string, additionalParams?: ApiParams | string): JQuery.Promise<string>;

            /**
             * Get the current user's groups and rights.
             *
             * @return {JQuery.Promise<{ groups: string[], rights: string[] }>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.user-method-getUserInfo
             */
            getUserInfo(): JQuery.Promise<{
                groups: string[];
                rights: string[];
            }>;

            /**
             * Determine if a category exists.
             *
             * @param {TitleLike} title
             * @return {JQuery.Promise<boolean>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.category-method-isCategory
             */
            isCategory(title: TitleLike): JQuery.Promise<boolean>;

            /**
             * Load a set of messages and add them to mw.messages.
             *
             * @param {string|string[]} messages Messages to retrieve
             * @param {ApiQueryAllMessagesParams} [options] Additional parameters for the API call
             * @return {JQuery.Promise<ApiResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.messages-method-loadMessages
             */
            loadMessages(
                messages: string | string[],
                options?: ApiQueryAllMessagesParams
            ): JQuery.Promise<ApiResponse>;

            /**
             * Loads a set of messages and add them to mw.messages. Only messages that are not already known
             * are loaded. If all messages are known, the returned promise is resolved immediately.
             *
             * @param {string[]} messages Messages to retrieve
             * @param {ApiQueryAllMessagesParams} [options] Additional parameters for the API call
             * @return {JQuery.Promise<ApiResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.messages-method-loadMessagesIfMissing
             */
            loadMessagesIfMissing(
                messages: string[],
                options?: ApiQueryAllMessagesParams
            ): JQuery.Promise<ApiResponse>;

            /**
             * @param {string} username
             * @param {string} password
             * @return {JQuery.Promise<ApiResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.login-method-login
             */
            login(username: string, password: string): JQuery.Promise<ApiResponse>;

            /**
             * Post a new section to the page.
             *
             * @param {TitleLike} title Target page
             * @param {string} header
             * @param {string} message Wikitext message
             * @param {ApiEditPageParams} additionalParams Additional API parameters
             * @return {JQuery.Promise<ApiResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.edit-method-newSection
             */
            newSection(
                title: TitleLike,
                header: string,
                message: string,
                additionalParams?: ApiEditPageParams
            ): JQuery.Promise<ApiResponse>;

            /**
             * Convenience method for `action=parse`.
             *
             * @param {TitleLike} content Content to parse, either as a wikitext string or a mw.Title
             * @param {ApiParseParams} additionalParams
             * @return {JQuery.Promise<string>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.parse-method-parse
             */
            parse(content: TitleLike, additionalParams?: ApiParseParams): JQuery.Promise<string>;

            /**
             * Perform API post request.
             *
             * @param {ApiParams} parameters
             * @param {JQuery.AjaxSettings} [ajaxOptions]
             * @return {JQuery.Promise<ApiResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api-method-post
             */
            post(
                parameters: ApiParams,
                ajaxOptions?: JQuery.AjaxSettings
            ): JQuery.Promise<ApiResponse>;

            /**
             * Post to API with csrf token. If we have no token, get one and try to post. If we have a cached token try using that, and if it fails, blank out the cached token and start over.
             *
             * @param {APIParams} params API parameters
             * @param {JQuery.AjaxSettings} [ajaxOptions]
             * @return {JQuery.Promise<ApiResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.edit-method-postWithEditToken
             */
            postWithEditToken(
                params: ApiParams,
                ajaxOptions?: JQuery.AjaxSettings
            ): JQuery.Promise<ApiResponse>;

            /**
             * Post to API with specified type of token. If we have no token, get one and try to post.
             * If we have a cached token try using that, and if it fails, blank out the
             * cached token and start over. For example to change an user option you could do:
             *
             *     new mw.Api().postWithToken( 'csrf', {
             *         action: 'options',
             *         optionname: 'gender',
             *         optionvalue: 'female'
             *     } );
             *
             * @since 1.22
             * @param {string} tokenType The name of the token, like `options` or `edit`
             * @param {ApiParams} params API parameters
             * @param {JQuery.AjaxSettings} [ajaxOptions]
             * @return {JQuery.Promise<ApiResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api-method-postWithToken
             */
            postWithToken(
                tokenType: string,
                params: ApiParams,
                ajaxOptions?: JQuery.AjaxSettings
            ): JQuery.Promise<ApiResponse>;

            /**
             * Convenience method for `action=rollback`.
             *
             * @param {TitleLike} page
             * @param {string} user
             * @param {ApiRollbackParams} [params] Additional parameters
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.rollback-method-rollback
             */
            rollback(
                page: TitleLike,
                user: string,
                params?: ApiRollbackParams
            ): JQuery.Promise<ApiResponse>;

            /**
             * Asynchronously save the value of a single user option using the API.
             *
             * @param {string} name
             * @param {string|null} value
             * @return {JQuery.Promise<ApiResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.options-method-saveOption
             */
            saveOption(name: string, value: string | null): JQuery.Promise<ApiResponse>;

            /**
             * Asynchronously save the values of user options using the [Options API](https://www.mediawiki.org/wiki/API:Options).
             *
             * If a value of `null` is provided, the given option will be reset to the default value.
             *
             * Any warnings returned by the API, including warnings about invalid option names or values,
             * are ignored. However, do not rely on this behavior.
             *
             * If necessary, the options will be saved using several sequential API requests. Only one promise
             * is always returned that will be resolved when all requests complete.
             *
             * If a request from a previous #saveOptions call is still pending, this will wait for it to be
             * completed, otherwise MediaWiki gets sad. No requests are sent for anonymous users, as they
             * would fail anyway. See T214963.
             *
             * @param {Object} options
             * @return {JQuery.Promise<ApiResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.options-method-saveOptions
             */
            saveOptions(options: Record<string, string | null>): JQuery.Promise<ApiResponse>;

            /**
             * Convenience method for `action=watch&unwatch=1`.
             *
             * @param {TitleLike | TitleLikeArray} pages
             * @return {JQuery.Promise<{ watch: { title: string, watched: boolean } | Array<{ title: string, watched: boolean }> }>}
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
                file: HTMLInputElement | File | Blob,
                data: ApiUploadParams
            ): JQuery.Promise<ApiResponse>;

            /**
             * Finish an upload in the stash.
             *
             * @param {string} filekey
             * @param {ApiUploadParams} data
             * @return {JQuery.Promise<ApiResponse>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.upload-method-uploadFromStash
             */
            uploadFromStash(filekey: string, data: ApiUploadParams): JQuery.Promise<ApiResponse>;

            /**
             * Upload a file to the stash.
             *
             * This function will return a promise, which when resolved, will pass back a function
             * to finish the stash upload. You can call that function with an argument containing
             * more, or conflicting, data to pass to the server. For example:
             *
             *     // upload a file to the stash with a placeholder filename
             *     api.uploadToStash( file, { filename: 'testing.png' } ).done( function ( finish ) {
             *         // finish is now the function we can use to finalize the upload
             *         // pass it a new filename from user input to override the initial value
             *         finish( { filename: getFilenameFromUser() } ).done( function ( data ) {
             *             // the upload is complete, data holds the API response
             *         } );
             *     } );
             *
             * @param {File | HTMLInputElement} file
             * @param {ApiUploadParams} [data]
             * @return {JQuery.Promise<(data?: ApiUploadParams) => JQuery.Promise<ApiResponse>>} Call this function to finish the upload
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.upload-method-uploadToStash
             */
            uploadToStash(
                file: File | HTMLInputElement,
                data?: ApiUploadParams
            ): JQuery.Promise<(data?: ApiUploadParams) => JQuery.Promise<ApiResponse>>;

            /**
             * Convenience method for `action=watch`.
             *
             * @since 1.35: expiry parameter can be passed when watchlist expiry is enabled
             * @param {TitleLike | TitleLikeArray} pages
             * @param {string} [expiry]
             * @return {JQuery.Promise<{ watch: { title: string, watched: boolean } | Array<{ title: string, watched: boolean }> }>}
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
             * Given a non-empty object, return one of its keys.
             *
             * @private
             * @param {Object} obj
             * @return {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.upload-method-getFirstKey
             */
            getFirstKey(obj: Record<string, string>): string;

            /**
             * Massage parameters from the nice format we accept into a format suitable for the API.
             *
             * NOTE: A value of undefined/null in an array will be represented by Array#join()
             * as the empty string. Should we filter silently? Warn? Leave as-is?
             *
             * @private
             * @param {ApiParams} parameters (modified in-place)
             * @param {boolean} useUS Whether to use U+001F when joining multi-valued parameters.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api-method-preprocessParameters
             */
            preprocessParameters(parameters: ApiParams, useUS: boolean): void;

            /**
             * Launch the upload anew if it failed because of network issues.
             *
             * @private
             * @param {string} code Error code
             * @param {Object} result API result
             * @param {Function} callable
             * @return {JQuery.Promise}
             * @see: https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.upload-method-retry
             */
            retry(
                code: string,
                result: ApiResponse,
                callable: () => JQuery.Promise<ApiResponse>
            ): JQuery.Promise<ApiResponse>;

            /**
             * Slice a chunk out of a File object.
             *
             * @private
             * @param {File} file
             * @param {number} start
             * @param {number} stop
             * @return {Blob}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.upload-method-slice
             */
            slice(file: File, start: number, stop: number): Blob;

            /**
             * Uploads a file using the FormData API.
             *
             * @private
             * @param {File} file
             * @param {Object} data Other upload options, see action=upload API docs for more
             * @return {jQuery.Promise}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api.plugin.upload-method-uploadWithFormData
             */
            uploadWithFormData(file: File, data: ApiUploadParams): JQuery.Promise<ApiResponse>;

            /**
             * @private
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/source/index4.html#mw-Api-method-constructor
             */
            defaults: ApiOptions;

            requests: JQuery.jqXHR[];
        }
    }
}

export {};
