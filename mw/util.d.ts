declare global {
    namespace mw {
        /**
         * Utility library provided by the `mediawiki.util` module.
         *
         * @class mw.util
         * @singleton
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util
         */
        namespace util {
            /**
             * The content wrapper of the skin (e.g. `.mw-body`).
             *
             * Populated on document ready. To use this property,
             * wait for `$.ready` and be sure to have a module dependency on
             * `mediawiki.util` which will ensure
             * your document ready handler fires after initialization.
             *
             * Because of the lazy-initialised nature of this property,
             * you're discouraged from using it.
             *
             * If you need just the wikipage content (not any of the
             * extra elements output by the skin), use `$( '#mw-content-text' )`
             * instead. Or listen to mw.hook#wikipage_content which will
             * allow your code to re-run when the page changes (e.g. live preview
             * or re-render after ajax save).
             *
             * @property {JQuery}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-property-S-content
             */
            const $content: JQuery;

            /**
             * Append a new style block to the head and return the CSSStyleSheet object.
             *
             * To access the `<style>` element, reference `sheet.ownerNode`, or call
             * the mw.loader#addStyleTag method directly.
             *
             * This function returns the CSSStyleSheet object for convience with features
             * that are managed at that level, such as toggling of styles:
             *
             *     var sheet = util.addCSS( '.foobar { display: none; }' );
             *     $( '#myButton' ).click( function () {
             *         // Toggle the sheet on and off
             *         sheet.disabled = !sheet.disabled;
             *     } );
             *
             * See also [MDN: CSSStyleSheet](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet).
             *
             * @param {string} text CSS to be appended
             * @return {CSSStyleSheet} The sheet object
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-addCSS
             */
            function addCSS(text: string): CSSStyleSheet;

            /**
             * Add a link to a portlet menu on the page, such as:
             *
             * - p-cactions (Content actions),
             * - p-personal (Personal tools),
             * - p-navigation (Navigation),
             * - p-tb (Toolbox).
             * - p-associated-pages (For namespaces and special page tabs on supported skins)
             * - p-namespaces (For namespaces on legacy skins)
             *
             * Additional menus can be discovered through the following code:
             * ```$('.mw-portlet').toArray().map((el) => el.id);```
             *
             * Menu availability varies by skin, wiki, and current page.
             *
             * The first three parameters are required, the others are optional and
             * may be null. Though providing an id and tooltip is recommended.
             *
             * By default, the new link will be added to the end of the menu. To
             * add the link before an existing item, pass the DOM node or a CSS selector
             * for that item, e.g. `'#foobar'` or `document.getElementById( 'foobar' )`.
             *
             *     mw.util.addPortletLink(
             *         'p-tb', 'https://www.mediawiki.org/',
             *         'mediawiki.org', 't-mworg', 'Go to mediawiki.org', 'm', '#t-print'
             *     );
             *
             *     var node = mw.util.addPortletLink(
             *         'p-tb',
             *         new mw.Title( 'Special:Example' ).getUrl(),
             *         'Example'
             *     );
             *     $( node ).on( 'click', function ( e ) {
             *         console.log( 'Example' );
             *         e.preventDefault();
             *     } );
             *
             * Remember that to call this inside a user script, you may have to ensure the
             * `mediawiki.util` is loaded first:
             *
             *     $.when( mw.loader.using( [ 'mediawiki.util' ] ), $.ready ).then( function () {
             *          mw.util.addPortletLink( 'p-tb', 'https://www.mediawiki.org/', 'mediawiki.org' );
             *     } );
             *
             * @param {string} portletId ID of the target portlet (e.g. 'p-cactions' or 'p-personal')
             * @param {string} href Link URL
             * @param {string} text Link text
             * @param {string} [id] ID of the list item, should be unique and preferably have
             *  the appropriate prefix ('ca-', 'pt-', 'n-' or 't-')
             * @param {string} [tooltip] Text to show when hovering over the link, without accesskey suffix
             * @param {string} [accesskey] Access key to activate this link. One character only,
             *  avoid conflicts with other links. Use `$( '[accesskey=x]' )` in the console to
             *  see if 'x' is already used.
             * @param {HTMLElement|JQuery|string} [nextnode] Element that the new item should be added before.
             *  Must be another item in the same list, it will be ignored otherwise.
             *  Can be specified as DOM reference, as jQuery object, or as CSS selector string.
             * @fires util_addPortletLink
             * @return {HTMLLIElement|null} The added list item, or null if no element was added.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-addPortletLink
             */
            function addPortletLink(
                portletId: string,
                href: string,
                text: string,
                id?: string,
                tooltip?: string,
                accesskey?: string,
                nextnode?: HTMLElement | JQuery | string
            ): HTMLLIElement | null;

            /**
             * Add content to the subtitle of the skin.
             *
             * @param {HTMLElement|string} nodeOrHTMLString
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-addSubtitle
             */
            function addSubtitle(nodeOrHTMLString: HTMLElement | string): void;

            /**
             * Clears the entire subtitle if present in the page. Used for refreshing subtitle
             * after edit with response from parse API.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-clearSubtitle
             */
            function clearSubtitle(): void;

            /**
             * Return a function, that, as long as it continues to be invoked, will not
             * be triggered. The function will be called after it stops being called for
             * N milliseconds. If `immediate` is passed, trigger the function on the
             * leading edge, instead of the trailing.
             *
             * Ported from Underscore.js 1.5.2, Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud
             * and Investigative Reporters & Editors, distributed under the MIT license, from
             * <https://github.com/jashkenas/underscore/blob/1.5.2/underscore.js#L689>.
             *
             * @since 1.34
             * @param {Function} func Function to debounce
             * @param {number} [wait=0] Wait period in milliseconds
             * @param {boolean} [immediate] Trigger on leading edge
             * @return {Function} Debounced function
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-debounce
             */
            function debounce(
                func: (...args: any[]) => any,
                wait?: number,
                immediate?: number
            ): any;

            /**
             * Encode a string as CSS id, for use as HTML id attribute value.
             *
             * Analog to `Sanitizer::escapeIdForAttribute()` in PHP.
             *
             * @since 1.30
             * @param {string} str String to encode
             * @return {string} Encoded string
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-escapeIdForAttribute
             */
            function escapeIdForAttribute(str: string): string;

            /**
             * Encode a string as URL fragment, for use as HTML anchor link.
             *
             * Analog to `Sanitizer::escapeIdForLink()` in PHP.
             *
             * @since 1.30
             * @param {string} str String to encode
             * @return {string} Encoded string
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-escapeIdForLink
             */
            function escapeIdForLink(str: string): string;

            /**
             * Escape string for safe inclusion in regular expression
             *
             * The following characters are escaped:
             *
             *     \ { } ( ) | . ? * + - ^ $ [ ]
             *
             * @since 1.26; moved to mw.util in 1.34
             * @param {string} str String to escape
             * @return {string} Escaped string
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-escapeRegExp
             */
            function escapeRegExp(str: string): string;

            /**
             * Get the value for a given URL query parameter.
             *
             *     mw.util.getParamValue( 'foo', '/?foo=x' ); // "x"
             *     mw.util.getParamValue( 'foo', '/?foo=' ); // ""
             *     mw.util.getParamValue( 'foo', '/' ); // null
             *
             * @param {string} param The parameter name.
             * @param {string} [url=location.href] URL to search through, defaulting to the current browsing location.
             * @return {string|null} Parameter value, or null if parameter was not found.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-getParamValue
             */
            function getParamValue(param: string, url?: string): string | null;

            /**
             * Get the target element from a link hash
             *
             * This is the same element as you would get from
             * document.querySelectorAll(':target'), but can be used on
             * an arbitrary hash fragment, or after pushState/replaceState
             * has been used.
             *
             * Link fragments can be unencoded, fully encoded or partially
             * encoded, as defined in the spec.
             *
             * We can't just use decodeURI as that assumes the fragment
             * is fully encoded, and throws an error on a string like '%A',
             * so we use the percent-decode.
             *
             * @param {string} [hash] Hash fragment, without the leading '#'.
             *  Taken from location.hash if omitted.
             * @return {HTMLElement|null} Element, if found
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-getTargetFromFragment
             */
            function getTargetFromFragment(hash?: string): HTMLElement | null;

            /**
             * Get the URL to a given local wiki page name,
             *
             * @param {string|null} [pageName=wgPageName] Page name
             * @param {Object} [params] A mapping of query parameter names to values,
             *  e.g. `{ action: 'edit' }`
             * @return {string} URL, relative to `wgServer`.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-getUrl
             */
            function getUrl(pageName?: string | null, params?: { [param: string]: string }): string;

            /**
             * Hide a portlet.
             *
             * @param {string} portletId ID of the target portlet (e.g. 'p-cactions' or 'p-personal')
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-hidePortlet
             */
            function hidePortlet(portletId: string): void;

            /**
             * Check whether a string is a valid IP address
             *
             * @since 1.25
             * @param {string} address String to check
             * @param {boolean} [allowBlock=false] If a block of IPs should be allowed
             * @return {boolean}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-isIPAddress
             */
            function isIPAddress(address: string, allowBlock?: boolean): boolean;

            /**
             * Whether a string is a valid IPv4 address or not.
             *
             * Based on \Wikimedia\IPUtils::isIPv4 in PHP.
             *
             *     // Valid
             *     mw.util.isIPv4Address( '80.100.20.101' );
             *     mw.util.isIPv4Address( '192.168.1.101' );
             *
             *     // Invalid
             *     mw.util.isIPv4Address( '192.0.2.0/24' );
             *     mw.util.isIPv4Address( 'hello' );
             *
             * @param {string} address
             * @param {boolean} [allowBlock=false]
             * @return {boolean}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-isIPv4Address
             */
            function isIPv4Address(address: string, allowBlock?: boolean): boolean;

            /**
             * Whether a string is a valid IPv6 address or not.
             *
             * Based on \Wikimedia\IPUtils::isIPv6 in PHP.
             *
             *     // Valid
             *     mw.util.isIPv6Address( '2001:db8:a:0:0:0:0:0' );
             *     mw.util.isIPv6Address( '2001:db8:a::' );
             *
             *     // Invalid
             *     mw.util.isIPv6Address( '2001:db8:a::/32' );
             *     mw.util.isIPv6Address( 'hello' );
             *
             * @param {string} address
             * @param {boolean} [allowBlock=false]
             * @return {boolean}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-isIPv6Address
             */
            function isIPv6Address(address: string, allowBlock?: boolean): boolean;

            /**
             * Is a portlet visible?
             *
             * @param {string} portletId ID of the target portlet (e.g. 'p-cactions' or 'p-personal')
             * @return {boolean}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-isPortletVisible
             */
            function isPortletVisible(portletId: string): boolean;

            /**
             * This functionality has been adapted from MediaWiki\User\TempUser\Pattern::isMatch()
             *
             * Checks if the pattern matches the given username
             *
             * @param {string} username
             * @return {boolean}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-isTemporaryUser
             */
            function isTemporaryUser(username: string): boolean;

            /**
             * Parse the URL of an image uploaded to MediaWiki, or a thumbnail for such an image,
             * and return the image name, thumbnail size and a template that can be used to resize
             * the image.
             *
             * @param {string} url URL to parse (URL-encoded)
             * @return {Object|null} URL data, or null if the URL is not a valid MediaWiki
             *   image/thumbnail URL.
             * @return {string} return.name File name (same format as Title.getMainText()).
             * @return {number} [return.width] Thumbnail width, in pixels. Null when the file is not
             *   a thumbnail.
             * @return {function(number):string} [return.resizeUrl] A function that takes a width
             *   parameter and returns a thumbnail URL (URL-encoded) with that width. The width
             *   parameter must be smaller than the width of the original image (or equal to it; that
             *   only works if MediaHandler::mustRender returns true for the file). Null when the
             *   file in the original URL is not a thumbnail.
             *   On wikis with $wgGenerateThumbnailOnParse set to true, this will fall back to using
             *   Special:Redirect which is less efficient. Otherwise, it is a direct thumbnail URL.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-parseImageUrl
             */
            function parseImageUrl(url: string): {
                name: string;
                width?: number | null;
                resizeUrl: (w: number) => string;
            } | null;

            /**
             * Percent-decode a string, as found in a URL hash fragment
             *
             * Implements the percent-decode method as defined in
             * https://url.spec.whatwg.org/#percent-decode.
             *
             * URLSearchParams implements https://url.spec.whatwg.org/#concept-urlencoded-parser
             * which performs a '+' to ' ' substitution before running percent-decode.
             *
             * To get the desired behaviour we percent-encode any '+' in the fragment
             * to effectively expose the percent-decode implementation.
             *
             * @param {string} text Text to decode
             * @return {string|null} Decoded text, null if decoding failed
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-percentDecodeFragment
             */
            function percentDecodeFragment(text: string): string | null;

            /**
             * This functionality has been adapted from \Wikimedia\IPUtils::prettifyIP()
             *
             * Prettify an IP for display to end users.
             * This will make it more compact and lower-case.
             *
             * @param {string} ip IP address in quad or octet form (CIDR or not).
             * @return {string|null}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-prettifyIP
             */
            function prettifyIP(ip: string): string | null;

            /**
             * Encode the string like PHP's rawurlencode
             *
             * @param {string} str String to be encoded.
             * @return {string} Encoded string
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-rawurlencode
             */
            function rawurlencode(str: string): string;

            /**
             * This functionality has been adapted from \Wikimedia\IPUtils::sanitizeIP()
             *
             * Convert an IP into a verbose, uppercase, normalized form.
             * Both IPv4 and IPv6 addresses are trimmed. Additionally,
             * IPv6 addresses in octet notation are expanded to 8 words;
             * IPv4 addresses have leading zeros, in each octet, removed.
             *
             * @param {string} ip IP address in quad or octet form (CIDR or not).
             * @return {string|null}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-sanitizeIP
             */
            function sanitizeIP(ip: string): string | null;

            /**
             * Reveal a portlet if it is hidden.
             *
             * @param {string} portletId ID of the target portlet (e.g. 'p-cactions' or 'p-personal')
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-showPortlet
             */
            function showPortlet(portletId: string): void;

            /**
             * Return a function, that, when invoked, will only be triggered at most once
             * during a given window of time. If called again during that window, it will
             * wait until the window ends and then trigger itself again.
             *
             * As it's not knowable to the caller whether the function will actually run
             * when the wrapper is called, return values from the function are entirely
             * discarded.
             *
             * Ported from OOUI.
             *
             * @param {Function} func Function to throttle
             * @param {number} wait Throttle window length, in milliseconds
             * @return {Function} Throttled function
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-throttle
             */
            function throttle(func: (...args: any[]) => any, wait: number): any;

            /**
             * Validate a string as representing a valid e-mail address.
             *
             * This validation is based on the HTML5 specification.
             *
             *     mw.util.validateEmail( "me@example.org" ) === true;
             *
             * @param {string} email E-mail address
             * @return {boolean|null} True if valid, false if invalid, null if `email` was empty.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-validateEmail
             */
            function validateEmail(email: string): boolean | null;

            /**
             * Get URL to a MediaWiki server entry point.
             *
             * Similar to `wfScript()` in PHP.
             *
             * @since 1.18
             * @param {string} [str="index"] Name of entry point (e.g. 'index' or 'api')
             * @return {string} URL to the script file (e.g. `/w/api.php`)
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-wikiScript
             */
            function wikiScript(str?: string): string;

            /**
             * Encode page titles in a way that matches `wfUrlencode` in PHP.
             *
             * This is important both for readability and consistency in the user experience,
             * as well as for caching. If URLs are not formatted in the canonical way, they
             * may be subject to drastically shorter cache durations and/or miss automatic
             * purging after edits, thus leading to stale content being served from a
             * non-canonical URL.
             *
             * @param {string} str String to be encoded.
             * @return {string} Encoded string
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-wikiUrlencode
             */
            function wikiUrlencode(str: string): string;
        }
    }
}

export {};
