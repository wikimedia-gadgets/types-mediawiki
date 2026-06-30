declare global {
    /**
     * Evaluates a plural rule in CLDR syntax for a number.
     *
     * @since 1.46 – moved from mw.libs.
     * @returns true if evaluation passed, false if evaluation failed.
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/module-mediawiki.libs.pluralruleparser.html
     */
    function pluralRuleParser(rule: string, number: number): boolean;

    namespace mw.libs {
        /**
         * Evaluates a plural rule in CLDR syntax for a number.
         *
         * @returns true if evaluation passed, false if evaluation failed.
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/module-mediawiki.libs.pluralruleparser.html
         */
        function pluralRuleParser(rule: string, number: number): boolean;
    }
}

export {};
