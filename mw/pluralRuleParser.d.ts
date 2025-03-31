declare global {
    namespace mw.libs {
        /**
         * Evaluates a plural rule in CLDR syntax for a number.
         *
         * @param rule
         * @param number
         * @returns true if evaluation passed, false if evaluation failed.
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/module-mediawiki.libs.pluralruleparser.html
         */
        function pluralRuleParser(rule: string, number: number): boolean;
    }
}

export {};
