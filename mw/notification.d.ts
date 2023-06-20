/**
 * A Notification object for 1 message.
 *
 * The underscore in the name is to avoid a bug <https://github.com/senchalabs/jsduck/issues/304>.
 * It is not part of the actual class name.
 *
 * The constructor is not publicly accessible; use mw.notification#notify instead.
 * This does not insert anything into the document (see #start).
 *
 * @class mw.Notification_
 * @alternateClassName mw.Notification
 * @constructor
 * @private
 * @param {mw.Message|JQuery|HTMLElement|string} message
 * @param {Object} options
 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Notification_
 */
interface Notification {
    /**
     * Close the notification.
     *
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Notification_-method-close
     */
    close: () => void;
    /**
     * Pause any running auto-hide timer for this notification
     *
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Notification_-method-pause
     */
    pause: () => void;
    /**
     * Start autoHide timer if not already started.
     * Does nothing if autoHide is disabled.
     * Either to resume from pause or to make the first start.
     *
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Notification_-method-resume
     */
    resume: () => void;
    /**
     * Start the notification. Called automatically by mw.notification#notify
     * (possibly asynchronously on document-ready).
     *
     * This inserts the notification into the page, closes any matching tagged notifications,
     * handles the fadeIn animations and replacement transitions, and starts autoHide timers.
     *
     * @private
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Notification_-method-start
     */
    start: () => void;
    // Private state parameters, meant for internal use only
    // autoHideSeconds: String alias for number of seconds for timeout of auto-hiding notifications.
    // isOpen: Set to true after .start() is called to avoid double calls.
    //         Set back to false after .close() to avoid duplicating the close animation.
    // isPaused: false after .resume(), true after .pause(). Avoids duplicating or breaking the hide timeouts.
    //           Set to true initially so .start() can call .resume().
    // message: The message passed to the notification. Unused now but may be used in the future
    //          to stop replacement of a tagged notification with another notification using the same message.
    // options: The options passed to the notification with a little sanitization. Used by various methods.
    // $notification: jQuery object containing the notification DOM node.
    // @see: https://doc.wikimedia.org/mediawiki-core/master/js/source/notification.html#mw-Notification_
    autoHideSeconds: number;
    isOpen: boolean;
    isPaused: boolean;
    message: HTMLElement | HTMLElement[] | JQuery | mw.Message | string;
    options: Partial<typeof mw.notification.defaults>;
    $notification: JQuery;
    timeout: {
        set: typeof setTimeout;
        clear: typeof clearTimeout;
    };
}

declare global {
    namespace mw {
        /**
         * @param {HTMLElement|HTMLElement[]|JQuery|Message|string} message
         * @param {Notification} [options] See mw.notification#defaults for the defaults.
         * @return {JQuery.Promise}
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-method-notify
         */
        function notify(
            message: HTMLElement | HTMLElement[] | JQuery | Message | string,
            options?: Partial<typeof notification.defaults>
        ): JQuery.Promise<Notification>;

        /**
         * @class mw.notification
         * @singleton
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.notification
         */
        namespace notification {
            /**
             * @property {number}
             *
             * Maximum number of simultaneous notifications to start auto-hide timers for.
             * Only this number of notifications being displayed will be auto-hidden at one time.
             * Any additional notifications in the list will only start counting their timeout for
             * auto-hiding after the previous messages have been closed.
             *
             * This basically represents the minimal number of notifications the user should
             * be able to process during the {@link #defaults default} #autoHideSeconds time.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.notification-property-autoHideLimit
             */
            const autoHideLimit: number;

            /**
             * @property {Object}
             *
             * The defaults for #notify options parameter.
             *
             * - autoHide:
             *   A boolean indicating whether the notification should automatically
             *   be hidden after shown. Or if it should persist.
             *
             * - autoHideSeconds:
             *   Key to #autoHideSeconds for number of seconds for timeout of auto-hide
             *   notifications.
             *
             * - tag:
             *   An optional string. When a notification is tagged only one message
             *   with that tag will be displayed. Trying to display a new notification
             *   with the same tag as one already being displayed will cause the other
             *   notification to be closed and this new notification to open up inside
             *   the same place as the previous notification.
             *
             * - title:
             *   An optional title for the notification. Will be displayed above the
             *   content. Usually in bold.
             *
             * - type:
             *   An optional string for the type of the message used for styling:
             *   Examples: 'info', 'warn', 'error', 'success'.
             *
             * - visibleTimeout:
             *   A boolean indicating if the autoHide timeout should be based on
             *   time the page was visible to user. Or if it should use wall clock time.
             *
             * - id:
             *   HTML ID to set on the notification element.
             *
             * - classes:
             *   CSS class names in the form of a single string or
             *   array of strings, to be set on the notification element.
             *
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

            /**
             * Display a notification message to the user.
             *
             * @param {HTMLElement|HTMLElement[]|JQuery|Message|string} message
             * @param {Object} [options] The options to use for the notification.
             *  See mw.notification.defaults for details.
             * @return {mw.Notification} Notification object
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.notification-method-notify
             */
            function notify(
                message: HTMLElement | HTMLElement[] | JQuery | Message | string,
                options?: Partial<typeof notification.defaults>
            ): Notification;

            /**
             * Pause auto-hide timers for all notifications.
             * Notifications will not auto-hide until resume is called.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.notification-method-pause
             */
            function pause(): void;

            /**
             * Resume any paused auto-hide timers from the beginning.
             * Only the first #autoHideLimit timers will be resumed.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.notification-method-resume
             */
            function resume(): void;

            /**
             * @private
             * @property {Object}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.notification-property-autoHideSeconds
             */
            const autoHideSeconds: {
                short: number;
                long: number;
            };
        }
    }
}

export {};
