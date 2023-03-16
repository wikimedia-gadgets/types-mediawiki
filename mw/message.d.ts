declare global {
    namespace mw {
        function message(key: string, ...parameters: any[]): mw.Message;

        const messages: mw.Map<{ [key: string]: string }>;

        /**
         * Object constructor for messages.
         *
         * Similar to the Message class in MediaWiki PHP.
         *
         * Format defaults to 'text'.
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Message
         */
        class Message {
            /**
             * Object constructor for messages.
             *
             * Similar to the Message class in MediaWiki PHP.
             *
             * Format defaults to 'text'.
             * @param map Message store
             * @param key
             * @param parameters
             */
            constructor(map: mw.Map<Record<string, string>>, key: string, parameters?: any[]);

            /**
             * Change the format to 'escaped' and convert message to string
             *
             * This is equivalent to using the 'text' format (see text), then HTML-escaping the output.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Message-method-escaped
             */
            escaped(): string;

            /**
             * Check if a message exists
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Message-method-exists
             */
            exists(): boolean;

            /**
             * Add (does not replace) parameters for $N placeholder values.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Message-method-params
             */
            params(parameters: any[]): mw.Message;

            /**
             * Change format to 'parse' and convert message to string
             *
             * If `jqueryMsg` is loaded, this parses the message text from wikitext (where supported) to HTML
             *
             * Otherwise, it is equivalent to plain.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Message-method-parse
             */
            parse(): string;

            /**
             * Parse the message to DOM nodes, rather than HTML string like parse.
             *
             * This method is only available when jqueryMsg is loaded.
             * @since 1.27
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Message-method-parseDom
             */
            parseDom(): JQuery;

            /**
             * Get parsed contents of the message.
             *
             * The default parser does simple $N replacements and nothing else. This may be overridden to
             * provide a more complex message parser. The primary override is in the mediawiki.jqueryMsg module.
             *
             * This function will not be called for nonexistent messages.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Message-method-parser
             */
            parser(): string;

            /**
             * Change format to 'plain' and convert message to string
             *
             * This substitutes parameters, but otherwise does not change the message text.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Message-method-plain
             */
            plain(): string;

            /**
             * Change format to 'text' and convert message to string
             *
             * If jqueryMsg is loaded, {{-transformation is done where supported (such as {{plural:}},
             * {{gender:}}, {{int:}}).
             *
             * Otherwise, it is equivalent to plain
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Message-method-text
             */
            text(): string;

            /**
             * Convert message object to its string form based on current format.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Message-method-toString
             */
            toString(): string;
        }

        function msg(key: string, ...parameters: any[]): string;
    }
}

export {};
