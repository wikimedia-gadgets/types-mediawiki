declare global {
    namespace mw {
        /**
         * Utility library
         *
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util
         */
        namespace util {
            const $content: JQuery;

            function rawurlencode(str: string): string;

            function escapeIdForAttribute(str: string): string;

            function escapeIdForLink(str: string): string;

            function debounce(
                delay: number,
                callback: (...args: any[]) => any
            ): (...args: any[]) => void;

            /**
             * Encode page titles for use in a URL
             *
             * We want / and : to be included as literal characters in our title URLs
             * as they otherwise fatally break the title.
             *
             * The others are decoded because we can, it's prettier and matches behaviour
             * of `wfUrlencode` in PHP.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-wikiUrlencode
             */
            function wikiUrlencode(str: string): string;

            function getUrl(pageName: string, params?: { [param: string]: string }): string;

            function wikiScript(str: string): string;

            function addCSS(text: string): any;

            /**
             * Grab the URL parameter value for the given parameter.
             * Returns null if not found.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-getParamValue
             */
            function getParamValue(param: string, url?: string): string;

            function hidePortlet(portletId: string): void;

            function isPortletVisible(portletId: string): boolean;

            function showPortlet(portletId: string): void;

            function addPortletLink(
                portletId: string,
                href: string,
                text: string,
                id?: string,
                tooltip?: string,
                accesskey?: string,
                nextnode?: string
            ): HTMLLIElement;

            function validateEmail(mailtxt: string): boolean;

            function isIPv4Address(address: string, allowBlock?: boolean): boolean;

            function isIPv6Address(address: string, allowBlock?: boolean): boolean;

            /**
             * Check whether a string is an IP address
             *
             * @since 1.25
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.util-method-isIPAddress
             */
            function isIPAddress(address: string, allowBlock?: boolean): boolean;

            function parseImageUrl(
                url: string
            ): {
                name: string;
                width: number | null;
                resizeUrl: (w: any) => string;
            } | null;

            function escapeRegExp(str: string): string;
        }
    }
}

export {};
