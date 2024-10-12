declare global {
    /**
     * Schedule a function to run once the page is ready (DOM loaded).
     *
     * @since 1.5.8
     * @param {function():void} fn
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/window.html#.addOnloadHook
     */
    function addOnloadHook(fn: () => void): void;

    /**
     * Import a local JS content page, for use by user scripts and site-wide scripts.
     *
     * Note that if the same title is imported multiple times, it will only
     * be loaded and executed once.
     *
     * @since 1.12.2
     * @param {string} title
     * @returns {HTMLScriptElement|null} Script tag, or null if it was already imported before
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/window.html#.importScript
     */
    function importScript(title: string): HTMLScriptElement | null;

    /**
     * Import a script using an absolute URI.
     *
     * @since 1.12.2
     * @param {string} url
     * @returns {HTMLScriptElement|null} Script tag, or null if it was already imported before
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/window.html#.importScriptURI
     */
    function importScriptURI(url: string): HTMLScriptElement | null;

    /**
     * Import a local CSS content page, for use by user scripts and site-wide scripts.
     *
     * @since 1.12.2
     * @param {string} title
     * @returns {HTMLLinkElement} Link tag
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/window.html#.importStylesheet
     */
    function importStylesheet(title: string): HTMLLinkElement;

    /**
     * Import a stylesheet using an absolute URI.
     *
     * @since 1.12.2
     * @param {string} url
     * @param {string} media
     * @returns {HTMLLinkElement} Link tag
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/window.html#.importStylesheetURI
     */
    function importStylesheetURI(url: string, media: string): HTMLLinkElement;
}

export {};
