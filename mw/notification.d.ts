declare global {
	namespace mw {
		function notify(message: string | JQuery | HTMLElement | HTMLElement[],
						options?: { tag?: string, type?: string, title?: string }): {
			pause: (() => void)
			resume: (() => void)
			close: (() => void)
		};

		namespace notification {
			function pause(): void

			function resume(): void

			function notify(message: string, options?: typeof notification.defaults): {
				pause: (() => void)
				resume: (() => void)
				close: (() => void)
			};

			let defaults: {
				autoHide: boolean
				autoHideSeconds: 'short' | 'long'
				tag: string | null
				title: string | null
				type: 'info' | 'warn' | 'error' | 'success'
				visibleTimeout: boolean
				id: string
			};
			let autoHideLimit: number;
		}
	}
}

export {}
