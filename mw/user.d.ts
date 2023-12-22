declare global {
    namespace mw {
        /**
         * @class mw.user
         * @singleton
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user
         */
        namespace user {
            /**
             * @property {Map}
             * @see: https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-property-options
             */
            // TODO: add types for items in the options map
            const options: Map;

            /**
             * @property {Map}
             * @see: https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-property-tokens
             */
            const tokens: Map<{
                csrfToken: string;
                patrolToken: string;
                watchToken: string;
            }>;

            /**
             * Generate a random user session ID.
             *
             * This information would potentially be stored in a cookie to identify a user during a
             * session or series of sessions. Its uniqueness should not be depended on unless the
             * browser supports the crypto API.
             *
             * Known problems with Math.random():
             * Using the Math.random function we have seen sets
             * with 1% of non uniques among 200,000 values with Safari providing most of these.
             * Given the prevalence of Safari in mobile the percentage of duplicates in
             * mobile usages of this code is probably higher.
             *
             * Rationale:
             * We need about 80 bits to make sure that probability of collision
             * on 155 billion  is <= 1%
             *
             * See https://en.wikipedia.org/wiki/Birthday_attack#Mathematics
             * n(p;H) = n(0.01,2^80)= sqrt (2 * 2^80 * ln(1/(1-0.01)))
             *
             * @return {string} 80 bit integer in hex format, padded
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-generateRandomSessionId
             */
            function generateRandomSessionId(): string;

            /**
             * Get the current user's groups
             *
             * @param {Function} [callback]
             * @return {JQuery.Promise}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-getGroups
             */
            function getGroups(callback?: (groups: string[]) => any): JQuery.Promise<string[]>;

            /**
             * Get the current user's database id
             *
             * Not to be confused with #id.
             *
             * @return {number} Current user's id, or 0 if user is anonymous
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-getId
             */
            function getId(): number;

            /**
             * Get the current user's name
             *
             * @return {string|null} User name string or null if user is anonymous
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-getName
             */
            function getName(): string | null;

            /**
             * A sticky generateRandomSessionId for the current JS execution context,
             * cached within this class (also known as a page view token).
             *
             * @since 1.32
             * @return {string} 80 bit integer in hex format, padded
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-getPageviewToken
             */
            function getPageviewToken(): string;

            /**
             * Get date user registered, if available
             *
             * @return {boolean|null|Date} False for anonymous users, null if data is
             *  unavailable, or Date for when the user registered.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-getRegistration
             */
            function getRegistration(): boolean | null | Date;

            /**
             * Get the current user's rights
             *
             * @param {Function} [callback]
             * @return {JQuery.Promise}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-getRights
             */
            function getRights(callback?: (rights: string[]) => any): JQuery.Promise<string[]>;

            /**
             * Get the current user's name or the session ID
             *
             * Not to be confused with #getId.
             *
             * @return {string} User name or random session ID
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-id
             */
            function id(): string;

            /**
             * Whether the current user is anonymous
             *
             * @return {boolean}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-isAnon
             */
            function isAnon(): boolean;

            /**
             * Is the user a normal non-temporary registered user?
             *
             * @return {boolean}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-isNamed
             */
            function isNamed(): boolean;

            /**
             * Is the user an autocreated temporary user?
             *
             * @return {boolean}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-isTemp
             */
            function isTemp(): boolean;

            /**
             * Retrieve a random ID, generating it if needed
             *
             * This ID is shared across windows, tabs, and page views. It is persisted
             * for the duration of one browser session (until the browser app is closed),
             * unless the user evokes a "restore previous session" feature that some browsers have.
             *
             * **Note:** Server-side code must never interpret or modify this value.
             *
             * @return {string} Random session ID
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-sessionId
             */
            function sessionId(): string;

            /**
             * Get the current user's groups or rights
             *
             * @private
             * @return {JQuery.Promise}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-getUserInfo
             */
            function getUserInfo(): JQuery.Promise<{
                groups: string[];
                rights: string[];
            }>;
        }
    }
}

export {};
