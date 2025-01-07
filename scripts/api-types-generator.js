// This script generates the content of `api_params/index.d.ts`, by extracting online MediaWiki API module information.
// Go to a MediaWiki site, paste this into the browser console, and move the generated TS declaration files to api_params.
//
// This process is done in 5 steps:
//
//                             main
//                             └─ action=
//   /w1/api.php   ═══[ML]══>     ├─ query   ════╗          main                      Params
//                                └─ block       ║          └─ action=                └─ Action
//                                               ╠═[MM]══>     ├─ query   ═══[MP]══>     ├─ Query
//                             main              ║             ├─ block                  ├─ Block
//                             └─ action=        ║             └─ wbsearch               └─ WBSearch
//   /w2/api.php   ═══[ML]══>     ├─ query     ══╝
//                                └─ wbsearch
//
// [ML] ModuleLoader: load module data from all APIs.
// [MM] ModuleMerger: merge module data into a single hierarchy.
// [MP] ModuleParser: process module data to deduce TS-friendly parameter types and module names.
//
//                                namespace Params
//                                └─ namespace Action
//   Params                ╔═══>     ├─ interface Query   ════[MG]═══>   index.d.ts
//   └─ Action             ║         └─ interface Block
//      ├─ Query   ═══[MF]═╣
//      ├─ Block           ║      namespace Params
//      └─ WBSearch        ╚══>   └─ namespace Action       ═══[MG]══>   Wikibase.d.ts
//                                   └─ interface WBSearch
//
// [MF] ModuleFormatter: format module data into TS type declarations.
// [MG] ModuleGenerator: generate TS files from type declarations.

/** @type {import("./api-types-generator-types")} */

/**
 * Entry points of MediaWiki sites from which API types are loaded.
 * If there is an ambiguity, the first ones are given priority.
 *
 * @type {Record<string, string>}
 */
const SOURCES = {
    "mediawiki": "https://www.mediawiki.org/w/api.php",
    "wikipedia-en": "https://en.wikipedia.org/w/api.php",
    "wikidata": "https://www.wikidata.org/w/api.php",
    "wikifunctions": "https://www.wikifunctions.org/w/api.php",

    "wikibooks-en": "https://en.wikibooks.org/w/api.php",
    "wikimedia-api": "https://api.wikimedia.org/w/api.php",
    "wikimedia-commons": "https://commons.wikimedia.org/w/api.php",
    "wikimedia-incubator": "https://incubator.wikimedia.org/w/api.php",
    "wikimedia-meta": "https://meta.wikimedia.org/w/api.php",
    "wikinews-en": "https://en.wikinews.org/w/api.php",
    "wikiquote-en": "https://en.wikiquote.org/w/api.php",
    "wikisource-en": "https://en.wikisource.org/w/api.php",
    "wikiversity-en": "https://en.wikiversity.org/w/api.php",
    "wikivoyage-en": "https://en.wikivoyage.org/w/api.php",
    "wiktionary-en": "https://en.wiktionary.org/w/api.php",

    "gracesguide": "https://www.gracesguide.co.uk/api.php",

    "wikidata-test": "https://test.wikidata.org/w/api.php",
    "wikimedia-commons-test": "https://test-commons.wikimedia.org/w/api.php",
    "wikipedia-test": "https://test.wikipedia.org/w/api.php",
    "wikipedia-test2": "https://test2.wikipedia.org/w/api.php",
};

/**
 * Patterns used to properly capitalize TS type names.
 * By default, PHP namespaces and class name are used to find proper capitalizations, this can be used to
 * override bad deductions or when there is not enough information for the script to capitalize anything.
 *
 * @type {Record<string, string>}
 */
const NAME_PATH_MAP = {
    account: "Account",
    all: "All",
    call: "Call",
    check: "Check",
    embedded: "Embedded",
    file: "File",
    help: "Help",
    homepage: "HomePage",
    image: "Image",
    lang: "Lang",
    links: "Links",
    objects: "Objects",
    panel: "Panel",
    question: "Question",
    section: "Section",
    transcluded: "Transcluded",
    translation: "Translation",
    url: "Url",
    usage: "Usage",
    usages: "Usages",
    value: "Value",

    cx: "CX",
    fm: "FM",
    sx: "SX",
    wb: "WB",
    wbl: "WBL",
    wbs: "WBS",
};

/**
 * Mapping of API parameter types to their associated TS type.
 *
 * @type {Record<string & RawModule.Parameter.Type, Parameter.Type>}
 */
const PARAMETER_TYPE_UNDERLYING = {
    boolean: { base: "boolean" },
    expiry: { base: "string" },
    integer: { base: "number" },
    limit: { base: "Limit" },
    namespace: { base: "number" },
    password: { base: "string" },
    raw: { base: "string" },
    string: { base: "string" },
    text: { base: "string" },
    timestamp: { base: "string" },
    title: { base: "string" },
    upload: { base: "File" },
    user: { base: "string" },
};

/**
 * Type aliases to declare (in namespace mw.Api) and used to simplify API parameter types.
 *
 * @type {Record<string, Parameter.Type>}
 */
const TYPE_ALIASES = {
    Limit: { base: "number", lits: new Set(["max"]) },
    Assert: { lits: new Set(["anon", "bot", "user"]) },
    TokenType: {
        lits: new Set([
            "createaccount",
            "csrf",
            "deleteglobalaccount",
            "login",
            "patrol",
            "rollback",
            "setglobalaccountstatus",
            "userrights",
            "watch",
        ]),
    },
    LegacyTokenType: {
        lits: new Set([
            "block",
            "delete",
            "edit",
            "email",
            "import",
            "move",
            "options",
            "protect",
            "unblock",
        ]),
    },
};

/**
 * Interface names generated before PR #41.
 * Used to generate deprecated type aliases for compatibility.
 *
 * @type {Record<string, string[]>}
 */
