declare global {
    namespace mw {
        /**
         * Get a message object.
         *
         * Shortcut for `new mw.Message( mw.messages, key, parameters )`.
         *
         * @param {string} key Key of message to get
         * @param {...Mixed} parameters Values for $N replacements
         * @returns {Message}
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-method-message
         */
        function message(key: string, ...parameters: any[]): Message;

        /**
         * Store for messages.
         *
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-property-messages
         */
        const messages: Map<{ [key: string]: string }>;

        /**
         * Object constructor for messages.
         *
         * Similar to the Message class in MediaWiki PHP.
         *
         * ```js
         * var obj, str;
         * mw.messages.set( {
         *     'hello': 'Hello world',
         *     'hello-user': 'Hello, $1!',
         *     'welcome-user': 'Welcome back to $2, $1! Last visit by $1: $3',
         *     'so-unusual': 'You will find: $1'
         * } );
         *
         * obj = mw.message( 'hello' );
         * mw.log( obj.text() );
         * // Hello world
         *
         * obj = mw.message( 'hello-user', 'John Doe' );
         * mw.log( obj.text() );
         * // Hello, John Doe!
         *
         * obj = mw.message( 'welcome-user', 'John Doe', 'Wikipedia', '2 hours ago' );
         * mw.log( obj.text() );
         * // Welcome back to Wikipedia, John Doe! Last visit by John Doe: 2 hours ago
         *
         * // Using mw.msg shortcut, always in "text' format.
         * str = mw.msg( 'hello-user', 'John Doe' );
         * mw.log( str );
         * // Hello, John Doe!
         *
         * // Different formats
         * obj = mw.message( 'so-unusual', 'Time "after" <time>' );
         *
         * mw.log( obj.text() );
         * // You will find: Time "after" <time>
         *
         * mw.log( obj.escaped() );
         * // You will find: Time &quot;after&quot; &lt;time&gt;
         * ```
         *
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Message
         */
        class Message {
            /**
             * Object constructor for messages.
             *
             * Similar to the Message class in MediaWiki PHP.
             *
             * ```js
             * var obj, str;
             * mw.messages.set( {
             *     'hello': 'Hello world',
             *     'hello-user': 'Hello, $1!',
             *     'welcome-user': 'Welcome back to $2, $1! Last visit by $1: $3',
             *     'so-unusual': 'You will find: $1'
             * } );
             *
             * obj = mw.message( 'hello' );
             * mw.log( obj.text() );
             * // Hello world
             *
             * obj = mw.message( 'hello-user', 'John Doe' );
             * mw.log( obj.text() );
             * // Hello, John Doe!
             *
             * obj = mw.message( 'welcome-user', 'John Doe', 'Wikipedia', '2 hours ago' );
             * mw.log( obj.text() );
             * // Welcome back to Wikipedia, John Doe! Last visit by John Doe: 2 hours ago
             *
             * // Using mw.msg shortcut, always in "text' format.
             * str = mw.msg( 'hello-user', 'John Doe' );
             * mw.log( str );
             * // Hello, John Doe!
             *
             * // Different formats
             * obj = mw.message( 'so-unusual', 'Time "after" <time>' );
             *
             * mw.log( obj.text() );
             * // You will find: Time "after" <time>
             *
             * mw.log( obj.escaped() );
             * // You will find: Time &quot;after&quot; &lt;time&gt;
             * ```
             *
             * @param {Map} map Message store
             * @param {string} key
             * @param {Array} [parameters]
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Message-method-constructor
             */
            constructor(map: Map<Record<string, string>>, key: string, parameters?: any[]);

            /**
             * Format message and return as escaped text in HTML.
             *
             * This is equivalent to the {@link text} format, which is then HTML-escaped.
             *
             * @returns {string} String form of html escaped message
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Message-method-escaped
             */
            escaped(): string;

            /**
             * Check if a message exists
             *
             * @returns {boolean}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Message-method-exists
             */
            exists(): boolean;

            /**
             * Check whether the message contains only syntax supported by jqueryMsg.
             *
             * This method is only available when jqueryMsg is loaded.
             *
             * @since 1.41
             * @returns {boolean}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Message-method-isParseable
             */
            isParseable(): boolean;

            /**
             * Add (does not replace) parameters for `$N` placeholder values.
             *
             * @param {Array} parameters
             * @returns {Message}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Message-method-params
             */
            params(parameters: any[]): this;

            /**
             * Parse message as wikitext and return HTML.
             *
             * If jqueryMsg is loaded, this transforms text and parses a subset of supported wikitext
             * into HTML. Without jqueryMsg, it is equivalent to {@link escaped}.
             *
             * @returns {string} String form of parsed message
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Message-method-parse
             */
            parse(): string;

            /**
             * Parse the message to DOM nodes, rather than HTML string like {@link parse}.
             *
             * This method is only available when jqueryMsg is loaded.
             *
             * @since 1.27
             * @returns {JQuery}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Message-method-parseDom
             */
            parseDom(): JQuery;

            /**
             * Get parsed contents of the message.
             *
             * The default parser does simple $N replacements and nothing else.
             * This may be overridden to provide a more complex message parser.
             * The primary override is in the mediawiki.jqueryMsg module.
             *
             * This function will not be called for nonexistent messages.
             *
             * @private For internal use by mediawiki.jqueryMsg only
             * @param {string} format
             * @returns {string} Parsed message
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Message-method-parser
             */
            private parser(format: string): string;

            /**
             * Return message plainly.
             *
             * This substitutes parameters, but otherwise does not transform the
             * message content.
             *
             * @returns {string} String form of plain message
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Message-method-plain
             */
            plain(): string;

            /**
             * Format message with text transformations applied.
             *
             * If jqueryMsg is loaded, `{{`-transformation is done for supported
             * magic words such as `{{plural:}}`, `{{gender:}}`, and `{{int:}}`.
             * Without jqueryMsg, it is equivalent to {@link plain}.
             *
             * @returns {string} String form of text message
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Message-method-text
             */
            text(): string;

            /**
             * Convert message object to a string using the "text"-format .
             *
             * This exists for implicit string type casting only.
             * Do not call this directly. Use {@link mw.Message.text()} instead, one of the
             * other format methods.
             *
             * @param {string} [format="text"] Internal parameter. Uses "text" if called
             *  implicitly through string casting.
             * @returns {string} Message in the given format, or `⧼key⧽` if the key
             *  does not exist.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Message-method-toString
             */
            private toString(format?: "escaped" | "parse" | "plain" | "text"): string;
        }

        /**
         * Get a message string using the (default) 'text' format.
         *
         * Shortcut for `mw.message( key, parameters... ).text()`.
         *
         * @param {string} key Key of message to get
         * @param {...Mixed} parameters Values for $N replacements
         * @returns {string}
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-method-msg
         */
        function msg(key: string, ...parameters: any[]): string;
    }
}

export {};
