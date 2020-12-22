/**
 * Type definitions for mediawiki modules
 *
 * @author Siddharth VP (2020)
 */

import 'jquery';

type title = string | mw.Title
type namespaceId = number

interface ApiOptions {
	parameters?: Record<string, string>
	ajax?: JQuery.AjaxSettings
	useUS?: boolean
}

interface ForeignApiOptions extends ApiOptions {
	anonymous: boolean
}

interface Hook {
	add(...handler: ((...args: any[]) => any)[]): Hook
	fire(data: any): Hook
	remove(handler: ((...args: any[]) => any)): Hook
}

declare namespace mw {

	class Api {
		constructor(options?: ApiOptions)
		abort(): void
		get(parameters: any, ajaxOptions?: JQuery.AjaxSettings): JQuery.Promise<any>
		post(parameters: any, ajaxOptions?: JQuery.AjaxSettings): JQuery.Promise<any>

		preprocessParameters( parameters: any, useUS: boolean ): void

		// index.js
		ajax(parameters: any, ajaxOptions?: JQuery.AjaxSettings): JQuery.Promise<any>
		postWithToken(tokenType: string, params: any, ajaxOptions?: JQuery.AjaxSettings): JQuery.Promise<any>
		getToken(type: string, additionalParams?: any | string): JQuery.Promise<string>
		badToken(type: string): void
		getErrorMessage(data: any): JQuery

		// edit.js
		postWithEditToken(params: any, ajaxOptions?: JQuery.AjaxSettings): JQuery.Promise<any>
		getEditToken(): JQuery.Promise<string>
		create(title: title, params: any, content: string): JQuery.Promise<any>
		edit(title: title, transform: (data: {
			timestamp: string,
			content: string
		}) => any | string): JQuery.Promise<any>
		newSection(title: title, header: string, message: string, additionalParams?: any): JQuery.Promise<any>

		// user.js
		getUserInfo(): JQuery.Promise<{
			groups: string[],
			rights: string[]
		}>
		assertCurrentUser(query: any): JQuery.Promise<{
			assert: 'anon' | 'user'
			assertUser: string
		}>

		// options.js
		saveOption(name: string, value: string): JQuery.Promise<any>
		saveOptions(options: {[optionName: string]: string}): JQuery.Promise<any>

		// watch.js
		watch(pages: title | title[]): JQuery.Promise<{
			watch: {title: string, watched: boolean} | {title: string, watched: boolean}[]
		}>
		unwatch(pages: title | title[]): JQuery.Promise<{
			watch: {title: string, watched: boolean} | {title: string, watched: boolean}[]
		}>

		// parse.js
		parse(content: string | mw.Title, additionalParams?: any): JQuery.Promise<any>

		// messages.js
		getMessages(messages: string[], options?: any): JQuery.Promise<any>
		loadMessages(messages: string[], options?: any): JQuery.Promise<any>
		loadMessagesIfMissing(messages: string[], options?: any): JQuery.Promise<any>

		// category.js
		isCategory(title: title): JQuery.Promise<boolean>
		getCategoriesByPrefix(prefix: string): JQuery.Promise<string[]>
		getCategories(title: title): JQuery.Promise<boolean | mw.Title[]>

		// rollback.js
		rollback(page: title, user: string, params?: any): JQuery.Promise<any>

		// upload.js
		chunkedUpload(file: File, data: any, chunkSize?: number, chunkRetries?: number): JQuery.Promise<any>
		chunkedUploadToStash(file, data?, chunkSize?, chunkRetries?): JQuery.Promise<any>
		upload(file: File | Blob | HTMLInputElement, data: any): JQuery.Promise<any>
		uploadFromStash(filekey: string, data: any): JQuery.Promise<any>
		uploadToStash(file: File | HTMLInputElement, data?: any): JQuery.Promise<any>

		// login.js
		login(username: string, password: string): JQuery.Promise<any>

	}

	const config: mw.Map

	class ForeignApi extends Api {
		constructor(url: string | mw.Uri, options: ForeignApiOptions)
		getOrigin(): string | void
	}

	function hook(event: string): Hook

	namespace html {
		function escape(s: string): string
		function element(name: string, attrs?: any, contents?: string): string
	}

	namespace language {
		function bcp47(languageTag: string): string
		function convertGrammar(word: string, form: string): string
		function convertNumber(num: number, integer?: boolean): number | string
		function convertPlural(count: number, forms: string[], explicitPluralForms?: any): string
		function flipTransform(...Transformation: any[]): any
		function gender(gender: string, forms: string[]): string
		function getData(langCode: string, dataKey: string): any
		function getDigitTransformTable(): any
		function getFallbackLanguageChain(): string[]
		function getFallbackLanguages(): string[]
		function getSeparatorTransformTable(): any
		function listToText(list: string[]): string
		function setData(langCode: string, dataKey: string, value?): void
	}

	namespace loader {
		function addStyleTag(text: string, nextNode?: Node): HTMLElement
		function getModuleNames(): string[]
		function getScript(url: string): JQuery.Promise<any>
		function getState(module: string): string | null;
		function load(modules: string | string[], type?: string): void;
		function register(modules: string | string[], version?: string | number, dependencies?: string[],
						  group?: string, source?: string, skip?: string): void
		function state(states: any): void
		function using(dependencies: string[] | string, ready?: (() => any), error?: (() => any)):
			JQuery.Promise<any>;
	}

