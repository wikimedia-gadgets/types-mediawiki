type FlipObject<T extends Record<PropertyKey, PropertyKey>> = { [K in keyof T as T[K]]: K };

declare global {
    namespace mw {
        /**
         * Base language object with methods related to language support, attempting to mirror some of the
         * functionality of the Language class in MediaWiki:
         *
         * - storing and retrieving language data
         * - transforming message syntax (`{{PLURAL:}}`, `{{GRAMMAR:}}`, `{{GENDER:}}`)
         * - formatting numbers
         *
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.language
         */
        namespace language {
            /**
             * Language-related data (keyed by language, contains instances of mw.Map).
             *
             * Exported dynamically by the ResourceLoader\LanguageDataModule class in PHP.
             *
             * To set data:
             *
             * ```js
             * // Override, extend or create the language data object of 'nl'
             * mw.language.setData( 'nl', 'myKey', 'My value' );
             *
             * // Set multiple key/values pairs at once
             * mw.language.setData( 'nl', { foo: 'X', bar: 'Y' } );
             * ```
             *
             * To get GrammarForms data for language 'nl':
             *
             * ```js
             * var grammarForms = mw.language.getData( 'nl', 'grammarForms' );
             * ```
             *
             * Possible data keys:
             *
             * - `digitTransformTable`
             * - `separatorTransformTable`
             * - `minimumGroupingDigits`
             * - `grammarForms`
             * - `pluralRules`
             * - `digitGroupingPattern`
             * - `fallbackLanguages`
             * - `bcp47Map`
             * - `languageNames`
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.language-property-data
             */
            const data: Record<string, Map>;

            /**
             * Information about month names in current UI language.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.language-property-months
             */
            const months: {
                /**
                 * Array of month names (in nominative case in languages which have the distinction),
                 * zero-indexed.
                 */
                abbrev: string[];

                /**
                 * Object containing zero-indexed arrays of message keys for appropriate messages
                 * which can be passed to {@link mw.msg}.
                 */
                keys: Record<"abbrev" | "genitive" | "names", string[]>;

                /**
                 * Array of month names in genitive case, zero-indexed.
                 */
                genitive: string[];

                /**
                 * Array of month names (in nominative case in languages which have the distinction),
                 * zero-indexed.
                 */
                names: string[];
            };

            /**
             * Formats language tags according the BCP 47 standard.
             * See LanguageCode::bcp47 for the PHP implementation.
             *
             * @param {string} languageTag Well-formed language tag
             * @returns {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.language-method-bcp47
             */
            function bcp47(languageTag: string): string;

            /**
             * Grammatical transformations, needed for inflected languages.
             * Invoked by putting `{{grammar:case|word}}` in a message.
             *
             * The rules can be defined in $wgGrammarForms global or computed
             * dynamically by overriding this method per language.
             *
             * @param {string} word
             * @param {string} form
             * @returns {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.language-method-convertGrammar
             */
            function convertGrammar(word: string, form: string): string;

            /**
             * Converts a number using {@link getDigitTransformTable}.
             *
             * @param {number} num Value to be converted
             * @param {boolean} [integer=false] Whether to convert the return value to an integer
             * @returns {number|string} Formatted number
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.language-method-convertNumber
             */
            function convertNumber(num: number, integer?: boolean): number | string;

            /**
             * Plural form transformations, needed for some languages.
             *
             * @param {number} count Non-localized quantifier
             * @param {string[]} forms List of plural forms
             * @param {Object.<number, string>} [explicitPluralForms] List of explicit plural forms
             * @returns {string} Correct form for quantifier in this language
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.language-method-convertPlural
             */
            function convertPlural(
                count: number,
                forms: string[],
                explicitPluralForms?: Record<number, string>
            ): string;

            /**
             * Helper function to flip transformation tables.
             *
             * @param {...Object.<number|string, string>} tables Transformation tables
             * @returns {Object.<string, number|string>}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.language-method-flipTransform
             */
            function flipTransform<T extends Record<PropertyKey, PropertyKey>>(
                ...tables: T[]
            ): FlipObject<T>;

            /**
             * Provides an alternative text depending on specified gender.
             *
             * Usage in message text: `{{gender:[gender|user object]|masculine|feminine|neutral}}`.
             * If second or third parameter are not specified, masculine is used.
             *
             * These details may be overridden per language.
             *
             * @param {string} gender 'male', 'female', or anything else for neutral.
             * @param {string[]} forms List of gender forms
             * @returns {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.language-method-gender
             */
            function gender<T extends string>(gender: string, forms: [T?, T?, T?]): T;

            /**
             * Convenience method for retrieving language data.
             *
             * Structured by language code and data key, covering for the potential inexistence of a
             * data object for this language.
             *
             * @param {string} langCode
             * @param {string} dataKey
             * @returns {Mixed} Value stored in the mw.Map (or `undefined` if there is no map for the
             *  specified langCode)
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.language-method-getData
             */
            function getData(langCode: string, dataKey: string): any;

            /**
             * Get the digit transform table for current UI language.
             *
             * @returns {Object.<number|string, string>|string[]}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.language-method-getDigitTransformTable
             */
            function getDigitTransformTable(): string[] | Record<number | string, string>;

            /**
             * Get the language fallback chain for current UI language, including the language itself.
             *
             * @returns {string[]} List of language keys, e.g. `['pfl', de', 'en']`
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.language-method-getFallbackLanguageChain
             */
            function getFallbackLanguageChain(): string[];

            /**
             * Get the language fallback chain for current UI language (not including the language itself).
             *
             * @returns {string[]} List of language keys, e.g. `['de', 'en']`
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.language-method-getFallbackLanguages
             */
            function getFallbackLanguages(): string[];

            /**
             * Get the separator transform table for current UI language.
             *
             * @returns {Object.<number|string, string>|string[]}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.language-method-getSeparatorTransformTable
             */
            function getSeparatorTransformTable(): string[] | Record<number | string, string>;

            /**
             * Turn a list of string into a simple list using commas and 'and'.
             *
             * See Language::listToText in languages/Language.php
             *
             * @param {string[]} list
             * @returns {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.language-method-listToText
             */
            function listToText(list: string[]): string;

            /**
             * Convenience method for setting language data.
             *
             * Creates the data mw.Map if there isn't one for the specified language already.
             *
             * @param {string} langCode
             * @param {string|Object.<string, Mixed>} dataKey Key or object of key/values
             * @param {Mixed} [value] Value for dataKey, omit if dataKey is an object
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.language-method-setData
             */
            function setData(langCode: string, dataKey: string, value: any): void;
            function setData(langCode: string, dataKey: Record<string, any>): void;

            /**
             * Apply numeric pattern to absolute value using options. Gives no
             * consideration to local customs.
             *
             * Adapted from dojo/number library with thanks
             * <http://dojotoolkit.org/reference-guide/1.8/dojo/number.html>
             *
             * @private
             * @param {number} value the number to be formatted, ignores sign
             * @param {string} pattern the number portion of a pattern (e.g. `#,##0.00`)
             * @param {Object} [options] If provided, all option keys must be present:
             * @param {string} options.decimal The decimal separator. Defaults to: `'.'`.
             * @param {string} options.group The group separator. Defaults to: `','`.
             * @param {number|null} options.minimumGroupingDigits
             * @returns {string}
             */
            function commafyNumber(
                value: number,
                pattern: string,
                options?: { decimal: string; group: string; minimumGroupingDigits: number | null }
            ): string;

            /**
             * Pad a string to guarantee that it is at least `size` length by
             * filling with the character `ch` at either the start or end of the
             * string. Pads at the start, by default.
             *
             * Example: Fill the string to length 10 with '+' characters on the right.
             *
             * ```js
             * pad( 'blah', 10, '+', true ); // => 'blah++++++'
             * ```
             *
             * @private
             * @param {string} text The string to pad
             * @param {number} size The length to pad to
             * @param {string} [ch='0'] Character to pad with
             * @param {boolean} [end=false] Adds padding at the end if true, otherwise pads at start
             * @returns {string}
             */
            function pad(text: string, size: number, ch?: string, end?: boolean): string;

            /**
             * Pads an array to a specific length by copying the last one element.
             *
             * @private
             * @param {string[]} forms Number of forms given to convertPlural
             * @param {number} count Number of forms required
             * @returns {string[]} Padded array of forms
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.language-method-preConvertPlural
             */
            function preConvertPlural(forms: string[], count: number): string[];

            /**
             * Replicate a string 'n' times.
             *
             * @private
             * @param {string} str The string to replicate
             * @param {number} num Number of times to replicate the string
             * @returns {string}
             */
            function replicate(str: string, num: number): string;
        }
    }
}

export {};
