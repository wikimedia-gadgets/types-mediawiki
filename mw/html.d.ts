declare global {
    namespace mw {
        namespace html {
            /**
             * Escape a string for HTML.
             * Converts special characters to HTML entities.
             * @param {string} s The string to escape
             * @returns {string} HTML
             */
            function escape(s: string): string;

            /**
             * Create an HTML element string, with safe escaping.
             * @param {string} name The tag name
             * @param {{ [key: string]: string }} attrs An object with members mapping element names to values
             * @param {string | html.Raw} contents The contents of the element
             * @returns {string} HTML
             */
            function element(
                name: string,
                attrs?: Record<string, string>,
                contents?: string | mw.html.Raw
            ): string;

            /**
             * Wrapper object for raw HTML passed to mw.html.element().
             */
            class Raw<V extends string = string> {
                constructor(value: V);
                private value: V;
            }
        }
    }
}

export {};
