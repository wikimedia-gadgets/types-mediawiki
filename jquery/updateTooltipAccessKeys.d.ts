import { ClientNavigator } from "./client";

declare global {
    interface JQuery {
        updateTooltipAccessKeys: JQuery.TooltipAccessKeys<this>;
    }

    namespace JQuery {
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
             * @param {ClientNavigator} [nav] An object with a 'userAgent' and 'platform' property.
             * @returns {string}
             */
            getAccessKeyPrefix(nav?: ClientNavigator): `${TooltipAccessKeys.KeyModifier}-`;

            /**
             * Switch test mode on and off.
             *
             * @param {boolean} mode New mode
             */
            setTestMode(mode: boolean): void;
        }

        namespace TooltipAccessKeys {
            type KeyModifier = "alt" | "alt-shift" | "ctrl" | "ctrl-option";
        }
    }
}

export {};
