type title = string | mw.Title;

declare global {
    namespace mw {
        /**
         * Parse titles into an object structure. Note that when using the constructor directly,
         * passing invalid titles will result in an exception. Use newFromText to use the logic
         * directly and get null for invalid titles which is easier to work with.
         *
         * Note that in the constructor and newFromText method, namespace is the default namespace
         * only, and can be overridden by a namespace prefix in title. If you do not want this
         * behavior, use makeTitle.
         *
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title
         */
        class Title {
            /**
             * @param title Title of the page. If no second argument given, this will be searched for a namespace
             * @param namespace If given, will used as default namespace for the given title. Defaults to `NS_MAIN`.
             * @throws Error When the title is invalid.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Title-method-constructor
             */
            constructor(title: string, namespace?: number);

            title: string;
            namespace: number;

            static newFromText(title: string, namespace?: number): mw.Title | null;

            static makeTitle(title: string, namespace?: number): mw.Title | null;

            static newFromUserInput(title: string, namespace?: number, options?: any): mw.Title;

            static newFromFileName(uncleanName: string): mw.Title;

            static newFromImg(img: HTMLElement | JQuery): mw.Title;

            static isTalkNamespace(namespaceId: number): boolean;

            static wantSignatureNamespace(namespaceId: number): boolean;

            static exists(title: title): boolean | null;

            static exist: {
                pages: { [title: string]: boolean };
                set: (titles: string | string[], state?: boolean) => boolean;
            };

            static normalizeExtension(extension: string): string;

            static phpCharToUpper(chr: string): string;

            getNamespaceId(): number;

            getNamespacePrefix(): string;

            getName(): string;

            getNameText(): string;

            getExtension(): string | null;

            getDotExtension(): string;

            getMain(): string;

            getMainText(): string;

            getPrefixedDb(): string;

            getPrefixedText(): string;

            getRelativeText(namespace: number): string;

            getFragment(): string | null;

            getUrl(params: any): string;

            isTalkPage(): boolean;

            getTalkPage(): Title | null;

            getSubjectPage(): Title | null;

            canHaveTalkPage(): boolean;

            exists(): boolean | null;

            toString(): string;

            toText(): string;
        }
    }
}

export {};
