import { ApiResponse } from "./Api";

interface Constructor {
    /**
     * @param {mw.Title} title Title to post to.
     */
    new (title: mw.Title, api: mw.Api): mw.messagePoster.MessagePoster;
}

/**
 * Message options.
 */
interface Options {
    /**
     * {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:Tags Change tags} to add to the message's revision, pipe-separated.
     */
    tags?: string;
}

/**
 * Factory for MessagePoster objects. This provides a pluggable way to script the
 * action of adding a message to someone's talk page.
 *
 * The constructor is not publicly accessible; use {@link mw.messagePoster.factory} instead.
 *
 * @see https://doc.wikimedia.org/mediawiki-core/master/js/MessagePosterFactory.html
 */
interface MessagePosterFactory {
    /**
     * Create a MessagePoster for given a title.
     *
     * A promise for this is returned. It works by determining the content model, then loading
     * the corresponding module (which registers the MessagePoster class), and finally constructing
     * an object for the given title.
     *
     * This does not require the message and should be called as soon as possible, so that the
     * API and ResourceLoader requests run in the background.
     *
     * @since 1.27 - apiUrl parameter can be passed.
     * @param title Title that will be posted to.
     * @param apiUrl api.php URL if the title is on another wiki.
     * @returns Promise resolving to a {@link mw.messagePoster.MessagePoster}.
     *  For failure, rejected with up to three arguments:
     *  - errorCode Error code string
     *  - error Error explanation
     *  - details Further error details
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/MessagePosterFactory.html#create
     */
    create(
        title: mw.Title,
        apiUrl?: string
    ): mw.Api.Promise<
        [mw.messagePoster.MessagePoster],
        | ["content-model-query-failed", error: string, details: any]
        | ["content-model-unknown", error: string]
        | ["unexpected-response", error: string]
    >;

    /**
     * Creates a {@link mw.messagePoster.MessagePoster} instance, given a title and content model.
     *
     * @private
     * @since 1.27 - api parameter should be passed.
     * @deprecated Removed since 1.35.
     * @param contentModel Content model of title.
     * @param title Title being posted to.
     * @param api {@link mw.Api} instance that the instance should use.
     */
    createForContentModel(
        contentModel: string,
        title: mw.Title,
        api: mw.Api
    ): mw.messagePoster.MessagePoster;

    /**
     * Register a MessagePoster subclass for a given content model.
     *
     * Usage example:
     *
     * ```js
     * function MyExamplePoster() {}
     * OO.inheritClass( MyExamplePoster, mw.messagePoster.MessagePoster );
     *
     * mw.messagePoster.factory.register( 'mycontentmodel', MyExamplePoster );
     * ```
     *
     * The JavaScript files(s) that register message posters for additional content
     * models must be registered with MediaWiki via the `MessagePosterModule`
     * extension attribute, like follows:
     *
     * ```json
     * "MessagePosterModule": {
     *     "localBasePath": "", // (required)
     *     "scripts": [], // relative file path(s) (required)
     *     "dependencies": [], // module name(s) (optional)
     * }
     * ```
     *
     * @param contentModel Content model of pages this MessagePoster can post to.
     * @param constructor Constructor of a MessagePoster subclass.
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/MessagePosterFactory.html#register
     */
    register(contentModel: string, constructor: Constructor): void;

    /**
     * Unregister a given content model.
     * This is exposed for testing and should not normally be used.
     *
     * @param contentModel Content model to unregister.
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/MessagePosterFactory.html#unregister
     */
    unregister(contentModel: string): void;
}

declare global {
    namespace mw {
        /**
         * Library for posting messages to talk pages.
         *
         * @since 1.25
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.messagePoster.html
         */
        namespace messagePoster {
            /**
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.messagePoster.html#.factory
             */
            const factory: MessagePosterFactory;

            /**
             * Abstract base class for posting messages to talk pages.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.messagePoster.MessagePoster.html
             */
            abstract class MessagePoster {
                static static: {};

                /**
                 * Create an instance of `mw.messagePoster.MessagePoster`.
                 *
                 * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.messagePoster.MessagePoster.html#MessagePoster
                 */
                constructor();

                /**
                 * Post a message (with subject and body) to a talk page.
                 *
                 * @since 1.34 - options parameter can be passed.
                 * @param subject Subject/topic title.  The amount of wikitext supported is
                 *  implementation-specific. It is recommended to only use basic wikilink syntax for
                 *  maximum compatibility.
                 * @param body Body, as wikitext.  Signature code will automatically be added
                 *  by MessagePosters that require one, unless the message already contains the string
                 *  '~~~'.
                 * @param options Message options.
                 * @returns Promise completing when the post succeeds or fails.
                 *  For failure, will be rejected with three arguments:
                 *  - primaryError - Primary error code. For a {@link mw.Api} failure,
                 *    this should be 'api-fail'.
                 *  - secondaryError - Secondary error code. For a {@link mw.Api} failure,
                 *    this, should be mw.Api's code, e.g. 'http', 'ok-but-empty', or the error passed through
                 *    from the server.
                 *  - details - Further details about the error
                 * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.messagePoster.MessagePoster.html#post
                 */
                abstract post(
                    subject: string,
                    body: string,
                    options?: Options
                ): Api.Promise<
                    [ApiResponse, JQuery.jqXHR<ApiResponse>],
                    [primaryError: string, secondaryError?: string, details?: any]
                >;
            }

            /**
             * Posts messages to wikitext talk pages.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.messagePoster.WikitextMessagePoster.html
             */
            class WikitextMessagePoster extends MessagePoster {
                static static: {};
                static super: typeof MessagePoster;
                /** @deprecated Use `super` instead */
                static parent: typeof MessagePoster;

                /**
                 * Create an instance of {@link mw.messagePoster.WikitextMessagePoster}.
                 *
                 * @since 1.27 - api parameter should be passed.
                 * @param title Wikitext page in a talk namespace, to post to.
                 * @param api {@link mw.Api} object to use.
                 * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.messagePoster.WikitextMessagePoster.html#WikitextMessagePoster
                 */
                constructor(title: Title, api: Api);

                /**
                 * Post a message (with subject and body) to a wikitext talk page.
                 *
                 * @since 1.34 - options parameter can be passed.
                 * @param subject Section title.
                 * @param body Message body, as wikitext. Signature code will automatically be added
                 *  unless the message already contains the string '~~~'.
                 * @param options Message options.
                 * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.messagePoster.WikitextMessagePoster.html#post
                 */
                post(
                    subject: string,
                    body: string,
                    options?: Options
                ): Api.Promise<
                    [ApiResponse, JQuery.jqXHR<ApiResponse>],
                    ["api-unexpected"] | ["api-fail", code: string, details: any]
                >;
            }
        }
    }
}

export {};
