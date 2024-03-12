declare global {
    interface JQueryStatic {
        highlightText: HighlightText;
    }

    interface JQuery {
        /**
         * Highlight certain text in current nodes (by wrapping it in `<span class="highlight">...</span>`).
         *
         * @param {string} matchString String to match
         * @param {Options} [options]
         * @returns {JQuery}
         */
        highlightText(matchString: string, options?: Options): this;
    }
}

type Method = "prefixHighlight" | "prefixPlusComboHighlight" | "splitAndHighlight";

interface HighlightText {
    innerHighlight(node: Node, pat: string | RegExp): void;

    prefixHighlight(node: Node, prefix: string): void;

    prefixPlusComboHighlight(node: Node, prefix: string): void;

    splitAndHighlight<T extends Node>(node: T, text: string): T;
}

interface Options {
    /**
     * Method of matching to use, one of:
     *
     * - 'splitAndHighlight': Split `matchString` on spaces, then match each word separately.
     * - 'prefixHighlight': Match `matchString` at the beginning of text only.
     * - 'prefixPlusComboHighlight': Match `matchString` plus any combining characters at
     *   the beginning of text only.
     */
    method?: Method;
}

export {};
