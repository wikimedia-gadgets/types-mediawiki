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
         * @param data Undeflated data
         * @returns Deflated data
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.deflate
         */
        function deflate(data: string | ArrayBuffer): `rawdeflate,${string}`;
    }
}

export {};
