import "./Api";
import "./cldr";
import "./config";
import "./confirmCloseWindow";
import "./cookie";
import "./debug";
import "./deflate";
import "./ForeignApi";
import "./ForeignRest";
import "./ForeignUpload";
import "./global";
import "./hook";
import "./html";
import "./inspect";
import "./language";
import "./loader";
import "./log";
import "./Map";
import "./message";
import "./notification";
import "./RegExp";
import "./Rest";
import "./searchSuggest";
import "./storage";
import "./template";
import "./Title";
import "./Upload";
import "./Uri";
import "./user";
import "./util";

type ObjectAnalyticEventData = Record<string, any>;
type AnalyticEventData = ObjectAnalyticEventData | number | string | undefined;

interface ErrorAnalyticEventData extends ObjectAnalyticEventData {
    exception?: any;
    module?: string;
    source: string;
}

interface AnalyticEvent {
    topic: string;
    data: AnalyticEventData;
}

interface AnalyticEventCallback {
    (topic: string, data: AnalyticEventData): void;
}

declare global {
    /**
     * Base library for MediaWiki.
     *
     * Exposed globally as `mw`, with `mediaWiki` as alias.
     *
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw
     */
    const mediaWiki: typeof mw;

    /**
     * Base library for MediaWiki.
     *
     * Exposed globally as `mw`, with `mediaWiki` as alias.
     *
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw
     */
    namespace mw {
        /**
         * Empty object for third-party libraries, for cases where you don't
         * want to add a new global, or the global is bad and needs containment
         * or wrapping.
         *
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-property-libs
         */
        const libs: Record<string, any>;

        /**
         * OOUI widgets specific to MediaWiki
         *
         * types for mw.widgets are out of scope!
         *
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/source/mediawiki.base.html#mw-property-libs
         */
        const widgets: any;

        /**
         * Format a string. Replace $1, $2 ... $N with positional arguments.
         *
         * Used by {@link Message.parser()}.
         *
         * @since 1.25
         * @param {string} formatString Format string
         * @param {...string} parameters Values for $N replacements
         * @returns {string} Formatted string
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-method-format
         */
        function format(formatString: string, ...parameters: string[]): string;

        /**
         * Get the current time, measured in milliseconds since January 1, 1970 (UTC).
         *
         * On browsers that implement the Navigation Timing API, this function will produce
         * floating-point values with microsecond precision that are guaranteed to be monotonic.
         * On all other browsers, it will fall back to using `Date`.
         *
         * @returns {number} Current time
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-method-now
         */
        function now(): number;

        /**
         * Schedule a deferred task to run in the background.
         *
         * This allows code to perform tasks in the main thread without impacting
         * time-critical operations such as animations and response to input events.
         *
         * Basic logic is as follows:
         *
         * - User input event should be acknowledged within 100ms per [RAIL].
         * - Idle work should be grouped in blocks of upto 50ms so that enough time
         *   remains for the event handler to execute and any rendering to take place.
         * - Whenever a native event happens (e.g. user input), the deadline for any
         *   running idle callback drops to 0.
         * - As long as the deadline is non-zero, other callbacks pending may be
         *   executed in the same idle period.
         *
         * See also:
         *
         * - <https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback>
         * - <https://w3c.github.io/requestidlecallback/>
         * - <https://developers.google.com/web/updates/2015/08/using-requestidlecallback>
         * [RAIL]: https://developers.google.com/web/fundamentals/performance/rail
         *
         * @param {Function} callback
         * @param {Object} [options]
         * @param {number} [options.timeout] If set, the callback will be scheduled for
         *  immediate execution after this amount of time (in milliseconds) if it didn't run
         *  by that time.
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-method-requestIdleCallback
         */
        function requestIdleCallback(
            callback: (...args: any[]) => any,
            options?: { timeout?: number }
        ): void;

        /**
         * Track an analytic event.
         *
         * This method provides a generic means for MediaWiki JavaScript code to capture state
         * information for analysis. Each logged event specifies a string topic name that describes
         * the kind of event that it is. Topic names consist of dot-separated path components,
         * arranged from most general to most specific. Each path component should have a clear and
         * well-defined purpose.
         *
         * Data handlers are registered via {@link mw.trackSubscribe}, and receive the full set of
         * events that match their subscription, including buffered events that fired before the handler
         * was subscribed.
         *
         * @param {string} topic Topic name
         * @param {AnalyticEventData} [data] Data describing the event.
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-method-track
         */
        function track(topic: string, data?: AnalyticEventData): void;

        /**
         * Track an early error event via mw.track and send it to the window console.
         *
         * @private
         * @param {string} topic Topic name
         * @param {ErrorAnalyticEventData} data Data describing the event, encoded as an object; see {@link errorLogger.logError}
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-method-trackError
         */
        function trackError(topic: string, data: ErrorAnalyticEventData): void;

        /**
         * Register a handler for subset of analytic events, specified by topic.
         *
         * Handlers will be called once for each tracked event, including for any buffered events that
         * fired before the handler was subscribed. The callback is passed a `topic` string, and optional
         * `data` event object. The `this` value for the callback is a plain object with `topic` and
         * `data` properties set to those same values.
         *
         * Example to monitor all topics for debugging:
         *
         * ```js
         * mw.trackSubscribe( '', console.log );
         * ```
         *
         * Example to subscribe to any of `foo.*`, e.g. both `foo.bar` and `foo.quux`:
         *
         * ```js
         * mw.trackSubscribe( 'foo.', console.log );
         * ```
         *
         * @param {string} topic Handle events whose name starts with this string prefix
         * @param {function(string, AnalyticEventData): void} callback Handler to call for each matching tracked event
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-method-trackSubscribe
         */
        function trackSubscribe(topic: string, callback: AnalyticEventCallback): void;

        /**
         * Stop handling events for a particular handler
         *
         * @param {function(string, AnalyticEventData): void} callback
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-method-trackUnsubscribe
         */
        function trackUnsubscribe(callback: AnalyticEventCallback): void;

        /**
         * List of all analytic events emitted so far.
         *
         * Exposed only for use by mediawiki.base.
         *
         * @private
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-property-trackQueue
         */
        const trackQueue: AnalyticEvent[];
    }
}

export {};
