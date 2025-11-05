declare global {
    namespace mw {
        /**
         * Allows the logging of client errors for later inspections.
         *
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.errorLogger.html
         */
        namespace errorLogger {
            /**
             * Logs an error by notifying subscribers to the given {@link mw.track()} topic
             * (by default `error.caught`) that an event has occurred.
             *
             * @since 1.36
             * @param error
             * @param topic Error topic. Conventionally in the form
             *  'error.%component%' (where %component% identifies the code logging the error at a
             *  high level; e.g. an extension name). Defaults to `error.caught`.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.errorLogger.html#.logError
             */
            function logError(error: Error, topic?: `error.${string}`): void;
        }
    }
}

export {};
