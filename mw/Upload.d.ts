declare global {
    namespace mw {
        /**
         * Upload to a wiki. Most of the functionality is implemented
         * in {@link mw.Api.upload} and friends, but this model class will tie it
         * together as well as let you perform actions in a logical way.
         *
         * A simple example:
         *
         * ```js
         * var file = new OO.ui.SelectFileWidget(),
         *     button = new OO.ui.ButtonWidget( { label: 'Save' } ),
         *     upload = new mw.Upload;
         *
         * button.on( 'click', () => {
         *     upload.setFile( file.getValue() );
         *     upload.setFilename( file.getValue().name );
         *     upload.upload();
         * } );
         *
         * $( document.body ).append( file.$element, button.$element );
         * ```
         *
         * You can also choose to {@link uploadToStash stash the upload} and
         * {@link finishStashUpload finalize} it later:
         *
         * ```js
         * var file, // Some file object
         *     upload = new mw.Upload,
         *     stashPromise = $.Deferred();
         *
         * upload.setFile( file );
         * upload.uploadToStash().then( () => {
         *     stashPromise.resolve();
         * } );
         *
         * stashPromise.then( () => {
         *     upload.setFilename( 'foo' );
         *     upload.setText( 'bar' );
         *     upload.finishStashUpload().then( () => {
         *         console.log( 'Done!' );
         *     } );
         * } );
         * ```
         *
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Upload.html
         */
        class Upload {
            static static: {};

            /**
             * Used to represent an upload in progress on the frontend.
             *
             * @param apiconfig A mw.Api object (or subclass), or configuration
             *     to pass to the constructor of mw.Api.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Upload.html#Upload
             */
            constructor(apiconfig?: Api | Api.Options);

            /**
             * Finish a stash upload.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Upload.html#finishStashUpload
             */
            finishStashUpload(): Api.Promise<
                [Api.UnknownResponse],
                Api.RejectArgTuple | [string, Api.UnknownResponse]
            >;

            /**
             * Get the mw.Api instance used by this Upload object.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Upload.html#getApi
             */
            getApi(): JQuery.Promise<Api>;

            /**
             * Gets the base filename from a path name.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Upload.html#getBasename
             */
            getBasename(path: string): string;

            /**
             * Get the current value of the edit comment for the upload.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Upload.html#getComment
             */
            getComment(): string;

            /**
             * Get the file being uploaded.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Upload.html#getFile
             */
            getFile(): HTMLInputElement | File | Blob;

            /**
             * Get the filename, to be finalized on upload.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Upload.html#getFilename
             */
            getFilename(): string;

            /**
             * Get the imageinfo object for the finished upload.
             * Only available once the upload is finished! Don't try to get it
             * beforehand.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Upload.html#getImageInfo
             */
            getImageInfo(): Api.UnknownResponse | undefined;

            /**
             * Gets the state of the upload.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Upload.html#getState
             */
            getState(): Upload.State;

            /**
             * Gets details of the current state.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Upload.html#getStateDetails
             */
            getStateDetails(): any;

            /**
             * Get the text of the file page, to be created on file upload.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Upload.html#getText
             */
            getText(): string;

            /**
             * Get the boolean for whether the file will be watchlisted after upload.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Upload.html#getWatchlist
             */
            getWatchlist(): boolean;

            /**
             * Set the edit comment for the upload.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Upload.html#setComment
             */
            setComment(comment: string): void;

            /**
             * Set the file to be uploaded.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Upload.html#setFile
             */
            setFile(file: HTMLInputElement | File | Blob): void;

            /**
             * Set the stashed file to finish uploading.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Upload.html#setFilekey
             */
            setFilekey(filekey: string): void;

            /**
             * Set the filename, to be finalized on upload.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Upload.html#setFilename
             */
            setFilename(filename: string): void;

            /**
             * Sets the filename based on the filename as it was on the upload.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Upload.html#setFilenameFromFile
             */
            setFilenameFromFile(): void;

            /**
             * Sets the state and state details (if any) of the upload.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Upload.html#setState
             */
            setState(state: Upload.State, stateDetails: any): void;

            /**
             * Set the text of the file page, to be created on file upload.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Upload.html#setText
             */
            setText(text: string): void;

            /**
             * Set whether the file should be watchlisted after upload.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Upload.html#setWatchlist
             */
            setWatchlist(watchlist: boolean): void;

            /**
             * Upload the file directly.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Upload.html#upload
             */
            upload(): Upload.Promise;

            /**
             * Upload the file to the stash to be completed later.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Upload.html#uploadToStash
             */
            uploadToStash(): Upload.Promise<[Api.FinishUpload]>;
        }

        namespace Upload {
            /**
             * State of uploads represented in simple terms.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.Upload.html#.State
             */
            enum State {
                /**
                 * Upload not yet started.
                 */
                NEW,

                /**
                 * Upload finished, but there was a warning.
                 */
                WARNING,

                /**
                 * Upload finished, but there was an error.
                 */
                ERROR,

                /**
                 * Upload in progress.
                 */
                UPLOADING,

                /**
                 * Upload finished, but not published, call {@link Upload.finishStashUpload finishStashUpload}.
                 */
                STASHED,

                /**
                 * Upload finished and published.
                 */
                UPLOADED,
            }
        }
    }
}

export {};
