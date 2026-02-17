import { ApiResponse } from "./Api";
import { User } from "./user";
// @ts-ignore
import { DefineSetupFnComponent, Ref } from "vue";

/**
 * An instance of a hook, created via {@link mw.hook mw.hook method}.
 *
 * MediaWiki has various interface components that are extended, enhanced
 * or manipulated in some other way by extensions, gadgets and even
 * in core itself.
 *
 * This framework helps streamlining the timing of when these other
 * code paths fire their plugins (instead of using document-ready,
 * which can and should be limited to firing only once).
 *
 * Features like navigating to other wiki pages, previewing an edit
 * and editing itself – without a refresh – can then retrigger these
 * hooks accordingly to ensure everything still works as expected.
 * See {@link Hook}.
 *
 * Example usage:
 *
 * ```js
 * mw.hook( 'wikipage.content' ).add( fn ).remove( fn );
 * mw.hook( 'wikipage.content' ).fire( $content );
 * ```
 *
 * Handlers can be added and fired for arbitrary event names at any time. The same
 * event can be fired multiple times. The last run of an event is memorized
 * (similar to `$(document).ready` and `$.Deferred().done`).
 * This means if an event is fired, and a handler added afterwards, the added
 * function will be fired right away with the last given event data.
 *
 * Like Deferreds and Promises, the {@link mw.hook} object is both detachable and chainable.
 * Thus allowing flexible use and optimal maintainability and authority control.
 * You can pass around the `add` and/or `fire` method to another piece of code
 * without it having to know the event name (or {@link mw.hook} for that matter).
 *
 * ```js
 * var h = mw.hook( 'bar.ready' );
 * new mw.Foo( .. ).fetch( { callback: h.fire } );
 * ```
 *
 * The function signature for hooks can be considered {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Stable_interface_policy/Frontend stable}.
 *
 * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hook.html
 */
interface Hook<T extends any[] = any[]> {
    /**
     * Register a hook handler.
     *
     * @param handlers Function(s) to bind.
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hook.html#.add
     */
    add(...handlers: Array<(...data: T) => any>): this;

    /**
     * Enable a deprecation warning, logged after registering a hook handler.
     *
     * NOTE: This must be called before calling {@link fire()}, as otherwise some
     * hook handlers may be registered and fired without being reported.
     *
     * @example
     * ```js
     * mw.hook( 'myhook' ).deprecate().fire( data );
     * ```
     * @example
     * ```js
     * mw.hook( 'myhook' )
     *     .deprecate( 'Use the "someother" hook instead.' )
     *     .fire( data );
     * ```
     * @param msg Optional extra text to add to the deprecation warning
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hook.html#.deprecate
     */
    deprecate(msg: string): this;

    /**
     * Call hook handlers with data.
     *
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hook.html#.fire
     */
    fire(...data: T): this;

    /**
     * Unregister a hook handler.
     *
     * @param handlers Function(s) to unbind.
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hook.html#.remove
     */
    remove(...handlers: Array<(...data: T) => any>): this;
}

interface EditRecovery {
    /**
     * Handle an edit form field changing.
     */
    fieldChangeHandler(): void;
}

interface PostEditData {
    /**
     * Message that listeners should use when displaying notifications.
     * String for plain text, use array or jQuery object to pass actual nodes.
     */
    message?: string | JQuery | HTMLElement[];
    /**
     * Whether a temporary user account was created.
     *
     * @since 1.39
     */
    tempUserCreated?: boolean;
    /**
     * User that made the edit.
     */
    user?: string | User;
}

interface SearchIndex {
    [k: string]: SearchIndexEntry[];
}

interface SearchIndexEntry {
    $field: JQuery;
    $highlight: JQuery;
    $tabPanel: JQuery;
    $wrapper: JQuery;
}

interface PortletLinkInformation {
    /**
     * ID of the list item.
     */
    id: string | undefined;
}

interface TOCSectionMetadata {
    /**
     * "True" value of the ID attribute.
     */
    anchor: string;
    /**
     * Codepoint offset where the section shows up in wikitext; this is null
     * if this section comes from a template, if it comes from a literal
     * HTML <h_> tag, or otherwise doesn't correspond to a "preprocessor
     * section".
     */
    byteoffset: number | null;
    /**
     * Arbitrary data attached to this section by extensions.
     */
    extensionData?: {};
    /**
     * The title of the page that generated this heading.
     * For template-generated sections, this will be the template title.
     * This string is in "prefixed DB key" format.
     */
    fromtitle: string | false;
    /**
     * Section id (integer, assigned in depth first traversal order).
     * Template generated sections get a `T-` prefix.
     */
    index: string;
    /**
     * The heading tag level.
     */
    level: string;
    /**
     * HTML heading of the section.
     */
    line: string;
    /**
     * URL-escaped value of the anchor, for use in constructing a URL fragment link.
     */
    linkAnchor: string;
    /**
     * TOC number string (3.1.3, 4.5.2, etc.).
     */
    number: string;
    /**
     * One-indexed TOC level and the nesting level.
     */
    toclevel: number;
}

