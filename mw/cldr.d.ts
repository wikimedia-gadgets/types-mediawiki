declare global {
    namespace mw {
        /**
         * Namespace for CLDR-related utility methods.
         *
         * @class
         * @singleton
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.cldr
         */
        namespace cldr {
            /**
             * Get the plural form index for the number.
             *
             * In case none of the rules passed, we return `pluralRules.length` -
             * that means it is the "other" form.
             *
             * @param {number} number
             * @param {Array} pluralRules
             * @return {number} plural form index
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.cldr-method-getPluralForm
             */
            function getPluralForm(number: number, pluralRules: any[]): void;
        }
    }
}

export {};
