import './Api';
import './language';
import './util';
import './user';
import './loader';
import './Title';
import './Uri';
import './hook';
import './storage';
import './notification';
import './message';

type title = string | mw.Title

declare global {
	namespace mw {
		const config: mw.Map;


		namespace html {
			function escape(s: string): string

			function element(name: string, attrs?: any, contents?: string): string
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

		// types for mw.widgets are out of scope!
		const widgets: any;
	}
}
