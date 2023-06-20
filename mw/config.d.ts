declare global {
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
         * @see https://www.mediawiki.org/wiki/Manual:Interface/JavaScript
         */
        const config: mw.Map<{
            debug: boolean | 0 | 1 | 2;
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
            wgAction: string;
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
            wgRedirectedFrom: string;
            wgRelevantPageName: string;
            wgRelevantUserName: string | undefined;
            wgRelevantPageIsProbablyEditable: boolean;
            wgRestrictionEdit: string[] | undefined;
            wgRestrictionMove: string[];
            wgRevisionId: number;
            wgSearchType: string | undefined;
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
            wgDiffOldId: number;
            wgDiffNewId: number;
            wgWikibaseItemId: string;
            [key: string]: unknown; // more config keys can be added by extensions
        }>;
    }
}

export {};
