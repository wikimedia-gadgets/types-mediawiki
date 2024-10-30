// This generates the content of `api_params/index.d.ts`, by extracting online MediaWiki API module information.
// Go to a Wikimedia site, paste this into the browser console, and move the generated TS declaration files to api_params.
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
    "wikimedia-meta": "https://meta.wikimedia.org/w/api.php",
    "wikinews-en": "https://en.wikinews.org/w/api.php",
    "wikiquote-en": "https://en.wikiquote.org/w/api.php",
    "wikisource-en": "https://en.wikisource.org/w/api.php",
    "wikiversity-en": "https://en.wikiversity.org/w/api.php",
    "wikivoyage-en": "https://en.wikivoyage.org/w/api.php",
    "wiktionary-en": "https://en.wiktionary.org/w/api.php",

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
 * Interface names generated before PR #41, used in type aliases for compatibility.
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
 * @template T
 * @param {Set<T> | undefined} s1
 * @param {Set<T> | undefined} s2
 * @returns
 */
const isSubset = (s1, s2) =>
    s1 === undefined || s1.size === 0 || (s2 !== undefined && s1.isSubsetOf(s2));

class ModuleLoader {
    /**
     * Load modules from a list of loaders.
     *
     * @param {ModuleLoader[]} loaders
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

    /** @type {Record<string, Promise<RawModuleDict>>} */
    cache = {};

    /**
     * Create a module loader.
     *
     * @param {string} api URI to the foreign API.
     * @param {string} [name] API name.
     */
    constructor(api, name) {
        this.name = name ?? api;
        this.api = new mw.ForeignApi(api);
    }

    /**
     * Merge `parameters` with `templatedparameters`.
     *
     * We do not care about having 2 distinct parameter lists, since a
     * templated parameter can still be distinguished using templatevars.
     *
     * @param {any} module
     */
    mergeTemplatedParameters = (module) => {
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
    };

    /**
     * Load sub-modules.
     *
     * @param {any} module
     * @returns {Promise<RawModuleDict>}
     */
    loadSubmodules = async (module) => {
        /** @type {Promise<RawModuleDict>[]} */
        const promises = [];

        for (const parameter of module.parameters) {
            const submodules = parameter.submodules;
            if (submodules === undefined) {
                continue;
            }

            const paths = Object.values(submodules);
            if (paths.length === 0) {
                continue;
            }

            const submodulePromise = this.loadModules(paths).then((submoduleData) => {
                for (const [key, path] of Object.entries(submodules)) {
                    submodules[key] = submoduleData[path];
                }
                return submoduleData;
            });

            promises.unshift(submodulePromise);
        }

        return Object.assign({}, ...(await Promise.all(promises)));
    };

    /**
     * @param {string[]} modules Module paths
     * @returns {Promise<any[]>} Module data
     */
    queryModules = (modules) => {
        log(`[ML] ${this.name}: Querying module data...`, modules);

        /** @type {mw.Api.Params.Action.ParamInfo & mw.Api.Params.Format.Json} */
        const params = {
            action: "paraminfo",
            format: "json",
            modules,
            formatversion: "2",
        };

        const { promise, resolve, reject } = Promise.withResolvers();
        this.api.get(params).then((response) => resolve(response.paraminfo.modules), reject);
        return promise;
    };

    /**
     * @param {any[]} modules
     */
    processQueriedModules = async (modules) => {
        /** @type {RawModuleDict} */
        const moduleData = {};

        for (const module of modules) {
            module.classname = [module.classname];

            this.mergeTemplatedParameters(module);
            for (const parameter of module.parameters) {
                parameter.module = module;

                if (parameter.allspecifier !== undefined) {
                    parameter.allspecifiers = [parameter.allspecifier];
                    delete parameter.allspecifier;
                }
            }

            moduleData[module.path] = module;
            Object.assign(moduleData, await this.loadSubmodules(module));
        }

        return moduleData;
    };