	class log {
		static deprecate(obj: any, key: string, val: any, msg?: string, logName?: string): void
		static error(...msg: any[]): void
		static warn(...msg: string[]): void
	}

	class Map {
		get(selection: string | string[], fallback?: any): any
		set(selection: string | Record<string, any>, value?: any): boolean
		exists(selection: string): boolean
	}

	function message(key: string, ...parameters: string[]): mw.Message

	class Message {
		constructor(map: mw.Map, key: string, parameters?: string[])
		escaped(): string
		exists(): boolean
		params(parameters: string[]): mw.Message
		parse(): string
		parseDom(): JQuery
		parser(): string
		plain(): string
		text(): string
		toString(): string
	}

	function msg(key: string, ...parameters: string[]): string;

	function notify(message: string | JQuery | HTMLElement | HTMLElement[],
					options?: { tag?: string, type?: string, title?: string }): {
		pause: (() => void)
		resume: (() => void)
		close: (() => void)
	};

	namespace notification {
		function pause()
		function resume()
		function notify()
		let defaults: {
			autoHide: boolean
			autoHideSeconds: 'short' | 'long'
			tag: string | null
			title: string | null
			type: 'info' | 'warn' | 'error' | 'success'
			visibleTimeout: boolean
			id: string
		}
		let autoHideLimit: number
	}

	namespace storage {
		function get(key: string): string | null | boolean
		function getObject(key: string): any
		function remove(key: string): boolean
		function set(key: string, value: string): boolean
		function setObject(key: string, value: any): boolean
	}

	class Title {
		constructor(title: string, namespace?: namespaceId)
		static newFromText(title: string, namespace?: namespaceId): mw.Title | null
		static makeTitle(title: string, namespace?: namespaceId): mw.Title | null
		static newFromUserInput(title: string, namespace?: namespaceId, options?: any): mw.Title
		static newFromFileName(uncleanName: string): mw.Title
		static newFromImg(img: HTMLElement | JQuery): mw.Title
		static isTalkNamespace(namespaceId: namespaceId): boolean
		static wantSignatureNamespace(namespaceId: namespaceId): boolean
		static exists(title: title): boolean | null
		static exist: {
			pages: {[title: string]: boolean},
			set: (titles: string | string[], state?: boolean) => boolean
		}
		static normalizeExtension(extension: string): string
		static phpCharToUpper(chr: string): string

		getNamespaceId(): namespaceId
		getNamespacePrefix(): string
		getName(): string
		getNameText(): string
		getExtension(): string | null
		getDotExtension(): string
		getMain(): string
		getMainText(): string
		getPrefixedDb(): string
		getPrefixedText(): string
		getRelativeText(namespace: namespaceId): string
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

	class Uri {
		fragment: string | undefined
		host: string
		password: string | undefined
		path: string
		port: string | undefined
		protocol: string
		query: any
		user: string | undefined
		constructor(uri: string | mw.Uri | any, options?: {
			strictMode?: boolean
			overrideKeys?: boolean
			arrayParams?: boolean
		})
		clone(): mw.Uri
		extend(parameters: any): mw.Uri
		getAuthority(): string
		getHostPort(): string
		getQueryString(): string
		getRelativePath(): string
		getUserInfo(): string
		toString(): string
		static decode(s: string): string
		static encode(s: string): string
	}

	namespace user {
		const options: mw.Map
		const tokens: mw.Map
		function generateRandomSessionId(): string
		function getPageviewToken(): string
		function getId(): number
		function getName(): string | null
		function getRegistration(): boolean | null | Date
		function isAnon(): boolean
		function sessionId(): string
		function id(): string
		function getGroups(callback?: Function): JQuery.Promise<string[]>
		function getRights(callback?: Function): JQuery.Promise<string[]>
	}

	namespace util {
		const $content: JQuery;
		function rawurlencode(str: string): string;
		function escapeIdForAttribute(str: string): string;
		function escapeIdForLink(str: string): string;
		function debounce(delay: number, callback: Function): (...args: any[]) => void;
		function wikiUrlencode(str: string): string;
		function getUrl(pageName: string, params?: {[param: string]: string}): string;
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

	// types for mw.widgets are out of scope!
	const widgets: any
}

// XXX: split into multiple files?

declare global {
	interface JQuery {
		// one overload for each command
		textSelection(command: 'getContents'): string
		textSelection(command: 'setContents'): JQuery
		textSelection(command: 'getSelection'): string
		textSelection(command: 'replaceSelection'): JQuery
		textSelection(command: 'encapsulateSelection', commandOptions: {
			pre?: string
			peri?: string
			post?: string
			ownline?: boolean
			replace?: boolean
			selectPeri?: boolean
			splitlines?: boolean
			selectionStart?: number
			selectionEnd?: number
		}): JQuery
		textSelection(command: 'getCaretPosition', commandOptions?: {
			startAndEnd?: false
		}): number
		textSelection(command: 'getCaretPosition', commandOptions: {
			startAndEnd: true
		}): [number, number]
		textSelection(command: 'setSelection', commandOptions: {
			start?: number
			end?: number
		}): JQuery
		textSelection(command: 'scrollToCaretPosition', commandOptions: {
			force?: boolean
		}): JQuery
	}
}
