declare global {
    interface JQuery {
        /**
         * Get the contents of the textarea.
         *
         * @param {string} command Command to execute
         * @returns {string}
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/jQuery.plugin.textSelection-method-textSelection
         */
        textSelection(command: "getContents"): string;

        /**
         * Set the contents of the textarea, replacing anything that was there before.
         *
         * @param {string} command Command to execute
         * @param {string} content
         * @returns {JQuery}
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/jQuery.plugin.textSelection-method-textSelection
         */
        textSelection(command: "setContents", content: string): this;

        /**
         * Get the currently selected text in this textarea.
         *
         * @param {string} command Command to execute
         * @returns {string}
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/jQuery.plugin.textSelection-method-textSelection
         */
        textSelection(command: "getSelection"): string;

        /**
         * Replace the selected text in the textarea with the given text, or insert it at the cursor.
         *
         * @param {string} command Command to execute
         * @param {string} value
         * @returns {JQuery}
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/jQuery.plugin.textSelection-method-textSelection
         */
        textSelection(command: "replaceSelection", value: string): this;

        /**
         * Insert text at the beginning and end of a text selection, optionally
         * inserting text at the caret when selection is empty.
         *
         * Also focusses the textarea.
         *
         * @param {string} command Command to execute
         * @param {TextSelectionEncapsulateOptions} [options]
         * @returns {JQuery}
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/jQuery.plugin.textSelection-method-textSelection
         */
        textSelection(
            command: "encapsulateSelection",
            options?: Partial<TextSelectionEncapsulateOptions>
        ): this;

        /**
         * Get the current cursor position (in UTF-16 code units) in a textarea.
         *
         * @param {string} command Command to execute
         * @param {Object} [options]
         * @param {boolean} [options.startAndEnd=false] Return range of the selection rather than just start
         * @returns {number[]} Array with two numbers, for start and end of selection
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/jQuery.plugin.textSelection-method-textSelection
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
         * @param {boolean} [options.startAndEnd=false] Return range of the selection rather than just start
         * @returns {number}
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/jQuery.plugin.textSelection-method-textSelection
         */
        textSelection(command: "getCaretPosition", options?: { startAndEnd?: false }): number;

        /**
         * Set the current cursor position (in UTF-16 code units) in a textarea.
         *
         * @param {string} command Command to execute
         * @param {Object} options
         * @param {number} options.start
         * @param {number} [options.end=options.start]
         * @returns {JQuery}
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/jQuery.plugin.textSelection-method-textSelection
         */
        textSelection(command: "setSelection", options: { start: number; end?: number }): this;

        /**
         * Scroll a textarea to the current cursor position. You can set the cursor
         * position with 'setSelection'.
         *
         * @param {string} command Command to execute
         * @param {Object} [options]
         * @param {boolean} [options.force=false] Whether to force a scroll even if the caret position
         *  is already visible.
         * @returns {JQuery}
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/jQuery.plugin.textSelection-method-textSelection
         */
        textSelection(command: "scrollToCaretPosition", options: { force?: boolean }): this;

        /**
         * Register an alternative textSelection API for this element.
         *
         * @param {string} command Command to execute
         * @param {Object.<string, Function>} functions Functions to replace. Keys are command names (as in {@link textSelection},
         *  except 'register' and 'unregister'). Values are functions to execute when a given command is
         *  called.
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/jQuery.plugin.textSelection-method-textSelection
         */
        textSelection(
            command: "register",
            functions: Record<string, (commandOptions: unknown) => any>
        ): void;

        /**
         * Unregister the alternative textSelection API for this element (see 'register').
         *
         * @param {string} command Command to execute
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/jQuery.plugin.textSelection-method-textSelection
         */
        textSelection(command: "unregister"): void;

        /**
         * Do things to the selection in the textarea, using a command from the alternative textSelection API for this element.
         *
         * @param {string} command Command to execute
         * @param {Mixed} [commandOptions] Options to pass to the command
         * @returns {Mixed} Depending on the command
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/jQuery.plugin.textSelection-method-textSelection
         */
        textSelection(command: string, commandOptions?: unknown): any;
    }
}

interface TextSelectionEncapsulateOptions {
    /**
     * Text to insert before the cursor/selection.
     */
    pre: string;
    /**
     * Text to insert between pre and post and select afterwards.
     */
    peri: string;
    /**
     * Text to insert after the cursor/selection.
     */
    post: string;
    /**
     * Put the inserted text on a line of its own. Defaults to false.
     */
    ownline: boolean;
    /**
     * If there is a selection, replace it with peri instead of leaving it alone. Defaults to false.
     */
    replace: boolean;
    /**
     * Select the peri text if it was inserted (but not if there was a selection and replace==false, or if splitlines==true). Defaults to true.
     */
    selectPeri: boolean;
    /**
     * If multiple lines are selected, encapsulate each line individually. Defaults to false.
     */
    splitlines: boolean;
    /**
     * Position to start selection at.
     */
    selectionStart: number;
    /**
     * Position to end selection at. Defaults to the position to start setection at.
     */
    selectionEnd: number;
}

export {};
