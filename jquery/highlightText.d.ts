declare global {
    interface JQueryStatic {
        highlightText: HighlightText;
    }

    interface JQuery {
        /**
         * Highlight certain text in current nodes (by wrapping it in `<span class="highlight">...</span>`).
         * Provided by the `jquery.highlightText` ResourceLoader module.
         *
         * @example
         * ```js
         * mw.loader.using( 'jquery.highlightText' ).then( () => {
         *     // no styling is provided by default.
         *     mw.util.addCSS( `.highlight { background: yellow; }` )
         *     $( '#bodyContent' ).highlightText( 'bear' );
         * } );
         * ```
         * @param {string} matchString String to match
         * @param {Options} [options]
         * @returns {JQuery}
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/module-jquery.highlightText.html#.$.fn.highlightText
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
