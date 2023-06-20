declare global {
    namespace mw {
        /**
         * @class mw.String
         * @singleton
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.String
         */
        namespace String {
            /**
             * Calculate the byte length of a string (accounting for UTF-8).
             *
             * @param {string} str
             * @return {number}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.String-method-byteLength
             */
            function byteLength(str: string): number;

            /**
             * Like String#charAt, but return the pair of UTF-16 surrogates for characters outside of BMP.
             *
             * @param {string} string
             * @param {number} offset Offset to extract the character
             * @param {boolean} [backwards] Use backwards direction to detect UTF-16 surrogates,
             *                              defaults to false
             * @return {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.String-method-charAt
             */
            function charAt(string: string, offset: number, backwards?: boolean): string;

            /**
             * Calculate the character length of a string (accounting for UTF-16 surrogates).
             *
             * @param {string} str
             * @return {number}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.String-method-codePointLength
             */
            function codePointLength(str: string): number;

            /**
             * Lowercase the first character. Support UTF-16 surrogates for characters outside of BMP.
             *
             * @param {string} string
             * @return {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.String-method-lcFirst
             */
            function lcFirst(string: string): string;

            /**
             * Utility function to trim down a string, based on byteLimit
             * and given a safe start position. It supports insertion anywhere
             * in the string, so "foo" to "fobaro" if limit is 4 will result in
             * "fobo", not "foba". Basically emulating the native maxlength by
             * reconstructing where the insertion occurred.
             *
             * @param {string} safeVal Known value that was previously returned by this
             * function, if none, pass empty string.
             * @param {string} newVal New value that may have to be trimmed down.
             * @param {number} byteLimit Number of bytes the value may be in size.
             * @param {Function} [filterFunction] Function to call on the string before assessing the length.
             * @return {Object}
             * @return {string} return.newVal
             * @return {boolean} return.trimmed
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.String-method-trimByteLength
             */
            function trimByteLength(
                safeVal: string,
                newVal: string,
                byteLimit: number,
                filterFunction: (val: string) => string
            ): {
                newVal: string;
                trimmed: boolean;
            };

            /**
             * Utility function to trim down a string, based on codePointLimit
             * and given a safe start position. It supports insertion anywhere
             * in the string, so "foo" to "fobaro" if limit is 4 will result in
             * "fobo", not "foba". Basically emulating the native maxlength by
             * reconstructing where the insertion occurred.
             *
             * @param {string} safeVal Known value that was previously returned by this
             * function, if none, pass empty string.
             * @param {string} newVal New value that may have to be trimmed down.
             * @param {number} codePointLimit Number of characters the value may be in size.
             * @param {Function} [filterFunction] Function to call on the string before assessing the length.
             * @return {Object}
             * @return {string} return.newVal
             * @return {boolean} return.trimmed
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.String-method-trimCodePointLength
             */
            function trimCodePointLength(
                safeVal: string,
                newVal: string,
                codePointLimit: number,
                ffilterFunction: (val: string) => string
            ): {
                newVal: string;
                trimmed: boolean;
            };

            /**
             * Uppercase the first character. Support UTF-16 surrogates for characters outside of BMP.
             *
             * @param {string} string
             * @return {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.String-method-ucFirst
             */
            function ucFirst(string: string): string;
        }
    }
}

export {};
