declare global {
    namespace mw.libs {
        /**
         * Evaluates a plural rule in CLDR syntax for a number.
         *
         * @param {string} rule
         * @param {integer} number
         * @returns {boolean} true if evaluation passed, false if evaluation failed.
         */
        function pluralRuleParser(rule: string, number: number): boolean;
    }
}

export {};
