declare global {
    namespace mw {
        /**
         * Namespace for CLDR-related utility methods.
         * Provided by the `mediawiki.cdlr` ResourceLoader module.
         */
        namespace cldr {
            /**
             * Get the plural form index for the number.
             *
             * In case none of the rules passed, we return `pluralRules.length` -
             * that means it is the "other" form.
             *
             * @param {number} number
             * @param {string[]} pluralRules
             * @returns {number} plural form index
             */
            function getPluralForm(number: number, pluralRules: string[]): number;
        }
    }
}

export {};