const INTERFACE_COMPATIBILITY = {
    AbuseFilterApiAbuseLogPrivateDetailsParams: ["abuselogprivatedetails"],
    AbuseFilterApiCheckMatchParams: ["abusefiltercheckmatch"],
    AbuseFilterApiCheckSyntaxParams: ["abusefilterchecksyntax"],
    AbuseFilterApiEvalExpressionParams: ["abusefilterevalexpression"],
    AbuseFilterApiQueryAbuseFiltersParams: ["query+abusefilters"],
    AbuseFilterApiQueryAbuseLogParams: ["query+abuselog"],
    AbuseFilterApiUnblockAutopromoteParams: ["abusefilterunblockautopromote"],
    AntiSpoofApiAntiSpoofParams: ["antispoof"],
    ApiAcquireTempUserNameParams: ["acquiretempusername"],
    ApiAMCreateAccountParams: ["createaccount"],
    ApiBlockParams: ["block"],
    ApiCentralNoticeCdnCacheUpdateBannerParams: ["centralnoticecdncacheupdatebanner"],
    ApiCentralNoticeChoiceDataParams: ["centralnoticechoicedata"],
    ApiCentralNoticeLogsParams: ["query+centralnoticelogs"],
    ApiCentralNoticeQueryActiveCampaignsParams: ["query+centralnoticeactivecampaigns"],
    ApiCentralNoticeQueryCampaignParams: ["centralnoticequerycampaign"],
    ApiChangeAuthenticationDataParams: ["changeauthenticationdata"],
    ApiChangeContentModelParams: ["changecontentmodel"],
    ApiCheckTokenParams: ["checktoken"],
    ApiClearHasMsgParams: ["clearhasmsg"],
    ApiClientLoginParams: ["clientlogin"],
    ApiComparePagesParams: ["compare"],
    ApiCSPReportParams: ["cspreport"],
    ApiDeleteParams: ["delete"],
    ApiDisabledParams: ["imagerotate"],
    ApiEditPageParams: ["edit"],
    ApiEmailUserParams: ["emailuser"],
    ApiExpandTemplatesParams: ["expandtemplates"],
    ApiFeatureUsageApiQueryFeatureUsageParams: ["query+featureusage"],
    ApiFeedContributionsParams: ["feedcontributions"],
    ApiFeedRecentChangesParams: ["feedrecentchanges"],
    ApiFeedWatchlistParams: ["feedwatchlist"],
    ApiFileRevertParams: ["filerevert"],
    ApiFlagConfigParams: ["flagconfig"],
    ApiFormatJsonParams: ["json", "jsonfm", "rawfm"],
    ApiFormatNoneParams: ["none"],
    ApiFormatPhpParams: ["php", "phpfm"],
    ApiFormatXmlParams: ["xml", "xmlfm"],
    ApiHelpParams: ["help"],
    ApiImportParams: ["import"],
    ApiLinkAccountParams: ["linkaccount"],
    ApiLoginParams: ["login"],
    ApiLogoutParams: ["logout"],
    ApiManageTagsParams: ["managetags"],
    ApiMergeHistoryParams: ["mergehistory"],
    ApiMoveParams: ["move"],
    ApiOpenSearchParams: ["opensearch"],
    ApiOptionsParams: ["options"],
    ApiParamInfoParams: ["paraminfo"],
    ApiParseParams: ["parse"],
    ApiPatrolParams: ["patrol"],
    ApiProtectParams: ["protect"],
    ApiPurgeParams: ["purge"],
    ApiQueryAllCategoriesParams: ["query+allcategories"],
    ApiQueryAllDeletedRevisionsParams: ["query+alldeletedrevisions"],
    ApiQueryAllImagesParams: ["query+allimages"],
    ApiQueryAllLinksParams: [
        "query+allfileusages",
        "query+alllinks",
        "query+allredirects",
        "query+alltransclusions",
    ],
    ApiQueryAllMessagesParams: ["query+allmessages"],
    ApiQueryAllPagesParams: ["query+allpages"],
    ApiQueryAllRevisionsParams: ["query+allrevisions"],
    ApiQueryAllUsersParams: ["query+allusers"],
    ApiQueryAuthManagerInfoParams: ["query+authmanagerinfo"],
    ApiQueryBacklinksParams: ["query+backlinks", "query+embeddedin", "query+imageusage"],
    ApiQueryBacklinkspropParams: [
        "query+fileusage",
        "query+linkshere",
        "query+redirects",
        "query+transcludedin",
    ],
    ApiQueryBlocksParams: ["query+blocks"],
    ApiQueryCategoriesParams: ["query+categories"],
    ApiQueryCategoryInfoParams: ["query+categoryinfo"],
    ApiQueryCategoryMembersParams: ["query+categorymembers"],
    ApiQueryContributorsParams: ["query+contributors"],
    ApiQueryDeletedRevisionsParams: ["query+deletedrevisions"],
    ApiQueryDeletedrevsParams: ["query+deletedrevs"],
    ApiQueryDuplicateFilesParams: ["query+duplicatefiles"],
    ApiQueryExternalLinksParams: ["query+extlinks"],
    ApiQueryExtLinksUsageParams: ["query+exturlusage"],
    ApiQueryFilearchiveParams: ["query+filearchive"],
    ApiQueryFileRepoInfoParams: ["query+filerepoinfo"],
    ApiQueryFlaggedParams: ["query+flagged"],
    ApiQueryImageInfoParams: ["query+imageinfo"],
    ApiQueryImagesParams: ["query+images"],
    ApiQueryInfoParams: ["query+info"],
    ApiQueryIWBacklinksParams: ["query+iwbacklinks"],
    ApiQueryIWLinksParams: ["query+iwlinks"],
    ApiQueryLangBacklinksParams: ["query+langbacklinks"],
    ApiQueryLangLinksParams: ["query+langlinks"],
    ApiQueryLanguageinfoParams: ["query+languageinfo"],
    ApiQueryLinksParams: ["query+links", "query+templates"],
    ApiQueryLogEventsParams: ["query+logevents"],
    ApiQueryMyStashedFilesParams: ["query+mystashedfiles"],
    ApiQueryOldreviewedpagesParams: ["query+oldreviewedpages"],
    ApiQueryPagePropNamesParams: ["query+pagepropnames"],
    ApiQueryPagePropsParams: ["query+pageprops"],
    ApiQueryPagesWithPropParams: ["query+pageswithprop"],
    ApiQueryParams: ["query"],
    ApiQueryPrefixSearchParams: ["query+prefixsearch"],
    ApiQueryProtectedTitlesParams: ["query+protectedtitles"],
    ApiQueryQueryPageParams: ["query+querypage"],
    ApiQueryRandomParams: ["query+random"],
    ApiQueryRecentChangesParams: ["query+recentchanges"],
    ApiQueryRevisionsParams: ["query+revisions"],
    ApiQuerySearchParams: ["query+search"],
    ApiQuerySiteinfoParams: ["query+siteinfo"],
    ApiQueryStashImageInfoParams: ["query+stashimageinfo"],
    ApiQueryTagsParams: ["query+tags"],
    ApiQueryTokensParams: ["query+tokens"],
    ApiQueryUserContribsParams: ["query+usercontribs"],
    ApiQueryUserInfoParams: ["query+userinfo"],
    ApiQueryUsersParams: ["query+users"],
    ApiQueryWatchlistParams: ["query+watchlist"],
    ApiQueryWatchlistRawParams: ["query+watchlistraw"],
    ApiRemoveAuthenticationDataParams: ["removeauthenticationdata", "unlinkaccount"],
    ApiResetPasswordParams: ["resetpassword"],
    ApiReviewParams: ["review"],
    ApiRevisionDeleteParams: ["revisiondelete"],
    ApiRollbackParams: ["rollback"],
    ApiRsdParams: ["rsd"],
    ApiSetNotificationTimestampParams: ["setnotificationtimestamp"],
    ApiSetPageLanguageParams: ["setpagelanguage"],
    ApiStabilizeProtectParams: ["stabilize"],
    ApiStashEditParams: ["stashedit"],
    ApiTagParams: ["tag"],
    ApiUnblockParams: ["unblock"],
    ApiUndeleteParams: ["undelete"],
    ApiUploadParams: ["upload"],
    ApiUserrightsParams: ["userrights"],
    ApiValidatePasswordParams: ["validatepassword"],
    ApiWatchParams: ["watch"],
    BetaFeaturesApiQueryBetaFeaturesParams: ["query+betafeatures"],
    BounceHandlerApiBounceHandlerParams: ["bouncehandler"],
    CategoryTreeApiCategoryTreeParams: ["categorytree"],
    CentralAuthApiCentralAuthTokenParams: ["centralauthtoken"],
    CentralAuthApiCreateLocalAccountParams: ["createlocalaccount"],
    CentralAuthApiDeleteGlobalAccountParams: ["deleteglobalaccount"],
    CentralAuthApiGlobalUserRightsParams: ["globaluserrights"],
    CentralAuthApiQueryGlobalAllUsersParams: ["query+globalallusers"],
    CentralAuthApiQueryGlobalGroupsParams: ["query+globalgroups"],
    CentralAuthApiQueryGlobalRenameStatusParams: ["query+globalrenamestatus"],
    CentralAuthApiQueryGlobalUserInfoParams: ["query+globaluserinfo"],
    CentralAuthApiQueryWikiSetsParams: ["query+wikisets"],
    CentralAuthApiSetGlobalAccountStatusParams: ["setglobalaccountstatus"],
    CirrusSearchApiConfigDumpParams: ["cirrus-config-dump"],
    CirrusSearchApiMappingDumpParams: ["cirrus-mapping-dump"],
    CirrusSearchApiProfilesDumpParams: ["cirrus-profiles-dump"],
    CirrusSearchApiQueryBuildDocumentParams: ["query+cirrusbuilddoc"],
    CirrusSearchApiQueryCirrusDocParams: ["query+cirrusdoc"],
    CirrusSearchApiQueryCompSuggestBuildDocParams: ["query+cirruscompsuggestbuilddoc"],
    CirrusSearchApiSettingsDumpParams: ["cirrus-settings-dump"],
    CollectionApiCollectionParams: ["collection"],
    ConfirmEditFancyCaptchaApiFancyCaptchaReloadParams: ["fancycaptchareload"],
    ContentTranslationActionApiContentTranslationDeleteParams: ["cxdelete"],
    ContentTranslationActionApiContentTranslationPublishParams: ["cxpublish"],
    ContentTranslationActionApiContentTranslationSaveParams: ["cxsave"],
    ContentTranslationActionApiContentTranslationSuggestionListParams: ["cxsuggestionlist"],
    ContentTranslationActionApiContentTranslationTokenParams: ["cxtoken"],
    ContentTranslationActionApiQueryContentTranslationCorporaParams: [
        "query+contenttranslationcorpora",
    ],
    ContentTranslationActionApiQueryContentTranslationLanguageTrendParams: [
        "query+contenttranslationlangtrend",
    ],
    ContentTranslationActionApiQueryContentTranslationParams: ["query+contenttranslation"],
    ContentTranslationActionApiQueryContentTranslationStatsParams: [
        "query+contenttranslationstats",
    ],
    ContentTranslationActionApiQueryContentTranslationSuggestionsParams: [
        "query+contenttranslationsuggestions",
    ],
    ContentTranslationActionApiQueryDeletedTranslationsParams: ["query+cxdeletedtranslations"],
    ContentTranslationActionApiQueryLangLinksCountParams: ["query+langlinkscount"],
    ContentTranslationActionApiQueryPublishedTranslationsParams: ["query+cxpublishedtranslations"],
    ContentTranslationActionApiQueryTranslatorStatsParams: ["query+cxtranslatorstats"],
    ContentTranslationActionApiSectionTranslationDeleteParams: ["sxdelete"],
    ContentTranslationActionApiSectionTranslationPublishParams: ["cxpublishsection"],
    ContentTranslationActionApiSectionTranslationSaveParams: ["sxsave"],
    DiscussionToolsApiDiscussionToolsCompareParams: ["discussiontoolscompare"],
    DiscussionToolsApiDiscussionToolsEditParams: ["discussiontoolsedit"],
    DiscussionToolsApiDiscussionToolsFindCommentParams: ["discussiontoolsfindcomment"],
    DiscussionToolsApiDiscussionToolsGetSubscriptionsParams: ["discussiontoolsgetsubscriptions"],
    DiscussionToolsApiDiscussionToolsPageInfoParams: ["discussiontoolspageinfo"],
    DiscussionToolsApiDiscussionToolsPreviewParams: ["discussiontoolspreview"],
    DiscussionToolsApiDiscussionToolsSubscribeParams: ["discussiontoolssubscribe"],
    EventStreamConfigApiStreamConfigsParams: ["streamconfigs"],
    FeaturedFeedsApiFeaturedFeedsParams: ["featuredfeed"],
    GadgetsApiQueryGadgetCategoriesParams: ["query+gadgetcategories"],
    GadgetsApiQueryGadgetsParams: ["query+gadgets"],
    GeoDataApiQueryCoordinatesParams: ["query+coordinates"],
    GeoDataApiQueryGeoSearchElasticParams: ["query+geosearch"],
    GlobalBlockingApiGlobalBlockParams: ["globalblock"],
    GlobalBlockingApiQueryGlobalBlocksParams: ["query+globalblocks"],
    GlobalPreferencesApiGlobalPreferenceOverridesParams: ["globalpreferenceoverrides"],
    GlobalPreferencesApiGlobalPreferencesParams: ["globalpreferences"],
    GlobalPreferencesApiQueryGlobalPreferencesParams: ["query+globalpreferences"],
    GlobalUsageApiQueryGlobalUsageParams: ["query+globalusage"],
    GrowthExperimentsApiHelpPanelPostQuestionParams: ["helppanelquestionposter"],
    GrowthExperimentsApiInvalidateImageRecommendationParams: [
        "growthinvalidateimagerecommendation",
    ],
    GrowthExperimentsApiInvalidatePersonalizedPraiseSuggestionParams: [
        "growthinvalidatepersonalizedpraisesuggestion",
    ],
    GrowthExperimentsApiManageMentorListParams: ["growthmanagementorlist"],
    GrowthExperimentsApiMentorDashboardUpdateDataParams: ["growthmentordashboardupdatedata"],
    GrowthExperimentsApiQueryGrowthTasksParams: ["query+growthtasks"],
    GrowthExperimentsApiQueryImageSuggestionDataParams: ["query+growthimagesuggestiondata"],
    GrowthExperimentsApiQueryMenteeStatusParams: ["query+growthmenteestatus"],
    GrowthExperimentsApiQueryMentorListParams: ["query+growthmentorlist"],
    GrowthExperimentsApiQueryMentorMenteeParams: ["query+growthmentormentee"],
    GrowthExperimentsApiQueryMentorStatusParams: ["query+growthmentorstatus"],
    GrowthExperimentsApiQueryNextSuggestedTaskTypeParams: ["query+growthnextsuggestedtasktype"],
    GrowthExperimentsApiQueryStarredMenteesParams: ["query+growthstarredmentees"],
    GrowthExperimentsApiQuestionStoreParams: ["homepagequestionstore"],
    GrowthExperimentsApiSetMenteeStatusParams: ["growthsetmenteestatus"],
    GrowthExperimentsApiSetMentorParams: ["growthsetmentor"],
    GrowthExperimentsApiStarMenteeParams: ["growthstarmentee"],
    JsonConfigJCApiParams: ["jsonconfig"],
    JsonConfigJCDataApiParams: ["jsondata"],
    KartographerApiQueryMapDataParams: ["query+mapdata"],
    KartographerApiSanitizeMapDataParams: ["sanitize-mapdata"],
    MediaWikiBabelApiQueryBabelParams: ["query+babel"],
    MediaWikiCheckUserApiQueryCheckUserLogParams: ["query+checkuserlog"],
    MediaWikiCheckUserApiQueryCheckUserParams: ["query+checkuser"],
    MediaWikiLinterApiQueryLintErrorsParams: ["query+linterrors"],
    MediaWikiLinterApiQueryLinterStatsParams: ["query+linterstats"],
    MediaWikiMassMessageApiEditMassMessageListParams: ["editmassmessagelist"],
    MediaWikiMassMessageApiMassMessageParams: ["massmessage"],
    MediaWikiMassMessageApiQueryMMContentParams: ["query+mmcontent"],
    MediaWikiTimedMediaHandlerApiQueryVideoInfoParams: ["query+videoinfo"],
    MediaWikiTimedMediaHandlerApiTimedTextParams: ["timedtext"],
    MediaWikiTimedMediaHandlerApiTranscodeResetParams: ["transcodereset"],
    MediaWikiTimedMediaHandlerApiTranscodeStatusParams: ["query+transcodestatus"],
    MobileFrontendApiWebappManifestParams: ["webapp-manifest"],
    NotificationsApiEchoMarkReadParams: ["echomarkread"],
    NotificationsApiEchoMarkSeenParams: ["echomarkseen"],
    NotificationsApiEchoMuteParams: ["echomute"],
    NotificationsApiEchoNotificationsParams: ["query+notifications"],
    NotificationsApiEchoUnreadNotificationPagesParams: ["query+unreadnotificationpages"],
    NotificationsPushApiEchoPushSubscriptionsParams: ["echopushsubscriptions"],
    OATHAuthApiModuleApiOATHValidateParams: ["oathvalidate"],
    OATHAuthApiModuleApiQueryOATHParams: ["query+oath"],
    ORESHooksApiQueryORESParams: ["query+ores"],
    PageAssessmentsApiQueryPageAssessmentsParams: ["query+pageassessments"],
    PageAssessmentsApiQueryProjectPagesParams: ["query+projectpages"],
    PageAssessmentsApiQueryProjectsParams: ["query+projects"],
    PageImagesApiQueryPageImagesParams: ["query+pageimages"],
    PageTriageApiIsReviewedParams: ["query+isreviewed"],
    PageTriageApiPageTriageActionParams: ["pagetriageaction"],
    PageTriageApiPageTriageListParams: ["pagetriagelist"],
    PageTriageApiPageTriageStatsParams: ["pagetriagestats"],
    PageTriageApiPageTriageTagCopyvioParams: ["pagetriagetagcopyvio"],
    PageTriageApiPageTriageTaggingParams: ["pagetriagetagging"],
    PageViewInfoApiQueryMostViewedParams: ["query+mostviewed"],
    PageViewInfoApiQueryPageViewsParams: ["query+pageviews"],
    PageViewInfoApiQuerySiteViewsParams: ["query+siteviews"],
    ParserMigrationApiParserMigrationParams: ["parser-migration"],
    ReadingListsApiQueryReadingListEntriesParams: ["query+readinglistentries"],
    ReadingListsApiQueryReadingListsParams: ["query+readinglists"],
    ReadingListsApiReadingListsParams: ["readinglists"],
    ScribuntoApiScribuntoConsoleParams: ["scribunto-console"],
    SecurePollApiSecurePollAuthParams: ["securepollauth"],
    SecurePollApiStrikeVoteParams: ["strikevote"],
    SiteMatrixApiSiteMatrixParams: ["sitematrix"],
    SpamBlacklistApiSpamBlacklistParams: ["spamblacklist"],
    TemplateDataApiTemplateDataParams: ["templatedata"],
    TextExtractsApiQueryExtractsParams: ["query+extracts"],
    ThanksApiCoreThankParams: ["thank"],
    TitleBlacklistApiTitleBlacklistParams: ["titleblacklist"],
    TorBlockApiTorBlockParams: ["torblock"],
    UniversalLanguageSelectorApiLanguageSearchParams: ["languagesearch"],
    UniversalLanguageSelectorApiULSLocalizationParams: ["ulslocalization"],
    UniversalLanguageSelectorApiULSSetLanguageParams: ["ulssetlang"],
    UrlShortenerApiShortenUrlParams: ["shortenurl"],
    VisualEditorApiVisualEditorEditParams: ["visualeditoredit"],
    VisualEditorApiVisualEditorParams: ["visualeditor"],
    WebAuthnApiWebAuthnParams: ["webauthn"],
    WikibaseClientApiClientInfoParams: ["query+wikibase"],
    WikibaseClientApiDescriptionParams: ["query+description"],
    WikibaseClientApiListEntityUsageParams: ["query+wblistentityusage"],
    WikibaseClientApiPageTermsParams: ["query+pageterms"],
    WikibaseClientApiPropsEntityUsageParams: ["query+wbentityusage"],
    WikiLoveApiWikiLoveParams: ["wikilove"],
    WikimediaEventsApiWikimediaEventsBlockedEditParams: ["wikimediaeventsblockededit"],
};

