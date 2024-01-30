export interface UserInfo {
    /**
     * User groups that the user belongs to
     */
    groups: string[];
    /**
     * User's rights
     */
    rights: string[];
}

interface UserTokens extends Record<string, string> {
    csrfToken: string;
    patrolToken: string;
    watchToken: string;
}

export interface User {
    /**
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-property-options
     */
    // TODO: add types for items in the options map
    options: mw.Map;

    /**
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-property-tokens
     */
    tokens: mw.Map<UserTokens>;

    /**
     * Acquire a temporary user username and stash it in the current session, if temp account creation
     * is enabled and the current user is logged out. If a name has already been stashed, returns the
     * same name.
     *
     * If the user later performs an action that results in temp account creation, the stashed username
     * will be used for their account. It may also be used in previews. However, the account is not
     * created yet, and the name is not visible to other users.
     *
     * @returns {JQuery.Promise<string>} Promise resolved with the username if we succeeded,
     *   or resolved with `null` if we failed
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-acquireTempUserName
     */
    acquireTempUserName(): JQuery.Promise<string>;

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
     * @returns {string} 80 bit integer (20 characters) in hex format, padded
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-generateRandomSessionId
     */
    generateRandomSessionId(): string;

    /**
     * Get the current user's groups
     *
     * @param {Function} [callback]
     * @returns {JQuery.Promise<string[]>}
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-getGroups
     */
    getGroups<T>(callback: (groups: string[]) => T): JQuery.Promise<T>;
    getGroups(): JQuery.Promise<string[]>;

    /**
     * Get the current user's database id
     *
     * Not to be confused with {@link id}.
     *
     * @returns {number} Current user's id, or 0 if user is anonymous
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-getId
     */
    getId(): number;

    /**
     * Get the current user's name
     *
     * @returns {string|null} User name string or null if user is anonymous
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-getName
     */
    getName(): string | null;

    /**
     * A sticky generateRandomSessionId for the current JS execution context,
     * cached within this class (also known as a page view token).
     *
     * @since 1.32
     * @returns {string} 80 bit integer in hex format, padded
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-getPageviewToken
     */
    getPageviewToken(): string;

    /**
     * Get date user registered, if available
     *
     * @returns {false|null|Date} False for anonymous users, null if data is
     *  unavailable, or Date for when the user registered.
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-getRegistration
     */
    getRegistration(): false | null | Date;

    /**
     * Get the current user's rights
     *
     * @param {Function} [callback]
     * @returns {JQuery.Promise<string[]>}
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-getRights
     */
    getRights<T>(callback: (rights: string[]) => T): JQuery.Promise<T>;
    getRights(): JQuery.Promise<string[]>;

    /**
     * Get the current user's name or the session ID
     *
     * Not to be confused with {@link getId}.
     *
     * @returns {string} User name or random session ID
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-id
     */
    id(): string;

    /**
     * Whether the current user is anonymous
     *
     * @returns {boolean}
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-isAnon
     */
    isAnon(): boolean;

    /**
     * Is the user a normal non-temporary registered user?
     *
     * @returns {boolean}
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-isNamed
     */
    isNamed(): boolean;

    /**
     * Is the user an autocreated temporary user?
     *
     * @returns {boolean}
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-isTemp
     */
    isTemp(): boolean;

    /**
     * Retrieve a random ID, generating it if needed
     *
     * This ID is shared across windows, tabs, and page views. It is persisted
     * for the duration of one browser session (until the browser app is closed),
     * unless the user evokes a "restore previous session" feature that some browsers have.
     *
     * **Note:** Server-side code must never interpret or modify this value.
     *
     * @returns {string} Random session ID (20 hex characters)
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-sessionId
     */
    sessionId(): string;

    /**
     * Get the current user's groups or rights
     *
     * @private
     * @returns {JQuery.Promise<UserInfo>}
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user-method-getUserInfo
     */
    getUserInfo(): JQuery.Promise<UserInfo>;
}

declare global {
    namespace mw {
        /**
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.user
         */
        const user: User;
    }
}

export {};
