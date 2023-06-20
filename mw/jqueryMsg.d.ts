interface ParserDefaults {
    // Magic words and their expansions. Server-side data is added to this below.
    magic: {
        PAGENAME: string;
        PAGENAMEE: string;
        SERVERNAME: string;
    };
    // Whitelist for allowed HTML elements in wikitext.
    // Self-closing tags are not currently supported.
    // Filled in with server-side data below
    allowedHtmlElements: string[];
    // Key tag name, value allowed attributes for that tag.
    // See Sanitizer::setupAttributeWhitelist
    allowedHtmlCommonAttributes: string[];
    // Attributes allowed for specific elements.
    // Key is element name in lower case
    // Value is array of allowed attributes for that element
    allowedHtmlAttributesByElement: any;
    messages: typeof mw.messages;
    language: typeof mw.language;
    // Same meaning as in mediawiki.js.
    //
    // Only 'text', 'parse', and 'escaped' are supported, and the
    // actual escaping for 'escaped' is done by other code (generally
    // through mediawiki.js).
    //
    // However, note that this default only
    // applies to direct calls to jqueryMsg. The default for mediawiki.js itself
    // is 'text', including when it uses jqueryMsg.
    format: string;
}

declare global {
    namespace mw {
        /**
         * @class mw.jqueryMsg
         * @singleton
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.jqueryMsg
         */
        namespace jqueryMsg {
            /**
             * Returns a function suitable for static use, to construct strings from a message key (and optional replacements).
             *
             * Example:
             *
             *       var format = mediaWiki.jqueryMsg.getMessageFunction( options );
             *       $( '#example' ).text( format( 'hello-user', username ) );
             *
             * Tthis returns only strings, so it destroys any bindings. If you want to preserve bindings, use the
             * jQuery plugin version instead. This was originally created to ease migration from `window.gM()`,
             * from a time when the parser used by `mw.message` was not extendable.
             *
             * N.B. replacements are variadic arguments or an array in second parameter. In other words:
             *    somefunction( a, b, c, d )
             * is equivalent to
             *    somefunction( a, [b, c, d] )
             *
             * @param {Object} options parser options
             * @return {Function} Function The message formatter
             * @return {string} return.return Rendered HTML.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.jqueryMsg-method-getMessageFunction
             */
            function getMessageFunction(options: Partial<ParserDefaults>): () => string;

            /**
             * Returns a jQuery plugin which parses the message in the message key, doing replacements optionally, and appends the nodes to
             * the current selector. Bindings to passed-in jquery elements are preserved. Functions become click handlers for [$1 linktext] links.
             * e.g.
             *
             *        $.fn.msg = mediaWiki.jqueryMsg.getPlugin( options );
             *        var $userlink = $( '<a>' ).click( function () { alert( "hello!!" ) } );
             *        $( 'p#headline' ).msg( 'hello-user', $userlink );
             *
             * N.B. replacements are variadic arguments or an array in second parameter. In other words:
             *    somefunction( a, b, c, d )
             * is equivalent to
             *    somefunction( a, [b, c, d] )
             *
             * We append to 'this', which in a jQuery plugin context will be the selected elements.
             *
             * @param {Object} options Parser options
             * @return {Function} Function suitable for assigning to jQuery plugin, such as jQuery#msg
             * @return {jQuery} return.return
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.jqueryMsg-method-getPlugin
             */
            function getPlugin(options: Partial<ParserDefaults>): () => JQuery;
        }
    }
}

export {};