// Where to log process information and errors.
// Final output is unaffected.
const log = mw.log;
const logError = mw.log.error;

/**
 * Check whether all elements from the 2nd set are in the 1st one.
 *
 * @template T
 * @param {Set<T> | undefined} s1
 * @param {Set<T> | undefined} s2
 */
const isSubset = (s1, s2) =>
    s1 === undefined || s1.size === 0 || (s2 !== undefined && s1.isSubsetOf(s2));

/**
 * Uppercase the 1st letter of a string.
 *
 * @param {string} s String.
 */
const firstToUppercase = (s) => s.charAt(0).toUpperCase() + s.slice(1);

class ModuleLoader {
    /**
     * Load all modules from a list of API module loaders.
     * Does not return incomplete module data from APIs that failed some of their requests.
     *
     * @param {ModuleLoader[]} loaders API module loaders.
     */
    static loadAll = async (loaders) => {
        const results = await Promise.allSettled(loaders.map((l) => l.load()));

        const modules = [];
        for (const [i, result] of results.entries().toArray()) {
            if (result.status === "fulfilled") {
                modules.push(result.value);
            } else {
                logError(`[ML] ${loaders[i].name}: ${result.reason}`);
            }
        }

        return modules;
    };

    /**
     * All queried modules (or that are being queried).
     * For each we store a promise that resolves when the module has been queried properly.
     *
     * @type {Record<string, Promise<void>>}
     */
    modulePromises = {};
    /**
     * All queried modules.
     *
     * @type {Record<string, RawModule>}
     */
    modules = {};

    /**
     * Create an API module loader.
     *
     * @param {string} api URI to the foreign API.
     * @param {string} [name] API name.
     */
    constructor(api, name) {
        /**
         * API name, for debugging purpose.
         */
        this.name = name ?? api;
        /**
         * Base API URI, to use when resolving online documentation links.
         */
        this.uri = new URL(api).origin;
        /**
         * MediaWiki API.
         */
        this.api = new mw.ForeignApi(api, { anonymous: true });
    }

