declare global {
    namespace mw {
        /**
         * Get a message object.
         *
         * Shortcut for `new mw.Message( mw.messages, key, parameters )`.
         *
         * @param {string} key Key of message to get
         * @param {...any} parameters Values for $N replacements
         * @returns {Message}
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.message
         */
        function message(key: string, ...parameters: any[]): Message;

        /**
         * Store for messages.
         *
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.messages
         */
        const messages: Map<{ [key: string]: string }>;

        /**
         * Describes a translateable text or HTML string. Similar to the Message class in MediaWiki PHP.
         *
         * @example
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
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Message.html
         */
        class Message {
            /**
             * Object constructor for messages.
             * The constructor is not publicly accessible; use {@link mw.message} instead.
             *
             * @example
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
             * @param {Map} map Message store
             * @param {string} key
             * @param {Array} [parameters]
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Message.html#Message
             */
            constructor(map: Map<Record<string, string>>, key: string, parameters?: any[]);

            /**
             * Format message and return as escaped text in HTML.
             *
             * This is equivalent to the {@link text} format, which is then HTML-escaped.
             *
             * @returns {string} String form of html escaped message
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Message.html#escaped
             */
            escaped(): string;

            /**
             * Check if a message exists. Equivalent to {@link mw.Map.exists}.
             *
             * @returns {boolean}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Message.html#exists
             */
            exists(): boolean;

            /**
             * Check whether the message contains only syntax supported by jqueryMsg.
             *
             * This method is only available when jqueryMsg is loaded.
             *
             * @since 1.41
             * @returns {boolean}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Message.html#isParseable
             */
            isParseable(): boolean;

            /**
             * Add (does not replace) parameters for `$N` placeholder values.
             *
             * @param {Array} parameters
             * @returns {Message}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Message.html#params
             */
            params(parameters: any[]): this;

            /**
             * Parse message as wikitext and return HTML.
             *
             * If jqueryMsg is loaded, this transforms text and parses a subset of supported wikitext
             * into HTML. Without jqueryMsg, it is equivalent to {@link escaped}.
             *
             * @returns {string} String form of parsed message
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Message.html#parse
             */
            parse(): string;

            /**
             * Parse the message to DOM nodes, rather than HTML string like {@link parse}.
             *
             * This method is only available when jqueryMsg is loaded.
             *
             * @since 1.27
             * @returns {JQuery}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Message.html#parseDom
             */
            parseDom(): JQuery;

            /**
             * Return message plainly.
             *
             * This substitutes parameters, but otherwise does not transform the
             * message content.
             *
             * @returns {string} String form of plain message
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Message.html#plain
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
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Message.html#text
             */
            text(): string;

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
             * @since 1.38 - format parameter can be passed.
             * @param {string} format
             * @returns {string} Parsed message
             */
            private parser(format: string): string;

            /**
             * Convert message object to a string using the "text"-format .
             *
             * This exists for implicit string type casting only.
             * Do not call this directly. Use {@link mw.Message.text()} instead, one of the
             * other format methods.
             *
             * @since 1.38 - format parameter can be passed.
             * @param {string} [format="text"] Internal parameter. Uses "text" if called
             *  implicitly through string casting.
             * @returns {string} Message in the given format, or `⧼key⧽` if the key
             *  does not exist.
             */
            private toString(format?: "escaped" | "parse" | "plain" | "text"): string;
        }

        /**
         * Get a message string using the (default) 'text' format.
         *
         * Shortcut for `mw.message( key, parameters... ).text()`.
         *
         * @param {string} key Key of message to get
         * @param {...any} parameters Values for $N replacements
         * @returns {string}
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.msg
         */
        function msg(key: string, ...parameters: any[]): string;
    }
}

export {};
