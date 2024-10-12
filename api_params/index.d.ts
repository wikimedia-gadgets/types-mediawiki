// AUTOMATICALLY GENERATED (see scripts/api-types-generator.js)

type timestamp = string;
type expiry = string;
type namespace = number;
type limit = number | "max";
type password = string;
type upload = File; // XXX
type OneOrMore<T> = T | T[];

export type ApiAssert = "anon" | "bot" | "user";

export type ApiTokenType =
    | "createaccount"
    | "csrf"
    | "deleteglobalaccount"
    | "login"
    | "patrol"
    | "rollback"
    | "setglobalaccountstatus"
    | "userrights"
    | "watch";

export type ApiLegacyTokenType =
    | "block"
    | "delete"
    | "edit"
    | "email"
    | "import"
    | "move"
    | "options"
    | "protect"
    | "unblock";

export interface ApiParams {
    action?: ApiParamsAction;
    format?: ApiParamsFormat;
    maxlag?: number;
    smaxage?: number;
    maxage?: number;
    assert?: "anon" | "bot" | "user";
    assertuser?: string;
    requestid?: string;
    servedby?: boolean;
    curtimestamp?: boolean;
    responselanginfo?: boolean;
    origin?: string;
    uselang?: string;
    variant?: string;
    errorformat?: "bc" | "html" | "none" | "plaintext" | "raw" | "wikitext";
    errorlang?: string;
    errorsuselocal?: boolean;
    centralauthtoken?: string;
}

type ApiParamsAction = keyof ApiParamsActionMap;

interface ApiParamsActionMap {
    "abusefiltercheckmatch": ApiActionAbuseFilterCheckMatchParams;
    "abusefilterchecksyntax": ApiActionAbuseFilterCheckSyntaxParams;
    "abusefilterevalexpression": ApiActionAbuseFilterEvalExpressionParams;
    "abusefilterunblockautopromote": ApiActionAbuseFilterUnblockAutopromoteParams;
    "abuselogprivatedetails": ApiActionAbuseLogPrivateDetailsParams;
    "acquiretempusername": ApiActionAcquireTempUserNameParams;
    "antispoof": ApiActionAntiSpoofParams;
    "block": ApiActionBlockParams;
    "bouncehandler": ApiActionBounceHandlerParams;
    "categorytree": ApiActionCategoryTreeParams;
    "centralauthtoken": ApiActionCentralAuthTokenParams;
    "centralnoticecdncacheupdatebanner": ApiActionCentralNoticeCdnCacheUpdateBannerParams;
    "centralnoticechoicedata": ApiActionCentralNoticeChoiceDataParams;
    "centralnoticequerycampaign": ApiActionCentralNoticeQueryCampaignParams;
    "changeauthenticationdata": ApiActionChangeAuthenticationDataParams;
    "changecontentmodel": ApiActionChangeContentModelParams;
    "checktoken": ApiActionCheckTokenParams;
    "cirrus-check-sanity": ApiActionCirrusCheckSanityParams;
    "cirrus-config-dump": ApiActionCirrusConfigDumpParams;
    "cirrus-mapping-dump": ApiActionCirrusMappingDumpParams;
    "cirrus-profiles-dump": ApiActionCirrusProfilesDumpParams;
    "cirrus-settings-dump": ApiActionCirrusSettingsDumpParams;
    "clearhasmsg": ApiActionClearHasMsgParams;
    "clientlogin": ApiActionClientLoginParams;
    "collection": ApiActionCollectionParams;
    "communityconfigurationedit": ApiActionCommunityConfigurationEditParams;
    "compare": ApiActionCompareParams;
    "createaccount": ApiActionCreateAccountParams;
    "createlocalaccount": ApiActionCreateLocalAccountParams;
    "cspreport": ApiActionCSPReportParams;
    "cxcheckunreviewed": ApiActionCxcheckunreviewedParams;
    "cxdelete": ApiActionCxdeleteParams;
    "cxpublish": ApiActionCxpublishParams;
    "cxpublishsection": ApiActionCxpublishsectionParams;
    "cxsave": ApiActionCxsaveParams;
    "cxsplit": ApiActionCxsplitParams;
    "cxsuggestionlist": ApiActionCxsuggestionlistParams;
    "cxtoken": ApiActionCxtokenParams;
    "delete": ApiActionDeleteParams;
    "deleteglobalaccount": ApiActionDeleteGlobalAccountParams;
    "discussiontoolscompare": ApiActionDiscussionToolsCompareParams;
    "discussiontoolsedit": ApiActionDiscussionToolsEditParams;
    "discussiontoolsfindcomment": ApiActionDiscussionToolsFindCommentParams;
    "discussiontoolsgetsubscriptions": ApiActionDiscussionToolsGetSubscriptionsParams;
    "discussiontoolspageinfo": ApiActionDiscussionToolsPageInfoParams;
    "discussiontoolspreview": ApiActionDiscussionToolsPreviewParams;
    "discussiontoolssubscribe": ApiActionDiscussionToolsSubscribeParams;
    "discussiontoolsthank": ApiActionDiscussionToolsThankParams;
    "echocreateevent": ApiActionEchoCreateEventParams;
    "echomarkread": ApiActionEchoMarkReadParams;
    "echomarkseen": ApiActionEchoMarkSeenParams;
    "echomute": ApiActionEchoMuteParams;
    "echopushsubscriptions": ApiActionEchoPushSubscriptionsParams;
    "edit": ApiActionEditParams;
    "editcheckreferenceurl": ApiActionEditCheckReferenceUrlParams;
    "editmassmessagelist": ApiActionEditMassMessageListParams;
    "emailuser": ApiActionEmailUserParams;
    "expandtemplates": ApiActionExpandTemplatesParams;
    "fancycaptchareload": ApiActionFancyCaptchaReloadParams;
    "featuredfeed": ApiActionFeaturedFeedParams;
    "feedcontributions": ApiActionFeedContributionsParams;
    "feedrecentchanges": ApiActionFeedRecentChangesParams;
    "feedwatchlist": ApiActionFeedWatchlistParams;
    "filerevert": ApiActionFileRevertParams;
    "flagconfig": ApiActionFlagConfigParams;
    "globalblock": ApiActionGlobalBlockParams;
    "globalpreferenceoverrides": ApiActionGlobalPreferenceOverridesParams;
    "globalpreferences": ApiActionGlobalPreferencesParams;
    "globaluserrights": ApiActionGlobalUserRightsParams;
    "growthinvalidateimagerecommendation": ApiActionGrowthInvalidateImageRecommendationParams;
    "growthinvalidatepersonalizedpraisesuggestion": ApiActionGrowthInvalidatePersonalizedPraiseSuggestionParams;
    "growthmanagementorlist": ApiActionGrowthManageMentorListParams;
    "growthmentordashboardupdatedata": ApiActionGrowthMentorDashboardUpdateDataParams;
    "growthsetmenteestatus": ApiActionGrowthSetMenteeStatusParams;
    "growthsetmentor": ApiActionGrowthSetMentorParams;
    "growthstarmentee": ApiActionGrowthStarMenteeParams;
    "help": ApiActionHelpParams;
    "helppanelquestionposter": ApiActionHelppanelquestionposterParams;
    "homepagequestionstore": ApiActionHomepagequestionstoreParams;
    "imagerotate": ApiActionImagerotateParams;
    "import": ApiActionImportParams;
    "jsonconfig": ApiActionJsonConfigParams;
    "jsondata": ApiActionJsonDataParams;
    "languagesearch": ApiActionLanguageSearchParams;
    "linkaccount": ApiActionLinkAccountParams;
    "login": ApiActionLoginParams;
    "logout": ApiActionLogoutParams;
    "managetags": ApiActionManageTagsParams;
    "massmessage": ApiActionMassMessageParams;
    "mergehistory": ApiActionMergeHistoryParams;
    "move": ApiActionMoveParams;
    "oathvalidate": ApiActionOATHValidateParams;
    "opensearch": ApiActionOpenSearchParams;
    "options": ApiActionOptionsParams;
    "pagetriageaction": ApiActionPageTriageActionParams;
    "pagetriagelist": ApiActionPageTriageListParams;
    "pagetriagestats": ApiActionPageTriageStatsParams;
    "pagetriagetagcopyvio": ApiActionPageTriageTagCopyvioParams;
    "pagetriagetagging": ApiActionPageTriageTaggingParams;
    "paraminfo": ApiActionParamInfoParams;
    "parse": ApiActionParseParams;
    "parser-migration": ApiActionParserMigrationParams;
    "patrol": ApiActionPatrolParams;
    "protect": ApiActionProtectParams;
    "purge": ApiActionPurgeParams;
    "query": ApiActionQueryParams;
    "readinglists": ApiActionReadingListsParams;
    "removeauthenticationdata": ApiActionRemoveAuthenticationDataParams;
    "resetpassword": ApiActionResetPasswordParams;
    "review": ApiActionReviewParams;
    "revisiondelete": ApiActionRevisionDeleteParams;
    "rollback": ApiActionRollbackParams;
    "rsd": ApiActionRsdParams;
    "sanitize-mapdata": ApiActionSanitizeMapDataParams;
    "scribunto-console": ApiActionScribuntoConsoleParams;
    "securepollauth": ApiActionSecurePollAuthParams;
    "setglobalaccountstatus": ApiActionSetGlobalAccountStatusParams;
    "setnotificationtimestamp": ApiActionSetNotificationTimestampParams;
    "setpagelanguage": ApiActionSetPageLanguageParams;
    "shortenurl": ApiActionShortenUrlParams;
    "sitematrix": ApiActionSiteMatrixParams;
    "spamblacklist": ApiActionSpamBlacklistParams;
    "stabilize": ApiActionStabilizeParams;
    "stashedit": ApiActionStashEditParams;
    "streamconfigs": ApiActionStreamConfigSParams;
    "strikevote": ApiActionStrikeVoteParams;
    "sxdelete": ApiActionSxdeleteParams;
    "sxsave": ApiActionSxsaveParams;
    "tag": ApiActionTagParams;
    "templatedata": ApiActionTemplateDataParams;
    "thank": ApiActionThankParams;
    "timedtext": ApiActionTimedTextParams;
    "titleblacklist": ApiActionTitleBlacklistParams;
    "torblock": ApiActionTorBlockParams;
    "transcodereset": ApiActionTranscodeResetParams;
    "ulslocalization": ApiActionULSLocalizationParams;
    "ulssetlang": ApiActionULSSetLangParams;
    "unblock": ApiActionUnblockParams;
    "undelete": ApiActionUndeleteParams;
    "unlinkaccount": ApiActionQueryUnlinkAccountParams;
    "upload": ApiActionUploadParams;
    "userrights": ApiActionUserrightsParams;
    "validatepassword": ApiActionValidatePasswordParams;
    "visualeditor": ApiActionVisualEditorParams;
    "visualeditoredit": ApiActionVisualEditorEditParams;
    "watch": ApiActionWatchParams;
    "webapp-manifest": ApiActionWebappManifestParams;
    "webauthn": ApiActionWebAuthnParams;
    "wikilove": ApiActionWikiLoveParams;
    "wikimediaeventsblockededit": ApiActionWikimediaEventsBlockedEditParams;
}

type ApiParamsFormat = keyof ApiParamsFormatMap;

interface ApiParamsFormatMap {
    json: ApiFormatJsonParams;
    jsonfm: ApiFormatJsonFMParams;
    none: ApiFormatNoneParams;
    php: ApiFormatPhpParams;
    phpfm: ApiFormatPhpFMParams;
    rawfm: ApiFormatRawFMParams;
    xml: ApiFormatXmlParams;
    xmlfm: ApiFormatXmlFMParams;
}

export interface ApiActionAbuseFilterCheckMatchParams extends ApiParams {
    action?: "abusefiltercheckmatch";
    filter: string;
    vars?: string;
    rcid?: number;
    logid?: number;
}

export interface ApiActionAbuseFilterCheckSyntaxParams extends ApiParams {
    action?: "abusefilterchecksyntax";
    filter: string;
}

export interface ApiActionAbuseFilterEvalExpressionParams extends ApiParams {
    action?: "abusefilterevalexpression";
    expression: string;
    prettyprint?: boolean;
}

export interface ApiActionAbuseFilterUnblockAutopromoteParams extends ApiParams {
    action?: "abusefilterunblockautopromote";
    user: string;
    token?: string;
}

export interface ApiActionAbuseLogPrivateDetailsParams extends ApiParams {
    action?: "abuselogprivatedetails";
    logid?: number;
    reason?: string;
    token?: string;
}

export interface ApiActionAcquireTempUserNameParams extends ApiParams {
    action?: "acquiretempusername";
}

export interface ApiActionAntiSpoofParams extends ApiParams {
    action?: "antispoof";
    username: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Block}
 */
export interface ApiActionBlockParams extends ApiParams {
    action?: "block";
    user?: string;
    /**
     * @deprecated
     */
    userid?: number;
    expiry?: string;
    reason?: string;
    anononly?: boolean;
    nocreate?: boolean;
    autoblock?: boolean;
    noemail?: boolean;
    hidename?: boolean;
    allowusertalk?: boolean;
    reblock?: boolean;
    watchuser?: boolean;
    watchlistexpiry?: expiry;
    tags?: string | string[];
    partial?: boolean;
    pagerestrictions?: string | string[];
    namespacerestrictions?: namespace | namespace[];
    actionrestrictions?: OneOrMore<"create" | "move" | "thanks" | "upload">;
    token?: string;
}

/**
 * @private
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:BounceHandler#API}
 */
export interface ApiActionBounceHandlerParams extends ApiParams {
    action?: "bouncehandler";
    email: string;
}

/**
 * @private
 */
export interface ApiActionCategoryTreeParams extends ApiParams {
    action?: "categorytree";
    category: string;
    options?: string;
}

export interface ApiActionCentralAuthTokenParams extends ApiParams {
    action?: "centralauthtoken";
}

export interface ApiActionCentralNoticeCdnCacheUpdateBannerParams extends ApiParams {
    action?: "centralnoticecdncacheupdatebanner";
    banner: string;
    language: string;
    token?: string;
}

export interface ApiActionCentralNoticeChoiceDataParams extends ApiParams {
    action?: "centralnoticechoicedata";
    project: string;
    language: string;
}

export interface ApiActionCentralNoticeQueryCampaignParams extends ApiParams {
    action?: "centralnoticequerycampaign";
    campaign?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Manage_authentication_data}
 */
export interface ApiActionChangeAuthenticationDataParams extends ApiParams {
    action?: "changeauthenticationdata";
    changeauthrequest: string;
    changeauthtoken?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Help:ChangeContentModel}
 */
export interface ApiActionChangeContentModelParams extends ApiParams {
    action?: "changecontentmodel";
    title?: string;
    pageid?: number;
    summary?: string;
    tags?: string | string[];
    model:
        | "GadgetDefinition"
        | "JsonSchema"
        | "MassMessageListContent"
        | "Scribunto"
        | "SecurePoll"
        | "css"
        | "javascript"
        | "json"
        | "sanitized-css"
        | "text"
        | "wikitext";
    bot?: boolean;
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Checktoken}
 */
export interface ApiActionCheckTokenParams extends ApiParams {
    action?: "checktoken";
    type:
        | "createaccount"
        | "csrf"
        | "deleteglobalaccount"
        | "login"
        | "patrol"
        | "rollback"
        | "setglobalaccountstatus"
        | "userrights"
        | "watch";
    token?: string;
    maxtokenage?: number;
}

/**
 * @private
 */
export interface ApiActionCirrusCheckSanityParams extends ApiParams {
    action?: "cirrus-check-sanity";
    cluster?: "cloudelastic" | "codfw" | "eqiad";
    from: number;
    limit?: limit;
    sequenceid?: number;
    rerenderfrequency?: number;
}

export interface ApiActionCirrusConfigDumpParams extends ApiParams {
    action?: "cirrus-config-dump";
    prop?: OneOrMore<"globals" | "namespacemap" | "profiles" | "replicagroup" | "usertesting">;
}

export interface ApiActionCirrusMappingDumpParams extends ApiParams {
    action?: "cirrus-mapping-dump";
}

export interface ApiActionCirrusProfilesDumpParams extends ApiParams {
    action?: "cirrus-profiles-dump";
    verbose?: boolean;
}

export interface ApiActionCirrusSettingsDumpParams extends ApiParams {
    action?: "cirrus-settings-dump";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:ClearHasMsg}
 */
export interface ApiActionClearHasMsgParams extends ApiParams {
    action?: "clearhasmsg";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Login}
 */
export interface ApiActionClientLoginParams extends ApiParams {
    action?: "clientlogin";
    loginrequests?: string | string[];
    loginmessageformat?: "html" | "none" | "raw" | "wikitext";
    loginmergerequestfields?: boolean;
    loginpreservestate?: boolean;
    loginreturnurl?: string;
    logincontinue?: boolean;
    logintoken?: string;
}

/**
 * @private
 */
export interface ApiActionCollectionParams extends ApiParams {
    action?: "collection";
    submodule: ApiActionCollectionParamsSubmodule;
}

type ApiActionCollectionParamsSubmodule = keyof ApiActionCollectionParamsSubmoduleMap;

interface ApiActionCollectionParamsSubmoduleMap {
    addarticle: ApiActionCollectionSubmoduleAddArticleParams;
    addcategory: ApiActionCollectionSubmoduleAddCategoryParams;
    addchapter: ApiActionCollectionSubmoduleAddChapterParams;
    clearcollection: ApiActionCollectionSubmoduleClearCollectionParams;
    getbookcreatorboxcontent: ApiActionCollectionSubmoduleGetBookCreatorBoxContentParams;
    getcollection: ApiActionCollectionSubmoduleGetCollectionParams;
    getpopupdata: ApiActionCollectionSubmoduleGetPopupDataParams;
    postcollection: ApiActionCollectionSubmodulePostCollectionParams;
    removearticle: ApiActionCollectionSubmoduleRemoveArticleParams;
    removeitem: ApiActionCollectionSubmoduleRemoveItemParams;
    renamechapter: ApiActionCollectionSubmoduleRenameChapterParams;
    setsorting: ApiActionCollectionSubmoduleSetSortingParams;
    settitles: ApiActionCollectionSubmoduleSetTitlesParams;
    sortitems: ApiActionCollectionSubmoduleSortItemsParams;
    suggestarticleaction: ApiActionCollectionSubmoduleSuggestArticleActionParams;
    suggestundoarticleaction: ApiActionCollectionSubmoduleSuggestUndoArticleActionParams;
}

export interface ApiActionCollectionSubmoduleAddArticleParams extends ApiActionCollectionParams {
    submodule: "addarticle";
    namespace: number;
    title: string;
    oldid?: number;
}

export interface ApiActionCollectionSubmoduleAddCategoryParams extends ApiActionCollectionParams {
    submodule: "addcategory";
    title?: string;
}

export interface ApiActionCollectionSubmoduleAddChapterParams extends ApiActionCollectionParams {
    submodule: "addchapter";
    chaptername?: string;
}

export interface ApiActionCollectionSubmoduleClearCollectionParams
    extends ApiActionCollectionParams {
    submodule: "clearcollection";
}

export interface ApiActionCollectionSubmoduleGetBookCreatorBoxContentParams
    extends ApiActionCollectionParams {
    submodule: "getbookcreatorboxcontent";
    hint?: string;
    oldid?: number;
    pagename?: string;
}

export interface ApiActionCollectionSubmoduleGetCollectionParams extends ApiActionCollectionParams {
    submodule: "getcollection";
}

export interface ApiActionCollectionSubmoduleGetPopupDataParams extends ApiActionCollectionParams {
    submodule: "getpopupdata";
    title: string;
}

export interface ApiActionCollectionSubmodulePostCollectionParams
    extends ApiActionCollectionParams {
    submodule: "postcollection";
    collection?: string;
}

export interface ApiActionCollectionSubmoduleRemoveArticleParams extends ApiActionCollectionParams {
    submodule: "removearticle";
    namespace: number;
    title: string;
    oldid?: number;
}

export interface ApiActionCollectionSubmoduleRemoveItemParams extends ApiActionCollectionParams {
    submodule: "removeitem";
    index?: number;
}

export interface ApiActionCollectionSubmoduleRenameChapterParams extends ApiActionCollectionParams {
    submodule: "renamechapter";
    index: number;
    chaptername: string;
}

export interface ApiActionCollectionSubmoduleSetSortingParams extends ApiActionCollectionParams {
    submodule: "setsorting";
    items: number | number[];
}

export interface ApiActionCollectionSubmoduleSetTitlesParams extends ApiActionCollectionParams {
    submodule: "settitles";
    title: string;
    subtitle?: string;
    settings?: string;
}

export interface ApiActionCollectionSubmoduleSortItemsParams extends ApiActionCollectionParams {
    submodule: "sortitems";
}

export interface ApiActionCollectionSubmoduleSuggestArticleActionParams
    extends ApiActionCollectionParams {
    submodule: "suggestarticleaction";
    suggestaction: "add" | "ban" | "remove";
    title: string;
}

export interface ApiActionCollectionSubmoduleSuggestUndoArticleActionParams
    extends ApiActionCollectionParams {
    submodule: "suggestundoarticleaction";
    lastaction: "add" | "ban" | "remove";
    title: string;
}

export interface ApiActionCommunityConfigurationEditParams extends ApiParams {
    action?: "communityconfigurationedit";
    provider:
        | "GrowthHomepage"
        | "GrowthMentorList"
        | "GrowthSuggestedEdits"
        | "HelpPanel"
        | "Mentorship";
    content: string;
    summary?: string;
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Compare}
 */
export interface ApiActionCompareParams extends ApiParams {
    action?: "compare";
    fromtitle?: string;
    fromid?: number;
    fromrev?: number;
    fromslots?: string | string[];
    [k: `fromtext-${string}`]: string;
    [k: `fromsection-${string}`]: string;
    [k: `fromcontentformat-${string}`]:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    [k: `fromcontentmodel-${string}`]:
        | "GadgetDefinition"
        | "JsonSchema"
        | "MassMessageListContent"
        | "Scribunto"
        | "SecurePoll"
        | "css"
        | "javascript"
        | "json"
        | "sanitized-css"
        | "text"
        | "unknown"
        | "wikitext";
    frompst?: boolean;
    /**
     * @deprecated
     */
    fromtext?: string;
    /**
     * @deprecated
     */
    fromcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    /**
     * @deprecated
     */
    fromcontentmodel?:
        | "GadgetDefinition"
        | "JsonSchema"
        | "MassMessageListContent"
        | "Scribunto"
        | "SecurePoll"
        | "css"
        | "javascript"
        | "json"
        | "sanitized-css"
        | "text"
        | "unknown"
        | "wikitext";
    /**
     * @deprecated
     */
    fromsection?: string;
    totitle?: string;
    toid?: number;
    torev?: number;
    torelative?: "cur" | "next" | "prev";
    toslots?: string | string[];
    [k: `totext-${string}`]: string;
    [k: `tosection-${string}`]: string;
    [k: `tocontentformat-${string}`]:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    [k: `tocontentmodel-${string}`]:
        | "GadgetDefinition"
        | "JsonSchema"
        | "MassMessageListContent"
        | "Scribunto"
        | "SecurePoll"
        | "css"
        | "javascript"
        | "json"
        | "sanitized-css"
        | "text"
        | "unknown"
        | "wikitext";
    topst?: boolean;
    /**
     * @deprecated
     */
    totext?: string;
    /**
     * @deprecated
     */
    tocontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    /**
     * @deprecated
     */
    tocontentmodel?:
        | "GadgetDefinition"
        | "JsonSchema"
        | "MassMessageListContent"
        | "Scribunto"
        | "SecurePoll"
        | "css"
        | "javascript"
        | "json"
        | "sanitized-css"
        | "text"
        | "unknown"
        | "wikitext";
    /**
     * @deprecated
     */
    tosection?: string;
    prop?: OneOrMore<
        | "comment"
        | "diff"
        | "diffsize"
        | "ids"
        | "parsedcomment"
        | "rel"
        | "size"
        | "timestamp"
        | "title"
        | "user"
    >;
    slots?: OneOrMore<"main" | "*">;
    difftype?: "inline" | "table" | "unified";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Account_creation}
 */
export interface ApiActionCreateAccountParams extends ApiParams {
    action?: "createaccount";
    createrequests?: string | string[];
    createmessageformat?: "html" | "none" | "raw" | "wikitext";
    createmergerequestfields?: boolean;
    createpreservestate?: boolean;
    createreturnurl?: string;
    createcontinue?: boolean;
    createtoken?: string;
}

export interface ApiActionCreateLocalAccountParams extends ApiParams {
    action?: "createlocalaccount";
    username: string;
    reason?: string;
    token?: string;
}

/**
 * @private
 */
export interface ApiActionCSPReportParams extends ApiParams {
    action?: "cspreport";
    reportonly?: boolean;
    source?: string;
}

/**
 * @private
 */
export interface ApiActionCxcheckunreviewedParams extends ApiParams {
    action?: "cxcheckunreviewed";
}

export interface ApiActionCxdeleteParams extends ApiParams {
    action?: "cxdelete";
    from: string;
    to: string;
    sourcetitle: string;
    token?: string;
}

/**
 * @private
 */
export interface ApiActionCxpublishParams extends ApiParams {
    action?: "cxpublish";
    title: string;
    html: string;
    from: string;
    to: string;
    sourcetitle: string;
    categories?: string;
    publishtags?: string | string[];
    wpCaptchaId?: string;
    wpCaptchaWord?: string;
    cxversion: number;
    token?: string;
}

/**
 * @private
 */
export interface ApiActionCxpublishsectionParams extends ApiParams {
    action?: "cxpublishsection";
    title: string;
    html: string;
    sourcelanguage: string;
    targetlanguage: string;
    sourcetitle: string;
    sourcerevid: string;
    sourcesectiontitle: string;
    targetsectiontitle: string;
    sectiontranslationid: number;
    issandbox?: boolean;
    captchaid?: string;
    captchaword?: string;
    token?: string;
}

/**
 * @private
 */
export interface ApiActionCxsaveParams extends ApiParams {
    action?: "cxsave";
    from: string;
    to: string;
    sourcetitle: string;
    title: string;
    content: string;
    sourcerevision: number;
    progress: string;
    cxversion?: number;
    sourcecategories?: string;
    targetcategories?: string;
    token?: string;
}

/**
 * @private
 */
export interface ApiActionCxsplitParams extends ApiParams {
    action?: "cxsplit";
    translationid: number;
    token?: string;
}

export interface ApiActionCxsuggestionlistParams extends ApiParams {
    action?: "cxsuggestionlist";
    listname: string;
    listaction: "add" | "remove" | "view";
    titles: string | string[];
    from: string;
    to?: string;
    token?: string;
}

export interface ApiActionCxtokenParams extends ApiParams {
    action?: "cxtoken";
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Delete}
 */
export interface ApiActionDeleteParams extends ApiParams {
    action?: "delete";
    title?: string;
    pageid?: number;
    reason?: string;
    tags?: string | string[];
    deletetalk?: boolean;
    /**
     * @deprecated
     */
    watch?: boolean;
    watchlist?: "nochange" | "preferences" | "unwatch" | "watch";
    watchlistexpiry?: expiry;
    /**
     * @deprecated
     */
    unwatch?: boolean;
    oldimage?: string;
    token?: string;
}

export interface ApiActionDeleteGlobalAccountParams extends ApiParams {
    action?: "deleteglobalaccount";
    user: string;
    reason?: string;
    token?: string;
}

/**
 * @private
 */
export interface ApiActionDiscussionToolsCompareParams extends ApiParams {
    action?: "discussiontoolscompare";
    fromtitle?: string;
    fromrev?: number;
    totitle?: string;
    torev?: number;
}

export interface ApiActionDiscussionToolsEditParams extends ApiParams {
    action?: "discussiontoolsedit";
    paction: "addcomment" | "addtopic";
    autosubscribe?: "default" | "no" | "yes";
    page: string;
    token?: string;
    formtoken?: string;
    commentname?: string;
    commentid?: string;
    wikitext?: string;
    html?: string;
    summary?: string;
    sectiontitle?: string;
    allownosectiontitle?: boolean;
    useskin?:
        | "apioutput"
        | "authentication-popup"
        | "cologneblue"
        | "contenttranslation"
        | "fallback"
        | "json"
        | "minerva"
        | "modern"
        | "monobook"
        | "timeless"
        | "vector"
        | "vector-2022";
    watchlist?: string;
    captchaid?: string;
    captchaword?: string;
    nocontent?: string;
    tags?: string | string[];
    returnto?: string;
    returntoquery?: string;
    returntoanchor?: string;
    mobileformat?: boolean;
}

export interface ApiActionDiscussionToolsFindCommentParams extends ApiParams {
    action?: "discussiontoolsfindcomment";
    idorname?: string;
    heading?: string;
    page?: string;
}

export interface ApiActionDiscussionToolsGetSubscriptionsParams extends ApiParams {
    action?: "discussiontoolsgetsubscriptions";
    commentname: string | string[];
}

/**
 * @private
 */
export interface ApiActionDiscussionToolsPageInfoParams extends ApiParams {
    action?: "discussiontoolspageinfo";
    page?: string;
    oldid?: number;
    prop?: OneOrMore<"threaditemshtml" | "transcludedfrom">;
    excludesignatures?: boolean;
}

/**
 * @private
 */
export interface ApiActionDiscussionToolsPreviewParams extends ApiParams {
    action?: "discussiontoolspreview";
    type: "reply" | "topic";
    page: string;
    wikitext: string;
    sectiontitle?: string;
    useskin?:
        | "apioutput"
        | "authentication-popup"
        | "cologneblue"
        | "contenttranslation"
        | "fallback"
        | "json"
        | "minerva"
        | "modern"
        | "monobook"
        | "timeless"
        | "vector"
        | "vector-2022";
    mobileformat?: boolean;
}

export interface ApiActionDiscussionToolsSubscribeParams extends ApiParams {
    action?: "discussiontoolssubscribe";
    page: string;
    token?: string;
    commentname: string;
    subscribe: boolean;
}

export interface ApiActionDiscussionToolsThankParams extends ApiParams {
    action?: "discussiontoolsthank";
    page: string;
    commentid: string;
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Echo_(Notifications)/API}
 */
export interface ApiActionEchoCreateEventParams extends ApiParams {
    action?: "echocreateevent";
    user?: string;
    header: string;
    content: string;
    page?: string;
    section: "alert" | "notice";
    email?: boolean;
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Echo_(Notifications)/API}
 */
export interface ApiActionEchoMarkReadParams extends ApiParams {
    action?: "echomarkread";
    wikis?: string | string[];
    list?: string | string[];
    unreadlist?: string | string[];
    all?: boolean;
    sections?: OneOrMore<"alert" | "message">;
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Echo_(Notifications)/API}
 */
export interface ApiActionEchoMarkSeenParams extends ApiParams {
    action?: "echomarkseen";
    type: "alert" | "all" | "message";
    timestampFormat?: "ISO_8601" | "MW";
}

export interface ApiActionEchoMuteParams extends ApiParams {
    action?: "echomute";
    type: "page-linked-title" | "user";
    mute?: string | string[];
    unmute?: string | string[];
    token?: string;
}

/**
 * @private
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:Echo#API}
 */
export interface ApiActionEchoPushSubscriptionsParams extends ApiParams {
    action?: "echopushsubscriptions";
    command: ApiActionEchoPushSubscriptionsParamsCommand;
    token?: string;
}

type ApiActionEchoPushSubscriptionsParamsCommand = keyof ApiActionEchoPushSubscriptionsParamsCommandMap;

interface ApiActionEchoPushSubscriptionsParamsCommandMap {
    create: ApiActionEchoPushSubscriptionsCommandCreateParams;
    delete: ApiActionEchoPushSubscriptionsCommandDeleteParams;
}

/**
 * @private
 */
export interface ApiActionEchoPushSubscriptionsCommandCreateParams
    extends ApiActionEchoPushSubscriptionsParams {
    command: "create";
    provider: "apns" | "fcm";
    providertoken: string;
    topic?: string;
}

/**
 * @private
 */
export interface ApiActionEchoPushSubscriptionsCommandDeleteParams
    extends ApiActionEchoPushSubscriptionsParams {
    command: "delete";
    providertoken: string | string[];
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Edit}
 */
export interface ApiActionEditParams extends ApiParams {
    action?: "edit";
    title?: string;
    pageid?: number;
    section?: string;
    sectiontitle?: string;
    text?: string;
    summary?: string;
    tags?: string | string[];
    minor?: boolean;
    notminor?: boolean;
    bot?: boolean;
    baserevid?: number;
    basetimestamp?: timestamp;
    starttimestamp?: timestamp;
    recreate?: boolean;
    createonly?: boolean;
    nocreate?: boolean;
    /**
     * @deprecated
     */
    watch?: boolean;
    /**
     * @deprecated
     */
    unwatch?: boolean;
    watchlist?: "nochange" | "preferences" | "unwatch" | "watch";
    watchlistexpiry?: expiry;
    md5?: string;
    prependtext?: string;
    appendtext?: string;
    undo?: number;
    undoafter?: number;
    redirect?: boolean;
    contentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    contentmodel?:
        | "GadgetDefinition"
        | "JsonSchema"
        | "MassMessageListContent"
        | "Scribunto"
        | "SecurePoll"
        | "css"
        | "javascript"
        | "json"
        | "sanitized-css"
        | "text"
        | "unknown"
        | "wikitext";
    token?: string;
    returnto?: string;
    returntoquery?: string;
    returntoanchor?: string;
    captchaword?: string;
    captchaid?: string;
}

/**
 * @private
 */
export interface ApiActionEditCheckReferenceUrlParams extends ApiParams {
    action?: "editcheckreferenceurl";
    url: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Extension:MassMessage/API}
 */
export interface ApiActionEditMassMessageListParams extends ApiParams {
    action?: "editmassmessagelist";
    spamlist: string;
    description?: string;
    add?: string | string[];
    remove?: string | string[];
    minor?: boolean;
    watchlist?: "nochange" | "preferences" | "unwatch" | "watch";
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Email}
 */
export interface ApiActionEmailUserParams extends ApiParams {
    action?: "emailuser";
    target: string;
    subject: string;
    text: string;
    ccme?: boolean;
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Expandtemplates}
 */
export interface ApiActionExpandTemplatesParams extends ApiParams {
    action?: "expandtemplates";
    title?: string;
    text: string;
    revid?: number;
    prop?: OneOrMore<
        | "categories"
        | "encodedjsconfigvars"
        | "jsconfigvars"
        | "modules"
        | "parsetree"
        | "properties"
        | "ttl"
        | "volatile"
        | "wikitext"
    >;
    includecomments?: boolean;
    showstrategykeys?: boolean;
    /**
     * @deprecated
     */
    generatexml?: boolean;
    templatesandboxprefix?: string | string[];
    templatesandboxtitle?: string;
    templatesandboxtext?: string;
    templatesandboxcontentmodel?:
        | "GadgetDefinition"
        | "JsonSchema"
        | "MassMessageListContent"
        | "Scribunto"
        | "SecurePoll"
        | "css"
        | "javascript"
        | "json"
        | "sanitized-css"
        | "text"
        | "unknown"
        | "wikitext";
    templatesandboxcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
}

/**
 * @private
 */
export interface ApiActionFancyCaptchaReloadParams extends ApiParams {
    action?: "fancycaptchareload";
}

export interface ApiActionFeaturedFeedParams extends ApiParams {
    action?: "featuredfeed";
    feedformat?: "atom" | "rss";
    feed: "featured" | "onthisday" | "potd";
    language?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Feedcontributions}
 */
export interface ApiActionFeedContributionsParams extends ApiParams {
    action?: "feedcontributions";
    feedformat?: "atom" | "rss";
    user: string;
    namespace?: namespace;
    year?: number;
    month?: number;
    tagfilter?: string | string[];
    deletedonly?: boolean;
    toponly?: boolean;
    newonly?: boolean;
    hideminor?: boolean;
    showsizediff?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Feedrecentchanges}
 */
export interface ApiActionFeedRecentChangesParams extends ApiParams {
    action?: "feedrecentchanges";
    feedformat?: "atom" | "rss";
    namespace?: namespace;
    invert?: boolean;
    associated?: boolean;
    days?: number;
    limit?: number;
    from?: timestamp;
    hideminor?: boolean;
    hidebots?: boolean;
    hideanons?: boolean;
    hideliu?: boolean;
    hidepatrolled?: boolean;
    hidemyself?: boolean;
    hidecategorization?: boolean;
    tagfilter?: string;
    inverttags?: boolean;
    target?: string;
    showlinkedto?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlist_feed}
 */
export interface ApiActionFeedWatchlistParams extends ApiParams {
    action?: "feedwatchlist";
    feedformat?: "atom" | "rss";
    hours?: number;
    linktosections?: boolean;
    allrev?: boolean;
    wlowner?: string;
    wltoken?: string;
    wlshow?: OneOrMore<
        | "!anon"
        | "!autopatrolled"
        | "!bot"
        | "!minor"
        | "!patrolled"
        | "!unread"
        | "anon"
        | "autopatrolled"
        | "bot"
        | "minor"
        | "patrolled"
        | "unread"
    >;
    wltype?: OneOrMore<"categorize" | "edit" | "external" | "log" | "new">;
    wlexcludeuser?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Filerevert}
 */
export interface ApiActionFileRevertParams extends ApiParams {
    action?: "filerevert";
    filename: string;
    comment?: string;
    archivename: string;
    token?: string;
}

export interface ApiActionFlagConfigParams extends ApiParams {
    action?: "flagconfig";
}

export interface ApiActionGlobalBlockParams extends ApiParams {
    "action"?: "globalblock";
    "target": string;
    "expiry"?: expiry;
    "unblock"?: boolean;
    "reason": string;
    "anononly"?: boolean;
    "allow-account-creation"?: boolean;
    "modify"?: boolean;
    "alsolocal"?: boolean;
    "localblockstalk"?: boolean;
    "localblocksemail"?: boolean;
    "localanononly"?: boolean;
    "local-allow-account-creation"?: boolean;
    "token"?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GlobalPreferences/API}
 */
export interface ApiActionGlobalPreferenceOverridesParams extends ApiParams {
    action?: "globalpreferenceoverrides";
    reset?: boolean;
    resetkinds?: OneOrMore<
        | "all"
        | "registered"
        | "registered-checkmatrix"
        | "registered-multiselect"
        | "special"
        | "unused"
        | "userjs"
    >;
    change?: string | string[];
    optionname?: string;
    optionvalue?: string;
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Globalpreferences}
 */
export interface ApiActionGlobalPreferencesParams extends ApiParams {
    action?: "globalpreferences";
    reset?: boolean;
    resetkinds?: OneOrMore<
        | "all"
        | "registered"
        | "registered-checkmatrix"
        | "registered-multiselect"
        | "special"
        | "unused"
        | "userjs"
    >;
    change?: string | string[];
    optionname?: string;
    optionvalue?: string;
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:User_group_membership}
 */
export interface ApiActionGlobalUserRightsParams extends ApiParams {
    action?: "globaluserrights";
    user?: string;
    /**
     * @deprecated
     */
    userid?: number;
    add?: OneOrMore<
        | "abusefilter-helper"
        | "abusefilter-maintainer"
        | "apihighlimits-requestor"
        | "captcha-exempt"
        | "founder"
        | "global-bot"
        | "global-deleter"
        | "global-flow-create"
        | "global-interface-editor"
        | "global-ipblock-exempt"
        | "global-rollbacker"
        | "global-sysop"
        | "global-temporary-account-viewer"
        | "new-wikis-importer"
        | "oathauth-tester"
        | "ombuds"
        | "recursive-export"
        | "staff"
        | "steward"
        | "sysadmin"
        | "vrt-permissions"
        | "wmf-email-block-override"
        | "wmf-researcher"
    >;
    expiry?: string | string[];
    remove?: OneOrMore<
        | "abusefilter-helper"
        | "abusefilter-maintainer"
        | "apihighlimits-requestor"
        | "captcha-exempt"
        | "founder"
        | "global-bot"
        | "global-deleter"
        | "global-flow-create"
        | "global-interface-editor"
        | "global-ipblock-exempt"
        | "global-rollbacker"
        | "global-sysop"
        | "global-temporary-account-viewer"
        | "new-wikis-importer"
        | "oathauth-tester"
        | "ombuds"
        | "recursive-export"
        | "staff"
        | "steward"
        | "sysadmin"
        | "vrt-permissions"
        | "wmf-email-block-override"
        | "wmf-researcher"
    >;
    reason?: string;
    token?: string;
    tags?: string | string[];
}

/**
 * @private
 */
export interface ApiActionGrowthInvalidateImageRecommendationParams extends ApiParams {
    action?: "growthinvalidateimagerecommendation";
    tasktype?: "image-recommendation" | "section-image-recommendation";
    title: string;
    filename: string;
    sectiontitle?: string;
    sectionnumber?: number;
    token?: string;
}

/**
 * @private
 */
export interface ApiActionGrowthInvalidatePersonalizedPraiseSuggestionParams extends ApiParams {
    action?: "growthinvalidatepersonalizedpraisesuggestion";
    mentee: string;
    reason?: "praised" | "skipped";
    skipreason?: "already-praised" | "not-now" | "not-praiseworthy" | "other";
    token?: string;
}

export interface ApiActionGrowthManageMentorListParams extends ApiParams {
    action?: "growthmanagementorlist";
    geaction: "add" | "change" | "remove";
    message?: string;
    weight?: "0" | "1" | "2" | "4";
    isaway?: boolean;
    awaytimestamp?: timestamp;
    summary?: string;
    username?: string;
    token?: string;
}

export interface ApiActionGrowthMentorDashboardUpdateDataParams extends ApiParams {
    action?: "growthmentordashboardupdatedata";
    token?: string;
}

export interface ApiActionGrowthSetMenteeStatusParams extends ApiParams {
    action?: "growthsetmenteestatus";
    state: "disabled" | "enabled" | "optout";
    token?: string;
}

export interface ApiActionGrowthSetMentorParams extends ApiParams {
    action?: "growthsetmentor";
    mentee: string;
    mentor: string;
    reason?: string;
    token?: string;
}

export interface ApiActionGrowthStarMenteeParams extends ApiParams {
    action?: "growthstarmentee";
    gesaction: "star" | "unstar";
    gesmentee: string;
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Main_page}
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:FAQ}
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Quick_start_guide}
 */
export interface ApiActionHelpParams extends ApiParams {
    action?: "help";
    modules?: string | string[];
    submodules?: boolean;
    recursivesubmodules?: boolean;
    wrap?: boolean;
    toc?: boolean;
}

/**
 * @private
 */
export interface ApiActionHelppanelquestionposterParams extends ApiParams {
    action?: "helppanelquestionposter";
    body: string;
    source?:
        | "helpdesk"
        | "helppanel"
        | "homepage-mentorship"
        | "mentor-helppanel"
        | "mentor-homepage";
    relevanttitle?: string;
    token?: string;
}

export interface ApiActionHomepagequestionstoreParams extends ApiParams {
    action?: "homepagequestionstore";
    storage: "growthexperiments-helppanel-questions" | "growthexperiments-mentor-questions";
}

export interface ApiActionImagerotateParams extends ApiParams {
    action?: "imagerotate";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Import}
 */
export interface ApiActionImportParams extends ApiParams {
    action?: "import";
    summary?: string;
    xml?: upload;
    interwikiprefix?: string;
    interwikisource?:
        | "commons"
        | "de"
        | "es"
        | "fr"
        | "it"
        | "meta"
        | "nost"
        | "outreachwiki"
        | "pl"
        | "test2wiki";
    interwikipage?: string;
    fullhistory?: boolean;
    templates?: boolean;
    namespace?: namespace;
    assignknownusers?: boolean;
    rootpage?: string;
    tags?: string | string[];
    token?: string;
}

export interface ApiActionJsonConfigParams extends ApiParams {
    action?: "jsonconfig";
    command?: "reload" | "reset" | "status";
    namespace?: number;
    title?: string;
    content?: string;
}

/**
 * @private
 */
export interface ApiActionJsonDataParams extends ApiParams {
    action?: "jsondata";
    title: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Languagesearch}
 */
export interface ApiActionLanguageSearchParams extends ApiParams {
    action?: "languagesearch";
    search: string;
    typos?: number;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Linkaccount}
 */
export interface ApiActionLinkAccountParams extends ApiParams {
    action?: "linkaccount";
    linkrequests?: string | string[];
    linkmessageformat?: "html" | "none" | "raw" | "wikitext";
    linkmergerequestfields?: boolean;
    linkreturnurl?: string;
    linkcontinue?: boolean;
    linktoken?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Login}
 */
export interface ApiActionLoginParams extends ApiParams {
    action?: "login";
    lgname?: string;
    lgpassword?: password;
    lgdomain?: string;
    lgtoken?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Logout}
 */
export interface ApiActionLogoutParams extends ApiParams {
    action?: "logout";
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Tag_management}
 */
export interface ApiActionManageTagsParams extends ApiParams {
    action?: "managetags";
    operation: "activate" | "create" | "deactivate" | "delete";
    tag: string;
    reason?: string;
    ignorewarnings?: boolean;
    tags?: string | string[];
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Extension:MassMessage/API}
 */
export interface ApiActionMassMessageParams extends ApiParams {
    "action"?: "massmessage";
    "spamlist": string;
    "subject": string;
    "message"?: string;
    "page-message"?: string;
    "token"?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Mergehistory}
 */
export interface ApiActionMergeHistoryParams extends ApiParams {
    action?: "mergehistory";
    from?: string;
    fromid?: number;
    to?: string;
    toid?: number;
    timestamp?: timestamp;
    reason?: string;
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Move}
 */
export interface ApiActionMoveParams extends ApiParams {
    action?: "move";
    from?: string;
    fromid?: number;
    to: string;
    reason?: string;
    movetalk?: boolean;
    movesubpages?: boolean;
    noredirect?: boolean;
    watchlist?: "nochange" | "preferences" | "unwatch" | "watch";
    watchlistexpiry?: expiry;
    ignorewarnings?: boolean;
    tags?: string | string[];
    token?: string;
}

/**
 * @private
 */
export interface ApiActionOATHValidateParams extends ApiParams {
    action?: "oathvalidate";
    user?: string;
    data: string;
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Opensearch}
 */
export interface ApiActionOpenSearchParams extends ApiParams {
    action?: "opensearch";
    search: string;
    namespace?: namespace | namespace[];
    limit?: limit;
    profile?: "classic" | "engine_autoselect" | "fast-fuzzy" | "fuzzy" | "normal" | "strict";
    /**
     * @deprecated
     */
    suggest?: boolean;
    redirects?: "resolve" | "return";
    format?: "json" | "jsonfm" | "xml" | "xmlfm";
    warningsaserror?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Options}
 */
export interface ApiActionOptionsParams extends ApiParams {
    action?: "options";
    reset?: boolean;
    resetkinds?: OneOrMore<
        | "all"
        | "registered"
        | "registered-checkmatrix"
        | "registered-multiselect"
        | "special"
        | "unused"
        | "userjs"
    >;
    change?: string | string[];
    optionname?: string;
    optionvalue?: string;
    global?: "ignore" | "override" | "update";
    token?: string;
}

export interface ApiActionPageTriageActionParams extends ApiParams {
    action?: "pagetriageaction";
    pageid: number;
    reviewed?: "0" | "1";
    enqueue?: boolean;
    token?: string;
    note?: string;
    skipnotif?: boolean;
    tags?: string | string[];
}

export interface ApiActionPageTriageListParams extends ApiParams {
    action?: "pagetriagelist";
    show_predicted_class_stub?: boolean;
    show_predicted_class_start?: boolean;
    show_predicted_class_c?: boolean;
    show_predicted_class_b?: boolean;
    show_predicted_class_good?: boolean;
    show_predicted_class_featured?: boolean;
    show_predicted_issues_vandalism?: boolean;
    show_predicted_issues_spam?: boolean;
    show_predicted_issues_attack?: boolean;
    show_predicted_issues_none?: boolean;
    show_predicted_issues_copyvio?: boolean;
    showbots?: boolean;
    showautopatrolled?: boolean;
    showredirs?: boolean;
    showothers?: boolean;
    showreviewed?: boolean;
    showunreviewed?: boolean;
    showdeleted?: boolean;
    namespace?: number;
    afc_state?: number;
    no_category?: boolean;
    unreferenced?: boolean;
    no_inbound_links?: boolean;
    recreated?: boolean;
    non_autoconfirmed_users?: boolean;
    learners?: boolean;
    blocked_users?: boolean;
    username?: string;
    date_range_from?: timestamp;
    date_range_to?: timestamp;
    page_id?: number;
    limit?: number;
    offset?: number;
    pageoffset?: number;
    dir?: "newestfirst" | "newestreview" | "oldestfirst" | "oldestreview";
}

export interface ApiActionPageTriageStatsParams extends ApiParams {
    action?: "pagetriagestats";
    show_predicted_class_stub?: boolean;
    show_predicted_class_start?: boolean;
    show_predicted_class_c?: boolean;
    show_predicted_class_b?: boolean;
    show_predicted_class_good?: boolean;
    show_predicted_class_featured?: boolean;
    show_predicted_issues_vandalism?: boolean;
    show_predicted_issues_spam?: boolean;
    show_predicted_issues_attack?: boolean;
    show_predicted_issues_none?: boolean;
    show_predicted_issues_copyvio?: boolean;
    showbots?: boolean;
    showautopatrolled?: boolean;
    showredirs?: boolean;
    showothers?: boolean;
    showreviewed?: boolean;
    showunreviewed?: boolean;
    showdeleted?: boolean;
    namespace?: number;
    afc_state?: number;
    no_category?: boolean;
    unreferenced?: boolean;
    no_inbound_links?: boolean;
    recreated?: boolean;
    non_autoconfirmed_users?: boolean;
    learners?: boolean;
    blocked_users?: boolean;
    username?: string;
    date_range_from?: timestamp;
    date_range_to?: timestamp;
}

export interface ApiActionPageTriageTagCopyvioParams extends ApiParams {
    action?: "pagetriagetagcopyvio";
    revid: number;
    untag?: boolean;
    token?: string;
}

export interface ApiActionPageTriageTaggingParams extends ApiParams {
    action?: "pagetriagetagging";
    pageid: number;
    token?: string;
    wikitext: string;
    deletion?: boolean;
    note?: string;
    taglist: string | string[];
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Parameter_information}
 */
export interface ApiActionParamInfoParams extends ApiParams {
    action?: "paraminfo";
    modules?: string | string[];
    helpformat?: "html" | "none" | "raw" | "wikitext";
    /**
     * @deprecated
     */
    querymodules?: OneOrMore<
        | "abusefilters"
        | "abuselog"
        | "allcategories"
        | "alldeletedrevisions"
        | "allfileusages"
        | "allimages"
        | "alllinks"
        | "allmessages"
        | "allpages"
        | "allredirects"
        | "allrevisions"
        | "alltransclusions"
        | "allusers"
        | "authmanagerinfo"
        | "automatictranslationdenselanguages"
        | "babel"
        | "backlinks"
        | "betafeatures"
        | "blocks"
        | "categories"
        | "categoryinfo"
        | "categorymembers"
        | "centralnoticeactivecampaigns"
        | "centralnoticelogs"
        | "checkuser"
        | "checkuserlog"
        | "cirrusbuilddoc"
        | "cirruscompsuggestbuilddoc"
        | "cirrusdoc"
        | "communityconfiguration"
        | "contenttranslation"
        | "contenttranslationcorpora"
        | "contenttranslationlangtrend"
        | "contenttranslationstats"
        | "contenttranslationsuggestions"
        | "contributors"
        | "coordinates"
        | "cxdeletedtranslations"
        | "cxpublishedtranslations"
        | "cxtranslatorstats"
        | "deletedrevisions"
        | "deletedrevs"
        | "description"
        | "duplicatefiles"
        | "embeddedin"
        | "extlinks"
        | "extracts"
        | "exturlusage"
        | "featureusage"
        | "filearchive"
        | "filerepoinfo"
        | "fileusage"
        | "flagged"
        | "gadgetcategories"
        | "gadgets"
        | "geosearch"
        | "globalallusers"
        | "globalblocks"
        | "globalgroups"
        | "globalpreferences"
        | "globalrenamestatus"
        | "globalusage"
        | "globaluserinfo"
        | "growthimagesuggestiondata"
        | "growthmenteestatus"
        | "growthmentorlist"
        | "growthmentormentee"
        | "growthmentorstatus"
        | "growthnextsuggestedtasktype"
        | "growthstarredmentees"
        | "growthtasks"
        | "imageinfo"
        | "images"
        | "imageusage"
        | "info"
        | "isreviewed"
        | "iwbacklinks"
        | "iwlinks"
        | "langbacklinks"
        | "langlinks"
        | "langlinkscount"
        | "languageinfo"
        | "links"
        | "linkshere"
        | "linterrors"
        | "linterstats"
        | "logevents"
        | "mapdata"
        | "mmcontent"
        | "mostviewed"
        | "mystashedfiles"
        | "notifications"
        | "oath"
        | "oldreviewedpages"
        | "ores"
        | "pageassessments"
        | "pageimages"
        | "pagepropnames"
        | "pageprops"
        | "pageswithprop"
        | "pageterms"
        | "pageviews"
        | "prefixsearch"
        | "projectpages"
        | "projects"
        | "protectedtitles"
        | "querypage"
        | "random"
        | "readinglistentries"
        | "readinglists"
        | "recentchanges"
        | "redirects"
        | "revisions"
        | "search"
        | "siteinfo"
        | "siteviews"
        | "stashimageinfo"
        | "tags"
        | "templates"
        | "tokens"
        | "transcludedin"
        | "transcodestatus"
        | "unreadnotificationpages"
        | "usercontribs"
        | "userinfo"
        | "users"
        | "videoinfo"
        | "watchlist"
        | "watchlistraw"
        | "wbentityusage"
        | "wblistentityusage"
        | "wikibase"
        | "wikisets"
    >;
    /**
     * @deprecated
     */
    mainmodule?: string;
    /**
     * @deprecated
     */
    pagesetmodule?: string;
    /**
     * @deprecated
     */
    formatmodules?: OneOrMore<
        "json" | "jsonfm" | "none" | "php" | "phpfm" | "rawfm" | "xml" | "xmlfm"
    >;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Parsing_wikitext}
 */
export interface ApiActionParseParams extends ApiParams {
    action?: "parse";
    title?: string;
    text?: string;
    revid?: number;
    summary?: string;
    page?: string;
    pageid?: number;
    redirects?: boolean;
    oldid?: number;
    prop?: OneOrMore<
        | "categories"
        | "categorieshtml"
        | "displaytitle"
        | "encodedjsconfigvars"
        | "externallinks"
        | "headhtml"
        | "images"
        | "indicators"
        | "iwlinks"
        | "jsconfigvars"
        | "langlinks"
        | "limitreportdata"
        | "limitreporthtml"
        | "links"
        | "modules"
        | "parsetree"
        | "parsewarnings"
        | "parsewarningshtml"
        | "properties"
        | "revid"
        | "sections"
        | "subtitle"
        | "templates"
        | "text"
        | "wikitext"
        | "headitems"
    >;
    wrapoutputclass?: string;
    usearticle?: boolean;
    parsoid?: boolean;
    pst?: boolean;
    onlypst?: boolean;
    /**
     * @deprecated
     */
    effectivelanglinks?: boolean;
    section?: string;
    sectiontitle?: string;
    /**
     * @deprecated
     */
    disablepp?: boolean;
    disablelimitreport?: boolean;
    disableeditsection?: boolean;
    disablestylededuplication?: boolean;
    showstrategykeys?: boolean;
    /**
     * @deprecated
     */
    generatexml?: boolean;
    preview?: boolean;
    sectionpreview?: boolean;
    disabletoc?: boolean;
    useskin?:
        | "apioutput"
        | "authentication-popup"
        | "cologneblue"
        | "contenttranslation"
        | "fallback"
        | "json"
        | "minerva"
        | "modern"
        | "monobook"
        | "timeless"
        | "vector"
        | "vector-2022";
    contentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    contentmodel?:
        | "GadgetDefinition"
        | "JsonSchema"
        | "MassMessageListContent"
        | "Scribunto"
        | "SecurePoll"
        | "css"
        | "javascript"
        | "json"
        | "sanitized-css"
        | "text"
        | "unknown"
        | "wikitext";
    mobileformat?: boolean;
    templatesandboxprefix?: string | string[];
    templatesandboxtitle?: string;
    templatesandboxtext?: string;
    templatesandboxcontentmodel?:
        | "GadgetDefinition"
        | "JsonSchema"
        | "MassMessageListContent"
        | "Scribunto"
        | "SecurePoll"
        | "css"
        | "javascript"
        | "json"
        | "sanitized-css"
        | "text"
        | "unknown"
        | "wikitext";
    templatesandboxcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
}

/**
 * @private
 */
export interface ApiActionParserMigrationParams extends ApiParams {
    action?: "parser-migration";
    title: string;
    config?: OneOrMore<"new" | "old">;
    redirect?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Patrol}
 */
export interface ApiActionPatrolParams extends ApiParams {
    action?: "patrol";
    rcid?: number;
    revid?: number;
    tags?: string | string[];
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Protect}
 */
export interface ApiActionProtectParams extends ApiParams {
    action?: "protect";
    title?: string;
    pageid?: number;
    protections: string | string[];
    expiry?: string | string[];
    reason?: string;
    tags?: string | string[];
    cascade?: boolean;
    /**
     * @deprecated
     */
    watch?: boolean;
    watchlist?: "nochange" | "preferences" | "unwatch" | "watch";
    watchlistexpiry?: expiry;
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Purge}
 */
export interface ApiActionPurgeParams extends ApiParams {
    action?: "purge";
    forcelinkupdate?: boolean;
    forcerecursivelinkupdate?: boolean;
    continue?: string;
    titles?: string | string[];
    pageids?: number | number[];
    revids?: number | number[];
    generator?: ApiActionPurgeParamsGenerator;
    redirects?: boolean;
    converttitles?: boolean;
}

type ApiActionPurgeParamsGenerator = keyof ApiActionPurgeParamsGeneratorMap;

interface ApiActionPurgeParamsGeneratorMap {
    allcategories: ApiActionPurgeGeneratorAllCategoriesParams;
    alldeletedrevisions: ApiActionPurgeGeneratorAllDeletedRevisionsParams;
    allfileusages: ApiActionPurgeGeneratorQueryAllFileUsagesParams;
    allimages: ApiActionPurgeGeneratorAllImagesParams;
    alllinks: ApiActionPurgeGeneratorAllLinksParams;
    allpages: ApiActionPurgeGeneratorAllPagesParams;
    allredirects: ApiActionPurgeGeneratorQueryAllRedirectsParams;
    allrevisions: ApiActionPurgeGeneratorAllRevisionsParams;
    alltransclusions: ApiActionPurgeGeneratorQueryAllTransclusionsParams;
    automatictranslationdenselanguages: ApiActionPurgeGeneratorAutomaticTranslationDenseLanguagesParams;
    backlinks: ApiActionPurgeGeneratorBacklinksParams;
    categories: ApiActionPurgeGeneratorCategoriesParams;
    categorymembers: ApiActionPurgeGeneratorCategoryMembersParams;
    contenttranslation: ApiActionPurgeGeneratorContentTranslationParams;
    contenttranslationsuggestions: ApiActionPurgeGeneratorContentTranslationSuggestionsParams;
    deletedrevisions: ApiActionPurgeGeneratorDeletedRevisionsParams;
    duplicatefiles: ApiActionPurgeGeneratorDuplicateFilesParams;
    embeddedin: ApiActionPurgeGeneratorQueryEmbeddedInParams;
    exturlusage: ApiActionPurgeGeneratorExturlusageParams;
    fileusage: ApiActionPurgeGeneratorQueryFileUsageParams;
    geosearch: ApiActionPurgeGeneratorGeoSearchParams;
    growthtasks: ApiActionPurgeGeneratorGrowthTasksParams;
    images: ApiActionPurgeGeneratorImagesParams;
    imageusage: ApiActionPurgeGeneratorQueryImageUsageParams;
    iwbacklinks: ApiActionPurgeGeneratorIWBacklinksParams;
    langbacklinks: ApiActionPurgeGeneratorLangBacklinksParams;
    links: ApiActionPurgeGeneratorLinksParams;
    linkshere: ApiActionPurgeGeneratorQueryLinksHereParams;
    mostviewed: ApiActionPurgeGeneratorMostViewedParams;
    oldreviewedpages: ApiActionPurgeGeneratorOldreviewedpagesParams;
    pageswithprop: ApiActionPurgeGeneratorPagesWithPropParams;
    prefixsearch: ApiActionPurgeGeneratorPrefixSearchParams;
    projectpages: ApiActionPurgeGeneratorProjectPagesParams;
    protectedtitles: ApiActionPurgeGeneratorProtectedTitlesParams;
    querypage: ApiActionPurgeGeneratorQueryPageParams;
    random: ApiActionPurgeGeneratorRandomParams;
    readinglistentries: ApiActionPurgeGeneratorReadingListEntriesParams;
    recentchanges: ApiActionPurgeGeneratorRecentChangesParams;
    redirects: ApiActionPurgeGeneratorQueryRedirectsParams;
    revisions: ApiActionPurgeGeneratorRevisionsParams;
    search: ApiActionPurgeGeneratorSearchParams;
    templates: ApiActionPurgeGeneratorQueryTemplatesParams;
    transcludedin: ApiActionPurgeGeneratorQueryTranscludedInParams;
    watchlist: ApiActionPurgeGeneratorWatchlistParams;
    watchlistraw: ApiActionPurgeGeneratorWatchlistRawParams;
    wblistentityusage: ApiActionPurgeGeneratorWblistentityusageParams;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allcategories}
 */
export interface ApiActionPurgeGeneratorAllCategoriesParams extends ApiActionPurgeParams {
    generator?: "allcategories";
    gacfrom?: string;
    gaccontinue?: string;
    gacto?: string;
    gacprefix?: string;
    gacdir?: "ascending" | "descending";
    gacmin?: number;
    gacmax?: number;
    gaclimit?: limit;
    gacprop?: OneOrMore<"hidden" | "size">;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alldeletedrevisions}
 */
export interface ApiActionPurgeGeneratorAllDeletedRevisionsParams extends ApiActionPurgeParams {
    generator?: "alldeletedrevisions";
    gadrprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flags"
        | "ids"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    gadrslots?: string | string[];
    [k: `gadrcontentformat-${string}`]:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    gadrlimit?: limit;
    /**
     * @deprecated
     */
    gadrexpandtemplates?: boolean;
    /**
     * @deprecated
     */
    gadrgeneratexml?: boolean;
    /**
     * @deprecated
     */
    gadrparse?: boolean;
    gadrsection?: string;
    /**
     * @deprecated
     */
    gadrdiffto?: string;
    /**
     * @deprecated
     */
    gadrdifftotext?: string;
    /**
     * @deprecated
     */
    gadrdifftotextpst?: boolean;
    /**
     * @deprecated
     */
    gadrcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    gadruser?: string;
    gadrnamespace?: namespace | namespace[];
    gadrstart?: timestamp;
    gadrend?: timestamp;
    gadrdir?: "newer" | "older";
    gadrfrom?: string;
    gadrto?: string;
    gadrprefix?: string;
    gadrexcludeuser?: string;
    gadrtag?: string;
    gadrcontinue?: string;
    gadrgeneratetitles?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allfileusages}
 */
export interface ApiActionPurgeGeneratorQueryAllFileUsagesParams extends ApiActionPurgeParams {
    generator?: "allfileusages";
    gafcontinue?: string;
    gaffrom?: string;
    gafto?: string;
    gafprefix?: string;
    gafunique?: boolean;
    gafprop?: OneOrMore<"ids" | "title">;
    gaflimit?: limit;
    gafdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allimages}
 */
export interface ApiActionPurgeGeneratorAllImagesParams extends ApiActionPurgeParams {
    generator?: "allimages";
    gaisort?: "name" | "timestamp";
    gaidir?: "ascending" | "descending" | "newer" | "older";
    gaifrom?: string;
    gaito?: string;
    gaicontinue?: string;
    gaistart?: timestamp;
    gaiend?: timestamp;
    gaiprop?: OneOrMore<
        | "badfile"
        | "bitdepth"
        | "canonicaltitle"
        | "comment"
        | "commonmetadata"
        | "dimensions"
        | "extmetadata"
        | "mediatype"
        | "metadata"
        | "mime"
        | "parsedcomment"
        | "sha1"
        | "size"
        | "timestamp"
        | "url"
        | "user"
        | "userid"
    >;
    gaiprefix?: string;
    gaiminsize?: number;
    gaimaxsize?: number;
    gaisha1?: string;
    gaisha1base36?: string;
    gaiuser?: string;
    gaifilterbots?: "all" | "bots" | "nobots";
    gaimime?: string | string[];
    gailimit?: limit;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alllinks}
 */
export interface ApiActionPurgeGeneratorAllLinksParams extends ApiActionPurgeParams {
    generator?: "alllinks";
    galcontinue?: string;
    galfrom?: string;
    galto?: string;
    galprefix?: string;
    galunique?: boolean;
    galprop?: OneOrMore<"ids" | "title">;
    galnamespace?: namespace;
    gallimit?: limit;
    galdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allpages}
 */
export interface ApiActionPurgeGeneratorAllPagesParams extends ApiActionPurgeParams {
    generator?: "allpages";
    gapfrom?: string;
    gapcontinue?: string;
    gapto?: string;
    gapprefix?: string;
    gapnamespace?: namespace;
    gapfilterredir?: "all" | "nonredirects" | "redirects";
    gapfilterlanglinks?: "all" | "withlanglinks" | "withoutlanglinks";
    gapminsize?: number;
    gapmaxsize?: number;
    gapprtype?: OneOrMore<"edit" | "move" | "upload">;
    gapprlevel?: OneOrMore<"" | "autoconfirmed" | "extendedconfirmed" | "sysop" | "templateeditor">;
    gapprfiltercascade?: "all" | "cascading" | "noncascading";
    gapprexpiry?: "all" | "definite" | "indefinite";
    gaplimit?: limit;
    gapdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allredirects}
 */
export interface ApiActionPurgeGeneratorQueryAllRedirectsParams extends ApiActionPurgeParams {
    generator?: "allredirects";
    garcontinue?: string;
    garfrom?: string;
    garto?: string;
    garprefix?: string;
    garunique?: boolean;
    garprop?: OneOrMore<"fragment" | "ids" | "interwiki" | "title">;
    garnamespace?: namespace;
    garlimit?: limit;
    gardir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allrevisions}
 */
export interface ApiActionPurgeGeneratorAllRevisionsParams extends ApiActionPurgeParams {
    generator?: "allrevisions";
    garvprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flags"
        | "ids"
        | "oresscores"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    garvslots?: string | string[];
    [k: `garvcontentformat-${string}`]:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    garvlimit?: limit;
    /**
     * @deprecated
     */
    garvexpandtemplates?: boolean;
    /**
     * @deprecated
     */
    garvgeneratexml?: boolean;
    /**
     * @deprecated
     */
    garvparse?: boolean;
    garvsection?: string;
    /**
     * @deprecated
     */
    garvdiffto?: string;
    /**
     * @deprecated
     */
    garvdifftotext?: string;
    /**
     * @deprecated
     */
    garvdifftotextpst?: boolean;
    /**
     * @deprecated
     */
    garvcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    garvuser?: string;
    garvnamespace?: namespace | namespace[];
    garvstart?: timestamp;
    garvend?: timestamp;
    garvdir?: "newer" | "older";
    garvexcludeuser?: string;
    garvcontinue?: string;
    garvgeneratetitles?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alltransclusions}
 */
export interface ApiActionPurgeGeneratorQueryAllTransclusionsParams extends ApiActionPurgeParams {
    generator?: "alltransclusions";
    gatcontinue?: string;
    gatfrom?: string;
    gatto?: string;
    gatprefix?: string;
    gatunique?: boolean;
    gatprop?: OneOrMore<"ids" | "title">;
    gatnamespace?: namespace;
    gatlimit?: limit;
    gatdir?: "ascending" | "descending";
}

export interface ApiActionPurgeGeneratorAutomaticTranslationDenseLanguagesParams
    extends ApiActionPurgeParams {
    "generator"?: "automatictranslationdenselanguages";
    "gqid": string;
    "gsection-titles"?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Backlinks}
 */
export interface ApiActionPurgeGeneratorBacklinksParams extends ApiActionPurgeParams {
    generator?: "backlinks";
    gbltitle?: string;
    gblpageid?: number;
    gblcontinue?: string;
    gblnamespace?: namespace | namespace[];
    gbldir?: "ascending" | "descending";
    gblfilterredir?: "all" | "nonredirects" | "redirects";
    gbllimit?: limit;
    gblredirect?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categories}
 */
export interface ApiActionPurgeGeneratorCategoriesParams extends ApiActionPurgeParams {
    generator?: "categories";
    gclprop?: OneOrMore<"hidden" | "sortkey" | "timestamp">;
    gclshow?: OneOrMore<"!hidden" | "hidden">;
    gcllimit?: limit;
    gclcontinue?: string;
    gclcategories?: string | string[];
    gcldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categorymembers}
 */
export interface ApiActionPurgeGeneratorCategoryMembersParams extends ApiActionPurgeParams {
    generator?: "categorymembers";
    gcmtitle?: string;
    gcmpageid?: number;
    gcmprop?: OneOrMore<"ids" | "sortkey" | "sortkeyprefix" | "timestamp" | "title" | "type">;
    gcmnamespace?: namespace | namespace[];
    gcmtype?: OneOrMore<"file" | "page" | "subcat">;
    gcmcontinue?: string;
    gcmlimit?: limit;
    gcmsort?: "sortkey" | "timestamp";
    gcmdir?: "asc" | "ascending" | "desc" | "descending" | "newer" | "older";
    gcmstart?: timestamp;
    gcmend?: timestamp;
    gcmstarthexsortkey?: string;
    gcmendhexsortkey?: string;
    gcmstartsortkeyprefix?: string;
    gcmendsortkeyprefix?: string;
    /**
     * @deprecated
     */
    gcmstartsortkey?: string;
    /**
     * @deprecated
     */
    gcmendsortkey?: string;
}

export interface ApiActionPurgeGeneratorContentTranslationParams extends ApiActionPurgeParams {
    generator?: "contenttranslation";
    gtranslationid?: string;
    gfrom?: string;
    gto?: string;
    gsourcetitle?: string;
    gsourcesectiontitle?: string;
    glimit?: limit;
    goffset?: string;
    gtype?: "draft" | "published";
    gusecase?: "desktop-editor-draft" | "translation-corpora-units" | "unified-dashboard";
}

export interface ApiActionPurgeGeneratorContentTranslationSuggestionsParams
    extends ApiActionPurgeParams {
    generator?: "contenttranslationsuggestions";
    gfrom?: string;
    gto?: string;
    glistid?: string;
    glimit?: limit;
    goffset?: string;
    gseed?: number;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Deletedrevisions}
 */
export interface ApiActionPurgeGeneratorDeletedRevisionsParams extends ApiActionPurgeParams {
    generator?: "deletedrevisions";
    gdrvprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flags"
        | "ids"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    gdrvslots?: string | string[];
    [k: `gdrvcontentformat-${string}`]:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    gdrvlimit?: limit;
    /**
     * @deprecated
     */
    gdrvexpandtemplates?: boolean;
    /**
     * @deprecated
     */
    gdrvgeneratexml?: boolean;
    /**
     * @deprecated
     */
    gdrvparse?: boolean;
    gdrvsection?: string;
    /**
     * @deprecated
     */
    gdrvdiffto?: string;
    /**
     * @deprecated
     */
    gdrvdifftotext?: string;
    /**
     * @deprecated
     */
    gdrvdifftotextpst?: boolean;
    /**
     * @deprecated
     */
    gdrvcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    gdrvstart?: timestamp;
    gdrvend?: timestamp;
    gdrvdir?: "newer" | "older";
    gdrvtag?: string;
    gdrvuser?: string;
    gdrvexcludeuser?: string;
    gdrvcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Duplicatefiles}
 */
export interface ApiActionPurgeGeneratorDuplicateFilesParams extends ApiActionPurgeParams {
    generator?: "duplicatefiles";
    gdflimit?: limit;
    gdfcontinue?: string;
    gdfdir?: "ascending" | "descending";
    gdflocalonly?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Embeddedin}
 */
export interface ApiActionPurgeGeneratorQueryEmbeddedInParams extends ApiActionPurgeParams {
    generator?: "embeddedin";
    geititle?: string;
    geipageid?: number;
    geicontinue?: string;
    geinamespace?: namespace | namespace[];
    geidir?: "ascending" | "descending";
    geifilterredir?: "all" | "nonredirects" | "redirects";
    geilimit?: limit;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Exturlusage}
 */
export interface ApiActionPurgeGeneratorExturlusageParams extends ApiActionPurgeParams {
    generator?: "exturlusage";
    geuprop?: OneOrMore<"ids" | "title" | "url">;
    geucontinue?: string;
    geuprotocol?:
        | ""
        | "bitcoin"
        | "ftp"
        | "ftps"
        | "geo"
        | "git"
        | "gopher"
        | "http"
        | "https"
        | "irc"
        | "ircs"
        | "magnet"
        | "mailto"
        | "matrix"
        | "mms"
        | "news"
        | "nntp"
        | "redis"
        | "sftp"
        | "sip"
        | "sips"
        | "sms"
        | "ssh"
        | "svn"
        | "tel"
        | "telnet"
        | "urn"
        | "worldwind"
        | "xmpp";
    geuquery?: string;
    geunamespace?: namespace | namespace[];
    geulimit?: limit;
    /**
     * @deprecated
     */
    geuexpandurl?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Fileusage}
 */
export interface ApiActionPurgeGeneratorQueryFileUsageParams extends ApiActionPurgeParams {
    generator?: "fileusage";
    gfuprop?: OneOrMore<"pageid" | "redirect" | "title">;
    gfunamespace?: namespace | namespace[];
    gfushow?: OneOrMore<"!redirect" | "redirect">;
    gfulimit?: limit;
    gfucontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GeoData#list.3Dgeosearch}
 */
export interface ApiActionPurgeGeneratorGeoSearchParams extends ApiActionPurgeParams {
    generator?: "geosearch";
    ggscoord?: string;
    ggspage?: string;
    ggsbbox?: string;
    ggsradius?: number;
    ggsmaxdim?: number;
    ggssort?: "distance" | "relevance";
    ggslimit?: limit;
    ggsglobe?: "earth";
    ggsnamespace?: namespace | namespace[];
    ggsprop?: OneOrMore<"country" | "dim" | "globe" | "name" | "region" | "type">;
    ggsprimary?: "all" | "primary" | "secondary";
    ggsdebug?: boolean;
}

/**
 * @private
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GrowthExperiments#API}
 */
export interface ApiActionPurgeGeneratorGrowthTasksParams extends ApiActionPurgeParams {
    generator?: "growthtasks";
    ggttasktypes?: OneOrMore<"copyedit" | "expand" | "links" | "references" | "update">;
    ggttopics?: OneOrMore<
        | "africa"
        | "architecture"
        | "art"
        | "asia"
        | "biography"
        | "biology"
        | "business-and-economics"
        | "central-america"
        | "chemistry"
        | "comics-and-anime"
        | "computers-and-internet"
        | "earth-and-environment"
        | "education"
        | "engineering"
        | "entertainment"
        | "europe"
        | "fashion"
        | "food-and-drink"
        | "general-science"
        | "history"
        | "literature"
        | "mathematics"
        | "medicine-and-health"
        | "military-and-warfare"
        | "music"
        | "north-america"
        | "oceania"
        | "performing-arts"
        | "philosophy-and-religion"
        | "physics"
        | "politics-and-government"
        | "society"
        | "south-america"
        | "sports"
        | "technology"
        | "transportation"
        | "tv-and-film"
        | "video-games"
        | "women"
    >;
    ggttopicsmode?: "AND" | "OR";
    ggtlimit?: limit;
    ggtoffset?: number;
    ggtdebug?: boolean;
    ggtexcludepageids?: number | number[];
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Images}
 */
export interface ApiActionPurgeGeneratorImagesParams extends ApiActionPurgeParams {
    generator?: "images";
    gimlimit?: limit;
    gimcontinue?: string;
    gimimages?: string | string[];
    gimdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Imageusage}
 */
export interface ApiActionPurgeGeneratorQueryImageUsageParams extends ApiActionPurgeParams {
    generator?: "imageusage";
    giutitle?: string;
    giupageid?: number;
    giucontinue?: string;
    giunamespace?: namespace | namespace[];
    giudir?: "ascending" | "descending";
    giufilterredir?: "all" | "nonredirects" | "redirects";
    giulimit?: limit;
    giuredirect?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Iwbacklinks}
 */
export interface ApiActionPurgeGeneratorIWBacklinksParams extends ApiActionPurgeParams {
    generator?: "iwbacklinks";
    giwblprefix?: string;
    giwbltitle?: string;
    giwblcontinue?: string;
    giwbllimit?: limit;
    giwblprop?: OneOrMore<"iwprefix" | "iwtitle">;
    giwbldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Langbacklinks}
 */
export interface ApiActionPurgeGeneratorLangBacklinksParams extends ApiActionPurgeParams {
    generator?: "langbacklinks";
    glbllang?: string;
    glbltitle?: string;
    glblcontinue?: string;
    glbllimit?: limit;
    glblprop?: OneOrMore<"lllang" | "lltitle">;
    glbldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Links}
 */
export interface ApiActionPurgeGeneratorLinksParams extends ApiActionPurgeParams {
    generator?: "links";
    gplnamespace?: namespace | namespace[];
    gpllimit?: limit;
    gplcontinue?: string;
    gpltitles?: string | string[];
    gpldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Linkshere}
 */
export interface ApiActionPurgeGeneratorQueryLinksHereParams extends ApiActionPurgeParams {
    generator?: "linkshere";
    glhprop?: OneOrMore<"pageid" | "redirect" | "title">;
    glhnamespace?: namespace | namespace[];
    glhshow?: OneOrMore<"!redirect" | "redirect">;
    glhlimit?: limit;
    glhcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageViewInfo}
 */
export interface ApiActionPurgeGeneratorMostViewedParams extends ApiActionPurgeParams {
    generator?: "mostviewed";
    gpvimmetric?: "pageviews";
    gpvimlimit?: limit;
    gpvimoffset?: number;
}

export interface ApiActionPurgeGeneratorOldreviewedpagesParams extends ApiActionPurgeParams {
    generator?: "oldreviewedpages";
    gorstart?: timestamp;
    gorend?: timestamp;
    gordir?: "newer" | "older";
    gormaxsize?: number;
    gorfilterwatched?: "all" | "watched";
    gornamespace?: namespace | namespace[];
    gorcategory?: string;
    gorfilterredir?: "all" | "nonredirects" | "redirects";
    gorlimit?: limit;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Pageswithprop}
 */
export interface ApiActionPurgeGeneratorPagesWithPropParams extends ApiActionPurgeParams {
    generator?: "pageswithprop";
    gpwppropname: string;
    gpwpprop?: OneOrMore<"ids" | "title" | "value">;
    gpwpcontinue?: string;
    gpwplimit?: limit;
    gpwpdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Prefixsearch}
 */
export interface ApiActionPurgeGeneratorPrefixSearchParams extends ApiActionPurgeParams {
    generator?: "prefixsearch";
    gpssearch: string;
    gpsnamespace?: namespace | namespace[];
    gpslimit?: limit;
    gpsoffset?: number;
    gpsprofile?: "classic" | "engine_autoselect" | "fast-fuzzy" | "fuzzy" | "normal" | "strict";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageAssessments}
 */
export interface ApiActionPurgeGeneratorProjectPagesParams extends ApiActionPurgeParams {
    generator?: "projectpages";
    gwppassessments?: boolean;
    gwppprojects: string | string[];
    gwpplimit?: limit;
    gwppcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Protectedtitles}
 */
export interface ApiActionPurgeGeneratorProtectedTitlesParams extends ApiActionPurgeParams {
    generator?: "protectedtitles";
    gptnamespace?: namespace | namespace[];
    gptlevel?: OneOrMore<"autoconfirmed" | "extendedconfirmed" | "sysop" | "templateeditor">;
    gptlimit?: limit;
    gptdir?: "newer" | "older";
    gptstart?: timestamp;
    gptend?: timestamp;
    gptprop?: OneOrMore<
        "comment" | "expiry" | "level" | "parsedcomment" | "timestamp" | "user" | "userid"
    >;
    gptcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Querypage}
 */
export interface ApiActionPurgeGeneratorQueryPageParams extends ApiActionPurgeParams {
    generator?: "querypage";
    gqppage:
        | "Ancientpages"
        | "BrokenRedirects"
        | "Deadendpages"
        | "DisambiguationPageLinks"
        | "DisambiguationPages"
        | "DoubleRedirects"
        | "Fewestrevisions"
        | "GadgetUsage"
        | "GloballyWantedFiles"
        | "ListDuplicatedFiles"
        | "Listredirects"
        | "Lonelypages"
        | "Longpages"
        | "MediaStatistics"
        | "MostGloballyLinkedFiles"
        | "Mostcategories"
        | "Mostimages"
        | "Mostinterwikis"
        | "Mostlinked"
        | "Mostlinkedcategories"
        | "Mostlinkedtemplates"
        | "Mostrevisions"
        | "OrphanedTimedText"
        | "Shortpages"
        | "Uncategorizedcategories"
        | "Uncategorizedimages"
        | "Uncategorizedpages"
        | "Uncategorizedtemplates"
        | "UnconnectedPages"
        | "Unusedcategories"
        | "Unusedimages"
        | "Unusedtemplates"
        | "Unwatchedpages"
        | "Wantedcategories"
        | "Wantedfiles"
        | "Wantedpages"
        | "Wantedtemplates"
        | "Withoutinterwiki";
    gqpoffset?: number;
    gqplimit?: limit;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Random}
 */
export interface ApiActionPurgeGeneratorRandomParams extends ApiActionPurgeParams {
    generator?: "random";
    grnnamespace?: namespace | namespace[];
    grnfilterredir?: "all" | "nonredirects" | "redirects";
    /**
     * @deprecated
     */
    grnredirect?: boolean;
    grnlimit?: limit;
    grncontinue?: string;
}

/**
 * @private
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API}
 */
export interface ApiActionPurgeGeneratorReadingListEntriesParams extends ApiActionPurgeParams {
    generator?: "readinglistentries";
    grlelists?: number | number[];
    grlechangedsince?: timestamp;
    grlesort?: "name" | "updated";
    grledir?: "ascending" | "descending";
    grlelimit?: limit;
    grlecontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Recentchanges}
 */
export interface ApiActionPurgeGeneratorRecentChangesParams extends ApiActionPurgeParams {
    generator?: "recentchanges";
    grcstart?: timestamp;
    grcend?: timestamp;
    grcdir?: "newer" | "older";
    grcnamespace?: namespace | namespace[];
    grcuser?: string;
    grcexcludeuser?: string;
    grctag?: string;
    grcprop?: OneOrMore<
        | "comment"
        | "flags"
        | "ids"
        | "loginfo"
        | "oresscores"
        | "parsedcomment"
        | "patrolled"
        | "redirect"
        | "sha1"
        | "sizes"
        | "tags"
        | "timestamp"
        | "title"
        | "user"
        | "userid"
    >;
    grcshow?: OneOrMore<
        | "!anon"
        | "!autopatrolled"
        | "!bot"
        | "!minor"
        | "!oresreview"
        | "!patrolled"
        | "!redirect"
        | "anon"
        | "autopatrolled"
        | "bot"
        | "minor"
        | "oresreview"
        | "patrolled"
        | "redirect"
        | "unpatrolled"
    >;
    grclimit?: limit;
    grctype?: OneOrMore<"categorize" | "edit" | "external" | "log" | "new">;
    grctoponly?: boolean;
    grctitle?: string;
    grccontinue?: string;
    grcgeneraterevisions?: boolean;
    grcslot?: "main";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Redirects}
 */
export interface ApiActionPurgeGeneratorQueryRedirectsParams extends ApiActionPurgeParams {
    generator?: "redirects";
    grdprop?: OneOrMore<"fragment" | "pageid" | "title">;
    grdnamespace?: namespace | namespace[];
    grdshow?: OneOrMore<"!fragment" | "fragment">;
    grdlimit?: limit;
    grdcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Revisions}
 */
export interface ApiActionPurgeGeneratorRevisionsParams extends ApiActionPurgeParams {
    generator?: "revisions";
    grvprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flagged"
        | "flags"
        | "ids"
        | "oresscores"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    grvslots?: string | string[];
    [k: `grvcontentformat-${string}`]:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    grvlimit?: limit;
    /**
     * @deprecated
     */
    grvexpandtemplates?: boolean;
    /**
     * @deprecated
     */
    grvgeneratexml?: boolean;
    /**
     * @deprecated
     */
    grvparse?: boolean;
    grvsection?: string;
    /**
     * @deprecated
     */
    grvdiffto?: string;
    /**
     * @deprecated
     */
    grvdifftotext?: string;
    /**
     * @deprecated
     */
    grvdifftotextpst?: boolean;
    /**
     * @deprecated
     */
    grvcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    grvstartid?: number;
    grvendid?: number;
    grvstart?: timestamp;
    grvend?: timestamp;
    grvdir?: "newer" | "older";
    grvuser?: string;
    grvexcludeuser?: string;
    grvtag?: string;
    grvcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Search}
 */
export interface ApiActionPurgeGeneratorSearchParams extends ApiActionPurgeParams {
    generator?: "search";
    gsrsearch: string;
    gsrnamespace?: namespace | namespace[];
    gsrlimit?: limit;
    gsroffset?: number;
    gsrqiprofile?:
        | "classic"
        | "classic_noboostlinks"
        | "empty"
        | "engine_autoselect"
        | "growth_underlinked"
        | "mlr-1024rs"
        | "popular_inclinks"
        | "popular_inclinks_pv"
        | "wsum_inclinks"
        | "wsum_inclinks_pv";
    gsrwhat?: "nearmatch" | "text" | "title";
    gsrinfo?: OneOrMore<"rewrittenquery" | "suggestion" | "totalhits">;
    gsrprop?: OneOrMore<
        | "categorysnippet"
        | "extensiondata"
        | "isfilematch"
        | "redirectsnippet"
        | "redirecttitle"
        | "sectionsnippet"
        | "sectiontitle"
        | "size"
        | "snippet"
        | "timestamp"
        | "titlesnippet"
        | "wordcount"
        | "hasrelated"
        | "score"
    >;
    gsrinterwiki?: boolean;
    gsrenablerewrites?: boolean;
    gsrsort?:
        | "create_timestamp_asc"
        | "create_timestamp_desc"
        | "incoming_links_asc"
        | "incoming_links_desc"
        | "just_match"
        | "last_edit_asc"
        | "last_edit_desc"
        | "none"
        | "random"
        | "relevance"
        | "user_random";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Templates}
 */
export interface ApiActionPurgeGeneratorQueryTemplatesParams extends ApiActionPurgeParams {
    generator?: "templates";
    gtlnamespace?: namespace | namespace[];
    gtllimit?: limit;
    gtlcontinue?: string;
    gtltemplates?: string | string[];
    gtldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Transcludedin}
 */
export interface ApiActionPurgeGeneratorQueryTranscludedInParams extends ApiActionPurgeParams {
    generator?: "transcludedin";
    gtiprop?: OneOrMore<"pageid" | "redirect" | "title">;
    gtinamespace?: namespace | namespace[];
    gtishow?: OneOrMore<"!redirect" | "redirect">;
    gtilimit?: limit;
    gticontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlist}
 */
export interface ApiActionPurgeGeneratorWatchlistParams extends ApiActionPurgeParams {
    generator?: "watchlist";
    gwlallrev?: boolean;
    gwlstart?: timestamp;
    gwlend?: timestamp;
    gwlnamespace?: namespace | namespace[];
    gwluser?: string;
    gwlexcludeuser?: string;
    gwldir?: "newer" | "older";
    gwllimit?: limit;
    gwlprop?: OneOrMore<
        | "comment"
        | "expiry"
        | "flags"
        | "ids"
        | "loginfo"
        | "notificationtimestamp"
        | "oresscores"
        | "parsedcomment"
        | "patrol"
        | "sizes"
        | "tags"
        | "timestamp"
        | "title"
        | "user"
        | "userid"
    >;
    gwlshow?: OneOrMore<
        | "!anon"
        | "!autopatrolled"
        | "!bot"
        | "!minor"
        | "!oresreview"
        | "!patrolled"
        | "!unread"
        | "anon"
        | "autopatrolled"
        | "bot"
        | "minor"
        | "oresreview"
        | "patrolled"
        | "unread"
    >;
    gwltype?: OneOrMore<"categorize" | "edit" | "external" | "log" | "new">;
    gwlowner?: string;
    gwltoken?: string;
    gwlcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlistraw}
 */
export interface ApiActionPurgeGeneratorWatchlistRawParams extends ApiActionPurgeParams {
    generator?: "watchlistraw";
    gwrcontinue?: string;
    gwrnamespace?: namespace | namespace[];
    gwrlimit?: limit;
    gwrprop?: OneOrMore<"changed">;
    gwrshow?: OneOrMore<"!changed" | "changed">;
    gwrowner?: string;
    gwrtoken?: string;
    gwrdir?: "ascending" | "descending";
    gwrfromtitle?: string;
    gwrtotitle?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Wikibase/API}
 */
export interface ApiActionPurgeGeneratorWblistentityusageParams extends ApiActionPurgeParams {
    generator?: "wblistentityusage";
    gwbleuprop?: OneOrMore<"url">;
    gwbleuaspect?: OneOrMore<"C" | "D" | "L" | "O" | "S" | "T" | "X">;
    gwbleuentities: string | string[];
    gwbleulimit?: limit;
    gwbleucontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Query}
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Meta}
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Properties}
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Lists}
 */
export interface ApiActionQueryParams extends ApiParams {
    action?: "query";
    prop?: OneOrMore<ApiActionQueryParamsProp>;
    list?: OneOrMore<ApiActionQueryParamsList>;
    meta?: OneOrMore<ApiActionQueryParamsMeta>;
    indexpageids?: boolean;
    export?: boolean;
    exportnowrap?: boolean;
    exportschema?: "0.10" | "0.11";
    iwurl?: boolean;
    continue?: string;
    rawcontinue?: boolean;
    titles?: string | string[];
    pageids?: number | number[];
    revids?: number | number[];
    generator?: ApiActionQueryParamsGenerator;
    redirects?: boolean;
    converttitles?: boolean;
}

type ApiActionQueryParamsProp = keyof ApiActionQueryParamsPropMap;

interface ApiActionQueryParamsPropMap {
    categories: ApiActionQueryPropCategoriesParams;
    categoryinfo: ApiActionQueryPropCategoryInfoParams;
    cirrusbuilddoc: ApiActionQueryPropCirrusBuildDocParams;
    cirruscompsuggestbuilddoc: ApiActionQueryPropCirrusCompSuggestBuildDocParams;
    cirrusdoc: ApiActionQueryPropCirrusDocParams;
    contributors: ApiActionQueryPropContributorsParams;
    coordinates: ApiActionQueryPropCoordinatesParams;
    deletedrevisions: ApiActionQueryPropDeletedRevisionsParams;
    description: ApiActionQueryPropDescriptionParams;
    duplicatefiles: ApiActionQueryPropDuplicateFilesParams;
    extlinks: ApiActionQueryPropExtlinksParams;
    extracts: ApiActionQueryPropExtractsParams;
    fileusage: ApiActionQueryPropQueryFileUsageParams;
    flagged: ApiActionQueryPropFlaggedParams;
    globalusage: ApiActionQueryPropGlobalUsageParams;
    growthimagesuggestiondata: ApiActionQueryPropGrowthImageSuggestionDataParams;
    imageinfo: ApiActionQueryPropImageInfoParams;
    images: ApiActionQueryPropImagesParams;
    info: ApiActionQueryPropInfoParams;
    isreviewed: ApiActionQueryPropIsReviewedParams;
    iwlinks: ApiActionQueryPropIWLinksParams;
    langlinks: ApiActionQueryPropLangLinksParams;
    langlinkscount: ApiActionQueryPropLangLinksCountParams;
    links: ApiActionQueryPropLinksParams;
    linkshere: ApiActionQueryPropQueryLinksHereParams;
    mapdata: ApiActionQueryPropMapDataParams;
    mmcontent: ApiActionQueryPropMMContentParams;
    pageassessments: ApiActionQueryPropPageAssessmentsParams;
    pageimages: ApiActionQueryPropPageImagesParams;
    pageprops: ApiActionQueryPropPagePropsParams;
    pageterms: ApiActionQueryPropPageTermsParams;
    pageviews: ApiActionQueryPropPageViewsParams;
    redirects: ApiActionQueryPropQueryRedirectsParams;
    revisions: ApiActionQueryPropRevisionsParams;
    stashimageinfo: ApiActionQueryPropStashImageInfoParams;
    templates: ApiActionQueryPropQueryTemplatesParams;
    transcludedin: ApiActionQueryPropQueryTranscludedInParams;
    transcodestatus: ApiActionQueryPropTranscodeStatusParams;
    videoinfo: ApiActionQueryPropVideoInfoParams;
    wbentityusage: ApiActionQueryPropWbentityusageParams;
}

type ApiActionQueryParamsList = keyof ApiActionQueryParamsListMap;

interface ApiActionQueryParamsListMap {
    abusefilters: ApiActionQueryListAbuseFiltersParams;
    abuselog: ApiActionQueryListAbuseLogParams;
    allcategories: ApiActionQueryListAllCategoriesParams;
    alldeletedrevisions: ApiActionQueryListAllDeletedRevisionsParams;
    allfileusages: ApiActionQueryListQueryAllFileUsagesParams;
    allimages: ApiActionQueryListAllImagesParams;
    alllinks: ApiActionQueryListAllLinksParams;
    allpages: ApiActionQueryListAllPagesParams;
    allredirects: ApiActionQueryListQueryAllRedirectsParams;
    allrevisions: ApiActionQueryListAllRevisionsParams;
    alltransclusions: ApiActionQueryListQueryAllTransclusionsParams;
    allusers: ApiActionQueryListAllUsersParams;
    automatictranslationdenselanguages: ApiActionQueryListAutomaticTranslationDenseLanguagesParams;
    backlinks: ApiActionQueryListBacklinksParams;
    betafeatures: ApiActionQueryListBetaFeaturesParams;
    blocks: ApiActionQueryListBlocksParams;
    categorymembers: ApiActionQueryListCategoryMembersParams;
    centralnoticeactivecampaigns: ApiActionQueryListCentralNoticeActiveCampaignsParams;
    centralnoticelogs: ApiActionQueryListCentralNoticeLogsParams;
    checkuser: ApiActionQueryListCheckUserParams;
    checkuserlog: ApiActionQueryListCheckUserLogParams;
    contenttranslation: ApiActionQueryListContentTranslationParams;
    contenttranslationcorpora: ApiActionQueryListContentTranslationCorporaParams;
    contenttranslationlangtrend: ApiActionQueryListContenttranslationlangtrendParams;
    contenttranslationstats: ApiActionQueryListContentTranslationStatsParams;
    contenttranslationsuggestions: ApiActionQueryListContentTranslationSuggestionsParams;
    cxpublishedtranslations: ApiActionQueryListCxpublishedtranslationsParams;
    cxtranslatorstats: ApiActionQueryListCxtranslatorstatsParams;
    deletedrevs: ApiActionQueryListDeletedrevsParams;
    embeddedin: ApiActionQueryListQueryEmbeddedInParams;
    exturlusage: ApiActionQueryListExturlusageParams;
    filearchive: ApiActionQueryListFilearchiveParams;
    gadgetcategories: ApiActionQueryListGadgetCategoriesParams;
    gadgets: ApiActionQueryListGadgetsParams;
    geosearch: ApiActionQueryListGeoSearchParams;
    globalallusers: ApiActionQueryListGlobalAllUsersParams;
    globalblocks: ApiActionQueryListGlobalBlocksParams;
    globalgroups: ApiActionQueryListGlobalGroupsParams;
    growthmentorlist: ApiActionQueryListGrowthMentorListParams;
    growthmentormentee: ApiActionQueryListGrowthMentorMenteeParams;
    growthstarredmentees: ApiActionQueryListGrowthStarredMenteesParams;
    growthtasks: ApiActionQueryListGrowthTasksParams;
    imageusage: ApiActionQueryListQueryImageUsageParams;
    iwbacklinks: ApiActionQueryListIWBacklinksParams;
    langbacklinks: ApiActionQueryListLangBacklinksParams;
    linterrors: ApiActionQueryListLinterrorsParams;
    logevents: ApiActionQueryListLogEventsParams;
    mostviewed: ApiActionQueryListMostViewedParams;
    mystashedfiles: ApiActionQueryListMyStashedFilesParams;
    oldreviewedpages: ApiActionQueryListOldreviewedpagesParams;
    pagepropnames: ApiActionQueryListPagePropNamesParams;
    pageswithprop: ApiActionQueryListPagesWithPropParams;
    prefixsearch: ApiActionQueryListPrefixSearchParams;
    projectpages: ApiActionQueryListProjectPagesParams;
    projects: ApiActionQueryListProjectsParams;
    protectedtitles: ApiActionQueryListProtectedTitlesParams;
    querypage: ApiActionQueryListQueryPageParams;
    random: ApiActionQueryListRandomParams;
    readinglistentries: ApiActionQueryListReadingListEntriesParams;
    recentchanges: ApiActionQueryListRecentChangesParams;
    search: ApiActionQueryListSearchParams;
    tags: ApiActionQueryListTagsParams;
    usercontribs: ApiActionQueryListUserContribsParams;
    users: ApiActionQueryListUsersParams;
    watchlist: ApiActionQueryListWatchlistParams;
    watchlistraw: ApiActionQueryListWatchlistRawParams;
    wblistentityusage: ApiActionQueryListWblistentityusageParams;
    wikisets: ApiActionQueryListWikiSetsParams;
}

type ApiActionQueryParamsMeta = keyof ApiActionQueryParamsMetaMap;

interface ApiActionQueryParamsMetaMap {
    allmessages: ApiActionQueryMetaAllMessagesParams;
    authmanagerinfo: ApiActionQueryMetaAuthManagerInfoParams;
    babel: ApiActionQueryMetaBabelParams;
    communityconfiguration: ApiActionQueryMetaCommunityConfigurationParams;
    cxdeletedtranslations: ApiActionQueryMetaCxdeletedtranslationsParams;
    featureusage: ApiActionQueryMetaFeatureUsageParams;
    filerepoinfo: ApiActionQueryMetaFileRepoInfoParams;
    globalpreferences: ApiActionQueryMetaGlobalPreferencesParams;
    globalrenamestatus: ApiActionQueryMetaGlobalRenameStatusParams;
    globaluserinfo: ApiActionQueryMetaGlobalUserInfoParams;
    growthmenteestatus: ApiActionQueryMetaGrowthMenteeStatusParams;
    growthmentorstatus: ApiActionQueryMetaGrowthMentorStatusParams;
    growthnextsuggestedtasktype: ApiActionQueryMetaGrowthNextSuggestedTaskTypeParams;
    languageinfo: ApiActionQueryMetaLanguageinfoParams;
    linterstats: ApiActionQueryMetaLinterStatsParams;
    notifications: ApiActionQueryMetaNotificationsParams;
    oath: ApiActionQueryMetaOATHParams;
    ores: ApiActionQueryMetaORESParams;
    readinglists: ApiActionQueryMetaReadingListsParams;
    siteinfo: ApiActionQueryMetaSiteinfoParams;
    siteviews: ApiActionQueryMetaSiteViewsParams;
    tokens: ApiActionQueryMetaTokensParams;
    unreadnotificationpages: ApiActionQueryMetaUnreadNotificationPagesParams;
    userinfo: ApiActionQueryMetaUserInfoParams;
    wikibase: ApiActionQueryMetaWikibaseParams;
}

type ApiActionQueryParamsGenerator = keyof ApiActionQueryParamsGeneratorMap;

interface ApiActionQueryParamsGeneratorMap {
    allcategories: ApiActionQueryGeneratorAllCategoriesParams;
    alldeletedrevisions: ApiActionQueryGeneratorAllDeletedRevisionsParams;
    allfileusages: ApiActionQueryGeneratorQueryAllFileUsagesParams;
    allimages: ApiActionQueryGeneratorAllImagesParams;
    alllinks: ApiActionQueryGeneratorAllLinksParams;
    allpages: ApiActionQueryGeneratorAllPagesParams;
    allredirects: ApiActionQueryGeneratorQueryAllRedirectsParams;
    allrevisions: ApiActionQueryGeneratorAllRevisionsParams;
    alltransclusions: ApiActionQueryGeneratorQueryAllTransclusionsParams;
    automatictranslationdenselanguages: ApiActionQueryGeneratorAutomaticTranslationDenseLanguagesParams;
    backlinks: ApiActionQueryGeneratorBacklinksParams;
    categories: ApiActionQueryGeneratorCategoriesParams;
    categorymembers: ApiActionQueryGeneratorCategoryMembersParams;
    contenttranslation: ApiActionQueryGeneratorContentTranslationParams;
    contenttranslationsuggestions: ApiActionQueryGeneratorContentTranslationSuggestionsParams;
    deletedrevisions: ApiActionQueryGeneratorDeletedRevisionsParams;
    duplicatefiles: ApiActionQueryGeneratorDuplicateFilesParams;
    embeddedin: ApiActionQueryGeneratorQueryEmbeddedInParams;
    exturlusage: ApiActionQueryGeneratorExturlusageParams;
    fileusage: ApiActionQueryGeneratorQueryFileUsageParams;
    geosearch: ApiActionQueryGeneratorGeoSearchParams;
    growthtasks: ApiActionQueryGeneratorGrowthTasksParams;
    images: ApiActionQueryGeneratorImagesParams;
    imageusage: ApiActionQueryGeneratorQueryImageUsageParams;
    iwbacklinks: ApiActionQueryGeneratorIWBacklinksParams;
    langbacklinks: ApiActionQueryGeneratorLangBacklinksParams;
    links: ApiActionQueryGeneratorLinksParams;
    linkshere: ApiActionQueryGeneratorQueryLinksHereParams;
    mostviewed: ApiActionQueryGeneratorMostViewedParams;
    oldreviewedpages: ApiActionQueryGeneratorOldreviewedpagesParams;
    pageswithprop: ApiActionQueryGeneratorPagesWithPropParams;
    prefixsearch: ApiActionQueryGeneratorPrefixSearchParams;
    projectpages: ApiActionQueryGeneratorProjectPagesParams;
    protectedtitles: ApiActionQueryGeneratorProtectedTitlesParams;
    querypage: ApiActionQueryGeneratorQueryPageParams;
    random: ApiActionQueryGeneratorRandomParams;
    readinglistentries: ApiActionQueryGeneratorReadingListEntriesParams;
    recentchanges: ApiActionQueryGeneratorRecentChangesParams;
    redirects: ApiActionQueryGeneratorQueryRedirectsParams;
    revisions: ApiActionQueryGeneratorRevisionsParams;
    search: ApiActionQueryGeneratorSearchParams;
    templates: ApiActionQueryGeneratorQueryTemplatesParams;
    transcludedin: ApiActionQueryGeneratorQueryTranscludedInParams;
    watchlist: ApiActionQueryGeneratorWatchlistParams;
    watchlistraw: ApiActionQueryGeneratorWatchlistRawParams;
    wblistentityusage: ApiActionQueryGeneratorWblistentityusageParams;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categories}
 */
export interface ApiActionQueryPropCategoriesParams extends ApiActionQueryParams {
    clprop?: OneOrMore<"hidden" | "sortkey" | "timestamp">;
    clshow?: OneOrMore<"!hidden" | "hidden">;
    cllimit?: limit;
    clcontinue?: string;
    clcategories?: string | string[];
    cldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categoryinfo}
 */
export interface ApiActionQueryPropCategoryInfoParams extends ApiActionQueryParams {
    cicontinue?: string;
}

export interface ApiActionQueryPropCirrusBuildDocParams extends ApiActionQueryParams {
    cbbuilders?: OneOrMore<"content" | "links">;
    cblimiterprofile?: string;
}

export interface ApiActionQueryPropCirrusCompSuggestBuildDocParams extends ApiActionQueryParams {
    csbmethod?: string;
}

export interface ApiActionQueryPropCirrusDocParams extends ApiActionQueryParams {
    cdincludes?: string | string[];
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Contributors}
 */
export interface ApiActionQueryPropContributorsParams extends ApiActionQueryParams {
    pcgroup?: OneOrMore<
        | "abusefilter"
        | "abusefilter-helper"
        | "accountcreator"
        | "autoreviewer"
        | "bot"
        | "bureaucrat"
        | "checkuser"
        | "checkuser-temporary-account-viewer"
        | "confirmed"
        | "copyviobot"
        | "eventcoordinator"
        | "extendedconfirmed"
        | "extendedmover"
        | "filemover"
        | "founder"
        | "import"
        | "interface-admin"
        | "ipblock-exempt"
        | "massmessage-sender"
        | "no-ipinfo"
        | "patroller"
        | "push-subscription-manager"
        | "researcher"
        | "reviewer"
        | "rollbacker"
        | "steward"
        | "suppress"
        | "sysop"
        | "templateeditor"
        | "transwiki"
    >;
    pcexcludegroup?: OneOrMore<
        | "abusefilter"
        | "abusefilter-helper"
        | "accountcreator"
        | "autoreviewer"
        | "bot"
        | "bureaucrat"
        | "checkuser"
        | "checkuser-temporary-account-viewer"
        | "confirmed"
        | "copyviobot"
        | "eventcoordinator"
        | "extendedconfirmed"
        | "extendedmover"
        | "filemover"
        | "founder"
        | "import"
        | "interface-admin"
        | "ipblock-exempt"
        | "massmessage-sender"
        | "no-ipinfo"
        | "patroller"
        | "push-subscription-manager"
        | "researcher"
        | "reviewer"
        | "rollbacker"
        | "steward"
        | "suppress"
        | "sysop"
        | "templateeditor"
        | "transwiki"
    >;
    pcrights?: OneOrMore<
        | "abusefilter-access-protected-vars"
        | "abusefilter-bypass-blocked-external-domains"
        | "abusefilter-hidden-log"
        | "abusefilter-hide-log"
        | "abusefilter-log"
        | "abusefilter-log-detail"
        | "abusefilter-log-private"
        | "abusefilter-modify"
        | "abusefilter-modify-blocked-external-domains"
        | "abusefilter-modify-global"
        | "abusefilter-modify-restricted"
        | "abusefilter-privatedetails"
        | "abusefilter-privatedetails-log"
        | "abusefilter-revert"
        | "abusefilter-view"
        | "abusefilter-view-private"
        | "apihighlimits"
        | "applychangetags"
        | "autoconfirmed"
        | "autocreateaccount"
        | "autopatrol"
        | "autoreview"
        | "autoreviewrestore"
        | "bigdelete"
        | "block"
        | "blockemail"
        | "bot"
        | "browsearchive"
        | "centralauth-createlocal"
        | "centralauth-lock"
        | "centralauth-merge"
        | "centralauth-rename"
        | "centralauth-suppress"
        | "centralauth-unmerge"
        | "changetags"
        | "checkuser"
        | "checkuser-log"
        | "checkuser-temporary-account"
        | "checkuser-temporary-account-log"
        | "checkuser-temporary-account-no-preference"
        | "collectionsaveascommunitypage"
        | "collectionsaveasuserpage"
        | "createaccount"
        | "createpage"
        | "createpagemainns"
        | "createtalk"
        | "delete"
        | "delete-redirect"
        | "deletechangetags"
        | "deletedhistory"
        | "deletedtext"
        | "deletelogentry"
        | "deleterevision"
        | "echo-create"
        | "edit"
        | "editautopatrolprotected"
        | "editautoreviewprotected"
        | "editcontentmodel"
        | "editeditorprotected"
        | "editextendedsemiprotected"
        | "editinterface"
        | "editmyoptions"
        | "editmyprivateinfo"
        | "editmyusercss"
        | "editmyuserjs"
        | "editmyuserjson"
        | "editmyuserjsredirect"
        | "editmywatchlist"
        | "editprotected"
        | "editsemiprotected"
        | "editsitecss"
        | "editsitejs"
        | "editsitejson"
        | "edittrustedprotected"
        | "editusercss"
        | "edituserjs"
        | "edituserjson"
        | "enrollasmentor"
        | "extendedconfirmed"
        | "flow-create-board"
        | "flow-delete"
        | "flow-edit-post"
        | "flow-hide"
        | "flow-suppress"
        | "globalblock"
        | "globalblock-exempt"
        | "globalblock-whitelist"
        | "globalgroupmembership"
        | "globalgrouppermissions"
        | "hideuser"
        | "import"
        | "importupload"
        | "ipblock-exempt"
        | "ipinfo"
        | "ipinfo-view-basic"
        | "ipinfo-view-full"
        | "ipinfo-view-log"
        | "manage-all-push-subscriptions"
        | "managechangetags"
        | "managementors"
        | "markbotedits"
        | "massmessage"
        | "mergehistory"
        | "minoredit"
        | "move"
        | "move-categorypages"
        | "move-rootuserpages"
        | "move-subpages"
        | "movefile"
        | "movestable"
        | "mwoauthmanageconsumer"
        | "mwoauthmanagemygrants"
        | "mwoauthproposeconsumer"
        | "mwoauthsuppress"
        | "mwoauthupdateownconsumer"
        | "mwoauthviewprivate"
        | "mwoauthviewsuppressed"
        | "newsletter-create"
        | "newsletter-delete"
        | "newsletter-manage"
        | "newsletter-restore"
        | "nominornewtalk"
        | "noratelimit"
        | "nuke"
        | "oathauth-api-all"
        | "oathauth-disable-for-user"
        | "oathauth-enable"
        | "oathauth-verify-user"
        | "oathauth-view-log"
        | "override-antispoof"
        | "override-export-depth"
        | "pagelang"
        | "pagetriage-copyvio"
        | "patrol"
        | "patrolmarks"
        | "protect"
        | "read"
        | "renameuser"
        | "reupload"
        | "reupload-own"
        | "reupload-shared"
        | "review"
        | "rollback"
        | "sboverride"
        | "securepoll-create-poll"
        | "securepoll-view-voter-pii"
        | "sendemail"
        | "setmentor"
        | "sfsblock-bypass"
        | "siteadmin"
        | "skipcaptcha"
        | "spamblacklistlog"
        | "stablesettings"
        | "suppressionlog"
        | "suppressredirect"
        | "suppressrevision"
        | "tboverride"
        | "tboverride-account"
        | "templateeditor"
        | "titleblacklistlog"
        | "torunblocked"
        | "transcode-reset"
        | "transcode-status"
        | "unblockself"
        | "undelete"
        | "unreviewedpages"
        | "unwatchedpages"
        | "upload"
        | "upload_by_url"
        | "urlshortener-create-url"
        | "urlshortener-manage-url"
        | "urlshortener-view-log"
        | "userrights"
        | "userrights-interwiki"
        | "validate"
        | "viewdeletedfile"
        | "viewmyprivateinfo"
        | "viewmywatchlist"
        | "viewsuppressed"
        | "vipsscaler-test"
    >;
    pcexcluderights?: OneOrMore<
        | "abusefilter-access-protected-vars"
        | "abusefilter-bypass-blocked-external-domains"
        | "abusefilter-hidden-log"
        | "abusefilter-hide-log"
        | "abusefilter-log"
        | "abusefilter-log-detail"
        | "abusefilter-log-private"
        | "abusefilter-modify"
        | "abusefilter-modify-blocked-external-domains"
        | "abusefilter-modify-global"
        | "abusefilter-modify-restricted"
        | "abusefilter-privatedetails"
        | "abusefilter-privatedetails-log"
        | "abusefilter-revert"
        | "abusefilter-view"
        | "abusefilter-view-private"
        | "apihighlimits"
        | "applychangetags"
        | "autoconfirmed"
        | "autocreateaccount"
        | "autopatrol"
        | "autoreview"
        | "autoreviewrestore"
        | "bigdelete"
        | "block"
        | "blockemail"
        | "bot"
        | "browsearchive"
        | "centralauth-createlocal"
        | "centralauth-lock"
        | "centralauth-merge"
        | "centralauth-rename"
        | "centralauth-suppress"
        | "centralauth-unmerge"
        | "changetags"
        | "checkuser"
        | "checkuser-log"
        | "checkuser-temporary-account"
        | "checkuser-temporary-account-log"
        | "checkuser-temporary-account-no-preference"
        | "collectionsaveascommunitypage"
        | "collectionsaveasuserpage"
        | "createaccount"
        | "createpage"
        | "createpagemainns"
        | "createtalk"
        | "delete"
        | "delete-redirect"
        | "deletechangetags"
        | "deletedhistory"
        | "deletedtext"
        | "deletelogentry"
        | "deleterevision"
        | "echo-create"
        | "edit"
        | "editautopatrolprotected"
        | "editautoreviewprotected"
        | "editcontentmodel"
        | "editeditorprotected"
        | "editextendedsemiprotected"
        | "editinterface"
        | "editmyoptions"
        | "editmyprivateinfo"
        | "editmyusercss"
        | "editmyuserjs"
        | "editmyuserjson"
        | "editmyuserjsredirect"
        | "editmywatchlist"
        | "editprotected"
        | "editsemiprotected"
        | "editsitecss"
        | "editsitejs"
        | "editsitejson"
        | "edittrustedprotected"
        | "editusercss"
        | "edituserjs"
        | "edituserjson"
        | "enrollasmentor"
        | "extendedconfirmed"
        | "flow-create-board"
        | "flow-delete"
        | "flow-edit-post"
        | "flow-hide"
        | "flow-suppress"
        | "globalblock"
        | "globalblock-exempt"
        | "globalblock-whitelist"
        | "globalgroupmembership"
        | "globalgrouppermissions"
        | "hideuser"
        | "import"
        | "importupload"
        | "ipblock-exempt"
        | "ipinfo"
        | "ipinfo-view-basic"
        | "ipinfo-view-full"
        | "ipinfo-view-log"
        | "manage-all-push-subscriptions"
        | "managechangetags"
        | "managementors"
        | "markbotedits"
        | "massmessage"
        | "mergehistory"
        | "minoredit"
        | "move"
        | "move-categorypages"
        | "move-rootuserpages"
        | "move-subpages"
        | "movefile"
        | "movestable"
        | "mwoauthmanageconsumer"
        | "mwoauthmanagemygrants"
        | "mwoauthproposeconsumer"
        | "mwoauthsuppress"
        | "mwoauthupdateownconsumer"
        | "mwoauthviewprivate"
        | "mwoauthviewsuppressed"
        | "newsletter-create"
        | "newsletter-delete"
        | "newsletter-manage"
        | "newsletter-restore"
        | "nominornewtalk"
        | "noratelimit"
        | "nuke"
        | "oathauth-api-all"
        | "oathauth-disable-for-user"
        | "oathauth-enable"
        | "oathauth-verify-user"
        | "oathauth-view-log"
        | "override-antispoof"
        | "override-export-depth"
        | "pagelang"
        | "pagetriage-copyvio"
        | "patrol"
        | "patrolmarks"
        | "protect"
        | "read"
        | "renameuser"
        | "reupload"
        | "reupload-own"
        | "reupload-shared"
        | "review"
        | "rollback"
        | "sboverride"
        | "securepoll-create-poll"
        | "securepoll-view-voter-pii"
        | "sendemail"
        | "setmentor"
        | "sfsblock-bypass"
        | "siteadmin"
        | "skipcaptcha"
        | "spamblacklistlog"
        | "stablesettings"
        | "suppressionlog"
        | "suppressredirect"
        | "suppressrevision"
        | "tboverride"
        | "tboverride-account"
        | "templateeditor"
        | "titleblacklistlog"
        | "torunblocked"
        | "transcode-reset"
        | "transcode-status"
        | "unblockself"
        | "undelete"
        | "unreviewedpages"
        | "unwatchedpages"
        | "upload"
        | "upload_by_url"
        | "urlshortener-create-url"
        | "urlshortener-manage-url"
        | "urlshortener-view-log"
        | "userrights"
        | "userrights-interwiki"
        | "validate"
        | "viewdeletedfile"
        | "viewmyprivateinfo"
        | "viewmywatchlist"
        | "viewsuppressed"
        | "vipsscaler-test"
    >;
    pclimit?: limit;
    pccontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GeoData#prop.3Dcoordinates}
 */
export interface ApiActionQueryPropCoordinatesParams extends ApiActionQueryParams {
    colimit?: limit;
    cocontinue?: string;
    coprop?: OneOrMore<"country" | "dim" | "globe" | "name" | "region" | "type">;
    coprimary?: "all" | "primary" | "secondary";
    codistancefrompoint?: string;
    codistancefrompage?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Deletedrevisions}
 */
export interface ApiActionQueryPropDeletedRevisionsParams extends ApiActionQueryParams {
    drvprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flags"
        | "ids"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    drvslots?: string | string[];
    [k: `drvcontentformat-${string}`]:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    drvlimit?: limit;
    /**
     * @deprecated
     */
    drvexpandtemplates?: boolean;
    /**
     * @deprecated
     */
    drvgeneratexml?: boolean;
    /**
     * @deprecated
     */
    drvparse?: boolean;
    drvsection?: string;
    /**
     * @deprecated
     */
    drvdiffto?: string;
    /**
     * @deprecated
     */
    drvdifftotext?: string;
    /**
     * @deprecated
     */
    drvdifftotextpst?: boolean;
    /**
     * @deprecated
     */
    drvcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    drvstart?: timestamp;
    drvend?: timestamp;
    drvdir?: "newer" | "older";
    drvtag?: string;
    drvuser?: string;
    drvexcludeuser?: string;
    drvcontinue?: string;
}

/**
 * @private
 */
export interface ApiActionQueryPropDescriptionParams extends ApiActionQueryParams {
    desccontinue?: number;
    descprefersource?: "central" | "local";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Duplicatefiles}
 */
export interface ApiActionQueryPropDuplicateFilesParams extends ApiActionQueryParams {
    dflimit?: limit;
    dfcontinue?: string;
    dfdir?: "ascending" | "descending";
    dflocalonly?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Extlinks}
 */
export interface ApiActionQueryPropExtlinksParams extends ApiActionQueryParams {
    ellimit?: limit;
    elcontinue?: string;
    elprotocol?:
        | ""
        | "bitcoin"
        | "ftp"
        | "ftps"
        | "geo"
        | "git"
        | "gopher"
        | "http"
        | "https"
        | "irc"
        | "ircs"
        | "magnet"
        | "mailto"
        | "matrix"
        | "mms"
        | "news"
        | "nntp"
        | "redis"
        | "sftp"
        | "sip"
        | "sips"
        | "sms"
        | "ssh"
        | "svn"
        | "tel"
        | "telnet"
        | "urn"
        | "worldwind"
        | "xmpp";
    elquery?: string;
    /**
     * @deprecated
     */
    elexpandurl?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:TextExtracts#API}
 */
export interface ApiActionQueryPropExtractsParams extends ApiActionQueryParams {
    exchars?: number;
    exsentences?: number;
    exlimit?: limit;
    exintro?: boolean;
    explaintext?: boolean;
    exsectionformat?: "plain" | "raw" | "wiki";
    excontinue?: number;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Fileusage}
 */
export interface ApiActionQueryPropQueryFileUsageParams extends ApiActionQueryParams {
    fuprop?: OneOrMore<"pageid" | "redirect" | "title">;
    funamespace?: namespace | namespace[];
    fushow?: OneOrMore<"!redirect" | "redirect">;
    fulimit?: limit;
    fucontinue?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface ApiActionQueryPropFlaggedParams extends ApiActionQueryParams {}

export interface ApiActionQueryPropGlobalUsageParams extends ApiActionQueryParams {
    guprop?: OneOrMore<"namespace" | "pageid" | "url">;
    gulimit?: limit;
    gunamespace?: namespace | namespace[];
    gusite?: string | string[];
    gucontinue?: string;
    gufilterlocal?: boolean;
}

export interface ApiActionQueryPropGrowthImageSuggestionDataParams extends ApiActionQueryParams {
    gisdtasktype?: "image-recommendation" | "section-image-recommendation";
    gisdcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Imageinfo}
 */
export interface ApiActionQueryPropImageInfoParams extends ApiActionQueryParams {
    iiprop?: OneOrMore<
        | "archivename"
        | "badfile"
        | "bitdepth"
        | "canonicaltitle"
        | "comment"
        | "commonmetadata"
        | "dimensions"
        | "extmetadata"
        | "mediatype"
        | "metadata"
        | "mime"
        | "parsedcomment"
        | "sha1"
        | "size"
        | "thumbmime"
        | "timestamp"
        | "uploadwarning"
        | "url"
        | "user"
        | "userid"
    >;
    iilimit?: limit;
    iistart?: timestamp;
    iiend?: timestamp;
    iiurlwidth?: number;
    iiurlheight?: number;
    iimetadataversion?: string;
    iiextmetadatalanguage?: string;
    iiextmetadatamultilang?: boolean;
    iiextmetadatafilter?: string | string[];
    iiurlparam?: string;
    iibadfilecontexttitle?: string;
    iicontinue?: string;
    iilocalonly?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Images}
 */
export interface ApiActionQueryPropImagesParams extends ApiActionQueryParams {
    imlimit?: limit;
    imcontinue?: string;
    imimages?: string | string[];
    imdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Info}
 */
export interface ApiActionQueryPropInfoParams extends ApiActionQueryParams {
    inprop?: OneOrMore<
        | "associatedpage"
        | "displaytitle"
        | "editintro"
        | "linkclasses"
        | "notificationtimestamp"
        | "preloadcontent"
        | "protection"
        | "subjectid"
        | "talkid"
        | "url"
        | "varianttitles"
        | "visitingwatchers"
        | "watched"
        | "watchers"
        | "preload"
        | "readable"
    >;
    inlinkcontext?: string;
    intestactions?: string | string[];
    intestactionsdetail?: "boolean" | "full" | "quick";
    intestactionsautocreate?: boolean;
    inpreloadcustom?: string;
    inpreloadparams?: string | string[];
    inpreloadnewsection?: boolean;
    ineditintrostyle?: "lessframes" | "moreframes";
    ineditintroskip?: string | string[];
    ineditintrocustom?: string;
    incontinue?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface ApiActionQueryPropIsReviewedParams extends ApiActionQueryParams {}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Iwlinks}
 */
export interface ApiActionQueryPropIWLinksParams extends ApiActionQueryParams {
    iwprop?: OneOrMore<"url">;
    iwprefix?: string;
    iwtitle?: string;
    iwdir?: "ascending" | "descending";
    iwlimit?: limit;
    iwcontinue?: string;
    /**
     * @deprecated
     */
    iwurl?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Langlinks}
 */
export interface ApiActionQueryPropLangLinksParams extends ApiActionQueryParams {
    llprop?: OneOrMore<"autonym" | "langname" | "url">;
    lllang?: string;
    lltitle?: string;
    lldir?: "ascending" | "descending";
    llinlanguagecode?: string;
    lllimit?: limit;
    llcontinue?: string;
    /**
     * @deprecated
     */
    llurl?: boolean;
}

// tslint:disable-next-line:no-empty-interface
export interface ApiActionQueryPropLangLinksCountParams extends ApiActionQueryParams {}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Links}
 */
export interface ApiActionQueryPropLinksParams extends ApiActionQueryParams {
    plnamespace?: namespace | namespace[];
    pllimit?: limit;
    plcontinue?: string;
    pltitles?: string | string[];
    pldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Linkshere}
 */
export interface ApiActionQueryPropQueryLinksHereParams extends ApiActionQueryParams {
    lhprop?: OneOrMore<"pageid" | "redirect" | "title">;
    lhnamespace?: namespace | namespace[];
    lhshow?: OneOrMore<"!redirect" | "redirect">;
    lhlimit?: limit;
    lhcontinue?: string;
}

/**
 * @private
 */
export interface ApiActionQueryPropMapDataParams extends ApiActionQueryParams {
    mpdgroups?: string;
    mpdlimit?: limit;
    mpdcontinue?: number;
}

// tslint:disable-next-line:no-empty-interface
export interface ApiActionQueryPropMMContentParams extends ApiActionQueryParams {}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageAssessments}
 */
export interface ApiActionQueryPropPageAssessmentsParams extends ApiActionQueryParams {
    pacontinue?: string;
    palimit?: limit;
    pasubprojects?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageImages#API}
 */
export interface ApiActionQueryPropPageImagesParams extends ApiActionQueryParams {
    piprop?: OneOrMore<"name" | "original" | "thumbnail">;
    pithumbsize?: number;
    pilimit?: limit;
    pilicense?: "any" | "free";
    picontinue?: number;
    pilangcode?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Pageprops}
 */
export interface ApiActionQueryPropPagePropsParams extends ApiActionQueryParams {
    ppcontinue?: string;
    ppprop?: string | string[];
}

export interface ApiActionQueryPropPageTermsParams extends ApiActionQueryParams {
    wbptcontinue?: number;
    wbptlanguage?:
        | "aa"
        | "aae"
        | "ab"
        | "abs"
        | "ace"
        | "acf"
        | "acm"
        | "ady"
        | "ady-cyrl"
        | "aeb"
        | "aeb-arab"
        | "aeb-latn"
        | "af"
        | "agq"
        | "aln"
        | "als"
        | "alt"
        | "am"
        | "ami"
        | "an"
        | "ang"
        | "ann"
        | "anp"
        | "apc"
        | "ar"
        | "arc"
        | "arn"
        | "arq"
        | "ary"
        | "arz"
        | "as"
        | "ase"
        | "ast"
        | "atj"
        | "av"
        | "avk"
        | "awa"
        | "ay"
        | "az"
        | "azb"
        | "ba"
        | "bag"
        | "ban"
        | "ban-bali"
        | "bar"
        | "bas"
        | "bat-smg"
        | "bax"
        | "bbc"
        | "bbc-latn"
        | "bbj"
        | "bcc"
        | "bci"
        | "bcl"
        | "bdr"
        | "be"
        | "be-tarask"
        | "be-x-old"
        | "bew"
        | "bfd"
        | "bg"
        | "bgc"
        | "bgn"
        | "bh"
        | "bho"
        | "bi"
        | "bjn"
        | "bkc"
        | "bkh"
        | "bkm"
        | "blk"
        | "bm"
        | "bn"
        | "bo"
        | "bpy"
        | "bqi"
        | "bqz"
        | "br"
        | "brh"
        | "bs"
        | "btm"
        | "bto"
        | "bug"
        | "bxr"
        | "byv"
        | "ca"
        | "cak"
        | "cal"
        | "cbk-zam"
        | "ccp"
        | "cdo"
        | "ce"
        | "ceb"
        | "ch"
        | "chn"
        | "cho"
        | "chr"
        | "chy"
        | "ckb"
        | "cnh"
        | "co"
        | "cps"
        | "cpx"
        | "cpx-hans"
        | "cpx-hant"
        | "cpx-latn"
        | "cr"
        | "crh"
        | "crh-cyrl"
        | "crh-latn"
        | "crh-ro"
        | "cs"
        | "csb"
        | "cu"
        | "cv"
        | "cy"
        | "da"
        | "dag"
        | "de"
        | "de-at"
        | "de-ch"
        | "de-formal"
        | "dga"
        | "din"
        | "diq"
        | "dsb"
        | "dtp"
        | "dty"
        | "dua"
        | "dv"
        | "dz"
        | "ee"
        | "efi"
        | "egl"
        | "el"
        | "eml"
        | "en"
        | "en-ca"
        | "en-gb"
        | "en-us"
        | "eo"
        | "es"
        | "es-419"
        | "es-formal"
        | "et"
        | "eto"
        | "etu"
        | "eu"
        | "ewo"
        | "ext"
        | "fa"
        | "fat"
        | "ff"
        | "fi"
        | "fit"
        | "fiu-vro"
        | "fj"
        | "fkv"
        | "fmp"
        | "fo"
        | "fon"
        | "fr"
        | "frc"
        | "frp"
        | "frr"
        | "fur"
        | "fy"
        | "ga"
        | "gaa"
        | "gag"
        | "gan"
        | "gan-hans"
        | "gan-hant"
        | "gcf"
        | "gcr"
        | "gd"
        | "gl"
        | "gld"
        | "glk"
        | "gn"
        | "gom"
        | "gom-deva"
        | "gom-latn"
        | "gor"
        | "got"
        | "gpe"
        | "grc"
        | "gsw"
        | "gu"
        | "guc"
        | "gur"
        | "guw"
        | "gv"
        | "gya"
        | "ha"
        | "hak"
        | "hak-hans"
        | "hak-hant"
        | "hak-latn"
        | "haw"
        | "he"
        | "hi"
        | "hif"
        | "hif-latn"
        | "hil"
        | "hno"
        | "ho"
        | "hr"
        | "hrx"
        | "hsb"
        | "hsn"
        | "ht"
        | "hu"
        | "hu-formal"
        | "hy"
        | "hyw"
        | "hz"
        | "ia"
        | "iba"
        | "ibb"
        | "id"
        | "ie"
        | "ig"
        | "igl"
        | "ii"
        | "ik"
        | "ike-cans"
        | "ike-latn"
        | "ilo"
        | "inh"
        | "io"
        | "is"
        | "isu"
        | "isv-cyrl"
        | "isv-latn"
        | "it"
        | "iu"
        | "ja"
        | "jam"
        | "jbo"
        | "jut"
        | "jv"
        | "ka"
        | "kaa"
        | "kab"
        | "kai"
        | "kbd"
        | "kbd-cyrl"
        | "kbp"
        | "kcg"
        | "kea"
        | "ker"
        | "kg"
        | "kge"
        | "khw"
        | "ki"
        | "kiu"
        | "kj"
        | "kjh"
        | "kjp"
        | "kk"
        | "kk-arab"
        | "kk-cn"
        | "kk-cyrl"
        | "kk-kz"
        | "kk-latn"
        | "kk-tr"
        | "kl"
        | "km"
        | "kn"
        | "ko"
        | "ko-kp"
        | "koi"
        | "kr"
        | "krc"
        | "kri"
        | "krj"
        | "krl"
        | "ks"
        | "ks-arab"
        | "ks-deva"
        | "ksf"
        | "ksh"
        | "ksw"
        | "ku"
        | "ku-arab"
        | "ku-latn"
        | "kum"
        | "kus"
        | "kv"
        | "kw"
        | "ky"
        | "la"
        | "lad"
        | "lb"
        | "lbe"
        | "lem"
        | "lez"
        | "lfn"
        | "lg"
        | "li"
        | "lij"
        | "liv"
        | "lki"
        | "lld"
        | "lmo"
        | "ln"
        | "lns"
        | "lo"
        | "loz"
        | "lrc"
        | "lt"
        | "ltg"
        | "lua"
        | "lus"
        | "luz"
        | "lv"
        | "lzh"
        | "lzz"
        | "mad"
        | "mag"
        | "mai"
        | "map-bms"
        | "mcn"
        | "mcp"
        | "mdf"
        | "mg"
        | "mh"
        | "mhr"
        | "mi"
        | "min"
        | "mk"
        | "ml"
        | "mn"
        | "mnc"
        | "mnc-latn"
        | "mnc-mong"
        | "mni"
        | "mnw"
        | "mo"
        | "mos"
        | "mr"
        | "mrh"
        | "mrj"
        | "ms"
        | "ms-arab"
        | "mt"
        | "mua"
        | "mui"
        | "mul"
        | "mus"
        | "mwl"
        | "my"
        | "myv"
        | "mzn"
        | "na"
        | "nah"
        | "nan"
        | "nan-hani"
        | "nan-hant"
        | "nan-latn-pehoeji"
        | "nan-latn-tailo"
        | "nap"
        | "nb"
        | "nds"
        | "nds-nl"
        | "ne"
        | "new"
        | "ng"
        | "nge"
        | "nia"
        | "nit"
        | "niu"
        | "nl"
        | "nl-informal"
        | "nla"
        | "nmg"
        | "nmz"
        | "nn"
        | "nnh"
        | "nnz"
        | "no"
        | "nod"
        | "nog"
        | "nov"
        | "nqo"
        | "nr"
        | "nrm"
        | "nso"
        | "nup"
        | "nv"
        | "ny"
        | "nyn"
        | "nyo"
        | "nys"
        | "oc"
        | "ojb"
        | "olo"
        | "om"
        | "or"
        | "os"
        | "osa-latn"
        | "ota"
        | "pa"
        | "pag"
        | "pam"
        | "pap"
        | "pap-aw"
        | "pcd"
        | "pcm"
        | "pdc"
        | "pdt"
        | "pfl"
        | "pi"
        | "pih"
        | "pl"
        | "pms"
        | "pnb"
        | "pnt"
        | "prg"
        | "ps"
        | "pt"
        | "pt-br"
        | "pwn"
        | "qu"
        | "quc"
        | "qug"
        | "rgn"
        | "rif"
        | "rki"
        | "rm"
        | "rmc"
        | "rmf"
        | "rmy"
        | "rn"
        | "ro"
        | "roa-rup"
        | "roa-tara"
        | "rsk"
        | "ru"
        | "rue"
        | "rup"
        | "ruq"
        | "ruq-cyrl"
        | "ruq-latn"
        | "rut"
        | "rw"
        | "rwr"
        | "ryu"
        | "sa"
        | "sah"
        | "sat"
        | "sc"
        | "scn"
        | "sco"
        | "sd"
        | "sdc"
        | "sdh"
        | "se"
        | "se-fi"
        | "se-no"
        | "se-se"
        | "sei"
        | "ses"
        | "sg"
        | "sgs"
        | "sh"
        | "sh-cyrl"
        | "sh-latn"
        | "shi"
        | "shi-latn"
        | "shi-tfng"
        | "shn"
        | "shy"
        | "shy-latn"
        | "si"
        | "simple"
        | "sjd"
        | "sje"
        | "sju"
        | "sk"
        | "skr"
        | "skr-arab"
        | "sl"
        | "sli"
        | "sm"
        | "sma"
        | "smj"
        | "smn"
        | "sms"
        | "sn"
        | "so"
        | "sq"
        | "sr"
        | "sr-ec"
        | "sr-el"
        | "srn"
        | "sro"
        | "srq"
        | "ss"
        | "st"
        | "stq"
        | "sty"
        | "su"
        | "sv"
        | "sw"
        | "syl"
        | "szl"
        | "szy"
        | "ta"
        | "tay"
        | "tcy"
        | "tdd"
        | "te"
        | "tet"
        | "tg"
        | "tg-cyrl"
        | "tg-latn"
        | "th"
        | "ti"
        | "tig"
        | "tk"
        | "tl"
        | "tly"
        | "tly-cyrl"
        | "tn"
        | "to"
        | "tok"
        | "tpi"
        | "tpv"
        | "tr"
        | "tru"
        | "trv"
        | "ts"
        | "tt"
        | "tt-cyrl"
        | "tt-latn"
        | "ttj"
        | "tum"
        | "tvu"
        | "tw"
        | "ty"
        | "tyv"
        | "tzm"
        | "udm"
        | "ug"
        | "ug-arab"
        | "ug-latn"
        | "uk"
        | "ur"
        | "uselang"
        | "uz"
        | "uz-cyrl"
        | "uz-latn"
        | "ve"
        | "vec"
        | "vep"
        | "vi"
        | "vls"
        | "vmf"
        | "vmw"
        | "vo"
        | "vot"
        | "vro"
        | "vut"
        | "wa"
        | "wal"
        | "war"
        | "wes"
        | "wls"
        | "wo"
        | "wuu"
        | "wuu-hans"
        | "wuu-hant"
        | "wya"
        | "xal"
        | "xh"
        | "xmf"
        | "xsy"
        | "yas"
        | "yat"
        | "yav"
        | "ybb"
        | "yi"
        | "yo"
        | "yrl"
        | "yue"
        | "yue-hans"
        | "yue-hant"
        | "za"
        | "zea"
        | "zgh"
        | "zgh-latn"
        | "zh"
        | "zh-classical"
        | "zh-cn"
        | "zh-hans"
        | "zh-hant"
        | "zh-hk"
        | "zh-min-nan"
        | "zh-mo"
        | "zh-my"
        | "zh-sg"
        | "zh-tw"
        | "zh-yue"
        | "zu";
    wbptterms?: OneOrMore<"alias" | "description" | "label">;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageViewInfo}
 */
export interface ApiActionQueryPropPageViewsParams extends ApiActionQueryParams {
    pvipmetric?: "pageviews";
    pvipdays?: number;
    pvipcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Redirects}
 */
export interface ApiActionQueryPropQueryRedirectsParams extends ApiActionQueryParams {
    rdprop?: OneOrMore<"fragment" | "pageid" | "title">;
    rdnamespace?: namespace | namespace[];
    rdshow?: OneOrMore<"!fragment" | "fragment">;
    rdlimit?: limit;
    rdcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Revisions}
 */
export interface ApiActionQueryPropRevisionsParams extends ApiActionQueryParams {
    rvprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flagged"
        | "flags"
        | "ids"
        | "oresscores"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    rvslots?: string | string[];
    [k: `rvcontentformat-${string}`]:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    rvlimit?: limit;
    /**
     * @deprecated
     */
    rvexpandtemplates?: boolean;
    /**
     * @deprecated
     */
    rvgeneratexml?: boolean;
    /**
     * @deprecated
     */
    rvparse?: boolean;
    rvsection?: string;
    /**
     * @deprecated
     */
    rvdiffto?: string;
    /**
     * @deprecated
     */
    rvdifftotext?: string;
    /**
     * @deprecated
     */
    rvdifftotextpst?: boolean;
    /**
     * @deprecated
     */
    rvcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    rvstartid?: number;
    rvendid?: number;
    rvstart?: timestamp;
    rvend?: timestamp;
    rvdir?: "newer" | "older";
    rvuser?: string;
    rvexcludeuser?: string;
    rvtag?: string;
    rvcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Stashimageinfo}
 */
export interface ApiActionQueryPropStashImageInfoParams extends ApiActionQueryParams {
    siifilekey?: string | string[];
    /**
     * @deprecated
     */
    siisessionkey?: string | string[];
    siiprop?: OneOrMore<
        | "badfile"
        | "bitdepth"
        | "canonicaltitle"
        | "commonmetadata"
        | "dimensions"
        | "extmetadata"
        | "metadata"
        | "mime"
        | "sha1"
        | "size"
        | "thumbmime"
        | "timestamp"
        | "url"
    >;
    siiurlwidth?: number;
    siiurlheight?: number;
    siiurlparam?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Templates}
 */
export interface ApiActionQueryPropQueryTemplatesParams extends ApiActionQueryParams {
    tlnamespace?: namespace | namespace[];
    tllimit?: limit;
    tlcontinue?: string;
    tltemplates?: string | string[];
    tldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Transcludedin}
 */
export interface ApiActionQueryPropQueryTranscludedInParams extends ApiActionQueryParams {
    tiprop?: OneOrMore<"pageid" | "redirect" | "title">;
    tinamespace?: namespace | namespace[];
    tishow?: OneOrMore<"!redirect" | "redirect">;
    tilimit?: limit;
    ticontinue?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface ApiActionQueryPropTranscodeStatusParams extends ApiActionQueryParams {}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Videoinfo}
 */
export interface ApiActionQueryPropVideoInfoParams extends ApiActionQueryParams {
    viprop?: OneOrMore<
        | "archivename"
        | "badfile"
        | "bitdepth"
        | "canonicaltitle"
        | "comment"
        | "commonmetadata"
        | "derivatives"
        | "dimensions"
        | "extmetadata"
        | "mediatype"
        | "metadata"
        | "mime"
        | "parsedcomment"
        | "sha1"
        | "size"
        | "thumbmime"
        | "timedtext"
        | "timestamp"
        | "uploadwarning"
        | "url"
        | "user"
        | "userid"
    >;
    vilimit?: limit;
    vistart?: timestamp;
    viend?: timestamp;
    viurlwidth?: number;
    viurlheight?: number;
    vimetadataversion?: string;
    viextmetadatalanguage?: string;
    viextmetadatamultilang?: boolean;
    viextmetadatafilter?: string | string[];
    viurlparam?: string;
    vibadfilecontexttitle?: string;
    vicontinue?: string;
    vilocalonly?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Wikibase/API#wbentityusage}
 */
export interface ApiActionQueryPropWbentityusageParams extends ApiActionQueryParams {
    wbeuprop?: OneOrMore<"url">;
    wbeuaspect?: OneOrMore<"C" | "D" | "L" | "O" | "S" | "T" | "X">;
    wbeuentities?: string | string[];
    wbeulimit?: limit;
    wbeucontinue?: string;
}

export interface ApiActionQueryListAbuseFiltersParams extends ApiActionQueryParams {
    abfstartid?: number;
    abfendid?: number;
    abfdir?: "newer" | "older";
    abfshow?: OneOrMore<
        | "!deleted"
        | "!enabled"
        | "!private"
        | "!protected"
        | "deleted"
        | "enabled"
        | "private"
        | "protected"
    >;
    abflimit?: limit;
    abfprop?: OneOrMore<
        | "actions"
        | "comments"
        | "description"
        | "hits"
        | "id"
        | "lasteditor"
        | "lastedittime"
        | "pattern"
        | "private"
        | "protected"
        | "status"
    >;
}

export interface ApiActionQueryListAbuseLogParams extends ApiActionQueryParams {
    afllogid?: number;
    aflstart?: timestamp;
    aflend?: timestamp;
    afldir?: "newer" | "older";
    afluser?: string;
    afltitle?: string;
    aflfilter?: string | string[];
    afllimit?: limit;
    aflprop?: OneOrMore<
        | "action"
        | "details"
        | "filter"
        | "hidden"
        | "ids"
        | "result"
        | "revid"
        | "timestamp"
        | "title"
        | "user"
    >;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allcategories}
 */
export interface ApiActionQueryListAllCategoriesParams extends ApiActionQueryParams {
    acfrom?: string;
    accontinue?: string;
    acto?: string;
    acprefix?: string;
    acdir?: "ascending" | "descending";
    acmin?: number;
    acmax?: number;
    aclimit?: limit;
    acprop?: OneOrMore<"hidden" | "size">;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alldeletedrevisions}
 */
export interface ApiActionQueryListAllDeletedRevisionsParams extends ApiActionQueryParams {
    adrprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flags"
        | "ids"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    adrslots?: string | string[];
    [k: `adrcontentformat-${string}`]:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    adrlimit?: limit;
    /**
     * @deprecated
     */
    adrexpandtemplates?: boolean;
    /**
     * @deprecated
     */
    adrgeneratexml?: boolean;
    /**
     * @deprecated
     */
    adrparse?: boolean;
    adrsection?: string;
    /**
     * @deprecated
     */
    adrdiffto?: string;
    /**
     * @deprecated
     */
    adrdifftotext?: string;
    /**
     * @deprecated
     */
    adrdifftotextpst?: boolean;
    /**
     * @deprecated
     */
    adrcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    adruser?: string;
    adrnamespace?: namespace | namespace[];
    adrstart?: timestamp;
    adrend?: timestamp;
    adrdir?: "newer" | "older";
    adrfrom?: string;
    adrto?: string;
    adrprefix?: string;
    adrexcludeuser?: string;
    adrtag?: string;
    adrcontinue?: string;
    adrgeneratetitles?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allfileusages}
 */
export interface ApiActionQueryListQueryAllFileUsagesParams extends ApiActionQueryParams {
    afcontinue?: string;
    affrom?: string;
    afto?: string;
    afprefix?: string;
    afunique?: boolean;
    afprop?: OneOrMore<"ids" | "title">;
    aflimit?: limit;
    afdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allimages}
 */
export interface ApiActionQueryListAllImagesParams extends ApiActionQueryParams {
    aisort?: "name" | "timestamp";
    aidir?: "ascending" | "descending" | "newer" | "older";
    aifrom?: string;
    aito?: string;
    aicontinue?: string;
    aistart?: timestamp;
    aiend?: timestamp;
    aiprop?: OneOrMore<
        | "badfile"
        | "bitdepth"
        | "canonicaltitle"
        | "comment"
        | "commonmetadata"
        | "dimensions"
        | "extmetadata"
        | "mediatype"
        | "metadata"
        | "mime"
        | "parsedcomment"
        | "sha1"
        | "size"
        | "timestamp"
        | "url"
        | "user"
        | "userid"
    >;
    aiprefix?: string;
    aiminsize?: number;
    aimaxsize?: number;
    aisha1?: string;
    aisha1base36?: string;
    aiuser?: string;
    aifilterbots?: "all" | "bots" | "nobots";
    aimime?: string | string[];
    ailimit?: limit;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alllinks}
 */
export interface ApiActionQueryListAllLinksParams extends ApiActionQueryParams {
    alcontinue?: string;
    alfrom?: string;
    alto?: string;
    alprefix?: string;
    alunique?: boolean;
    alprop?: OneOrMore<"ids" | "title">;
    alnamespace?: namespace;
    allimit?: limit;
    aldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allpages}
 */
export interface ApiActionQueryListAllPagesParams extends ApiActionQueryParams {
    apfrom?: string;
    apcontinue?: string;
    apto?: string;
    apprefix?: string;
    apnamespace?: namespace;
    apfilterredir?: "all" | "nonredirects" | "redirects";
    apfilterlanglinks?: "all" | "withlanglinks" | "withoutlanglinks";
    apminsize?: number;
    apmaxsize?: number;
    apprtype?: OneOrMore<"edit" | "move" | "upload">;
    apprlevel?: OneOrMore<"" | "autoconfirmed" | "extendedconfirmed" | "sysop" | "templateeditor">;
    apprfiltercascade?: "all" | "cascading" | "noncascading";
    apprexpiry?: "all" | "definite" | "indefinite";
    aplimit?: limit;
    apdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allredirects}
 */
export interface ApiActionQueryListQueryAllRedirectsParams extends ApiActionQueryParams {
    arcontinue?: string;
    arfrom?: string;
    arto?: string;
    arprefix?: string;
    arunique?: boolean;
    arprop?: OneOrMore<"fragment" | "ids" | "interwiki" | "title">;
    arnamespace?: namespace;
    arlimit?: limit;
    ardir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allrevisions}
 */
export interface ApiActionQueryListAllRevisionsParams extends ApiActionQueryParams {
    arvprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flags"
        | "ids"
        | "oresscores"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    arvslots?: string | string[];
    [k: `arvcontentformat-${string}`]:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    arvlimit?: limit;
    /**
     * @deprecated
     */
    arvexpandtemplates?: boolean;
    /**
     * @deprecated
     */
    arvgeneratexml?: boolean;
    /**
     * @deprecated
     */
    arvparse?: boolean;
    arvsection?: string;
    /**
     * @deprecated
     */
    arvdiffto?: string;
    /**
     * @deprecated
     */
    arvdifftotext?: string;
    /**
     * @deprecated
     */
    arvdifftotextpst?: boolean;
    /**
     * @deprecated
     */
    arvcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    arvuser?: string;
    arvnamespace?: namespace | namespace[];
    arvstart?: timestamp;
    arvend?: timestamp;
    arvdir?: "newer" | "older";
    arvexcludeuser?: string;
    arvcontinue?: string;
    arvgeneratetitles?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alltransclusions}
 */
export interface ApiActionQueryListQueryAllTransclusionsParams extends ApiActionQueryParams {
    atcontinue?: string;
    atfrom?: string;
    atto?: string;
    atprefix?: string;
    atunique?: boolean;
    atprop?: OneOrMore<"ids" | "title">;
    atnamespace?: namespace;
    atlimit?: limit;
    atdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allusers}
 */
export interface ApiActionQueryListAllUsersParams extends ApiActionQueryParams {
    aufrom?: string;
    auto?: string;
    auprefix?: string;
    audir?: "ascending" | "descending";
    augroup?: OneOrMore<
        | "abusefilter"
        | "abusefilter-helper"
        | "accountcreator"
        | "autoreviewer"
        | "bot"
        | "bureaucrat"
        | "checkuser"
        | "checkuser-temporary-account-viewer"
        | "confirmed"
        | "copyviobot"
        | "eventcoordinator"
        | "extendedconfirmed"
        | "extendedmover"
        | "filemover"
        | "founder"
        | "import"
        | "interface-admin"
        | "ipblock-exempt"
        | "massmessage-sender"
        | "no-ipinfo"
        | "patroller"
        | "push-subscription-manager"
        | "researcher"
        | "reviewer"
        | "rollbacker"
        | "steward"
        | "suppress"
        | "sysop"
        | "templateeditor"
        | "transwiki"
    >;
    auexcludegroup?: OneOrMore<
        | "abusefilter"
        | "abusefilter-helper"
        | "accountcreator"
        | "autoreviewer"
        | "bot"
        | "bureaucrat"
        | "checkuser"
        | "checkuser-temporary-account-viewer"
        | "confirmed"
        | "copyviobot"
        | "eventcoordinator"
        | "extendedconfirmed"
        | "extendedmover"
        | "filemover"
        | "founder"
        | "import"
        | "interface-admin"
        | "ipblock-exempt"
        | "massmessage-sender"
        | "no-ipinfo"
        | "patroller"
        | "push-subscription-manager"
        | "researcher"
        | "reviewer"
        | "rollbacker"
        | "steward"
        | "suppress"
        | "sysop"
        | "templateeditor"
        | "transwiki"
    >;
    aurights?: OneOrMore<
        | "abusefilter-access-protected-vars"
        | "abusefilter-bypass-blocked-external-domains"
        | "abusefilter-hidden-log"
        | "abusefilter-hide-log"
        | "abusefilter-log"
        | "abusefilter-log-detail"
        | "abusefilter-log-private"
        | "abusefilter-modify"
        | "abusefilter-modify-blocked-external-domains"
        | "abusefilter-modify-global"
        | "abusefilter-modify-restricted"
        | "abusefilter-privatedetails"
        | "abusefilter-privatedetails-log"
        | "abusefilter-revert"
        | "abusefilter-view"
        | "abusefilter-view-private"
        | "apihighlimits"
        | "applychangetags"
        | "autoconfirmed"
        | "autocreateaccount"
        | "autopatrol"
        | "autoreview"
        | "autoreviewrestore"
        | "badcaptcha"
        | "badoath"
        | "bigdelete"
        | "block"
        | "blockemail"
        | "bot"
        | "browsearchive"
        | "centralauth-createlocal"
        | "centralauth-lock"
        | "centralauth-merge"
        | "centralauth-rename"
        | "centralauth-suppress"
        | "centralauth-unmerge"
        | "changeemail"
        | "changetags"
        | "checkuser"
        | "checkuser-log"
        | "checkuser-temporary-account"
        | "checkuser-temporary-account-log"
        | "checkuser-temporary-account-no-preference"
        | "collectionsaveascommunitypage"
        | "collectionsaveasuserpage"
        | "confirmemail"
        | "createaccount"
        | "createpage"
        | "createpagemainns"
        | "createtalk"
        | "delete"
        | "delete-redirect"
        | "deletechangetags"
        | "deletedhistory"
        | "deletedtext"
        | "deletelogentry"
        | "deleterevision"
        | "echo-create"
        | "edit"
        | "editautopatrolprotected"
        | "editautoreviewprotected"
        | "editcontentmodel"
        | "editeditorprotected"
        | "editextendedsemiprotected"
        | "editinterface"
        | "editmyoptions"
        | "editmyprivateinfo"
        | "editmyusercss"
        | "editmyuserjs"
        | "editmyuserjson"
        | "editmyuserjsredirect"
        | "editmywatchlist"
        | "editprotected"
        | "editsemiprotected"
        | "editsitecss"
        | "editsitejs"
        | "editsitejson"
        | "edittrustedprotected"
        | "editusercss"
        | "edituserjs"
        | "edituserjson"
        | "enrollasmentor"
        | "extendedconfirmed"
        | "flow-create-board"
        | "flow-delete"
        | "flow-edit-post"
        | "flow-hide"
        | "flow-suppress"
        | "globalblock"
        | "globalblock-exempt"
        | "globalblock-whitelist"
        | "globalgroupmembership"
        | "globalgrouppermissions"
        | "growthexperiments-apiqueryimagesuggestiondata"
        | "growthexperimentsuserimpacthandler"
        | "growthmentordashboardupdatedata"
        | "hideuser"
        | "import"
        | "importupload"
        | "ipblock-exempt"
        | "ipinfo"
        | "ipinfo-view-basic"
        | "ipinfo-view-full"
        | "ipinfo-view-log"
        | "linkpurge"
        | "mailpassword"
        | "manage-all-push-subscriptions"
        | "managechangetags"
        | "managementors"
        | "markbotedits"
        | "massmessage"
        | "mergehistory"
        | "minoredit"
        | "move"
        | "move-categorypages"
        | "move-rootuserpages"
        | "move-subpages"
        | "movefile"
        | "movestable"
        | "mwoauthmanageconsumer"
        | "mwoauthmanagemygrants"
        | "mwoauthproposeconsumer"
        | "mwoauthsuppress"
        | "mwoauthupdateownconsumer"
        | "mwoauthviewprivate"
        | "mwoauthviewsuppressed"
        | "newsletter-create"
        | "newsletter-delete"
        | "newsletter-manage"
        | "newsletter-restore"
        | "nominornewtalk"
        | "noratelimit"
        | "nuke"
        | "oathauth-api-all"
        | "oathauth-disable-for-user"
        | "oathauth-enable"
        | "oathauth-verify-user"
        | "oathauth-view-log"
        | "override-antispoof"
        | "override-export-depth"
        | "pagelang"
        | "pagetriage-copyvio"
        | "pagetriage-mark-action"
        | "pagetriage-tagging-action"
        | "patrol"
        | "patrolmarks"
        | "protect"
        | "purge"
        | "read"
        | "renameuser"
        | "renderfile"
        | "renderfile-nonstandard"
        | "reupload"
        | "reupload-own"
        | "reupload-shared"
        | "review"
        | "rollback"
        | "sboverride"
        | "securepoll-create-poll"
        | "securepoll-view-voter-pii"
        | "sendemail"
        | "setmentor"
        | "sfsblock-bypass"
        | "siteadmin"
        | "skipcaptcha"
        | "spamblacklistlog"
        | "stablesettings"
        | "stashbasehtml"
        | "stashedit"
        | "suppressionlog"
        | "suppressredirect"
        | "suppressrevision"
        | "tboverride"
        | "tboverride-account"
        | "templateeditor"
        | "thanks-notification"
        | "titleblacklistlog"
        | "torunblocked"
        | "transcode-reset"
        | "transcode-status"
        | "unblockself"
        | "undelete"
        | "unreviewedpages"
        | "unwatchedpages"
        | "upload"
        | "upload_by_url"
        | "urlshortcode"
        | "urlshortener-create-url"
        | "urlshortener-manage-url"
        | "urlshortener-view-log"
        | "userrights"
        | "userrights-interwiki"
        | "validate"
        | "viewdeletedfile"
        | "viewmyprivateinfo"
        | "viewmywatchlist"
        | "viewsuppressed"
        | "vipsscaler-test"
    >;
    auprop?: OneOrMore<
        | "blockinfo"
        | "centralids"
        | "editcount"
        | "groups"
        | "implicitgroups"
        | "registration"
        | "rights"
    >;
    aulimit?: limit;
    auwitheditsonly?: boolean;
    auactiveusers?: boolean;
    auattachedwiki?: string;
    auexcludenamed?: boolean;
    auexcludetemp?: boolean;
}

export interface ApiActionQueryListAutomaticTranslationDenseLanguagesParams
    extends ApiActionQueryParams {
    "qid": string;
    "section-titles"?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Backlinks}
 */
export interface ApiActionQueryListBacklinksParams extends ApiActionQueryParams {
    bltitle?: string;
    blpageid?: number;
    blcontinue?: string;
    blnamespace?: namespace | namespace[];
    bldir?: "ascending" | "descending";
    blfilterredir?: "all" | "nonredirects" | "redirects";
    bllimit?: limit;
    blredirect?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:BetaFeatures}
 */
export interface ApiActionQueryListBetaFeaturesParams extends ApiActionQueryParams {
    bfcounts?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Blocks}
 */
export interface ApiActionQueryListBlocksParams extends ApiActionQueryParams {
    bkstart?: timestamp;
    bkend?: timestamp;
    bkdir?: "newer" | "older";
    bkids?: number | number[];
    bkusers?: string | string[];
    bkip?: string;
    bklimit?: limit;
    bkprop?: OneOrMore<
        | "by"
        | "byid"
        | "expiry"
        | "flags"
        | "id"
        | "range"
        | "reason"
        | "restrictions"
        | "timestamp"
        | "user"
        | "userid"
    >;
    bkshow?: OneOrMore<
        "!account" | "!ip" | "!range" | "!temp" | "account" | "ip" | "range" | "temp"
    >;
    bkcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categorymembers}
 */
export interface ApiActionQueryListCategoryMembersParams extends ApiActionQueryParams {
    cmtitle?: string;
    cmpageid?: number;
    cmprop?: OneOrMore<"ids" | "sortkey" | "sortkeyprefix" | "timestamp" | "title" | "type">;
    cmnamespace?: namespace | namespace[];
    cmtype?: OneOrMore<"file" | "page" | "subcat">;
    cmcontinue?: string;
    cmlimit?: limit;
    cmsort?: "sortkey" | "timestamp";
    cmdir?: "asc" | "ascending" | "desc" | "descending" | "newer" | "older";
    cmstart?: timestamp;
    cmend?: timestamp;
    cmstarthexsortkey?: string;
    cmendhexsortkey?: string;
    cmstartsortkeyprefix?: string;
    cmendsortkeyprefix?: string;
    /**
     * @deprecated
     */
    cmstartsortkey?: string;
    /**
     * @deprecated
     */
    cmendsortkey?: string;
}

export interface ApiActionQueryListCentralNoticeActiveCampaignsParams extends ApiActionQueryParams {
    cnacincludefuture?: boolean;
}

export interface ApiActionQueryListCentralNoticeLogsParams extends ApiActionQueryParams {
    campaign?: string;
    user?: string;
    limit?: limit;
    offset?: number;
    start?: timestamp;
    end?: timestamp;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:CheckUser#API}
 */
export interface ApiActionQueryListCheckUserParams extends ApiActionQueryParams {
    curequest: "actions" | "ipusers" | "userips" | "edits";
    cutarget: string;
    cureason: string;
    culimit?: limit;
    cutimecond?: string;
    cuxff?: string;
    cutoken?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:CheckUser#API}
 */
export interface ApiActionQueryListCheckUserLogParams extends ApiActionQueryParams {
    culuser?: string;
    cultarget?: string;
    culreason?: string;
    cullimit?: limit;
    culdir?: "newer" | "older";
    culfrom?: timestamp;
    culto?: timestamp;
    culcontinue?: string;
}

export interface ApiActionQueryListContentTranslationParams extends ApiActionQueryParams {
    translationid?: string;
    from?: string;
    to?: string;
    sourcetitle?: string;
    sourcesectiontitle?: string;
    limit?: limit;
    offset?: string;
    type?: "draft" | "published";
    usecase?: "desktop-editor-draft" | "translation-corpora-units" | "unified-dashboard";
}

export interface ApiActionQueryListContentTranslationCorporaParams extends ApiActionQueryParams {
    translationid: number;
    striphtml?: boolean;
    types?: OneOrMore<"mt" | "source" | "user">;
}

export interface ApiActionQueryListContenttranslationlangtrendParams extends ApiActionQueryParams {
    source?: string;
    target?: string;
    interval?: "month" | "week";
}

// tslint:disable-next-line:no-empty-interface
export interface ApiActionQueryListContentTranslationStatsParams extends ApiActionQueryParams {}

export interface ApiActionQueryListContentTranslationSuggestionsParams
    extends ApiActionQueryParams {
    from?: string;
    to?: string;
    listid?: string;
    limit?: limit;
    offset?: string;
    seed?: number;
}

export interface ApiActionQueryListCxpublishedtranslationsParams extends ApiActionQueryParams {
    from?: string;
    to?: string;
    limit?: limit;
    offset?: string;
}

export interface ApiActionQueryListCxtranslatorstatsParams extends ApiActionQueryParams {
    translator?: string;
}

/**
 * @deprecated
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Deletedrevs}
 */
export interface ApiActionQueryListDeletedrevsParams extends ApiActionQueryParams {
    drstart?: timestamp;
    drend?: timestamp;
    drdir?: "newer" | "older";
    drfrom?: string;
    drto?: string;
    drprefix?: string;
    drunique?: boolean;
    drnamespace?: namespace;
    drtag?: string;
    druser?: string;
    drexcludeuser?: string;
    drprop?: OneOrMore<
        | "comment"
        | "content"
        | "len"
        | "minor"
        | "parentid"
        | "parsedcomment"
        | "revid"
        | "sha1"
        | "tags"
        | "user"
        | "userid"
        | "token"
    >;
    drlimit?: limit;
    drcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Embeddedin}
 */
export interface ApiActionQueryListQueryEmbeddedInParams extends ApiActionQueryParams {
    eititle?: string;
    eipageid?: number;
    eicontinue?: string;
    einamespace?: namespace | namespace[];
    eidir?: "ascending" | "descending";
    eifilterredir?: "all" | "nonredirects" | "redirects";
    eilimit?: limit;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Exturlusage}
 */
export interface ApiActionQueryListExturlusageParams extends ApiActionQueryParams {
    euprop?: OneOrMore<"ids" | "title" | "url">;
    eucontinue?: string;
    euprotocol?:
        | ""
        | "bitcoin"
        | "ftp"
        | "ftps"
        | "geo"
        | "git"
        | "gopher"
        | "http"
        | "https"
        | "irc"
        | "ircs"
        | "magnet"
        | "mailto"
        | "matrix"
        | "mms"
        | "news"
        | "nntp"
        | "redis"
        | "sftp"
        | "sip"
        | "sips"
        | "sms"
        | "ssh"
        | "svn"
        | "tel"
        | "telnet"
        | "urn"
        | "worldwind"
        | "xmpp";
    euquery?: string;
    eunamespace?: namespace | namespace[];
    eulimit?: limit;
    /**
     * @deprecated
     */
    euexpandurl?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Filearchive}
 */
export interface ApiActionQueryListFilearchiveParams extends ApiActionQueryParams {
    fafrom?: string;
    fato?: string;
    faprefix?: string;
    fadir?: "ascending" | "descending";
    fasha1?: string;
    fasha1base36?: string;
    faprop?: OneOrMore<
        | "archivename"
        | "bitdepth"
        | "description"
        | "dimensions"
        | "mediatype"
        | "metadata"
        | "mime"
        | "parseddescription"
        | "sha1"
        | "size"
        | "timestamp"
        | "user"
    >;
    falimit?: limit;
    facontinue?: string;
}

export interface ApiActionQueryListGadgetCategoriesParams extends ApiActionQueryParams {
    gcprop?: OneOrMore<"members" | "name" | "title">;
    gcnames?: string | string[];
}

export interface ApiActionQueryListGadgetsParams extends ApiActionQueryParams {
    gaprop?: OneOrMore<"desc" | "id" | "metadata">;
    gacategories?: string | string[];
    gaids?: string | string[];
    gaallowedonly?: boolean;
    gaenabledonly?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GeoData#list.3Dgeosearch}
 */
export interface ApiActionQueryListGeoSearchParams extends ApiActionQueryParams {
    gscoord?: string;
    gspage?: string;
    gsbbox?: string;
    gsradius?: number;
    gsmaxdim?: number;
    gssort?: "distance" | "relevance";
    gslimit?: limit;
    gsglobe?: "earth";
    gsnamespace?: namespace | namespace[];
    gsprop?: OneOrMore<"country" | "dim" | "globe" | "name" | "region" | "type">;
    gsprimary?: "all" | "primary" | "secondary";
    gsdebug?: boolean;
}

export interface ApiActionQueryListGlobalAllUsersParams extends ApiActionQueryParams {
    agufrom?: string;
    aguto?: string;
    aguprefix?: string;
    agudir?: "ascending" | "descending";
    agugroup?: OneOrMore<
        | "abusefilter-helper"
        | "abusefilter-maintainer"
        | "apihighlimits-requestor"
        | "captcha-exempt"
        | "founder"
        | "global-bot"
        | "global-deleter"
        | "global-flow-create"
        | "global-interface-editor"
        | "global-ipblock-exempt"
        | "global-rollbacker"
        | "global-sysop"
        | "global-temporary-account-viewer"
        | "new-wikis-importer"
        | "oathauth-tester"
        | "ombuds"
        | "recursive-export"
        | "staff"
        | "steward"
        | "sysadmin"
        | "vrt-permissions"
        | "wmf-email-block-override"
        | "wmf-researcher"
    >;
    aguexcludegroup?: OneOrMore<
        | "abusefilter-helper"
        | "abusefilter-maintainer"
        | "apihighlimits-requestor"
        | "captcha-exempt"
        | "founder"
        | "global-bot"
        | "global-deleter"
        | "global-flow-create"
        | "global-interface-editor"
        | "global-ipblock-exempt"
        | "global-rollbacker"
        | "global-sysop"
        | "global-temporary-account-viewer"
        | "new-wikis-importer"
        | "oathauth-tester"
        | "ombuds"
        | "recursive-export"
        | "staff"
        | "steward"
        | "sysadmin"
        | "vrt-permissions"
        | "wmf-email-block-override"
        | "wmf-researcher"
    >;
    aguprop?: OneOrMore<"existslocally" | "groups" | "lockinfo">;
    agulimit?: limit;
    aguexcludenamed?: boolean;
    aguexcludetemp?: boolean;
}

export interface ApiActionQueryListGlobalBlocksParams extends ApiActionQueryParams {
    bgstart?: timestamp;
    bgend?: timestamp;
    bgdir?: "newer" | "older";
    bgids?: number | number[];
    /**
     * @deprecated
     */
    bgaddresses?: string | string[];
    bgtargets?: string | string[];
    bgip?: string;
    bglimit?: limit;
    bgprop?: OneOrMore<
        "by" | "expiry" | "id" | "range" | "reason" | "target" | "timestamp" | "address"
    >;
}

export interface ApiActionQueryListGlobalGroupsParams extends ApiActionQueryParams {
    ggpprop?: OneOrMore<"rights">;
}

// tslint:disable-next-line:no-empty-interface
export interface ApiActionQueryListGrowthMentorListParams extends ApiActionQueryParams {}

export interface ApiActionQueryListGrowthMentorMenteeParams extends ApiActionQueryParams {
    gemmmentor: string;
}

// tslint:disable-next-line:no-empty-interface
export interface ApiActionQueryListGrowthStarredMenteesParams extends ApiActionQueryParams {}

/**
 * @private
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GrowthExperiments#API}
 */
export interface ApiActionQueryListGrowthTasksParams extends ApiActionQueryParams {
    gttasktypes?: OneOrMore<"copyedit" | "expand" | "links" | "references" | "update">;
    gttopics?: OneOrMore<
        | "africa"
        | "architecture"
        | "art"
        | "asia"
        | "biography"
        | "biology"
        | "business-and-economics"
        | "central-america"
        | "chemistry"
        | "comics-and-anime"
        | "computers-and-internet"
        | "earth-and-environment"
        | "education"
        | "engineering"
        | "entertainment"
        | "europe"
        | "fashion"
        | "food-and-drink"
        | "general-science"
        | "history"
        | "literature"
        | "mathematics"
        | "medicine-and-health"
        | "military-and-warfare"
        | "music"
        | "north-america"
        | "oceania"
        | "performing-arts"
        | "philosophy-and-religion"
        | "physics"
        | "politics-and-government"
        | "society"
        | "south-america"
        | "sports"
        | "technology"
        | "transportation"
        | "tv-and-film"
        | "video-games"
        | "women"
    >;
    gttopicsmode?: "AND" | "OR";
    gtlimit?: limit;
    gtoffset?: number;
    gtdebug?: boolean;
    gtexcludepageids?: number | number[];
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Imageusage}
 */
export interface ApiActionQueryListQueryImageUsageParams extends ApiActionQueryParams {
    iutitle?: string;
    iupageid?: number;
    iucontinue?: string;
    iunamespace?: namespace | namespace[];
    iudir?: "ascending" | "descending";
    iufilterredir?: "all" | "nonredirects" | "redirects";
    iulimit?: limit;
    iuredirect?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Iwbacklinks}
 */
export interface ApiActionQueryListIWBacklinksParams extends ApiActionQueryParams {
    iwblprefix?: string;
    iwbltitle?: string;
    iwblcontinue?: string;
    iwbllimit?: limit;
    iwblprop?: OneOrMore<"iwprefix" | "iwtitle">;
    iwbldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Langbacklinks}
 */
export interface ApiActionQueryListLangBacklinksParams extends ApiActionQueryParams {
    lbllang?: string;
    lbltitle?: string;
    lblcontinue?: string;
    lbllimit?: limit;
    lblprop?: OneOrMore<"lllang" | "lltitle">;
    lbldir?: "ascending" | "descending";
}

export interface ApiActionQueryListLinterrorsParams extends ApiActionQueryParams {
    lntcategories?: OneOrMore<
        | "bogus-image-options"
        | "deletable-table-tag"
        | "duplicate-ids"
        | "fostered"
        | "fostered-transparent"
        | "html5-misnesting"
        | "large-tables"
        | "misc-tidy-replacement-issues"
        | "misnested-tag"
        | "missing-end-tag"
        | "missing-end-tag-in-heading"
        | "multi-colon-escape"
        | "multiline-html-table-in-list"
        | "multiple-unclosed-formatting-tags"
        | "night-mode-unaware-background-color"
        | "obsolete-tag"
        | "pwrap-bug-workaround"
        | "self-closed-tag"
        | "stripped-tag"
        | "tidy-font-bug"
        | "tidy-whitespace-bug"
        | "unclosed-quotes-in-heading"
        | "wikilink-in-extlink"
    >;
    lntlimit?: limit;
    lntnamespace?: namespace | namespace[];
    lntpageid?: number | number[];
    lnttitle?: string;
    lntfrom?: number;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Logevents}
 */
export interface ApiActionQueryListLogEventsParams extends ApiActionQueryParams {
    leprop?: OneOrMore<
        | "comment"
        | "details"
        | "ids"
        | "parsedcomment"
        | "tags"
        | "timestamp"
        | "title"
        | "type"
        | "user"
        | "userid"
    >;
    letype?:
        | ""
        | "abusefilter"
        | "abusefilter-protected-vars"
        | "abusefilterblockeddomainhit"
        | "abusefilterprivatedetails"
        | "block"
        | "checkuser-temporary-account"
        | "contentmodel"
        | "create"
        | "delete"
        | "gblblock"
        | "gblrename"
        | "gblrights"
        | "globalauth"
        | "growthexperiments"
        | "import"
        | "ipinfo"
        | "managetags"
        | "massmessage"
        | "merge"
        | "move"
        | "newusers"
        | "oath"
        | "pagetriage-copyvio"
        | "pagetriage-curation"
        | "patrol"
        | "protect"
        | "renameuser"
        | "review"
        | "rights"
        | "spamblacklist"
        | "stable"
        | "suppress"
        | "tag"
        | "thanks"
        | "timedmediahandler"
        | "titleblacklist"
        | "upload"
        | "urlshortener"
        | "usermerge";
    leaction?:
        | "abusefilter-protected-vars/*"
        | "abusefilter/create"
        | "abusefilter/hit"
        | "abusefilter/modify"
        | "abusefilterblockeddomainhit/*"
        | "abusefilterprivatedetails/access"
        | "block/block"
        | "block/reblock"
        | "block/unblock"
        | "checkuser-private-event/*"
        | "checkuser-temporary-account/*"
        | "contentmodel/change"
        | "contentmodel/new"
        | "create/create"
        | "delete/delete"
        | "delete/delete_redir"
        | "delete/delete_redir2"
        | "delete/event"
        | "delete/restore"
        | "delete/revision"
        | "gblblock/*"
        | "gblblock/gunblock"
        | "gblrename/merge"
        | "gblrename/promote"
        | "gblrename/rename"
        | "gblrights/deleteset"
        | "gblrights/groupperms"
        | "gblrights/groupprms2"
        | "gblrights/groupprms3"
        | "gblrights/grouprename"
        | "gblrights/newset"
        | "gblrights/setchange"
        | "gblrights/setnewtype"
        | "gblrights/setrename"
        | "gblrights/usergroups"
        | "globalauth/delete"
        | "globalauth/hide"
        | "globalauth/lock"
        | "globalauth/lockandhid"
        | "globalauth/setstatus"
        | "globalauth/unhide"
        | "globalauth/unlock"
        | "growthexperiments/addimage"
        | "growthexperiments/addlink"
        | "growthexperiments/addsectionimage"
        | "growthexperiments/claimmentee"
        | "growthexperiments/claimmentee-no-previous-mentor"
        | "growthexperiments/setmentor"
        | "growthexperiments/setmentor-no-previous-mentor"
        | "import/interwiki"
        | "import/upload"
        | "interwiki/*"
        | "ipinfo/*"
        | "managetags/activate"
        | "managetags/create"
        | "managetags/deactivate"
        | "managetags/delete"
        | "massmessage/*"
        | "massmessage/failure"
        | "massmessage/send"
        | "massmessage/skipbadns"
        | "massmessage/skipnouser"
        | "massmessage/skipoptout"
        | "merge/merge"
        | "move/move"
        | "move/move_redir"
        | "newusers/autocreate"
        | "newusers/byemail"
        | "newusers/create"
        | "newusers/create2"
        | "newusers/forcecreatelocal"
        | "newusers/newusers"
        | "oath/*"
        | "pagetriage-copyvio/delete"
        | "pagetriage-copyvio/insert"
        | "pagetriage-curation/delete"
        | "pagetriage-curation/enqueue"
        | "pagetriage-curation/reviewed"
        | "pagetriage-curation/reviewed-article"
        | "pagetriage-curation/reviewed-redirect"
        | "pagetriage-curation/tag"
        | "pagetriage-curation/unreviewed"
        | "pagetriage-curation/unreviewed-article"
        | "pagetriage-curation/unreviewed-redirect"
        | "patrol/autopatrol"
        | "patrol/patrol"
        | "protect/modify"
        | "protect/move_prot"
        | "protect/protect"
        | "protect/unprotect"
        | "renameuser/renameuser"
        | "review/*"
        | "rights/autopromote"
        | "rights/blockautopromote"
        | "rights/erevoke"
        | "rights/restoreautopromote"
        | "rights/rights"
        | "spamblacklist/*"
        | "stable/config"
        | "stable/modify"
        | "stable/move_stable"
        | "stable/reset"
        | "suppress/block"
        | "suppress/cadelete"
        | "suppress/delete"
        | "suppress/event"
        | "suppress/hide-afl"
        | "suppress/reblock"
        | "suppress/revision"
        | "suppress/setstatus"
        | "suppress/unhide-afl"
        | "tag/update"
        | "thanks/*"
        | "timedmediahandler/resettranscode"
        | "titleblacklist/*"
        | "upload/overwrite"
        | "upload/revert"
        | "upload/upload"
        | "urlshortener/*"
        | "usermerge/*";
    lestart?: timestamp;
    leend?: timestamp;
    ledir?: "newer" | "older";
    leuser?: string;
    letitle?: string;
    lenamespace?: namespace;
    leprefix?: string;
    letag?: string;
    lelimit?: limit;
    lecontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageViewInfo}
 */
export interface ApiActionQueryListMostViewedParams extends ApiActionQueryParams {
    pvimmetric?: "pageviews";
    pvimlimit?: limit;
    pvimoffset?: number;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:mystashedfiles}
 */
export interface ApiActionQueryListMyStashedFilesParams extends ApiActionQueryParams {
    msfprop?: OneOrMore<"size" | "type">;
    msflimit?: limit;
    msfcontinue?: string;
}

export interface ApiActionQueryListOldreviewedpagesParams extends ApiActionQueryParams {
    orstart?: timestamp;
    orend?: timestamp;
    ordir?: "newer" | "older";
    ormaxsize?: number;
    orfilterwatched?: "all" | "watched";
    ornamespace?: namespace | namespace[];
    orcategory?: string;
    orfilterredir?: "all" | "nonredirects" | "redirects";
    orlimit?: limit;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Pagepropnames}
 */
export interface ApiActionQueryListPagePropNamesParams extends ApiActionQueryParams {
    ppncontinue?: string;
    ppnlimit?: limit;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Pageswithprop}
 */
export interface ApiActionQueryListPagesWithPropParams extends ApiActionQueryParams {
    pwppropname: string;
    pwpprop?: OneOrMore<"ids" | "title" | "value">;
    pwpcontinue?: string;
    pwplimit?: limit;
    pwpdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Prefixsearch}
 */
export interface ApiActionQueryListPrefixSearchParams extends ApiActionQueryParams {
    pssearch: string;
    psnamespace?: namespace | namespace[];
    pslimit?: limit;
    psoffset?: number;
    psprofile?: "classic" | "engine_autoselect" | "fast-fuzzy" | "fuzzy" | "normal" | "strict";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageAssessments}
 */
export interface ApiActionQueryListProjectPagesParams extends ApiActionQueryParams {
    wppassessments?: boolean;
    wppprojects: string | string[];
    wpplimit?: limit;
    wppcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageAssessments}
 */
export interface ApiActionQueryListProjectsParams extends ApiActionQueryParams {
    pjsubprojects?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Protectedtitles}
 */
export interface ApiActionQueryListProtectedTitlesParams extends ApiActionQueryParams {
    ptnamespace?: namespace | namespace[];
    ptlevel?: OneOrMore<"autoconfirmed" | "extendedconfirmed" | "sysop" | "templateeditor">;
    ptlimit?: limit;
    ptdir?: "newer" | "older";
    ptstart?: timestamp;
    ptend?: timestamp;
    ptprop?: OneOrMore<
        "comment" | "expiry" | "level" | "parsedcomment" | "timestamp" | "user" | "userid"
    >;
    ptcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Querypage}
 */
export interface ApiActionQueryListQueryPageParams extends ApiActionQueryParams {
    qppage:
        | "Ancientpages"
        | "BrokenRedirects"
        | "Deadendpages"
        | "DisambiguationPageLinks"
        | "DisambiguationPages"
        | "DoubleRedirects"
        | "Fewestrevisions"
        | "GadgetUsage"
        | "GloballyWantedFiles"
        | "ListDuplicatedFiles"
        | "Listredirects"
        | "Lonelypages"
        | "Longpages"
        | "MediaStatistics"
        | "MostGloballyLinkedFiles"
        | "Mostcategories"
        | "Mostimages"
        | "Mostinterwikis"
        | "Mostlinked"
        | "Mostlinkedcategories"
        | "Mostlinkedtemplates"
        | "Mostrevisions"
        | "OrphanedTimedText"
        | "Shortpages"
        | "Uncategorizedcategories"
        | "Uncategorizedimages"
        | "Uncategorizedpages"
        | "Uncategorizedtemplates"
        | "UnconnectedPages"
        | "Unusedcategories"
        | "Unusedimages"
        | "Unusedtemplates"
        | "Unwatchedpages"
        | "Wantedcategories"
        | "Wantedfiles"
        | "Wantedpages"
        | "Wantedtemplates"
        | "Withoutinterwiki";
    qpoffset?: number;
    qplimit?: limit;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Random}
 */
export interface ApiActionQueryListRandomParams extends ApiActionQueryParams {
    rnnamespace?: namespace | namespace[];
    rnfilterredir?: "all" | "nonredirects" | "redirects";
    /**
     * @deprecated
     */
    rnredirect?: boolean;
    rnlimit?: limit;
    rncontinue?: string;
}

/**
 * @private
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API}
 */
export interface ApiActionQueryListReadingListEntriesParams extends ApiActionQueryParams {
    rlelists?: number | number[];
    rlechangedsince?: timestamp;
    rlesort?: "name" | "updated";
    rledir?: "ascending" | "descending";
    rlelimit?: limit;
    rlecontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Recentchanges}
 */
export interface ApiActionQueryListRecentChangesParams extends ApiActionQueryParams {
    rcstart?: timestamp;
    rcend?: timestamp;
    rcdir?: "newer" | "older";
    rcnamespace?: namespace | namespace[];
    rcuser?: string;
    rcexcludeuser?: string;
    rctag?: string;
    rcprop?: OneOrMore<
        | "comment"
        | "flags"
        | "ids"
        | "loginfo"
        | "oresscores"
        | "parsedcomment"
        | "patrolled"
        | "redirect"
        | "sha1"
        | "sizes"
        | "tags"
        | "timestamp"
        | "title"
        | "user"
        | "userid"
    >;
    rcshow?: OneOrMore<
        | "!anon"
        | "!autopatrolled"
        | "!bot"
        | "!minor"
        | "!oresreview"
        | "!patrolled"
        | "!redirect"
        | "anon"
        | "autopatrolled"
        | "bot"
        | "minor"
        | "oresreview"
        | "patrolled"
        | "redirect"
        | "unpatrolled"
    >;
    rclimit?: limit;
    rctype?: OneOrMore<"categorize" | "edit" | "external" | "log" | "new">;
    rctoponly?: boolean;
    rctitle?: string;
    rccontinue?: string;
    rcgeneraterevisions?: boolean;
    rcslot?: "main";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Search}
 */
export interface ApiActionQueryListSearchParams extends ApiActionQueryParams {
    srsearch: string;
    srnamespace?: namespace | namespace[];
    srlimit?: limit;
    sroffset?: number;
    srqiprofile?:
        | "classic"
        | "classic_noboostlinks"
        | "empty"
        | "engine_autoselect"
        | "growth_underlinked"
        | "mlr-1024rs"
        | "popular_inclinks"
        | "popular_inclinks_pv"
        | "wsum_inclinks"
        | "wsum_inclinks_pv";
    srwhat?: "nearmatch" | "text" | "title";
    srinfo?: OneOrMore<"rewrittenquery" | "suggestion" | "totalhits">;
    srprop?: OneOrMore<
        | "categorysnippet"
        | "extensiondata"
        | "isfilematch"
        | "redirectsnippet"
        | "redirecttitle"
        | "sectionsnippet"
        | "sectiontitle"
        | "size"
        | "snippet"
        | "timestamp"
        | "titlesnippet"
        | "wordcount"
        | "hasrelated"
        | "score"
    >;
    srinterwiki?: boolean;
    srenablerewrites?: boolean;
    srsort?:
        | "create_timestamp_asc"
        | "create_timestamp_desc"
        | "incoming_links_asc"
        | "incoming_links_desc"
        | "just_match"
        | "last_edit_asc"
        | "last_edit_desc"
        | "none"
        | "random"
        | "relevance"
        | "user_random";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Tags}
 */
export interface ApiActionQueryListTagsParams extends ApiActionQueryParams {
    tgcontinue?: string;
    tglimit?: limit;
    tgprop?: OneOrMore<
        "active" | "defined" | "description" | "displayname" | "hitcount" | "source"
    >;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Usercontribs}
 */
export interface ApiActionQueryListUserContribsParams extends ApiActionQueryParams {
    uclimit?: limit;
    ucstart?: timestamp;
    ucend?: timestamp;
    uccontinue?: string;
    ucuser?: string | string[];
    ucuserids?: number | number[];
    ucuserprefix?: string;
    uciprange?: string;
    ucdir?: "newer" | "older";
    ucnamespace?: namespace | namespace[];
    ucprop?: OneOrMore<
        | "comment"
        | "flags"
        | "ids"
        | "oresscores"
        | "parsedcomment"
        | "patrolled"
        | "size"
        | "sizediff"
        | "tags"
        | "timestamp"
        | "title"
    >;
    ucshow?: OneOrMore<
        | "!autopatrolled"
        | "!minor"
        | "!new"
        | "!oresreview"
        | "!patrolled"
        | "!top"
        | "autopatrolled"
        | "minor"
        | "new"
        | "oresreview"
        | "patrolled"
        | "top"
    >;
    uctag?: string;
    /**
     * @deprecated
     */
    uctoponly?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Users}
 */
export interface ApiActionQueryListUsersParams extends ApiActionQueryParams {
    usprop?: OneOrMore<
        | "blockinfo"
        | "cancreate"
        | "centralids"
        | "editcount"
        | "emailable"
        | "gender"
        | "groupmemberships"
        | "groups"
        | "implicitgroups"
        | "registration"
        | "rights"
    >;
    usattachedwiki?: string;
    ususers?: string | string[];
    ususerids?: number | number[];
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlist}
 */
export interface ApiActionQueryListWatchlistParams extends ApiActionQueryParams {
    wlallrev?: boolean;
    wlstart?: timestamp;
    wlend?: timestamp;
    wlnamespace?: namespace | namespace[];
    wluser?: string;
    wlexcludeuser?: string;
    wldir?: "newer" | "older";
    wllimit?: limit;
    wlprop?: OneOrMore<
        | "comment"
        | "expiry"
        | "flags"
        | "ids"
        | "loginfo"
        | "notificationtimestamp"
        | "oresscores"
        | "parsedcomment"
        | "patrol"
        | "sizes"
        | "tags"
        | "timestamp"
        | "title"
        | "user"
        | "userid"
    >;
    wlshow?: OneOrMore<
        | "!anon"
        | "!autopatrolled"
        | "!bot"
        | "!minor"
        | "!oresreview"
        | "!patrolled"
        | "!unread"
        | "anon"
        | "autopatrolled"
        | "bot"
        | "minor"
        | "oresreview"
        | "patrolled"
        | "unread"
    >;
    wltype?: OneOrMore<"categorize" | "edit" | "external" | "log" | "new">;
    wlowner?: string;
    wltoken?: string;
    wlcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlistraw}
 */
export interface ApiActionQueryListWatchlistRawParams extends ApiActionQueryParams {
    wrcontinue?: string;
    wrnamespace?: namespace | namespace[];
    wrlimit?: limit;
    wrprop?: OneOrMore<"changed">;
    wrshow?: OneOrMore<"!changed" | "changed">;
    wrowner?: string;
    wrtoken?: string;
    wrdir?: "ascending" | "descending";
    wrfromtitle?: string;
    wrtotitle?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Wikibase/API}
 */
export interface ApiActionQueryListWblistentityusageParams extends ApiActionQueryParams {
    wbleuprop?: OneOrMore<"url">;
    wbleuaspect?: OneOrMore<"C" | "D" | "L" | "O" | "S" | "T" | "X">;
    wbleuentities: string | string[];
    wbleulimit?: limit;
    wbleucontinue?: string;
}

export interface ApiActionQueryListWikiSetsParams extends ApiActionQueryParams {
    wsfrom?: string;
    wsprop?: OneOrMore<"type" | "wikisincluded" | "wikisnotincluded">;
    wslimit?: limit;
    wsorderbyname?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allmessages}
 */
export interface ApiActionQueryMetaAllMessagesParams extends ApiActionQueryParams {
    ammessages?: string | string[];
    amprop?: OneOrMore<"default">;
    amenableparser?: boolean;
    amnocontent?: boolean;
    amincludelocal?: boolean;
    amargs?: string | string[];
    amfilter?: string;
    amcustomised?: "all" | "modified" | "unmodified";
    amlang?: string;
    amfrom?: string;
    amto?: string;
    amtitle?: string;
    amprefix?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Authmanagerinfo}
 */
export interface ApiActionQueryMetaAuthManagerInfoParams extends ApiActionQueryParams {
    amisecuritysensitiveoperation?: string;
    amirequestsfor?:
        | "change"
        | "create"
        | "create-continue"
        | "link"
        | "link-continue"
        | "login"
        | "login-continue"
        | "remove"
        | "unlink";
    amimergerequestfields?: boolean;
    amimessageformat?: "html" | "none" | "raw" | "wikitext";
}

export interface ApiActionQueryMetaBabelParams extends ApiActionQueryParams {
    babuser: string;
}

export interface ApiActionQueryMetaCommunityConfigurationParams extends ApiActionQueryParams {
    ccrprovider:
        | "GrowthHomepage"
        | "GrowthMentorList"
        | "GrowthSuggestedEdits"
        | "HelpPanel"
        | "Mentorship";
    ccrassertversion?: string;
}

/**
 * @private
 */
export interface ApiActionQueryMetaCxdeletedtranslationsParams extends ApiActionQueryParams {
    dtafter?: timestamp;
    dtnamespace?: namespace;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ApiFeatureUsage}
 */
export interface ApiActionQueryMetaFeatureUsageParams extends ApiActionQueryParams {
    afustart?: timestamp;
    afuend?: timestamp;
    afuagent?: string;
    afufeatures?: string | string[];
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Filerepoinfo}
 */
export interface ApiActionQueryMetaFileRepoInfoParams extends ApiActionQueryParams {
    friprop?: OneOrMore<
        | "canUpload"
        | "descBaseUrl"
        | "descriptionCacheExpiry"
        | "displayname"
        | "favicon"
        | "fetchDescription"
        | "initialCapital"
        | "local"
        | "name"
        | "rootUrl"
        | "scriptDirUrl"
        | "thumbUrl"
        | "url"
    >;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GlobalPreferences/API}
 */
export interface ApiActionQueryMetaGlobalPreferencesParams extends ApiActionQueryParams {
    gprprop?: OneOrMore<"localoverrides" | "preferences">;
}

export interface ApiActionQueryMetaGlobalRenameStatusParams extends ApiActionQueryParams {
    grsuser?: string;
}

export interface ApiActionQueryMetaGlobalUserInfoParams extends ApiActionQueryParams {
    guiuser?: string;
    guiid?: number;
    guiprop?: OneOrMore<"editcount" | "groups" | "merged" | "rights" | "unattached">;
}

// tslint:disable-next-line:no-empty-interface
export interface ApiActionQueryMetaGrowthMenteeStatusParams extends ApiActionQueryParams {}

// tslint:disable-next-line:no-empty-interface
export interface ApiActionQueryMetaGrowthMentorStatusParams extends ApiActionQueryParams {}

/**
 * @private
 */
export interface ApiActionQueryMetaGrowthNextSuggestedTaskTypeParams extends ApiActionQueryParams {
    gnsttactivetasktype: "copyedit" | "expand" | "links" | "references" | "update";
}

export interface ApiActionQueryMetaLanguageinfoParams extends ApiActionQueryParams {
    liprop?: OneOrMore<
        "autonym" | "bcp47" | "code" | "dir" | "fallbacks" | "name" | "variantnames" | "variants"
    >;
    licode?: string | string[];
    licontinue?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface ApiActionQueryMetaLinterStatsParams extends ApiActionQueryParams {}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Echo_(Notifications)/API}
 */
export interface ApiActionQueryMetaNotificationsParams extends ApiActionQueryParams {
    notwikis?: string | string[];
    notfilter?: OneOrMore<"!read" | "read">;
    notprop?: OneOrMore<"count" | "list" | "seenTime">;
    notsections?: OneOrMore<"alert" | "message">;
    notgroupbysection?: boolean;
    notformat?: "flyout" | "html" | "model" | "special";
    notlimit?: limit;
    notcontinue?: string;
    notunreadfirst?: boolean;
    nottitles?: string | string[];
    notbundle?: boolean;
    notnotifiertypes?: OneOrMore<"email" | "push" | "web">;
    notalertcontinue?: string;
    notalertunreadfirst?: boolean;
    notmessagecontinue?: string;
    notmessageunreadfirst?: boolean;
    notcrosswikisummary?: boolean;
}

/**
 * @private
 */
export interface ApiActionQueryMetaOATHParams extends ApiActionQueryParams {
    oathuser?: string;
    oathreason?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ORES}
 */
// tslint:disable-next-line:no-empty-interface
export interface ApiActionQueryMetaORESParams extends ApiActionQueryParams {}

/**
 * @private
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API}
 */
export interface ApiActionQueryMetaReadingListsParams extends ApiActionQueryParams {
    rllist?: number;
    rlproject?: string;
    rltitle?: string;
    rlchangedsince?: timestamp;
    rlsort?: "name" | "updated";
    rldir?: "ascending" | "descending";
    rllimit?: limit;
    rlcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Siteinfo}
 */
export interface ApiActionQueryMetaSiteinfoParams extends ApiActionQueryParams {
    siprop?: OneOrMore<
        | "autocreatetempuser"
        | "autopromote"
        | "autopromoteonce"
        | "clientlibraries"
        | "dbrepllag"
        | "defaultoptions"
        | "extensions"
        | "extensiontags"
        | "fileextensions"
        | "functionhooks"
        | "general"
        | "interwikimap"
        | "languages"
        | "languagevariants"
        | "libraries"
        | "magicwords"
        | "namespacealiases"
        | "namespaces"
        | "protocols"
        | "restrictions"
        | "rightsinfo"
        | "showhooks"
        | "skins"
        | "specialpagealiases"
        | "statistics"
        | "uploaddialog"
        | "usergroups"
        | "variables"
    >;
    sifilteriw?: "!local" | "local";
    sishowalldb?: boolean;
    sinumberingroup?: boolean;
    siinlanguagecode?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageViewInfo}
 */
export interface ApiActionQueryMetaSiteViewsParams extends ApiActionQueryParams {
    pvismetric?: "pageviews" | "uniques";
    pvisdays?: number;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Tokens}
 */
export interface ApiActionQueryMetaTokensParams extends ApiActionQueryParams {
    type?: OneOrMore<
        | "createaccount"
        | "csrf"
        | "deleteglobalaccount"
        | "login"
        | "patrol"
        | "rollback"
        | "setglobalaccountstatus"
        | "userrights"
        | "watch"
        | "*"
    >;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Echo_(Notifications)/API}
 */
export interface ApiActionQueryMetaUnreadNotificationPagesParams extends ApiActionQueryParams {
    unpwikis?: string | string[];
    unpgrouppages?: boolean;
    unplimit?: limit;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Userinfo}
 */
export interface ApiActionQueryMetaUserInfoParams extends ApiActionQueryParams {
    uiprop?: OneOrMore<
        | "acceptlang"
        | "blockinfo"
        | "cancreateaccount"
        | "centralids"
        | "changeablegroups"
        | "editcount"
        | "email"
        | "groupmemberships"
        | "groups"
        | "hasmsg"
        | "implicitgroups"
        | "latestcontrib"
        | "options"
        | "ratelimits"
        | "realname"
        | "registrationdate"
        | "rights"
        | "theoreticalratelimits"
        | "unreadcount"
        | "*"
    >;
    uiattachedwiki?: string;
}

export interface ApiActionQueryMetaWikibaseParams extends ApiActionQueryParams {
    wbprop?: OneOrMore<"siteid" | "url">;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allcategories}
 */
export interface ApiActionQueryGeneratorAllCategoriesParams extends ApiActionQueryParams {
    generator?: "allcategories";
    gacfrom?: string;
    gaccontinue?: string;
    gacto?: string;
    gacprefix?: string;
    gacdir?: "ascending" | "descending";
    gacmin?: number;
    gacmax?: number;
    gaclimit?: limit;
    gacprop?: OneOrMore<"hidden" | "size">;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alldeletedrevisions}
 */
export interface ApiActionQueryGeneratorAllDeletedRevisionsParams extends ApiActionQueryParams {
    generator?: "alldeletedrevisions";
    gadrprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flags"
        | "ids"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    gadrslots?: string | string[];
    [k: `gadrcontentformat-${string}`]:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    gadrlimit?: limit;
    /**
     * @deprecated
     */
    gadrexpandtemplates?: boolean;
    /**
     * @deprecated
     */
    gadrgeneratexml?: boolean;
    /**
     * @deprecated
     */
    gadrparse?: boolean;
    gadrsection?: string;
    /**
     * @deprecated
     */
    gadrdiffto?: string;
    /**
     * @deprecated
     */
    gadrdifftotext?: string;
    /**
     * @deprecated
     */
    gadrdifftotextpst?: boolean;
    /**
     * @deprecated
     */
    gadrcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    gadruser?: string;
    gadrnamespace?: namespace | namespace[];
    gadrstart?: timestamp;
    gadrend?: timestamp;
    gadrdir?: "newer" | "older";
    gadrfrom?: string;
    gadrto?: string;
    gadrprefix?: string;
    gadrexcludeuser?: string;
    gadrtag?: string;
    gadrcontinue?: string;
    gadrgeneratetitles?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allfileusages}
 */
export interface ApiActionQueryGeneratorQueryAllFileUsagesParams extends ApiActionQueryParams {
    generator?: "allfileusages";
    gafcontinue?: string;
    gaffrom?: string;
    gafto?: string;
    gafprefix?: string;
    gafunique?: boolean;
    gafprop?: OneOrMore<"ids" | "title">;
    gaflimit?: limit;
    gafdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allimages}
 */
export interface ApiActionQueryGeneratorAllImagesParams extends ApiActionQueryParams {
    generator?: "allimages";
    gaisort?: "name" | "timestamp";
    gaidir?: "ascending" | "descending" | "newer" | "older";
    gaifrom?: string;
    gaito?: string;
    gaicontinue?: string;
    gaistart?: timestamp;
    gaiend?: timestamp;
    gaiprop?: OneOrMore<
        | "badfile"
        | "bitdepth"
        | "canonicaltitle"
        | "comment"
        | "commonmetadata"
        | "dimensions"
        | "extmetadata"
        | "mediatype"
        | "metadata"
        | "mime"
        | "parsedcomment"
        | "sha1"
        | "size"
        | "timestamp"
        | "url"
        | "user"
        | "userid"
    >;
    gaiprefix?: string;
    gaiminsize?: number;
    gaimaxsize?: number;
    gaisha1?: string;
    gaisha1base36?: string;
    gaiuser?: string;
    gaifilterbots?: "all" | "bots" | "nobots";
    gaimime?: string | string[];
    gailimit?: limit;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alllinks}
 */
export interface ApiActionQueryGeneratorAllLinksParams extends ApiActionQueryParams {
    generator?: "alllinks";
    galcontinue?: string;
    galfrom?: string;
    galto?: string;
    galprefix?: string;
    galunique?: boolean;
    galprop?: OneOrMore<"ids" | "title">;
    galnamespace?: namespace;
    gallimit?: limit;
    galdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allpages}
 */
export interface ApiActionQueryGeneratorAllPagesParams extends ApiActionQueryParams {
    generator?: "allpages";
    gapfrom?: string;
    gapcontinue?: string;
    gapto?: string;
    gapprefix?: string;
    gapnamespace?: namespace;
    gapfilterredir?: "all" | "nonredirects" | "redirects";
    gapfilterlanglinks?: "all" | "withlanglinks" | "withoutlanglinks";
    gapminsize?: number;
    gapmaxsize?: number;
    gapprtype?: OneOrMore<"edit" | "move" | "upload">;
    gapprlevel?: OneOrMore<"" | "autoconfirmed" | "extendedconfirmed" | "sysop" | "templateeditor">;
    gapprfiltercascade?: "all" | "cascading" | "noncascading";
    gapprexpiry?: "all" | "definite" | "indefinite";
    gaplimit?: limit;
    gapdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allredirects}
 */
export interface ApiActionQueryGeneratorQueryAllRedirectsParams extends ApiActionQueryParams {
    generator?: "allredirects";
    garcontinue?: string;
    garfrom?: string;
    garto?: string;
    garprefix?: string;
    garunique?: boolean;
    garprop?: OneOrMore<"fragment" | "ids" | "interwiki" | "title">;
    garnamespace?: namespace;
    garlimit?: limit;
    gardir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allrevisions}
 */
export interface ApiActionQueryGeneratorAllRevisionsParams extends ApiActionQueryParams {
    generator?: "allrevisions";
    garvprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flags"
        | "ids"
        | "oresscores"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    garvslots?: string | string[];
    [k: `garvcontentformat-${string}`]:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    garvlimit?: limit;
    /**
     * @deprecated
     */
    garvexpandtemplates?: boolean;
    /**
     * @deprecated
     */
    garvgeneratexml?: boolean;
    /**
     * @deprecated
     */
    garvparse?: boolean;
    garvsection?: string;
    /**
     * @deprecated
     */
    garvdiffto?: string;
    /**
     * @deprecated
     */
    garvdifftotext?: string;
    /**
     * @deprecated
     */
    garvdifftotextpst?: boolean;
    /**
     * @deprecated
     */
    garvcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    garvuser?: string;
    garvnamespace?: namespace | namespace[];
    garvstart?: timestamp;
    garvend?: timestamp;
    garvdir?: "newer" | "older";
    garvexcludeuser?: string;
    garvcontinue?: string;
    garvgeneratetitles?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alltransclusions}
 */
export interface ApiActionQueryGeneratorQueryAllTransclusionsParams extends ApiActionQueryParams {
    generator?: "alltransclusions";
    gatcontinue?: string;
    gatfrom?: string;
    gatto?: string;
    gatprefix?: string;
    gatunique?: boolean;
    gatprop?: OneOrMore<"ids" | "title">;
    gatnamespace?: namespace;
    gatlimit?: limit;
    gatdir?: "ascending" | "descending";
}

export interface ApiActionQueryGeneratorAutomaticTranslationDenseLanguagesParams
    extends ApiActionQueryParams {
    "generator"?: "automatictranslationdenselanguages";
    "gqid": string;
    "gsection-titles"?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Backlinks}
 */
export interface ApiActionQueryGeneratorBacklinksParams extends ApiActionQueryParams {
    generator?: "backlinks";
    gbltitle?: string;
    gblpageid?: number;
    gblcontinue?: string;
    gblnamespace?: namespace | namespace[];
    gbldir?: "ascending" | "descending";
    gblfilterredir?: "all" | "nonredirects" | "redirects";
    gbllimit?: limit;
    gblredirect?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categories}
 */
export interface ApiActionQueryGeneratorCategoriesParams extends ApiActionQueryParams {
    generator?: "categories";
    gclprop?: OneOrMore<"hidden" | "sortkey" | "timestamp">;
    gclshow?: OneOrMore<"!hidden" | "hidden">;
    gcllimit?: limit;
    gclcontinue?: string;
    gclcategories?: string | string[];
    gcldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categorymembers}
 */
export interface ApiActionQueryGeneratorCategoryMembersParams extends ApiActionQueryParams {
    generator?: "categorymembers";
    gcmtitle?: string;
    gcmpageid?: number;
    gcmprop?: OneOrMore<"ids" | "sortkey" | "sortkeyprefix" | "timestamp" | "title" | "type">;
    gcmnamespace?: namespace | namespace[];
    gcmtype?: OneOrMore<"file" | "page" | "subcat">;
    gcmcontinue?: string;
    gcmlimit?: limit;
    gcmsort?: "sortkey" | "timestamp";
    gcmdir?: "asc" | "ascending" | "desc" | "descending" | "newer" | "older";
    gcmstart?: timestamp;
    gcmend?: timestamp;
    gcmstarthexsortkey?: string;
    gcmendhexsortkey?: string;
    gcmstartsortkeyprefix?: string;
    gcmendsortkeyprefix?: string;
    /**
     * @deprecated
     */
    gcmstartsortkey?: string;
    /**
     * @deprecated
     */
    gcmendsortkey?: string;
}

export interface ApiActionQueryGeneratorContentTranslationParams extends ApiActionQueryParams {
    generator?: "contenttranslation";
    gtranslationid?: string;
    gfrom?: string;
    gto?: string;
    gsourcetitle?: string;
    gsourcesectiontitle?: string;
    glimit?: limit;
    goffset?: string;
    gtype?: "draft" | "published";
    gusecase?: "desktop-editor-draft" | "translation-corpora-units" | "unified-dashboard";
}

export interface ApiActionQueryGeneratorContentTranslationSuggestionsParams
    extends ApiActionQueryParams {
    generator?: "contenttranslationsuggestions";
    gfrom?: string;
    gto?: string;
    glistid?: string;
    glimit?: limit;
    goffset?: string;
    gseed?: number;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Deletedrevisions}
 */
export interface ApiActionQueryGeneratorDeletedRevisionsParams extends ApiActionQueryParams {
    generator?: "deletedrevisions";
    gdrvprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flags"
        | "ids"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    gdrvslots?: string | string[];
    [k: `gdrvcontentformat-${string}`]:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    gdrvlimit?: limit;
    /**
     * @deprecated
     */
    gdrvexpandtemplates?: boolean;
    /**
     * @deprecated
     */
    gdrvgeneratexml?: boolean;
    /**
     * @deprecated
     */
    gdrvparse?: boolean;
    gdrvsection?: string;
    /**
     * @deprecated
     */
    gdrvdiffto?: string;
    /**
     * @deprecated
     */
    gdrvdifftotext?: string;
    /**
     * @deprecated
     */
    gdrvdifftotextpst?: boolean;
    /**
     * @deprecated
     */
    gdrvcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    gdrvstart?: timestamp;
    gdrvend?: timestamp;
    gdrvdir?: "newer" | "older";
    gdrvtag?: string;
    gdrvuser?: string;
    gdrvexcludeuser?: string;
    gdrvcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Duplicatefiles}
 */
export interface ApiActionQueryGeneratorDuplicateFilesParams extends ApiActionQueryParams {
    generator?: "duplicatefiles";
    gdflimit?: limit;
    gdfcontinue?: string;
    gdfdir?: "ascending" | "descending";
    gdflocalonly?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Embeddedin}
 */
export interface ApiActionQueryGeneratorQueryEmbeddedInParams extends ApiActionQueryParams {
    generator?: "embeddedin";
    geititle?: string;
    geipageid?: number;
    geicontinue?: string;
    geinamespace?: namespace | namespace[];
    geidir?: "ascending" | "descending";
    geifilterredir?: "all" | "nonredirects" | "redirects";
    geilimit?: limit;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Exturlusage}
 */
export interface ApiActionQueryGeneratorExturlusageParams extends ApiActionQueryParams {
    generator?: "exturlusage";
    geuprop?: OneOrMore<"ids" | "title" | "url">;
    geucontinue?: string;
    geuprotocol?:
        | ""
        | "bitcoin"
        | "ftp"
        | "ftps"
        | "geo"
        | "git"
        | "gopher"
        | "http"
        | "https"
        | "irc"
        | "ircs"
        | "magnet"
        | "mailto"
        | "matrix"
        | "mms"
        | "news"
        | "nntp"
        | "redis"
        | "sftp"
        | "sip"
        | "sips"
        | "sms"
        | "ssh"
        | "svn"
        | "tel"
        | "telnet"
        | "urn"
        | "worldwind"
        | "xmpp";
    geuquery?: string;
    geunamespace?: namespace | namespace[];
    geulimit?: limit;
    /**
     * @deprecated
     */
    geuexpandurl?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Fileusage}
 */
export interface ApiActionQueryGeneratorQueryFileUsageParams extends ApiActionQueryParams {
    generator?: "fileusage";
    gfuprop?: OneOrMore<"pageid" | "redirect" | "title">;
    gfunamespace?: namespace | namespace[];
    gfushow?: OneOrMore<"!redirect" | "redirect">;
    gfulimit?: limit;
    gfucontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GeoData#list.3Dgeosearch}
 */
export interface ApiActionQueryGeneratorGeoSearchParams extends ApiActionQueryParams {
    generator?: "geosearch";
    ggscoord?: string;
    ggspage?: string;
    ggsbbox?: string;
    ggsradius?: number;
    ggsmaxdim?: number;
    ggssort?: "distance" | "relevance";
    ggslimit?: limit;
    ggsglobe?: "earth";
    ggsnamespace?: namespace | namespace[];
    ggsprop?: OneOrMore<"country" | "dim" | "globe" | "name" | "region" | "type">;
    ggsprimary?: "all" | "primary" | "secondary";
    ggsdebug?: boolean;
}

/**
 * @private
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GrowthExperiments#API}
 */
export interface ApiActionQueryGeneratorGrowthTasksParams extends ApiActionQueryParams {
    generator?: "growthtasks";
    ggttasktypes?: OneOrMore<"copyedit" | "expand" | "links" | "references" | "update">;
    ggttopics?: OneOrMore<
        | "africa"
        | "architecture"
        | "art"
        | "asia"
        | "biography"
        | "biology"
        | "business-and-economics"
        | "central-america"
        | "chemistry"
        | "comics-and-anime"
        | "computers-and-internet"
        | "earth-and-environment"
        | "education"
        | "engineering"
        | "entertainment"
        | "europe"
        | "fashion"
        | "food-and-drink"
        | "general-science"
        | "history"
        | "literature"
        | "mathematics"
        | "medicine-and-health"
        | "military-and-warfare"
        | "music"
        | "north-america"
        | "oceania"
        | "performing-arts"
        | "philosophy-and-religion"
        | "physics"
        | "politics-and-government"
        | "society"
        | "south-america"
        | "sports"
        | "technology"
        | "transportation"
        | "tv-and-film"
        | "video-games"
        | "women"
    >;
    ggttopicsmode?: "AND" | "OR";
    ggtlimit?: limit;
    ggtoffset?: number;
    ggtdebug?: boolean;
    ggtexcludepageids?: number | number[];
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Images}
 */
export interface ApiActionQueryGeneratorImagesParams extends ApiActionQueryParams {
    generator?: "images";
    gimlimit?: limit;
    gimcontinue?: string;
    gimimages?: string | string[];
    gimdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Imageusage}
 */
export interface ApiActionQueryGeneratorQueryImageUsageParams extends ApiActionQueryParams {
    generator?: "imageusage";
    giutitle?: string;
    giupageid?: number;
    giucontinue?: string;
    giunamespace?: namespace | namespace[];
    giudir?: "ascending" | "descending";
    giufilterredir?: "all" | "nonredirects" | "redirects";
    giulimit?: limit;
    giuredirect?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Iwbacklinks}
 */
export interface ApiActionQueryGeneratorIWBacklinksParams extends ApiActionQueryParams {
    generator?: "iwbacklinks";
    giwblprefix?: string;
    giwbltitle?: string;
    giwblcontinue?: string;
    giwbllimit?: limit;
    giwblprop?: OneOrMore<"iwprefix" | "iwtitle">;
    giwbldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Langbacklinks}
 */
export interface ApiActionQueryGeneratorLangBacklinksParams extends ApiActionQueryParams {
    generator?: "langbacklinks";
    glbllang?: string;
    glbltitle?: string;
    glblcontinue?: string;
    glbllimit?: limit;
    glblprop?: OneOrMore<"lllang" | "lltitle">;
    glbldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Links}
 */
export interface ApiActionQueryGeneratorLinksParams extends ApiActionQueryParams {
    generator?: "links";
    gplnamespace?: namespace | namespace[];
    gpllimit?: limit;
    gplcontinue?: string;
    gpltitles?: string | string[];
    gpldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Linkshere}
 */
export interface ApiActionQueryGeneratorQueryLinksHereParams extends ApiActionQueryParams {
    generator?: "linkshere";
    glhprop?: OneOrMore<"pageid" | "redirect" | "title">;
    glhnamespace?: namespace | namespace[];
    glhshow?: OneOrMore<"!redirect" | "redirect">;
    glhlimit?: limit;
    glhcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageViewInfo}
 */
export interface ApiActionQueryGeneratorMostViewedParams extends ApiActionQueryParams {
    generator?: "mostviewed";
    gpvimmetric?: "pageviews";
    gpvimlimit?: limit;
    gpvimoffset?: number;
}

export interface ApiActionQueryGeneratorOldreviewedpagesParams extends ApiActionQueryParams {
    generator?: "oldreviewedpages";
    gorstart?: timestamp;
    gorend?: timestamp;
    gordir?: "newer" | "older";
    gormaxsize?: number;
    gorfilterwatched?: "all" | "watched";
    gornamespace?: namespace | namespace[];
    gorcategory?: string;
    gorfilterredir?: "all" | "nonredirects" | "redirects";
    gorlimit?: limit;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Pageswithprop}
 */
export interface ApiActionQueryGeneratorPagesWithPropParams extends ApiActionQueryParams {
    generator?: "pageswithprop";
    gpwppropname: string;
    gpwpprop?: OneOrMore<"ids" | "title" | "value">;
    gpwpcontinue?: string;
    gpwplimit?: limit;
    gpwpdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Prefixsearch}
 */
export interface ApiActionQueryGeneratorPrefixSearchParams extends ApiActionQueryParams {
    generator?: "prefixsearch";
    gpssearch: string;
    gpsnamespace?: namespace | namespace[];
    gpslimit?: limit;
    gpsoffset?: number;
    gpsprofile?: "classic" | "engine_autoselect" | "fast-fuzzy" | "fuzzy" | "normal" | "strict";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageAssessments}
 */
export interface ApiActionQueryGeneratorProjectPagesParams extends ApiActionQueryParams {
    generator?: "projectpages";
    gwppassessments?: boolean;
    gwppprojects: string | string[];
    gwpplimit?: limit;
    gwppcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Protectedtitles}
 */
export interface ApiActionQueryGeneratorProtectedTitlesParams extends ApiActionQueryParams {
    generator?: "protectedtitles";
    gptnamespace?: namespace | namespace[];
    gptlevel?: OneOrMore<"autoconfirmed" | "extendedconfirmed" | "sysop" | "templateeditor">;
    gptlimit?: limit;
    gptdir?: "newer" | "older";
    gptstart?: timestamp;
    gptend?: timestamp;
    gptprop?: OneOrMore<
        "comment" | "expiry" | "level" | "parsedcomment" | "timestamp" | "user" | "userid"
    >;
    gptcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Querypage}
 */
export interface ApiActionQueryGeneratorQueryPageParams extends ApiActionQueryParams {
    generator?: "querypage";
    gqppage:
        | "Ancientpages"
        | "BrokenRedirects"
        | "Deadendpages"
        | "DisambiguationPageLinks"
        | "DisambiguationPages"
        | "DoubleRedirects"
        | "Fewestrevisions"
        | "GadgetUsage"
        | "GloballyWantedFiles"
        | "ListDuplicatedFiles"
        | "Listredirects"
        | "Lonelypages"
        | "Longpages"
        | "MediaStatistics"
        | "MostGloballyLinkedFiles"
        | "Mostcategories"
        | "Mostimages"
        | "Mostinterwikis"
        | "Mostlinked"
        | "Mostlinkedcategories"
        | "Mostlinkedtemplates"
        | "Mostrevisions"
        | "OrphanedTimedText"
        | "Shortpages"
        | "Uncategorizedcategories"
        | "Uncategorizedimages"
        | "Uncategorizedpages"
        | "Uncategorizedtemplates"
        | "UnconnectedPages"
        | "Unusedcategories"
        | "Unusedimages"
        | "Unusedtemplates"
        | "Unwatchedpages"
        | "Wantedcategories"
        | "Wantedfiles"
        | "Wantedpages"
        | "Wantedtemplates"
        | "Withoutinterwiki";
    gqpoffset?: number;
    gqplimit?: limit;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Random}
 */
export interface ApiActionQueryGeneratorRandomParams extends ApiActionQueryParams {
    generator?: "random";
    grnnamespace?: namespace | namespace[];
    grnfilterredir?: "all" | "nonredirects" | "redirects";
    /**
     * @deprecated
     */
    grnredirect?: boolean;
    grnlimit?: limit;
    grncontinue?: string;
}

/**
 * @private
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API}
 */
export interface ApiActionQueryGeneratorReadingListEntriesParams extends ApiActionQueryParams {
    generator?: "readinglistentries";
    grlelists?: number | number[];
    grlechangedsince?: timestamp;
    grlesort?: "name" | "updated";
    grledir?: "ascending" | "descending";
    grlelimit?: limit;
    grlecontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Recentchanges}
 */
export interface ApiActionQueryGeneratorRecentChangesParams extends ApiActionQueryParams {
    generator?: "recentchanges";
    grcstart?: timestamp;
    grcend?: timestamp;
    grcdir?: "newer" | "older";
    grcnamespace?: namespace | namespace[];
    grcuser?: string;
    grcexcludeuser?: string;
    grctag?: string;
    grcprop?: OneOrMore<
        | "comment"
        | "flags"
        | "ids"
        | "loginfo"
        | "oresscores"
        | "parsedcomment"
        | "patrolled"
        | "redirect"
        | "sha1"
        | "sizes"
        | "tags"
        | "timestamp"
        | "title"
        | "user"
        | "userid"
    >;
    grcshow?: OneOrMore<
        | "!anon"
        | "!autopatrolled"
        | "!bot"
        | "!minor"
        | "!oresreview"
        | "!patrolled"
        | "!redirect"
        | "anon"
        | "autopatrolled"
        | "bot"
        | "minor"
        | "oresreview"
        | "patrolled"
        | "redirect"
        | "unpatrolled"
    >;
    grclimit?: limit;
    grctype?: OneOrMore<"categorize" | "edit" | "external" | "log" | "new">;
    grctoponly?: boolean;
    grctitle?: string;
    grccontinue?: string;
    grcgeneraterevisions?: boolean;
    grcslot?: "main";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Redirects}
 */
export interface ApiActionQueryGeneratorQueryRedirectsParams extends ApiActionQueryParams {
    generator?: "redirects";
    grdprop?: OneOrMore<"fragment" | "pageid" | "title">;
    grdnamespace?: namespace | namespace[];
    grdshow?: OneOrMore<"!fragment" | "fragment">;
    grdlimit?: limit;
    grdcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Revisions}
 */
export interface ApiActionQueryGeneratorRevisionsParams extends ApiActionQueryParams {
    generator?: "revisions";
    grvprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flagged"
        | "flags"
        | "ids"
        | "oresscores"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    grvslots?: string | string[];
    [k: `grvcontentformat-${string}`]:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    grvlimit?: limit;
    /**
     * @deprecated
     */
    grvexpandtemplates?: boolean;
    /**
     * @deprecated
     */
    grvgeneratexml?: boolean;
    /**
     * @deprecated
     */
    grvparse?: boolean;
    grvsection?: string;
    /**
     * @deprecated
     */
    grvdiffto?: string;
    /**
     * @deprecated
     */
    grvdifftotext?: string;
    /**
     * @deprecated
     */
    grvdifftotextpst?: boolean;
    /**
     * @deprecated
     */
    grvcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    grvstartid?: number;
    grvendid?: number;
    grvstart?: timestamp;
    grvend?: timestamp;
    grvdir?: "newer" | "older";
    grvuser?: string;
    grvexcludeuser?: string;
    grvtag?: string;
    grvcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Search}
 */
export interface ApiActionQueryGeneratorSearchParams extends ApiActionQueryParams {
    generator?: "search";
    gsrsearch: string;
    gsrnamespace?: namespace | namespace[];
    gsrlimit?: limit;
    gsroffset?: number;
    gsrqiprofile?:
        | "classic"
        | "classic_noboostlinks"
        | "empty"
        | "engine_autoselect"
        | "growth_underlinked"
        | "mlr-1024rs"
        | "popular_inclinks"
        | "popular_inclinks_pv"
        | "wsum_inclinks"
        | "wsum_inclinks_pv";
    gsrwhat?: "nearmatch" | "text" | "title";
    gsrinfo?: OneOrMore<"rewrittenquery" | "suggestion" | "totalhits">;
    gsrprop?: OneOrMore<
        | "categorysnippet"
        | "extensiondata"
        | "isfilematch"
        | "redirectsnippet"
        | "redirecttitle"
        | "sectionsnippet"
        | "sectiontitle"
        | "size"
        | "snippet"
        | "timestamp"
        | "titlesnippet"
        | "wordcount"
        | "hasrelated"
        | "score"
    >;
    gsrinterwiki?: boolean;
    gsrenablerewrites?: boolean;
    gsrsort?:
        | "create_timestamp_asc"
        | "create_timestamp_desc"
        | "incoming_links_asc"
        | "incoming_links_desc"
        | "just_match"
        | "last_edit_asc"
        | "last_edit_desc"
        | "none"
        | "random"
        | "relevance"
        | "user_random";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Templates}
 */
export interface ApiActionQueryGeneratorQueryTemplatesParams extends ApiActionQueryParams {
    generator?: "templates";
    gtlnamespace?: namespace | namespace[];
    gtllimit?: limit;
    gtlcontinue?: string;
    gtltemplates?: string | string[];
    gtldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Transcludedin}
 */
export interface ApiActionQueryGeneratorQueryTranscludedInParams extends ApiActionQueryParams {
    generator?: "transcludedin";
    gtiprop?: OneOrMore<"pageid" | "redirect" | "title">;
    gtinamespace?: namespace | namespace[];
    gtishow?: OneOrMore<"!redirect" | "redirect">;
    gtilimit?: limit;
    gticontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlist}
 */
export interface ApiActionQueryGeneratorWatchlistParams extends ApiActionQueryParams {
    generator?: "watchlist";
    gwlallrev?: boolean;
    gwlstart?: timestamp;
    gwlend?: timestamp;
    gwlnamespace?: namespace | namespace[];
    gwluser?: string;
    gwlexcludeuser?: string;
    gwldir?: "newer" | "older";
    gwllimit?: limit;
    gwlprop?: OneOrMore<
        | "comment"
        | "expiry"
        | "flags"
        | "ids"
        | "loginfo"
        | "notificationtimestamp"
        | "oresscores"
        | "parsedcomment"
        | "patrol"
        | "sizes"
        | "tags"
        | "timestamp"
        | "title"
        | "user"
        | "userid"
    >;
    gwlshow?: OneOrMore<
        | "!anon"
        | "!autopatrolled"
        | "!bot"
        | "!minor"
        | "!oresreview"
        | "!patrolled"
        | "!unread"
        | "anon"
        | "autopatrolled"
        | "bot"
        | "minor"
        | "oresreview"
        | "patrolled"
        | "unread"
    >;
    gwltype?: OneOrMore<"categorize" | "edit" | "external" | "log" | "new">;
    gwlowner?: string;
    gwltoken?: string;
    gwlcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlistraw}
 */
export interface ApiActionQueryGeneratorWatchlistRawParams extends ApiActionQueryParams {
    generator?: "watchlistraw";
    gwrcontinue?: string;
    gwrnamespace?: namespace | namespace[];
    gwrlimit?: limit;
    gwrprop?: OneOrMore<"changed">;
    gwrshow?: OneOrMore<"!changed" | "changed">;
    gwrowner?: string;
    gwrtoken?: string;
    gwrdir?: "ascending" | "descending";
    gwrfromtitle?: string;
    gwrtotitle?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Wikibase/API}
 */
export interface ApiActionQueryGeneratorWblistentityusageParams extends ApiActionQueryParams {
    generator?: "wblistentityusage";
    gwbleuprop?: OneOrMore<"url">;
    gwbleuaspect?: OneOrMore<"C" | "D" | "L" | "O" | "S" | "T" | "X">;
    gwbleuentities: string | string[];
    gwbleulimit?: limit;
    gwbleucontinue?: string;
}

/**
 * @private
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API}
 */
export interface ApiActionReadingListsParams extends ApiParams {
    action?: "readinglists";
    command: ApiActionReadingListsParamsCommand;
    token?: string;
}

type ApiActionReadingListsParamsCommand = keyof ApiActionReadingListsParamsCommandMap;

interface ApiActionReadingListsParamsCommandMap {
    create: ApiActionReadingListsCommandCreateParams;
    createentry: ApiActionReadingListsCommandCreateEntryParams;
    delete: ApiActionReadingListsCommandDeleteParams;
    deleteentry: ApiActionReadingListsCommandDeleteEntryParams;
    setup: ApiActionReadingListsCommandSetupParams;
    teardown: ApiActionReadingListsCommandTeardownParams;
    update: ApiActionReadingListsCommandUpdateParams;
}

/**
 * @private
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API}
 */
export interface ApiActionReadingListsCommandCreateParams extends ApiActionReadingListsParams {
    command: "create";
    name?: string;
    description?: string;
    batch?: string;
}

/**
 * @private
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API}
 */
export interface ApiActionReadingListsCommandCreateEntryParams extends ApiActionReadingListsParams {
    command: "createentry";
    list: number;
    project?: string;
    title?: string;
    batch?: string;
}

/**
 * @private
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API}
 */
export interface ApiActionReadingListsCommandDeleteParams extends ApiActionReadingListsParams {
    command: "delete";
    list?: number;
    batch?: string;
}

/**
 * @private
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API}
 */
export interface ApiActionReadingListsCommandDeleteEntryParams extends ApiActionReadingListsParams {
    command: "deleteentry";
    entry?: number;
    batch?: string;
}

/**
 * @private
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API}
 */
export interface ApiActionReadingListsCommandSetupParams extends ApiActionReadingListsParams {
    command: "setup";
}

/**
 * @private
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API}
 */
export interface ApiActionReadingListsCommandTeardownParams extends ApiActionReadingListsParams {
    command: "teardown";
}

/**
 * @private
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API}
 */
export interface ApiActionReadingListsCommandUpdateParams extends ApiActionReadingListsParams {
    command: "update";
    list?: number;
    name?: string;
    description?: string;
    batch?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Manage_authentication_data}
 */
export interface ApiActionRemoveAuthenticationDataParams extends ApiParams {
    action?: "removeauthenticationdata";
    request: string;
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Manage_authentication_data}
 */
export interface ApiActionResetPasswordParams extends ApiParams {
    action?: "resetpassword";
    user?: string;
    email?: string;
    token?: string;
}

export interface ApiActionReviewParams extends ApiParams {
    action?: "review";
    revid?: string;
    comment?: string;
    unapprove?: boolean;
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Revisiondelete}
 */
export interface ApiActionRevisionDeleteParams extends ApiParams {
    action?: "revisiondelete";
    type: "archive" | "filearchive" | "logging" | "oldimage" | "revision";
    target?: string;
    ids: string | string[];
    hide?: OneOrMore<"comment" | "content" | "user">;
    show?: OneOrMore<"comment" | "content" | "user">;
    suppress?: "no" | "nochange" | "yes";
    reason?: string;
    tags?: string | string[];
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Rollback}
 */
export interface ApiActionRollbackParams extends ApiParams {
    action?: "rollback";
    title?: string;
    pageid?: number;
    tags?: string | string[];
    user: string;
    summary?: string;
    markbot?: boolean;
    watchlist?: "nochange" | "preferences" | "unwatch" | "watch";
    watchlistexpiry?: expiry;
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Rsd}
 */
export interface ApiActionRsdParams extends ApiParams {
    action?: "rsd";
}

/**
 * @private
 */
export interface ApiActionSanitizeMapDataParams extends ApiParams {
    action?: "sanitize-mapdata";
    title?: string;
    text: string;
}

/**
 * @private
 */
export interface ApiActionScribuntoConsoleParams extends ApiParams {
    action?: "scribunto-console";
    title?: string;
    content?: string;
    session?: number;
    question: string;
    clear?: boolean;
    token?: string;
}

/**
 * @private
 */
export interface ApiActionSecurePollAuthParams extends ApiParams {
    action?: "securepollauth";
    token: string;
    id: number;
}

export interface ApiActionSetGlobalAccountStatusParams extends ApiParams {
    action?: "setglobalaccountstatus";
    user: string;
    locked?: "" | "lock" | "unlock";
    hidden?: "" | "lists" | "suppressed";
    reason?: string;
    statecheck?: string;
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:SetNotificationTimestamp}
 */
export interface ApiActionSetNotificationTimestampParams extends ApiParams {
    action?: "setnotificationtimestamp";
    entirewatchlist?: boolean;
    timestamp?: timestamp;
    torevid?: number;
    newerthanrevid?: number;
    continue?: string;
    titles?: string | string[];
    pageids?: number | number[];
    revids?: number | number[];
    generator?: ApiActionSetNotificationTimestampParamsGenerator;
    redirects?: boolean;
    converttitles?: boolean;
    token?: string;
}

type ApiActionSetNotificationTimestampParamsGenerator = keyof ApiActionSetNotificationTimestampParamsGeneratorMap;

interface ApiActionSetNotificationTimestampParamsGeneratorMap {
    allcategories: ApiActionSetNotificationTimestampGeneratorAllCategoriesParams;
    alldeletedrevisions: ApiActionSetNotificationTimestampGeneratorAllDeletedRevisionsParams;
    allfileusages: ApiActionSetNotificationTimestampGeneratorQueryAllFileUsagesParams;
    allimages: ApiActionSetNotificationTimestampGeneratorAllImagesParams;
    alllinks: ApiActionSetNotificationTimestampGeneratorAllLinksParams;
    allpages: ApiActionSetNotificationTimestampGeneratorAllPagesParams;
    allredirects: ApiActionSetNotificationTimestampGeneratorQueryAllRedirectsParams;
    allrevisions: ApiActionSetNotificationTimestampGeneratorAllRevisionsParams;
    alltransclusions: ApiActionSetNotificationTimestampGeneratorQueryAllTransclusionsParams;
    automatictranslationdenselanguages: ApiActionSetNotificationTimestampGeneratorAutomaticTranslationDenseLanguagesParams;
    backlinks: ApiActionSetNotificationTimestampGeneratorBacklinksParams;
    categories: ApiActionSetNotificationTimestampGeneratorCategoriesParams;
    categorymembers: ApiActionSetNotificationTimestampGeneratorCategoryMembersParams;
    contenttranslation: ApiActionSetNotificationTimestampGeneratorContentTranslationParams;
    contenttranslationsuggestions: ApiActionSetNotificationTimestampGeneratorContentTranslationSuggestionsParams;
    deletedrevisions: ApiActionSetNotificationTimestampGeneratorDeletedRevisionsParams;
    duplicatefiles: ApiActionSetNotificationTimestampGeneratorDuplicateFilesParams;
    embeddedin: ApiActionSetNotificationTimestampGeneratorQueryEmbeddedInParams;
    exturlusage: ApiActionSetNotificationTimestampGeneratorExturlusageParams;
    fileusage: ApiActionSetNotificationTimestampGeneratorQueryFileUsageParams;
    geosearch: ApiActionSetNotificationTimestampGeneratorGeoSearchParams;
    growthtasks: ApiActionSetNotificationTimestampGeneratorGrowthTasksParams;
    images: ApiActionSetNotificationTimestampGeneratorImagesParams;
    imageusage: ApiActionSetNotificationTimestampGeneratorQueryImageUsageParams;
    iwbacklinks: ApiActionSetNotificationTimestampGeneratorIWBacklinksParams;
    langbacklinks: ApiActionSetNotificationTimestampGeneratorLangBacklinksParams;
    links: ApiActionSetNotificationTimestampGeneratorLinksParams;
    linkshere: ApiActionSetNotificationTimestampGeneratorQueryLinksHereParams;
    mostviewed: ApiActionSetNotificationTimestampGeneratorMostViewedParams;
    oldreviewedpages: ApiActionSetNotificationTimestampGeneratorOldreviewedpagesParams;
    pageswithprop: ApiActionSetNotificationTimestampGeneratorPagesWithPropParams;
    prefixsearch: ApiActionSetNotificationTimestampGeneratorPrefixSearchParams;
    projectpages: ApiActionSetNotificationTimestampGeneratorProjectPagesParams;
    protectedtitles: ApiActionSetNotificationTimestampGeneratorProtectedTitlesParams;
    querypage: ApiActionSetNotificationTimestampGeneratorQueryPageParams;
    random: ApiActionSetNotificationTimestampGeneratorRandomParams;
    readinglistentries: ApiActionSetNotificationTimestampGeneratorReadingListEntriesParams;
    recentchanges: ApiActionSetNotificationTimestampGeneratorRecentChangesParams;
    redirects: ApiActionSetNotificationTimestampGeneratorQueryRedirectsParams;
    revisions: ApiActionSetNotificationTimestampGeneratorRevisionsParams;
    search: ApiActionSetNotificationTimestampGeneratorSearchParams;
    templates: ApiActionSetNotificationTimestampGeneratorQueryTemplatesParams;
    transcludedin: ApiActionSetNotificationTimestampGeneratorQueryTranscludedInParams;
    watchlist: ApiActionSetNotificationTimestampGeneratorWatchlistParams;
    watchlistraw: ApiActionSetNotificationTimestampGeneratorWatchlistRawParams;
    wblistentityusage: ApiActionSetNotificationTimestampGeneratorWblistentityusageParams;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allcategories}
 */
export interface ApiActionSetNotificationTimestampGeneratorAllCategoriesParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "allcategories";
    gacfrom?: string;
    gaccontinue?: string;
    gacto?: string;
    gacprefix?: string;
    gacdir?: "ascending" | "descending";
    gacmin?: number;
    gacmax?: number;
    gaclimit?: limit;
    gacprop?: OneOrMore<"hidden" | "size">;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alldeletedrevisions}
 */
export interface ApiActionSetNotificationTimestampGeneratorAllDeletedRevisionsParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "alldeletedrevisions";
    gadrprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flags"
        | "ids"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    gadrslots?: string | string[];
    [k: `gadrcontentformat-${string}`]:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    gadrlimit?: limit;
    /**
     * @deprecated
     */
    gadrexpandtemplates?: boolean;
    /**
     * @deprecated
     */
    gadrgeneratexml?: boolean;
    /**
     * @deprecated
     */
    gadrparse?: boolean;
    gadrsection?: string;
    /**
     * @deprecated
     */
    gadrdiffto?: string;
    /**
     * @deprecated
     */
    gadrdifftotext?: string;
    /**
     * @deprecated
     */
    gadrdifftotextpst?: boolean;
    /**
     * @deprecated
     */
    gadrcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    gadruser?: string;
    gadrnamespace?: namespace | namespace[];
    gadrstart?: timestamp;
    gadrend?: timestamp;
    gadrdir?: "newer" | "older";
    gadrfrom?: string;
    gadrto?: string;
    gadrprefix?: string;
    gadrexcludeuser?: string;
    gadrtag?: string;
    gadrcontinue?: string;
    gadrgeneratetitles?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allfileusages}
 */
export interface ApiActionSetNotificationTimestampGeneratorQueryAllFileUsagesParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "allfileusages";
    gafcontinue?: string;
    gaffrom?: string;
    gafto?: string;
    gafprefix?: string;
    gafunique?: boolean;
    gafprop?: OneOrMore<"ids" | "title">;
    gaflimit?: limit;
    gafdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allimages}
 */
export interface ApiActionSetNotificationTimestampGeneratorAllImagesParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "allimages";
    gaisort?: "name" | "timestamp";
    gaidir?: "ascending" | "descending" | "newer" | "older";
    gaifrom?: string;
    gaito?: string;
    gaicontinue?: string;
    gaistart?: timestamp;
    gaiend?: timestamp;
    gaiprop?: OneOrMore<
        | "badfile"
        | "bitdepth"
        | "canonicaltitle"
        | "comment"
        | "commonmetadata"
        | "dimensions"
        | "extmetadata"
        | "mediatype"
        | "metadata"
        | "mime"
        | "parsedcomment"
        | "sha1"
        | "size"
        | "timestamp"
        | "url"
        | "user"
        | "userid"
    >;
    gaiprefix?: string;
    gaiminsize?: number;
    gaimaxsize?: number;
    gaisha1?: string;
    gaisha1base36?: string;
    gaiuser?: string;
    gaifilterbots?: "all" | "bots" | "nobots";
    gaimime?: string | string[];
    gailimit?: limit;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alllinks}
 */
export interface ApiActionSetNotificationTimestampGeneratorAllLinksParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "alllinks";
    galcontinue?: string;
    galfrom?: string;
    galto?: string;
    galprefix?: string;
    galunique?: boolean;
    galprop?: OneOrMore<"ids" | "title">;
    galnamespace?: namespace;
    gallimit?: limit;
    galdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allpages}
 */
export interface ApiActionSetNotificationTimestampGeneratorAllPagesParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "allpages";
    gapfrom?: string;
    gapcontinue?: string;
    gapto?: string;
    gapprefix?: string;
    gapnamespace?: namespace;
    gapfilterredir?: "all" | "nonredirects" | "redirects";
    gapfilterlanglinks?: "all" | "withlanglinks" | "withoutlanglinks";
    gapminsize?: number;
    gapmaxsize?: number;
    gapprtype?: OneOrMore<"edit" | "move" | "upload">;
    gapprlevel?: OneOrMore<"" | "autoconfirmed" | "extendedconfirmed" | "sysop" | "templateeditor">;
    gapprfiltercascade?: "all" | "cascading" | "noncascading";
    gapprexpiry?: "all" | "definite" | "indefinite";
    gaplimit?: limit;
    gapdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allredirects}
 */
export interface ApiActionSetNotificationTimestampGeneratorQueryAllRedirectsParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "allredirects";
    garcontinue?: string;
    garfrom?: string;
    garto?: string;
    garprefix?: string;
    garunique?: boolean;
    garprop?: OneOrMore<"fragment" | "ids" | "interwiki" | "title">;
    garnamespace?: namespace;
    garlimit?: limit;
    gardir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allrevisions}
 */
export interface ApiActionSetNotificationTimestampGeneratorAllRevisionsParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "allrevisions";
    garvprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flags"
        | "ids"
        | "oresscores"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    garvslots?: string | string[];
    [k: `garvcontentformat-${string}`]:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    garvlimit?: limit;
    /**
     * @deprecated
     */
    garvexpandtemplates?: boolean;
    /**
     * @deprecated
     */
    garvgeneratexml?: boolean;
    /**
     * @deprecated
     */
    garvparse?: boolean;
    garvsection?: string;
    /**
     * @deprecated
     */
    garvdiffto?: string;
    /**
     * @deprecated
     */
    garvdifftotext?: string;
    /**
     * @deprecated
     */
    garvdifftotextpst?: boolean;
    /**
     * @deprecated
     */
    garvcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    garvuser?: string;
    garvnamespace?: namespace | namespace[];
    garvstart?: timestamp;
    garvend?: timestamp;
    garvdir?: "newer" | "older";
    garvexcludeuser?: string;
    garvcontinue?: string;
    garvgeneratetitles?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alltransclusions}
 */
export interface ApiActionSetNotificationTimestampGeneratorQueryAllTransclusionsParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "alltransclusions";
    gatcontinue?: string;
    gatfrom?: string;
    gatto?: string;
    gatprefix?: string;
    gatunique?: boolean;
    gatprop?: OneOrMore<"ids" | "title">;
    gatnamespace?: namespace;
    gatlimit?: limit;
    gatdir?: "ascending" | "descending";
}

export interface ApiActionSetNotificationTimestampGeneratorAutomaticTranslationDenseLanguagesParams
    extends ApiActionSetNotificationTimestampParams {
    "generator"?: "automatictranslationdenselanguages";
    "gqid": string;
    "gsection-titles"?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Backlinks}
 */
export interface ApiActionSetNotificationTimestampGeneratorBacklinksParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "backlinks";
    gbltitle?: string;
    gblpageid?: number;
    gblcontinue?: string;
    gblnamespace?: namespace | namespace[];
    gbldir?: "ascending" | "descending";
    gblfilterredir?: "all" | "nonredirects" | "redirects";
    gbllimit?: limit;
    gblredirect?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categories}
 */
export interface ApiActionSetNotificationTimestampGeneratorCategoriesParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "categories";
    gclprop?: OneOrMore<"hidden" | "sortkey" | "timestamp">;
    gclshow?: OneOrMore<"!hidden" | "hidden">;
    gcllimit?: limit;
    gclcontinue?: string;
    gclcategories?: string | string[];
    gcldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categorymembers}
 */
export interface ApiActionSetNotificationTimestampGeneratorCategoryMembersParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "categorymembers";
    gcmtitle?: string;
    gcmpageid?: number;
    gcmprop?: OneOrMore<"ids" | "sortkey" | "sortkeyprefix" | "timestamp" | "title" | "type">;
    gcmnamespace?: namespace | namespace[];
    gcmtype?: OneOrMore<"file" | "page" | "subcat">;
    gcmcontinue?: string;
    gcmlimit?: limit;
    gcmsort?: "sortkey" | "timestamp";
    gcmdir?: "asc" | "ascending" | "desc" | "descending" | "newer" | "older";
    gcmstart?: timestamp;
    gcmend?: timestamp;
    gcmstarthexsortkey?: string;
    gcmendhexsortkey?: string;
    gcmstartsortkeyprefix?: string;
    gcmendsortkeyprefix?: string;
    /**
     * @deprecated
     */
    gcmstartsortkey?: string;
    /**
     * @deprecated
     */
    gcmendsortkey?: string;
}

export interface ApiActionSetNotificationTimestampGeneratorContentTranslationParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "contenttranslation";
    gtranslationid?: string;
    gfrom?: string;
    gto?: string;
    gsourcetitle?: string;
    gsourcesectiontitle?: string;
    glimit?: limit;
    goffset?: string;
    gtype?: "draft" | "published";
    gusecase?: "desktop-editor-draft" | "translation-corpora-units" | "unified-dashboard";
}

export interface ApiActionSetNotificationTimestampGeneratorContentTranslationSuggestionsParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "contenttranslationsuggestions";
    gfrom?: string;
    gto?: string;
    glistid?: string;
    glimit?: limit;
    goffset?: string;
    gseed?: number;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Deletedrevisions}
 */
export interface ApiActionSetNotificationTimestampGeneratorDeletedRevisionsParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "deletedrevisions";
    gdrvprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flags"
        | "ids"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    gdrvslots?: string | string[];
    [k: `gdrvcontentformat-${string}`]:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    gdrvlimit?: limit;
    /**
     * @deprecated
     */
    gdrvexpandtemplates?: boolean;
    /**
     * @deprecated
     */
    gdrvgeneratexml?: boolean;
    /**
     * @deprecated
     */
    gdrvparse?: boolean;
    gdrvsection?: string;
    /**
     * @deprecated
     */
    gdrvdiffto?: string;
    /**
     * @deprecated
     */
    gdrvdifftotext?: string;
    /**
     * @deprecated
     */
    gdrvdifftotextpst?: boolean;
    /**
     * @deprecated
     */
    gdrvcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    gdrvstart?: timestamp;
    gdrvend?: timestamp;
    gdrvdir?: "newer" | "older";
    gdrvtag?: string;
    gdrvuser?: string;
    gdrvexcludeuser?: string;
    gdrvcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Duplicatefiles}
 */
export interface ApiActionSetNotificationTimestampGeneratorDuplicateFilesParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "duplicatefiles";
    gdflimit?: limit;
    gdfcontinue?: string;
    gdfdir?: "ascending" | "descending";
    gdflocalonly?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Embeddedin}
 */
export interface ApiActionSetNotificationTimestampGeneratorQueryEmbeddedInParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "embeddedin";
    geititle?: string;
    geipageid?: number;
    geicontinue?: string;
    geinamespace?: namespace | namespace[];
    geidir?: "ascending" | "descending";
    geifilterredir?: "all" | "nonredirects" | "redirects";
    geilimit?: limit;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Exturlusage}
 */
export interface ApiActionSetNotificationTimestampGeneratorExturlusageParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "exturlusage";
    geuprop?: OneOrMore<"ids" | "title" | "url">;
    geucontinue?: string;
    geuprotocol?:
        | ""
        | "bitcoin"
        | "ftp"
        | "ftps"
        | "geo"
        | "git"
        | "gopher"
        | "http"
        | "https"
        | "irc"
        | "ircs"
        | "magnet"
        | "mailto"
        | "matrix"
        | "mms"
        | "news"
        | "nntp"
        | "redis"
        | "sftp"
        | "sip"
        | "sips"
        | "sms"
        | "ssh"
        | "svn"
        | "tel"
        | "telnet"
        | "urn"
        | "worldwind"
        | "xmpp";
    geuquery?: string;
    geunamespace?: namespace | namespace[];
    geulimit?: limit;
    /**
     * @deprecated
     */
    geuexpandurl?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Fileusage}
 */
export interface ApiActionSetNotificationTimestampGeneratorQueryFileUsageParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "fileusage";
    gfuprop?: OneOrMore<"pageid" | "redirect" | "title">;
    gfunamespace?: namespace | namespace[];
    gfushow?: OneOrMore<"!redirect" | "redirect">;
    gfulimit?: limit;
    gfucontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GeoData#list.3Dgeosearch}
 */
export interface ApiActionSetNotificationTimestampGeneratorGeoSearchParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "geosearch";
    ggscoord?: string;
    ggspage?: string;
    ggsbbox?: string;
    ggsradius?: number;
    ggsmaxdim?: number;
    ggssort?: "distance" | "relevance";
    ggslimit?: limit;
    ggsglobe?: "earth";
    ggsnamespace?: namespace | namespace[];
    ggsprop?: OneOrMore<"country" | "dim" | "globe" | "name" | "region" | "type">;
    ggsprimary?: "all" | "primary" | "secondary";
    ggsdebug?: boolean;
}

/**
 * @private
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GrowthExperiments#API}
 */
export interface ApiActionSetNotificationTimestampGeneratorGrowthTasksParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "growthtasks";
    ggttasktypes?: OneOrMore<"copyedit" | "expand" | "links" | "references" | "update">;
    ggttopics?: OneOrMore<
        | "africa"
        | "architecture"
        | "art"
        | "asia"
        | "biography"
        | "biology"
        | "business-and-economics"
        | "central-america"
        | "chemistry"
        | "comics-and-anime"
        | "computers-and-internet"
        | "earth-and-environment"
        | "education"
        | "engineering"
        | "entertainment"
        | "europe"
        | "fashion"
        | "food-and-drink"
        | "general-science"
        | "history"
        | "literature"
        | "mathematics"
        | "medicine-and-health"
        | "military-and-warfare"
        | "music"
        | "north-america"
        | "oceania"
        | "performing-arts"
        | "philosophy-and-religion"
        | "physics"
        | "politics-and-government"
        | "society"
        | "south-america"
        | "sports"
        | "technology"
        | "transportation"
        | "tv-and-film"
        | "video-games"
        | "women"
    >;
    ggttopicsmode?: "AND" | "OR";
    ggtlimit?: limit;
    ggtoffset?: number;
    ggtdebug?: boolean;
    ggtexcludepageids?: number | number[];
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Images}
 */
export interface ApiActionSetNotificationTimestampGeneratorImagesParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "images";
    gimlimit?: limit;
    gimcontinue?: string;
    gimimages?: string | string[];
    gimdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Imageusage}
 */
export interface ApiActionSetNotificationTimestampGeneratorQueryImageUsageParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "imageusage";
    giutitle?: string;
    giupageid?: number;
    giucontinue?: string;
    giunamespace?: namespace | namespace[];
    giudir?: "ascending" | "descending";
    giufilterredir?: "all" | "nonredirects" | "redirects";
    giulimit?: limit;
    giuredirect?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Iwbacklinks}
 */
export interface ApiActionSetNotificationTimestampGeneratorIWBacklinksParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "iwbacklinks";
    giwblprefix?: string;
    giwbltitle?: string;
    giwblcontinue?: string;
    giwbllimit?: limit;
    giwblprop?: OneOrMore<"iwprefix" | "iwtitle">;
    giwbldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Langbacklinks}
 */
export interface ApiActionSetNotificationTimestampGeneratorLangBacklinksParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "langbacklinks";
    glbllang?: string;
    glbltitle?: string;
    glblcontinue?: string;
    glbllimit?: limit;
    glblprop?: OneOrMore<"lllang" | "lltitle">;
    glbldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Links}
 */
export interface ApiActionSetNotificationTimestampGeneratorLinksParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "links";
    gplnamespace?: namespace | namespace[];
    gpllimit?: limit;
    gplcontinue?: string;
    gpltitles?: string | string[];
    gpldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Linkshere}
 */
export interface ApiActionSetNotificationTimestampGeneratorQueryLinksHereParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "linkshere";
    glhprop?: OneOrMore<"pageid" | "redirect" | "title">;
    glhnamespace?: namespace | namespace[];
    glhshow?: OneOrMore<"!redirect" | "redirect">;
    glhlimit?: limit;
    glhcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageViewInfo}
 */
export interface ApiActionSetNotificationTimestampGeneratorMostViewedParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "mostviewed";
    gpvimmetric?: "pageviews";
    gpvimlimit?: limit;
    gpvimoffset?: number;
}

export interface ApiActionSetNotificationTimestampGeneratorOldreviewedpagesParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "oldreviewedpages";
    gorstart?: timestamp;
    gorend?: timestamp;
    gordir?: "newer" | "older";
    gormaxsize?: number;
    gorfilterwatched?: "all" | "watched";
    gornamespace?: namespace | namespace[];
    gorcategory?: string;
    gorfilterredir?: "all" | "nonredirects" | "redirects";
    gorlimit?: limit;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Pageswithprop}
 */
export interface ApiActionSetNotificationTimestampGeneratorPagesWithPropParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "pageswithprop";
    gpwppropname: string;
    gpwpprop?: OneOrMore<"ids" | "title" | "value">;
    gpwpcontinue?: string;
    gpwplimit?: limit;
    gpwpdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Prefixsearch}
 */
export interface ApiActionSetNotificationTimestampGeneratorPrefixSearchParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "prefixsearch";
    gpssearch: string;
    gpsnamespace?: namespace | namespace[];
    gpslimit?: limit;
    gpsoffset?: number;
    gpsprofile?: "classic" | "engine_autoselect" | "fast-fuzzy" | "fuzzy" | "normal" | "strict";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageAssessments}
 */
export interface ApiActionSetNotificationTimestampGeneratorProjectPagesParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "projectpages";
    gwppassessments?: boolean;
    gwppprojects: string | string[];
    gwpplimit?: limit;
    gwppcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Protectedtitles}
 */
export interface ApiActionSetNotificationTimestampGeneratorProtectedTitlesParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "protectedtitles";
    gptnamespace?: namespace | namespace[];
    gptlevel?: OneOrMore<"autoconfirmed" | "extendedconfirmed" | "sysop" | "templateeditor">;
    gptlimit?: limit;
    gptdir?: "newer" | "older";
    gptstart?: timestamp;
    gptend?: timestamp;
    gptprop?: OneOrMore<
        "comment" | "expiry" | "level" | "parsedcomment" | "timestamp" | "user" | "userid"
    >;
    gptcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Querypage}
 */
export interface ApiActionSetNotificationTimestampGeneratorQueryPageParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "querypage";
    gqppage:
        | "Ancientpages"
        | "BrokenRedirects"
        | "Deadendpages"
        | "DisambiguationPageLinks"
        | "DisambiguationPages"
        | "DoubleRedirects"
        | "Fewestrevisions"
        | "GadgetUsage"
        | "GloballyWantedFiles"
        | "ListDuplicatedFiles"
        | "Listredirects"
        | "Lonelypages"
        | "Longpages"
        | "MediaStatistics"
        | "MostGloballyLinkedFiles"
        | "Mostcategories"
        | "Mostimages"
        | "Mostinterwikis"
        | "Mostlinked"
        | "Mostlinkedcategories"
        | "Mostlinkedtemplates"
        | "Mostrevisions"
        | "OrphanedTimedText"
        | "Shortpages"
        | "Uncategorizedcategories"
        | "Uncategorizedimages"
        | "Uncategorizedpages"
        | "Uncategorizedtemplates"
        | "UnconnectedPages"
        | "Unusedcategories"
        | "Unusedimages"
        | "Unusedtemplates"
        | "Unwatchedpages"
        | "Wantedcategories"
        | "Wantedfiles"
        | "Wantedpages"
        | "Wantedtemplates"
        | "Withoutinterwiki";
    gqpoffset?: number;
    gqplimit?: limit;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Random}
 */
export interface ApiActionSetNotificationTimestampGeneratorRandomParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "random";
    grnnamespace?: namespace | namespace[];
    grnfilterredir?: "all" | "nonredirects" | "redirects";
    /**
     * @deprecated
     */
    grnredirect?: boolean;
    grnlimit?: limit;
    grncontinue?: string;
}

/**
 * @private
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API}
 */
export interface ApiActionSetNotificationTimestampGeneratorReadingListEntriesParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "readinglistentries";
    grlelists?: number | number[];
    grlechangedsince?: timestamp;
    grlesort?: "name" | "updated";
    grledir?: "ascending" | "descending";
    grlelimit?: limit;
    grlecontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Recentchanges}
 */
export interface ApiActionSetNotificationTimestampGeneratorRecentChangesParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "recentchanges";
    grcstart?: timestamp;
    grcend?: timestamp;
    grcdir?: "newer" | "older";
    grcnamespace?: namespace | namespace[];
    grcuser?: string;
    grcexcludeuser?: string;
    grctag?: string;
    grcprop?: OneOrMore<
        | "comment"
        | "flags"
        | "ids"
        | "loginfo"
        | "oresscores"
        | "parsedcomment"
        | "patrolled"
        | "redirect"
        | "sha1"
        | "sizes"
        | "tags"
        | "timestamp"
        | "title"
        | "user"
        | "userid"
    >;
    grcshow?: OneOrMore<
        | "!anon"
        | "!autopatrolled"
        | "!bot"
        | "!minor"
        | "!oresreview"
        | "!patrolled"
        | "!redirect"
        | "anon"
        | "autopatrolled"
        | "bot"
        | "minor"
        | "oresreview"
        | "patrolled"
        | "redirect"
        | "unpatrolled"
    >;
    grclimit?: limit;
    grctype?: OneOrMore<"categorize" | "edit" | "external" | "log" | "new">;
    grctoponly?: boolean;
    grctitle?: string;
    grccontinue?: string;
    grcgeneraterevisions?: boolean;
    grcslot?: "main";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Redirects}
 */
export interface ApiActionSetNotificationTimestampGeneratorQueryRedirectsParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "redirects";
    grdprop?: OneOrMore<"fragment" | "pageid" | "title">;
    grdnamespace?: namespace | namespace[];
    grdshow?: OneOrMore<"!fragment" | "fragment">;
    grdlimit?: limit;
    grdcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Revisions}
 */
export interface ApiActionSetNotificationTimestampGeneratorRevisionsParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "revisions";
    grvprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flagged"
        | "flags"
        | "ids"
        | "oresscores"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    grvslots?: string | string[];
    [k: `grvcontentformat-${string}`]:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    grvlimit?: limit;
    /**
     * @deprecated
     */
    grvexpandtemplates?: boolean;
    /**
     * @deprecated
     */
    grvgeneratexml?: boolean;
    /**
     * @deprecated
     */
    grvparse?: boolean;
    grvsection?: string;
    /**
     * @deprecated
     */
    grvdiffto?: string;
    /**
     * @deprecated
     */
    grvdifftotext?: string;
    /**
     * @deprecated
     */
    grvdifftotextpst?: boolean;
    /**
     * @deprecated
     */
    grvcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    grvstartid?: number;
    grvendid?: number;
    grvstart?: timestamp;
    grvend?: timestamp;
    grvdir?: "newer" | "older";
    grvuser?: string;
    grvexcludeuser?: string;
    grvtag?: string;
    grvcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Search}
 */
export interface ApiActionSetNotificationTimestampGeneratorSearchParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "search";
    gsrsearch: string;
    gsrnamespace?: namespace | namespace[];
    gsrlimit?: limit;
    gsroffset?: number;
    gsrqiprofile?:
        | "classic"
        | "classic_noboostlinks"
        | "empty"
        | "engine_autoselect"
        | "growth_underlinked"
        | "mlr-1024rs"
        | "popular_inclinks"
        | "popular_inclinks_pv"
        | "wsum_inclinks"
        | "wsum_inclinks_pv";
    gsrwhat?: "nearmatch" | "text" | "title";
    gsrinfo?: OneOrMore<"rewrittenquery" | "suggestion" | "totalhits">;
    gsrprop?: OneOrMore<
        | "categorysnippet"
        | "extensiondata"
        | "isfilematch"
        | "redirectsnippet"
        | "redirecttitle"
        | "sectionsnippet"
        | "sectiontitle"
        | "size"
        | "snippet"
        | "timestamp"
        | "titlesnippet"
        | "wordcount"
        | "hasrelated"
        | "score"
    >;
    gsrinterwiki?: boolean;
    gsrenablerewrites?: boolean;
    gsrsort?:
        | "create_timestamp_asc"
        | "create_timestamp_desc"
        | "incoming_links_asc"
        | "incoming_links_desc"
        | "just_match"
        | "last_edit_asc"
        | "last_edit_desc"
        | "none"
        | "random"
        | "relevance"
        | "user_random";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Templates}
 */
export interface ApiActionSetNotificationTimestampGeneratorQueryTemplatesParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "templates";
    gtlnamespace?: namespace | namespace[];
    gtllimit?: limit;
    gtlcontinue?: string;
    gtltemplates?: string | string[];
    gtldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Transcludedin}
 */
export interface ApiActionSetNotificationTimestampGeneratorQueryTranscludedInParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "transcludedin";
    gtiprop?: OneOrMore<"pageid" | "redirect" | "title">;
    gtinamespace?: namespace | namespace[];
    gtishow?: OneOrMore<"!redirect" | "redirect">;
    gtilimit?: limit;
    gticontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlist}
 */
export interface ApiActionSetNotificationTimestampGeneratorWatchlistParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "watchlist";
    gwlallrev?: boolean;
    gwlstart?: timestamp;
    gwlend?: timestamp;
    gwlnamespace?: namespace | namespace[];
    gwluser?: string;
    gwlexcludeuser?: string;
    gwldir?: "newer" | "older";
    gwllimit?: limit;
    gwlprop?: OneOrMore<
        | "comment"
        | "expiry"
        | "flags"
        | "ids"
        | "loginfo"
        | "notificationtimestamp"
        | "oresscores"
        | "parsedcomment"
        | "patrol"
        | "sizes"
        | "tags"
        | "timestamp"
        | "title"
        | "user"
        | "userid"
    >;
    gwlshow?: OneOrMore<
        | "!anon"
        | "!autopatrolled"
        | "!bot"
        | "!minor"
        | "!oresreview"
        | "!patrolled"
        | "!unread"
        | "anon"
        | "autopatrolled"
        | "bot"
        | "minor"
        | "oresreview"
        | "patrolled"
        | "unread"
    >;
    gwltype?: OneOrMore<"categorize" | "edit" | "external" | "log" | "new">;
    gwlowner?: string;
    gwltoken?: string;
    gwlcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlistraw}
 */
export interface ApiActionSetNotificationTimestampGeneratorWatchlistRawParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "watchlistraw";
    gwrcontinue?: string;
    gwrnamespace?: namespace | namespace[];
    gwrlimit?: limit;
    gwrprop?: OneOrMore<"changed">;
    gwrshow?: OneOrMore<"!changed" | "changed">;
    gwrowner?: string;
    gwrtoken?: string;
    gwrdir?: "ascending" | "descending";
    gwrfromtitle?: string;
    gwrtotitle?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Wikibase/API}
 */
export interface ApiActionSetNotificationTimestampGeneratorWblistentityusageParams
    extends ApiActionSetNotificationTimestampParams {
    generator?: "wblistentityusage";
    gwbleuprop?: OneOrMore<"url">;
    gwbleuaspect?: OneOrMore<"C" | "D" | "L" | "O" | "S" | "T" | "X">;
    gwbleuentities: string | string[];
    gwbleulimit?: limit;
    gwbleucontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:SetPageLanguage}
 */
export interface ApiActionSetPageLanguageParams extends ApiParams {
    action?: "setpagelanguage";
    title?: string;
    pageid?: number;
    lang:
        | "aae"
        | "ab"
        | "abs"
        | "ace"
        | "acf"
        | "acm"
        | "ady"
        | "ady-cyrl"
        | "aeb"
        | "aeb-arab"
        | "aeb-latn"
        | "af"
        | "aln"
        | "alt"
        | "am"
        | "ami"
        | "an"
        | "ang"
        | "ann"
        | "anp"
        | "apc"
        | "ar"
        | "arc"
        | "arn"
        | "arq"
        | "ary"
        | "arz"
        | "as"
        | "ase"
        | "ast"
        | "atj"
        | "av"
        | "avk"
        | "awa"
        | "ay"
        | "az"
        | "azb"
        | "ba"
        | "ban"
        | "ban-bali"
        | "bar"
        | "bbc"
        | "bbc-latn"
        | "bcc"
        | "bci"
        | "bcl"
        | "bdr"
        | "be"
        | "be-tarask"
        | "bew"
        | "bg"
        | "bgc"
        | "bgn"
        | "bh"
        | "bho"
        | "bi"
        | "bjn"
        | "blk"
        | "bm"
        | "bn"
        | "bo"
        | "bpy"
        | "bqi"
        | "br"
        | "brh"
        | "bs"
        | "btm"
        | "bto"
        | "bug"
        | "bxr"
        | "ca"
        | "cbk-zam"
        | "ccp"
        | "cdo"
        | "ce"
        | "ceb"
        | "ch"
        | "chn"
        | "chr"
        | "chy"
        | "ckb"
        | "co"
        | "cps"
        | "cpx"
        | "cpx-hans"
        | "cpx-hant"
        | "cr"
        | "crh"
        | "crh-cyrl"
        | "crh-latn"
        | "crh-ro"
        | "cs"
        | "csb"
        | "cu"
        | "cv"
        | "cy"
        | "da"
        | "dag"
        | "de"
        | "de-at"
        | "de-ch"
        | "de-formal"
        | "default"
        | "dga"
        | "din"
        | "diq"
        | "dsb"
        | "dtp"
        | "dty"
        | "dua"
        | "dv"
        | "dz"
        | "ee"
        | "efi"
        | "egl"
        | "el"
        | "eml"
        | "en"
        | "en-ca"
        | "en-gb"
        | "eo"
        | "es"
        | "es-formal"
        | "et"
        | "eu"
        | "ext"
        | "fa"
        | "fat"
        | "ff"
        | "fi"
        | "fit"
        | "fj"
        | "fo"
        | "fon"
        | "fr"
        | "frc"
        | "frp"
        | "frr"
        | "fur"
        | "fy"
        | "ga"
        | "gaa"
        | "gag"
        | "gan"
        | "gan-hans"
        | "gan-hant"
        | "gcf"
        | "gcr"
        | "gd"
        | "gl"
        | "gld"
        | "glk"
        | "gn"
        | "gom"
        | "gom-deva"
        | "gom-latn"
        | "gor"
        | "got"
        | "gpe"
        | "grc"
        | "gsw"
        | "gu"
        | "guc"
        | "gur"
        | "guw"
        | "gv"
        | "ha"
        | "hak"
        | "haw"
        | "he"
        | "hi"
        | "hif"
        | "hif-latn"
        | "hil"
        | "hno"
        | "hr"
        | "hrx"
        | "hsb"
        | "hsn"
        | "ht"
        | "hu"
        | "hu-formal"
        | "hy"
        | "hyw"
        | "ia"
        | "iba"
        | "ibb"
        | "id"
        | "ie"
        | "ig"
        | "igl"
        | "ii"
        | "ik"
        | "ike-cans"
        | "ike-latn"
        | "ilo"
        | "inh"
        | "io"
        | "is"
        | "isv-cyrl"
        | "isv-latn"
        | "it"
        | "iu"
        | "ja"
        | "jam"
        | "jbo"
        | "jut"
        | "jv"
        | "ka"
        | "kaa"
        | "kab"
        | "kai"
        | "kbd"
        | "kbd-cyrl"
        | "kbp"
        | "kcg"
        | "kea"
        | "kg"
        | "kge"
        | "khw"
        | "ki"
        | "kiu"
        | "kjh"
        | "kjp"
        | "kk"
        | "kk-arab"
        | "kk-cn"
        | "kk-cyrl"
        | "kk-kz"
        | "kk-latn"
        | "kk-tr"
        | "kl"
        | "km"
        | "kn"
        | "ko"
        | "ko-kp"
        | "koi"
        | "kr"
        | "krc"
        | "kri"
        | "krj"
        | "krl"
        | "ks"
        | "ks-arab"
        | "ks-deva"
        | "ksh"
        | "ksw"
        | "ku"
        | "ku-arab"
        | "ku-latn"
        | "kum"
        | "kus"
        | "kv"
        | "kw"
        | "ky"
        | "la"
        | "lad"
        | "lb"
        | "lbe"
        | "lez"
        | "lfn"
        | "lg"
        | "li"
        | "lij"
        | "liv"
        | "lki"
        | "lld"
        | "lmo"
        | "ln"
        | "lo"
        | "loz"
        | "lrc"
        | "lt"
        | "ltg"
        | "lua"
        | "lus"
        | "luz"
        | "lv"
        | "lzh"
        | "lzz"
        | "mad"
        | "mag"
        | "mai"
        | "map-bms"
        | "mdf"
        | "mg"
        | "mhr"
        | "mi"
        | "min"
        | "mk"
        | "ml"
        | "mn"
        | "mnc"
        | "mnc-latn"
        | "mnc-mong"
        | "mni"
        | "mnw"
        | "mo"
        | "mos"
        | "mr"
        | "mrh"
        | "mrj"
        | "ms"
        | "ms-arab"
        | "mt"
        | "mui"
        | "mwl"
        | "my"
        | "myv"
        | "mzn"
        | "na"
        | "nah"
        | "nan"
        | "nan-hant"
        | "nan-latn-pehoeji"
        | "nan-latn-tailo"
        | "nap"
        | "nb"
        | "nds"
        | "nds-nl"
        | "ne"
        | "new"
        | "nia"
        | "nit"
        | "niu"
        | "nl"
        | "nl-informal"
        | "nmz"
        | "nn"
        | "nod"
        | "nog"
        | "nov"
        | "nqo"
        | "nr"
        | "nrm"
        | "nso"
        | "nup"
        | "nv"
        | "ny"
        | "nyn"
        | "nyo"
        | "nys"
        | "oc"
        | "ojb"
        | "olo"
        | "om"
        | "or"
        | "os"
        | "pa"
        | "pag"
        | "pam"
        | "pap"
        | "pcd"
        | "pcm"
        | "pdc"
        | "pdt"
        | "pfl"
        | "pi"
        | "pih"
        | "pl"
        | "pms"
        | "pnb"
        | "pnt"
        | "prg"
        | "ps"
        | "pt"
        | "pt-br"
        | "pwn"
        | "qu"
        | "qug"
        | "rgn"
        | "rif"
        | "rki"
        | "rm"
        | "rmc"
        | "rmy"
        | "rn"
        | "ro"
        | "roa-tara"
        | "rsk"
        | "ru"
        | "rue"
        | "rup"
        | "ruq"
        | "ruq-cyrl"
        | "ruq-latn"
        | "rut"
        | "rw"
        | "ryu"
        | "sa"
        | "sah"
        | "sat"
        | "sc"
        | "scn"
        | "sco"
        | "sd"
        | "sdc"
        | "sdh"
        | "se"
        | "se-fi"
        | "se-no"
        | "se-se"
        | "sei"
        | "ses"
        | "sg"
        | "sgs"
        | "sh"
        | "sh-cyrl"
        | "sh-latn"
        | "shi"
        | "shn"
        | "shy"
        | "shy-latn"
        | "si"
        | "sjd"
        | "sje"
        | "sk"
        | "skr"
        | "skr-arab"
        | "sl"
        | "sli"
        | "sm"
        | "sma"
        | "smn"
        | "sms"
        | "sn"
        | "so"
        | "sq"
        | "sr"
        | "sr-ec"
        | "sr-el"
        | "srn"
        | "sro"
        | "ss"
        | "st"
        | "stq"
        | "sty"
        | "su"
        | "sv"
        | "sw"
        | "syl"
        | "szl"
        | "szy"
        | "ta"
        | "tay"
        | "tcy"
        | "tdd"
        | "te"
        | "tet"
        | "tg"
        | "tg-cyrl"
        | "tg-latn"
        | "th"
        | "ti"
        | "tig"
        | "tk"
        | "tl"
        | "tly"
        | "tn"
        | "to"
        | "tok"
        | "tpi"
        | "tr"
        | "tru"
        | "trv"
        | "ts"
        | "tt"
        | "tt-cyrl"
        | "tt-latn"
        | "ttj"
        | "tum"
        | "tw"
        | "ty"
        | "tyv"
        | "tzm"
        | "udm"
        | "ug"
        | "ug-arab"
        | "ug-latn"
        | "uk"
        | "ur"
        | "uz"
        | "ve"
        | "vec"
        | "vep"
        | "vi"
        | "vls"
        | "vmf"
        | "vmw"
        | "vo"
        | "vot"
        | "vro"
        | "wa"
        | "wal"
        | "war"
        | "wls"
        | "wo"
        | "wuu"
        | "wuu-hans"
        | "wuu-hant"
        | "xal"
        | "xh"
        | "xmf"
        | "xsy"
        | "yi"
        | "yo"
        | "yrl"
        | "yue"
        | "yue-hans"
        | "yue-hant"
        | "za"
        | "zea"
        | "zgh"
        | "zh"
        | "zh-cn"
        | "zh-hans"
        | "zh-hant"
        | "zh-hk"
        | "zh-mo"
        | "zh-my"
        | "zh-sg"
        | "zh-tw"
        | "zu";
    reason?: string;
    tags?: string | string[];
    token?: string;
}

export interface ApiActionShortenUrlParams extends ApiParams {
    action?: "shortenurl";
    url: string;
    qrcode?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Sitematrix}
 */
export interface ApiActionSiteMatrixParams extends ApiParams {
    action?: "sitematrix";
    smtype?: OneOrMore<"language" | "special">;
    smstate?: OneOrMore<"all" | "closed" | "fishbowl" | "nonglobal" | "private">;
    smlangprop?: OneOrMore<"code" | "dir" | "localname" | "name" | "site">;
    smsiteprop?: OneOrMore<"code" | "dbname" | "lang" | "sitename" | "url">;
    smlimit?: limit;
    smcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Extension:SpamBlacklist/API}
 */
export interface ApiActionSpamBlacklistParams extends ApiParams {
    action?: "spamblacklist";
    url: string | string[];
}

export interface ApiActionStabilizeParams extends ApiParams {
    action?: "stabilize";
    protectlevel?: "autoconfirmed" | "none";
    expiry?: string;
    reason?: string;
    title: string;
    token?: string;
}

/**
 * @private
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Stashedit}
 */
export interface ApiActionStashEditParams extends ApiParams {
    action?: "stashedit";
    title: string;
    section?: string;
    sectiontitle?: string;
    text?: string;
    stashedtexthash?: string;
    summary?: string;
    contentmodel:
        | "GadgetDefinition"
        | "JsonSchema"
        | "MassMessageListContent"
        | "Scribunto"
        | "SecurePoll"
        | "css"
        | "javascript"
        | "json"
        | "sanitized-css"
        | "text"
        | "unknown"
        | "wikitext";
    contentformat:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    baserevid: number;
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Extension:EventStreamConfig}
 */
export interface ApiActionStreamConfigSParams extends ApiParams {
    action?: "streamconfigs";
    streams?: string | string[];
    constraints?: string | string[];
    /**
     * @deprecated
     */
    all_settings?: boolean;
}

export interface ApiActionStrikeVoteParams extends ApiParams {
    action?: "strikevote";
    option: "strike" | "unstrike";
    reason: string;
    voteid: number;
    token?: string;
}

export interface ApiActionSxdeleteParams extends ApiParams {
    action?: "sxdelete";
    sectiontranslationid: number;
    translationid: number;
    sectionid: string;
    token?: string;
}

/**
 * @private
 */
export interface ApiActionSxsaveParams extends ApiParams {
    action?: "sxsave";
    sourcelanguage: string;
    targetlanguage: string;
    sourcetitle: string;
    targettitle: string;
    content: string;
    sourcerevision: number;
    sourcesectiontitle: string;
    targetsectiontitle: string;
    sectionid: string;
    issandbox?: boolean;
    progress: string;
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Tag}
 */
export interface ApiActionTagParams extends ApiParams {
    action?: "tag";
    rcid?: number | number[];
    revid?: number | number[];
    logid?: number | number[];
    add?: OneOrMore<
        | "AWB"
        | "AntiVandal script"
        | "Deputy"
        | "Newcomer task"
        | "ProveIt edit"
        | "RedWarn"
        | "STiki"
        | "Single use"
        | "Ultraviolet"
        | "WPCleaner"
        | "WikiLoop Battlefield"
        | "bot trial"
        | "convenient-discussions"
        | "editProtectedHelper"
        | "fixed lint errors"
        | "huggle"
        | "invalid-timedtext-edit"
        | "large non-free file"
        | "moveToDraft"
        | "new user moving page out of userspace"
        | "pageswap"
        | "possible birth or death date change"
        | "pronoun-change"
        | "self-published-blog"
        | "self-published source"
        | "shortdesc helper"
        | "talk banner shell conversion"
        | "twinkle"
    >;
    remove?: string | string[];
    reason?: string;
    tags?: string | string[];
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:TemplateData}
 */
export interface ApiActionTemplateDataParams extends ApiParams {
    action?: "templatedata";
    includeMissingTitles?: boolean;
    /**
     * @deprecated
     */
    doNotIgnoreMissingTitles?: boolean;
    lang?: string;
    titles?: string | string[];
    pageids?: number | number[];
    revids?: number | number[];
    generator?: ApiActionTemplateDataParamsGenerator;
    redirects?: boolean;
    converttitles?: boolean;
}

type ApiActionTemplateDataParamsGenerator = keyof ApiActionTemplateDataParamsGeneratorMap;

interface ApiActionTemplateDataParamsGeneratorMap {
    allcategories: ApiActionTemplateDataGeneratorAllCategoriesParams;
    alldeletedrevisions: ApiActionTemplateDataGeneratorAllDeletedRevisionsParams;
    allfileusages: ApiActionTemplateDataGeneratorQueryAllFileUsagesParams;
    allimages: ApiActionTemplateDataGeneratorAllImagesParams;
    alllinks: ApiActionTemplateDataGeneratorAllLinksParams;
    allpages: ApiActionTemplateDataGeneratorAllPagesParams;
    allredirects: ApiActionTemplateDataGeneratorQueryAllRedirectsParams;
    allrevisions: ApiActionTemplateDataGeneratorAllRevisionsParams;
    alltransclusions: ApiActionTemplateDataGeneratorQueryAllTransclusionsParams;
    automatictranslationdenselanguages: ApiActionTemplateDataGeneratorAutomaticTranslationDenseLanguagesParams;
    backlinks: ApiActionTemplateDataGeneratorBacklinksParams;
    categories: ApiActionTemplateDataGeneratorCategoriesParams;
    categorymembers: ApiActionTemplateDataGeneratorCategoryMembersParams;
    contenttranslation: ApiActionTemplateDataGeneratorContentTranslationParams;
    contenttranslationsuggestions: ApiActionTemplateDataGeneratorContentTranslationSuggestionsParams;
    deletedrevisions: ApiActionTemplateDataGeneratorDeletedRevisionsParams;
    duplicatefiles: ApiActionTemplateDataGeneratorDuplicateFilesParams;
    embeddedin: ApiActionTemplateDataGeneratorQueryEmbeddedInParams;
    exturlusage: ApiActionTemplateDataGeneratorExturlusageParams;
    fileusage: ApiActionTemplateDataGeneratorQueryFileUsageParams;
    geosearch: ApiActionTemplateDataGeneratorGeoSearchParams;
    growthtasks: ApiActionTemplateDataGeneratorGrowthTasksParams;
    images: ApiActionTemplateDataGeneratorImagesParams;
    imageusage: ApiActionTemplateDataGeneratorQueryImageUsageParams;
    iwbacklinks: ApiActionTemplateDataGeneratorIWBacklinksParams;
    langbacklinks: ApiActionTemplateDataGeneratorLangBacklinksParams;
    links: ApiActionTemplateDataGeneratorLinksParams;
    linkshere: ApiActionTemplateDataGeneratorQueryLinksHereParams;
    mostviewed: ApiActionTemplateDataGeneratorMostViewedParams;
    oldreviewedpages: ApiActionTemplateDataGeneratorOldreviewedpagesParams;
    pageswithprop: ApiActionTemplateDataGeneratorPagesWithPropParams;
    prefixsearch: ApiActionTemplateDataGeneratorPrefixSearchParams;
    projectpages: ApiActionTemplateDataGeneratorProjectPagesParams;
    protectedtitles: ApiActionTemplateDataGeneratorProtectedTitlesParams;
    querypage: ApiActionTemplateDataGeneratorQueryPageParams;
    random: ApiActionTemplateDataGeneratorRandomParams;
    readinglistentries: ApiActionTemplateDataGeneratorReadingListEntriesParams;
    recentchanges: ApiActionTemplateDataGeneratorRecentChangesParams;
    redirects: ApiActionTemplateDataGeneratorQueryRedirectsParams;
    revisions: ApiActionTemplateDataGeneratorRevisionsParams;
    search: ApiActionTemplateDataGeneratorSearchParams;
    templates: ApiActionTemplateDataGeneratorQueryTemplatesParams;
    transcludedin: ApiActionTemplateDataGeneratorQueryTranscludedInParams;
    watchlist: ApiActionTemplateDataGeneratorWatchlistParams;
    watchlistraw: ApiActionTemplateDataGeneratorWatchlistRawParams;
    wblistentityusage: ApiActionTemplateDataGeneratorWblistentityusageParams;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allcategories}
 */
export interface ApiActionTemplateDataGeneratorAllCategoriesParams
    extends ApiActionTemplateDataParams {
    generator?: "allcategories";
    gacfrom?: string;
    gaccontinue?: string;
    gacto?: string;
    gacprefix?: string;
    gacdir?: "ascending" | "descending";
    gacmin?: number;
    gacmax?: number;
    gaclimit?: limit;
    gacprop?: OneOrMore<"hidden" | "size">;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alldeletedrevisions}
 */
export interface ApiActionTemplateDataGeneratorAllDeletedRevisionsParams
    extends ApiActionTemplateDataParams {
    generator?: "alldeletedrevisions";
    gadrprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flags"
        | "ids"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    gadrslots?: string | string[];
    [k: `gadrcontentformat-${string}`]:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    gadrlimit?: limit;
    /**
     * @deprecated
     */
    gadrexpandtemplates?: boolean;
    /**
     * @deprecated
     */
    gadrgeneratexml?: boolean;
    /**
     * @deprecated
     */
    gadrparse?: boolean;
    gadrsection?: string;
    /**
     * @deprecated
     */
    gadrdiffto?: string;
    /**
     * @deprecated
     */
    gadrdifftotext?: string;
    /**
     * @deprecated
     */
    gadrdifftotextpst?: boolean;
    /**
     * @deprecated
     */
    gadrcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    gadruser?: string;
    gadrnamespace?: namespace | namespace[];
    gadrstart?: timestamp;
    gadrend?: timestamp;
    gadrdir?: "newer" | "older";
    gadrfrom?: string;
    gadrto?: string;
    gadrprefix?: string;
    gadrexcludeuser?: string;
    gadrtag?: string;
    gadrcontinue?: string;
    gadrgeneratetitles?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allfileusages}
 */
export interface ApiActionTemplateDataGeneratorQueryAllFileUsagesParams
    extends ApiActionTemplateDataParams {
    generator?: "allfileusages";
    gafcontinue?: string;
    gaffrom?: string;
    gafto?: string;
    gafprefix?: string;
    gafunique?: boolean;
    gafprop?: OneOrMore<"ids" | "title">;
    gaflimit?: limit;
    gafdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allimages}
 */
export interface ApiActionTemplateDataGeneratorAllImagesParams extends ApiActionTemplateDataParams {
    generator?: "allimages";
    gaisort?: "name" | "timestamp";
    gaidir?: "ascending" | "descending" | "newer" | "older";
    gaifrom?: string;
    gaito?: string;
    gaicontinue?: string;
    gaistart?: timestamp;
    gaiend?: timestamp;
    gaiprop?: OneOrMore<
        | "badfile"
        | "bitdepth"
        | "canonicaltitle"
        | "comment"
        | "commonmetadata"
        | "dimensions"
        | "extmetadata"
        | "mediatype"
        | "metadata"
        | "mime"
        | "parsedcomment"
        | "sha1"
        | "size"
        | "timestamp"
        | "url"
        | "user"
        | "userid"
    >;
    gaiprefix?: string;
    gaiminsize?: number;
    gaimaxsize?: number;
    gaisha1?: string;
    gaisha1base36?: string;
    gaiuser?: string;
    gaifilterbots?: "all" | "bots" | "nobots";
    gaimime?: string | string[];
    gailimit?: limit;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alllinks}
 */
export interface ApiActionTemplateDataGeneratorAllLinksParams extends ApiActionTemplateDataParams {
    generator?: "alllinks";
    galcontinue?: string;
    galfrom?: string;
    galto?: string;
    galprefix?: string;
    galunique?: boolean;
    galprop?: OneOrMore<"ids" | "title">;
    galnamespace?: namespace;
    gallimit?: limit;
    galdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allpages}
 */
export interface ApiActionTemplateDataGeneratorAllPagesParams extends ApiActionTemplateDataParams {
    generator?: "allpages";
    gapfrom?: string;
    gapcontinue?: string;
    gapto?: string;
    gapprefix?: string;
    gapnamespace?: namespace;
    gapfilterredir?: "all" | "nonredirects" | "redirects";
    gapfilterlanglinks?: "all" | "withlanglinks" | "withoutlanglinks";
    gapminsize?: number;
    gapmaxsize?: number;
    gapprtype?: OneOrMore<"edit" | "move" | "upload">;
    gapprlevel?: OneOrMore<"" | "autoconfirmed" | "extendedconfirmed" | "sysop" | "templateeditor">;
    gapprfiltercascade?: "all" | "cascading" | "noncascading";
    gapprexpiry?: "all" | "definite" | "indefinite";
    gaplimit?: limit;
    gapdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allredirects}
 */
export interface ApiActionTemplateDataGeneratorQueryAllRedirectsParams
    extends ApiActionTemplateDataParams {
    generator?: "allredirects";
    garcontinue?: string;
    garfrom?: string;
    garto?: string;
    garprefix?: string;
    garunique?: boolean;
    garprop?: OneOrMore<"fragment" | "ids" | "interwiki" | "title">;
    garnamespace?: namespace;
    garlimit?: limit;
    gardir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allrevisions}
 */
export interface ApiActionTemplateDataGeneratorAllRevisionsParams
    extends ApiActionTemplateDataParams {
    generator?: "allrevisions";
    garvprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flags"
        | "ids"
        | "oresscores"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    garvslots?: string | string[];
    [k: `garvcontentformat-${string}`]:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    garvlimit?: limit;
    /**
     * @deprecated
     */
    garvexpandtemplates?: boolean;
    /**
     * @deprecated
     */
    garvgeneratexml?: boolean;
    /**
     * @deprecated
     */
    garvparse?: boolean;
    garvsection?: string;
    /**
     * @deprecated
     */
    garvdiffto?: string;
    /**
     * @deprecated
     */
    garvdifftotext?: string;
    /**
     * @deprecated
     */
    garvdifftotextpst?: boolean;
    /**
     * @deprecated
     */
    garvcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    garvuser?: string;
    garvnamespace?: namespace | namespace[];
    garvstart?: timestamp;
    garvend?: timestamp;
    garvdir?: "newer" | "older";
    garvexcludeuser?: string;
    garvcontinue?: string;
    garvgeneratetitles?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alltransclusions}
 */
export interface ApiActionTemplateDataGeneratorQueryAllTransclusionsParams
    extends ApiActionTemplateDataParams {
    generator?: "alltransclusions";
    gatcontinue?: string;
    gatfrom?: string;
    gatto?: string;
    gatprefix?: string;
    gatunique?: boolean;
    gatprop?: OneOrMore<"ids" | "title">;
    gatnamespace?: namespace;
    gatlimit?: limit;
    gatdir?: "ascending" | "descending";
}

export interface ApiActionTemplateDataGeneratorAutomaticTranslationDenseLanguagesParams
    extends ApiActionTemplateDataParams {
    "generator"?: "automatictranslationdenselanguages";
    "gqid": string;
    "gsection-titles"?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Backlinks}
 */
export interface ApiActionTemplateDataGeneratorBacklinksParams extends ApiActionTemplateDataParams {
    generator?: "backlinks";
    gbltitle?: string;
    gblpageid?: number;
    gblcontinue?: string;
    gblnamespace?: namespace | namespace[];
    gbldir?: "ascending" | "descending";
    gblfilterredir?: "all" | "nonredirects" | "redirects";
    gbllimit?: limit;
    gblredirect?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categories}
 */
export interface ApiActionTemplateDataGeneratorCategoriesParams
    extends ApiActionTemplateDataParams {
    generator?: "categories";
    gclprop?: OneOrMore<"hidden" | "sortkey" | "timestamp">;
    gclshow?: OneOrMore<"!hidden" | "hidden">;
    gcllimit?: limit;
    gclcontinue?: string;
    gclcategories?: string | string[];
    gcldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categorymembers}
 */
export interface ApiActionTemplateDataGeneratorCategoryMembersParams
    extends ApiActionTemplateDataParams {
    generator?: "categorymembers";
    gcmtitle?: string;
    gcmpageid?: number;
    gcmprop?: OneOrMore<"ids" | "sortkey" | "sortkeyprefix" | "timestamp" | "title" | "type">;
    gcmnamespace?: namespace | namespace[];
    gcmtype?: OneOrMore<"file" | "page" | "subcat">;
    gcmcontinue?: string;
    gcmlimit?: limit;
    gcmsort?: "sortkey" | "timestamp";
    gcmdir?: "asc" | "ascending" | "desc" | "descending" | "newer" | "older";
    gcmstart?: timestamp;
    gcmend?: timestamp;
    gcmstarthexsortkey?: string;
    gcmendhexsortkey?: string;
    gcmstartsortkeyprefix?: string;
    gcmendsortkeyprefix?: string;
    /**
     * @deprecated
     */
    gcmstartsortkey?: string;
    /**
     * @deprecated
     */
    gcmendsortkey?: string;
}

export interface ApiActionTemplateDataGeneratorContentTranslationParams
    extends ApiActionTemplateDataParams {
    generator?: "contenttranslation";
    gtranslationid?: string;
    gfrom?: string;
    gto?: string;
    gsourcetitle?: string;
    gsourcesectiontitle?: string;
    glimit?: limit;
    goffset?: string;
    gtype?: "draft" | "published";
    gusecase?: "desktop-editor-draft" | "translation-corpora-units" | "unified-dashboard";
}

export interface ApiActionTemplateDataGeneratorContentTranslationSuggestionsParams
    extends ApiActionTemplateDataParams {
    generator?: "contenttranslationsuggestions";
    gfrom?: string;
    gto?: string;
    glistid?: string;
    glimit?: limit;
    goffset?: string;
    gseed?: number;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Deletedrevisions}
 */
export interface ApiActionTemplateDataGeneratorDeletedRevisionsParams
    extends ApiActionTemplateDataParams {
    generator?: "deletedrevisions";
    gdrvprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flags"
        | "ids"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    gdrvslots?: string | string[];
    [k: `gdrvcontentformat-${string}`]:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    gdrvlimit?: limit;
    /**
     * @deprecated
     */
    gdrvexpandtemplates?: boolean;
    /**
     * @deprecated
     */
    gdrvgeneratexml?: boolean;
    /**
     * @deprecated
     */
    gdrvparse?: boolean;
    gdrvsection?: string;
    /**
     * @deprecated
     */
    gdrvdiffto?: string;
    /**
     * @deprecated
     */
    gdrvdifftotext?: string;
    /**
     * @deprecated
     */
    gdrvdifftotextpst?: boolean;
    /**
     * @deprecated
     */
    gdrvcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    gdrvstart?: timestamp;
    gdrvend?: timestamp;
    gdrvdir?: "newer" | "older";
    gdrvtag?: string;
    gdrvuser?: string;
    gdrvexcludeuser?: string;
    gdrvcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Duplicatefiles}
 */
export interface ApiActionTemplateDataGeneratorDuplicateFilesParams
    extends ApiActionTemplateDataParams {
    generator?: "duplicatefiles";
    gdflimit?: limit;
    gdfcontinue?: string;
    gdfdir?: "ascending" | "descending";
    gdflocalonly?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Embeddedin}
 */
export interface ApiActionTemplateDataGeneratorQueryEmbeddedInParams
    extends ApiActionTemplateDataParams {
    generator?: "embeddedin";
    geititle?: string;
    geipageid?: number;
    geicontinue?: string;
    geinamespace?: namespace | namespace[];
    geidir?: "ascending" | "descending";
    geifilterredir?: "all" | "nonredirects" | "redirects";
    geilimit?: limit;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Exturlusage}
 */
export interface ApiActionTemplateDataGeneratorExturlusageParams
    extends ApiActionTemplateDataParams {
    generator?: "exturlusage";
    geuprop?: OneOrMore<"ids" | "title" | "url">;
    geucontinue?: string;
    geuprotocol?:
        | ""
        | "bitcoin"
        | "ftp"
        | "ftps"
        | "geo"
        | "git"
        | "gopher"
        | "http"
        | "https"
        | "irc"
        | "ircs"
        | "magnet"
        | "mailto"
        | "matrix"
        | "mms"
        | "news"
        | "nntp"
        | "redis"
        | "sftp"
        | "sip"
        | "sips"
        | "sms"
        | "ssh"
        | "svn"
        | "tel"
        | "telnet"
        | "urn"
        | "worldwind"
        | "xmpp";
    geuquery?: string;
    geunamespace?: namespace | namespace[];
    geulimit?: limit;
    /**
     * @deprecated
     */
    geuexpandurl?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Fileusage}
 */
export interface ApiActionTemplateDataGeneratorQueryFileUsageParams
    extends ApiActionTemplateDataParams {
    generator?: "fileusage";
    gfuprop?: OneOrMore<"pageid" | "redirect" | "title">;
    gfunamespace?: namespace | namespace[];
    gfushow?: OneOrMore<"!redirect" | "redirect">;
    gfulimit?: limit;
    gfucontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GeoData#list.3Dgeosearch}
 */
export interface ApiActionTemplateDataGeneratorGeoSearchParams extends ApiActionTemplateDataParams {
    generator?: "geosearch";
    ggscoord?: string;
    ggspage?: string;
    ggsbbox?: string;
    ggsradius?: number;
    ggsmaxdim?: number;
    ggssort?: "distance" | "relevance";
    ggslimit?: limit;
    ggsglobe?: "earth";
    ggsnamespace?: namespace | namespace[];
    ggsprop?: OneOrMore<"country" | "dim" | "globe" | "name" | "region" | "type">;
    ggsprimary?: "all" | "primary" | "secondary";
    ggsdebug?: boolean;
}

/**
 * @private
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GrowthExperiments#API}
 */
export interface ApiActionTemplateDataGeneratorGrowthTasksParams
    extends ApiActionTemplateDataParams {
    generator?: "growthtasks";
    ggttasktypes?: OneOrMore<"copyedit" | "expand" | "links" | "references" | "update">;
    ggttopics?: OneOrMore<
        | "africa"
        | "architecture"
        | "art"
        | "asia"
        | "biography"
        | "biology"
        | "business-and-economics"
        | "central-america"
        | "chemistry"
        | "comics-and-anime"
        | "computers-and-internet"
        | "earth-and-environment"
        | "education"
        | "engineering"
        | "entertainment"
        | "europe"
        | "fashion"
        | "food-and-drink"
        | "general-science"
        | "history"
        | "literature"
        | "mathematics"
        | "medicine-and-health"
        | "military-and-warfare"
        | "music"
        | "north-america"
        | "oceania"
        | "performing-arts"
        | "philosophy-and-religion"
        | "physics"
        | "politics-and-government"
        | "society"
        | "south-america"
        | "sports"
        | "technology"
        | "transportation"
        | "tv-and-film"
        | "video-games"
        | "women"
    >;
    ggttopicsmode?: "AND" | "OR";
    ggtlimit?: limit;
    ggtoffset?: number;
    ggtdebug?: boolean;
    ggtexcludepageids?: number | number[];
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Images}
 */
export interface ApiActionTemplateDataGeneratorImagesParams extends ApiActionTemplateDataParams {
    generator?: "images";
    gimlimit?: limit;
    gimcontinue?: string;
    gimimages?: string | string[];
    gimdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Imageusage}
 */
export interface ApiActionTemplateDataGeneratorQueryImageUsageParams
    extends ApiActionTemplateDataParams {
    generator?: "imageusage";
    giutitle?: string;
    giupageid?: number;
    giucontinue?: string;
    giunamespace?: namespace | namespace[];
    giudir?: "ascending" | "descending";
    giufilterredir?: "all" | "nonredirects" | "redirects";
    giulimit?: limit;
    giuredirect?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Iwbacklinks}
 */
export interface ApiActionTemplateDataGeneratorIWBacklinksParams
    extends ApiActionTemplateDataParams {
    generator?: "iwbacklinks";
    giwblprefix?: string;
    giwbltitle?: string;
    giwblcontinue?: string;
    giwbllimit?: limit;
    giwblprop?: OneOrMore<"iwprefix" | "iwtitle">;
    giwbldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Langbacklinks}
 */
export interface ApiActionTemplateDataGeneratorLangBacklinksParams
    extends ApiActionTemplateDataParams {
    generator?: "langbacklinks";
    glbllang?: string;
    glbltitle?: string;
    glblcontinue?: string;
    glbllimit?: limit;
    glblprop?: OneOrMore<"lllang" | "lltitle">;
    glbldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Links}
 */
export interface ApiActionTemplateDataGeneratorLinksParams extends ApiActionTemplateDataParams {
    generator?: "links";
    gplnamespace?: namespace | namespace[];
    gpllimit?: limit;
    gplcontinue?: string;
    gpltitles?: string | string[];
    gpldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Linkshere}
 */
export interface ApiActionTemplateDataGeneratorQueryLinksHereParams
    extends ApiActionTemplateDataParams {
    generator?: "linkshere";
    glhprop?: OneOrMore<"pageid" | "redirect" | "title">;
    glhnamespace?: namespace | namespace[];
    glhshow?: OneOrMore<"!redirect" | "redirect">;
    glhlimit?: limit;
    glhcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageViewInfo}
 */
export interface ApiActionTemplateDataGeneratorMostViewedParams
    extends ApiActionTemplateDataParams {
    generator?: "mostviewed";
    gpvimmetric?: "pageviews";
    gpvimlimit?: limit;
    gpvimoffset?: number;
}

export interface ApiActionTemplateDataGeneratorOldreviewedpagesParams
    extends ApiActionTemplateDataParams {
    generator?: "oldreviewedpages";
    gorstart?: timestamp;
    gorend?: timestamp;
    gordir?: "newer" | "older";
    gormaxsize?: number;
    gorfilterwatched?: "all" | "watched";
    gornamespace?: namespace | namespace[];
    gorcategory?: string;
    gorfilterredir?: "all" | "nonredirects" | "redirects";
    gorlimit?: limit;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Pageswithprop}
 */
export interface ApiActionTemplateDataGeneratorPagesWithPropParams
    extends ApiActionTemplateDataParams {
    generator?: "pageswithprop";
    gpwppropname: string;
    gpwpprop?: OneOrMore<"ids" | "title" | "value">;
    gpwpcontinue?: string;
    gpwplimit?: limit;
    gpwpdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Prefixsearch}
 */
export interface ApiActionTemplateDataGeneratorPrefixSearchParams
    extends ApiActionTemplateDataParams {
    generator?: "prefixsearch";
    gpssearch: string;
    gpsnamespace?: namespace | namespace[];
    gpslimit?: limit;
    gpsoffset?: number;
    gpsprofile?: "classic" | "engine_autoselect" | "fast-fuzzy" | "fuzzy" | "normal" | "strict";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageAssessments}
 */
export interface ApiActionTemplateDataGeneratorProjectPagesParams
    extends ApiActionTemplateDataParams {
    generator?: "projectpages";
    gwppassessments?: boolean;
    gwppprojects: string | string[];
    gwpplimit?: limit;
    gwppcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Protectedtitles}
 */
export interface ApiActionTemplateDataGeneratorProtectedTitlesParams
    extends ApiActionTemplateDataParams {
    generator?: "protectedtitles";
    gptnamespace?: namespace | namespace[];
    gptlevel?: OneOrMore<"autoconfirmed" | "extendedconfirmed" | "sysop" | "templateeditor">;
    gptlimit?: limit;
    gptdir?: "newer" | "older";
    gptstart?: timestamp;
    gptend?: timestamp;
    gptprop?: OneOrMore<
        "comment" | "expiry" | "level" | "parsedcomment" | "timestamp" | "user" | "userid"
    >;
    gptcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Querypage}
 */
export interface ApiActionTemplateDataGeneratorQueryPageParams extends ApiActionTemplateDataParams {
    generator?: "querypage";
    gqppage:
        | "Ancientpages"
        | "BrokenRedirects"
        | "Deadendpages"
        | "DisambiguationPageLinks"
        | "DisambiguationPages"
        | "DoubleRedirects"
        | "Fewestrevisions"
        | "GadgetUsage"
        | "GloballyWantedFiles"
        | "ListDuplicatedFiles"
        | "Listredirects"
        | "Lonelypages"
        | "Longpages"
        | "MediaStatistics"
        | "MostGloballyLinkedFiles"
        | "Mostcategories"
        | "Mostimages"
        | "Mostinterwikis"
        | "Mostlinked"
        | "Mostlinkedcategories"
        | "Mostlinkedtemplates"
        | "Mostrevisions"
        | "OrphanedTimedText"
        | "Shortpages"
        | "Uncategorizedcategories"
        | "Uncategorizedimages"
        | "Uncategorizedpages"
        | "Uncategorizedtemplates"
        | "UnconnectedPages"
        | "Unusedcategories"
        | "Unusedimages"
        | "Unusedtemplates"
        | "Unwatchedpages"
        | "Wantedcategories"
        | "Wantedfiles"
        | "Wantedpages"
        | "Wantedtemplates"
        | "Withoutinterwiki";
    gqpoffset?: number;
    gqplimit?: limit;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Random}
 */
export interface ApiActionTemplateDataGeneratorRandomParams extends ApiActionTemplateDataParams {
    generator?: "random";
    grnnamespace?: namespace | namespace[];
    grnfilterredir?: "all" | "nonredirects" | "redirects";
    /**
     * @deprecated
     */
    grnredirect?: boolean;
    grnlimit?: limit;
    grncontinue?: string;
}

/**
 * @private
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API}
 */
export interface ApiActionTemplateDataGeneratorReadingListEntriesParams
    extends ApiActionTemplateDataParams {
    generator?: "readinglistentries";
    grlelists?: number | number[];
    grlechangedsince?: timestamp;
    grlesort?: "name" | "updated";
    grledir?: "ascending" | "descending";
    grlelimit?: limit;
    grlecontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Recentchanges}
 */
export interface ApiActionTemplateDataGeneratorRecentChangesParams
    extends ApiActionTemplateDataParams {
    generator?: "recentchanges";
    grcstart?: timestamp;
    grcend?: timestamp;
    grcdir?: "newer" | "older";
    grcnamespace?: namespace | namespace[];
    grcuser?: string;
    grcexcludeuser?: string;
    grctag?: string;
    grcprop?: OneOrMore<
        | "comment"
        | "flags"
        | "ids"
        | "loginfo"
        | "oresscores"
        | "parsedcomment"
        | "patrolled"
        | "redirect"
        | "sha1"
        | "sizes"
        | "tags"
        | "timestamp"
        | "title"
        | "user"
        | "userid"
    >;
    grcshow?: OneOrMore<
        | "!anon"
        | "!autopatrolled"
        | "!bot"
        | "!minor"
        | "!oresreview"
        | "!patrolled"
        | "!redirect"
        | "anon"
        | "autopatrolled"
        | "bot"
        | "minor"
        | "oresreview"
        | "patrolled"
        | "redirect"
        | "unpatrolled"
    >;
    grclimit?: limit;
    grctype?: OneOrMore<"categorize" | "edit" | "external" | "log" | "new">;
    grctoponly?: boolean;
    grctitle?: string;
    grccontinue?: string;
    grcgeneraterevisions?: boolean;
    grcslot?: "main";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Redirects}
 */
export interface ApiActionTemplateDataGeneratorQueryRedirectsParams
    extends ApiActionTemplateDataParams {
    generator?: "redirects";
    grdprop?: OneOrMore<"fragment" | "pageid" | "title">;
    grdnamespace?: namespace | namespace[];
    grdshow?: OneOrMore<"!fragment" | "fragment">;
    grdlimit?: limit;
    grdcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Revisions}
 */
export interface ApiActionTemplateDataGeneratorRevisionsParams extends ApiActionTemplateDataParams {
    generator?: "revisions";
    grvprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flagged"
        | "flags"
        | "ids"
        | "oresscores"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    grvslots?: string | string[];
    [k: `grvcontentformat-${string}`]:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    grvlimit?: limit;
    /**
     * @deprecated
     */
    grvexpandtemplates?: boolean;
    /**
     * @deprecated
     */
    grvgeneratexml?: boolean;
    /**
     * @deprecated
     */
    grvparse?: boolean;
    grvsection?: string;
    /**
     * @deprecated
     */
    grvdiffto?: string;
    /**
     * @deprecated
     */
    grvdifftotext?: string;
    /**
     * @deprecated
     */
    grvdifftotextpst?: boolean;
    /**
     * @deprecated
     */
    grvcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    grvstartid?: number;
    grvendid?: number;
    grvstart?: timestamp;
    grvend?: timestamp;
    grvdir?: "newer" | "older";
    grvuser?: string;
    grvexcludeuser?: string;
    grvtag?: string;
    grvcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Search}
 */
export interface ApiActionTemplateDataGeneratorSearchParams extends ApiActionTemplateDataParams {
    generator?: "search";
    gsrsearch: string;
    gsrnamespace?: namespace | namespace[];
    gsrlimit?: limit;
    gsroffset?: number;
    gsrqiprofile?:
        | "classic"
        | "classic_noboostlinks"
        | "empty"
        | "engine_autoselect"
        | "growth_underlinked"
        | "mlr-1024rs"
        | "popular_inclinks"
        | "popular_inclinks_pv"
        | "wsum_inclinks"
        | "wsum_inclinks_pv";
    gsrwhat?: "nearmatch" | "text" | "title";
    gsrinfo?: OneOrMore<"rewrittenquery" | "suggestion" | "totalhits">;
    gsrprop?: OneOrMore<
        | "categorysnippet"
        | "extensiondata"
        | "isfilematch"
        | "redirectsnippet"
        | "redirecttitle"
        | "sectionsnippet"
        | "sectiontitle"
        | "size"
        | "snippet"
        | "timestamp"
        | "titlesnippet"
        | "wordcount"
        | "hasrelated"
        | "score"
    >;
    gsrinterwiki?: boolean;
    gsrenablerewrites?: boolean;
    gsrsort?:
        | "create_timestamp_asc"
        | "create_timestamp_desc"
        | "incoming_links_asc"
        | "incoming_links_desc"
        | "just_match"
        | "last_edit_asc"
        | "last_edit_desc"
        | "none"
        | "random"
        | "relevance"
        | "user_random";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Templates}
 */
export interface ApiActionTemplateDataGeneratorQueryTemplatesParams
    extends ApiActionTemplateDataParams {
    generator?: "templates";
    gtlnamespace?: namespace | namespace[];
    gtllimit?: limit;
    gtlcontinue?: string;
    gtltemplates?: string | string[];
    gtldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Transcludedin}
 */
export interface ApiActionTemplateDataGeneratorQueryTranscludedInParams
    extends ApiActionTemplateDataParams {
    generator?: "transcludedin";
    gtiprop?: OneOrMore<"pageid" | "redirect" | "title">;
    gtinamespace?: namespace | namespace[];
    gtishow?: OneOrMore<"!redirect" | "redirect">;
    gtilimit?: limit;
    gticontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlist}
 */
export interface ApiActionTemplateDataGeneratorWatchlistParams extends ApiActionTemplateDataParams {
    generator?: "watchlist";
    gwlallrev?: boolean;
    gwlstart?: timestamp;
    gwlend?: timestamp;
    gwlnamespace?: namespace | namespace[];
    gwluser?: string;
    gwlexcludeuser?: string;
    gwldir?: "newer" | "older";
    gwllimit?: limit;
    gwlprop?: OneOrMore<
        | "comment"
        | "expiry"
        | "flags"
        | "ids"
        | "loginfo"
        | "notificationtimestamp"
        | "oresscores"
        | "parsedcomment"
        | "patrol"
        | "sizes"
        | "tags"
        | "timestamp"
        | "title"
        | "user"
        | "userid"
    >;
    gwlshow?: OneOrMore<
        | "!anon"
        | "!autopatrolled"
        | "!bot"
        | "!minor"
        | "!oresreview"
        | "!patrolled"
        | "!unread"
        | "anon"
        | "autopatrolled"
        | "bot"
        | "minor"
        | "oresreview"
        | "patrolled"
        | "unread"
    >;
    gwltype?: OneOrMore<"categorize" | "edit" | "external" | "log" | "new">;
    gwlowner?: string;
    gwltoken?: string;
    gwlcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlistraw}
 */
export interface ApiActionTemplateDataGeneratorWatchlistRawParams
    extends ApiActionTemplateDataParams {
    generator?: "watchlistraw";
    gwrcontinue?: string;
    gwrnamespace?: namespace | namespace[];
    gwrlimit?: limit;
    gwrprop?: OneOrMore<"changed">;
    gwrshow?: OneOrMore<"!changed" | "changed">;
    gwrowner?: string;
    gwrtoken?: string;
    gwrdir?: "ascending" | "descending";
    gwrfromtitle?: string;
    gwrtotitle?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Wikibase/API}
 */
export interface ApiActionTemplateDataGeneratorWblistentityusageParams
    extends ApiActionTemplateDataParams {
    generator?: "wblistentityusage";
    gwbleuprop?: OneOrMore<"url">;
    gwbleuaspect?: OneOrMore<"C" | "D" | "L" | "O" | "S" | "T" | "X">;
    gwbleuentities: string | string[];
    gwbleulimit?: limit;
    gwbleucontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Extension:Thanks#API_Documentation}
 */
export interface ApiActionThankParams extends ApiParams {
    action?: "thank";
    rev?: number;
    log?: number;
    token?: string;
    source?: string;
}

/**
 * @private
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:TimedMediaHandler}
 */
export interface ApiActionTimedTextParams extends ApiParams {
    action?: "timedtext";
    title?: string;
    pageid?: number;
    trackformat: "srt" | "vtt";
    lang?: string;
}

export interface ApiActionTitleBlacklistParams extends ApiParams {
    action?: "titleblacklist";
    tbtitle: string;
    tbaction?: "create" | "createpage" | "createtalk" | "edit" | "move" | "new-account" | "upload";
    tbnooverride?: boolean;
}

export interface ApiActionTorBlockParams extends ApiParams {
    action?: "torblock";
    ip: string;
}

export interface ApiActionTranscodeResetParams extends ApiParams {
    action?: "transcodereset";
    title: string;
    transcodekey?: string;
    token?: string;
}

/**
 * @private
 */
export interface ApiActionULSLocalizationParams extends ApiParams {
    action?: "ulslocalization";
    language: string;
}

/**
 * @private
 */
export interface ApiActionULSSetLangParams extends ApiParams {
    action?: "ulssetlang";
    languagecode: string;
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Block}
 */
export interface ApiActionUnblockParams extends ApiParams {
    action?: "unblock";
    id?: number;
    user?: string;
    /**
     * @deprecated
     */
    userid?: number;
    reason?: string;
    tags?: string | string[];
    watchuser?: boolean;
    watchlistexpiry?: expiry;
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Undelete}
 */
export interface ApiActionUndeleteParams extends ApiParams {
    action?: "undelete";
    title: string;
    reason?: string;
    tags?: string | string[];
    timestamps?: timestamp | timestamp[];
    fileids?: number | number[];
    undeletetalk?: boolean;
    watchlist?: "nochange" | "preferences" | "unwatch" | "watch";
    watchlistexpiry?: expiry;
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Manage_authentication_data}
 */
export interface ApiActionQueryUnlinkAccountParams extends ApiParams {
    action?: "unlinkaccount";
    request: string;
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Upload}
 */
export interface ApiActionUploadParams extends ApiParams {
    action?: "upload";
    filename?: string;
    comment?: string;
    tags?: string | string[];
    text?: string;
    /**
     * @deprecated
     */
    watch?: boolean;
    watchlist?: "nochange" | "preferences" | "watch";
    watchlistexpiry?: expiry;
    ignorewarnings?: boolean;
    file?: upload;
    url?: string;
    filekey?: string;
    /**
     * @deprecated
     */
    sessionkey?: string;
    stash?: boolean;
    filesize?: number;
    offset?: number;
    chunk?: upload;
    async?: boolean;
    checkstatus?: boolean;
    token?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:User_group_membership}
 */
export interface ApiActionUserrightsParams extends ApiParams {
    action?: "userrights";
    user?: string;
    /**
     * @deprecated
     */
    userid?: number;
    add?: OneOrMore<
        | "abusefilter"
        | "abusefilter-helper"
        | "accountcreator"
        | "autoreviewer"
        | "bot"
        | "bureaucrat"
        | "checkuser"
        | "checkuser-temporary-account-viewer"
        | "confirmed"
        | "copyviobot"
        | "eventcoordinator"
        | "extendedconfirmed"
        | "extendedmover"
        | "filemover"
        | "founder"
        | "import"
        | "interface-admin"
        | "ipblock-exempt"
        | "massmessage-sender"
        | "no-ipinfo"
        | "patroller"
        | "push-subscription-manager"
        | "researcher"
        | "reviewer"
        | "rollbacker"
        | "steward"
        | "suppress"
        | "sysop"
        | "templateeditor"
        | "transwiki"
    >;
    expiry?: string | string[];
    remove?: OneOrMore<
        | "abusefilter"
        | "abusefilter-helper"
        | "accountcreator"
        | "autoreviewer"
        | "bot"
        | "bureaucrat"
        | "checkuser"
        | "checkuser-temporary-account-viewer"
        | "confirmed"
        | "copyviobot"
        | "eventcoordinator"
        | "extendedconfirmed"
        | "extendedmover"
        | "filemover"
        | "founder"
        | "import"
        | "interface-admin"
        | "ipblock-exempt"
        | "massmessage-sender"
        | "no-ipinfo"
        | "patroller"
        | "push-subscription-manager"
        | "researcher"
        | "reviewer"
        | "rollbacker"
        | "steward"
        | "suppress"
        | "sysop"
        | "templateeditor"
        | "transwiki"
    >;
    reason?: string;
    token?: string;
    tags?: string | string[];
    watchuser?: boolean;
    watchlistexpiry?: expiry;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Validatepassword}
 */
export interface ApiActionValidatePasswordParams extends ApiParams {
    action?: "validatepassword";
    password?: password;
    user?: string;
    email?: string;
    realname?: string;
}

/**
 * @private
 */
export interface ApiActionVisualEditorParams extends ApiParams {
    action?: "visualeditor";
    page: string;
    badetag?: string;
    format?: "json" | "jsonfm";
    paction: "metadata" | "parse" | "parsefragment" | "templatesused" | "wikitext";
    wikitext?: string;
    section?: string;
    stash?: boolean;
    oldid?: number;
    editintro?: string;
    pst?: boolean;
    preload?: string;
    preloadparams?: string | string[];
}

/**
 * @private
 */
export interface ApiActionVisualEditorEditParams extends ApiParams {
    action?: "visualeditoredit";
    paction: "diff" | "save" | "serialize" | "serializeforcache";
    page: string;
    token?: string;
    wikitext?: string;
    section?: string;
    sectiontitle?: string;
    basetimestamp?: timestamp;
    starttimestamp?: timestamp;
    oldid?: number;
    minor?: string;
    watchlist?: string;
    html?: string;
    etag?: string;
    summary?: string;
    captchaid?: string;
    captchaword?: string;
    cachekey?: string;
    nocontent?: boolean;
    returnto?: string;
    returntoquery?: string;
    returntoanchor?: string;
    useskin?:
        | "apioutput"
        | "authentication-popup"
        | "cologneblue"
        | "contenttranslation"
        | "fallback"
        | "json"
        | "minerva"
        | "modern"
        | "monobook"
        | "timeless"
        | "vector"
        | "vector-2022";
    tags?: string | string[];
    plugins?: string | string[];
    [k: `data-${string}`]: string;
    mobileformat?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watch}
 */
export interface ApiActionWatchParams extends ApiParams {
    action?: "watch";
    /**
     * @deprecated
     */
    title?: string;
    expiry?: expiry;
    unwatch?: boolean;
    continue?: string;
    titles?: string | string[];
    pageids?: number | number[];
    revids?: number | number[];
    generator?: ApiActionWatchParamsGenerator;
    redirects?: boolean;
    converttitles?: boolean;
    token?: string;
}

type ApiActionWatchParamsGenerator = keyof ApiActionWatchParamsGeneratorMap;

interface ApiActionWatchParamsGeneratorMap {
    allcategories: ApiActionWatchGeneratorAllCategoriesParams;
    alldeletedrevisions: ApiActionWatchGeneratorAllDeletedRevisionsParams;
    allfileusages: ApiActionWatchGeneratorQueryAllFileUsagesParams;
    allimages: ApiActionWatchGeneratorAllImagesParams;
    alllinks: ApiActionWatchGeneratorAllLinksParams;
    allpages: ApiActionWatchGeneratorAllPagesParams;
    allredirects: ApiActionWatchGeneratorQueryAllRedirectsParams;
    allrevisions: ApiActionWatchGeneratorAllRevisionsParams;
    alltransclusions: ApiActionWatchGeneratorQueryAllTransclusionsParams;
    automatictranslationdenselanguages: ApiActionWatchGeneratorAutomaticTranslationDenseLanguagesParams;
    backlinks: ApiActionWatchGeneratorBacklinksParams;
    categories: ApiActionWatchGeneratorCategoriesParams;
    categorymembers: ApiActionWatchGeneratorCategoryMembersParams;
    contenttranslation: ApiActionWatchGeneratorContentTranslationParams;
    contenttranslationsuggestions: ApiActionWatchGeneratorContentTranslationSuggestionsParams;
    deletedrevisions: ApiActionWatchGeneratorDeletedRevisionsParams;
    duplicatefiles: ApiActionWatchGeneratorDuplicateFilesParams;
    embeddedin: ApiActionWatchGeneratorQueryEmbeddedInParams;
    exturlusage: ApiActionWatchGeneratorExturlusageParams;
    fileusage: ApiActionWatchGeneratorQueryFileUsageParams;
    geosearch: ApiActionWatchGeneratorGeoSearchParams;
    growthtasks: ApiActionWatchGeneratorGrowthTasksParams;
    images: ApiActionWatchGeneratorImagesParams;
    imageusage: ApiActionWatchGeneratorQueryImageUsageParams;
    iwbacklinks: ApiActionWatchGeneratorIWBacklinksParams;
    langbacklinks: ApiActionWatchGeneratorLangBacklinksParams;
    links: ApiActionWatchGeneratorLinksParams;
    linkshere: ApiActionWatchGeneratorQueryLinksHereParams;
    mostviewed: ApiActionWatchGeneratorMostViewedParams;
    oldreviewedpages: ApiActionWatchGeneratorOldreviewedpagesParams;
    pageswithprop: ApiActionWatchGeneratorPagesWithPropParams;
    prefixsearch: ApiActionWatchGeneratorPrefixSearchParams;
    projectpages: ApiActionWatchGeneratorProjectPagesParams;
    protectedtitles: ApiActionWatchGeneratorProtectedTitlesParams;
    querypage: ApiActionWatchGeneratorQueryPageParams;
    random: ApiActionWatchGeneratorRandomParams;
    readinglistentries: ApiActionWatchGeneratorReadingListEntriesParams;
    recentchanges: ApiActionWatchGeneratorRecentChangesParams;
    redirects: ApiActionWatchGeneratorQueryRedirectsParams;
    revisions: ApiActionWatchGeneratorRevisionsParams;
    search: ApiActionWatchGeneratorSearchParams;
    templates: ApiActionWatchGeneratorQueryTemplatesParams;
    transcludedin: ApiActionWatchGeneratorQueryTranscludedInParams;
    watchlist: ApiActionWatchGeneratorWatchlistParams;
    watchlistraw: ApiActionWatchGeneratorWatchlistRawParams;
    wblistentityusage: ApiActionWatchGeneratorWblistentityusageParams;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allcategories}
 */
export interface ApiActionWatchGeneratorAllCategoriesParams extends ApiActionWatchParams {
    generator?: "allcategories";
    gacfrom?: string;
    gaccontinue?: string;
    gacto?: string;
    gacprefix?: string;
    gacdir?: "ascending" | "descending";
    gacmin?: number;
    gacmax?: number;
    gaclimit?: limit;
    gacprop?: OneOrMore<"hidden" | "size">;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alldeletedrevisions}
 */
export interface ApiActionWatchGeneratorAllDeletedRevisionsParams extends ApiActionWatchParams {
    generator?: "alldeletedrevisions";
    gadrprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flags"
        | "ids"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    gadrslots?: string | string[];
    [k: `gadrcontentformat-${string}`]:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    gadrlimit?: limit;
    /**
     * @deprecated
     */
    gadrexpandtemplates?: boolean;
    /**
     * @deprecated
     */
    gadrgeneratexml?: boolean;
    /**
     * @deprecated
     */
    gadrparse?: boolean;
    gadrsection?: string;
    /**
     * @deprecated
     */
    gadrdiffto?: string;
    /**
     * @deprecated
     */
    gadrdifftotext?: string;
    /**
     * @deprecated
     */
    gadrdifftotextpst?: boolean;
    /**
     * @deprecated
     */
    gadrcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    gadruser?: string;
    gadrnamespace?: namespace | namespace[];
    gadrstart?: timestamp;
    gadrend?: timestamp;
    gadrdir?: "newer" | "older";
    gadrfrom?: string;
    gadrto?: string;
    gadrprefix?: string;
    gadrexcludeuser?: string;
    gadrtag?: string;
    gadrcontinue?: string;
    gadrgeneratetitles?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allfileusages}
 */
export interface ApiActionWatchGeneratorQueryAllFileUsagesParams extends ApiActionWatchParams {
    generator?: "allfileusages";
    gafcontinue?: string;
    gaffrom?: string;
    gafto?: string;
    gafprefix?: string;
    gafunique?: boolean;
    gafprop?: OneOrMore<"ids" | "title">;
    gaflimit?: limit;
    gafdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allimages}
 */
export interface ApiActionWatchGeneratorAllImagesParams extends ApiActionWatchParams {
    generator?: "allimages";
    gaisort?: "name" | "timestamp";
    gaidir?: "ascending" | "descending" | "newer" | "older";
    gaifrom?: string;
    gaito?: string;
    gaicontinue?: string;
    gaistart?: timestamp;
    gaiend?: timestamp;
    gaiprop?: OneOrMore<
        | "badfile"
        | "bitdepth"
        | "canonicaltitle"
        | "comment"
        | "commonmetadata"
        | "dimensions"
        | "extmetadata"
        | "mediatype"
        | "metadata"
        | "mime"
        | "parsedcomment"
        | "sha1"
        | "size"
        | "timestamp"
        | "url"
        | "user"
        | "userid"
    >;
    gaiprefix?: string;
    gaiminsize?: number;
    gaimaxsize?: number;
    gaisha1?: string;
    gaisha1base36?: string;
    gaiuser?: string;
    gaifilterbots?: "all" | "bots" | "nobots";
    gaimime?: string | string[];
    gailimit?: limit;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alllinks}
 */
export interface ApiActionWatchGeneratorAllLinksParams extends ApiActionWatchParams {
    generator?: "alllinks";
    galcontinue?: string;
    galfrom?: string;
    galto?: string;
    galprefix?: string;
    galunique?: boolean;
    galprop?: OneOrMore<"ids" | "title">;
    galnamespace?: namespace;
    gallimit?: limit;
    galdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allpages}
 */
export interface ApiActionWatchGeneratorAllPagesParams extends ApiActionWatchParams {
    generator?: "allpages";
    gapfrom?: string;
    gapcontinue?: string;
    gapto?: string;
    gapprefix?: string;
    gapnamespace?: namespace;
    gapfilterredir?: "all" | "nonredirects" | "redirects";
    gapfilterlanglinks?: "all" | "withlanglinks" | "withoutlanglinks";
    gapminsize?: number;
    gapmaxsize?: number;
    gapprtype?: OneOrMore<"edit" | "move" | "upload">;
    gapprlevel?: OneOrMore<"" | "autoconfirmed" | "extendedconfirmed" | "sysop" | "templateeditor">;
    gapprfiltercascade?: "all" | "cascading" | "noncascading";
    gapprexpiry?: "all" | "definite" | "indefinite";
    gaplimit?: limit;
    gapdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allredirects}
 */
export interface ApiActionWatchGeneratorQueryAllRedirectsParams extends ApiActionWatchParams {
    generator?: "allredirects";
    garcontinue?: string;
    garfrom?: string;
    garto?: string;
    garprefix?: string;
    garunique?: boolean;
    garprop?: OneOrMore<"fragment" | "ids" | "interwiki" | "title">;
    garnamespace?: namespace;
    garlimit?: limit;
    gardir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allrevisions}
 */
export interface ApiActionWatchGeneratorAllRevisionsParams extends ApiActionWatchParams {
    generator?: "allrevisions";
    garvprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flags"
        | "ids"
        | "oresscores"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    garvslots?: string | string[];
    [k: `garvcontentformat-${string}`]:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    garvlimit?: limit;
    /**
     * @deprecated
     */
    garvexpandtemplates?: boolean;
    /**
     * @deprecated
     */
    garvgeneratexml?: boolean;
    /**
     * @deprecated
     */
    garvparse?: boolean;
    garvsection?: string;
    /**
     * @deprecated
     */
    garvdiffto?: string;
    /**
     * @deprecated
     */
    garvdifftotext?: string;
    /**
     * @deprecated
     */
    garvdifftotextpst?: boolean;
    /**
     * @deprecated
     */
    garvcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    garvuser?: string;
    garvnamespace?: namespace | namespace[];
    garvstart?: timestamp;
    garvend?: timestamp;
    garvdir?: "newer" | "older";
    garvexcludeuser?: string;
    garvcontinue?: string;
    garvgeneratetitles?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alltransclusions}
 */
export interface ApiActionWatchGeneratorQueryAllTransclusionsParams extends ApiActionWatchParams {
    generator?: "alltransclusions";
    gatcontinue?: string;
    gatfrom?: string;
    gatto?: string;
    gatprefix?: string;
    gatunique?: boolean;
    gatprop?: OneOrMore<"ids" | "title">;
    gatnamespace?: namespace;
    gatlimit?: limit;
    gatdir?: "ascending" | "descending";
}

export interface ApiActionWatchGeneratorAutomaticTranslationDenseLanguagesParams
    extends ApiActionWatchParams {
    "generator"?: "automatictranslationdenselanguages";
    "gqid": string;
    "gsection-titles"?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Backlinks}
 */
export interface ApiActionWatchGeneratorBacklinksParams extends ApiActionWatchParams {
    generator?: "backlinks";
    gbltitle?: string;
    gblpageid?: number;
    gblcontinue?: string;
    gblnamespace?: namespace | namespace[];
    gbldir?: "ascending" | "descending";
    gblfilterredir?: "all" | "nonredirects" | "redirects";
    gbllimit?: limit;
    gblredirect?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categories}
 */
export interface ApiActionWatchGeneratorCategoriesParams extends ApiActionWatchParams {
    generator?: "categories";
    gclprop?: OneOrMore<"hidden" | "sortkey" | "timestamp">;
    gclshow?: OneOrMore<"!hidden" | "hidden">;
    gcllimit?: limit;
    gclcontinue?: string;
    gclcategories?: string | string[];
    gcldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categorymembers}
 */
export interface ApiActionWatchGeneratorCategoryMembersParams extends ApiActionWatchParams {
    generator?: "categorymembers";
    gcmtitle?: string;
    gcmpageid?: number;
    gcmprop?: OneOrMore<"ids" | "sortkey" | "sortkeyprefix" | "timestamp" | "title" | "type">;
    gcmnamespace?: namespace | namespace[];
    gcmtype?: OneOrMore<"file" | "page" | "subcat">;
    gcmcontinue?: string;
    gcmlimit?: limit;
    gcmsort?: "sortkey" | "timestamp";
    gcmdir?: "asc" | "ascending" | "desc" | "descending" | "newer" | "older";
    gcmstart?: timestamp;
    gcmend?: timestamp;
    gcmstarthexsortkey?: string;
    gcmendhexsortkey?: string;
    gcmstartsortkeyprefix?: string;
    gcmendsortkeyprefix?: string;
    /**
     * @deprecated
     */
    gcmstartsortkey?: string;
    /**
     * @deprecated
     */
    gcmendsortkey?: string;
}

export interface ApiActionWatchGeneratorContentTranslationParams extends ApiActionWatchParams {
    generator?: "contenttranslation";
    gtranslationid?: string;
    gfrom?: string;
    gto?: string;
    gsourcetitle?: string;
    gsourcesectiontitle?: string;
    glimit?: limit;
    goffset?: string;
    gtype?: "draft" | "published";
    gusecase?: "desktop-editor-draft" | "translation-corpora-units" | "unified-dashboard";
}

export interface ApiActionWatchGeneratorContentTranslationSuggestionsParams
    extends ApiActionWatchParams {
    generator?: "contenttranslationsuggestions";
    gfrom?: string;
    gto?: string;
    glistid?: string;
    glimit?: limit;
    goffset?: string;
    gseed?: number;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Deletedrevisions}
 */
export interface ApiActionWatchGeneratorDeletedRevisionsParams extends ApiActionWatchParams {
    generator?: "deletedrevisions";
    gdrvprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flags"
        | "ids"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    gdrvslots?: string | string[];
    [k: `gdrvcontentformat-${string}`]:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    gdrvlimit?: limit;
    /**
     * @deprecated
     */
    gdrvexpandtemplates?: boolean;
    /**
     * @deprecated
     */
    gdrvgeneratexml?: boolean;
    /**
     * @deprecated
     */
    gdrvparse?: boolean;
    gdrvsection?: string;
    /**
     * @deprecated
     */
    gdrvdiffto?: string;
    /**
     * @deprecated
     */
    gdrvdifftotext?: string;
    /**
     * @deprecated
     */
    gdrvdifftotextpst?: boolean;
    /**
     * @deprecated
     */
    gdrvcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    gdrvstart?: timestamp;
    gdrvend?: timestamp;
    gdrvdir?: "newer" | "older";
    gdrvtag?: string;
    gdrvuser?: string;
    gdrvexcludeuser?: string;
    gdrvcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Duplicatefiles}
 */
export interface ApiActionWatchGeneratorDuplicateFilesParams extends ApiActionWatchParams {
    generator?: "duplicatefiles";
    gdflimit?: limit;
    gdfcontinue?: string;
    gdfdir?: "ascending" | "descending";
    gdflocalonly?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Embeddedin}
 */
export interface ApiActionWatchGeneratorQueryEmbeddedInParams extends ApiActionWatchParams {
    generator?: "embeddedin";
    geititle?: string;
    geipageid?: number;
    geicontinue?: string;
    geinamespace?: namespace | namespace[];
    geidir?: "ascending" | "descending";
    geifilterredir?: "all" | "nonredirects" | "redirects";
    geilimit?: limit;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Exturlusage}
 */
export interface ApiActionWatchGeneratorExturlusageParams extends ApiActionWatchParams {
    generator?: "exturlusage";
    geuprop?: OneOrMore<"ids" | "title" | "url">;
    geucontinue?: string;
    geuprotocol?:
        | ""
        | "bitcoin"
        | "ftp"
        | "ftps"
        | "geo"
        | "git"
        | "gopher"
        | "http"
        | "https"
        | "irc"
        | "ircs"
        | "magnet"
        | "mailto"
        | "matrix"
        | "mms"
        | "news"
        | "nntp"
        | "redis"
        | "sftp"
        | "sip"
        | "sips"
        | "sms"
        | "ssh"
        | "svn"
        | "tel"
        | "telnet"
        | "urn"
        | "worldwind"
        | "xmpp";
    geuquery?: string;
    geunamespace?: namespace | namespace[];
    geulimit?: limit;
    /**
     * @deprecated
     */
    geuexpandurl?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Fileusage}
 */
export interface ApiActionWatchGeneratorQueryFileUsageParams extends ApiActionWatchParams {
    generator?: "fileusage";
    gfuprop?: OneOrMore<"pageid" | "redirect" | "title">;
    gfunamespace?: namespace | namespace[];
    gfushow?: OneOrMore<"!redirect" | "redirect">;
    gfulimit?: limit;
    gfucontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GeoData#list.3Dgeosearch}
 */
export interface ApiActionWatchGeneratorGeoSearchParams extends ApiActionWatchParams {
    generator?: "geosearch";
    ggscoord?: string;
    ggspage?: string;
    ggsbbox?: string;
    ggsradius?: number;
    ggsmaxdim?: number;
    ggssort?: "distance" | "relevance";
    ggslimit?: limit;
    ggsglobe?: "earth";
    ggsnamespace?: namespace | namespace[];
    ggsprop?: OneOrMore<"country" | "dim" | "globe" | "name" | "region" | "type">;
    ggsprimary?: "all" | "primary" | "secondary";
    ggsdebug?: boolean;
}

/**
 * @private
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GrowthExperiments#API}
 */
export interface ApiActionWatchGeneratorGrowthTasksParams extends ApiActionWatchParams {
    generator?: "growthtasks";
    ggttasktypes?: OneOrMore<"copyedit" | "expand" | "links" | "references" | "update">;
    ggttopics?: OneOrMore<
        | "africa"
        | "architecture"
        | "art"
        | "asia"
        | "biography"
        | "biology"
        | "business-and-economics"
        | "central-america"
        | "chemistry"
        | "comics-and-anime"
        | "computers-and-internet"
        | "earth-and-environment"
        | "education"
        | "engineering"
        | "entertainment"
        | "europe"
        | "fashion"
        | "food-and-drink"
        | "general-science"
        | "history"
        | "literature"
        | "mathematics"
        | "medicine-and-health"
        | "military-and-warfare"
        | "music"
        | "north-america"
        | "oceania"
        | "performing-arts"
        | "philosophy-and-religion"
        | "physics"
        | "politics-and-government"
        | "society"
        | "south-america"
        | "sports"
        | "technology"
        | "transportation"
        | "tv-and-film"
        | "video-games"
        | "women"
    >;
    ggttopicsmode?: "AND" | "OR";
    ggtlimit?: limit;
    ggtoffset?: number;
    ggtdebug?: boolean;
    ggtexcludepageids?: number | number[];
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Images}
 */
export interface ApiActionWatchGeneratorImagesParams extends ApiActionWatchParams {
    generator?: "images";
    gimlimit?: limit;
    gimcontinue?: string;
    gimimages?: string | string[];
    gimdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Imageusage}
 */
export interface ApiActionWatchGeneratorQueryImageUsageParams extends ApiActionWatchParams {
    generator?: "imageusage";
    giutitle?: string;
    giupageid?: number;
    giucontinue?: string;
    giunamespace?: namespace | namespace[];
    giudir?: "ascending" | "descending";
    giufilterredir?: "all" | "nonredirects" | "redirects";
    giulimit?: limit;
    giuredirect?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Iwbacklinks}
 */
export interface ApiActionWatchGeneratorIWBacklinksParams extends ApiActionWatchParams {
    generator?: "iwbacklinks";
    giwblprefix?: string;
    giwbltitle?: string;
    giwblcontinue?: string;
    giwbllimit?: limit;
    giwblprop?: OneOrMore<"iwprefix" | "iwtitle">;
    giwbldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Langbacklinks}
 */
export interface ApiActionWatchGeneratorLangBacklinksParams extends ApiActionWatchParams {
    generator?: "langbacklinks";
    glbllang?: string;
    glbltitle?: string;
    glblcontinue?: string;
    glbllimit?: limit;
    glblprop?: OneOrMore<"lllang" | "lltitle">;
    glbldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Links}
 */
export interface ApiActionWatchGeneratorLinksParams extends ApiActionWatchParams {
    generator?: "links";
    gplnamespace?: namespace | namespace[];
    gpllimit?: limit;
    gplcontinue?: string;
    gpltitles?: string | string[];
    gpldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Linkshere}
 */
export interface ApiActionWatchGeneratorQueryLinksHereParams extends ApiActionWatchParams {
    generator?: "linkshere";
    glhprop?: OneOrMore<"pageid" | "redirect" | "title">;
    glhnamespace?: namespace | namespace[];
    glhshow?: OneOrMore<"!redirect" | "redirect">;
    glhlimit?: limit;
    glhcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageViewInfo}
 */
export interface ApiActionWatchGeneratorMostViewedParams extends ApiActionWatchParams {
    generator?: "mostviewed";
    gpvimmetric?: "pageviews";
    gpvimlimit?: limit;
    gpvimoffset?: number;
}

export interface ApiActionWatchGeneratorOldreviewedpagesParams extends ApiActionWatchParams {
    generator?: "oldreviewedpages";
    gorstart?: timestamp;
    gorend?: timestamp;
    gordir?: "newer" | "older";
    gormaxsize?: number;
    gorfilterwatched?: "all" | "watched";
    gornamespace?: namespace | namespace[];
    gorcategory?: string;
    gorfilterredir?: "all" | "nonredirects" | "redirects";
    gorlimit?: limit;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Pageswithprop}
 */
export interface ApiActionWatchGeneratorPagesWithPropParams extends ApiActionWatchParams {
    generator?: "pageswithprop";
    gpwppropname: string;
    gpwpprop?: OneOrMore<"ids" | "title" | "value">;
    gpwpcontinue?: string;
    gpwplimit?: limit;
    gpwpdir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Prefixsearch}
 */
export interface ApiActionWatchGeneratorPrefixSearchParams extends ApiActionWatchParams {
    generator?: "prefixsearch";
    gpssearch: string;
    gpsnamespace?: namespace | namespace[];
    gpslimit?: limit;
    gpsoffset?: number;
    gpsprofile?: "classic" | "engine_autoselect" | "fast-fuzzy" | "fuzzy" | "normal" | "strict";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageAssessments}
 */
export interface ApiActionWatchGeneratorProjectPagesParams extends ApiActionWatchParams {
    generator?: "projectpages";
    gwppassessments?: boolean;
    gwppprojects: string | string[];
    gwpplimit?: limit;
    gwppcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Protectedtitles}
 */
export interface ApiActionWatchGeneratorProtectedTitlesParams extends ApiActionWatchParams {
    generator?: "protectedtitles";
    gptnamespace?: namespace | namespace[];
    gptlevel?: OneOrMore<"autoconfirmed" | "extendedconfirmed" | "sysop" | "templateeditor">;
    gptlimit?: limit;
    gptdir?: "newer" | "older";
    gptstart?: timestamp;
    gptend?: timestamp;
    gptprop?: OneOrMore<
        "comment" | "expiry" | "level" | "parsedcomment" | "timestamp" | "user" | "userid"
    >;
    gptcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Querypage}
 */
export interface ApiActionWatchGeneratorQueryPageParams extends ApiActionWatchParams {
    generator?: "querypage";
    gqppage:
        | "Ancientpages"
        | "BrokenRedirects"
        | "Deadendpages"
        | "DisambiguationPageLinks"
        | "DisambiguationPages"
        | "DoubleRedirects"
        | "Fewestrevisions"
        | "GadgetUsage"
        | "GloballyWantedFiles"
        | "ListDuplicatedFiles"
        | "Listredirects"
        | "Lonelypages"
        | "Longpages"
        | "MediaStatistics"
        | "MostGloballyLinkedFiles"
        | "Mostcategories"
        | "Mostimages"
        | "Mostinterwikis"
        | "Mostlinked"
        | "Mostlinkedcategories"
        | "Mostlinkedtemplates"
        | "Mostrevisions"
        | "OrphanedTimedText"
        | "Shortpages"
        | "Uncategorizedcategories"
        | "Uncategorizedimages"
        | "Uncategorizedpages"
        | "Uncategorizedtemplates"
        | "UnconnectedPages"
        | "Unusedcategories"
        | "Unusedimages"
        | "Unusedtemplates"
        | "Unwatchedpages"
        | "Wantedcategories"
        | "Wantedfiles"
        | "Wantedpages"
        | "Wantedtemplates"
        | "Withoutinterwiki";
    gqpoffset?: number;
    gqplimit?: limit;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Random}
 */
export interface ApiActionWatchGeneratorRandomParams extends ApiActionWatchParams {
    generator?: "random";
    grnnamespace?: namespace | namespace[];
    grnfilterredir?: "all" | "nonredirects" | "redirects";
    /**
     * @deprecated
     */
    grnredirect?: boolean;
    grnlimit?: limit;
    grncontinue?: string;
}

/**
 * @private
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API}
 */
export interface ApiActionWatchGeneratorReadingListEntriesParams extends ApiActionWatchParams {
    generator?: "readinglistentries";
    grlelists?: number | number[];
    grlechangedsince?: timestamp;
    grlesort?: "name" | "updated";
    grledir?: "ascending" | "descending";
    grlelimit?: limit;
    grlecontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Recentchanges}
 */
export interface ApiActionWatchGeneratorRecentChangesParams extends ApiActionWatchParams {
    generator?: "recentchanges";
    grcstart?: timestamp;
    grcend?: timestamp;
    grcdir?: "newer" | "older";
    grcnamespace?: namespace | namespace[];
    grcuser?: string;
    grcexcludeuser?: string;
    grctag?: string;
    grcprop?: OneOrMore<
        | "comment"
        | "flags"
        | "ids"
        | "loginfo"
        | "oresscores"
        | "parsedcomment"
        | "patrolled"
        | "redirect"
        | "sha1"
        | "sizes"
        | "tags"
        | "timestamp"
        | "title"
        | "user"
        | "userid"
    >;
    grcshow?: OneOrMore<
        | "!anon"
        | "!autopatrolled"
        | "!bot"
        | "!minor"
        | "!oresreview"
        | "!patrolled"
        | "!redirect"
        | "anon"
        | "autopatrolled"
        | "bot"
        | "minor"
        | "oresreview"
        | "patrolled"
        | "redirect"
        | "unpatrolled"
    >;
    grclimit?: limit;
    grctype?: OneOrMore<"categorize" | "edit" | "external" | "log" | "new">;
    grctoponly?: boolean;
    grctitle?: string;
    grccontinue?: string;
    grcgeneraterevisions?: boolean;
    grcslot?: "main";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Redirects}
 */
export interface ApiActionWatchGeneratorQueryRedirectsParams extends ApiActionWatchParams {
    generator?: "redirects";
    grdprop?: OneOrMore<"fragment" | "pageid" | "title">;
    grdnamespace?: namespace | namespace[];
    grdshow?: OneOrMore<"!fragment" | "fragment">;
    grdlimit?: limit;
    grdcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Revisions}
 */
export interface ApiActionWatchGeneratorRevisionsParams extends ApiActionWatchParams {
    generator?: "revisions";
    grvprop?: OneOrMore<
        | "comment"
        | "content"
        | "contentmodel"
        | "flagged"
        | "flags"
        | "ids"
        | "oresscores"
        | "parsedcomment"
        | "roles"
        | "sha1"
        | "size"
        | "slotsha1"
        | "slotsize"
        | "tags"
        | "timestamp"
        | "user"
        | "userid"
        | "parsetree"
    >;
    grvslots?: string | string[];
    [k: `grvcontentformat-${string}`]:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    grvlimit?: limit;
    /**
     * @deprecated
     */
    grvexpandtemplates?: boolean;
    /**
     * @deprecated
     */
    grvgeneratexml?: boolean;
    /**
     * @deprecated
     */
    grvparse?: boolean;
    grvsection?: string;
    /**
     * @deprecated
     */
    grvdiffto?: string;
    /**
     * @deprecated
     */
    grvdifftotext?: string;
    /**
     * @deprecated
     */
    grvdifftotextpst?: boolean;
    /**
     * @deprecated
     */
    grvcontentformat?:
        | "application/json"
        | "application/octet-stream"
        | "application/unknown"
        | "application/x-binary"
        | "text/css"
        | "text/javascript"
        | "text/plain"
        | "text/unknown"
        | "text/x-wiki"
        | "unknown/unknown";
    grvstartid?: number;
    grvendid?: number;
    grvstart?: timestamp;
    grvend?: timestamp;
    grvdir?: "newer" | "older";
    grvuser?: string;
    grvexcludeuser?: string;
    grvtag?: string;
    grvcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Search}
 */
export interface ApiActionWatchGeneratorSearchParams extends ApiActionWatchParams {
    generator?: "search";
    gsrsearch: string;
    gsrnamespace?: namespace | namespace[];
    gsrlimit?: limit;
    gsroffset?: number;
    gsrqiprofile?:
        | "classic"
        | "classic_noboostlinks"
        | "empty"
        | "engine_autoselect"
        | "growth_underlinked"
        | "mlr-1024rs"
        | "popular_inclinks"
        | "popular_inclinks_pv"
        | "wsum_inclinks"
        | "wsum_inclinks_pv";
    gsrwhat?: "nearmatch" | "text" | "title";
    gsrinfo?: OneOrMore<"rewrittenquery" | "suggestion" | "totalhits">;
    gsrprop?: OneOrMore<
        | "categorysnippet"
        | "extensiondata"
        | "isfilematch"
        | "redirectsnippet"
        | "redirecttitle"
        | "sectionsnippet"
        | "sectiontitle"
        | "size"
        | "snippet"
        | "timestamp"
        | "titlesnippet"
        | "wordcount"
        | "hasrelated"
        | "score"
    >;
    gsrinterwiki?: boolean;
    gsrenablerewrites?: boolean;
    gsrsort?:
        | "create_timestamp_asc"
        | "create_timestamp_desc"
        | "incoming_links_asc"
        | "incoming_links_desc"
        | "just_match"
        | "last_edit_asc"
        | "last_edit_desc"
        | "none"
        | "random"
        | "relevance"
        | "user_random";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Templates}
 */
export interface ApiActionWatchGeneratorQueryTemplatesParams extends ApiActionWatchParams {
    generator?: "templates";
    gtlnamespace?: namespace | namespace[];
    gtllimit?: limit;
    gtlcontinue?: string;
    gtltemplates?: string | string[];
    gtldir?: "ascending" | "descending";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Transcludedin}
 */
export interface ApiActionWatchGeneratorQueryTranscludedInParams extends ApiActionWatchParams {
    generator?: "transcludedin";
    gtiprop?: OneOrMore<"pageid" | "redirect" | "title">;
    gtinamespace?: namespace | namespace[];
    gtishow?: OneOrMore<"!redirect" | "redirect">;
    gtilimit?: limit;
    gticontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlist}
 */
export interface ApiActionWatchGeneratorWatchlistParams extends ApiActionWatchParams {
    generator?: "watchlist";
    gwlallrev?: boolean;
    gwlstart?: timestamp;
    gwlend?: timestamp;
    gwlnamespace?: namespace | namespace[];
    gwluser?: string;
    gwlexcludeuser?: string;
    gwldir?: "newer" | "older";
    gwllimit?: limit;
    gwlprop?: OneOrMore<
        | "comment"
        | "expiry"
        | "flags"
        | "ids"
        | "loginfo"
        | "notificationtimestamp"
        | "oresscores"
        | "parsedcomment"
        | "patrol"
        | "sizes"
        | "tags"
        | "timestamp"
        | "title"
        | "user"
        | "userid"
    >;
    gwlshow?: OneOrMore<
        | "!anon"
        | "!autopatrolled"
        | "!bot"
        | "!minor"
        | "!oresreview"
        | "!patrolled"
        | "!unread"
        | "anon"
        | "autopatrolled"
        | "bot"
        | "minor"
        | "oresreview"
        | "patrolled"
        | "unread"
    >;
    gwltype?: OneOrMore<"categorize" | "edit" | "external" | "log" | "new">;
    gwlowner?: string;
    gwltoken?: string;
    gwlcontinue?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlistraw}
 */
export interface ApiActionWatchGeneratorWatchlistRawParams extends ApiActionWatchParams {
    generator?: "watchlistraw";
    gwrcontinue?: string;
    gwrnamespace?: namespace | namespace[];
    gwrlimit?: limit;
    gwrprop?: OneOrMore<"changed">;
    gwrshow?: OneOrMore<"!changed" | "changed">;
    gwrowner?: string;
    gwrtoken?: string;
    gwrdir?: "ascending" | "descending";
    gwrfromtitle?: string;
    gwrtotitle?: string;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/Wikibase/API}
 */
export interface ApiActionWatchGeneratorWblistentityusageParams extends ApiActionWatchParams {
    generator?: "wblistentityusage";
    gwbleuprop?: OneOrMore<"url">;
    gwbleuaspect?: OneOrMore<"C" | "D" | "L" | "O" | "S" | "T" | "X">;
    gwbleuentities: string | string[];
    gwbleulimit?: limit;
    gwbleucontinue?: string;
}

export interface ApiActionWebappManifestParams extends ApiParams {
    action?: "webapp-manifest";
}

export interface ApiActionWebAuthnParams extends ApiParams {
    action?: "webauthn";
    func: "getAuthInfo" | "getRegisterInfo";
}

export interface ApiActionWikiLoveParams extends ApiParams {
    action?: "wikilove";
    title: string;
    text: string;
    message?: string;
    token?: string;
    subject: string;
    type?: string;
    email?: string;
    tags?: string | string[];
}

/**
 * @private
 */
export interface ApiActionWikimediaEventsBlockedEditParams extends ApiParams {
    action?: "wikimediaeventsblockededit";
    page: string;
    interface: "discussiontools" | "mobilefrontend" | "other" | "visualeditor" | "wikieditor";
    platform: "desktop" | "mobile";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Data_formats}
 */
export interface ApiFormatJsonParams extends ApiParams {
    format?: "json";
    callback?: string;
    utf8?: boolean;
    ascii?: boolean;
    formatversion?: "1" | "2" | "latest";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Data_formats}
 */
export interface ApiFormatJsonFMParams extends ApiParams {
    format?: "jsonfm";
    wrappedhtml?: boolean;
    callback?: string;
    utf8?: boolean;
    ascii?: boolean;
    formatversion?: "1" | "2" | "latest";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Data_formats}
 */
export interface ApiFormatNoneParams extends ApiParams {
    format?: "none";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Data_formats}
 */
export interface ApiFormatPhpParams extends ApiParams {
    format?: "php";
    formatversion?: "1" | "2" | "latest";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Data_formats}
 */
export interface ApiFormatPhpFMParams extends ApiParams {
    format?: "phpfm";
    wrappedhtml?: boolean;
    formatversion?: "1" | "2" | "latest";
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Data_formats}
 */
export interface ApiFormatRawFMParams extends ApiParams {
    format?: "rawfm";
    wrappedhtml?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Data_formats}
 */
export interface ApiFormatXmlParams extends ApiParams {
    format?: "xml";
    xslt?: string;
    includexmlnamespace?: boolean;
}

/**
 * @see {@link https://www.mediawiki.org/wiki/Special:MyLanguage/API:Data_formats}
 */
export interface ApiFormatXmlFMParams extends ApiParams {
    format?: "xmlfm";
    wrappedhtml?: boolean;
    xslt?: string;
    includexmlnamespace?: boolean;
}

export {};