    /**
     * Get module data from the API.
     *
     * @param {string[]} paths Module paths.
     * @returns {Promise<RawModuleDict>} Module data.
     */
    loadModules = async (paths) => {
        /** @type {Promise<RawModuleDict>[]} */
        const promises = [];
        /** @type {string[]} */
        const pathsToQuery = [];

        for (const path of paths) {
            if (!path.includes("*") && path in this.cache) {
                promises.push(this.cache[path].then((data) => ({ [path]: data[path] })));
            } else {
                pathsToQuery.push(path);
            }
        }

        for (let i = 0; i < pathsToQuery.length; i += 50) {
            const batch = pathsToQuery.slice(i, i + 50);
            const batchPromise = this.queryModules(batch).then(this.processQueriedModules);

            promises.push(batchPromise);
            for (const path of pathsToQuery) {
                this.cache[path] = batchPromise;
            }
        }

        return Object.assign({}, ...(await Promise.all(promises)));
    };

    load = () => this.loadModules(["main"]).then((m) => m["main"]);
}

class ModuleMerger {
    /**
     * @template T
     * @template {unknown[]} U
     * @param {T[] | undefined} a1
     * @param {T[] | undefined} a2
     * @param {string} path
     * @param {(v1: T, v2: T, path: string, ...args: U) => T} [merge]
     * @param {U} args
     */
    expectSameSizeArray = (a1, a2, path, merge, ...args) => {
        if (a1 === undefined && a1 === undefined) {
            return undefined;
        }
        if (a1 === undefined || a2 === undefined || a1.length !== a2.length) {
            throw `Found arrays of different lengths ("${a1?.length ?? 0}" and "${
                a2?.length ?? 0
            }") for "${path}".`;
        }
        return merge ? a1.map((v1, i) => merge(v1, a2[i], `${path}[${i}]`, ...args)) : [...a1];
    };

