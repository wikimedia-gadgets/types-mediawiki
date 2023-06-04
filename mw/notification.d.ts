interface Notification {
    start: () => void;
    pause: () => void;
    resume: () => void;
    close: () => void;
    $notification: JQuery;
    autoHideSeconds: number;
    isOpen: boolean;
    isPaused: boolean;
    options: Partial<typeof mw.notification.defaults>;
    timeout: {
        set: typeof setTimeout;
        clear: typeof clearTimeout;
    };
}

declare global {
    namespace mw {
        /**
         * Display a notification message to the user.
         * @param options.autoHide A boolean indicating whether the notification should automatically
         * be hidden after shown. Or if it should persist.
         * @param options.autoHideSeconds Key to autoHideSeconds for number of seconds for timeout of
         * auto-hide notifications.
         * @param options.tag An optional string. When a notification is tagged only one message with that
         * tag will be displayed. Trying to display a new notification with the same tag as one
         * already being displayed will cause the other notification to be closed and this new
         * notification to open up inside the same place as the previous notification.
         * @param options.title An optional title for the notification. Will be displayed above the
         * content. Usually in bold.
         * @param options.type An optional string for the type of the message used for styling:
         * Examples: 'info', 'warn', 'error', 'success'.
         * @param options.visibleTimeout A boolean indicating if the autoHide timeout should be based on
         * time the page was visible to user. Or if it should use wall clock time.
         * @param options.id HTML ID to set on the notification element.
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-method-notify
         */
        function notify(
            message: string | JQuery | HTMLElement | HTMLElement[],
            options?: Partial<typeof notification.defaults>
        ): JQuery.Promise<Notification>;

        namespace notification {
            function pause(): void;

            function resume(): void;

            function notify(
                message: string | JQuery | HTMLElement | HTMLElement[],
                options?: Partial<typeof notification.defaults>
            ): Notification;

            const autoHideSeconds: {
                short: number;
                long: number;
            };

            const autoHideLimit: number;

            /**
             * The defaults for notify options parameter.
             * @param autoHide A boolean indicating whether the notification should automatically
             * be hidden after shown. Or if it should persist.
             * @param autoHideSeconds Key to autoHideSeconds for number of seconds for timeout of
             * auto-hide notifications.
             * @param tag An optional string. When a notification is tagged only one message with that
             * tag will be displayed. Trying to display a new notification with the same tag as one
             * already being displayed will cause the other notification to be closed and this new
             * notification to open up inside the same place as the previous notification.
             * @param title An optional title for the notification. Will be displayed above the
             * content. Usually in bold.
             * @param type An optional string for the type of the message used for styling:
             * Examples: 'info', 'warn', 'error', 'success'.
             * @param visibleTimeout A boolean indicating if the autoHide timeout should be based on
             * time the page was visible to user. Or if it should use wall clock time.
             * @param id HTML ID to set on the notification element.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.notification-property-defaults
             */
            const defaults: {
                autoHide: boolean;
                autoHideSeconds: "short" | "long";
                tag: string | null;
                title: string | null;
                type: "info" | "warn" | "error" | "success";
                visibleTimeout: boolean;
                id: string;
                classes: string | string[];
            };
        }
    }
}

export {};
