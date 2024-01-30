declare global {
    namespace mw {
        /**
         * HTML construction helper functions
         *
         * ```js
         * var Html, output;
         *
         * Html = mw.html;
         * output = Html.element( 'div', {}, new Html.Raw(
         *     Html.element( 'img', { src: '<' } )
         * ) );
         * mw.log( output ); // <div><img src="&lt;"/></div>
         * ```
         *
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.html
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
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.html-method-element
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
             * ```js
             * mw.html.escape( '< > \' & "' );
             * // Returns &lt; &gt; &#039; &amp; &quot;
             * ```
             *
             * @param {string} s The string to escape
             * @returns {string} HTML
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.html-method-escape
             */
            function escape(s: string): string;

            /**
             * Wrapper object for raw HTML passed to {@link mw.html.element()}.
             *
             * @param {string} value
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.html.Raw-method-constructor
             */
            class Raw<V extends string = string> {
                constructor(value: V);
                private value: V;
            }
        }
    }
}

export {};
