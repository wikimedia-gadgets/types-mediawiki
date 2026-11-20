interface UserCreatedPopoverProps {
    classes?: string[];
    content?: string[];
    hideBackdrop?: boolean;
    primaryActionLabel?: string | null;
    primaryActionUrl?: string | null;
    title?: string | null;
}

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
             * @since 1.47
             */
            function showCondensedPopup(props: UserCreatedPopoverProps): void;

            /**
             * Show popup after creation of a temporary user.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.tempUserCreated.html#.showPopup
             */
            function showPopup(): void;
        }
    }
}

export {};
