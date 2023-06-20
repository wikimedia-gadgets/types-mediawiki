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
     * Determine the correct section indicated by the hash.
     * This function is called onload and onhashchange.
     *
     * @param {Function} setSection callback for opening the section
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/global-method-detectHash
     */
    function detectHash(setSection: (...args: any[]) => any): void;

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

    /**
     * Make sure the accessibility tip is focussable so that keyboard users take notice,
     * but hide it by default to reduce visual clutter.
     * Make sure it becomes visible when focused.
     *
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/global-method-insertHints
     */
    function insertHints(): void;

    /**
     * Determine if there is a valid hash or default section.
     *
     * @param {Function} setSection callback for opening the section
     * @param {string} defaultSectionName The name of a section to load by default
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/global-method-onHashChange
     */
    function onHashChange(setSection: (...args: any[]) => any, defaultSectionName: string): void;

    /**
     * Trigger onHashChange onload to select the proper tab on startup.
     *
     * @param {Function} setSection callback for opening the section
     * @param {string} defaultSection The name of a section to load by default
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/global-method-onLoad
     */
    function onLoad(setSection: (...args: any[]) => any, defaultSectionName: string): void;

    /**
     * Restore the active tab after saving the preferences
     *
     * @param {Function} setSection callback for opening the section
     * @param {Function} onSubmit callback for saving the active section name
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/global-method-restorePrevSection
     */
    function restorePrevSection(
        setSection: (...args: any[]) => any,
        onSubmit: (...args: any[]) => any
    ): void;

    /**
     * Call layout-specific function for jumping to the correct section and manage hash state.
     *
     * @param {Function} setSection callback for opening the section
     * @param {string} sectionName The name of a section
     * @param {string} [fieldset] A fieldset containing a subsection
     * @param {boolean} [noHash] A hash will be set according to the current
     *  open section. Use this flag to suppress this.
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/global-method-switchPrefSection
     */
    function switchPrefSection(
        setSection: (...args: any[]) => any,
        sectionName: string,
        fieldset?: string,
        noHash?: boolean
    ): void;
}

export {};
