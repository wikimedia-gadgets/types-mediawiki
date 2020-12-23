declare global {
	namespace mw {
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
	}
}

export {}
