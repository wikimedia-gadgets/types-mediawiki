declare global {
    namespace mw {
        /**
         * @class mw.RegExp
         * @see https://doc.wikimedia.org/mediawiki-core/REL1_29/js/source/mediawiki.RegExp.html
         */
        namespace RegExp {
            /**
             * Escape string for safe inclusion in regular expression
             *
             * The following characters are escaped:
             *
             *     \ { } ( ) | . ? * + - ^ $ [ ]
             *
             * @deprecated
             * @since 1.26; deprecated since 1.34
             * @param {string} str String to escape
             * @return {string} Escaped string
             * @see https://doc.wikimedia.org/mediawiki-core/REL1_29/js/source/mediawiki.RegExp.html#mw-RegExp-static-method-escape
             */
            function escape(str: string): string;
        }
    }
}

export {};
