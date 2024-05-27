import { ClientNavigator } from "./client";

declare global {
    interface JQuery {
        updateTooltipAccessKeys: TooltipAccessKeys<this>;
    }
}

type KeyModifier = "alt" | "alt-shift" | "ctrl" | "ctrl-option";

interface TooltipAccessKeys<This = JQuery> {
    /**
     * Update the titles for all elements in a jQuery selection.
     * Installed by {@link mediawiki.util} module.
     *
     * @example
     * ```js
     * // Converts tooltip "[z]" to associated browser shortcut key e.g. "[ctrl-option-z]"
     * mw.loader.using( 'mediawiki.util' ).then( () => {
     *     var $a = $('<a href="/wiki/Main_Page" title="Visit the main page [z]" accesskey="z"><span>Main page</span></a>');
     *     $a.updateTooltipAccessKeys();
     * } );
     * ```
     * @returns {JQuery}
     * @see https://doc.wikimedia.org/mediawiki-core/REL1_42/js/jQueryPlugins.html#.updateTooltipAccessKeys
     */
    (): This;

    /**
     * Get the access key label for an element.
     *
     * Will use native accessKeyLabel if available (currently only in Firefox 8+),
     * falls back to #getAccessKeyModifiers.
     *
     * @param {HTMLElement} element Element to get the label for
     * @returns {string} Access key label
     */
    // result may be HTMLElement.accessKeyLabel, the format of which depend very much on the browser.
    getAccessKeyLabel(element: HTMLElement): string;

    /**
     * @param {ClientNavigator} [nav] An object with a 'userAgent' and 'platform' property.
     * @returns {string}
     */
    getAccessKeyPrefix(nav?: ClientNavigator): `${KeyModifier}-`;

    /**
     * Switch test mode on and off.
     *
     * @param {boolean} mode New mode
     */
    setTestMode(mode: boolean): void;
}

export {};
