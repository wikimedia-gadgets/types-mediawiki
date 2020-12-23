declare global {
	namespace mw {
		namespace util {
			const $content: JQuery;

			function rawurlencode(str: string): string;

			function escapeIdForAttribute(str: string): string;

			function escapeIdForLink(str: string): string;

			function debounce(delay: number, callback: ((...args: any[]) => any)): (...args: any[]) => void;

			function wikiUrlencode(str: string): string;

			function getUrl(pageName: string, params?: { [param: string]: string }): string;

			function wikiScript(str: string): string;

			function addCSS(text: string): any;

			function getParamValue(param: string, url?: string): string;

			function hidePortlet(portletId: string): void;

			function isPortletVisible(portletId: string): boolean;

			function showPortlet(portletId: string): void;

			function addPortletLink(portletId: string, href: string, text: string, id?: string,
									tooltip?: string, accesskey?: string, nextnode?: string): HTMLLIElement;

			function validateEmail(mailtxt: string): boolean;

			function isIPv4Address(address: string, allowBlock?: boolean): boolean;

			function isIPv6Address(address: string, allowBlock?: boolean): boolean;

			function isIPAddress(address: string, allowBlock?: boolean): boolean;

			function parseImageUrl(url: string): {
				name: string;
				width: number | null;
				resizeUrl: (w: any) => string;
			} | null;

			function escapeRegExp(str: string): string;
		}
	}
}

export {}
