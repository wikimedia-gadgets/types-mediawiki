import {
	ApiEditPageParams,
	ApiParseParams,
	ApiQueryAllMessagesParams,
	ApiRollbackParams,
	ApiUploadParams
} from "../api_params";

type title = string | mw.Title
type ApiParams = Record<string, string | string[] | boolean | number | number[]>
type ApiResponse = Record<string, any> // it will always be a JSON object, the rest is uncertain ...

interface ApiOptions {
	parameters?: Record<string, string>
	ajax?: JQuery.AjaxSettings
	useUS?: boolean
}
interface ForeignApiOptions extends ApiOptions {
	anonymous?: boolean
}

declare global {
	namespace mw {
		class Api {
			constructor(options?: ApiOptions)

			abort(): void

			get(parameters: ApiParams, ajaxOptions?: JQuery.AjaxSettings): JQuery.Promise<ApiResponse>

			post(parameters: ApiParams, ajaxOptions?: JQuery.AjaxSettings): JQuery.Promise<ApiResponse>

			preprocessParameters(parameters: ApiParams, useUS: boolean): void

			// index.js
			ajax(parameters: ApiParams, ajaxOptions?: JQuery.AjaxSettings): JQuery.Promise<ApiResponse>

			postWithToken(tokenType: string, params: ApiParams, ajaxOptions?: JQuery.AjaxSettings)
				: JQuery.Promise<ApiResponse>

			getToken(type: string, additionalParams?: ApiParams): JQuery.Promise<string>

			badToken(type: string): void

			getErrorMessage(data: ApiResponse): JQuery

			// edit.js
			postWithEditToken(params: ApiParams, ajaxOptions?: JQuery.AjaxSettings): JQuery.Promise<ApiResponse>

			getEditToken(): JQuery.Promise<string>

			create(title: title, params: ApiEditPageParams, content: string): JQuery.Promise<ApiResponse>

			edit(title: title, transform: (data: {
				timestamp: string,
				content: string
			}) => string | ApiEditPageParams): JQuery.Promise<any>

			newSection(title: title, header: string, message: string, additionalParams?: ApiEditPageParams)
				: JQuery.Promise<ApiResponse>

			// user.js
			getUserInfo(): JQuery.Promise<{
				groups: string[],
				rights: string[]
			}>

			assertCurrentUser(query: ApiParams): JQuery.Promise<{
				assert: 'anon' | 'user'
				assertUser: string
			}>

			// options.js
			saveOption(name: string, value: string): JQuery.Promise<ApiResponse>

			saveOptions(options: { [optionName: string]: string }): JQuery.Promise<ApiResponse>

			// watch.js
			watch(pages: title | title[]): JQuery.Promise<{
				watch: { title: string, watched: boolean } | Array<{ title: string, watched: boolean }>
			}>

			unwatch(pages: title | title[]): JQuery.Promise<{
				watch: { title: string, watched: boolean } | Array<{ title: string, watched: boolean }>
			}>

			// parse.js
			parse(content: string | mw.Title, additionalParams?: ApiParseParams): JQuery.Promise<ApiResponse>

			// messages.js
			getMessages(messages: string[], options?: ApiQueryAllMessagesParams): JQuery.Promise<ApiResponse>

			loadMessages(messages: string[], options?: ApiQueryAllMessagesParams): JQuery.Promise<ApiResponse>

			loadMessagesIfMissing(messages: string[], options?: ApiQueryAllMessagesParams): JQuery.Promise<ApiResponse>

			// category.js
			isCategory(title: title): JQuery.Promise<boolean>

			getCategoriesByPrefix(prefix: string): JQuery.Promise<string[]>

			getCategories(title: title): JQuery.Promise<boolean | mw.Title[]>

			// rollback.js
			rollback(page: title, user: string, params?: ApiRollbackParams): JQuery.Promise<any>

			// upload.js
			chunkedUpload(file: File, data: ApiUploadParams, chunkSize?: number, chunkRetries?: number)
				: JQuery.Promise<ApiResponse>

			chunkedUploadToStash(file: File, data?: ApiUploadParams, chunkSize?: number, chunkRetries?: number)
				: JQuery.Promise<ApiResponse>

			upload(file: File | Blob | HTMLInputElement, data: ApiUploadParams): JQuery.Promise<ApiResponse>

			uploadFromStash(filekey: string, data: ApiUploadParams): JQuery.Promise<ApiResponse>

			uploadToStash(file: File | HTMLInputElement, data?: ApiUploadParams): JQuery.Promise<ApiResponse>

			// login.js
			login(username: string, password: string): JQuery.Promise<ApiResponse>
		}
		class ForeignApi extends mw.Api {
			constructor(url: string | mw.Uri, options?: ForeignApiOptions)

			getOrigin(): string | void
		}
	}
}

export {}
