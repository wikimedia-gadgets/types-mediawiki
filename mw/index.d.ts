import "./Api";
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
         * Map of configuration values.
         *
         * Check out [the complete list of configuration values](https://www.mediawiki.org/wiki/Manual:Interface/JavaScript#mw.config)
         * on mediawiki.org.
         *
         * If `$wgLegacyJavaScriptGlobals` is true, this Map will add its values to the
         * global `window` object.
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-property-config
         */
        const config: mw.Map<{
            debug: boolean;
            skin: string;
            stylepath: string;
            wgArticlePath: string;
            wgCaseSensitiveNamespaces: string[];
            wgContentLanguage: string;
            wgContentNamespaces: number[];
            wgDBname: string;
            wgEnableAPI: boolean;
            wgEnableWriteAPI: boolean;
            wgExtensionAssetsPath: string;
            wgFormattedNamespaces: Record<number, string>;
            wgNamespaceIds: Record<string, number>;
            wgScript: string;
            wgScriptPath: string;
            wgServer: string;
            wgSiteName: string;
            wgVariantArticlePath: string | false;
            wgVersion: string;
            wgAction: string;
            wgArticleId: number;
            wgCanonicalNamespace: string;
            wgCanonicalSpecialPageName: string | false;
            wgCategories: string[];
            wgCurRevisionId: number;
            wgIsArticle: boolean;
            wgIsProbablyEditable: boolean;
            wgNamespaceNumber: number;
            wgPageContentLanguage: string;
            wgPageContentModel: string;
            wgPageName: string;
            wgRedirectedFrom: string;
            wgRelevantPageName: string;
            wgRelevantUserName: string;
            wgRelevantPageIsProbablyEditable: boolean;
            wgRestrictionEdit: string[];
            wgRestrictionMove: string[];
            wgRevisionId: number;
            wgSearchType: string;
            wgTitle: string;
            wgUserEditCount: number;
            wgUserGroups: string[];
            wgUserId: number;
            wgUserLanguage: string;
            wgUserName: string;
            wgUserRegistration: number;
            wgIsMainPage: boolean;
            wgUserVariant: string;
            wgPostEdit: string;
            wgDiffOldId: number | false;
            wgDiffNewId: number;
            wgWikibaseItemId: string;
            [key: string]: unknown; // more config keys can be added by extensions
        }>;

        // types for mw.widgets are out of scope!
        const widgets: any;

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
    }
}

export {};
