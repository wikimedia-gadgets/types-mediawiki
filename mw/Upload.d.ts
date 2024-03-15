declare global {
    namespace mw {
        /**
         * Used to represent an upload in progress on the frontend.
         * Most of the functionality is implemented in mw.Api.plugin.upload,
         * but this model class will tie it together as well as let you perform
         * actions in a logical way.
         *
         * A simple example:
         *
         * ```js
         * var file = new OO.ui.SelectFileWidget(),
         *     button = new OO.ui.ButtonWidget( { label: 'Save' } ),
         *     upload = new mw.Upload;
         *
         * button.on( 'click', function () {
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
         * upload.uploadToStash().then( function () {
         *     stashPromise.resolve();
         * } );
         *
         * stashPromise.then( function () {
         *     upload.setFilename( 'foo' );
         *     upload.setText( 'bar' );
         *     upload.finishStashUpload().then( function () {
         *         console.log( 'Done!' );
         *     } );
         * } );
         * ```
         */
        class Upload {
            /**
             * Used to represent an upload in progress on the frontend.
             * Most of the functionality is implemented in mw.Api.plugin.upload,
             * but this model class will tie it together as well as let you perform
             * actions in a logical way.
             *
             * A simple example:
             *
             * ```js
             * var file = new OO.ui.SelectFileWidget(),
             *     button = new OO.ui.ButtonWidget( { label: 'Save' } ),
             *     upload = new mw.Upload;
             *
             * button.on( 'click', function () {
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
             * upload.uploadToStash().then( function () {
             *     stashPromise.resolve();
             * } );
             *
             * stashPromise.then( function () {
             *     upload.setFilename( 'foo' );
             *     upload.setText( 'bar' );
             *     upload.finishStashUpload().then( function () {
             *         console.log( 'Done!' );
             *     } );
             * } );
             * ```
             *
             * @param {Api|Partial<Api.Options>} [apiconfig] A mw.Api object (or subclass), or configuration
             *     to pass to the constructor of mw.Api.
             */
            constructor(apiconfig?: Api | Partial<Api.Options>);

            /**
             * Finish a stash upload.
             *
             * @returns {JQuery.Promise<Api.Response>}
             */
            finishStashUpload(): JQuery.Promise<Api.Response>;

            /**
             * Get the mw.Api instance used by this Upload object.
             *
             * @returns {JQuery.Promise<Api>}
             */
            getApi(): JQuery.Promise<Api>;

            /**
             * Gets the base filename from a path name.
             *
             * @param {string} path
             * @returns {string}
             */
            getBasename(path: string): string;

            /**
             * Get the current value of the edit comment for the upload.
             *
             * @returns {string}
             */
            getComment(): string;

            /**
             * Get the file being uploaded.
             *
             * @returns {HTMLInputElement|File|Blob}
             */
            getFile(): HTMLInputElement | File | Blob;

            /**
             * Get the filename, to be finalized on upload.
             *
             * @returns {string}
             */
            getFilename(): string;

            /**
             * Get the imageinfo object for the finished upload.
             * Only available once the upload is finished! Don't try to get it
             * beforehand.
             *
             * @returns {Api.Response|undefined}
             */
            getImageInfo(): Api.Response | undefined;

            /**
             * Gets the state of the upload.
             *
             * @returns {Upload.State}
             */
            getState(): Upload.State;

            /**
             * Gets details of the current state.
             *
             * @returns {any}
             */
            getStateDetails(): any;

            /**
             * Get the text of the file page, to be created on file upload.
             *
             * @returns {string}
             */
            getText(): string;

            /**
             * Get the boolean for whether the file will be watchlisted after upload.
             *
             * @returns {boolean}
             */
            getWatchlist(): boolean;

            /**
             * Set the edit comment for the upload.
             *
             * @param {string} comment
             */
            setComment(comment: string): void;

            /**
             * Set the file to be uploaded.
             *
             * @param {HTMLInputElement|File|Blob} file
             */
            setFile(file: HTMLInputElement | File | Blob): void;

            /**
             * Set the stashed file to finish uploading.
             *
             * @param {string} filekey
             */
            setFilekey(filekey: string): void;

            /**
             * Set the filename, to be finalized on upload.
             *
             * @param {string} filename
             */
            setFilename(filename: string): void;

            /**
             * Sets the filename based on the filename as it was on the upload.
             */
            setFilenameFromFile(): void;

            /**
             * Sets the state and state details (if any) of the upload.
             *
             * @param {Upload.State} state
             * @param {any} stateDetails
             */
            setState(state: Upload.State, stateDetails: any): void;

            /**
             * Set the text of the file page, to be created on file upload.
             *
             * @param {string} text
             */
            setText(text: string): void;

            /**
             * Set whether the file should be watchlisted after upload.
             *
             * @param {boolean} watchlist
             */
            setWatchlist(watchlist: boolean): void;

            /**
             * Upload the file directly.
             *
             * @returns {JQuery.Promise<Api.Response>}
             */
            upload(): JQuery.Promise<Api.Response>;

            /**
             * Upload the file to the stash to be completed later.
             *
             * @returns {JQuery.Promise<Api.Response>}
             */
            uploadToStash(): JQuery.Promise<Api.Response>;
        }

        namespace Upload {
            /**
             * State of uploads represented in simple terms.
             */
            enum State {
                /**
                 * Upload not yet started
                 */
                NEW,

                /**
                 * Upload finished, but there was a warning
                 */
                WARNING,

                /**
                 * Upload finished, but there was an error
                 */
                ERROR,

                /**
                 * Upload in progress
                 */
                UPLOADING,

                /**
                 * Upload finished, but not published, call #finishStashUpload
                 */
                STASHED,

                /**
                 * Upload finished and published
                 */
                UPLOADED,
            }
        }
    }
}

export {};