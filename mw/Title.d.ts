type title = string | mw.Title;

declare global {
    namespace mw {
        /**
         * Parse titles into an object structure. Note that when using the constructor
         * directly, passing invalid titles will result in an exception. Use #newFromText to use the
         * logic directly and get null for invalid titles which is easier to work with.
         *
         * Note that in the constructor and #newFromText method, `namespace` is the **default** namespace
         * only, and can be overridden by a namespace prefix in `title`. If you do not want this behavior,
         * use #makeTitle. Compare:
         *
         *     new mw.Title( 'Foo', NS_TEMPLATE ).getPrefixedText();                  // => 'Template:Foo'
         *     mw.Title.newFromText( 'Foo', NS_TEMPLATE ).getPrefixedText();          // => 'Template:Foo'
         *     mw.Title.makeTitle( NS_TEMPLATE, 'Foo' ).getPrefixedText();            // => 'Template:Foo'
         *
         *     new mw.Title( 'Category:Foo', NS_TEMPLATE ).getPrefixedText();         // => 'Category:Foo'
         *     mw.Title.newFromText( 'Category:Foo', NS_TEMPLATE ).getPrefixedText(); // => 'Category:Foo'
         *     mw.Title.makeTitle( NS_TEMPLATE, 'Category:Foo' ).getPrefixedText();   // => 'Template:Category:Foo'
         *
         *     new mw.Title( 'Template:Foo', NS_TEMPLATE ).getPrefixedText();         // => 'Template:Foo'
         *     mw.Title.newFromText( 'Template:Foo', NS_TEMPLATE ).getPrefixedText(); // => 'Template:Foo'
         *     mw.Title.makeTitle( NS_TEMPLATE, 'Template:Foo' ).getPrefixedText();   // => 'Template:Template:Foo'
         *
         * @class mw.Title
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title
         */
        class Title {
            /**
             * @private
             * @static
             * @property {number} FILENAME_MAX_BYTES
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-static-property-FILENAME_MAX_BYTES
             */
            static FILENAME_MAX_BYTES: number;

            /**
             * @private
             * @static
             * @property {number} NS_FILE
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-static-property-NS_FILE
             */
            static NS_FILE: number;

            /**
             * @private
             * @static
             * @property {number} NS_MAIN
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-static-property-NS_MAIN
             */
            static NS_MAIN: number;

            /**
             * @private
             * @static
             * @property {number} NS_MEDIA
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-static-property-NS_MEDIA
             */
            static NS_MEDIA: number;

            /**
             * @private
             * @static
             * @property {number} NS_SPECIAL
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-static-property-NS_SPECIAL
             */
            static NS_SPECIAL: number;

            /**
             * @private
             * @static
             * @property {number} NS_TALK
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-static-property-NS_TALK
             */
            static NS_TALK: number;

            /**
             * @private
             * @static
             * @property {number} TITLE_MAX_BYTES
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-static-property-TITLE_MAX_BYTES
             */
            static TITLE_MAX_BYTES: number;

            /**
             * Store page existence
             *
             * @static
             * @property {Object} exist
             * @property {Object} exist.pages Keyed by title. Boolean true value indicates page does exist.
             *
             * @property {Function} exist.set The setter function.
             *
             *  Example to declare existing titles:
             *
             *     Title.exist.set( ['User:John_Doe', ...] );
             *
             *  Example to declare titles nonexistent:
             *
             *     Title.exist.set( ['File:Foo_bar.jpg', ...], false );
             *
             * @property {string|Array} exist.set.titles Title(s) in strict prefixedDb title form
             * @property {boolean} [exist.set.state=true] State of the given titles
             * @return {boolean}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-static-property-exist
             */
            static exist: {
                pages: { [title: string]: boolean };
                set: (titles: string | string[], state?: boolean) => boolean;
            };

            /**
             * Slightly modified from Flinfo. Credit goes to Lupo and Flominator.
             *
             * @private
             * @static
             * @property {Object[]} sanitationRules
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-static-property-sanitationRules
             */
            static sanitationRules: Array<{
                pattern: RegExpConstructor;
                replace: string;
                generalRule?: boolean;
                fileRule?: boolean;
            }>;

            /**
             * @method constructor
             * @param {string} title Title of the page. If no second argument given,
             *  this will be searched for a namespace
             * @param {number} [namespace=NS_MAIN] If given, will used as default namespace for the given title
             * @throws {Error} When the title is invalid
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-constructor
             */
            constructor(title: string, namespace?: number);

            /**
             * Check the title can have an associated talk page
             *
             * @return {boolean} The title can have an associated talk page
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-canHaveTalkPage
             */
            canHaveTalkPage(): boolean;

            /**
             * Whether this title exists on the wiki.
             *
             * @return {boolean|null} Boolean if the information is available, otherwise null
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-exists
             */
            exists(): boolean | null;

            /**
             * Get the extension of the page name (if any)
             *
             * @return {string|null} Name extension or null if there is none
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-getExtension
             */
            getExtension(): string | null;

            /**
             * Get the page name as if it is a file name, without extension or namespace prefix,
             * in the human-readable form with spaces instead of underscores. For example, the title
             * "File:Example_image.svg" will be returned as "Example image".
             *
             * Note that this method will work for non-file titles but probably give nonsensical results.
             * A title like "User:Dr._J._Fail" will be returned as "Dr. J"! Use #getMainText instead.
             *
             * @return {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-getFileNameTextWithoutExtension
             */
            getFileNameTextWithoutExtension(): string;

            /**
             * Get the page name as if it is a file name, without extension or namespace prefix,
             * in the canonical form with underscores instead of spaces. For example, the title
             * "File:Example_image.svg" will be returned as "Example_image".
             *
             * Note that this method will work for non-file titles but probably give nonsensical results.
             * A title like "User:Dr._J._Fail" will be returned as "Dr._J"! Use #getMain instead.
             *
             * @return {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-getFileNameWithoutExtension
             */
            getFileNameWithoutExtension(): string;

            /**
             * Get the fragment (if any).
             *
             * Note that this method (by design) does not include the hash character and
             * the value is not url encoded.
             *
             * @return {string|null}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-getFragment
             */
            getFragment(): string | null;

            /**
             * Get the main page name
             *
             * Example: "Example_image.svg" for "File:Example_image.svg".
             *
             * @return {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-getMain
             */
            getMain(): string;

            /**
             * Get the main page name (transformed by #text)
             *
             * Example: "Example image.svg" for "File:Example_image.svg".
             *
             * @return {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-getMainText
             */
            getMainText(): string;

            /**
             * Get the namespace number
             *
             * Example: 6 for "File:Example_image.svg".
             *
             * @return {number}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-getNamespaceId
             */
            getNamespaceId(): number;

            /**
             * Get the namespace prefix (in the content language)
             *
             * Example: "File:" for "File:Example_image.svg".
             * In #NS_MAIN this is '', otherwise namespace name plus ':'
             *
             * @return {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-getNamespacePrefix
             */
            getNamespacePrefix(): string;

            /**
             * Get the full page name
             *
             * Example: "File:Example_image.svg".
             * Most useful for API calls, anything that must identify the "title".
             *
             * @return {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-getPrefixedDb
             */
            getPrefixedDb(): string;

            /**
             * Get the full page name (transformed by #text)
             *
             * Example: "File:Example image.svg" for "File:Example_image.svg".
             *
             * @return {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-getPrefixedText
             */
            getPrefixedText(): string;

            /**
             * Get the page name relative to a namespace
             *
             * Example:
             *
             * - "Foo:Bar" relative to the Foo namespace becomes "Bar".
             * - "Bar" relative to any non-main namespace becomes ":Bar".
             * - "Foo:Bar" relative to any namespace other than Foo stays "Foo:Bar".
             *
             * @param {number} namespace The namespace to be relative to
             * @return {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-getRelativeText
             */
            getRelativeText(namespace: number): string;

            /**
             * Get the title for the subject page of a talk page
             *
             * @return {mw.Title|null} The title for the subject page of a talk page, null if not available
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-getSubjectPage
             */
            getSubjectPage(): Title | null;

            /**
             * Get the title for the associated talk page
             *
             * @return {mw.Title|null} The title for the associated talk page, null if not available
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-getTalkPage
             */
            getTalkPage(): Title | null;

            /**
             * Get the URL to this title
             *
             * @param {Object} [params] A mapping of query parameter names to values,
             *     e.g. `{ action: 'edit' }`.
             * @return {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-getUrl
             */
            getUrl(params: any): string;

            /**
             * Check if a given namespace is a talk namespace
             *
             * See NamespaceInfo::isTalk in PHP
             *
             * @param {number} namespaceId Namespace ID
             * @return {boolean} Namespace is a talk namespace
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-isTalkNamespace
             */
            isTalkNamespace(namespaceId: number): boolean;

            /**
             * Check if the title is in a talk namespace
             *
             * @return {boolean} The title is in a talk namespace
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-isTalkPage
             */
            isTalkPage(): boolean;

            /**
             * Normalize a file extension to the common form, making it lowercase and checking some synonyms,
             * and ensure it's clean. Extensions with non-alphanumeric characters will be discarded.
             * Keep in sync with File::normalizeExtension() in PHP.
             *
             * @param {string} extension File extension (without the leading dot)
             * @return {string} File extension in canonical form
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-normalizeExtension
             */
            normalizeExtension(extension: string): string;

            /**
             * PHP's strtoupper differs from String.toUpperCase in a number of cases (T147646).
             *
             * @param {string} chr Unicode character
             * @return {string} Unicode character, in upper case, according to the same rules as in PHP
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-phpCharToUpper
             */
            phpCharToUpper(chr: string): string;

            /**
             * Alias of mw.Title#getPrefixedDb
             *
             * TODO: Use @-alias when we switch to JSDoc
             *
             * @method
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-toString
             */
            toString(): string;

            /**
             * Alias of mw.Title#getPrefixedText
             *
             * TODO: Use @-alias when we switch to JSDoc
             *
             * @method
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-toText
             */
            toText(): string;

            /**
             * Check if signature buttons should be shown in a given namespace
             *
             * See NamespaceInfo::wantSignatures in PHP
             *
             * @param {number} namespaceId Namespace ID
             * @return {boolean} Namespace is a signature namespace
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-wantSignaturesNamespace
             */
            wantSignatureNamespace(namespaceId: number): boolean;

            /**
             * Get the page name as if it is a file name, without extension or namespace prefix. Warning,
             * this is usually not what you want! A title like "User:Dr._J._Fail" will be returned as
             * "Dr. J"! Use #getMain or #getMainText for the actual page name.
             *
             * @deprecated since 1.40, use #getFileNameWithoutExtension instead
             * @return {string} File name without file extension, in the canonical form with underscores
             *  instead of spaces. For example, the title "File:Example_image.svg" will be returned as
             *  "Example_image".
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-getName
             */
            getName(): string;

            /**
             * Get the page name as if it is a file name, without extension or namespace prefix. Warning,
             * this is usually not what you want! A title like "User:Dr._J._Fail" will be returned as
             * "Dr. J"! Use #getMainText for the actual page name.
             *
             * @deprecated since 1.40, use #getFileNameTextWithoutExtension instead
             * @return {string} File name without file extension, formatted with spaces instead of
             *  underscores. For example, the title "File:Example_image.svg" will be returned as
             *  "Example image".
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-getNameText
             */
            getNameText(): string;

            /**
             * @private
             * @method getNamespacePrefix_
             * @param {number} namespace that is valid and known. Callers should call
             *  `isKnownNamespace` before executing this method.
             * @return {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-getNamespacePrefix_
             */
            getNamespacePrefix_(namespace: number): string;

            /**
             * @private
             * @method isKnownNamespace
             * @param {number} namespace that may or may not exist
             * @return {boolean}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-isKnownNamespace
             */
            isKnownNamespace(namespace: number): boolean;

            /**
             * Whether this title exists on the wiki.
             *
             * @static
             * @param {string|mw.Title} title prefixed db-key name (string) or instance of Title
             * @return {boolean|null} Boolean if the information is available, otherwise null
             * @throws {Error} If title is not a string or mw.Title
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-static-method-exists
             */
            static exists(title: title): boolean | null;

            /**
             * Constructor for Title objects with predefined namespace.
             *
             * Unlike #newFromText or #constructor, this function doesn't allow the given `namespace` to be
             * overridden by a namespace prefix in `title`. See #constructor for details about this behavior.
             *
             * The single exception to this is when `namespace` is 0, indicating the main namespace. The
             * function behaves like #newFromText in that case.
             *
             * @static
             * @param {number} namespace Namespace to use for the title
             * @param {string} title
             * @return {mw.Title|null} A valid Title object or null if the title is invalid
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-static-method-makeTitle
             */
            static makeTitle(namespace: number, title: string): mw.Title | null;

            /**
             * Sanitizes a file name as supplied by the user, originating in the user's file system
             * so it is most likely a valid MediaWiki title and file name after processing.
             * Returns null on fatal errors.
             *
             * @static
             * @param {string} uncleanName The unclean file name including file extension but
             *   without namespace
             * @return {mw.Title|null} A valid Title object or null if the title is invalid
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-static-method-newFromFileName
             */
            static newFromFileName(uncleanName: string): mw.Title;

            /**
             * Get the file title from an image element
             *
             *     var title = mw.Title.newFromImg( imageNode );
             *
             * @static
             * @param {HTMLElement|jQuery} img The image to use as a base
             * @return {mw.Title|null} The file title or null if unsuccessful
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-static-method-newFromImg
             */
            static newFromImg(img: HTMLElement | JQuery): mw.Title;

            /**
             * Constructor for Title objects with a null return instead of an exception for invalid titles.
             *
             * Note that `namespace` is the **default** namespace only, and can be overridden by a namespace
             * prefix in `title`. If you do not want this behavior, use #makeTitle. See #constructor for
             * details.
             *
             * @static
             * @param {string} title
             * @param {number} [namespace=NS_MAIN] Default namespace
             * @return {mw.Title|null} A valid Title object or null if the title is invalid
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-static-method-newFromText
             */
            static newFromText(title: string, namespace?: number): mw.Title | null;

            /**
             * Constructor for Title objects from user input altering that input to
             * produce a title that MediaWiki will accept as legal
             *
             * @static
             * @param {string} title
             * @param {number} [defaultNamespace=NS_MAIN]
             *  If given, will used as default namespace for the given title.
             * @param {Object} [options] additional options
             * @param {boolean} [options.forUploading=true]
             *  Makes sure that a file is uploadable under the title returned.
             *  There are pages in the file namespace under which file upload is impossible.
             *  Automatically assumed if the title is created in the Media namespace.
             * @return {mw.Title|null} A valid Title object or null if the input cannot be turned into a valid title
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-static-method-newFromUserInput
             */
            static newFromUserInput(
                title: string,
                defaultNamespace?: number,
                options?: { forUploading: boolean }
            ): mw.Title;

            /**
             * Get the namespace id from a namespace name (either from the localized, canonical or alias
             * name).
             *
             * Example: On a German wiki this would return 6 for any of 'File', 'Datei', 'Image' or
             * even 'Bild'.
             *
             * @private
             * @static
             * @method getNsIdByName
             * @param {string} ns Namespace name (case insensitive, leading/trailing space ignored)
             * @return {number|boolean} Namespace id or boolean false
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-static-method-getNsIdByName
             */
            static getNsIdByName(ns: string): number | boolean;

            /**
             * Internal helper for #constructor and #newFromText.
             *
             * Based on Title.php#secureAndSplit
             *
             * @private
             * @static
             * @method parse
             * @param {string} title
             * @param {number} [defaultNamespace=NS_MAIN]
             * @return {Object|boolean}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-static-method-parse
             */
            static parse(
                title: string,
                defaultNamespace: number
            ):
                | {
                      namespace: number;
                      title: string;
                      fragment: string | null;
                  }
                | false;

            /**
             * Sanitizes a string based on a rule set and a filter
             *
             * @private
             * @static
             * @method sanitize
             * @param {string} s
             * @param {Array} filter
             * @return {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-static-method-sanitize
             */
            static sanitize(s: string, filter: string[]): string;

            /**
             * Convert db-key to readable text.
             *
             * @private
             * @static
             * @method text
             * @param {string} s
             * @return {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-static-method-text
             */
            static text(s: string): string;

            /**
             * Cuts a file name to a specific byte length
             *
             * @private
             * @static
             * @method trimFileNameToByteLength
             * @param {string} name without extension
             * @param {string} extension file extension
             * @return {string} The full name, including extension
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-static-method-trimFileNameToByteLength
             */
            static trimFileNameToByteLength(name: string, extension: string): string;

            /**
             * Cuts a string to a specific byte length, assuming UTF-8
             * or less, if the last character is a multi-byte one
             *
             * @private
             * @static
             * @method trimToByteLength
             * @param {string} s
             * @param {number} length
             * @return {string}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-static-method-trimToByteLength
             */
            static trimToByteLength(s: string, length: number): string;
        }
    }
}

export {};
