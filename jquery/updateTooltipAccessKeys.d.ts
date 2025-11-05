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
     *
     * To use this {@link jQuery} plugin, load the `mediawiki.util` module using {@link mw.loader}.
     *
     * @example
     * ```js
     * // Converts tooltip "[z]" to associated browser shortcut key e.g. "[ctrl-option-z]"
     * mw.loader.using( 'mediawiki.util' ).then( () => {
     *     var $a = $('<a href="/wiki/Main_Page" title="Visit the main page [z]" accesskey="z"><span>Main page</span></a>');
     *     $a.updateTooltipAccessKeys();
     * } );
     * ```
     * @see https://doc.wikimedia.org/mediawiki-core/REL1_42/js/jQueryPlugins.html#.updateTooltipAccessKeys
     */
    (): This;

    /**
     * Get the access key label for an element.
     *
     * Will use native accessKeyLabel if available (currently only in Firefox 8+),
     * falls back to #getAccessKeyModifiers.
     *
     * @param element Element to get the label for
     * @returns Access key label
     */
    // result may be HTMLElement.accessKeyLabel, the format of which depend very much on the browser.
    getAccessKeyLabel(element: HTMLElement): string;

    /**
     * @param nav An object with a 'userAgent' and 'platform' property.
     */
    getAccessKeyPrefix(nav?: ClientNavigator): `${KeyModifier}-`;

    /**
     * Switch test mode on and off.
     *
     * @param mode New mode
     */
    setTestMode(mode: boolean): void;
}

export {};
