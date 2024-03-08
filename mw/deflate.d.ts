declare global {
    namespace mw {
        /**
         * Compress the content and add the 'rawdeflate,' prefix.
         *
         * @example
         * ```js
         * mw.loader.using( 'mediawiki.deflate' ).then( function () {
         *     var deflated = mw.deflate( myContent );
         * } );
         * ```
         *
         * @param {string|ArrayBuffer} data Undeflated data
         * @returns {string} Deflated data
         * @see https://github.com/wikimedia/mediawiki/blob/master/resources/src/mediawiki.deflate/mw.deflate.js#L3
         * @see https://doc.wikimedia.org/mediawiki-core/master/php/classDeflate.html
         */
        function deflate(data: string | ArrayBuffer): `rawdeflate,${string}`;
    }
}

export {};
