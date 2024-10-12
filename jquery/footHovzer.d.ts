declare global {
    interface JQueryStatic {
        /**
         * Utility to stack stuff in an overlay fixed on the bottom of the page.
         *
         * @example
         * ```js
         * var hovzer = $.getFootHovzer();
         * hovzer.$.append( $myCollection );
         * hovzer.update();
         * ```
         * @private
         * @returns {FootHovzer}
         */
        getFootHovzer(): FootHovzer;
    }
}

interface FootHovzer {
    /**
     * The stack container.
     */
    $: JQuery;

    /**
     * Update dimensions of stack to account for changes in the subtree.
     */
    update(): void;
}

export {};
