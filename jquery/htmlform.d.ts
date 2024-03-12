declare global {
    interface JQuery {
        /**
         * jQuery plugin to fade or snap to visible state.
         *
         * @param {boolean} [instantToggle=false]
         * @returns {JQuery}
         */
        goIn(instantToggle?: boolean): this;

        /**
         * jQuery plugin to fade or snap to hiding state.
         *
         * @param {boolean} [instantToggle=false]
         * @returns {JQuery}
         */
        goOut(instantToggle?: boolean): this;
    }
}

export {};