    /**
     * Replace relative HTML links with absolute ones.
     *
     * @param {string} text HTML text.
     */
    resolveLocalLinks = (text) => text.replace(/(<a.*? href=")(\/.*?")/g, `$1${this.uri}$2`);

    /**
     * Run a query request to load a set of modules from the API.
     *
     * @param {string[]} modules Module paths.
     */
    queryModules = async (modules) => {
        log(`[ML] ${this.name}: Querying module data...`, modules);

        /** @type {mw.Api.Params.Action.ParamInfo & mw.Api.Params.Format.Json} */
        const params = {
            action: "paraminfo",
            format: "json",
            uselang: "en",
            helpformat: "html",
            modules,
            formatversion: "2",
        };

        const response = await this.api.get(params);

        /** @type {any[]} */
        const queriedModules = response.paraminfo.modules;
        /** @type {Set<string>} */
        const submodulesToQuery = new Set();

        for (const module of queriedModules) {
            this.modules[module.path] = module;

            module.classname = [module.classname];
            module.description = this.resolveLocalLinks(module.description);

            // Merge `parameters` with `templatedparameters`.
            // We do not care about having 2 distinct parameter lists, since a templated parameter
            // can still be distinguished using `templatevars`.
            const parameters = [];
            let i = 0,
                j = 0;
            while (i < module.parameters.length && j < module.templatedparameters.length) {
                parameters.push(
                    module.parameters[i].index < module.templatedparameters[j].index
                        ? module.parameters[i++]
                        : module.templatedparameters[j++]
                );
            }
            parameters.push(...module.parameters.slice(i), ...module.templatedparameters.slice(j));
            module.parameters = parameters;
            delete module.templatedparameters;

            for (const parameter of module.parameters) {
                parameter.module = module;
                parameter.description = this.resolveLocalLinks(parameter.description);
                if (parameter.allspecifier !== undefined) {
                    parameter.allspecifiers = [parameter.allspecifier];
                    delete parameter.allspecifier;
                }

                for (const submodule of Object.values(parameter.submodules ?? {})) {
                    submodulesToQuery.add(submodule);
                }
            }
        }

        await this.loadModules(submodulesToQuery);
    };

    /**
     * Load a set of modules from the API.
     * Resolves when all modules have been loaded.
     *
     * @param {Set<string>} paths Module paths.
     */
    loadModules = async (paths) => {
        /** @type {Promise<void>[]} */
        const promises = [];
        /** @type {string[]} */
        const pathsToQuery = [];

        for (const path of paths.values().toArray()) {
            if (path.includes("*") || !(path in this.modulePromises)) {
                pathsToQuery.push(path);
            } else if (!(path in this.modules)) {
                promises.push(this.modulePromises[path]);
            }
        }

        for (let i = 0; i < pathsToQuery.length; i += 50) {
            const batch = pathsToQuery.slice(i, i + 50);
            const batchPromise = this.queryModules(batch);

            promises.push(batchPromise);
            for (const path of pathsToQuery) {
                this.modulePromises[path] = batchPromise;
            }
        }

        return Object.assign({}, ...(await Promise.all(promises)));
    };

    /**
     * Load all (used) modules from the API.
     */
    load = async () => {
        await this.loadModules(new Set(["main"]));
        return this.modules;
    };
}

class ModuleMerger {
    /**
     * Merge two arrays in a new one without duplicates.
     *
     * @template {string | number} T
     * @param {T | T[] | undefined} a1 1st array to merge.
     * @param {T | T[] | undefined} a2 2nd array to merge.
     */
    mergeArray = (a1, a2) => {
        /** @type {T[]} */
        const a = [];

        if (Array.isArray(a1)) {
            a.push(...a1);
        } else if (a1 !== undefined) {
            a.push(a1);
        }

        if (Array.isArray(a2)) {
            a.push(...a2);
        } else if (a2 !== undefined) {
            a.push(a2);
        }

        return new Set(a).values().toArray();
    };

    /**
     * Merge two different declarations of the same API module parameter.
     *
     * @param {RawModule.Parameter} p1 1st parameter data.
     * @param {RawModule.Parameter} p2 2nd parameter data.
     * @param {string} path Parameter path, for logging purpose.
     */
    mergeParameter = (p1, p2, path) => {
        /** @type {RawModule.Parameter} */
        const p = {};

        p.name = p1.name;
        if (p1.name !== p2.name) {
            // That should never happen.
            logError(`[MM] ${path}: Different parameter names ("${p1.name}" and "${p2.name}").`);
        }

        p.description = p1.description;

        // If both types are enums, and one includes the other, we take the more generalized one.
        // If both types are enums, but incompatible:
        //     If they contain values, we assume values are wiki-dependent and generalize it back to a string.
        //     If they contain sub-module names, we take all possible values.
        // If one type is an enum and the other generalizes it, we take the generalized one.
        if (typeof p1.type === "object" && typeof p2.type === "object") {
            if (p2.type.every(p1.type.includes, p1.type)) {
                p.type = p1.type;
            } else if (p1.type.every(p2.type.includes, p2.type)) {
                p.type = p2.type;
            } else if (p1.submodules) {
                p.type = this.mergeArray(p1.type, p2.type);
            } else {
                p.type = "string";
            }
        } else if (
            (typeof p1.type === "object" && p2.type === "string") ||
            (typeof p2.type === "object" && p1.type === "string")
        ) {
            p.type = "string";
        } else if (p1.type === p2.type) {
            p.type = p1.type;
        } else {
            p.type = p1.type;
            logError(`[MM] ${path}: Incompatible parameter types ("${p1.type}" and "${p2.type}").`);
        }

        // If one is optional, we make it optional.
        if (p1.required && p2.required) {
            p.required = true;
        }

        // If default values are different, it may be wiki-dependant so we do not take it into account.
        if (p1.default === p2.default) {
            p.default = p1.default;
        }

        p.multi = p1.multi;
        if (p1.multi !== p2.multi) {
            logError(
                `[MM] ${path}: Different parameter multiplicity ("${p1.multi}" and "${p2.multi}").`
            );
        }

        // If one allows duplicates, we allow duplicates.
        if (p1.allowsduplicates || p2.allowsduplicates) {
            p.allowsduplicates = true;
        }

        // If one is sensitive, we make it sensitive.
        if (p1.sensitive || p2.sensitive) {
            p.sensitive = true;
        }

        // If one is deprecated, we make it deprecated.
        if (p1.deprecated || p2.deprecated) {
            p.deprecated = true;
        }

        // If limits are different, we take the least restrictive ones.
        if (p1.limit !== undefined && p2.limit !== undefined) {
            p.limit = Math.max(p1.limit, p2.limit);
        }
        if (p1.lowlimit !== undefined && p2.lowlimit !== undefined) {
            p.lowlimit = Math.min(p1.lowlimit, p2.lowlimit);
        }
        if (p1.highlimit !== undefined && p2.highlimit !== undefined) {
            p.highlimit = Math.max(p1.highlimit, p2.highlimit);
        }
        if (p1.min !== undefined && p2.min !== undefined) {
            p.min = Math.min(p1.min, p2.min);
        }
        if (p1.max !== undefined && p2.max !== undefined) {
            p.max = Math.max(p1.max, p2.max);
        }
        if (p1.highmax !== undefined && p2.highmax !== undefined) {
            p.highmax = Math.max(p1.highmax, p2.highmax);
        }
        if (p1.maxbytes !== undefined && p2.maxbytes !== undefined) {
            p.maxbytes = Math.max(p1.maxbytes, p2.maxbytes);
        }
        if (p1.maxchars !== undefined && p2.maxchars !== undefined) {
            p.maxchars = Math.max(p1.maxchars, p2.maxchars);
        }

        if (p1.allspecifiers !== undefined || p2.allspecifiers !== undefined) {
            p.allspecifiers = this.mergeArray(p1.allspecifiers, p2.allspecifiers);
        }

        if (p1.extranamespaces !== undefined || p2.extranamespaces !== undefined) {
            p.extranamespaces = this.mergeArray(p1.extranamespaces, p2.extranamespaces);
        }

        if (
            p1.extranamespaces !== undefined &&
            p2.extranamespaces !== undefined &&
            p1.tokentype === p2.tokentype
        ) {
            p.tokentype = p1.tokentype;
        } else if (p1.extranamespaces !== undefined || p2.extranamespaces !== undefined) {
            logError(
                `[MM] ${path}: Different token parameter types ("${p1.tokentype}" and "${p2.tokentype}").`
            );
        }

        // If one accepts non-existent titles, we accept non-existent titles.
        if (p1.mustExist && p2.mustExist) {
            p.mustExist = true;
        }

        // TODO: handle different values for templatevars & info
        if (p1.templatevars !== undefined || p2.templatevars !== undefined) {
            p.templatevars = p1.templatevars || p2.templatevars;
        }
        if (p1.info !== undefined || p2.info !== undefined) {
            p.info = p1.info || p2.info;
        }

        if (p1.subtypes !== undefined || p2.subtypes !== undefined) {
            p.subtypes = this.mergeArray(p1.subtypes, p2.subtypes);
        }

        // Merge submodules.
        if (p1.submodules !== undefined && p2.submodules !== undefined) {
            p.submodules = {};
            const values = this.mergeArray(Object.keys(p1.submodules), Object.keys(p2.submodules));
            for (const value of values) {
                if (
                    value in p1.submodules &&
                    value in p2.submodules &&
                    p1.submodules[value] !== p2.submodules[value]
                ) {
                    logError(
                        `[MM] ${path}: Different sub-modules ("${p1.submodules[value]}" and "${p2.submodules[value]}") for the same parameter value ("${value}").`
                    );
                }
                p.submodules[value] = p1.submodules[value] ?? p2.submodules[value];
            }
        } else if (p1.submodules !== undefined || p2.submodules !== undefined) {
            p.submodules = p1.submodules ?? p2.submodules;
        }

        if (p1.submoduleparamprefix !== undefined || p2.submoduleparamprefix !== undefined) {
            p.submoduleparamprefix = p1.submoduleparamprefix;
            if (p1.submoduleparamprefix !== p2.submoduleparamprefix) {
                logError(
                    `[MM] ${path}: Different sub-module parameter prefix ("${p1.submoduleparamprefix}" and "${p2.submoduleparamprefix}").`
                );
            }
        }

        if (p1.internalvalues !== undefined || p2.internalvalues !== undefined) {
            p.internalvalues = this.mergeArray(p1.internalvalues, p2.internalvalues);
        }
        if (p1.deprecatedvalues !== undefined || p2.deprecatedvalues !== undefined) {
            p.deprecatedvalues = this.mergeArray(p1.deprecatedvalues, p2.deprecatedvalues);
        }

        return p;
    };

