declare global {
    namespace mw {
        /**
         * Respond to the creation of a temporary user.
         */
        namespace tempUserCreated {
            /**
             * Show popup after creation of a temporary user.
             */
            function showPopup(): void;
        }
    }
}

export {};
