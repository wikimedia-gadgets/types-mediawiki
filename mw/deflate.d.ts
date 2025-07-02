declare global {
    namespace mw {
        /**
         * Convert a byte stream to base64 text.
         *
         * @example
         * ```js
         * return mw.loader.using( 'mediawiki.deflate' ).then( () => mw.deflate( html ) );
         * ```
         * @deprecated since 1.44 - Use {@link mw.deflateAsync}
         * @param data Undeflated data
         * @returns Compressed data
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.deflate
         */
        function deflate(data: string | ArrayBuffer): `rawdeflate,${string}`;

        /**
         * Convert a byte stream to base64 text.
         *
         * Uses browser native CompressionStream if available.
         *
         * @example
         * ```js
         * return mw.loader.using( 'mediawiki.deflate' ).then( () => mw.deflateAsync( html ) );
         * ```
         * @since 1.44
         * @param data Undeflated data
         * @returns Compressed data
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.deflateAsync
         */
        function deflateAsync(data: string | ArrayBuffer): Promise<`rawdeflate,${string}`>;
    }
}

export {};
