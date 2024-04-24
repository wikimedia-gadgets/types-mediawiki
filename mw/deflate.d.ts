declare global {
    namespace mw {
        /**
         * Convert a byte stream to base64 text.
         * Before using load the `mediawiki.deflate` ResourceLoader module.
         *
         * @example
         * ```js
         * mw.loader.using( 'mediawiki.deflate' ).then( function () {
         *     return mw.deflate( html );
         * } );
         * ```
         * @param {string|ArrayBuffer} data Undeflated data
         * @returns {string} Deflated data
         * @see https://github.com/wikimedia/mediawiki/blob/master/resources/src/mediawiki.deflate/mw.deflate.js#L3
         * @see https://doc.wikimedia.org/mediawiki-core/master/php/classDeflate.html
         */
        function deflate(data: string | ArrayBuffer): `rawdeflate,${string}`;
    }
}

export {};
