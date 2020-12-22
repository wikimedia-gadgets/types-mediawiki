
interface Hook {
	add(...handler: ((...args: any[]) => any)[]): Hook
	fire(data: any): Hook
	remove(handler: ((...args: any[]) => any)): Hook
}

declare global {
	namespace mw {
		function hook(event: string): Hook
	}
}

export {}
