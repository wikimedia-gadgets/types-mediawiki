declare global {
    interface JQuery {
        /**
         * jQuery plugin to fade or snap to visible state.
         *
         * @see https://doc.wikimedia.org/mediawiki-core/REL1_42/js/jQueryPlugins.html#.goIn
         */
        goIn(instantToggle?: boolean): this;

        /**
         * jQuery plugin to fade or snap to hiding state.
         *
         * @see https://doc.wikimedia.org/mediawiki-core/REL1_42/js/jQueryPlugins.html#.goOut
         */
        goOut(instantToggle?: boolean): this;
    }
}

export {};