declare global {
    namespace mw {
        /**
         * Create an instance of {@link Hook}.
         *
         * @since 1.29
         * @since 1.42 - HTTP method and AJAX options are passed.
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook(
            name: "apisandbox.formatRequest"
        ): Hook<
            [
                items: OO.ui.MenuOptionWidget[],
                displayParams: Record<string, unknown>,
                rawParams: Record<string, unknown>,
                method: "get" | "post",
                ajaxOptions: JQuery.AjaxSettings
            ]
        >;

        /**
         * Create an instance of {@link Hook}, for custom components to be added to the UserLookup component.
         *
         * @since 1.44
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook(
            name: "codex.userlookup"
        ): Hook<[customComponents: Ref<DefineSetupFnComponent<Record<string, any>>[]>]>;

        /**
         * Create an instance of {@link Hook}, fired after EditRecovery has loaded any recovery data, added event handlers, etc.
         *
         * @since 1.41
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hooks.html#~event:'editRecovery.loadEnd'
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook(name: "editRecovery.loadEnd"): Hook<[editRecovery: EditRecovery]>;

        /**
         * Create an instance of {@link Hook}, fired on page load to enhance any HTML forms on the page.
         *
         * @since 1.25
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hooks.html#~event:'htmlform.enhance'
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook(name: "htmlform.enhance"): Hook<[$root: JQuery]>;

        /**
         * Create an instance of {@link Hook}, fired after an edit was successfully saved.
         *
         * Does not fire for null edits.
         *
         * Code that fires the postEdit hook should first set `wgRevisionId` and `wgCurRevisionId` to the revision associated with the edit that triggered the postEdit hook, then fire the postEdit hook.
         *
         * @example
         * ```js
         * mw.config.set( {
         *     wgCurRevisionId: data.newrevid,
         *     wgRevisionId: data.newrevid
         * } );
         * // Now fire the hook.
         * mw.hook( 'postEdit' ).fire();
         * ```
         * @since 1.25 - data can be passed.
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hooks.html#~event:'postEdit'
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook(name: "postEdit"): Hook<[data?: PostEditData]>;

        /**
         * Create an instance of {@link Hook}, fired after the listener for #postEdit removes the notification.
         *
         * @deprecated since 1.38, use the `postEdit` hook instead, and an additional pause if required.
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hooks.html#~event:'postEdit.afterRemoval'
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook(name: "postEdit.afterRemoval"): Hook<[]>;

        /**
         * Create an instance of {@link Hook}, fired when highlight feature is enabled.
         *
         * @since 1.29
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hooks.html#~event:'RcFilters.highlight.enable'
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook(name: "RcFilters.highlight.enable"): Hook<[]>;

        /**
         * Create an instance of {@link Hook}, fired when the RCFilters tag multi selector menu is toggled.
         *
         * @since 1.29
         * @since 1.30 - selected item is no longer passed.
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hooks.html#~event:'RcFilters.popup.open'
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook(name: "RcFilters.popup.open"): Hook<[]>;

        /**
         * Create an instance of {@link Hook}.
         *
         * @since 1.41
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook(name: "prefs.search.buildIndex"): Hook<[index: SearchIndex]>;

        /**
         * Create an instance of {@link Hook}, fired when a trusted UI element to perform a logout has been activated.
         *
         * This will end the user session, and either redirect to the given URL on success, or queue an error message via {@link mw.notification}.
         *
         * @since 1.40
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hooks.html#~event:'skin.logout'
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook(name: "skin.logout"): Hook<[href: string]>;

        /**
         * Create an instance of {@link Hook}, fired after a successful (re-)block on Special:Block.
         *
         * @since 1.44
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hooks.html#~event:'SpecialBlock.block'
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook(name: "SpecialBlock.block"): Hook<[data: ApiResponse]>;

        /**
         * Create an instance of {@link Hook}, fired after a successful (re-)block on Special:Block.
         *
         * @since 1.44
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hooks.html#~event:'SpecialBlock.form'
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook(
            name: "SpecialBlock.form"
        ): Hook<[newValue: boolean, targetUser: string, blockId: number | null]>;

        /**
         * Create an instance of {@link Hook}, fired when initialization of the filtering interface for changes list is complete.
         *
         * @since 1.30
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hooks.html#~event:'structuredChangeFilters.ui.initialized'
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook(name: "structuredChangeFilters.ui.initialized"): Hook<[]>;

        /**
         * Create an instance of {@link Hook}.
         *
         * @since 1.45
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook(
            name: "typeaheadSearch.appendUrlParams"
        ): Hook<[appendUrlParams: (key: string, value: string) => void]>;

        /**
         * Create an instance of {@link Hook}, fired when a portlet is successfully created.
         *
         * @example
         * ```js
         * mw.hook( 'util.addPortlet' ).add( ( p ) => {
         *     p.style.border = 'solid 1px black';
         * } );
         * ```
         * @since 1.41
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hooks.html#~event:'util.addPortlet'
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook(
            name: "util.addPortlet"
        ): Hook<[portlet: HTMLElement, selectorHint: string | undefined]>;

        /**
         * Create an instance of {@link Hook}, fired when a portlet link is successfully created.
         *
         * @example
         * ```js
         * mw.hook( 'util.addPortletLink' ).add( ( link ) => {
         *     const span = $( '<span class="icon">' );
         *     link.appendChild( span );
         * } );
         * ```
         * @since 1.35
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hooks.html#~event:'util.addPortletLink'
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook(
            name: "util.addPortletLink"
        ): Hook<[item: HTMLLIElement, information: PortletLinkInformation]>;

        /**
         * Create an instance of {@link Hook}, fired when categories are being added to the DOM.
         *
         * It is encouraged to fire it before the main DOM is changed (when $content is still detached).  However, this order is not defined either way, so you should only rely on $content itself.
         *
         * This includes the ready event on a page load (including post-edit loads) and when content has been previewed with LivePreview.
         *
         * @since 1.27
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hooks.html#~event:'wikipage.categories'
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook(name: "wikipage.categories"): Hook<[$content: JQuery]>;

        /**
         * Create an instance of {@link Hook}, fired after collapsible content has been initialized.
         *
         * This gives an option to modify the collapsible behavior.
         *
         * @since 1.27
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hooks.html#~event:'wikipage.collapsibleContent'
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook(name: "wikipage.collapsibleContent"): Hook<[$collapsible: JQuery]>;

        /**
         * Create an instance of {@link Hook}, fired when wiki content has been added to the DOM.
         *
         * This should only be fired after $content has been attached.
         *
         * This includes the ready event on a page load (including post-edit loads) and when content has been previewed with LivePreview.
         *
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hooks.html#~event:'wikipage.content'
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook(name: "wikipage.content"): Hook<[$content: JQuery]>;

        /**
         * Create an instance of {@link Hook}, fired when a diff is added to a page or dynamically displayed to the user.
         *
         * Similar to the wikipage.content hook, `$diff` may still be detached when the hook is fired.
         *
         * @since 1.27
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hooks.html#~event:'wikipage.diff'
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook(name: "wikipage.diff"): Hook<[$diff: JQuery<HTMLTableElement>]>;

        /**
         * Create an instance of {@link Hook}, fired when the diff type switch is present so others can decide how to manipulate the DOM.
         *
         * @since 1.41
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hooks.html#~event:'wikipage.diff.diffTypeSwitch'
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook(
            name: "wikipage.diff.diffTypeSwitch"
        ): Hook<[inlineToggleSwitch: OO.ui.ToggleSwitchWidget]>;

        /**
         * Create an instance of {@link Hook}.
         *
         * @since 1.41
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hooks.html#~event:'wikipage.diff.wikitextDiffBody'
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook(name: "wikipage.diff.wikitextBodyUpdate"): Hook<[$wikitextDiffBody: JQuery]>;

        /**
         * Create an instance of {@link Hook}, fired when the editform is added to the edit page.
         *
         * Similar to the wikipage.content hook, $editForm can still be detached when this hook is fired.
         *
         * @since 1.26
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hooks.html#~event:'wikipage.editform'
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook(name: "wikipage.editform"): Hook<[$editForm: JQuery]>;

        /**
         * Create an instance of {@link Hook}, fired when a page's
         * {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Page_status_indicators status indicators}
         * are being added to the DOM or updated.
         *
         * @since 1.36
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hooks.html#~event:'wikipage.indicators'
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook(name: "wikipage.indicators"): Hook<[$content: JQuery]>;

        /**
         * Create an instance of {@link Hook}, fired when dynamic changes have been made to the table of contents.
         *
         * @since 1.39
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hooks.html#~event:'wikipage.tableOfContents'
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook(name: "wikipage.tableOfContents"): Hook<[sections: TOCSectionMetadata[]]>;

        /**
         * Create an instance of {@link Hook}, fired when the page watch status has changed.
         *
         * @example
         * ```js
         * mw.hook( 'wikipage.watchlistChange' ).add( ( isWatched, expiry, expirySelected ) => {
         *     // Do things
         * } );
         * ```
         * @since 1.38
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/Hooks.html#~event:'wikipage.watchlistChange'
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook(
            name: "wikipage.watchlistChange"
        ): Hook<[isWatched: boolean, expiry: string, expirySelected: string]>;

        /**
         * Create an instance of {@link Hook}.
         *
         * @example
         * ```js
         * const hook = mw.hook( 'name' );
         * hook.add( () => alert( 'Hook was fired' ) );
         * hook.fire();
         * ```
         * @param name Name of hook.
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/mw.html#.hook
         */
        function hook<T extends any[] = any[]>(name: string): Hook<T>;
    }
}

export {};
