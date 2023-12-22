declare global {
    /**
     * Global variables and functions.
     *
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/global
     */

    /**
     * Schedule a function to run once the page is ready (DOM loaded).
     *
     * @since 1.5.8
     * @member global
     * @param {Function} fn
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/global-method-addOnloadHook
     */
    function addOnloadHook(fn: (...args: any[]) => any): void;

    /**
     * Import a local JS content page, for use by user scripts and site-wide scripts.
     *
     * Note that if the same title is imported multiple times, it will only
     * be loaded and executed once.
     *
     * @since 1.12.2
     * @member global
     * @param {string} title
     * @return {HTMLScriptElement|null} Script tag, or null if it was already imported before
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/global-method-importScript
     */
    function importScript(title: string): HTMLScriptElement | null;

    /**
     * @since 1.12.2
     * @method importScriptURI
     * @member global
     * @param {string} url
     * @return {HTMLScriptElement|null} Script tag, or null if it was already imported before
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/global-method-importScriptURI
     */
    function importScriptURI(url: string): HTMLScriptElement | null;

    /**
     * Import a local CSS content page, for use by user scripts and site-wide scripts.
     *
     * @since 1.12.2
     * @member global
     * @param {string} title
     * @return {HTMLLinkElement} Link tag
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/global-method-importStylesheet
     */
    function importStylesheet(title: string): HTMLLinkElement | null;

    /**
     * @since 1.12.2
     * @member global
     * @param {string} url
     * @param {string} media
     * @return {HTMLLinkElement} Link tag
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/global-method-importStylesheetURI
     */
    function importStylesheetURI(url: string, media: string): HTMLLinkElement | null;
}

export {};
