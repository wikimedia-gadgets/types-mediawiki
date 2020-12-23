type title = string | mw.Title

declare global {
	namespace mw {
		class Title {
			constructor(title: string, namespace?: number)

			static newFromText(title: string, namespace?: number): mw.Title | null

			static makeTitle(title: string, namespace?: number): mw.Title | null

			static newFromUserInput(title: string, namespace?: number, options?: any): mw.Title

			static newFromFileName(uncleanName: string): mw.Title

			static newFromImg(img: HTMLElement | JQuery): mw.Title

			static isTalkNamespace(namespaceId: number): boolean

			static wantSignatureNamespace(namespaceId: number): boolean

			static exists(title: title): boolean | null

			static exist: {
				pages: { [title: string]: boolean },
				set: (titles: string | string[], state?: boolean) => boolean
			};

			static normalizeExtension(extension: string): string

			static phpCharToUpper(chr: string): string

			getNamespaceId(): number

			getNamespacePrefix(): string

			getName(): string

			getNameText(): string

			getExtension(): string | null

			getDotExtension(): string

			getMain(): string

			getMainText(): string

			getPrefixedDb(): string

			getPrefixedText(): string

			getRelativeText(namespace: number): string

			getFragment(): string | null

			getUrl(params: any): string

			isTalkPage(): boolean

			getTalkPage(): Title | null

			getSubjectPage(): Title | null

			canHaveTalkPage(): boolean

			exists(): boolean | null

			toString(): string

			toText(): string
		}
	}
}

export {}
