declare global {
    namespace mw {
        /**
         * @see https://doc.wikimedia.org/mediawiki-core/REL1_33/js/#!/api/mw.RegExp
         */
        namespace RegExp {
            /**
             * Escape string for safe inclusion in regular expression
             *
             * The following characters are escaped:
             *
             *     \ { } ( ) | . ? * + - ^ $ [ ]
             *
             * @deprecated since 1.34
             * @since 1.26
             * @param {string} str String to escape
             * @returns {string} Escaped string
             * @see https://doc.wikimedia.org/mediawiki-core/REL1_33/js/#!/api/mw.RegExp-static-method-escape
             */
            function escape(str: string): string;
        }
    }
}

export {};
