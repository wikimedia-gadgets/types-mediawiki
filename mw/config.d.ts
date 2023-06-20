/**
 * @see https://www.mediawiki.org/wiki/Manual:Parameters_to_index.php#Actions
 */
type WgAction =
    | "view"
    | "watch"
    | "unwatch"
    | "delete"
    | "revert"
    | "rollback"
    | "protect"
    | "unprotect"
    | "markpatrolled"
    | "render"
    | "purge"
    | "submit"
    | "edit"
    | "editredlink"
    | "history"
    | "historysubmit"
    | "raw"
    | "ajax"
    | "credits"
    | "info"
    | "revisiondelete";

declare global {
    /**
     * @see https://www.mediawiki.org/wiki/Manual:Interface/JavaScript
     * @see https://github.com/wikimedia/mediawiki/blob/master/includes/ResourceLoader/ResourceLoader.php#L2049
     */
    interface MediaWikiConfigMap {
        // @see https://www.mediawiki.org/wiki/Manual:Interface/JavaScript
        debug: boolean | number;
        skin: string;
        stylepath: string;
        wgArticlePath: string;
        wgCaseSensitiveNamespaces: string[];
        wgContentLanguage: string;
        wgContentNamespaces: number[];
        wgDBname: string;
        wgWikiID: string;
        wgExtensionAssetsPath: string;
        wgFormattedNamespaces: Record<number, string>;
        wgNamespaceIds: Record<string, number>;
        wgScript: string;
        wgScriptPath: string;
        wgServer: string;
        wgSiteName: string;
        wgVariantArticlePath: string | false;
        wgVersion: string;
        wgAction: WgAction;
        wgArticleId: number;
        wgCanonicalNamespace: string;
        wgCanonicalSpecialPageName: string | false;
        wgCategories: string[];
        wgCurRevisionId: number;
        wgIsArticle: boolean;
        wgIsRedirect: boolean;
        wgIsProbablyEditable: boolean;
        wgNamespaceNumber: number;
        wgPageContentLanguage: string;
        wgPageContentModel: string;
        wgPageName: string;
        wgPageParseReport: Record<string, any>;
        wgRedirectedFrom: string | undefined;
        wgRelevantPageName: string;
        wgRelevantUserName: string | undefined;
        wgRelevantPageIsProbablyEditable: boolean;
        wgRestrictionEdit: string[] | undefined;
        wgRestrictionMove: string[];
        wgRevisionId: number;
        wgSearchType: string | undefined;
        wgTitle: string;
        wgUserEditCount: number | null;
        wgUserGroups: string[] | null;
        wgUserId: number | null;
        wgUserLanguage: string;
        wgUserName: string | null;
        wgUserRegistration: number | null;
        wgIsMainPage: true | null;
        wgUserVariant: string | null;
        wgPostEdit: "saved" | "created" | "restored" | null;
        wgDiffOldId: number;
        wgDiffNewId: number;
        wgWikibaseItemId: string | null;
        // @see https://github.com/wikimedia/mediawiki/blob/master/includes/ResourceLoader/ResourceLoader.php#L2049
        wgServerName: string;
        wgCommentCodePointLimit: number;
        wgUrlProtocols: string;
        wgActionPaths: Record<string, string>;
        wgTranslateNumerals: boolean;
        wgExtraSignatureNamespaces: number[];
        wgLegalTitleChars: string;
        wgIllegalFileChars: string;
        // more config keys can be added by extensions. If the MediaWikiConfigMap interface is not extended, it will return unknown.
        [key: string]: unknown;
    }
    namespace mw {
        /**
         * Map of configuration values.
         *
         * Check out [the complete list of configuration values](https://www.mediawiki.org/wiki/Manual:Interface/JavaScript#mw.config)
         * on mediawiki.org.
         *
         * If `$wgLegacyJavaScriptGlobals` is true, this Map will add its values to the
         * global `window` object.
         *
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-property-config
         */
        const config: Map<MediaWikiConfigMap>;
    }
}

export {};
