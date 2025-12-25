interface RouteEvent {
    oldPath: string;
    path: string;
}

interface Callback {
    (this: OO.Router, name: string): void;
}

interface TeardownEntry {
    path: string;
    callback: Callback;
}

interface TeardownCallback {
    (entry: TeardownEntry, ev: RouteEvent): void;
}

interface EventMap extends OO.RegistryEventMap {
    hashchange: [];
    popstate: [];
    route: [routeEvent: RouteEvent];
}

interface Options {
    /**
     * e.g. '/path/' or '/path/#foo'
     */
    path: string;
    /**
     * Set replaceStateState to use pushState when you want to avoid long history queues.
     */
    useReplaceState?: boolean;
}

declare global {
    namespace OO {
        /**
         * Provide navigation routing and location information.
         *
         * A router responds to hashchange and popstate events.
         *
         * @since 1.28
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/module-mediawiki.router.html
         */
        class Router extends Registry {
            static static: Router.Static;
            static super: RegistryConstructor;
            /** @deprecated Use `super` instead */
            static parent: RegistryConstructor;

            enabled: boolean;
            oldHash: string;

            /**
             * Create an instance of a router that responds to hashchange and popstate events.
             */
            constructor();

            /**
             * Bind a specific callback to a hash-based route.
             *
             * Note that after defining all available routes it is up to the caller
             * to check the existing route via the checkRoute method.
             *
             * @example
             * ```js
             * addRoute( 'alert', function () { alert( 'something' ); } );
             * addRoute( /hi-(.*)/, function ( name ) { alert( 'Hi ' + name ) } );
             * addRoute( /modal/, () => { showModal() }, () => { cleanupModal() } );
             * ```
             * @since 1.45 - teardownCallback parameter can be passed.
             * @param path Path to match, string or regular expression
             * @param callback Callback to be run when hash changes to one that matches.
             * @param teardownCallback Callback to be run when hash changes
             *  from one that matches to one that doesn't.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/module-mediawiki.router.html#addRoute
             */
            addRoute(
                path: string | RegExp,
                callback: Callback,
                teardownCallback?: TeardownCallback
            ): void;

            /**
             * Navigate to the previous route. This is a wrapper for window.history.back.
             *
             * @return {jQuery.Promise} Promise which resolves when the back navigation is complete.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/module-mediawiki.router.html#back
             */
            back(): JQuery.Promise<void>;

            /**
             * Check the current route and run appropriate callback if it matches.
             *
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/module-mediawiki.router.html#checkRoute
             */
            checkRoute(): void;

            /**
             * Get current path (hash).
             *
             * @return Current path.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/module-mediawiki.router.html#getPath
             */
            getPath(): string;

            /**
             * Whether the current browser supports 'hashchange' events.
             *
             * @deprecated No longer needed
             * @return Always true
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/module-mediawiki.router.html#isSupported
             */
            isSupported(): boolean;

            /**
             * Navigate to a specific 'hash fragment' route.
             *
             * @since 1.43 - fromHashchange parameter can be passed.
             * @deprecated Use {@link navigateTo} instead.
             * @param path String with a route (hash without #).
             * @param fromHashchange (Internal) The navigate call originated
             *  form a hashchange event, so don't emit another one.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/module-mediawiki.router.html#navigate
             */
            navigate(path: string, fromHashchange?: boolean): void;

            /**
             * Navigate to a specific route.
             *
             * @param title Title of new page.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/module-mediawiki.router.html#navigateTo
             */
            navigateTo(title: string, options: Options): void;

            /**
             * Handle hashchange events emitted by ourselves.
             *
             * @since 1.43
             * @param event Hash change event, if triggered by native event.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/module-mediawiki.router.html#onRouterHashChange
             */
            onRouterHashChange(event?: HashChangeEvent): void;

            /**
             * @deprecated Use {@link addRoute} instead.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/module-mediawiki.router.html#route
             */
            route(path: string | RegExp, callback: Callback): void;

            // #region EventEmitter overloads
            on<K extends keyof EventMap, A extends ArgTuple = [], C = null>(
                event: K,
                method: EventHandler<C, (this: C, ...args: [...A, ...EventMap[K]]) => void>,
                args?: A,
                context?: C
            ): this;
            on<K extends string, C = null>(
                event: K extends keyof EventMap ? never : K,
                method: EventHandler<C>,
                args?: any[],
                context?: C
            ): this;

            once<K extends keyof EventMap>(
                event: K,
                listener: (this: null, ...args: EventMap[K]) => void
            ): this;
            once<K extends string>(
                event: K extends keyof EventMap ? never : K,
                listener: (this: null, ...args: any[]) => void
            ): this;

            off<K extends keyof EventMap, C = null>(
                event: K,
                method?: EventHandler<C, (this: C, ...args: EventMap[K]) => void>,
                context?: C
            ): this;
            off<K extends string, C = null>(
                event: K extends keyof EventMap ? never : K,
                method?: EventHandler<C>,
                context?: C
            ): this;

            emit<K extends keyof EventMap>(event: K, ...args: EventMap[K]): boolean;
            emit<K extends string>(
                event: K extends keyof EventMap ? never : K,
                ...args: any[]
            ): boolean;

            emitThrow<K extends keyof EventMap>(event: K, ...args: EventMap[K]): boolean;
            emitThrow<K extends string>(
                event: K extends keyof EventMap ? never : K,
                ...args: any[]
            ): boolean;
            connect<T extends Partial<Record<keyof EventMap, any>>, C>(
                context: C,
                methods: EventConnectionMap<T, C, EventMap>
            ): this;

            disconnect<T extends Partial<Record<keyof EventMap, any>>, C>(
                context: C,
                methods?: EventConnectionMap<T, C, EventMap>
            ): this;
            // #endregion
        }

        namespace Router {
            interface Static {
                /**
                 * Determine if current browser supports this router.
                 *
                 * @deprecated Removed since 1.43.
                 * @return The browser is supported
                 */
                isSupported(): boolean;
            }
        }
    }
}

export {};
