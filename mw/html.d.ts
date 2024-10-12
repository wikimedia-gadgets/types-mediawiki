declare global {
    namespace mw {
        /**
         * HTML construction helper functions.
         *
         * @example
         * ```js
         * var Html, output;
         *
         * Html = mw.html;
         * output = Html.element( 'div', {}, new Html.Raw(
         *     Html.element( 'img', { src: '<' } )
         * ) );
         * mw.log( output ); // <div><img src="&lt;"/></div>
         * ```
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html.html
         */
        namespace html {
            /**
             * Create an HTML element string, with safe escaping.
             *
             * @param {string} name The tag name.
             * @param {Object.<string, string|number|boolean>} [attrs] An object with members mapping element names to values
             * @param {string|Raw|null} [contents=null] The contents of the element.
             *
             *  - string: Text to be escaped.
             *  - null: The element is treated as void with short closing form, e.g. `<br/>`.
             *  - this.Raw: The raw value is directly included.
             * @returns {string} HTML
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html.html#.element
             */
            function element(
                name: string,
                attrs?: Record<string, string | number | boolean>,
                contents?: string | Raw | null
            ): string;

            /**
             * Escape a string for HTML.
             *
             * Converts special characters to HTML entities.
             *
             * @example
             * ```js
             * mw.html.escape( '< > \' & "' );
             * // Returns &lt; &gt; &#039; &amp; &quot;
             * ```
             * @param {string} s The string to escape
             * @returns {string} HTML
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html.html#.escape
             */
            function escape(s: string): string;

            /**
             * Wrapper object for raw HTML. Can be used with {@link mw.html.element}.
             *
             * @example
             * ```js
             * const raw = new mw.html.Raw( 'Text' );
             * mw.html.element( 'div', { class: 'html' }, raw );
             * ```
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html.Raw.html
             */
            class Raw<V extends string = string> {
                value: V;

                /**
                 * @param {string} value
                 * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html.Raw.html#Raw
                 */
                constructor(value: V);
            }
        }
    }
}

export {};