    /**
     * Merge two different lists of API parameters from the same API module.
     *
     * @param {RawModule.Parameter[]} a1 1st parameter list.
     * @param {RawModule.Parameter[]} a2 2nd parameter list.
     * @param {string} path Module path, for logging purpose.
     */
    mergeParameterArray = (a1, a2, path) => {
        const a = [];
        let i1 = 0,
            i2 = 0;

        while (i1 < a1.length && i2 < a2.length) {
            const p1 = a1[i1],
                p2 = a2[i2];
            if (p1.name === p2.name) {
                a.push(this.mergeParameter(p1, p2, `${path}[${i1}]`));
                ++i1, ++i2;
                continue;
            }

            const i1Next = a1.findIndex((p) => p.name === p2.name),
                i2Next = a2.findIndex((p) => p.name === p1.name);
            if (i2Next > 0 && i1Next > 0) {
                // Inconsistent parameter order, we use the first one.
                a.push(this.mergeParameter(p1, a2[i2Next], `${path}[${i1}]`));
                ++i1;
                a2 = [...a2.slice(0, i2Next), ...a2.slice(i2Next + 1)];
            } else if (i1Next > 0) {
                a.push(...a1.slice(i1, i1Next));
                i1 = i1Next;
            } else if (i2Next > 0) {
                a.push(...a2.slice(i2, i2Next));
                i2 = i2Next;
            } else {
                a.push(p1);
                ++i1;
            }
        }

        a.push(...a1.slice(i1), ...a2.slice(i2));

        a.forEach((p, i) => (p.index = i));
        return a;
    };

    /**
     * Merge two different declarations of the same API module.
     *
     * @param {RawModule} m1 1st module data.
     * @param {RawModule} m2 2nd module data.
     * @param {string} path Module path, for logging purpose.
     */
    mergeModule = (m1, m2, path) => {
        /** @type {RawModule} */
        const m = {};

        m.name = m1.name;
        if (m1.name !== m2.name) {
            logError(`[MM] ${path}: Different module names ("${m1.name}" and "${m2.name}").`);
        }

        m.classname = this.mergeArray(m1.classname, m2.classname);

        m.path = m1.path;
        if (m1.path !== m2.path) {
            logError(`[MM] ${path}: Different module paths ("${m1.path}" and "${m2.path}").`);
        }

        m.group = m1.group;
        if (m1.group !== m2.group) {
            logError(`[MM] ${path}: Different module groups ("${m1.group}" and "${m2.group}").`);
        }

        m.prefix = m1.prefix;
        if (m1.prefix !== m2.prefix) {
            logError(
                `[MM] ${path}: Different module prefixes ("${m1.prefix}" and "${m2.prefix}").`
            );
        }

        // We use what the most up to date site says about module metadata.
        m.source = m1.source ?? m2.source;
        m.sourcename = m1.sourcename;
        m.licensetag = m1.licensetag;
        m.licenselink = m1.licenselink;
        m.description = m1.description;
        if (m1.internal) {
            m.internal = true;
        }

        // If usage restrictions are different, we take the less restrictive ones.
        if (m1.readrights && m2.readrights) {
            m.readrights = true;
        }
        if (m1.writerights && m2.writerights) {
            m.writerights = true;
        }
        if (m1.mustbeposted && m2.mustbeposted) {
            m.mustbeposted = true;
        }

        // If one is deprecated, we make it deprecated.
        if (m1.deprecated || m2.deprecated) {
            m.deprecated = true;
        }

        if (m1.generator || m2.generator) {
            m.generator = true;
        }

        m.helpurls = this.mergeArray(m1.helpurls, m2.helpurls);
        m.examples = m1.examples;

        m.parameters = this.mergeParameterArray(m1.parameters, m2.parameters, path);
        m.parameters.forEach((p) => (p.module = m));

        if (m1.dynamicparameters || m2.dynamicparameters) {
            m.dynamicparameters = m1.dynamicparameters ?? m2.dynamicparameters;
        }

        return m;
    };

    /**
     * Merge different declarations of a set of API modules.
     *
     * @param {Record<string, RawModule>[]} moduleDicts List of API module sets.
     */
    merge = (moduleDicts) => {
        /** @type {Record<string, RawModule>} */
        const mergedDict = {};

        for (const moduleDict of moduleDicts) {
            for (const key in moduleDict) {
                mergedDict[key] =
                    key in mergedDict
                        ? this.mergeModule(mergedDict[key], moduleDict[key], moduleDict[key].path)
                        : moduleDict[key];
            }
        }

        return mergedDict;
    };
}

class ModuleParser {
    /**
     * Try to find a suitable type name (and source if not from MediaWiki) for a module.
     *
     * @param {RawModule} rawModule API module data.
     */
    findModuleName = (rawModule) => {
        const result = {
            name: rawModule.name,
            source:
                rawModule.source === undefined || rawModule.source === "MediaWiki"
                    ? ""
                    : rawModule.source.replace(/[\s-]/g, ""),
        };

        // Main module.
        if (!rawModule.group) {
            result.name = "Params";
            return result;
        }

        // Try to properly capitalize the module name.
        result.name = result.name.split(/[-_]/g).map(firstToUppercase).join("");

        // We generate patterns from the source, presets, and class name, then we try to find the
        // best combination to match the full name. Not that we test all possible combinations, but
        // only keep the ones with maximized pattern lengths.

        const plainClassNames = rawModule.classname.map(
                (n) => n.replace(/Api|Extensions?|\\/g, "") + "s"
            ),
            possibleReplacements = Object.entries({
                ...Object.fromEntries(
                    result.source.matchAll(/[A-Z][^A-Z]*/g).map((m) => [m[0].toLowerCase(), m[0]])
                ),
                ...NAME_PATH_MAP,
            });
        possibleReplacements.sort(([p1], [p2]) => p2.length - p1.length);

        /**
         * Recursively replace prefixes and suffixes of the module name.
         *
         * @param {string} name Module name (or substring).
         * @returns {{ name: string, optimal?: true }} Name capitalization with maximized pattern
         *   lengths, may be annotated `optimal` if all name parts have been properly capitalized.
         */
        function findBestReplacement(name) {
            for (const plainClassName of plainClassNames) {
                const nameIndex = plainClassName.toLowerCase().indexOf(name.toLowerCase());
                if (nameIndex >= 0) {
                    return {
                        name: plainClassName.substring(nameIndex, nameIndex + name.length),
                        optimal: true,
                    };
                }
            }

            let bestReplacement = firstToUppercase(name),
                bestRemainingLength = name.length;
            for (const [p, v] of possibleReplacements) {
                const remainingLength = name.length - p.length;
                if (remainingLength < 0) {
                    continue;
                }

                if (name.toLowerCase().startsWith(p)) {
                    const repl = findBestReplacement(name.substring(p.length));
                    repl.name = `${v}${repl.name}`;
                    if (repl.optimal) {
                        return repl;
                    }
                    if (remainingLength < bestRemainingLength) {
                        bestReplacement = repl.name;
                        bestRemainingLength = remainingLength;
                    }
                }

                if (name.toLowerCase().endsWith(p)) {
                    const repl = findBestReplacement(name.substring(0, remainingLength));
                    repl.name = `${repl.name}${v}`;
                    if (repl.optimal) {
                        return repl;
                    }
                    if (remainingLength < bestRemainingLength) {
                        bestReplacement = repl.name;
                        bestRemainingLength = remainingLength;
                    }
                }
            }

            return { name: bestReplacement };
        }

        const bestRepl = findBestReplacement(
            result.name.split(/[-_]/g).map(firstToUppercase).join("")
        );
        result.name = bestRepl.name;
        if (!bestRepl.optimal) {
            log(
                `[MP] Could not find a proper name capitalization for module "${rawModule.name}", using "${result.name}".`
            );
        }

        return result;
    };

    /**
     * Try to find a suitable type name for a module parameter.
     *
     * @param {RawModule.Parameter} rawParameter API module parameter data.
     */
    findParameterName = (rawParameter) => firstToUppercase(rawParameter.name);

