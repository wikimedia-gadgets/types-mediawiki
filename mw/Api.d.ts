import { title } from './index';

interface ApiOptions {
	parameters?: Record<string, string>
	ajax?: JQuery.AjaxSettings
	useUS?: boolean
}
interface ForeignApiOptions extends ApiOptions {
	anonymous: boolean
}

declare global {
	namespace mw {
		class Api {
			constructor(options?: ApiOptions)

			abort(): void

			get(parameters: any, ajaxOptions?: JQuery.AjaxSettings): JQuery.Promise<any>

			post(parameters: any, ajaxOptions?: JQuery.AjaxSettings): JQuery.Promise<any>

			preprocessParameters(parameters: any, useUS: boolean): void

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

			saveOptions(options: { [optionName: string]: string }): JQuery.Promise<any>

			// watch.js
			watch(pages: title | title[]): JQuery.Promise<{
				watch: { title: string, watched: boolean } | { title: string, watched: boolean }[]
			}>

			unwatch(pages: title | title[]): JQuery.Promise<{
				watch: { title: string, watched: boolean } | { title: string, watched: boolean }[]
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

		class ForeignApi extends mw.Api {
			constructor(url: string | mw.Uri, options: ForeignApiOptions)

			getOrigin(): string | void
		}
	}
}
