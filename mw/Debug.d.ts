declare global {
    namespace mw {
        /**
         * Debug toolbar.
         *
         * Enabled server-side through `$wgDebugToolbar`.
         *
         * @since 1.19
         * @class mw.Debug
         * @singleton
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Debug
         */
        namespace Debug {
            /**
             * Toolbar container element
             *
             * @property {JQuery}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Debug-property-S-container
             */
            const $container: JQuery;

            /**
             * Object containing data for the debug toolbar
             *
             * @property {Object}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Debug-property-data
             */
            const data: Record<string, any>;

            /**
             * Build the console panel
             *
             * @return {JQuery} Console panel
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Debug-method-buildConsoleTable
             */
            function buildConsoleTable(): JQuery;

            /**
             * Build legacy debug log pane
             *
             * @return {JQuery} Console panel
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Debug-method-buildDebugLogTable
             */
            function buildDebugLogTable(): JQuery;

            /**
             * Construct the HTML for the debugging toolbar
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Debug-method-buildHtml
             */
            function buildHtml(): void;

            /**
             * Build included files pane
             *
             * @return {JQuery}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Debug-method-buildIncludesPane
             */
            function buildIncludesPane(): JQuery;

            /**
             * Build query list pane
             *
             * @return {JQuery}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Debug-method-buildQueryTable
             */
            function buildQueryTable(): JQuery;

            /**
             * Build request information pane
             *
             * @return {JQuery}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Debug-method-buildRequestPane
             */
            function buildRequestPane(): JQuery;

            /**
             * Initialize the debugging pane
             *
             * Shouldn't be called before the document is ready
             * (since it binds to elements on the page).
             *
             * @param {Object} [data] Defaults to 'debugInfo' from mw.config
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Debug-method-init
             */
            function init(data?: typeof Debug.data): void;

            /**
             * Switch between panes
             *
             * Should be called with an HTMLElement as its thisArg,
             * because it's meant to be an event handler.
             *
             * TODO: Store cookie for last pane open.
             *
             * @param {JQuery.Event} e
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Debug-method-switchPane
             */
            function switchPane(e: JQuery.Event): void;
        }
    }
}

export {};