    /**
     * Simplify a module parameter type expression.
     *
     * @param {Parameter.Type} type Parameter type expression.
     */
    normalizeType = (type) => {
        if (!type.lits?.size && (!type.multi || !type.singleLits?.size)) {
            return;
        }

        // Remove duplicated literals.
        if (type.multi && type.singleLits !== undefined) {
            type.lits?.forEach(Set.prototype.delete, type.singleLits);
        }

        // Remove literals that are already covered by the base type.
        let underlying = type;
        while (true) {
            // `string` covers all literals.
            if (underlying.base === "string") {
                type.lits?.clear();
                if (type.multi) {
                    type.singleLits?.clear();
                }
                break;
            }

            // An enumeration covers, well, its members.
            if (typeof underlying.base === "object") {
                Object.keys(underlying.base).forEach((k) => {
                    type.lits?.delete(k);
                    if (type.multi) {
                        type.singleLits?.delete(k);
                    }
                });
                break;
            }

            // Assume any unknown base type does not cover anything.
            if (underlying.base === undefined || !(underlying.base in TYPE_ALIASES)) {
                break;
            }

            underlying = TYPE_ALIASES[underlying.base];
            underlying.lits?.forEach(Set.prototype.delete, type.lits);
            if (underlying.multi && type.multi) {
                underlying.singleLits?.forEach(Set.prototype.delete, type.singleLits);
            }
        }

        // Use type aliases to reduce type expressions.
        // Only consider types with literals, as we do not want to replace type synonyms.
        // Note that this approach is linear: we apply the first replacement found in order,
        // without trying to find the best replacement.
        let foundReplacement;
        do {
            foundReplacement = false;
            for (const [name, typeMap] of Object.entries(TYPE_ALIASES)) {
                if (
                    (typeMap.base !== undefined && typeMap.base !== type.base) ||
                    typeMap.lits === undefined ||
                    !isSubset(typeMap.lits, type.lits) ||
                    typeMap.multi !== type.multi ||
                    (typeMap.multi && type.multi && !isSubset(typeMap.singleLits, type.singleLits))
                ) {
                    continue;
                }

                type.base = name;
                typeMap.lits.forEach(Set.prototype.delete, type.lits);
                if (
                    typeMap.multi &&
                    typeMap.singleLits !== undefined &&
                    type.multi &&
                    type.singleLits !== undefined
                ) {
                    typeMap.singleLits.forEach(Set.prototype.delete, type.singleLits);
                }

                foundReplacement = true;
                break;
            }
        } while (foundReplacement);
    };

    /**
     * Convert HTML syntax to JSdoc-friendly markdown.
     *
     * @param {string} text HTML text.
     */
    parseWikitext = (text) => {
        // div, span --> nothing
        text = text.replace(/<\/?(div|span).*?>/g, "");

        // p --> paragraph
        text = text.replace(/<p.*?>/g, "").replace(/<\/p>\s*/g, "\n\n");

        // em, strong --> bold
        text = text.replace(/<\/?(em|strong).*?>/g, "**");

        // i --> italic
        text = text.replace(/<\/?i.*?>/g, "_");

        // code, kbd, samp, var --> code block
        text = text.replace(/<\/?(code|kbd|samp|var).*?>/g, "`");

        // a --> @link
        text = text.replace(/<a.*?href="(.*?)".*?>(.*?)<\/a>/g, "{@link $1 $2}");

        // ol, ul --> list
        // dl     --> list (with bold term)
        text = text.replace(/<\/?(dd|dl|ol|ul).*?>/g, "");
        text = text.replace(/\n?<dt.*?>/g, "\n- **").replace(/<\/dt>\s*/g, "**: ");
        text = text.replace(/\n?<li.*?>/g, "\n- ").replace(/<\/li>/g, "");

        text = text.replace(/\n{3,}/g, "\n\n");

        // Move code blocks out of links.
        // `{@link X Y}` --> {@link X `Y`}
        text = text.replace(/`\{@link (.*?) (.*?)\}`/g, "{@link $1 `$2`}");
        text = text.replace(/`\{@link (.*?)\}`/g, "{@link $1 `$1`}");

        // Timestamps: use a generic string description to prevent spurious changes when
        // re-generating the type declarations. We assume all timestamps refer to this exact time.
        text = text.replace(/`\d{4}(?:-\d{2}){2}T\d{2}(?::\d{2}){2}Z`/g, "the current timestamp");

        // Replace HTML entities.
        const textArea = document.createElement("textarea");
        textArea.innerHTML = text;
        text = textArea.value;

        return text.trim().split("\n");
    };

    /**
     * Process data of an API module parameter.
     *
     * In practice:
     *  - format and capitalize the parameter name.
     *  - deduce the TS parameter type.
     *  - add non-TS info to the JSdoc.
     *  - format JSdoc description from HTML -> markdown.
     *
     * @param {Record<string, RawModule>} rawModuleDict Set of modules the parameter comes from.
     * @param {Module} module Processed API module data.
     * @param {RawModule.Parameter} rawParameter API module parameter data.
     */
    parseParameter = (rawModuleDict, module, rawParameter) => {
        const rawModule = rawParameter.module;

        /** @type {Declaration.JSdoc} */
        const jsdoc = {};
        /** @type {Parameter} */
        const parameter = {
            key: rawParameter.name,
            name: rawParameter.name,
            module: module,
            type: {},
            required: !!rawParameter.required,
            jsdoc,
        };

        parameter.type.lits = new Set();
        jsdoc.description = this.parseWikitext(rawParameter.description);

        if (typeof rawParameter.type !== "string") {
            const isUsedAsTemplateVariable = rawModule.parameters.some((p) =>
                Object.values(p.templatevars ?? {}).includes(rawParameter.name)
            );

            // We do not have a generic way to detect which parameters may get unspecified new values,
            // so for now we generalize all parameter types referenced in templated parameters
            // to be sure we are not being too specific.
            if (
                isUsedAsTemplateVariable ||
                (!rawParameter.submodules && rawParameter.type.length > 100)
            ) {
                parameter.type.base = "string";
            } else if (rawParameter.type.length > 0) {
                rawParameter.type.forEach(Set.prototype.add, parameter.type.lits);
            }
        } else if (rawParameter.type in PARAMETER_TYPE_UNDERLYING) {
            parameter.type = { ...PARAMETER_TYPE_UNDERLYING[rawParameter.type] };
            parameter.type.lits = new Set(parameter.type.lits);
            if (parameter.type.multi) {
                parameter.type.singleLits = new Set(parameter.type.singleLits);
            }
        } else {
            logError(
                `[MP] Could not find an appropriate TS type for parameter type "${rawParameter.type}".`
            );
        }

        if (rawParameter.default !== undefined) {
            parameter.default = rawParameter.default;
        }

        if (rawParameter.multi) {
            parameter.type.multi = true;
        }

        if (rawParameter.sensitive) {
            jsdoc.description.push("", "Sensitive parameter.");
        }

        if (rawParameter.deprecated) {
            jsdoc.deprecated = true;
        }

        if (rawParameter.allspecifiers !== undefined) {
            if (parameter.type.multi) {
                parameter.type.singleLits ??= new Set();
                rawParameter.allspecifiers.forEach(Set.prototype.add, parameter.type.singleLits);
            } else {
                rawParameter.allspecifiers.forEach(Set.prototype.add, parameter.type.lits);
            }
        }

        if (rawParameter.internalvalues) {
            rawParameter.internalvalues.forEach(Set.prototype.add, parameter.type.lits);
        }
        if (rawParameter.deprecatedvalues) {
            rawParameter.deprecatedvalues.forEach(Set.prototype.add, parameter.type.lits);
        }

        const templatevars = rawParameter.templatevars;
        if (templatevars) {
            const varPattern = new RegExp(`\\{(${Object.keys(templatevars).join("|")})\\}`, "g");
            parameter.template = true;
            parameter.key = parameter.key.replaceAll(varPattern, (_, varName) => {
                const varParam = templatevars[varName];
                const varType = rawModule.parameters.find((p) => p.name === varParam)?.type;
                if (Array.isArray(varType)) {
                    return `\${string}`;
                } else {
                    return `\${${varType}}`;
                }
            });
        }

        parameter.name = this.findParameterName(rawParameter);

        if (rawParameter.submodules !== undefined) {
            parameter.type.base = Object.fromEntries(
                Object.entries(rawParameter.submodules).map(([value, submodule]) => [
                    value,
                    this.parseModule(rawModuleDict, submodule, rawParameter.submoduleparamprefix, {
                        parameter,
                        value,
                    }),
                ])
            );
        }

        this.normalizeType(parameter.type);

        return parameter;
    };

    /**
     * Process data of an API module.
     *
     * In practice:
     *  - format and capitalize the module name.
     *  - add prefixes to parameter names, duplicating modules if necessary.
     *  - format JSdoc description from HTML -> markdown.
     *
     * @param {Record<string, RawModule>} rawModuleDict Set of modules the module comes from.
     * @param {string} path Path of the module to process.
     * @param {string} [prefix] Full parameter name prefix.
     * @param {ParentPath} [parent] Data of the module this one is an extension of.
     */
    parseModule = (rawModuleDict, path, prefix, parent) => {
        const rawModule = rawModuleDict[path];

        /** @type {Declaration.JSdoc} */
        const jsdoc = {
            description: this.parseWikitext(rawModule.description),
            private: !!rawModule.internal,
            deprecated: !!rawModule.deprecated,
            seelinks: rawModule.helpurls,
        };

        const { name, source } = this.findModuleName(rawModule);

        /** @type {Module} */
        const module = {
            path: rawModule.path,
            source,
            name,
            parents: [],
            parameters: [],
            prefix: `${prefix ?? ""}${rawModule.prefix}`,
            jsdoc,
        };

        if (parent) {
            module.parents.push(parent);
        }

        const rawParameters = rawModule.parameters.toSorted((p1, p2) => p1.index - p2.index);

        module.parameters = rawParameters.map((rawParameter) =>
            this.parseParameter(rawModuleDict, module, rawParameter)
        );

        return module;
    };

