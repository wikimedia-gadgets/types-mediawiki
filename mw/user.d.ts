declare global {
	namespace mw {
		namespace user {
			const options: mw.Map;
			const tokens: mw.Map;

			function generateRandomSessionId(): string

			function getPageviewToken(): string

			function getId(): number

			function getName(): string | null

			function getRegistration(): boolean | null | Date

			function isAnon(): boolean

			function sessionId(): string

			function id(): string

			function getGroups(callback?: ((groups: string[]) => any)): JQuery.Promise<string[]>

			function getRights(callback?: ((rights: string[]) => any)): JQuery.Promise<string[]>
		}
	}
}

export {}
