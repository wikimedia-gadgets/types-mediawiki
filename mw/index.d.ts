import "./Api";
import "./config";
import "./cookie";
import "./ForeignApi";
import "./ForeignRest";
import "./hook";
import "./html";
import "./language";
import "./loader";
import "./log";
import "./Map";
import "./message";
import "./notification";
import "./Rest";
import "./storage";
import "./template";
import "./Title";
import "./Uri";
import "./user";
import "./util";

declare global {
    /**
     * Base library for MediaWiki.
     *
     * Exposed globally as `mw`, with `mediaWiki` as alias.
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw
     */
    namespace mw {
        /**
         * Format a string. Replace $1, $2 ... $N with positional arguments.
         *
         * Used by Message#parser().
         *
         * @since 1.25
         * @param {string} formatString Format string
         * @param {...Mixed} parameters Values for $N replacements
         * @return {string} Formatted string
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-method-format
         */
        function format(formatString: string, ...parameters: unknown[]): string;

        /**
         * Get the current time, measured in milliseconds since January 1, 1970 (UTC).
         *
         * On browsers that implement the Navigation Timing API, this function will produce
         * floating-point values with microsecond precision that are guaranteed to be monotonic.
         * On all other browsers, it will fall back to using `Date`.
         *
         * @return {number} Current time
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
         * @member mw
         * @param {Function} callback
         * @param {Object} [options]
         * @param {number} [options.timeout] If set, the callback will be scheduled for
         *  immediate execution after this amount of time (in milliseconds) if it didn't run
         *  by that time.
         */
        function requestIdleCallback(callback: (...args: any[]) => any): void;

        /**
         * Track an analytic event.
         *
         * This method provides a generic means for MediaWiki JavaScript code to capture state
         * information for analysis. Each logged event specifies a string topic name that describes
         * the kind of event that it is. Topic names consist of dot-separated path components,
         * arranged from most general to most specific. Each path component should have a clear and
         * well-defined purpose.
         *
         * Data handlers are registered via `mw.trackSubscribe`, and receive the full set of
         * events that match their subscription, including those that fired before the handler was
         * bound.
         *
         * @param {string} topic Topic name
         * @param {Object|number|string} [data] Data describing the event.
         */
        function track(topic: string, data?: object | number | string): void;

        /**
         * Track an early error event via mw.track and send it to the window console.
         *
         * @private
         * @param {string} topic Topic name
         * @param {Object} data Data describing the event, encoded as an object; see mw#logError
         */
        function trackError(topic: string, data: object): void;

        /**
         * Register a handler for subset of analytic events, specified by topic.
         *
         * Handlers will be called once for each tracked event, including any events that fired before the
         * handler was registered; 'this' is set to a plain object with a topic' property naming the event, and a
         * 'data' property which is an object of event-specific data. The event topic and event data are
         * also passed to the callback as the first and second arguments, respectively.
         *
         * @param {string} topic Handle events whose name starts with this string prefix
         * @param {Function} callback Handler to call for each matching tracked event
         * @param {string} callback.topic
         * @param {Object} [callback.data]
         */
        function trackSubscribe(
            topic: string,
            callback: (topic: string, data: object) => any
        ): void;

        /**
         * Stop handling events for a particular handler
         *
         * @param {Function} callback
         */
        function trackUnsubscribe(callback: (topic: string, data: object) => any): void;

        // types for mw.widgets are out of scope!
        const widgets: any;
    }
}

export {};
