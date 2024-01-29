declare global {
    interface JQueryStatic {
        /**
         * User-agent detection
         *
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/jQuery.client
         */
        client: Client;
    }
}

interface Client {
    /**
     * Get an object containing information about the client.
     *
     * The resulting client object will be in the following format:
     *
     * ```js
     * {
     *     'name': 'firefox',
     *     'layout': 'gecko',
     *     'layoutVersion': 20101026,
     *     'platform': 'linux'
     *     'version': '3.5.1',
     *     'versionBase': '3',
     *     'versionNumber': 3.5,
     * }
     * ```
     *
     * Example:
     *
     * ```js
     * if ( $.client.profile().layout == 'gecko' ) {
     *     // This will only run in Gecko browsers, such as Mozilla Firefox.
     * }
     *
     * var profile = $.client.profile();
     * if ( profile.layout == 'gecko' && profile.platform == 'linux' ) {
     *     // This will only run in Gecko browsers on Linux.
     * }
     * ```
     *
     * Recognised browser names:
     *
     * - `android` (legacy Android browser, prior to Chrome Mobile)
     * - `chrome` (includes Chrome Mobile, Microsoft Edge, Opera, and others)
     * - `crios` (Chrome on iOS, which uses Mobile Safari)
     * - `edge` (legacy Microsoft Edge, which uses EdgeHTML)
     * - `firefox` (includes Firefox Mobile, Iceweasel, and others)
     * - `fxios` (Firefox on iOS, which uses Mobile Safari)
     * - `konqueror`
     * - `msie`
     * - `opera` (legacy Opera, which uses Presto)
     * - `rekonq`
     * - `safari` (including Mobile Safari)
     * - `silk`
     *
     * Recognised layout engines:
     *
     * - `edge` (EdgeHTML 12-18, as used by legacy Microsoft Edge)
     * - `gecko`
     * - `khtml`
     * - `presto`
     * - `trident`
     * - `webkit`
     *
     * Note that Chrome and Chromium-based browsers like Opera have their layout
     * engine identified as `webkit`.
     *
     * Recognised platforms:
     *
     * - `ipad`
     * - `iphone`
     * - `linux`
     * - `mac`
     * - `solaris` (untested)
     * - `win`
     *
     * @param {ClientNavigator} [nav] An object with a 'userAgent' and 'platform' property.
     *  Defaults to the global `navigator` object.
     * @returns {ClientProfile} The client object
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/jQuery.client-method-profile
     */
    profile(nav?: ClientNavigator): ClientProfile;

    /**
     * Checks the current browser against a support map object.
     *
     * Version numbers passed as numeric values will be compared like numbers (1.2 > 1.11).
     * Version numbers passed as string values will be compared using a simple component-wise
     * algorithm, similar to PHP's version_compare ('1.2' < '1.11').
     *
     * A browser map is in the following format:
     *
     * ```js
     * {
     *     // Multiple rules with configurable operators
     *     'msie': [['>=', 7], ['!=', 9]],
     *     // Match no versions
     *     'iphone': false,
     *     // Match any version
     *     'android': null
     * }
     * ```
     *
     * It can optionally be split into ltr/rtl sections:
     *
     * ```js
     * {
     *     'ltr': {
     *         'android': null,
     *         'iphone': false
     *     },
     *     'rtl': {
     *         'android': false,
     *         // rules are not inherited from ltr
     *         'iphone': false
     *     }
     * }
     * ```
     *
     * @param {Object} map Browser support map
     * @param {ClientProfile} [profile] A client-profile object
     * @param {boolean} [exactMatchOnly=false] Only return true if the browser is matched,
     *  otherwise returns true if the browser is not found.
     * @returns {boolean} The current browser is in the support map
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/jQuery.client-method-test
     */
    test(
        map: ClientSupportMap | { ltr: ClientSupportMap; rtl: ClientSupportMap },
        profile?: ClientProfile,
        exactMatchOnly?: boolean
    ): boolean;
}

export interface ClientNavigator {
    userAgent: string;
    platform: string;
}

type ClientProfileName =
    | "android"
    | "chrome"
    | "crios"
    | "edge"
    | "firefox"
    | "fxios"
    | "konqueror"
    | "msie"
    | "opera"
    | "rekong"
    | "safari"
    | "silk";

type ClientSupportMap = Partial<Record<ClientProfileName, false | null | ClientSupportCondition[]>>;
type ClientSupportCondition = [
    "==" | "===" | "!=" | "!==" | "<" | "<=" | ">" | ">=",
    string | number
];

interface ClientProfile {
    name: ClientProfileName;
    layout: "edge" | "gecko" | "khtml" | "presto" | "trident" | "webkit";
    layoutVersion: number;
    platform: "ipad" | "iphone" | "linux" | "mac" | "solaris" | "win";
    version: string;
    versionBase: string;
    versionNumber: number;
}

export {};
