declare global {
    interface JQuery {
        /**
         * Get the contents of the textarea.
         *
         * @param {string} command Command to execute
         * @return {string}
         */
        textSelection(command: "getContents"): string;

        /**
         * Set the contents of the textarea, replacing anything that was there before.
         *
         * @param {string} command Command to execute
         * @param {string} content
         * @return {JQuery}
         * @chainable
         */
        textSelection(command: "setContents"): JQuery;

        /**
         * Get the currently selected text in this textarea.
         *
         * @param {string} command Command to execute
         * @return {string}
         */
        textSelection(command: "getSelection"): string;

        /**
         * Replace the selected text in the textarea with the given text, or insert it at the cursor.
         *
         * @param {string} command Command to execute
         * @param {string} value
         * @return {JQuery}
         * @chainable
         */
        textSelection(command: "replaceSelection"): JQuery;

        /**
         * Insert text at the beginning and end of a text selection, optionally
         * inserting text at the caret when selection is empty.
         *
         * Also focusses the textarea.
         *
         * @param {string} command Command to execute
         * @param {Object} [options]
         * @return {JQuery}
         * @chainable
         */
        textSelection(
            command: "encapsulateSelection",
            options: {
                pre?: string;
                peri?: string;
                post?: string;
                ownline?: boolean;
                replace?: boolean;
                selectPeri?: boolean;
                splitlines?: boolean;
                selectionStart?: number;
                selectionEnd?: number;
            }
        ): JQuery;

        /**
         * Get the current cursor position (in UTF-16 code units) in a textarea.
         *
         * @param {string} command Command to execute
         * @param {Object} [options]
         * @param {Object} [options.startAndEnd=false] Return range of the selection rather than just start
         * @return {Array} Array with two numbers, for start and end of selection
         */
        textSelection(
            command: "getCaretPosition",
            options: { startAndEnd: true }
        ): [number, number];

        /**
         * Get the current cursor position (in UTF-16 code units) in a textarea.
         *
         * @param {string} command Command to execute
         * @param {Object} [options]
         * @param {Object} [options.startAndEnd=false] Return range of the selection rather than just start
         * @return {number}
         */
        textSelection(command: "getCaretPosition", options?: { startAndEnd?: false }): number;

        /**
         * Set the current cursor position (in UTF-16 code units) in a textarea.
         *
         * @param {string} command Command to execute
         * @param {Object} options
         * @param {number} options.start
         * @param {number} [options.end=options.start]
         * @return {JQuery}
         * @chainable
         */
        textSelection(command: "setSelection", options: { start?: number; end?: number }): JQuery;

        /**
         * Scroll a textarea to the current cursor position. You can set the cursor
         * position with 'setSelection'.
         *
         * @param {string} command Command to execute
         * @param {Object} [options]
         * @param {string} [options.force=false] Whether to force a scroll even if the caret position
         *  is already visible.
         * @return {JQuery}
         * @chainable
         */
        textSelection(command: "scrollToCaretPosition", options: { force?: boolean }): JQuery;

        /**
         * Register an alternative textSelection API for this element.
         *
         * @param {string} command Command to execute
         * @param {Object} functions Functions to replace. Keys are command names (as in {@link textSelection},
         *  except 'register' and 'unregister'). Values are functions to execute when a given command is
         *  called.
         */
        textSelection(
            command: "register",
            functions: Record<string, (...commandOptions: any[]) => any>
        ): void;

        /**
         * Unregister the alternative textSelection API for this element (see 'register').
         *
         * @param {string} command Command to execute
         */
        textSelection(command: "unregister"): void;
    }
}

export {};