    /**
     * Process data of a set of API modules.
     *
     * @param {Record<string, RawModule>} rawModuleDict Set of modules.
     */
    parse = (rawModuleDict) => this.parseModule(rawModuleDict, "main");
}

/**
 * Add quotes around a TS string, unescaping any raw quotes it might contain.
 *
 * @param {string} s String to quote.
 */
const quote = (s) => `"${s.replaceAll('"', '\\"')}"`;

class ModuleFormatter {
    /**
     * Set of deprecated type aliases, with the list of types that can be used as replacement.
     * Replacements are grouped by module source (to keep a consistent order).
     *
     * @type {Record<string, Record<string, string[]>>}
     */
    deprecatedAliases = {};

    /**
     * Generate the full prefix of a parameter name from a stack of parent module parameters.
     *
     * @param {Module} source Module to generate the parameter prefix of.
     * @param {ParentStack} [parentStack] Stack of parent module parameters.
     */
    formatParameterPrefix = (source, parentStack) => {
        let prefix = source.prefix;
        for (let parent = parentStack; parent !== undefined; parent = parent.next) {
            prefix = `${parent.path.parameter.module.prefix}${prefix}`;
        }
        return prefix;
    };

    /**
     * Format a TS literal for JSdoc usage.
     *
     * @param {unknown} lit Literal.
     * @param {Parameter.Type} [type] Literal type, may help to produce a more fitting formatting.
     * @returns {string}
     */
    formatJSdocLit = (lit, type) => {
        if (lit === undefined || lit === "") {
            return "";
        }

        if (Number.isInteger(lit)) {
            return `${lit}`;
        }

        if (!type?.multi) {
            return `\`${lit}\``;
        }

        const litParts = `${lit}`.split("|").map((l) => this.formatJSdocLit(l));
        if (litParts.length === 1) {
            return litParts[0];
        } else if (litParts.length === 2) {
            return `${litParts[0]} and ${litParts[1]}`;
        } else {
            const lastPart = litParts.pop();
            return `${litParts.join(", ")}, and ${lastPart}`;
        }
    };

    /**
     * Format a set of TS literals as a list of quoted strings.
     *
     * @param {Set<string> | undefined} litSet Set of literals.
     */
    formatLitSet = (litSet) => (litSet ?? new Set()).values().map(quote).toArray().sort();

    /**
     * Format a TS parameter type expression as a TS string.
     *
     * @param {Parameter.Type} type
     */
    formatTypeExpr = (type) => {
        /** @type {string[]} */
        let typeUnion = [];

        if (typeof type.base === "object") {
            typeUnion.push("string");
        } else if (typeof type.base === "string") {
            typeUnion.push(type.base);
        }

        const lits = new Set(type.lits);
        const toggleLits = new Set();
        if (lits.size > 0) {
            for (const lit of lits.values().toArray()) {
                const negLit = `!${lit}`;
                if (lits.has(negLit)) {
                    toggleLits.add(lit);
                    lits.delete(lit);
                    lits.delete(negLit);
                }
            }

            if (toggleLits.size > 0) {
                typeUnion.push(`Toggle<${this.formatLitSet(toggleLits).join(" | ")}>`);
            }

            typeUnion.push(...this.formatLitSet(lits));
        }

        if (typeUnion.length === 0) {
            return "string";
        }

        if (type.multi) {
            if (typeUnion.length === 1 && type.base !== undefined) {
                typeUnion.push(`${typeUnion[0]}[]`, ...this.formatLitSet(type.singleLits));
            } else {
                typeUnion = [
                    ...this.formatLitSet(type.singleLits),
                    `OneOrMore<${typeUnion.join(" | ")}>`,
                ];
            }
        }

        return typeUnion.join(" | ");
    };

    /**
     * Merge two declarations of a same TS namespace, within the 1st one.
     *
     * @param {Declaration.Namespace} namespace 1st namespace declaration.
     * @param {Declaration.Namespace} namespace2 2nd namespace declaration.
     */
    mergeNamespace = (namespace, namespace2) => {
        if (
            ["export", "declare"].every((m) =>
                [namespace, namespace2].some((ns) => ns.modifier?.includes(m))
            )
        ) {
            namespace.modifier = "export declare";
        } else if ([namespace, namespace2].some((ns) => ns.modifier === "export")) {
            namespace.modifier = "export";
        } else if ([namespace, namespace2].some((ns) => ns.modifier === "declare")) {
            namespace.modifier = "declare";
        }

        if (namespace2.declarations !== undefined) {
            namespace.declarations ??= [];
            namespace.declarations.push(...namespace2.declarations);
        }

        if (namespace2.subnamespaces !== undefined) {
            namespace.subnamespaces ??= {};
            for (const [subname, subnamespace] of Object.entries(namespace2.subnamespaces)) {
                namespace.subnamespaces[subname] ??= {};
                this.mergeNamespace(namespace.subnamespaces[subname], subnamespace);
            }
        }

        if (namespace2.deprecated !== undefined) {
            namespace.deprecated ??= {};
            for (const [name, targets] of Object.entries(namespace2.deprecated)) {
                namespace.deprecated[name] ??= [];
                namespace.deprecated[name].push(...targets);
            }
        }
    };

    /**
     * Format an API module as a set of TS declarations.
     *
     * @param {Module} module Processed API module data.
     * @param {ParentStack} [parentStack] Stack of parent module parameters.y
     */
    formatModule = (module, parentStack) => {
        const parameterPrefix = this.formatParameterPrefix(module, parentStack);

        /** @type {Parameter[]} */
        const prefixedParameters = module.parameters.map((parameter) => {
            parameter = { ...parameter };

            parameter.key = `${parameterPrefix}${parameter.key}`;

            if (parameter.default !== undefined) {
                const jsdocLit =
                    this.formatJSdocLit(parameter.default, parameter.type) || "an empty string";
                parameter.jsdoc ??= {};
                parameter.jsdoc.description = [...(parameter.jsdoc.description ?? [])];
                parameter.jsdoc.description.push("", `Defaults to ${jsdocLit}.`);
            }

            return parameter;
        });

        const submoduleSets = prefixedParameters.flatMap((parameter) => {
            if (typeof parameter.type.base !== "object") {
                return [];
            } else {
                const values = Object.entries(parameter.type.base).sort((e1, e2) =>
                    e1[0].localeCompare(e2[0])
                );
                return { values, parameter };
            }
        });

        /** @type {Declaration.Interface} */
        const baseInterface = {
            jsdoc: module.jsdoc,
            name: module.name,
            parents: [],
            properties: module.parameters.map((parameter) => ({
                jsdoc: parameter.jsdoc,
                name: `${parameterPrefix}${parameter.key}`,
                template: parameter.template,
                type: this.formatTypeExpr(parameter.type),
                required: parameter.required,
            })),
        };

        if (parentStack !== undefined) {
            const parameter = parentStack.path.parameter;
            const parentParameterPrefix = this.formatParameterPrefix(
                parameter.module,
                parentStack.next
            );

            // Set parent interface
            baseInterface.parents.push(parameter.module.name);

            // Narrow parameter from parent interface
            if (!parameter.type.multi) {
                /** @type {Declaration.Property} */
                const narrowedProperty = {
                    name: `${parentParameterPrefix}${parameter.key}`,
                    template: parameter.template,
                    type: this.formatTypeExpr({ lits: new Set([parentStack.path.value]) }),
                    required: parameter.required,
                };

                // Make parameter required if not being narrowed with the default value.
                if (
                    !parameter.required &&
                    parameter.default !== undefined &&
                    parameter.default !== parentStack.path.value
                ) {
                    narrowedProperty.required = true;
                }

                baseInterface.properties.unshift(narrowedProperty);
            }
        } else {
            baseInterface.parents.push("UnknownParams");
        }

        /** @type {Declaration.Namespace} */
        const namespace = {};
        namespace.declarations = [baseInterface];

        /** @type {Record<string, Declaration.Namespace>} */
        const subnamespaces = {};
        for (const submoduleSet of submoduleSets) {
            const parameter = submoduleSet.parameter;
            subnamespaces[parameter.name] ??= {};
            for (const [value, submodule] of submoduleSet.values) {
                const path = { parameter, value };
                this.mergeNamespace(
                    subnamespaces[parameter.name],
                    this.formatModule(submodule, { path, next: parentStack })
                );
            }
        }

        if (Object.entries(subnamespaces).length) {
            namespace.subnamespaces = { [module.name]: { subnamespaces } };
        }

        let ifacePath = module.name;
        for (let parent = parentStack; parent !== undefined; parent = parent.next) {
            const parameter = parent.path.parameter;
            ifacePath = `${parameter.module.name}.${parameter.name}.${ifacePath}`;
        }

        for (const [oldName, paths] of Object.entries(INTERFACE_COMPATIBILITY)) {
            if (paths.includes(module.path)) {
                this.deprecatedAliases[oldName] ??= {};
                this.deprecatedAliases[oldName][module.path] ??= [];
                this.deprecatedAliases[oldName][module.path].push(ifacePath);
            }
        }

        return namespace;
    };