    /**
     * @template {string | number} T
     * @param {T | T[] | undefined} a1
     * @param {T | T[] | undefined} a2
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
     * @param {RawModule.Parameter} p1
     * @param {RawModule.Parameter} p2
     * @param {string} path
     */
    mergeParameter = (p1, p2, path) => {
        /** @type {RawModule.Parameter} */
        const p = {};

        p.name = p1.name;
        if (p1.name !== p2.name) {
            logError(`[MM] ${path}: Different parameter names ("${p1.name}" and "${p2.name}").`);
        }

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
            logError(
                `[MM] ${path}: Incompatible parameter types ("${p1.type}" and "${p2.type}") for "${path}".`
            );
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

        if (
            p1.subtypes !== undefined &&
            p2.subtypes !== undefined &&
            p1.subtypes.length === p2.subtypes.length &&
            p1.subtypes.every((v1, i) => v1 === p2.subtypes[i])
        ) {
            p.subtypes = p1.subtypes;
        } else if (p1.subtypes !== undefined || p2.subtypes !== undefined) {
            logError(
                `[MM] ${path}: Different user parameter subtypes ("${p1.subtypes}" and "${p2.subtypes}").`
            );
            p.subtypes = p1.subtypes ?? p2.subtypes;
        }

        // Merge submodules.
        if (p1.submodules !== undefined && p2.submodules !== undefined) {
            p.submodules = { ...p1.submodules };
            for (const [k, submodule] of Object.entries(p2.submodules)) {
                if (k in p.submodules) {
                    p.submodules[k] = this.mergeModule(p.submodules[k], submodule, `${path}.${k}`);
                } else {
                    p.submodules[k] = submodule;
                }
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
     * @param {RawModule.Parameter[]} a1
     * @param {RawModule.Parameter[]} a2
     * @param {string} path
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

            let i1Next = a1.findIndex((p) => p.name === p2.name),
                i2Next = a2.findIndex((p) => p.name === p1.name);
            if (i2Next > 0 && i1Next > 0) {
                logError(`[MM] Inconsistent parameter order for "${path}".`);
            }

            if (i1Next > 0) {
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
     * @param {RawModule} m1
     * @param {RawModule} m2
     * @param {string} path
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
        m.source = m1.source;
        m.sourcename = m1.sourcename;
        m.licensetag = m1.licensetag;
        m.licenselink = m1.licenselink;
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

        m.parameters = this.mergeParameterArray(m1.parameters, m2.parameters, path);
        m.parameters.forEach((p) => (p.module = m));

        if (m1.dynamicparameters || m2.dynamicparameters) {
            m.dynamicparameters = true;
        }

        return m;
    };

    /**
     * @param {RawModule[]} ms
     */
    merge = (ms) => {
        return ms.reduce((m1, m2) => this.mergeModule(m1, m2, m2.path));
    };
}

/**
 * @param {string} s
 */
function firstToUppercase(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

class ModuleParser {
    /**
     * Try to find a suitable module name for TS formatting.
     *
     * @param {RawModule} rawModule API module data
     * @returns Formatted module name (and source if not from MediaWiki)
     */
    findModuleName = (rawModule) => {
        const result = {
            name: rawModule.name,
            source: rawModule.source === "MediaWiki" ? "" : rawModule.source.replace(/[\s-]/g, ""),
        };

        // Main module.
        if (!rawModule.group) {
            result.name = "Params";
            return result;
        }

        // Try to properly capitalize the module name.

        // We generate patterns from the source, presets, and class name, then we try to find the
        // best combination to match the full name. Not that we test all possible combinations, but
        // only keep the ones with maximized pattern lengths.

        result.name = result.name.split(/[-_]/g).map(firstToUppercase).join("");

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
         * @param {string} name
         * @returns {{ name: string, optimal: boolean }}
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

            return {
                name: bestReplacement,
                optimal: false,
            };
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
     * @param {RawModule.Parameter} rawParameter
     */
    findParameterName = (rawParameter) => firstToUppercase(rawParameter.name);

    /**
     * @param {Parameter.Type} type
     */
    normalizeType = (type) => {
        if (!type.lits?.size && (!type.multi || !type.singleLits?.size)) {
            return;
        }

        if (type.multi && type.singleLits !== undefined) {
            type.lits?.forEach(Set.prototype.delete, type.singleLits);
        }

        let underlying = type;
        while (true) {
            if (underlying.base === "string") {
                type.lits?.clear();
                if (type.multi) {
                    type.singleLits?.clear();
                }
                break;
            }

            if (typeof underlying.base === "object") {
                Object.keys(underlying.base).forEach((k) => {
                    type.lits?.delete(k);
                    if (type.multi) {
                        type.singleLits?.delete(k);
                    }
                });
                break;
            } else if (underlying.base === undefined || !(underlying.base in TYPE_ALIASES)) {
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
     * Get some data about a module parameter.
     * @param {Module} module Formatted module data
     * @param {RawModule.Parameter} rawParameter API parameter data
     */
    parseParameter = (module, rawParameter) => {
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
        jsdoc.description = [];

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
            jsdoc.description.push("Sensitive parameter.");
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
                    this.parseModule(submodule, rawParameter.submoduleparamprefix, {
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
     * Get some data about a module interface.
     * @param {RawModule} rawModule API module data
     * @param {string} [prefix]
     * @param {ParentPath} [parent] API data of the module this one is an extension of
     */
    parseModule = (rawModule, prefix, parent) => {
        /** @type {Declaration.JSdoc} */
        const jsdoc = {
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
            this.parseParameter(module, rawParameter)
        );

        return module;
    };
}

/**
 * @param {string} s
 */
const quote = (s) => `"${s}"`;

class ModuleFormatter {
    /**
     * @type {Record<string, Record<string, string[]>>};
     */
    deprecatedAliases = {};

    /**
     * @param {Module} source
     * @param {ParentStack} [parentStack]
     */
    formatParameterPrefix = (source, parentStack) => {
        let prefix = source.prefix;
        for (let parent = parentStack; parent !== undefined; parent = parent.next) {
            prefix = `${parent.path.parameter.module.prefix}${prefix}`;
        }
        return prefix;
    };

    /**
     * @param {unknown} lit
     * @param {Parameter.Type} [type]
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
     * @param {Set<string> | undefined} litSet
     */
    formatLitSet = (litSet) => (litSet ?? new Set()).values().map(quote).toArray().sort();

    /**
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

        if (typeUnion.length === 0) {
            return "never";
        }

        return typeUnion.join(" | ");
    };

    /**
     * @param {Declaration.Namespace} namespace
     * @param {Declaration.Namespace} namespace2
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
     * Format a module interface as a TS string.
     * @param {Module} module Module interface data
     * @param {ParentStack} [parentStack]
     * @returns {Declaration.Namespace}
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
                parameter.jsdoc.description.push(`Defaults to ${jsdocLit}.`);
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
     * Format some module interface data as a TS declaration file.
     * @param {Module} rootModule Formatted module data
     * @returns {Declaration.Namespace}
     */
    format = (rootModule) => {
        /** @type {Declaration.Namespace} */
        const apiNamespace = {};
        apiNamespace.declarations = [];

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
     * @param {string} s
     */
    indent = (s) => (s !== "" ? " ".repeat(4) : "") + s;

    /**
     * @param {LineBlock} block
     */
    flatWithLine = (block) => {
        if (block.length === 0) {
            return [];
        }

        const newBlock = [...block[0]];
        for (let i = 1; i < block.length; ++i) {
            newBlock.push("", ...block[i]);
        }

        return newBlock;
    };

    /**
     * Disable a linter rule for the next line.
     * @param {string} name Rule name
     * @returns TS string line
     */
    disableRule = (name) => `// tslint:disable-next-line:${name}`;

    /**
     * @param {Declaration.JSdoc | undefined} jsdoc
     */
    logJSdoc = (jsdoc) => {
        jsdoc ??= {};

        /** @type {LineBlock} */
        const lineBlock = [];

        if (jsdoc.description !== undefined && jsdoc.description.length > 0) {
            lineBlock.push(jsdoc.description);
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
            lineBlock.push(tags);
        }

        return lineBlock.length
            ? ["/**", ...this.flatWithLine(lineBlock).map((l) => ` * ${l}`), " */"]
            : [];
    };

    /**
     * @param {Declaration.Type} type
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
     * Format an interface parameter as a TS string.
     * @param {Declaration.Property} property Interface parameter data
     * @returns {string[]}
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
     * @param {Declaration.Interface} iface
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
     * @param {Declaration} declaration
     */
    logDeclaration = (declaration) =>
        "type" in declaration ? this.logType(declaration) : this.logInterface(declaration);

    /**
     * @param {string} typeName
     * @param {{type: string, link?: string }[]} targets
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
     * @param {`namespace ${string}` | "global"} name
     * @param {Declaration.Namespace} namespace
     * @returns {string[]}
     */
    logNamespace = (name, namespace) => {
        const declarations = namespace.declarations ?? [];
        const subnamespaces = Object.entries(namespace.subnamespaces ?? {});
        const deprecated = Object.entries(namespace.deprecated ?? {});

        // Flatten empty namespaces.
        if (
            name !== "global" &&
            subnamespaces.length === 1 &&
            declarations.length === 0 &&
            deprecated.length === 0
        ) {
            const [subname, subnamespace] = subnamespaces[0];
            return this.logNamespace(`${name}.${subname}`, subnamespace);
        }

        const content = [
            ...declarations.map((declaration) => this.logDeclaration(declaration)),
            ...subnamespaces.map(([subname, subnamespace]) =>
                this.logNamespace(`namespace ${subname}`, subnamespace)
            ),
            ...deprecated.map(([name, targets]) => this.logDeprecated(name, targets)),
        ];

        return [
            `${namespace.modifier ? `${namespace.modifier} ` : ""}${name} {`,
            ...this.flatWithLine(content).map(this.indent),
            "}",
        ];
    };

    /**
     * @param {Declaration.Namespace} content
     * @returns {string[]}
     */
    log = (content) =>
        this.flatWithLine([
            ["// AUTOMATICALLY GENERATED (see scripts/api-types-generator.js)"],
            ...(content.declarations ?? []).map(this.logDeclaration),
            this.logNamespace("global", {
                subnamespaces: content.subnamespaces,
                modifier: "declare",
            }),
            ...Object.entries(content.deprecated ?? {}).map(([name, targets]) =>
                this.logDeprecated(name, targets)
            ),
            ["export {};"],
        ]);

    /**
     * @param {string} fileName
     * @param {Declaration.Namespace} content
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

const loaders = Object.values(SOURCES).map((s) => new ModuleLoader(s));
const merger = new ModuleMerger();
const parser = new ModuleParser();
const formatter = new ModuleFormatter();
const logger = new ModuleGenerator();

const rawRootModules = await ModuleLoader.loadAll(loaders);
const rawRootModule = merger.merge(rawRootModules);
const rootModule = parser.parseModule(rawRootModule);
const content = formatter.format(rootModule);
logger.generate("index.d.ts", content);
