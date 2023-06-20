declare global {
    namespace mw {
        /**
         * @class mw.visibleTimeout
         * @singleton
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.visibleTimeout
         */
        namespace visibleTimeout {
            /**
             * Cancel a visible timeout previously established by calling set.
             *
             * Passing an invalid ID silently does nothing.
             *
             * @param {number} visibleId The identifier of the visible timeout you
             *  want to cancel. This ID was returned by the corresponding call to set().
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.visibleTimeout-method-clear
             */
            function clear(visibleId: number): void;

            /**
             * Generally similar to setTimeout, but pauses the time when page visibility is hidden.
             *
             * The provided function is invoked after the page has been cumulatively visible for the
             * specified number of milliseconds.
             *
             * @param {Function} fn Callback
             * @param {number} delay Time left, in milliseconds.
             * @return {number} A positive integer value which identifies the timer. This
             *  value can be passed to clear() to cancel the timeout.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.visibleTimeout-method-set
             */
            function set(fn: (...args: any[]) => any, delay: number): number;
        }
    }
}

export {};
