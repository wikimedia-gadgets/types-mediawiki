declare global {
    interface JQuery {
        /**
         * jQuery plugin to fade or snap to visible state.
         *
         * @param {boolean} [instantToggle=false]
         * @returns {JQuery}
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/jQueryPlugins.html#.goIn
         */
        goIn(instantToggle?: boolean): this;

        /**
         * jQuery plugin to fade or snap to hiding state.
         *
         * @param {boolean} [instantToggle=false]
         * @returns {JQuery}
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/jQueryPlugins.html#.goOut
         */
        goOut(instantToggle?: boolean): this;
    }
}

export {};
