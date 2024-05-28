declare global {
    namespace mw {
        /**
         * Respond to the creation of a temporary user.
         *
         * @since 1.42
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.tempUserCreated.html
         */
        namespace tempUserCreated {
            /**
             * Show popup after creation of a temporary user.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.tempUserCreated.html#.showPopup
             */
            function showPopup(): void;
        }
    }
}

export {};
