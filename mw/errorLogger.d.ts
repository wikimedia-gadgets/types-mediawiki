declare global {
    namespace mw {
        /**
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.errorLogger
         */
        namespace errorLogger {
            /**
             * Logs an error by notifying subscribers to the given mw.track() topic
             * (by default `error.caught`) that an event has occurred.
             *
             * @param {Error} error
             * @param {string} [topic='error.caught'] Error topic. Conventionally in the form
             *   'error.⧼component⧽' (where ⧼component⧽ identifies the code logging the error at a
             *   high level; e.g. an extension name).
             * @fires error_caught
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.errorLogger-method-logError
             */
            function logError(error: Error, topic?: string): void;

            /**
             * Install a `window.onerror` handler that logs errors by notifying both `global.error` and
             * `error.uncaught` topic subscribers that an event has occurred. Note well that the former is
             * done for backwards compatibilty.
             *
             * @private
             * @param {Object} window
             * @fires global_error
             * @fires error_caught
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.errorLogger-method-installGlobalHandler
             */
            function installGlobalHandler(window: Window): void;
        }
    }
}

export {};
