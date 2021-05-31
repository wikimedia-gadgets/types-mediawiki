import "./Api";
import "./config";
import "./cookie";
import "./ForeignApi";
import "./hook";
import "./html";
import "./language";
import "./loader";
import "./log";
import "./Map";
import "./message";
import "./notification";
import "./storage";
import "./template";
import "./Title";
import "./Uri";
import "./user";
import "./util";

declare global {
    /**
     * Base library for MediaWiki.
     *
     * Exposed globally as `mw`, with `mediaWiki` as alias.
     * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw
     */
    namespace mw {

		/**
		 * Format a string. Replace $1, $2 ... $N with positional arguments.
		 *
		 * Used by Message#parser().
		 *
		 * @since 1.25
		 * @param {string} formatString Format string
		 * @param {...Mixed} parameters Values for $N replacements
		 * @return {string} Formatted string
		 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-method-format
		 */
		function format(formatString: string, ...parameters: unknown[]): string;

		// types for mw.widgets are out of scope!
		const widgets: any;
    }
}

export {};
