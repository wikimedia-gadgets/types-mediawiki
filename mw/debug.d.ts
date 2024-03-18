declare global {
    namespace mw {
        /**
         * Debug toolbar.
         *
         * Enabled server-side through `$wgDebugToolbar`.
         *
         * @since 1.19
         */
        namespace Debug {
            type LogEntryType = "deprecated" | "log" | "warn";

            /**
             * Toolbar container element.
             */
            const $container: JQuery;

            /**
             * Object containing data for the debug toolbar.
             */
            const data: Data;

            /**
             * Build the console panel.
             *
             * @returns {JQuery} Console panel
             */
            function buildConsoleTable(): JQuery;

            /**
             * Build legacy debug log pane.
             *
             * @returns {JQuery}
             */
            function buildDebugLogTable(): JQuery;

            /**
             * Construct the HTML for the debugging toolbar.
             */
            function buildHtml(): void;

            /**
             * Build included files pane.
             *
             * @returns {JQuery}
             */
            function buildIncludesPane(): JQuery;

            /**
             * Build query list pane.
             *
             * @returns {JQuery}
             */
            function buildQueryTable(): JQuery;

            /**
             * Build request information pane.
             *
             * @returns {JQuery}
             */
            function buildRequestPane(): JQuery;

            /**
             * Initialize the debugging pane.
             *
             * Shouldn't be called before the document is ready
             * (since it binds to elements on the page).
             *
             * @param {Data} [data] Defaults to 'debugInfo' from {@link mw.config}
             */
            function init(data?: Data): void;

            /**
             * Switch between panes.
             *
             * Should be called with an HTMLElement as its thisArg,
             * because it's meant to be an event handler.
             *
             * @param {JQuery.Event} e
             */
            function switchPane(e: JQuery.Event): void;

            interface Data {
                debugLog: string[];
                gitBranch: string | false;
                gitRevision: string | false;
                gitViewUrl: string | false;
                includes: File[];
                log: LogEntry[];
                memory: string;
                memoryPeak: string;
                mwVersion: string;
                phpVersion: string;
                queries: Query[];
                time: number;
            }

            interface File {
                name: string;
                size: string;
            }

            interface LogEntry {
                caller: string;
                msg: string;
                type: LogEntryType;
                typeText?: string;
            }

            interface Query {
                function: string;
                sql: string;
                time: number;
            }
        }
    }
}

export {};