    /**
     * Format an API module tree as a set of TS declarations.
     *
     * @param {Module} rootModule Processed API module data.
     */
    format = (rootModule) => {
        /** @type {Declaration.Namespace} */
        const apiNamespace = {};
        apiNamespace.declarations = [];

        apiNamespace.declarations.push({
            name: "UnknownParams",
            type:
                "Record<string, string | number | boolean | File | string[] | number[] | undefined>",
        });
        apiNamespace.declarations.push({
            name: "Toggle",
            template: ["T extends string"],
            type: "{ [V in T]: V | `!${V}` }[T]",
        });

        for (const [name, type] of Object.entries(TYPE_ALIASES)) {
            apiNamespace.declarations.push({
                name,
                type: this.formatTypeExpr(type),
            });
        }

        this.mergeNamespace(apiNamespace, this.formatModule(rootModule));

        /** @type {Declaration.Namespace} */
        const mwNamespace = {};
        mwNamespace.subnamespaces = {};

        mwNamespace.subnamespaces["Api"] = apiNamespace;

        /** @type {Declaration.Namespace} */
        const namespace = {};
        namespace.declarations = [];
        namespace.subnamespaces = {};
        namespace.deprecated = {};

        namespace.declarations.push({
            name: "OneOrMore",
            template: ["T"],
            type: "T | T[]",
        });

        namespace.subnamespaces["mw"] = mwNamespace;

        namespace.deprecated["ApiAssert"] = [{ type: "mw.Api.Assert" }];
        namespace.deprecated["ApiTokenType"] = [{ type: "mw.Api.TokenType" }];
        namespace.deprecated["ApiLegacyTokenType"] = [{ type: "mw.Api.LegacyTokenType" }];
        for (const [name, targetMap] of Object.entries(this.deprecatedAliases)) {
            const targets = INTERFACE_COMPATIBILITY[name].flatMap((path) =>
                targetMap[path].sort((t1, t2) => t1.length - t2.length)
            );
            namespace.deprecated[name] = targets.map((target) => ({
                type: `Partial<mw.Api.${target}>`,
                link: `mw.Api.${target}`,
            }));
        }

        return namespace;
    };
}

class ModuleGenerator {
    /**
     * Indent a line by 1 level.
     *
     * @param {string} s
     */
    indent = (s) => (s !== "" ? " ".repeat(4) : "") + s;

    /**
     * Flatten multiple code blocks into a single code block, putting an empty line between blocks.
     *
     * @param {...string[]} blocks Code blocks.
     */
    flatWithLine = (...blocks) => {
        if (blocks.length === 0) {
            return [];
        }

        const newBlock = [...blocks[0]];
        for (let i = 1; i < blocks.length; ++i) {
            newBlock.push("", ...blocks[i]);
        }

        return newBlock;
    };

    /**
     * Generate a TS line to disable a linter rule for the next line.
     *
     * @param {string} name Rule name.
     */
    disableRule = (name) => `// tslint:disable-next-line:${name}`;

    /**
     * Generate a TS code block from a JSdoc declaration.
     *
     * @param {Declaration.JSdoc | undefined} jsdoc JSdoc declaration.
     */
    logJSdoc = (jsdoc) => {
        jsdoc ??= {};

        /** @type {string[][]} */
        const lineBlocks = [];

        if (jsdoc.description !== undefined && jsdoc.description.length > 0) {
            lineBlocks.push(jsdoc.description);
        }

        /** @type {string[]} */
        const tags = [];

        if (typeof jsdoc.deprecated === "string") {
            tags.push(`@deprecated ${jsdoc.deprecated}`);
        } else if (jsdoc.deprecated) {
            tags.push("@deprecated");
        }

        if (jsdoc.private) {
            tags.push("@private");
        }

        if (jsdoc.seelinks?.length) {
            tags.push(...jsdoc.seelinks.map((l) => `@see ${l}`));
        }

        if (tags.length) {
            lineBlocks.push(tags);
        }

        return lineBlocks.length
            ? ["/**", ...this.flatWithLine(...lineBlocks).map((l) => ` * ${l}`), " */"]
            : [];
    };

    /**
     * Generate a TS code block from a type alias declaration.
     *
     * @param {Declaration.Type} type Type alias declaration.
     */
    logType = (type) => {
        let intro = `type ${type.name}`;
        if (type.modifier !== undefined) {
            intro = `${type.modifier} ${intro}`;
        }

        if (type.template !== undefined) {
            intro = `${intro}<${type.template.join(", ")}>`;
        }

        return [...this.logJSdoc(type.jsdoc), `${intro} = ${type.type};`];
    };

    /**
     * Generate a TS string from an interface property declaration.
     *
     * @param {Declaration.Property} property Interface property declaration.
     */
    logProperty = (property) => {
        let name = property.name;
        if (property.template) {
            name = `[k: \`${name}\`]`;
        } else {
            if (!name.match(/^[0-9a-z]+$/i)) {
                name = quote(name);
            }

            if (!property.required) {
                name = `${name}?`;
            }
        }

        return [...this.logJSdoc(property.jsdoc), `${name}: ${property.type};`];
    };

    /**
     * Generate a TS code block from an interface declaration.
     *
     * @param {Declaration.Interface} iface Interface declaration.
     */
    logInterface = (iface) => {
        /** @type {string[]} */
        const lines = [];

        if (iface.name.match(/^I[^a-z]/)) {
            lines.push(this.disableRule("interface-name"));
        }

        let intro = `interface ${iface.name}`;
        if (iface.modifier !== undefined) {
            intro = `${iface.modifier} ${intro}`;
        }

        if (iface.template !== undefined) {
            intro = `${intro}<${iface.template.join(", ")}>`;
        }

        if (iface.parents !== undefined && iface.parents.length > 0) {
            intro = `${intro} extends ${iface.parents.join(", ")}`;
        }

        if (iface.properties.length > 0) {
            lines.push(
                `${intro} {`,
                ...iface.properties.flatMap(this.logProperty).map(this.indent),
                "}"
            );
        } else {
            lines.push(this.disableRule("no-empty-interface"), `${intro} {}`);
        }

        lines.unshift(...this.logJSdoc(iface.jsdoc));

        return lines;
    };

    /**
     * Generate a TS code block from a type declaration (either a type alias or an interface).
     *
     * @param {Declaration} declaration Type declaration.
     */
    logDeclaration = (declaration) =>
        "type" in declaration ? this.logType(declaration) : this.logInterface(declaration);

    /**
     * Generate a TS code block from a deprecated type alias declaration.
     *
     * @param {string} typeName Type name.
     * @param {{type: string, link?: string }[]} targets Possible type replacements.
     */
    logDeprecated = (typeName, targets) => [
        ...this.logJSdoc({
            deprecated: `Use ${targets
                .map((t) => `{@link ${t.link ?? t.type} \`${t.type}\`}`)
                .join(" / ")} instead.`,
        }),
        ...this.logType({ modifier: "export", name: typeName, type: targets[0].type }),
    ];

    /**
     * Generate a TS code block from a namespace declaration.
     *
     * @param {`namespace ${string}` | "global"} name Namespace name (or global).
     * @param {Declaration.Namespace} namespace Namespace declaration.
     * @returns {string[]}
     */
    logNamespace = (name, namespace) => {
        const declarations = namespace.declarations ?? [];
        const subnamespaces = Object.entries(namespace.subnamespaces ?? {});
        const deprecated = Object.entries(namespace.deprecated ?? {});

        // namespace X { namespace Y { ... } }  -->  namespace X.Y { ... }
        if (
            name !== "global" &&
            subnamespaces.length === 1 &&
            declarations.length === 0 &&
            deprecated.length === 0
        ) {
            const [subname, subnamespace] = subnamespaces[0];
            return this.logNamespace(`${name}.${subname}`, subnamespace);
        }

        return [
            `${namespace.modifier ? `${namespace.modifier} ` : ""}${name} {`,
            ...this.flatWithLine(
                ...declarations.map((declaration) => this.logDeclaration(declaration)),
                ...subnamespaces.map(([subname, subnamespace]) =>
                    this.logNamespace(`namespace ${subname}`, subnamespace)
                ),
                ...deprecated.map(([name, targets]) => this.logDeprecated(name, targets))
            ).map(this.indent),
            "}",
        ];
    };

    /**
     * Generate a TS code block from a global namespace declaration. Also puts imports/exports and
     * some stuff around, to use when generating a full declaration file.
     *
     * @param {Declaration.Namespace} content Global namespace declaration.
     */
    log = (content) =>
        this.flatWithLine(
            ["// AUTOMATICALLY GENERATED (see scripts/api-types-generator.js)"],
            ...(content.declarations ?? []).map(this.logDeclaration),
            this.logNamespace("global", {
                subnamespaces: content.subnamespaces,
                modifier: "declare",
            }),
            ...Object.entries(content.deprecated ?? {}).map(([name, targets]) =>
                this.logDeprecated(name, targets)
            ),
            ["export {};"]
        );

    /**
     * Generate a TS declaration file from a global namespace declaration.
     *
     * @param {string} fileName File name.
     * @param {Declaration.Namespace} content Global namespace declaration.
     */
    generate = (fileName, content) => {
        const lines = this.log(content);

        const element = document.createElement("a");
        element.setAttribute(
            "href",
            `data:text/plain;charset=utf-8,${encodeURIComponent(lines.join("\n"))}`
        );
        element.setAttribute("download", fileName);

        element.style.display = "none";
        document.body.append(element);
        element.click();
        element.remove();
    };
}

const loaders = Object.entries(SOURCES).map(([n, s]) => new ModuleLoader(s, n));
const merger = new ModuleMerger();
const parser = new ModuleParser();
const formatter = new ModuleFormatter();
const logger = new ModuleGenerator();

ModuleLoader.loadAll(loaders).then((rawModuleDicts) => {
    const rawModuleDict = merger.merge(rawModuleDicts);
    const rootModule = parser.parse(rawModuleDict);
    const content = formatter.format(rootModule);
    logger.generate("index.d.ts", content);
});
