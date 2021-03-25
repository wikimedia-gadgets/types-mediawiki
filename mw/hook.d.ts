/**
 * Registry and firing of events.
 *
 * MediaWiki has various interface components that are extended, enhanced
 * or manipulated in some other way by extensions, gadgets and even
 * in core itself.
 *
 * This framework helps streamlining the timing of when these other
 * code paths fire their plugins (instead of using document-ready,
 * which can and should be limited to firing only once).
 *
 * Features like navigating to other wiki pages, previewing an edit
 * and editing itself – without a refresh – can then retrigger these
 * hooks accordingly to ensure everything still works as expected.
 *
 * Example usage:
 *
 * ```
 * mw.hook( 'wikipage.content' ).add( fn ).remove( fn );
 * mw.hook( 'wikipage.content' ).fire( $content );
 * ```
 *
 * Handlers can be added and fired for arbitrary event names at any time. The same
 * event can be fired multiple times. The last run of an event is memorized
 * (similar to `$(document).ready` and `$.Deferred().done`).
 * This means if an event is fired, and a handler added afterwards, the added
 * function will be fired right away with the last given event data.
 *
 * Like Deferreds and Promises, the mw.hook object is both detachable and chainable.
 * Thus allowing flexible use and optimal maintainability and authority control.
 * You can pass around the `add` and/or `fire` method to another piece of code
 * without it having to know the event name (or `mw.hook` for that matter).
 *
 * ```
 * var h = mw.hook( 'bar.ready' );
 * new mw.Foo( .. ).fetch( { callback: h.fire } );
 * ```
 *
 * Note: Events are documented with an underscore instead of a dot in the event
 * name due to jsduck not supporting dots in that position.
 *
 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.hook
 */
interface Hook {
    /**
     * Register a hook handler
     *
     * @param {...Function} handler Function to bind.
     * @chainable
     */
    add(...handler: Array<(...args: any[]) => any>): Hook;

    /**
     * Run a hook.
     *
     * @param {*} data
     * @chainable
     */
    fire(data?: any): Hook;

    /**
     * Unregister a hook handler
     *
     * @param {...Function} handler Function to unbind.
     * @chainable
     */
    remove(handler: (...args: any[]) => any): Hook;
}

declare global {
    namespace mw {
        /**
         * Create an instance of mw.hook.
         *
         * @method hook
         * @member mw
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.hook
         */
        function hook(event: string): Hook;
    }
}

export {};
