declare global {
    namespace mw {
        /**
         * Used to represent an upload in progress on the frontend.
         *
         * Subclassed to upload to a foreign API, with no other goodies. Use
         * this for a generic foreign image repository on your wiki farm.
         *
         * Note you can provide the {@link target} or not - if the first argument is
         * an object, we assume you want the default, and treat it as apiconfig
         * instead.
         *
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.ForeignUpload.html
         */
        class ForeignUpload extends Upload {
            static static: {};
            static super: typeof Upload;
            /** @deprecated Use `super` instead */
            static parent: typeof Upload;

            /**
             * Used to specify the target repository of the upload.
             *
             * If you set this to something that isn't 'local', you must be sure to
             * add that target to $wgForeignUploadTargets in LocalSettings, and the
             * repository must be set up to use CORS and CentralAuth.
             *
             * Most wikis use "shared" to refer to Wikimedia Commons, we assume that
             * in this class and in the messages linked to it.
             *
             * Defaults to the first available foreign upload target,
             * or to local uploads if no foreign target is configured.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.ForeignUpload.html#.target
             */
            target: string;

            /**
             * Used to represent an upload in progress on the frontend.
             *
             * Subclassed to upload to a foreign API, with no other goodies. Use
             * this for a generic foreign image repository on your wiki farm.
             *
             * Note you can provide the {@link target} or not - if the first argument is
             * an object, we assume you want the default, and treat it as apiconfig
             * instead.
             *
             * @param {string} [target] Used to set up the target
             *     wiki. If not remote, this class behaves identically to mw.Upload (unless further subclassed)
             *     Use the same names as set in $wgForeignFileRepos for this. Also,
             *     make sure there is an entry in the $wgForeignUploadTargets array for this name.
             * @param {Api.Options} [apiconfig] Passed to the constructor of mw.ForeignApi or mw.Api, as needed.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.ForeignUpload.html#ForeignUpload
             */
            constructor(target: string, apiconfig?: ForeignApi.Options);
            constructor(apiconfig?: Api.Options);
        }
    }
}

export {};
