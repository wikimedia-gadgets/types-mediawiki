import { Navigator } from "./client";

declare global {
    interface JQuery {
        updateTooltipAccessKeys: TooltipAccessKeys<this>;
    }
}

type Modifier = "alt" | "alt-shift" | "ctrl" | "ctrl-option";

interface TooltipAccessKeys<This = JQuery> {
    /**
     * Update the titles for all elements in a jQuery selection.
     *
     * @returns {JQuery}
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
     * @param {Navigator} [nav] An object with a 'userAgent' and 'platform' property.
     * @returns {string}
     */
    getAccessKeyPrefix(nav?: Navigator): `${Modifier}-`;

    /**
     * Switch test mode on and off.
     *
     * @param {boolean} mode New mode
     */
    setTestMode(mode: boolean): void;
}

export {};
