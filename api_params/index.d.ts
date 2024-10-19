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

declare global {
    namespace mw.Api {
        interface Params {
            action?: string;
            format?: string;
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

        namespace Params {
            namespace Action {
                interface AbuseFilterCheckMatch extends Params {
                    action?: "abusefiltercheckmatch";
                    filter: string;
                    vars?: string;
                    rcid?: number;
                    logid?: number;
                }

                interface AbuseFilterCheckSyntax extends Params {
                    action?: "abusefilterchecksyntax";
                    filter: string;
                }

                interface AbuseFilterEvalExpression extends Params {
                    action?: "abusefilterevalexpression";
                    expression: string;
                    prettyprint?: boolean;
                }

                interface AbuseFilterUnblockAutopromote extends Params {
                    action?: "abusefilterunblockautopromote";
                    user: string;
                    token?: string;
                }

                interface AbuseLogPrivateDetails extends Params {
                    action?: "abuselogprivatedetails";
                    logid?: number;
                    reason?: string;
                    token?: string;
                }

                interface AcquireTempUserName extends Params {
                    action?: "acquiretempusername";
                }

                interface AggregateGroups extends Params {
                    action?: "aggregategroups";
                    do: "add" | "associate" | "dissociate" | "remove" | "update";
                    aggregategroup?: string;
                    group?: string;
                    groupname?: string;
                    groupdescription?: string;
                    groupsourcelanguagecode?: string;
                    token?: string;
                }

                interface AntiSpoof extends Params {
                    action?: "antispoof";
                    username: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Block
                 */
                interface Block extends Params {
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
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:BounceHandler#API
                 */
                interface BounceHandler extends Params {
                    action?: "bouncehandler";
                    email: string;
                }

                /**
                 * @private
                 */
                interface CategoryTree extends Params {
                    action?: "categorytree";
                    category: string;
                    options?: string;
                }

                interface CentralAuthToken extends Params {
                    action?: "centralauthtoken";
                }

                interface CentralNoticeCdnCacheUpdateBanner extends Params {
                    action?: "centralnoticecdncacheupdatebanner";
                    banner: string;
                    language: string;
                    token?: string;
                }

                interface CentralNoticeChoiceData extends Params {
                    action?: "centralnoticechoicedata";
                    project: string;
                    language: string;
                }

                interface CentralNoticeQueryCampaign extends Params {
                    action?: "centralnoticequerycampaign";
                    campaign?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Manage_authentication_data
                 */
                interface ChangeAuthenticationData extends Params {
                    action?: "changeauthenticationdata";
                    changeauthrequest: string;
                    changeauthtoken?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Help:ChangeContentModel
                 */
                interface ChangeContentModel extends Params {
                    action?: "changecontentmodel";
                    title?: string;
                    pageid?: number;
                    summary?: string;
                    tags?: string | string[];
                    model: string;
                    bot?: boolean;
                    token?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Checktoken
                 */
                interface CheckToken extends Params {
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
                interface CirrusCheckSanity extends Params {
                    action?: "cirrus-check-sanity";
                    cluster?: "cloudelastic" | "codfw" | "eqiad";
                    from: number;
                    limit?: limit;
                    sequenceid?: number;
                    rerenderfrequency?: number;
                }

                interface CirrusConfigDump extends Params {
                    action?: "cirrus-config-dump";
                    prop?: OneOrMore<
                        "globals" | "namespacemap" | "profiles" | "replicagroup" | "usertesting"
                    >;
                }

                interface CirrusMappingDump extends Params {
                    action?: "cirrus-mapping-dump";
                }

                interface CirrusProfilesDump extends Params {
                    action?: "cirrus-profiles-dump";
                    verbose?: boolean;
                }

                interface CirrusSettingsDump extends Params {
                    action?: "cirrus-settings-dump";
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:ClearHasMsg
                 */
                interface ClearHasMsg extends Params {
                    action?: "clearhasmsg";
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Login
                 */
                interface ClientLogin extends Params {
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
                interface Collection extends Params {
                    action?: "collection";
                    submodule: string;
                }

                namespace Collection.Submodule {
                    interface AddArticle extends Collection {
                        submodule: "addarticle";
                        namespace: number;
                        title: string;
                        oldid?: number;
                    }

                    interface AddCategory extends Collection {
                        submodule: "addcategory";
                        title?: string;
                    }

                    interface AddChapter extends Collection {
                        submodule: "addchapter";
                        chaptername?: string;
                    }

                    interface ClearCollection extends Collection {
                        submodule: "clearcollection";
                    }

                    interface GetBookCreatorBoxContent extends Collection {
                        submodule: "getbookcreatorboxcontent";
                        hint?: string;
                        oldid?: number;
                        pagename?: string;
                    }

                    interface GetCollection extends Collection {
                        submodule: "getcollection";
                    }

                    interface GetPopupData extends Collection {
                        submodule: "getpopupdata";
                        title: string;
                    }

                    interface PostCollection extends Collection {
                        submodule: "postcollection";
                        collection?: string;
                    }

                    interface RemoveArticle extends Collection {
                        submodule: "removearticle";
                        namespace: number;
                        title: string;
                        oldid?: number;
                    }

                    interface RemoveItem extends Collection {
                        submodule: "removeitem";
                        index?: number;
                    }

                    interface RenameChapter extends Collection {
                        submodule: "renamechapter";
                        index: number;
                        chaptername: string;
                    }

                    interface SetSorting extends Collection {
                        submodule: "setsorting";
                        items: number | number[];
                    }

                    interface SetTitles extends Collection {
                        submodule: "settitles";
                        title: string;
                        subtitle?: string;
                        settings?: string;
                    }

                    interface SortItems extends Collection {
                        submodule: "sortitems";
                    }

                    interface SuggestArticleAction extends Collection {
                        submodule: "suggestarticleaction";
                        suggestaction: "add" | "ban" | "remove";
                        title: string;
                    }

                    interface SuggestUndoArticleAction extends Collection {
                        submodule: "suggestundoarticleaction";
                        lastaction: "add" | "ban" | "remove";
                        title: string;
                    }
                }

                interface CommunityConfigurationEdit extends Params {
                    action?: "communityconfigurationedit";
                    provider:
                        | "AutoModerator"
                        | "CommunityUpdates"
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
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Compare
                 */
                interface Compare extends Params {
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
                        | "application/vnd.php.serialized"
                        | "application/x-binary"
                        | "text/css"
                        | "text/javascript"
                        | "text/plain"
                        | "text/unknown"
                        | "text/x-wiki"
                        | "unknown/unknown";
                    [k: `fromcontentmodel-${string}`]: string;
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
                        | "application/vnd.php.serialized"
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
                    fromcontentmodel?: string;
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
                        | "application/vnd.php.serialized"
                        | "application/x-binary"
                        | "text/css"
                        | "text/javascript"
                        | "text/plain"
                        | "text/unknown"
                        | "text/x-wiki"
                        | "unknown/unknown";
                    [k: `tocontentmodel-${string}`]: string;
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
                        | "application/vnd.php.serialized"
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
                    tocontentmodel?: string;
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
                    slots?: OneOrMore<"main" | "mediainfo" | "*">;
                    difftype?: "inline" | "table" | "unified";
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Account_creation
                 */
                interface CreateAccount extends Params {
                    action?: "createaccount";
                    createrequests?: string | string[];
                    createmessageformat?: "html" | "none" | "raw" | "wikitext";
                    createmergerequestfields?: boolean;
                    createpreservestate?: boolean;
                    createreturnurl?: string;
                    createcontinue?: boolean;
                    createtoken?: string;
                }

                interface CreateLocalAccount extends Params {
                    action?: "createlocalaccount";
                    username: string;
                    reason?: string;
                    token?: string;
                }

                /**
                 * @private
                 */
                interface CSPReport extends Params {
                    action?: "cspreport";
                    reportonly?: boolean;
                    source?: string;
                }

                /**
                 * @private
                 */
                interface CXCheckUnreviewed extends Params {
                    action?: "cxcheckunreviewed";
                }

                interface CXDelete extends Params {
                    action?: "cxdelete";
                    from: string;
                    to: string;
                    sourcetitle: string;
                    token?: string;
                }

                /**
                 * @private
                 */
                interface CXPublish extends Params {
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
                interface CXPublishSection extends Params {
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
                interface CXSave extends Params {
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
                interface CXSplit extends Params {
                    action?: "cxsplit";
                    translationid: number;
                    token?: string;
                }

                interface CXSuggestionList extends Params {
                    action?: "cxsuggestionlist";
                    listname: string;
                    listaction: "add" | "remove" | "view";
                    titles: string | string[];
                    from: string;
                    to?: string;
                    token?: string;
                }

                interface CXToken extends Params {
                    action?: "cxtoken";
                    token?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Delete
                 */
                interface Delete extends Params {
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

                interface DeleteGlobalAccount extends Params {
                    action?: "deleteglobalaccount";
                    user: string;
                    reason?: string;
                    token?: string;
                }

                /**
                 * @private
                 */
                interface DiscussionToolsCompare extends Params {
                    action?: "discussiontoolscompare";
                    fromtitle?: string;
                    fromrev?: number;
                    totitle?: string;
                    torev?: number;
                }

                interface DiscussionToolsEdit extends Params {
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
                    useskin?: string;
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

                interface DiscussionToolsFindComment extends Params {
                    action?: "discussiontoolsfindcomment";
                    idorname?: string;
                    heading?: string;
                    page?: string;
                }

                interface DiscussionToolsGetSubscriptions extends Params {
                    action?: "discussiontoolsgetsubscriptions";
                    commentname: string | string[];
                }

                /**
                 * @private
                 */
                interface DiscussionToolsPageInfo extends Params {
                    action?: "discussiontoolspageinfo";
                    page?: string;
                    oldid?: number;
                    prop?: OneOrMore<"threaditemshtml" | "transcludedfrom">;
                    excludesignatures?: boolean;
                }

                /**
                 * @private
                 */
                interface DiscussionToolsPreview extends Params {
                    action?: "discussiontoolspreview";
                    type: "reply" | "topic";
                    page: string;
                    wikitext: string;
                    sectiontitle?: string;
                    useskin?: string;
                    mobileformat?: boolean;
                }

                interface DiscussionToolsSubscribe extends Params {
                    action?: "discussiontoolssubscribe";
                    page: string;
                    token?: string;
                    commentname: string;
                    subscribe: boolean;
                }

                interface DiscussionToolsThank extends Params {
                    action?: "discussiontoolsthank";
                    page: string;
                    commentid: string;
                    token?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Echo_(Notifications)/API
                 */
                interface EchoCreateEvent extends Params {
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
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Echo_(Notifications)/API
                 */
                interface EchoMarkRead extends Params {
                    action?: "echomarkread";
                    wikis?: string | string[];
                    list?: string | string[];
                    unreadlist?: string | string[];
                    all?: boolean;
                    sections?: OneOrMore<"alert" | "message">;
                    token?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Echo_(Notifications)/API
                 */
                interface EchoMarkSeen extends Params {
                    action?: "echomarkseen";
                    type: "alert" | "all" | "message";
                    timestampFormat?: "ISO_8601" | "MW";
                }

                interface EchoMute extends Params {
                    action?: "echomute";
                    type: "page-linked-title" | "user";
                    mute?: string | string[];
                    unmute?: string | string[];
                    token?: string;
                }

                /**
                 * @private
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:Echo#API
                 */
                interface EchoPushSubscriptions extends Params {
                    action?: "echopushsubscriptions";
                    command: string;
                    token?: string;
                }

                namespace EchoPushSubscriptions.Command {
                    /**
                     * @private
                     */
                    interface Create extends EchoPushSubscriptions {
                        command: "create";
                        provider: "apns" | "fcm";
                        providertoken: string;
                        topic?: string;
                    }

                    /**
                     * @private
                     */
                    interface Delete extends EchoPushSubscriptions {
                        command: "delete";
                        providertoken: string | string[];
                    }
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Edit
                 */
                interface Edit extends Params {
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
                        | "application/vnd.php.serialized"
                        | "application/x-binary"
                        | "text/css"
                        | "text/javascript"
                        | "text/plain"
                        | "text/unknown"
                        | "text/x-wiki"
                        | "unknown/unknown";
                    contentmodel?: string;
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
                interface EditCheckReferenceUrl extends Params {
                    action?: "editcheckreferenceurl";
                    url: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Extension:MassMessage/API
                 */
                interface EditMassMessageList extends Params {
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
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Email
                 */
                interface EmailUser extends Params {
                    action?: "emailuser";
                    target: string;
                    subject: string;
                    text: string;
                    ccme?: boolean;
                    token?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Expandtemplates
                 */
                interface ExpandTemplates extends Params {
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
                    templatesandboxcontentmodel?: string;
                    templatesandboxcontentformat?:
                        | "application/json"
                        | "application/octet-stream"
                        | "application/unknown"
                        | "application/vnd.php.serialized"
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
                interface FancyCaptchaReload extends Params {
                    action?: "fancycaptchareload";
                }

                interface FeaturedFeed extends Params {
                    action?: "featuredfeed";
                    feedformat?: "atom" | "rss" | "sitemap";
                    feed: string;
                    language?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Feedcontributions
                 */
                interface FeedContributions extends Params {
                    action?: "feedcontributions";
                    feedformat?: "atom" | "rss" | "sitemap";
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
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Feedrecentchanges
                 */
                interface FeedRecentChanges extends Params {
                    action?: "feedrecentchanges";
                    feedformat?: "atom" | "rss" | "sitemap";
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

                interface FeedThreads extends Params {
                    action?: "feedthreads";
                    feedformat?: "atom" | "rss" | "sitemap";
                    days?: number;
                    type?: OneOrMore<"newthreads" | "replies">;
                    talkpage?: string | string[];
                    thread?: string | string[];
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlist_feed
                 */
                interface FeedWatchlist extends Params {
                    action?: "feedwatchlist";
                    feedformat?: "atom" | "rss" | "sitemap";
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
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Filerevert
                 */
                interface FileRevert extends Params {
                    action?: "filerevert";
                    filename: string;
                    comment?: string;
                    archivename: string;
                    token?: string;
                }

                interface FlagConfig extends Params {
                    action?: "flagconfig";
                }

                interface FlickrBlacklist extends Params {
                    action?: "flickrblacklist";
                    url?: string;
                    list?: boolean;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Extension:Flow/API
                 */
                interface Flow extends Params {
                    action?: "flow";
                    submodule: string;
                    page?: string;
                    token?: string;
                }

                namespace Flow.Submodule {
                    /**
                     * @deprecated
                     * @see https://www.mediawiki.org/wiki/Extension:Flow/API#lock-topic
                     */
                    interface CloseOpenTopic extends Flow {
                        submodule: "close-open-topic";
                        cotmoderationState: "close" | "lock" | "reopen" | "unlock";
                        cotreason: string;
                        cottoken?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Extension:Flow/API#edit-header
                     */
                    interface EditHeader extends Flow {
                        submodule: "edit-header";
                        ehprev_revision?: string;
                        ehcontent: string;
                        ehformat?: "html" | "wikitext";
                        ehtoken?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Extension:Flow/API#edit-post
                     */
                    interface EditPost extends Flow {
                        submodule: "edit-post";
                        eppostId: string;
                        epprev_revision: string;
                        epcontent: string;
                        epformat?: "html" | "wikitext";
                        eptoken?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Extension:Flow/API#edit-title
                     */
                    interface EditTitle extends Flow {
                        submodule: "edit-title";
                        etprev_revision: string;
                        etcontent: string;
                        ettoken?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Extension:Flow/API#edit-topic-summary
                     */
                    interface EditTopicSummary extends Flow {
                        submodule: "edit-topic-summary";
                        etsprev_revision?: string;
                        etssummary: string;
                        etsformat?: "html" | "wikitext";
                        etstoken?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Extension:Flow/API#lock-topic
                     */
                    interface LockTopic extends Flow {
                        submodule: "lock-topic";
                        cotmoderationState: "close" | "lock" | "reopen" | "unlock";
                        cotreason: string;
                        cottoken?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Extension:Flow/API#moderate-post
                     */
                    interface ModeratePost extends Flow {
                        submodule: "moderate-post";
                        mpmoderationState:
                            | ""
                            | "delete"
                            | "hide"
                            | "restore"
                            | "suppress"
                            | "undelete"
                            | "unhide"
                            | "unsuppress";
                        mpreason: string;
                        mppostId: string;
                        mptoken?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Extension:Flow/API#moderate-topic
                     */
                    interface ModerateTopic extends Flow {
                        submodule: "moderate-topic";
                        mtmoderationState:
                            | ""
                            | "delete"
                            | "hide"
                            | "restore"
                            | "suppress"
                            | "undelete"
                            | "unhide"
                            | "unsuppress";
                        mtreason: string;
                        mttoken?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Extension:Flow/API#new-topic
                     */
                    interface NewTopic extends Flow {
                        submodule: "new-topic";
                        nttopic: string;
                        ntcontent: string;
                        ntformat?: "html" | "wikitext";
                        nttoken?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Extension:Flow/API#reply
                     */
                    interface Reply extends Flow {
                        submodule: "reply";
                        repreplyTo: string;
                        repcontent: string;
                        repformat?: "html" | "wikitext";
                        reptoken?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Extension:Flow/API#undo-edit-header
                     */
                    interface UndoEditHeader extends Flow {
                        submodule: "undo-edit-header";
                        uehstartId: string;
                        uehendId: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Extension:Flow/API#undo-edit-post
                     */
                    interface UndoEditPost extends Flow {
                        submodule: "undo-edit-post";
                        uepstartId: string;
                        uependId: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Extension:Flow/API#undo-edit-topic-summary
                     */
                    interface UndoEditTopicSummary extends Flow {
                        submodule: "undo-edit-topic-summary";
                        uetsstartId: string;
                        uetsendId: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Extension:Flow/API#view-header
                     */
                    interface ViewHeader extends Flow {
                        submodule: "view-header";
                        vhformat?: "fixed-html" | "html" | "wikitext";
                        vhrevId?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Extension:Flow/API#view-post
                     */
                    interface ViewPost extends Flow {
                        submodule: "view-post";
                        vppostId: string;
                        vpformat?: "fixed-html" | "html" | "wikitext";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Extension:Flow/API#view-post-history
                     */
                    interface ViewPostHistory extends Flow {
                        submodule: "view-post-history";
                        vphpostId: string;
                        vphformat?: "fixed-html" | "html" | "wikitext";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Extension:Flow/API#view-topic
                     */
                    interface ViewTopic extends Flow {
                        submodule: "view-topic";
                        vtformat?: "fixed-html" | "html" | "wikitext";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Extension:Flow/API#view-topic-history
                     */
                    interface ViewTopicHistory extends Flow {
                        submodule: "view-topic-history";
                        vthformat?: "fixed-html" | "html" | "wikitext";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Extension:Flow/API#view-topic-summary
                     */
                    interface ViewTopicSummary extends Flow {
                        submodule: "view-topic-summary";
                        vtsformat?: "fixed-html" | "html" | "wikitext";
                        vtsrevId?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Extension:Flow/API#view-topiclist
                     */
                    interface ViewTopicList extends Flow {
                        "submodule": "view-topiclist";
                        "vtloffset-dir"?: "fwd" | "rev";
                        "vtlsortby"?: "newest" | "updated" | "user";
                        "vtlsavesortby"?: boolean;
                        "vtloffset-id"?: string;
                        "vtloffset"?: string;
                        "vtlinclude-offset"?: boolean;
                        "vtllimit"?: limit;
                        "vtltoconly"?: boolean;
                        "vtlformat"?: "fixed-html" | "html" | "wikitext";
                    }
                }

                interface FlowParsoidUtils extends Params {
                    action?: "flow-parsoid-utils";
                    from: "html" | "wikitext";
                    to: "html" | "wikitext";
                    content: string;
                    title?: string;
                    pageid?: number;
                }

                interface FlowThank extends Params {
                    action?: "flowthank";
                    postid: string;
                    token?: string;
                }

                interface GlobalBlock extends Params {
                    "action"?: "globalblock";
                    "id"?: number;
                    "target"?: string;
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
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GlobalPreferences/API
                 */
                interface GlobalPreferenceOverrides extends Params {
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
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Globalpreferences
                 */
                interface GlobalPreferences extends Params {
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
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:User_group_membership
                 */
                interface GlobalUserRights extends Params {
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
                        | "u4c-member"
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
                        | "u4c-member"
                        | "vrt-permissions"
                        | "wmf-email-block-override"
                        | "wmf-researcher"
                    >;
                    reason?: string;
                    token?: string;
                    tags?: string | string[];
                }

                interface GroupReview extends Params {
                    action?: "groupreview";
                    group: string;
                    language?: string;
                    state: string;
                    token?: string;
                }

                /**
                 * @private
                 */
                interface GrowthInvalidateImageRecommendation extends Params {
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
                interface GrowthInvalidatePersonalizedPraiseSuggestion extends Params {
                    action?: "growthinvalidatepersonalizedpraisesuggestion";
                    mentee: string;
                    reason?: "praised" | "skipped";
                    skipreason?: "already-praised" | "not-now" | "not-praiseworthy" | "other";
                    token?: string;
                }

                interface GrowthManageMentorList extends Params {
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

                interface GrowthMentorDashboardUpdateData extends Params {
                    action?: "growthmentordashboardupdatedata";
                    token?: string;
                }

                interface GrowthSetMenteeStatus extends Params {
                    action?: "growthsetmenteestatus";
                    state: "disabled" | "enabled" | "optout";
                    token?: string;
                }

                interface GrowthSetMentor extends Params {
                    action?: "growthsetmentor";
                    mentee: string;
                    mentor: string;
                    reason?: string;
                    token?: string;
                }

                interface GrowthStarMentee extends Params {
                    action?: "growthstarmentee";
                    gesaction: "star" | "unstar";
                    gesmentee: string;
                    token?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Main_page
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:FAQ
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Quick_start_guide
                 */
                interface Help extends Params {
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
                interface HelpPanelQuestionPoster extends Params {
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

                interface HomePageQuestionStore extends Params {
                    action?: "homepagequestionstore";
                    storage:
                        | "growthexperiments-helppanel-questions"
                        | "growthexperiments-mentor-questions";
                }

                interface ImageRotate extends Params {
                    action?: "imagerotate";
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Import
                 */
                interface Import extends Params {
                    action?: "import";
                    summary?: string;
                    xml?: upload;
                    interwikiprefix?: string;
                    interwikisource?: string;
                    interwikipage?: string;
                    fullhistory?: boolean;
                    templates?: boolean;
                    namespace?: namespace;
                    assignknownusers?: boolean;
                    rootpage?: string;
                    tags?: string | string[];
                    token?: string;
                }

                interface JsonConfig extends Params {
                    action?: "jsonconfig";
                    command?: "reload" | "reset" | "status";
                    namespace?: number;
                    title?: string;
                    content?: string;
                }

                /**
                 * @private
                 */
                interface JsonData extends Params {
                    action?: "jsondata";
                    title: string;
                }

                interface JsonSchema extends Params {
                    action?: "jsonschema";
                    revid?: number;
                    title?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Languagesearch
                 */
                interface LanguageSearch extends Params {
                    action?: "languagesearch";
                    search: string;
                    typos?: number;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Linkaccount
                 */
                interface LinkAccount extends Params {
                    action?: "linkaccount";
                    linkrequests?: string | string[];
                    linkmessageformat?: "html" | "none" | "raw" | "wikitext";
                    linkmergerequestfields?: boolean;
                    linkreturnurl?: string;
                    linkcontinue?: boolean;
                    linktoken?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Login
                 */
                interface Login extends Params {
                    action?: "login";
                    lgname?: string;
                    lgpassword?: password;
                    lgdomain?: string;
                    lgtoken?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Logout
                 */
                interface Logout extends Params {
                    action?: "logout";
                    token?: string;
                }

                /**
                 * @private
                 */
                interface ManageGroupSynchronizationCache extends Params {
                    action?: "managegroupsynchronizationcache";
                    operation: "resolveGroup" | "resolveMessage";
                    title?: string;
                    group: string;
                    token?: string;
                }

                /**
                 * @private
                 */
                interface ManageMessageGroups extends Params {
                    action?: "managemessagegroups";
                    groupId: string;
                    renameMessageKey?: string;
                    messageKey: string;
                    operation: "new" | "rename";
                    changesetName?: string;
                    changesetModified: number;
                    token?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Tag_management
                 */
                interface ManageTags extends Params {
                    action?: "managetags";
                    operation: "activate" | "create" | "deactivate" | "delete";
                    tag: string;
                    reason?: string;
                    ignorewarnings?: boolean;
                    tags?: string | string[];
                    token?: string;
                }

                interface MarkForTranslation extends Params {
                    action?: "markfortranslation";
                    title?: string;
                    pageid?: number;
                    revid?: number;
                    translatetitle?: "no" | "yes";
                    prioritylanguages?: string | string[];
                    forcepriority?: boolean;
                    priorityreason?: string;
                    nofuzzyunits?: string | string[];
                    fuzzyunits?: string | string[];
                    forcelatestsyntaxversion?: boolean;
                    transclusion?: "no" | "yes";
                    token?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Extension:MassMessage/API
                 */
                interface MassMessage extends Params {
                    "action"?: "massmessage";
                    "spamlist": string;
                    "subject": string;
                    "message"?: string;
                    "page-message"?: string;
                    "token"?: string;
                }

                interface MediaDetection extends Params {
                    action?: "mediadetection";
                    filename?: string;
                    filekey?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Mergehistory
                 */
                interface MergeHistory extends Params {
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
                 * @private
                 */
                interface MessageGroupSubscription extends Params {
                    action?: "messagegroupsubscription";
                    groupId: string;
                    operation: "subscribe" | "unsubscribe";
                    token?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Move
                 */
                interface Move extends Params {
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

                interface NewsletterSubscribe extends Params {
                    action?: "newslettersubscribe";
                    id: number;
                    do: "subscribe" | "unsubscribe";
                    token?: string;
                }

                /**
                 * @private
                 */
                interface OATHValidate extends Params {
                    action?: "oathvalidate";
                    user?: string;
                    data: string;
                    token?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Opensearch
                 */
                interface OpenSearch extends Params {
                    action?: "opensearch";
                    search: string;
                    namespace?: namespace | namespace[];
                    limit?: limit;
                    profile?:
                        | "classic"
                        | "engine_autoselect"
                        | "fast-fuzzy"
                        | "fuzzy"
                        | "fuzzy-subphrases"
                        | "normal"
                        | "normal-subphrases"
                        | "strict";
                    /**
                     * @deprecated
                     */
                    suggest?: boolean;
                    redirects?: "resolve" | "return";
                    format?: "json" | "jsonfm" | "xml" | "xmlfm";
                    warningsaserror?: boolean;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Options
                 */
                interface Options extends Params {
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

                interface PageTriageAction extends Params {
                    action?: "pagetriageaction";
                    pageid: number;
                    reviewed?: "0" | "1";
                    enqueue?: boolean;
                    token?: string;
                    note?: string;
                    skipnotif?: boolean;
                    tags?: string | string[];
                }

                interface PageTriageList extends Params {
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

                interface PageTriageStats extends Params {
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

                interface PageTriageTagCopyvio extends Params {
                    action?: "pagetriagetagcopyvio";
                    revid: number;
                    untag?: boolean;
                    token?: string;
                }

                interface PageTriageTagging extends Params {
                    action?: "pagetriagetagging";
                    pageid: number;
                    token?: string;
                    wikitext: string;
                    deletion?: boolean;
                    note?: string;
                    taglist: string | string[];
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Parameter_information
                 */
                interface ParamInfo extends Params {
                    action?: "paraminfo";
                    modules?: string | string[];
                    helpformat?: "html" | "none" | "raw" | "wikitext";
                    /**
                     * @deprecated
                     */
                    querymodules?: string | string[];
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
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Parsing_wikitext
                 */
                interface Parse extends Params {
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
                    useskin?: string;
                    contentformat?:
                        | "application/json"
                        | "application/octet-stream"
                        | "application/unknown"
                        | "application/vnd.php.serialized"
                        | "application/x-binary"
                        | "text/css"
                        | "text/javascript"
                        | "text/plain"
                        | "text/unknown"
                        | "text/x-wiki"
                        | "unknown/unknown";
                    contentmodel?: string;
                    mobileformat?: boolean;
                    templatesandboxprefix?: string | string[];
                    templatesandboxtitle?: string;
                    templatesandboxtext?: string;
                    templatesandboxcontentmodel?: string;
                    templatesandboxcontentformat?:
                        | "application/json"
                        | "application/octet-stream"
                        | "application/unknown"
                        | "application/vnd.php.serialized"
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
                interface ParserMigration extends Params {
                    action?: "parser-migration";
                    title: string;
                    config?: OneOrMore<"new" | "old">;
                    redirect?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Patrol
                 */
                interface Patrol extends Params {
                    action?: "patrol";
                    rcid?: number;
                    revid?: number;
                    tags?: string | string[];
                    token?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Protect
                 */
                interface Protect extends Params {
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
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Purge
                 */
                interface Purge extends Params {
                    action?: "purge";
                    forcelinkupdate?: boolean;
                    forcerecursivelinkupdate?: boolean;
                    continue?: string;
                    titles?: string | string[];
                    pageids?: number | number[];
                    revids?: number | number[];
                    generator?: string;
                    redirects?: boolean;
                    converttitles?: boolean;
                }

                namespace Purge.Generator {
                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allcategories
                     */
                    interface AllCategories extends Purge {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alldeletedrevisions
                     */
                    interface AllDeletedRevisions extends Purge {
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
                            | "application/vnd.php.serialized"
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
                            | "application/vnd.php.serialized"
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allfileusages
                     */
                    interface AllFileUsages extends Purge {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allimages
                     */
                    interface AllImages extends Purge {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alllinks
                     */
                    interface AllLinks extends Purge {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allpages
                     */
                    interface AllPages extends Purge {
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
                        gapprlevel?: string | string[];
                        gapprfiltercascade?: "all" | "cascading" | "noncascading";
                        gapprexpiry?: "all" | "definite" | "indefinite";
                        gaplimit?: limit;
                        gapdir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allredirects
                     */
                    interface AllRedirects extends Purge {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allrevisions
                     */
                    interface AllRevisions extends Purge {
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
                            | "application/vnd.php.serialized"
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
                            | "application/vnd.php.serialized"
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alltransclusions
                     */
                    interface AllTransclusions extends Purge {
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

                    interface AutomaticTranslationDenseLanguages extends Purge {
                        "generator"?: "automatictranslationdenselanguages";
                        "gqid": string;
                        "gsection-titles"?: boolean;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Backlinks
                     */
                    interface Backlinks extends Purge {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categories
                     */
                    interface Categories extends Purge {
                        generator?: "categories";
                        gclprop?: OneOrMore<"hidden" | "sortkey" | "timestamp">;
                        gclshow?: OneOrMore<"!hidden" | "hidden">;
                        gcllimit?: limit;
                        gclcontinue?: string;
                        gclcategories?: string | string[];
                        gcldir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categorymembers
                     */
                    interface CategoryMembers extends Purge {
                        generator?: "categorymembers";
                        gcmtitle?: string;
                        gcmpageid?: number;
                        gcmprop?: OneOrMore<
                            "ids" | "sortkey" | "sortkeyprefix" | "timestamp" | "title" | "type"
                        >;
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

                    interface Configuredpages extends Purge {
                        generator?: "configuredpages";
                        gcpstart?: number;
                        gcpend?: number;
                        gcpdir?: "newer" | "older";
                        gcpnamespace?: namespace | namespace[];
                        gcpdefault?: "latest" | "stable";
                        gcpautoreview?: "none" | "sysop";
                        gcplimit?: limit;
                    }

                    interface ContentTranslation extends Purge {
                        generator?: "contenttranslation";
                        gtranslationid?: string;
                        gfrom?: string;
                        gto?: string;
                        gsourcetitle?: string;
                        gsourcesectiontitle?: string;
                        glimit?: limit;
                        goffset?: string;
                        gtype?: "draft" | "published";
                        gusecase?:
                            | "desktop-editor-draft"
                            | "translation-corpora-units"
                            | "unified-dashboard";
                    }

                    interface ContentTranslationSuggestions extends Purge {
                        generator?: "contenttranslationsuggestions";
                        gfrom?: string;
                        gto?: string;
                        glistid?: string;
                        glimit?: limit;
                        goffset?: string;
                        gseed?: number;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Deletedrevisions
                     */
                    interface DeletedRevisions extends Purge {
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
                            | "application/vnd.php.serialized"
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
                            | "application/vnd.php.serialized"
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Duplicatefiles
                     */
                    interface DuplicateFiles extends Purge {
                        generator?: "duplicatefiles";
                        gdflimit?: limit;
                        gdfcontinue?: string;
                        gdfdir?: "ascending" | "descending";
                        gdflocalonly?: boolean;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Embeddedin
                     */
                    interface Embeddedin extends Purge {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Exturlusage
                     */
                    interface ExtUrlUsage extends Purge {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Fileusage
                     */
                    interface FileUsage extends Purge {
                        generator?: "fileusage";
                        gfuprop?: OneOrMore<"pageid" | "redirect" | "title">;
                        gfunamespace?: namespace | namespace[];
                        gfushow?: OneOrMore<"!redirect" | "redirect">;
                        gfulimit?: limit;
                        gfucontinue?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GeoData#list.3Dgeosearch
                     */
                    interface GeoSearch extends Purge {
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
                        ggsprop?: OneOrMore<
                            "country" | "dim" | "globe" | "name" | "region" | "type"
                        >;
                        ggsprimary?: "all" | "primary" | "secondary";
                        ggsdebug?: boolean;
                    }

                    /**
                     * @private
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GrowthExperiments#API
                     */
                    interface GrowthTasks extends Purge {
                        generator?: "growthtasks";
                        ggttasktypes?: OneOrMore<
                            | "copyedit"
                            | "expand"
                            | "image-recommendation"
                            | "link-recommendation"
                            | "links"
                            | "references"
                            | "section-image-recommendation"
                            | "update"
                        >;
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Images
                     */
                    interface Images extends Purge {
                        generator?: "images";
                        gimlimit?: limit;
                        gimcontinue?: string;
                        gimimages?: string | string[];
                        gimdir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Imageusage
                     */
                    interface ImageUsage extends Purge {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Iwbacklinks
                     */
                    // tslint:disable-next-line:interface-name
                    interface IWBacklinks extends Purge {
                        generator?: "iwbacklinks";
                        giwblprefix?: string;
                        giwbltitle?: string;
                        giwblcontinue?: string;
                        giwbllimit?: limit;
                        giwblprop?: OneOrMore<"iwprefix" | "iwtitle">;
                        giwbldir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Langbacklinks
                     */
                    interface LangBacklinks extends Purge {
                        generator?: "langbacklinks";
                        glbllang?: string;
                        glbltitle?: string;
                        glblcontinue?: string;
                        glbllimit?: limit;
                        glblprop?: OneOrMore<"lllang" | "lltitle">;
                        glbldir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Links
                     */
                    interface Links extends Purge {
                        generator?: "links";
                        gplnamespace?: namespace | namespace[];
                        gpllimit?: limit;
                        gplcontinue?: string;
                        gpltitles?: string | string[];
                        gpldir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Linkshere
                     */
                    interface LinksHere extends Purge {
                        generator?: "linkshere";
                        glhprop?: OneOrMore<"pageid" | "redirect" | "title">;
                        glhnamespace?: namespace | namespace[];
                        glhshow?: OneOrMore<"!redirect" | "redirect">;
                        glhlimit?: limit;
                        glhcontinue?: string;
                    }

                    interface MessageCollection extends Purge {
                        generator?: "messagecollection";
                        gmcgroup: string;
                        gmclanguage?: string;
                        gmclimit?: limit;
                        gmcoffset?: string;
                        gmcfilter?: string | string[];
                        gmcprop?: OneOrMore<
                            "definition" | "properties" | "tags" | "translation" | "revision"
                        >;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageViewInfo
                     */
                    interface MostViewed extends Purge {
                        generator?: "mostviewed";
                        gpvimmetric?: "pageviews";
                        gpvimlimit?: limit;
                        gpvimoffset?: number;
                    }

                    interface Oldreviewedpages extends Purge {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Pageswithprop
                     */
                    interface PagesWithProp extends Purge {
                        generator?: "pageswithprop";
                        gpwppropname: string;
                        gpwpprop?: OneOrMore<"ids" | "title" | "value">;
                        gpwpcontinue?: string;
                        gpwplimit?: limit;
                        gpwpdir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Prefixsearch
                     */
                    interface PrefixSearch extends Purge {
                        generator?: "prefixsearch";
                        gpssearch: string;
                        gpsnamespace?: namespace | namespace[];
                        gpslimit?: limit;
                        gpsoffset?: number;
                        gpsprofile?:
                            | "classic"
                            | "engine_autoselect"
                            | "fast-fuzzy"
                            | "fuzzy"
                            | "fuzzy-subphrases"
                            | "normal"
                            | "normal-subphrases"
                            | "strict";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageAssessments
                     */
                    interface ProjectPages extends Purge {
                        generator?: "projectpages";
                        gwppassessments?: boolean;
                        gwppprojects: string | string[];
                        gwpplimit?: limit;
                        gwppcontinue?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ProofreadPage/Index pagination API
                     */
                    interface ProofreadPagesInIndex extends Purge {
                        generator?: "proofreadpagesinindex";
                        gprppiiprop?: OneOrMore<
                            "formattedpagenumber" | "ids" | "title" | "formattedPageNumber"
                        >;
                        gprppiititle?: string;
                        gprppiipageid?: number;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Protectedtitles
                     */
                    interface ProtectedTitles extends Purge {
                        generator?: "protectedtitles";
                        gptnamespace?: namespace | namespace[];
                        gptlevel?: string | string[];
                        gptlimit?: limit;
                        gptdir?: "newer" | "older";
                        gptstart?: timestamp;
                        gptend?: timestamp;
                        gptprop?: OneOrMore<
                            | "comment"
                            | "expiry"
                            | "level"
                            | "parsedcomment"
                            | "timestamp"
                            | "user"
                            | "userid"
                        >;
                        gptcontinue?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Querypage
                     */
                    interface QueryPage extends Purge {
                        generator?: "querypage";
                        gqppage: string;
                        gqpoffset?: number;
                        gqplimit?: limit;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Random
                     */
                    interface Random extends Purge {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API
                     */
                    interface ReadingListEntries extends Purge {
                        generator?: "readinglistentries";
                        grlelists?: number | number[];
                        grlechangedsince?: timestamp;
                        grlesort?: "name" | "updated";
                        grledir?: "ascending" | "descending";
                        grlelimit?: limit;
                        grlecontinue?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Recentchanges
                     */
                    interface RecentChanges extends Purge {
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
                        grcslot?: "main" | "mediainfo";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Redirects
                     */
                    interface Redirects extends Purge {
                        generator?: "redirects";
                        grdprop?: OneOrMore<"fragment" | "pageid" | "title">;
                        grdnamespace?: namespace | namespace[];
                        grdshow?: OneOrMore<"!fragment" | "fragment">;
                        grdlimit?: limit;
                        grdcontinue?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Revisions
                     */
                    interface Revisions extends Purge {
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
                            | "application/vnd.php.serialized"
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
                            | "application/vnd.php.serialized"
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Search
                     */
                    interface Search extends Purge {
                        generator?: "search";
                        gsrsearch: string;
                        gsrnamespace?: namespace | namespace[];
                        gsrlimit?: limit;
                        gsroffset?: number;
                        gsrqiprofile?: string;
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Templates
                     */
                    interface Templates extends Purge {
                        generator?: "templates";
                        gtlnamespace?: namespace | namespace[];
                        gtllimit?: limit;
                        gtlcontinue?: string;
                        gtltemplates?: string | string[];
                        gtldir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Transcludedin
                     */
                    interface Transcludedin extends Purge {
                        generator?: "transcludedin";
                        gtiprop?: OneOrMore<"pageid" | "redirect" | "title">;
                        gtinamespace?: namespace | namespace[];
                        gtishow?: OneOrMore<"!redirect" | "redirect">;
                        gtilimit?: limit;
                        gticontinue?: string;
                    }

                    interface Unreviewedpages extends Purge {
                        generator?: "unreviewedpages";
                        gurstart?: string;
                        gurend?: string;
                        gurdir?: "ascending" | "descending";
                        gurnamespace?: namespace | namespace[];
                        gurfilterredir?: "all" | "nonredirects" | "redirects";
                        gurfilterlevel?: number;
                        gurlimit?: limit;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlist
                     */
                    interface Watchlist extends Purge {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlistraw
                     */
                    interface WatchlistRaw extends Purge {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Wikibase/API
                     */
                    interface WBListEntityUsage extends Purge {
                        generator?: "wblistentityusage";
                        gwbleuprop?: OneOrMore<"url">;
                        gwbleuaspect?: OneOrMore<"C" | "D" | "L" | "O" | "S" | "T" | "X">;
                        gwbleuentities: string | string[];
                        gwbleulimit?: limit;
                        gwbleucontinue?: string;
                    }

                    /**
                     * @private
                     */
                    interface WBSearch extends Purge {
                        generator?: "wbsearch";
                        gwbssearch: string;
                        gwbslanguage?: string;
                        gwbsstrictlanguage?: boolean;
                        gwbstype?: string;
                        gwbslimit?: limit;
                        gwbsprofile?: "default" | "language";
                    }

                    interface WikiLambdaFnSearch extends Purge {
                        generator?: "wikilambdafn_search";
                        gwikilambdafn_zfunction_id?: string;
                        gwikilambdafn_type?: string;
                        gwikilambdafn_limit?: limit;
                        gwikilambdafn_continue?: string;
                    }

                    interface WikiLambdaLoadZObjects extends Purge {
                        generator?: "wikilambdaload_zobjects";
                        gwikilambdaload_zids: string | string[];
                        gwikilambdaload_revisions?: string | string[];
                        gwikilambdaload_language?: string;
                        gwikilambdaload_get_dependencies?: boolean;
                    }

                    interface WikiLambdaSearchLabels extends Purge {
                        generator?: "wikilambdasearch_labels";
                        gwikilambdasearch_search?: string;
                        gwikilambdasearch_language: string;
                        gwikilambdasearch_nofallback?: boolean;
                        gwikilambdasearch_exact?: boolean;
                        gwikilambdasearch_type?: string;
                        gwikilambdasearch_return_type?: string;
                        gwikilambdasearch_strict_return_type?: boolean;
                        gwikilambdasearch_limit?: limit;
                        gwikilambdasearch_continue?: string;
                    }
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Query
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Meta
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Properties
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Lists
                 */
                interface Query extends Params {
                    action?: "query";
                    prop?: string | string[];
                    list?: string | string[];
                    meta?: string | string[];
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
                    generator?: string;
                    redirects?: boolean;
                    converttitles?: boolean;
                }

                namespace Query {
                    namespace Prop {
                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categories
                         */
                        interface Categories extends Query {
                            clprop?: OneOrMore<"hidden" | "sortkey" | "timestamp">;
                            clshow?: OneOrMore<"!hidden" | "hidden">;
                            cllimit?: limit;
                            clcontinue?: string;
                            clcategories?: string | string[];
                            cldir?: "ascending" | "descending";
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categoryinfo
                         */
                        interface CategoryInfo extends Query {
                            cicontinue?: string;
                        }

                        interface CirrusBuildDoc extends Query {
                            cbbuilders?: OneOrMore<"content" | "links">;
                            cblimiterprofile?: string;
                        }

                        interface CirrusCompSuggestBuildDoc extends Query {
                            csbmethod?: string;
                        }

                        interface CirrusDoc extends Query {
                            cdincludes?: string | string[];
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Contributors
                         */
                        interface Contributors extends Query {
                            pcgroup?: string | string[];
                            pcexcludegroup?: string | string[];
                            pcrights?: string | string[];
                            pcexcluderights?: string | string[];
                            pclimit?: limit;
                            pccontinue?: string;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GeoData#prop.3Dcoordinates
                         */
                        interface Coordinates extends Query {
                            colimit?: limit;
                            cocontinue?: string;
                            coprop?: OneOrMore<
                                "country" | "dim" | "globe" | "name" | "region" | "type"
                            >;
                            coprimary?: "all" | "primary" | "secondary";
                            codistancefrompoint?: string;
                            codistancefrompage?: string;
                        }

                        /**
                         * @private
                         */
                        // tslint:disable-next-line:no-empty-interface
                        interface DefaultContentForPage extends Query {}

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Deletedrevisions
                         */
                        interface DeletedRevisions extends Query {
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
                                | "application/vnd.php.serialized"
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
                                | "application/vnd.php.serialized"
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
                        interface Description extends Query {
                            desccontinue?: number;
                            descprefersource?: "central" | "local";
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Duplicatefiles
                         */
                        interface DuplicateFiles extends Query {
                            dflimit?: limit;
                            dfcontinue?: string;
                            dfdir?: "ascending" | "descending";
                            dflocalonly?: boolean;
                        }

                        interface EntityTerms extends Query {
                            wbetcontinue?: number;
                            wbetlanguage?: string;
                            wbetterms?: OneOrMore<"alias" | "description" | "label">;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Extlinks
                         */
                        interface ExtLinks extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:TextExtracts#API
                         */
                        interface Extracts extends Query {
                            exchars?: number;
                            exsentences?: number;
                            exlimit?: limit;
                            exintro?: boolean;
                            explaintext?: boolean;
                            exsectionformat?: "plain" | "raw" | "wiki";
                            excontinue?: number;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Fileusage
                         */
                        interface FileUsage extends Query {
                            fuprop?: OneOrMore<"pageid" | "redirect" | "title">;
                            funamespace?: namespace | namespace[];
                            fushow?: OneOrMore<"!redirect" | "redirect">;
                            fulimit?: limit;
                            fucontinue?: string;
                        }

                        // tslint:disable-next-line:no-empty-interface
                        interface Flagged extends Query {}

                        /**
                         * @deprecated
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:Flow/API#action.3Dquery.26prop.3Dflowinfo
                         */
                        // tslint:disable-next-line:no-empty-interface
                        interface FlowInfo extends Query {}

                        interface GlobalUsage extends Query {
                            guprop?: OneOrMore<"namespace" | "pageid" | "url">;
                            gulimit?: limit;
                            gunamespace?: namespace | namespace[];
                            gusite?: string | string[];
                            gucontinue?: string;
                            gufilterlocal?: boolean;
                        }

                        interface GrowthImageSuggestionData extends Query {
                            gisdtasktype?: "image-recommendation" | "section-image-recommendation";
                            gisdcontinue?: string;
                        }

                        interface ImageForPage extends Query {
                            prppifpprop?: OneOrMore<
                                "filename" | "fullsize" | "responsiveimages" | "size"
                            >;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Imageinfo
                         */
                        interface ImageInfo extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Images
                         */
                        interface Images extends Query {
                            imlimit?: limit;
                            imcontinue?: string;
                            imimages?: string | string[];
                            imdir?: "ascending" | "descending";
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Info
                         */
                        interface Info extends Query {
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
                        interface IsReviewed extends Query {}

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Iwlinks
                         */
                        // tslint:disable-next-line:interface-name
                        interface IWLinks extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Langlinks
                         */
                        interface LangLinks extends Query {
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
                        interface LangLinksCount extends Query {}

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Links
                         */
                        interface Links extends Query {
                            plnamespace?: namespace | namespace[];
                            pllimit?: limit;
                            plcontinue?: string;
                            pltitles?: string | string[];
                            pldir?: "ascending" | "descending";
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Linkshere
                         */
                        interface LinksHere extends Query {
                            lhprop?: OneOrMore<"pageid" | "redirect" | "title">;
                            lhnamespace?: namespace | namespace[];
                            lhshow?: OneOrMore<"!redirect" | "redirect">;
                            lhlimit?: limit;
                            lhcontinue?: string;
                        }

                        /**
                         * @private
                         */
                        interface MapData extends Query {
                            mpdgroups?: string;
                            mpdlimit?: limit;
                            mpdcontinue?: number;
                        }

                        // tslint:disable-next-line:no-empty-interface
                        interface MMContent extends Query {}

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageAssessments
                         */
                        interface PageAssessments extends Query {
                            pacontinue?: string;
                            palimit?: limit;
                            pasubprojects?: boolean;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageImages#API
                         */
                        interface PageImages extends Query {
                            piprop?: OneOrMore<"name" | "original" | "thumbnail">;
                            pithumbsize?: number;
                            pilimit?: limit;
                            pilicense?: "any" | "free";
                            picontinue?: number;
                            pilangcode?: string;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Pageprops
                         */
                        interface PageProps extends Query {
                            ppcontinue?: string;
                            ppprop?: string | string[];
                        }

                        interface PageTerms extends Query {
                            wbptcontinue?: number;
                            wbptlanguage?: string;
                            wbptterms?: OneOrMore<"alias" | "description" | "label">;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageViewInfo
                         */
                        interface PageViews extends Query {
                            pvipmetric?: "pageviews";
                            pvipdays?: number;
                            pvipcontinue?: string;
                        }

                        // tslint:disable-next-line:no-empty-interface
                        interface Proofread extends Query {}

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Redirects
                         */
                        interface Redirects extends Query {
                            rdprop?: OneOrMore<"fragment" | "pageid" | "title">;
                            rdnamespace?: namespace | namespace[];
                            rdshow?: OneOrMore<"!fragment" | "fragment">;
                            rdlimit?: limit;
                            rdcontinue?: string;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Revisions
                         */
                        interface Revisions extends Query {
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
                                | "application/vnd.php.serialized"
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
                                | "application/vnd.php.serialized"
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Stashimageinfo
                         */
                        interface StashImageInfo extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Templates
                         */
                        interface Templates extends Query {
                            tlnamespace?: namespace | namespace[];
                            tllimit?: limit;
                            tlcontinue?: string;
                            tltemplates?: string | string[];
                            tldir?: "ascending" | "descending";
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Transcludedin
                         */
                        interface Transcludedin extends Query {
                            tiprop?: OneOrMore<"pageid" | "redirect" | "title">;
                            tinamespace?: namespace | namespace[];
                            tishow?: OneOrMore<"!redirect" | "redirect">;
                            tilimit?: limit;
                            ticontinue?: string;
                        }

                        // tslint:disable-next-line:no-empty-interface
                        interface TranscodeStatus extends Query {}

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Videoinfo
                         */
                        interface VideoInfo extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Wikibase/API#wbentityusage
                         */
                        interface WBEntityUsage extends Query {
                            wbeuprop?: OneOrMore<"url">;
                            wbeuaspect?: OneOrMore<"C" | "D" | "L" | "O" | "S" | "T" | "X">;
                            wbeuentities?: string | string[];
                            wbeulimit?: limit;
                            wbeucontinue?: string;
                        }
                    }

                    namespace List {
                        interface AbuseFilters extends Query {
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

                        interface AbuseLog extends Query {
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
                                | "wiki"
                            >;
                            aflwiki?: string;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:UploadWizard
                         */
                        interface AllCampaigns extends Query {
                            uwcenabledonly?: boolean;
                            uwclimit?: limit;
                            uwccontinue?: string;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allcategories
                         */
                        interface AllCategories extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alldeletedrevisions
                         */
                        interface AllDeletedRevisions extends Query {
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
                                | "application/vnd.php.serialized"
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
                                | "application/vnd.php.serialized"
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allfileusages
                         */
                        interface AllFileUsages extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allimages
                         */
                        interface AllImages extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alllinks
                         */
                        interface AllLinks extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allpages
                         */
                        interface AllPages extends Query {
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
                            apprlevel?: string | string[];
                            apprfiltercascade?: "all" | "cascading" | "noncascading";
                            apprexpiry?: "all" | "definite" | "indefinite";
                            aplimit?: limit;
                            apdir?: "ascending" | "descending";
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allredirects
                         */
                        interface AllRedirects extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allrevisions
                         */
                        interface AllRevisions extends Query {
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
                                | "application/vnd.php.serialized"
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
                                | "application/vnd.php.serialized"
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alltransclusions
                         */
                        interface AllTransclusions extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allusers
                         */
                        interface AllUsers extends Query {
                            aufrom?: string;
                            auto?: string;
                            auprefix?: string;
                            audir?: "ascending" | "descending";
                            augroup?: string | string[];
                            auexcludegroup?: string | string[];
                            aurights?: string | string[];
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

                        interface AutomaticTranslationDenseLanguages extends Query {
                            "qid": string;
                            "section-titles"?: boolean;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Backlinks
                         */
                        interface Backlinks extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:BetaFeatures
                         */
                        interface BetaFeatures extends Query {
                            bfcounts?: string;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Blocks
                         */
                        interface Blocks extends Query {
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
                                | "!account"
                                | "!ip"
                                | "!range"
                                | "!temp"
                                | "account"
                                | "ip"
                                | "range"
                                | "temp"
                            >;
                            bkcontinue?: string;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categorymembers
                         */
                        interface CategoryMembers extends Query {
                            cmtitle?: string;
                            cmpageid?: number;
                            cmprop?: OneOrMore<
                                "ids" | "sortkey" | "sortkeyprefix" | "timestamp" | "title" | "type"
                            >;
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

                        interface CentralNoticeActiveCampaigns extends Query {
                            cnacincludefuture?: boolean;
                        }

                        interface CentralNoticeLogs extends Query {
                            campaign?: string;
                            user?: string;
                            limit?: limit;
                            offset?: number;
                            start?: timestamp;
                            end?: timestamp;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:CheckUser#API
                         */
                        interface CheckUser extends Query {
                            curequest: "actions" | "ipusers" | "userips" | "edits";
                            cutarget: string;
                            cureason: string;
                            culimit?: limit;
                            cutimecond?: string;
                            cuxff?: string;
                            cutoken?: string;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:CheckUser#API
                         */
                        interface CheckUserLog extends Query {
                            culuser?: string;
                            cultarget?: string;
                            culreason?: string;
                            cullimit?: limit;
                            culdir?: "newer" | "older";
                            culfrom?: timestamp;
                            culto?: timestamp;
                            culcontinue?: string;
                        }

                        interface Configuredpages extends Query {
                            cpstart?: number;
                            cpend?: number;
                            cpdir?: "newer" | "older";
                            cpnamespace?: namespace | namespace[];
                            cpdefault?: "latest" | "stable";
                            cpautoreview?: "none" | "sysop";
                            cplimit?: limit;
                        }

                        interface ContentTranslation extends Query {
                            translationid?: string;
                            from?: string;
                            to?: string;
                            sourcetitle?: string;
                            sourcesectiontitle?: string;
                            limit?: limit;
                            offset?: string;
                            type?: "draft" | "published";
                            usecase?:
                                | "desktop-editor-draft"
                                | "translation-corpora-units"
                                | "unified-dashboard";
                        }

                        interface ContentTranslationCorpora extends Query {
                            translationid: number;
                            striphtml?: boolean;
                            types?: OneOrMore<"mt" | "source" | "user">;
                        }

                        interface ContentTranslationLangTrend extends Query {
                            source?: string;
                            target?: string;
                            interval?: "month" | "week";
                        }

                        // tslint:disable-next-line:no-empty-interface
                        interface ContentTranslationStats extends Query {}

                        interface ContentTranslationSuggestions extends Query {
                            from?: string;
                            to?: string;
                            listid?: string;
                            limit?: limit;
                            offset?: string;
                            seed?: number;
                        }

                        interface CXPublishedTranslations extends Query {
                            from?: string;
                            to?: string;
                            limit?: limit;
                            offset?: string;
                        }

                        interface CXTranslatorStats extends Query {
                            translator?: string;
                        }

                        /**
                         * @deprecated
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Deletedrevs
                         */
                        interface Deletedrevs extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Embeddedin
                         */
                        interface Embeddedin extends Query {
                            eititle?: string;
                            eipageid?: number;
                            eicontinue?: string;
                            einamespace?: namespace | namespace[];
                            eidir?: "ascending" | "descending";
                            eifilterredir?: "all" | "nonredirects" | "redirects";
                            eilimit?: limit;
                        }

                        /**
                         * @private
                         */
                        interface ExtDistBranches extends Query {
                            edbexts?: string | string[];
                            edbskins?: OneOrMore<
                                | "2018"
                                | "Aether"
                                | "Amethyst"
                                | "Anisa"
                                | "BlueSky"
                                | "BlueSpiceCalumma"
                                | "BlueSpiceDiscovery"
                                | "Bouquet"
                                | "Cavendish"
                                | "CologneBlue"
                                | "Cosmos"
                                | "DeskMessMirrored"
                                | "Dusk"
                                | "DuskToDawn"
                                | "Empty"
                                | "Example"
                                | "Foreground"
                                | "Freo"
                                | "Gamepress"
                                | "GreyStuff"
                                | "GuMaxDD"
                                | "HasSomeColours"
                                | "Mask"
                                | "Material"
                                | "MediaWikiWordpressThemes"
                                | "Metrolook"
                                | "MinervaNeue"
                                | "Mirage"
                                | "Modern"
                                | "MonoBook"
                                | "Nimbus"
                                | "Nostalgia"
                                | "Pivot"
                                | "Poncho"
                                | "Reflection"
                                | "Refreshed"
                                | "Schulenburg"
                                | "Splash"
                                | "Tempo"
                                | "Timeless"
                                | "Truglass"
                                | "TuleapSkin"
                                | "Vector"
                                | "WMAU"
                                | "WPtouch"
                                | "WikimediaApiPortal"
                                | "WoOgLeShades"
                                | "apex"
                                | "erudite"
                                | "mediawiki-strapping"
                                | "p2wiki"
                                | "shared"
                                | "webplatform"
                            >;
                        }

                        // tslint:disable-next-line:no-empty-interface
                        interface ExtDistRepos extends Query {}

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Exturlusage
                         */
                        interface ExtUrlUsage extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Filearchive
                         */
                        interface Filearchive extends Query {
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

                        interface GadgetCategories extends Query {
                            gcprop?: OneOrMore<"members" | "name" | "title">;
                            gcnames?: string | string[];
                        }

                        interface Gadgets extends Query {
                            gaprop?: OneOrMore<"desc" | "id" | "metadata">;
                            gacategories?: string | string[];
                            gaids?: string | string[];
                            gaallowedonly?: boolean;
                            gaenabledonly?: boolean;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GeoData#list.3Dgeosearch
                         */
                        interface GeoSearch extends Query {
                            gscoord?: string;
                            gspage?: string;
                            gsbbox?: string;
                            gsradius?: number;
                            gsmaxdim?: number;
                            gssort?: "distance" | "relevance";
                            gslimit?: limit;
                            gsglobe?: "earth";
                            gsnamespace?: namespace | namespace[];
                            gsprop?: OneOrMore<
                                "country" | "dim" | "globe" | "name" | "region" | "type"
                            >;
                            gsprimary?: "all" | "primary" | "secondary";
                            gsdebug?: boolean;
                        }

                        interface GlobalAllUsers extends Query {
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
                                | "u4c-member"
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
                                | "u4c-member"
                                | "vrt-permissions"
                                | "wmf-email-block-override"
                                | "wmf-researcher"
                            >;
                            aguprop?: OneOrMore<"existslocally" | "groups" | "lockinfo">;
                            agulimit?: limit;
                            aguexcludenamed?: boolean;
                            aguexcludetemp?: boolean;
                        }

                        interface GlobalBlocks extends Query {
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
                                | "by"
                                | "expiry"
                                | "id"
                                | "range"
                                | "reason"
                                | "target"
                                | "timestamp"
                                | "address"
                            >;
                        }

                        interface GlobalGroups extends Query {
                            ggpprop?: OneOrMore<"rights">;
                        }

                        // tslint:disable-next-line:no-empty-interface
                        interface GrowthMentorList extends Query {}

                        interface GrowthMentorMentee extends Query {
                            gemmmentor: string;
                        }

                        // tslint:disable-next-line:no-empty-interface
                        interface GrowthStarredMentees extends Query {}

                        /**
                         * @private
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GrowthExperiments#API
                         */
                        interface GrowthTasks extends Query {
                            gttasktypes?: OneOrMore<
                                | "copyedit"
                                | "expand"
                                | "image-recommendation"
                                | "link-recommendation"
                                | "links"
                                | "references"
                                | "section-image-recommendation"
                                | "update"
                            >;
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Imageusage
                         */
                        interface ImageUsage extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Iwbacklinks
                         */
                        // tslint:disable-next-line:interface-name
                        interface IWBacklinks extends Query {
                            iwblprefix?: string;
                            iwbltitle?: string;
                            iwblcontinue?: string;
                            iwbllimit?: limit;
                            iwblprop?: OneOrMore<"iwprefix" | "iwtitle">;
                            iwbldir?: "ascending" | "descending";
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Langbacklinks
                         */
                        interface LangBacklinks extends Query {
                            lbllang?: string;
                            lbltitle?: string;
                            lblcontinue?: string;
                            lbllimit?: limit;
                            lblprop?: OneOrMore<"lllang" | "lltitle">;
                            lbldir?: "ascending" | "descending";
                        }

                        interface LintErrors extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Logevents
                         */
                        interface LogEvents extends Query {
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
                            letype?: string;
                            leaction?: string;
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

                        interface MessageCollection extends Query {
                            mcgroup: string;
                            mclanguage?: string;
                            mclimit?: limit;
                            mcoffset?: string;
                            mcfilter?: string | string[];
                            mcprop?: OneOrMore<
                                "definition" | "properties" | "tags" | "translation" | "revision"
                            >;
                        }

                        /**
                         * @private
                         */
                        // tslint:disable-next-line:no-empty-interface
                        interface MessageGroupSubscription extends Query {}

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageViewInfo
                         */
                        interface MostViewed extends Query {
                            pvimmetric?: "pageviews";
                            pvimlimit?: limit;
                            pvimoffset?: number;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:mystashedfiles
                         */
                        interface MyStashedFiles extends Query {
                            msfprop?: OneOrMore<"size" | "type">;
                            msflimit?: limit;
                            msfcontinue?: string;
                        }

                        interface Oldreviewedpages extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Pagepropnames
                         */
                        interface PagePropNames extends Query {
                            ppncontinue?: string;
                            ppnlimit?: limit;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Pageswithprop
                         */
                        interface PagesWithProp extends Query {
                            pwppropname: string;
                            pwpprop?: OneOrMore<"ids" | "title" | "value">;
                            pwpcontinue?: string;
                            pwplimit?: limit;
                            pwpdir?: "ascending" | "descending";
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Prefixsearch
                         */
                        interface PrefixSearch extends Query {
                            pssearch: string;
                            psnamespace?: namespace | namespace[];
                            pslimit?: limit;
                            psoffset?: number;
                            psprofile?:
                                | "classic"
                                | "engine_autoselect"
                                | "fast-fuzzy"
                                | "fuzzy"
                                | "fuzzy-subphrases"
                                | "normal"
                                | "normal-subphrases"
                                | "strict";
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageAssessments
                         */
                        interface ProjectPages extends Query {
                            wppassessments?: boolean;
                            wppprojects: string | string[];
                            wpplimit?: limit;
                            wppcontinue?: string;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageAssessments
                         */
                        interface Projects extends Query {
                            pjsubprojects?: boolean;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ProofreadPage/Index pagination API
                         */
                        interface ProofreadPagesInIndex extends Query {
                            prppiiprop?: OneOrMore<
                                "formattedpagenumber" | "ids" | "title" | "formattedPageNumber"
                            >;
                            prppiititle?: string;
                            prppiipageid?: number;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Protectedtitles
                         */
                        interface ProtectedTitles extends Query {
                            ptnamespace?: namespace | namespace[];
                            ptlevel?: string | string[];
                            ptlimit?: limit;
                            ptdir?: "newer" | "older";
                            ptstart?: timestamp;
                            ptend?: timestamp;
                            ptprop?: OneOrMore<
                                | "comment"
                                | "expiry"
                                | "level"
                                | "parsedcomment"
                                | "timestamp"
                                | "user"
                                | "userid"
                            >;
                            ptcontinue?: string;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Querypage
                         */
                        interface QueryPage extends Query {
                            qppage: string;
                            qpoffset?: number;
                            qplimit?: limit;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Random
                         */
                        interface Random extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API
                         */
                        interface ReadingListEntries extends Query {
                            rlelists?: number | number[];
                            rlechangedsince?: timestamp;
                            rlesort?: "name" | "updated";
                            rledir?: "ascending" | "descending";
                            rlelimit?: limit;
                            rlecontinue?: string;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Recentchanges
                         */
                        interface RecentChanges extends Query {
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
                            rcslot?: "main" | "mediainfo";
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Search
                         */
                        interface Search extends Query {
                            srsearch: string;
                            srnamespace?: namespace | namespace[];
                            srlimit?: limit;
                            sroffset?: number;
                            srqiprofile?: string;
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Tags
                         */
                        interface Tags extends Query {
                            tgcontinue?: string;
                            tglimit?: limit;
                            tgprop?: OneOrMore<
                                | "active"
                                | "defined"
                                | "description"
                                | "displayname"
                                | "hitcount"
                                | "source"
                            >;
                        }

                        interface Threads extends Query {
                            thstartid?: number;
                            thendid?: number;
                            thdir?: "newer" | "older";
                            thshowdeleted?: boolean;
                            thlimit?: limit;
                            thprop?: OneOrMore<
                                | "ancestor"
                                | "author"
                                | "created"
                                | "id"
                                | "modified"
                                | "page"
                                | "parent"
                                | "reactions"
                                | "replies"
                                | "rootid"
                                | "signature"
                                | "subject"
                                | "summaryid"
                                | "type"
                            >;
                            thpage?: string | string[];
                            thauthor?: string | string[];
                            throot?: string | string[];
                            thsummary?: string | string[];
                            thid?: string | string[];
                            thrender?: boolean;
                            threnderlevel?: number;
                            threnderthreadpos?: number;
                            threnderthreadcount?: number;
                            threndermaxthreadcount?: string;
                            threndermaxdepth?: string;
                            threnderstartrepliesat?: string;
                        }

                        interface Unreviewedpages extends Query {
                            urstart?: string;
                            urend?: string;
                            urdir?: "ascending" | "descending";
                            urnamespace?: namespace | namespace[];
                            urfilterredir?: "all" | "nonredirects" | "redirects";
                            urfilterlevel?: number;
                            urlimit?: limit;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Usercontribs
                         */
                        interface UserContribs extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Users
                         */
                        interface Users extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlist
                         */
                        interface Watchlist extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlistraw
                         */
                        interface WatchlistRaw extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Wikibase/API
                         */
                        interface WBListEntityUsage extends Query {
                            wbleuprop?: OneOrMore<"url">;
                            wbleuaspect?: OneOrMore<"C" | "D" | "L" | "O" | "S" | "T" | "X">;
                            wbleuentities: string | string[];
                            wbleulimit?: limit;
                            wbleucontinue?: string;
                        }

                        /**
                         * @private
                         */
                        interface WBSearch extends Query {
                            wbssearch: string;
                            wbslanguage?: string;
                            wbsstrictlanguage?: boolean;
                            wbstype?: string;
                            wbslimit?: limit;
                            wbsprofile?: "default" | "language";
                        }

                        interface WBSubscribers extends Query {
                            wblsentities: string | string[];
                            wblsprop?: OneOrMore<"url">;
                            wblslimit?: limit;
                            wblscontinue?: string;
                        }

                        interface WikiLambdaFnSearch extends Query {
                            wikilambdafn_zfunction_id?: string;
                            wikilambdafn_type?: string;
                            wikilambdafn_limit?: limit;
                            wikilambdafn_continue?: string;
                        }

                        interface WikiLambdaLoadZObjects extends Query {
                            wikilambdaload_zids: string | string[];
                            wikilambdaload_revisions?: string | string[];
                            wikilambdaload_language?: string;
                            wikilambdaload_get_dependencies?: boolean;
                        }

                        interface WikiLambdaSearchLabels extends Query {
                            wikilambdasearch_search?: string;
                            wikilambdasearch_language: string;
                            wikilambdasearch_nofallback?: boolean;
                            wikilambdasearch_exact?: boolean;
                            wikilambdasearch_type?: string;
                            wikilambdasearch_return_type?: string;
                            wikilambdasearch_strict_return_type?: boolean;
                            wikilambdasearch_limit?: limit;
                            wikilambdasearch_continue?: string;
                        }

                        interface WikiSets extends Query {
                            wsfrom?: string;
                            wsprop?: OneOrMore<"type" | "wikisincluded" | "wikisnotincluded">;
                            wslimit?: limit;
                            wsorderbyname?: boolean;
                        }
                    }

                    namespace Meta {
                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allmessages
                         */
                        interface AllMessages extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Authmanagerinfo
                         */
                        interface AuthManagerInfo extends Query {
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

                        interface Babel extends Query {
                            babuser: string;
                        }

                        interface CommunityConfiguration extends Query {
                            ccrprovider:
                                | "AutoModerator"
                                | "CommunityUpdates"
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
                        interface CXDeletedTranslations extends Query {
                            dtafter?: timestamp;
                            dtnamespace?: namespace;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ApiFeatureUsage
                         */
                        interface FeatureUsage extends Query {
                            afustart?: timestamp;
                            afuend?: timestamp;
                            afuagent?: string;
                            afufeatures?: string | string[];
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Filerepoinfo
                         */
                        interface FileRepoInfo extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GlobalPreferences/API
                         */
                        interface GlobalPreferences extends Query {
                            gprprop?: OneOrMore<"localoverrides" | "preferences">;
                        }

                        interface GlobalRenameStatus extends Query {
                            grsuser?: string;
                        }

                        interface GlobalUserInfo extends Query {
                            guiuser?: string;
                            guiid?: number;
                            guiprop?: OneOrMore<
                                "editcount" | "groups" | "merged" | "rights" | "unattached"
                            >;
                        }

                        // tslint:disable-next-line:no-empty-interface
                        interface GrowthMenteeStatus extends Query {}

                        // tslint:disable-next-line:no-empty-interface
                        interface GrowthMentorStatus extends Query {}

                        /**
                         * @private
                         */
                        interface GrowthNextSuggestedTaskType extends Query {
                            gnsttactivetasktype:
                                | "copyedit"
                                | "expand"
                                | "image-recommendation"
                                | "link-recommendation"
                                | "links"
                                | "references"
                                | "section-image-recommendation"
                                | "update";
                        }

                        interface Languageinfo extends Query {
                            liprop?: OneOrMore<
                                | "autonym"
                                | "bcp47"
                                | "code"
                                | "dir"
                                | "fallbacks"
                                | "name"
                                | "variantnames"
                                | "variants"
                            >;
                            licode?: string | string[];
                            licontinue?: string;
                        }

                        interface LanguageStats extends Query {
                            lsoffset?: string;
                            lslanguage: string;
                            lsgroup?: string;
                        }

                        // tslint:disable-next-line:no-empty-interface
                        interface LinterStats extends Query {}

                        interface ManageMessageGroups extends Query {
                            mmggroupId: string;
                            mmgmessageKey: string;
                            mmgchangesetName?: string;
                        }

                        interface MessageGroups extends Query {
                            mgdepth?: number;
                            mgfilter?: string | string[];
                            mgformat?: "flat" | "tree";
                            mgiconsize?: number;
                            mgprop?: OneOrMore<
                                | "class"
                                | "description"
                                | "exists"
                                | "icon"
                                | "id"
                                | "label"
                                | "namespace"
                                | "priority"
                                | "priorityforce"
                                | "prioritylangs"
                                | "sourcelanguage"
                                | "subscription"
                                | "workflowstates"
                            >;
                            mgroot?: string;
                            mglanguageFilter?: string;
                        }

                        interface MessageGroupStats extends Query {
                            mgsoffset?: string;
                            mgsgroup: string;
                            mgssuppresscomplete?: boolean;
                            mgssuppressempty?: boolean;
                        }

                        interface MessageTranslations extends Query {
                            mttitle: string;
                            mtoffset?: number;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Echo_(Notifications)/API
                         */
                        interface Notifications extends Query {
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
                        interface OATH extends Query {
                            oathuser?: string;
                            oathreason?: string;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ORES
                         */
                        // tslint:disable-next-line:no-empty-interface
                        interface ORES extends Query {}

                        interface ProofreadInfo extends Query {
                            prpiprop?: OneOrMore<"namespaces" | "qualitylevels">;
                        }

                        /**
                         * @private
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API
                         */
                        interface ReadingLists extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Siteinfo
                         */
                        interface Siteinfo extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageViewInfo
                         */
                        interface SiteViews extends Query {
                            pvismetric?: "pageviews" | "uniques";
                            pvisdays?: number;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Tokens
                         */
                        interface Tokens extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Echo_(Notifications)/API
                         */
                        interface UnreadNotificationPages extends Query {
                            unpwikis?: string | string[];
                            unpgrouppages?: boolean;
                            unplimit?: limit;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Userinfo
                         */
                        interface UserInfo extends Query {
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

                        interface WBContentLanguages extends Query {
                            wbclcontext?: "monolingualtext" | "term" | "term-lexicographical";
                            wbclprop?: OneOrMore<"autonym" | "code" | "name">;
                        }

                        /**
                         * @private
                         */
                        // tslint:disable-next-line:no-empty-interface
                        interface WBDataBridgeConfig extends Query {}

                        interface Wikibase extends Query {
                            wbprop?: OneOrMore<"siteid" | "url">;
                        }

                        /**
                         * @private
                         */
                        // tslint:disable-next-line:no-empty-interface
                        interface WikimediaEditorTasksCounts extends Query {}
                    }

                    namespace Generator {
                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allcategories
                         */
                        interface AllCategories extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alldeletedrevisions
                         */
                        interface AllDeletedRevisions extends Query {
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
                                | "application/vnd.php.serialized"
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
                                | "application/vnd.php.serialized"
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allfileusages
                         */
                        interface AllFileUsages extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allimages
                         */
                        interface AllImages extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alllinks
                         */
                        interface AllLinks extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allpages
                         */
                        interface AllPages extends Query {
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
                            gapprlevel?: string | string[];
                            gapprfiltercascade?: "all" | "cascading" | "noncascading";
                            gapprexpiry?: "all" | "definite" | "indefinite";
                            gaplimit?: limit;
                            gapdir?: "ascending" | "descending";
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allredirects
                         */
                        interface AllRedirects extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allrevisions
                         */
                        interface AllRevisions extends Query {
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
                                | "application/vnd.php.serialized"
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
                                | "application/vnd.php.serialized"
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alltransclusions
                         */
                        interface AllTransclusions extends Query {
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

                        interface AutomaticTranslationDenseLanguages extends Query {
                            "generator"?: "automatictranslationdenselanguages";
                            "gqid": string;
                            "gsection-titles"?: boolean;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Backlinks
                         */
                        interface Backlinks extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categories
                         */
                        interface Categories extends Query {
                            generator?: "categories";
                            gclprop?: OneOrMore<"hidden" | "sortkey" | "timestamp">;
                            gclshow?: OneOrMore<"!hidden" | "hidden">;
                            gcllimit?: limit;
                            gclcontinue?: string;
                            gclcategories?: string | string[];
                            gcldir?: "ascending" | "descending";
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categorymembers
                         */
                        interface CategoryMembers extends Query {
                            generator?: "categorymembers";
                            gcmtitle?: string;
                            gcmpageid?: number;
                            gcmprop?: OneOrMore<
                                "ids" | "sortkey" | "sortkeyprefix" | "timestamp" | "title" | "type"
                            >;
                            gcmnamespace?: namespace | namespace[];
                            gcmtype?: OneOrMore<"file" | "page" | "subcat">;
                            gcmcontinue?: string;
                            gcmlimit?: limit;
                            gcmsort?: "sortkey" | "timestamp";
                            gcmdir?:
                                | "asc"
                                | "ascending"
                                | "desc"
                                | "descending"
                                | "newer"
                                | "older";
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

                        interface Configuredpages extends Query {
                            generator?: "configuredpages";
                            gcpstart?: number;
                            gcpend?: number;
                            gcpdir?: "newer" | "older";
                            gcpnamespace?: namespace | namespace[];
                            gcpdefault?: "latest" | "stable";
                            gcpautoreview?: "none" | "sysop";
                            gcplimit?: limit;
                        }

                        interface ContentTranslation extends Query {
                            generator?: "contenttranslation";
                            gtranslationid?: string;
                            gfrom?: string;
                            gto?: string;
                            gsourcetitle?: string;
                            gsourcesectiontitle?: string;
                            glimit?: limit;
                            goffset?: string;
                            gtype?: "draft" | "published";
                            gusecase?:
                                | "desktop-editor-draft"
                                | "translation-corpora-units"
                                | "unified-dashboard";
                        }

                        interface ContentTranslationSuggestions extends Query {
                            generator?: "contenttranslationsuggestions";
                            gfrom?: string;
                            gto?: string;
                            glistid?: string;
                            glimit?: limit;
                            goffset?: string;
                            gseed?: number;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Deletedrevisions
                         */
                        interface DeletedRevisions extends Query {
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
                                | "application/vnd.php.serialized"
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
                                | "application/vnd.php.serialized"
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Duplicatefiles
                         */
                        interface DuplicateFiles extends Query {
                            generator?: "duplicatefiles";
                            gdflimit?: limit;
                            gdfcontinue?: string;
                            gdfdir?: "ascending" | "descending";
                            gdflocalonly?: boolean;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Embeddedin
                         */
                        interface Embeddedin extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Exturlusage
                         */
                        interface ExtUrlUsage extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Fileusage
                         */
                        interface FileUsage extends Query {
                            generator?: "fileusage";
                            gfuprop?: OneOrMore<"pageid" | "redirect" | "title">;
                            gfunamespace?: namespace | namespace[];
                            gfushow?: OneOrMore<"!redirect" | "redirect">;
                            gfulimit?: limit;
                            gfucontinue?: string;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GeoData#list.3Dgeosearch
                         */
                        interface GeoSearch extends Query {
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
                            ggsprop?: OneOrMore<
                                "country" | "dim" | "globe" | "name" | "region" | "type"
                            >;
                            ggsprimary?: "all" | "primary" | "secondary";
                            ggsdebug?: boolean;
                        }

                        /**
                         * @private
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GrowthExperiments#API
                         */
                        interface GrowthTasks extends Query {
                            generator?: "growthtasks";
                            ggttasktypes?: OneOrMore<
                                | "copyedit"
                                | "expand"
                                | "image-recommendation"
                                | "link-recommendation"
                                | "links"
                                | "references"
                                | "section-image-recommendation"
                                | "update"
                            >;
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Images
                         */
                        interface Images extends Query {
                            generator?: "images";
                            gimlimit?: limit;
                            gimcontinue?: string;
                            gimimages?: string | string[];
                            gimdir?: "ascending" | "descending";
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Imageusage
                         */
                        interface ImageUsage extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Iwbacklinks
                         */
                        // tslint:disable-next-line:interface-name
                        interface IWBacklinks extends Query {
                            generator?: "iwbacklinks";
                            giwblprefix?: string;
                            giwbltitle?: string;
                            giwblcontinue?: string;
                            giwbllimit?: limit;
                            giwblprop?: OneOrMore<"iwprefix" | "iwtitle">;
                            giwbldir?: "ascending" | "descending";
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Langbacklinks
                         */
                        interface LangBacklinks extends Query {
                            generator?: "langbacklinks";
                            glbllang?: string;
                            glbltitle?: string;
                            glblcontinue?: string;
                            glbllimit?: limit;
                            glblprop?: OneOrMore<"lllang" | "lltitle">;
                            glbldir?: "ascending" | "descending";
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Links
                         */
                        interface Links extends Query {
                            generator?: "links";
                            gplnamespace?: namespace | namespace[];
                            gpllimit?: limit;
                            gplcontinue?: string;
                            gpltitles?: string | string[];
                            gpldir?: "ascending" | "descending";
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Linkshere
                         */
                        interface LinksHere extends Query {
                            generator?: "linkshere";
                            glhprop?: OneOrMore<"pageid" | "redirect" | "title">;
                            glhnamespace?: namespace | namespace[];
                            glhshow?: OneOrMore<"!redirect" | "redirect">;
                            glhlimit?: limit;
                            glhcontinue?: string;
                        }

                        interface MessageCollection extends Query {
                            generator?: "messagecollection";
                            gmcgroup: string;
                            gmclanguage?: string;
                            gmclimit?: limit;
                            gmcoffset?: string;
                            gmcfilter?: string | string[];
                            gmcprop?: OneOrMore<
                                "definition" | "properties" | "tags" | "translation" | "revision"
                            >;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageViewInfo
                         */
                        interface MostViewed extends Query {
                            generator?: "mostviewed";
                            gpvimmetric?: "pageviews";
                            gpvimlimit?: limit;
                            gpvimoffset?: number;
                        }

                        interface Oldreviewedpages extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Pageswithprop
                         */
                        interface PagesWithProp extends Query {
                            generator?: "pageswithprop";
                            gpwppropname: string;
                            gpwpprop?: OneOrMore<"ids" | "title" | "value">;
                            gpwpcontinue?: string;
                            gpwplimit?: limit;
                            gpwpdir?: "ascending" | "descending";
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Prefixsearch
                         */
                        interface PrefixSearch extends Query {
                            generator?: "prefixsearch";
                            gpssearch: string;
                            gpsnamespace?: namespace | namespace[];
                            gpslimit?: limit;
                            gpsoffset?: number;
                            gpsprofile?:
                                | "classic"
                                | "engine_autoselect"
                                | "fast-fuzzy"
                                | "fuzzy"
                                | "fuzzy-subphrases"
                                | "normal"
                                | "normal-subphrases"
                                | "strict";
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageAssessments
                         */
                        interface ProjectPages extends Query {
                            generator?: "projectpages";
                            gwppassessments?: boolean;
                            gwppprojects: string | string[];
                            gwpplimit?: limit;
                            gwppcontinue?: string;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ProofreadPage/Index pagination API
                         */
                        interface ProofreadPagesInIndex extends Query {
                            generator?: "proofreadpagesinindex";
                            gprppiiprop?: OneOrMore<
                                "formattedpagenumber" | "ids" | "title" | "formattedPageNumber"
                            >;
                            gprppiititle?: string;
                            gprppiipageid?: number;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Protectedtitles
                         */
                        interface ProtectedTitles extends Query {
                            generator?: "protectedtitles";
                            gptnamespace?: namespace | namespace[];
                            gptlevel?: string | string[];
                            gptlimit?: limit;
                            gptdir?: "newer" | "older";
                            gptstart?: timestamp;
                            gptend?: timestamp;
                            gptprop?: OneOrMore<
                                | "comment"
                                | "expiry"
                                | "level"
                                | "parsedcomment"
                                | "timestamp"
                                | "user"
                                | "userid"
                            >;
                            gptcontinue?: string;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Querypage
                         */
                        interface QueryPage extends Query {
                            generator?: "querypage";
                            gqppage: string;
                            gqpoffset?: number;
                            gqplimit?: limit;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Random
                         */
                        interface Random extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API
                         */
                        interface ReadingListEntries extends Query {
                            generator?: "readinglistentries";
                            grlelists?: number | number[];
                            grlechangedsince?: timestamp;
                            grlesort?: "name" | "updated";
                            grledir?: "ascending" | "descending";
                            grlelimit?: limit;
                            grlecontinue?: string;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Recentchanges
                         */
                        interface RecentChanges extends Query {
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
                            grcslot?: "main" | "mediainfo";
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Redirects
                         */
                        interface Redirects extends Query {
                            generator?: "redirects";
                            grdprop?: OneOrMore<"fragment" | "pageid" | "title">;
                            grdnamespace?: namespace | namespace[];
                            grdshow?: OneOrMore<"!fragment" | "fragment">;
                            grdlimit?: limit;
                            grdcontinue?: string;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Revisions
                         */
                        interface Revisions extends Query {
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
                                | "application/vnd.php.serialized"
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
                                | "application/vnd.php.serialized"
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Search
                         */
                        interface Search extends Query {
                            generator?: "search";
                            gsrsearch: string;
                            gsrnamespace?: namespace | namespace[];
                            gsrlimit?: limit;
                            gsroffset?: number;
                            gsrqiprofile?: string;
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Templates
                         */
                        interface Templates extends Query {
                            generator?: "templates";
                            gtlnamespace?: namespace | namespace[];
                            gtllimit?: limit;
                            gtlcontinue?: string;
                            gtltemplates?: string | string[];
                            gtldir?: "ascending" | "descending";
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Transcludedin
                         */
                        interface Transcludedin extends Query {
                            generator?: "transcludedin";
                            gtiprop?: OneOrMore<"pageid" | "redirect" | "title">;
                            gtinamespace?: namespace | namespace[];
                            gtishow?: OneOrMore<"!redirect" | "redirect">;
                            gtilimit?: limit;
                            gticontinue?: string;
                        }

                        interface Unreviewedpages extends Query {
                            generator?: "unreviewedpages";
                            gurstart?: string;
                            gurend?: string;
                            gurdir?: "ascending" | "descending";
                            gurnamespace?: namespace | namespace[];
                            gurfilterredir?: "all" | "nonredirects" | "redirects";
                            gurfilterlevel?: number;
                            gurlimit?: limit;
                        }

                        /**
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlist
                         */
                        interface Watchlist extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlistraw
                         */
                        interface WatchlistRaw extends Query {
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
                         * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Wikibase/API
                         */
                        interface WBListEntityUsage extends Query {
                            generator?: "wblistentityusage";
                            gwbleuprop?: OneOrMore<"url">;
                            gwbleuaspect?: OneOrMore<"C" | "D" | "L" | "O" | "S" | "T" | "X">;
                            gwbleuentities: string | string[];
                            gwbleulimit?: limit;
                            gwbleucontinue?: string;
                        }

                        /**
                         * @private
                         */
                        interface WBSearch extends Query {
                            generator?: "wbsearch";
                            gwbssearch: string;
                            gwbslanguage?: string;
                            gwbsstrictlanguage?: boolean;
                            gwbstype?: string;
                            gwbslimit?: limit;
                            gwbsprofile?: "default" | "language";
                        }

                        interface WikiLambdaFnSearch extends Query {
                            generator?: "wikilambdafn_search";
                            gwikilambdafn_zfunction_id?: string;
                            gwikilambdafn_type?: string;
                            gwikilambdafn_limit?: limit;
                            gwikilambdafn_continue?: string;
                        }

                        interface WikiLambdaLoadZObjects extends Query {
                            generator?: "wikilambdaload_zobjects";
                            gwikilambdaload_zids: string | string[];
                            gwikilambdaload_revisions?: string | string[];
                            gwikilambdaload_language?: string;
                            gwikilambdaload_get_dependencies?: boolean;
                        }

                        interface WikiLambdaSearchLabels extends Query {
                            generator?: "wikilambdasearch_labels";
                            gwikilambdasearch_search?: string;
                            gwikilambdasearch_language: string;
                            gwikilambdasearch_nofallback?: boolean;
                            gwikilambdasearch_exact?: boolean;
                            gwikilambdasearch_type?: string;
                            gwikilambdasearch_return_type?: string;
                            gwikilambdasearch_strict_return_type?: boolean;
                            gwikilambdasearch_limit?: limit;
                            gwikilambdasearch_continue?: string;
                        }
                    }
                }

                /**
                 * @private
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API
                 */
                interface ReadingLists extends Params {
                    action?: "readinglists";
                    command: string;
                    token?: string;
                }

                namespace ReadingLists.Command {
                    /**
                     * @private
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API
                     */
                    interface Create extends ReadingLists {
                        command: "create";
                        name?: string;
                        description?: string;
                        batch?: string;
                    }

                    /**
                     * @private
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API
                     */
                    interface CreateEntry extends ReadingLists {
                        command: "createentry";
                        list: number;
                        project?: string;
                        title?: string;
                        batch?: string;
                    }

                    /**
                     * @private
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API
                     */
                    interface Delete extends ReadingLists {
                        command: "delete";
                        list?: number;
                        batch?: string;
                    }

                    /**
                     * @private
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API
                     */
                    interface DeleteEntry extends ReadingLists {
                        command: "deleteentry";
                        entry?: number;
                        batch?: string;
                    }

                    /**
                     * @private
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API
                     */
                    interface Setup extends ReadingLists {
                        command: "setup";
                    }

                    /**
                     * @private
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API
                     */
                    interface Teardown extends ReadingLists {
                        command: "teardown";
                    }

                    /**
                     * @private
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API
                     */
                    interface Update extends ReadingLists {
                        command: "update";
                        list?: number;
                        name?: string;
                        description?: string;
                        batch?: string;
                    }
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Manage_authentication_data
                 */
                interface RemoveAuthenticationData extends Params {
                    action?: "removeauthenticationdata";
                    request: string;
                    token?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Manage_authentication_data
                 */
                interface ResetPassword extends Params {
                    action?: "resetpassword";
                    user?: string;
                    email?: string;
                    token?: string;
                }

                interface Review extends Params {
                    action?: "review";
                    revid?: string;
                    comment?: string;
                    unapprove?: boolean;
                    flag_value?: "0" | "1" | "2" | "3";
                    flag_accuracy?: "0" | "1" | "2";
                    token?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Revisiondelete
                 */
                interface RevisionDelete extends Params {
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
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Rollback
                 */
                interface Rollback extends Params {
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
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Rsd
                 */
                interface Rsd extends Params {
                    action?: "rsd";
                }

                /**
                 * @private
                 */
                interface SanitizeMapData extends Params {
                    action?: "sanitize-mapdata";
                    title?: string;
                    text: string;
                }

                /**
                 * @private
                 */
                interface ScribuntoConsole extends Params {
                    action?: "scribunto-console";
                    title?: string;
                    content?: string;
                    session?: number;
                    question: string;
                    clear?: boolean;
                    token?: string;
                }

                interface SearchTranslations extends Params {
                    action?: "searchtranslations";
                    service?: "codfw" | "default" | "eqiad";
                    query: string;
                    sourcelanguage?: string;
                    language?: string;
                    group?: string;
                    filter?: "" | "fuzzy" | "translated" | "untranslated";
                    match?: string;
                    case?: string;
                    offset?: number;
                    limit?: limit;
                }

                /**
                 * @private
                 */
                interface SecurePollAuth extends Params {
                    action?: "securepollauth";
                    token: string;
                    id: number;
                }

                interface SetGlobalAccountStatus extends Params {
                    action?: "setglobalaccountstatus";
                    user: string;
                    locked?: "" | "lock" | "unlock";
                    hidden?: "" | "lists" | "suppressed";
                    reason?: string;
                    statecheck?: string;
                    token?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:SetNotificationTimestamp
                 */
                interface SetNotificationTimestamp extends Params {
                    action?: "setnotificationtimestamp";
                    entirewatchlist?: boolean;
                    timestamp?: timestamp;
                    torevid?: number;
                    newerthanrevid?: number;
                    continue?: string;
                    titles?: string | string[];
                    pageids?: number | number[];
                    revids?: number | number[];
                    generator?: string;
                    redirects?: boolean;
                    converttitles?: boolean;
                    token?: string;
                }

                namespace SetNotificationTimestamp.Generator {
                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allcategories
                     */
                    interface AllCategories extends SetNotificationTimestamp {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alldeletedrevisions
                     */
                    interface AllDeletedRevisions extends SetNotificationTimestamp {
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
                            | "application/vnd.php.serialized"
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
                            | "application/vnd.php.serialized"
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allfileusages
                     */
                    interface AllFileUsages extends SetNotificationTimestamp {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allimages
                     */
                    interface AllImages extends SetNotificationTimestamp {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alllinks
                     */
                    interface AllLinks extends SetNotificationTimestamp {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allpages
                     */
                    interface AllPages extends SetNotificationTimestamp {
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
                        gapprlevel?: string | string[];
                        gapprfiltercascade?: "all" | "cascading" | "noncascading";
                        gapprexpiry?: "all" | "definite" | "indefinite";
                        gaplimit?: limit;
                        gapdir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allredirects
                     */
                    interface AllRedirects extends SetNotificationTimestamp {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allrevisions
                     */
                    interface AllRevisions extends SetNotificationTimestamp {
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
                            | "application/vnd.php.serialized"
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
                            | "application/vnd.php.serialized"
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alltransclusions
                     */
                    interface AllTransclusions extends SetNotificationTimestamp {
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

                    interface AutomaticTranslationDenseLanguages extends SetNotificationTimestamp {
                        "generator"?: "automatictranslationdenselanguages";
                        "gqid": string;
                        "gsection-titles"?: boolean;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Backlinks
                     */
                    interface Backlinks extends SetNotificationTimestamp {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categories
                     */
                    interface Categories extends SetNotificationTimestamp {
                        generator?: "categories";
                        gclprop?: OneOrMore<"hidden" | "sortkey" | "timestamp">;
                        gclshow?: OneOrMore<"!hidden" | "hidden">;
                        gcllimit?: limit;
                        gclcontinue?: string;
                        gclcategories?: string | string[];
                        gcldir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categorymembers
                     */
                    interface CategoryMembers extends SetNotificationTimestamp {
                        generator?: "categorymembers";
                        gcmtitle?: string;
                        gcmpageid?: number;
                        gcmprop?: OneOrMore<
                            "ids" | "sortkey" | "sortkeyprefix" | "timestamp" | "title" | "type"
                        >;
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

                    interface Configuredpages extends SetNotificationTimestamp {
                        generator?: "configuredpages";
                        gcpstart?: number;
                        gcpend?: number;
                        gcpdir?: "newer" | "older";
                        gcpnamespace?: namespace | namespace[];
                        gcpdefault?: "latest" | "stable";
                        gcpautoreview?: "none" | "sysop";
                        gcplimit?: limit;
                    }

                    interface ContentTranslation extends SetNotificationTimestamp {
                        generator?: "contenttranslation";
                        gtranslationid?: string;
                        gfrom?: string;
                        gto?: string;
                        gsourcetitle?: string;
                        gsourcesectiontitle?: string;
                        glimit?: limit;
                        goffset?: string;
                        gtype?: "draft" | "published";
                        gusecase?:
                            | "desktop-editor-draft"
                            | "translation-corpora-units"
                            | "unified-dashboard";
                    }

                    interface ContentTranslationSuggestions extends SetNotificationTimestamp {
                        generator?: "contenttranslationsuggestions";
                        gfrom?: string;
                        gto?: string;
                        glistid?: string;
                        glimit?: limit;
                        goffset?: string;
                        gseed?: number;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Deletedrevisions
                     */
                    interface DeletedRevisions extends SetNotificationTimestamp {
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
                            | "application/vnd.php.serialized"
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
                            | "application/vnd.php.serialized"
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Duplicatefiles
                     */
                    interface DuplicateFiles extends SetNotificationTimestamp {
                        generator?: "duplicatefiles";
                        gdflimit?: limit;
                        gdfcontinue?: string;
                        gdfdir?: "ascending" | "descending";
                        gdflocalonly?: boolean;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Embeddedin
                     */
                    interface Embeddedin extends SetNotificationTimestamp {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Exturlusage
                     */
                    interface ExtUrlUsage extends SetNotificationTimestamp {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Fileusage
                     */
                    interface FileUsage extends SetNotificationTimestamp {
                        generator?: "fileusage";
                        gfuprop?: OneOrMore<"pageid" | "redirect" | "title">;
                        gfunamespace?: namespace | namespace[];
                        gfushow?: OneOrMore<"!redirect" | "redirect">;
                        gfulimit?: limit;
                        gfucontinue?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GeoData#list.3Dgeosearch
                     */
                    interface GeoSearch extends SetNotificationTimestamp {
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
                        ggsprop?: OneOrMore<
                            "country" | "dim" | "globe" | "name" | "region" | "type"
                        >;
                        ggsprimary?: "all" | "primary" | "secondary";
                        ggsdebug?: boolean;
                    }

                    /**
                     * @private
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GrowthExperiments#API
                     */
                    interface GrowthTasks extends SetNotificationTimestamp {
                        generator?: "growthtasks";
                        ggttasktypes?: OneOrMore<
                            | "copyedit"
                            | "expand"
                            | "image-recommendation"
                            | "link-recommendation"
                            | "links"
                            | "references"
                            | "section-image-recommendation"
                            | "update"
                        >;
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Images
                     */
                    interface Images extends SetNotificationTimestamp {
                        generator?: "images";
                        gimlimit?: limit;
                        gimcontinue?: string;
                        gimimages?: string | string[];
                        gimdir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Imageusage
                     */
                    interface ImageUsage extends SetNotificationTimestamp {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Iwbacklinks
                     */
                    // tslint:disable-next-line:interface-name
                    interface IWBacklinks extends SetNotificationTimestamp {
                        generator?: "iwbacklinks";
                        giwblprefix?: string;
                        giwbltitle?: string;
                        giwblcontinue?: string;
                        giwbllimit?: limit;
                        giwblprop?: OneOrMore<"iwprefix" | "iwtitle">;
                        giwbldir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Langbacklinks
                     */
                    interface LangBacklinks extends SetNotificationTimestamp {
                        generator?: "langbacklinks";
                        glbllang?: string;
                        glbltitle?: string;
                        glblcontinue?: string;
                        glbllimit?: limit;
                        glblprop?: OneOrMore<"lllang" | "lltitle">;
                        glbldir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Links
                     */
                    interface Links extends SetNotificationTimestamp {
                        generator?: "links";
                        gplnamespace?: namespace | namespace[];
                        gpllimit?: limit;
                        gplcontinue?: string;
                        gpltitles?: string | string[];
                        gpldir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Linkshere
                     */
                    interface LinksHere extends SetNotificationTimestamp {
                        generator?: "linkshere";
                        glhprop?: OneOrMore<"pageid" | "redirect" | "title">;
                        glhnamespace?: namespace | namespace[];
                        glhshow?: OneOrMore<"!redirect" | "redirect">;
                        glhlimit?: limit;
                        glhcontinue?: string;
                    }

                    interface MessageCollection extends SetNotificationTimestamp {
                        generator?: "messagecollection";
                        gmcgroup: string;
                        gmclanguage?: string;
                        gmclimit?: limit;
                        gmcoffset?: string;
                        gmcfilter?: string | string[];
                        gmcprop?: OneOrMore<
                            "definition" | "properties" | "tags" | "translation" | "revision"
                        >;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageViewInfo
                     */
                    interface MostViewed extends SetNotificationTimestamp {
                        generator?: "mostviewed";
                        gpvimmetric?: "pageviews";
                        gpvimlimit?: limit;
                        gpvimoffset?: number;
                    }

                    interface Oldreviewedpages extends SetNotificationTimestamp {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Pageswithprop
                     */
                    interface PagesWithProp extends SetNotificationTimestamp {
                        generator?: "pageswithprop";
                        gpwppropname: string;
                        gpwpprop?: OneOrMore<"ids" | "title" | "value">;
                        gpwpcontinue?: string;
                        gpwplimit?: limit;
                        gpwpdir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Prefixsearch
                     */
                    interface PrefixSearch extends SetNotificationTimestamp {
                        generator?: "prefixsearch";
                        gpssearch: string;
                        gpsnamespace?: namespace | namespace[];
                        gpslimit?: limit;
                        gpsoffset?: number;
                        gpsprofile?:
                            | "classic"
                            | "engine_autoselect"
                            | "fast-fuzzy"
                            | "fuzzy"
                            | "fuzzy-subphrases"
                            | "normal"
                            | "normal-subphrases"
                            | "strict";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageAssessments
                     */
                    interface ProjectPages extends SetNotificationTimestamp {
                        generator?: "projectpages";
                        gwppassessments?: boolean;
                        gwppprojects: string | string[];
                        gwpplimit?: limit;
                        gwppcontinue?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ProofreadPage/Index pagination API
                     */
                    interface ProofreadPagesInIndex extends SetNotificationTimestamp {
                        generator?: "proofreadpagesinindex";
                        gprppiiprop?: OneOrMore<
                            "formattedpagenumber" | "ids" | "title" | "formattedPageNumber"
                        >;
                        gprppiititle?: string;
                        gprppiipageid?: number;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Protectedtitles
                     */
                    interface ProtectedTitles extends SetNotificationTimestamp {
                        generator?: "protectedtitles";
                        gptnamespace?: namespace | namespace[];
                        gptlevel?: string | string[];
                        gptlimit?: limit;
                        gptdir?: "newer" | "older";
                        gptstart?: timestamp;
                        gptend?: timestamp;
                        gptprop?: OneOrMore<
                            | "comment"
                            | "expiry"
                            | "level"
                            | "parsedcomment"
                            | "timestamp"
                            | "user"
                            | "userid"
                        >;
                        gptcontinue?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Querypage
                     */
                    interface QueryPage extends SetNotificationTimestamp {
                        generator?: "querypage";
                        gqppage: string;
                        gqpoffset?: number;
                        gqplimit?: limit;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Random
                     */
                    interface Random extends SetNotificationTimestamp {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API
                     */
                    interface ReadingListEntries extends SetNotificationTimestamp {
                        generator?: "readinglistentries";
                        grlelists?: number | number[];
                        grlechangedsince?: timestamp;
                        grlesort?: "name" | "updated";
                        grledir?: "ascending" | "descending";
                        grlelimit?: limit;
                        grlecontinue?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Recentchanges
                     */
                    interface RecentChanges extends SetNotificationTimestamp {
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
                        grcslot?: "main" | "mediainfo";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Redirects
                     */
                    interface Redirects extends SetNotificationTimestamp {
                        generator?: "redirects";
                        grdprop?: OneOrMore<"fragment" | "pageid" | "title">;
                        grdnamespace?: namespace | namespace[];
                        grdshow?: OneOrMore<"!fragment" | "fragment">;
                        grdlimit?: limit;
                        grdcontinue?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Revisions
                     */
                    interface Revisions extends SetNotificationTimestamp {
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
                            | "application/vnd.php.serialized"
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
                            | "application/vnd.php.serialized"
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Search
                     */
                    interface Search extends SetNotificationTimestamp {
                        generator?: "search";
                        gsrsearch: string;
                        gsrnamespace?: namespace | namespace[];
                        gsrlimit?: limit;
                        gsroffset?: number;
                        gsrqiprofile?: string;
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Templates
                     */
                    interface Templates extends SetNotificationTimestamp {
                        generator?: "templates";
                        gtlnamespace?: namespace | namespace[];
                        gtllimit?: limit;
                        gtlcontinue?: string;
                        gtltemplates?: string | string[];
                        gtldir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Transcludedin
                     */
                    interface Transcludedin extends SetNotificationTimestamp {
                        generator?: "transcludedin";
                        gtiprop?: OneOrMore<"pageid" | "redirect" | "title">;
                        gtinamespace?: namespace | namespace[];
                        gtishow?: OneOrMore<"!redirect" | "redirect">;
                        gtilimit?: limit;
                        gticontinue?: string;
                    }

                    interface Unreviewedpages extends SetNotificationTimestamp {
                        generator?: "unreviewedpages";
                        gurstart?: string;
                        gurend?: string;
                        gurdir?: "ascending" | "descending";
                        gurnamespace?: namespace | namespace[];
                        gurfilterredir?: "all" | "nonredirects" | "redirects";
                        gurfilterlevel?: number;
                        gurlimit?: limit;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlist
                     */
                    interface Watchlist extends SetNotificationTimestamp {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlistraw
                     */
                    interface WatchlistRaw extends SetNotificationTimestamp {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Wikibase/API
                     */
                    interface WBListEntityUsage extends SetNotificationTimestamp {
                        generator?: "wblistentityusage";
                        gwbleuprop?: OneOrMore<"url">;
                        gwbleuaspect?: OneOrMore<"C" | "D" | "L" | "O" | "S" | "T" | "X">;
                        gwbleuentities: string | string[];
                        gwbleulimit?: limit;
                        gwbleucontinue?: string;
                    }

                    /**
                     * @private
                     */
                    interface WBSearch extends SetNotificationTimestamp {
                        generator?: "wbsearch";
                        gwbssearch: string;
                        gwbslanguage?: string;
                        gwbsstrictlanguage?: boolean;
                        gwbstype?: string;
                        gwbslimit?: limit;
                        gwbsprofile?: "default" | "language";
                    }

                    interface WikiLambdaFnSearch extends SetNotificationTimestamp {
                        generator?: "wikilambdafn_search";
                        gwikilambdafn_zfunction_id?: string;
                        gwikilambdafn_type?: string;
                        gwikilambdafn_limit?: limit;
                        gwikilambdafn_continue?: string;
                    }

                    interface WikiLambdaLoadZObjects extends SetNotificationTimestamp {
                        generator?: "wikilambdaload_zobjects";
                        gwikilambdaload_zids: string | string[];
                        gwikilambdaload_revisions?: string | string[];
                        gwikilambdaload_language?: string;
                        gwikilambdaload_get_dependencies?: boolean;
                    }

                    interface WikiLambdaSearchLabels extends SetNotificationTimestamp {
                        generator?: "wikilambdasearch_labels";
                        gwikilambdasearch_search?: string;
                        gwikilambdasearch_language: string;
                        gwikilambdasearch_nofallback?: boolean;
                        gwikilambdasearch_exact?: boolean;
                        gwikilambdasearch_type?: string;
                        gwikilambdasearch_return_type?: string;
                        gwikilambdasearch_strict_return_type?: boolean;
                        gwikilambdasearch_limit?: limit;
                        gwikilambdasearch_continue?: string;
                    }
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:SetPageLanguage
                 */
                interface SetPageLanguage extends Params {
                    action?: "setpagelanguage";
                    title?: string;
                    pageid?: number;
                    lang: string;
                    reason?: string;
                    tags?: string | string[];
                    token?: string;
                }

                interface ShortenUrl extends Params {
                    action?: "shortenurl";
                    url: string;
                    qrcode?: boolean;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Sitematrix
                 */
                interface SiteMatrix extends Params {
                    action?: "sitematrix";
                    smtype?: OneOrMore<"language" | "special">;
                    smstate?: OneOrMore<"all" | "closed" | "fishbowl" | "nonglobal" | "private">;
                    smlangprop?: OneOrMore<"code" | "dir" | "localname" | "name" | "site">;
                    smsiteprop?: OneOrMore<"code" | "dbname" | "lang" | "sitename" | "url">;
                    smlimit?: limit;
                    smcontinue?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Extension:SpamBlacklist/API
                 */
                interface SpamBlacklist extends Params {
                    action?: "spamblacklist";
                    url: string | string[];
                }

                interface Stabilize extends Params {
                    action?: "stabilize";
                    protectlevel?: "autoconfirmed" | "none";
                    default: "latest" | "stable";
                    autoreview?: "none" | "sysop";
                    expiry?: string;
                    reason?: string;
                    review?: boolean;
                    title: string;
                    token?: string;
                }

                /**
                 * @private
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Stashedit
                 */
                interface StashEdit extends Params {
                    action?: "stashedit";
                    title: string;
                    section?: string;
                    sectiontitle?: string;
                    text?: string;
                    stashedtexthash?: string;
                    summary?: string;
                    contentmodel: string;
                    contentformat:
                        | "application/json"
                        | "application/octet-stream"
                        | "application/unknown"
                        | "application/vnd.php.serialized"
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
                 * @see https://www.mediawiki.org/wiki/Extension:EventStreamConfig
                 */
                interface StreamConfigS extends Params {
                    action?: "streamconfigs";
                    streams?: string | string[];
                    constraints?: string | string[];
                    /**
                     * @deprecated
                     */
                    all_settings?: boolean;
                }

                interface StrikeVote extends Params {
                    action?: "strikevote";
                    option: "strike" | "unstrike";
                    reason: string;
                    voteid: number;
                    token?: string;
                }

                interface SXDelete extends Params {
                    action?: "sxdelete";
                    sectiontranslationid: number;
                    translationid: number;
                    sectionid: string;
                    token?: string;
                }

                /**
                 * @private
                 */
                interface SXSave extends Params {
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
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Tag
                 */
                interface Tag extends Params {
                    action?: "tag";
                    rcid?: number | number[];
                    revid?: number | number[];
                    logid?: number | number[];
                    add?: string | string[];
                    remove?: string | string[];
                    reason?: string;
                    tags?: string | string[];
                    token?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:TemplateData
                 */
                interface TemplateData extends Params {
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
                    generator?: string;
                    redirects?: boolean;
                    converttitles?: boolean;
                }

                namespace TemplateData.Generator {
                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allcategories
                     */
                    interface AllCategories extends TemplateData {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alldeletedrevisions
                     */
                    interface AllDeletedRevisions extends TemplateData {
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
                            | "application/vnd.php.serialized"
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
                            | "application/vnd.php.serialized"
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allfileusages
                     */
                    interface AllFileUsages extends TemplateData {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allimages
                     */
                    interface AllImages extends TemplateData {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alllinks
                     */
                    interface AllLinks extends TemplateData {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allpages
                     */
                    interface AllPages extends TemplateData {
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
                        gapprlevel?: string | string[];
                        gapprfiltercascade?: "all" | "cascading" | "noncascading";
                        gapprexpiry?: "all" | "definite" | "indefinite";
                        gaplimit?: limit;
                        gapdir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allredirects
                     */
                    interface AllRedirects extends TemplateData {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allrevisions
                     */
                    interface AllRevisions extends TemplateData {
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
                            | "application/vnd.php.serialized"
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
                            | "application/vnd.php.serialized"
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alltransclusions
                     */
                    interface AllTransclusions extends TemplateData {
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

                    interface AutomaticTranslationDenseLanguages extends TemplateData {
                        "generator"?: "automatictranslationdenselanguages";
                        "gqid": string;
                        "gsection-titles"?: boolean;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Backlinks
                     */
                    interface Backlinks extends TemplateData {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categories
                     */
                    interface Categories extends TemplateData {
                        generator?: "categories";
                        gclprop?: OneOrMore<"hidden" | "sortkey" | "timestamp">;
                        gclshow?: OneOrMore<"!hidden" | "hidden">;
                        gcllimit?: limit;
                        gclcontinue?: string;
                        gclcategories?: string | string[];
                        gcldir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categorymembers
                     */
                    interface CategoryMembers extends TemplateData {
                        generator?: "categorymembers";
                        gcmtitle?: string;
                        gcmpageid?: number;
                        gcmprop?: OneOrMore<
                            "ids" | "sortkey" | "sortkeyprefix" | "timestamp" | "title" | "type"
                        >;
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

                    interface Configuredpages extends TemplateData {
                        generator?: "configuredpages";
                        gcpstart?: number;
                        gcpend?: number;
                        gcpdir?: "newer" | "older";
                        gcpnamespace?: namespace | namespace[];
                        gcpdefault?: "latest" | "stable";
                        gcpautoreview?: "none" | "sysop";
                        gcplimit?: limit;
                    }

                    interface ContentTranslation extends TemplateData {
                        generator?: "contenttranslation";
                        gtranslationid?: string;
                        gfrom?: string;
                        gto?: string;
                        gsourcetitle?: string;
                        gsourcesectiontitle?: string;
                        glimit?: limit;
                        goffset?: string;
                        gtype?: "draft" | "published";
                        gusecase?:
                            | "desktop-editor-draft"
                            | "translation-corpora-units"
                            | "unified-dashboard";
                    }

                    interface ContentTranslationSuggestions extends TemplateData {
                        generator?: "contenttranslationsuggestions";
                        gfrom?: string;
                        gto?: string;
                        glistid?: string;
                        glimit?: limit;
                        goffset?: string;
                        gseed?: number;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Deletedrevisions
                     */
                    interface DeletedRevisions extends TemplateData {
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
                            | "application/vnd.php.serialized"
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
                            | "application/vnd.php.serialized"
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Duplicatefiles
                     */
                    interface DuplicateFiles extends TemplateData {
                        generator?: "duplicatefiles";
                        gdflimit?: limit;
                        gdfcontinue?: string;
                        gdfdir?: "ascending" | "descending";
                        gdflocalonly?: boolean;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Embeddedin
                     */
                    interface Embeddedin extends TemplateData {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Exturlusage
                     */
                    interface ExtUrlUsage extends TemplateData {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Fileusage
                     */
                    interface FileUsage extends TemplateData {
                        generator?: "fileusage";
                        gfuprop?: OneOrMore<"pageid" | "redirect" | "title">;
                        gfunamespace?: namespace | namespace[];
                        gfushow?: OneOrMore<"!redirect" | "redirect">;
                        gfulimit?: limit;
                        gfucontinue?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GeoData#list.3Dgeosearch
                     */
                    interface GeoSearch extends TemplateData {
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
                        ggsprop?: OneOrMore<
                            "country" | "dim" | "globe" | "name" | "region" | "type"
                        >;
                        ggsprimary?: "all" | "primary" | "secondary";
                        ggsdebug?: boolean;
                    }

                    /**
                     * @private
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GrowthExperiments#API
                     */
                    interface GrowthTasks extends TemplateData {
                        generator?: "growthtasks";
                        ggttasktypes?: OneOrMore<
                            | "copyedit"
                            | "expand"
                            | "image-recommendation"
                            | "link-recommendation"
                            | "links"
                            | "references"
                            | "section-image-recommendation"
                            | "update"
                        >;
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Images
                     */
                    interface Images extends TemplateData {
                        generator?: "images";
                        gimlimit?: limit;
                        gimcontinue?: string;
                        gimimages?: string | string[];
                        gimdir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Imageusage
                     */
                    interface ImageUsage extends TemplateData {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Iwbacklinks
                     */
                    // tslint:disable-next-line:interface-name
                    interface IWBacklinks extends TemplateData {
                        generator?: "iwbacklinks";
                        giwblprefix?: string;
                        giwbltitle?: string;
                        giwblcontinue?: string;
                        giwbllimit?: limit;
                        giwblprop?: OneOrMore<"iwprefix" | "iwtitle">;
                        giwbldir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Langbacklinks
                     */
                    interface LangBacklinks extends TemplateData {
                        generator?: "langbacklinks";
                        glbllang?: string;
                        glbltitle?: string;
                        glblcontinue?: string;
                        glbllimit?: limit;
                        glblprop?: OneOrMore<"lllang" | "lltitle">;
                        glbldir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Links
                     */
                    interface Links extends TemplateData {
                        generator?: "links";
                        gplnamespace?: namespace | namespace[];
                        gpllimit?: limit;
                        gplcontinue?: string;
                        gpltitles?: string | string[];
                        gpldir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Linkshere
                     */
                    interface LinksHere extends TemplateData {
                        generator?: "linkshere";
                        glhprop?: OneOrMore<"pageid" | "redirect" | "title">;
                        glhnamespace?: namespace | namespace[];
                        glhshow?: OneOrMore<"!redirect" | "redirect">;
                        glhlimit?: limit;
                        glhcontinue?: string;
                    }

                    interface MessageCollection extends TemplateData {
                        generator?: "messagecollection";
                        gmcgroup: string;
                        gmclanguage?: string;
                        gmclimit?: limit;
                        gmcoffset?: string;
                        gmcfilter?: string | string[];
                        gmcprop?: OneOrMore<
                            "definition" | "properties" | "tags" | "translation" | "revision"
                        >;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageViewInfo
                     */
                    interface MostViewed extends TemplateData {
                        generator?: "mostviewed";
                        gpvimmetric?: "pageviews";
                        gpvimlimit?: limit;
                        gpvimoffset?: number;
                    }

                    interface Oldreviewedpages extends TemplateData {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Pageswithprop
                     */
                    interface PagesWithProp extends TemplateData {
                        generator?: "pageswithprop";
                        gpwppropname: string;
                        gpwpprop?: OneOrMore<"ids" | "title" | "value">;
                        gpwpcontinue?: string;
                        gpwplimit?: limit;
                        gpwpdir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Prefixsearch
                     */
                    interface PrefixSearch extends TemplateData {
                        generator?: "prefixsearch";
                        gpssearch: string;
                        gpsnamespace?: namespace | namespace[];
                        gpslimit?: limit;
                        gpsoffset?: number;
                        gpsprofile?:
                            | "classic"
                            | "engine_autoselect"
                            | "fast-fuzzy"
                            | "fuzzy"
                            | "fuzzy-subphrases"
                            | "normal"
                            | "normal-subphrases"
                            | "strict";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageAssessments
                     */
                    interface ProjectPages extends TemplateData {
                        generator?: "projectpages";
                        gwppassessments?: boolean;
                        gwppprojects: string | string[];
                        gwpplimit?: limit;
                        gwppcontinue?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ProofreadPage/Index pagination API
                     */
                    interface ProofreadPagesInIndex extends TemplateData {
                        generator?: "proofreadpagesinindex";
                        gprppiiprop?: OneOrMore<
                            "formattedpagenumber" | "ids" | "title" | "formattedPageNumber"
                        >;
                        gprppiititle?: string;
                        gprppiipageid?: number;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Protectedtitles
                     */
                    interface ProtectedTitles extends TemplateData {
                        generator?: "protectedtitles";
                        gptnamespace?: namespace | namespace[];
                        gptlevel?: string | string[];
                        gptlimit?: limit;
                        gptdir?: "newer" | "older";
                        gptstart?: timestamp;
                        gptend?: timestamp;
                        gptprop?: OneOrMore<
                            | "comment"
                            | "expiry"
                            | "level"
                            | "parsedcomment"
                            | "timestamp"
                            | "user"
                            | "userid"
                        >;
                        gptcontinue?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Querypage
                     */
                    interface QueryPage extends TemplateData {
                        generator?: "querypage";
                        gqppage: string;
                        gqpoffset?: number;
                        gqplimit?: limit;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Random
                     */
                    interface Random extends TemplateData {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API
                     */
                    interface ReadingListEntries extends TemplateData {
                        generator?: "readinglistentries";
                        grlelists?: number | number[];
                        grlechangedsince?: timestamp;
                        grlesort?: "name" | "updated";
                        grledir?: "ascending" | "descending";
                        grlelimit?: limit;
                        grlecontinue?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Recentchanges
                     */
                    interface RecentChanges extends TemplateData {
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
                        grcslot?: "main" | "mediainfo";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Redirects
                     */
                    interface Redirects extends TemplateData {
                        generator?: "redirects";
                        grdprop?: OneOrMore<"fragment" | "pageid" | "title">;
                        grdnamespace?: namespace | namespace[];
                        grdshow?: OneOrMore<"!fragment" | "fragment">;
                        grdlimit?: limit;
                        grdcontinue?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Revisions
                     */
                    interface Revisions extends TemplateData {
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
                            | "application/vnd.php.serialized"
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
                            | "application/vnd.php.serialized"
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Search
                     */
                    interface Search extends TemplateData {
                        generator?: "search";
                        gsrsearch: string;
                        gsrnamespace?: namespace | namespace[];
                        gsrlimit?: limit;
                        gsroffset?: number;
                        gsrqiprofile?: string;
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Templates
                     */
                    interface Templates extends TemplateData {
                        generator?: "templates";
                        gtlnamespace?: namespace | namespace[];
                        gtllimit?: limit;
                        gtlcontinue?: string;
                        gtltemplates?: string | string[];
                        gtldir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Transcludedin
                     */
                    interface Transcludedin extends TemplateData {
                        generator?: "transcludedin";
                        gtiprop?: OneOrMore<"pageid" | "redirect" | "title">;
                        gtinamespace?: namespace | namespace[];
                        gtishow?: OneOrMore<"!redirect" | "redirect">;
                        gtilimit?: limit;
                        gticontinue?: string;
                    }

                    interface Unreviewedpages extends TemplateData {
                        generator?: "unreviewedpages";
                        gurstart?: string;
                        gurend?: string;
                        gurdir?: "ascending" | "descending";
                        gurnamespace?: namespace | namespace[];
                        gurfilterredir?: "all" | "nonredirects" | "redirects";
                        gurfilterlevel?: number;
                        gurlimit?: limit;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlist
                     */
                    interface Watchlist extends TemplateData {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlistraw
                     */
                    interface WatchlistRaw extends TemplateData {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Wikibase/API
                     */
                    interface WBListEntityUsage extends TemplateData {
                        generator?: "wblistentityusage";
                        gwbleuprop?: OneOrMore<"url">;
                        gwbleuaspect?: OneOrMore<"C" | "D" | "L" | "O" | "S" | "T" | "X">;
                        gwbleuentities: string | string[];
                        gwbleulimit?: limit;
                        gwbleucontinue?: string;
                    }

                    /**
                     * @private
                     */
                    interface WBSearch extends TemplateData {
                        generator?: "wbsearch";
                        gwbssearch: string;
                        gwbslanguage?: string;
                        gwbsstrictlanguage?: boolean;
                        gwbstype?: string;
                        gwbslimit?: limit;
                        gwbsprofile?: "default" | "language";
                    }

                    interface WikiLambdaFnSearch extends TemplateData {
                        generator?: "wikilambdafn_search";
                        gwikilambdafn_zfunction_id?: string;
                        gwikilambdafn_type?: string;
                        gwikilambdafn_limit?: limit;
                        gwikilambdafn_continue?: string;
                    }

                    interface WikiLambdaLoadZObjects extends TemplateData {
                        generator?: "wikilambdaload_zobjects";
                        gwikilambdaload_zids: string | string[];
                        gwikilambdaload_revisions?: string | string[];
                        gwikilambdaload_language?: string;
                        gwikilambdaload_get_dependencies?: boolean;
                    }

                    interface WikiLambdaSearchLabels extends TemplateData {
                        generator?: "wikilambdasearch_labels";
                        gwikilambdasearch_search?: string;
                        gwikilambdasearch_language: string;
                        gwikilambdasearch_nofallback?: boolean;
                        gwikilambdasearch_exact?: boolean;
                        gwikilambdasearch_type?: string;
                        gwikilambdasearch_return_type?: string;
                        gwikilambdasearch_strict_return_type?: boolean;
                        gwikilambdasearch_limit?: limit;
                        gwikilambdasearch_continue?: string;
                    }
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Extension:Thanks#API_Documentation
                 */
                interface Thank extends Params {
                    action?: "thank";
                    rev?: number;
                    log?: number;
                    token?: string;
                    source?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Threadaction
                 */
                interface ThreadAction extends Params {
                    action?: "threadaction";
                    thread?: string | string[];
                    talkpage?: string;
                    threadaction:
                        | "addreaction"
                        | "deletereaction"
                        | "edit"
                        | "inlineeditform"
                        | "markread"
                        | "markunread"
                        | "merge"
                        | "newthread"
                        | "reply"
                        | "setsortkey"
                        | "setsubject"
                        | "split";
                    token?: string;
                    subject?: string;
                    reason?: string;
                    newparent?: string;
                    text?: string;
                    render?: string;
                    bump?: string;
                    sortkey?: string;
                    signature?: string;
                    type?: string;
                    value?: string;
                    method?: string;
                    operand?: string;
                    captchaword?: string;
                    captchaid?: string;
                }

                /**
                 * @private
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:TimedMediaHandler
                 */
                interface TimedText extends Params {
                    action?: "timedtext";
                    title?: string;
                    pageid?: number;
                    trackformat: "srt" | "vtt";
                    lang?: string;
                }

                interface TitleBlacklist extends Params {
                    action?: "titleblacklist";
                    tbtitle: string;
                    tbaction?:
                        | "create"
                        | "createpage"
                        | "createtalk"
                        | "edit"
                        | "move"
                        | "new-account"
                        | "upload";
                    tbnooverride?: boolean;
                }

                interface TorBlock extends Params {
                    action?: "torblock";
                    ip: string;
                }

                interface TranscodeReset extends Params {
                    action?: "transcodereset";
                    title: string;
                    transcodekey?: string;
                    token?: string;
                }

                interface TranslationAids extends Params {
                    action?: "translationaids";
                    title: string;
                    group?: string;
                    prop?: OneOrMore<
                        | "definition"
                        | "definitiondiff"
                        | "documentation"
                        | "editsummaries"
                        | "gettext"
                        | "groups"
                        | "inotherlanguages"
                        | "insertables"
                        | "mt"
                        | "support"
                        | "translation"
                        | "ttmserver"
                    >;
                }

                /**
                 * @private
                 */
                interface TranslationCheck extends Params {
                    action?: "translationcheck";
                    title: string;
                    translation: string;
                }

                /**
                 * @private
                 */
                interface TranslationEntitySearch extends Params {
                    action?: "translationentitysearch";
                    entitytype?: OneOrMore<"groups" | "messages">;
                    query?: string;
                    limit?: limit;
                    grouptypes?: OneOrMore<
                        "aggregate-groups" | "message-bundles" | "translatable-pages"
                    >;
                }

                interface TranslationReview extends Params {
                    action?: "translationreview";
                    revision: number;
                    token?: string;
                }

                interface TranslationStats extends Params {
                    action?: "translationstats";
                    count: "edits" | "reviewers" | "reviews" | "users";
                    days: number;
                    group?: string | string[];
                    language?: string | string[];
                    scale?: "days" | "hours" | "months" | "weeks" | "years";
                    start?: timestamp;
                }

                interface TtmServer extends Params {
                    action?: "ttmserver";
                    service?: never;
                    sourcelanguage: string;
                    targetlanguage: string;
                    text: string;
                }

                /**
                 * @private
                 */
                interface ULSLocalization extends Params {
                    action?: "ulslocalization";
                    language: string;
                }

                /**
                 * @private
                 */
                interface ULSSetLang extends Params {
                    action?: "ulssetlang";
                    languagecode: string;
                    token?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Block
                 */
                interface Unblock extends Params {
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
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Undelete
                 */
                interface Undelete extends Params {
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
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Manage_authentication_data
                 */
                interface UnlinkAccount extends Params {
                    action?: "unlinkaccount";
                    request: string;
                    token?: string;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Upload
                 */
                interface Upload extends Params {
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
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:User_group_membership
                 */
                interface Userrights extends Params {
                    action?: "userrights";
                    user?: string;
                    /**
                     * @deprecated
                     */
                    userid?: number;
                    add?: string | string[];
                    expiry?: string | string[];
                    remove?: string | string[];
                    reason?: string;
                    token?: string;
                    tags?: string | string[];
                    watchuser?: boolean;
                    watchlistexpiry?: expiry;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Validatepassword
                 */
                interface ValidatePassword extends Params {
                    action?: "validatepassword";
                    password?: password;
                    user?: string;
                    email?: string;
                    realname?: string;
                }

                /**
                 * @private
                 */
                interface VisualEditor extends Params {
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
                interface VisualEditorEdit extends Params {
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
                    useskin?: string;
                    tags?: string | string[];
                    plugins?: string | string[];
                    [k: `data-${string}`]: string;
                    mobileformat?: boolean;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watch
                 */
                interface Watch extends Params {
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
                    generator?: string;
                    redirects?: boolean;
                    converttitles?: boolean;
                    token?: string;
                }

                namespace Watch.Generator {
                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allcategories
                     */
                    interface AllCategories extends Watch {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alldeletedrevisions
                     */
                    interface AllDeletedRevisions extends Watch {
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
                            | "application/vnd.php.serialized"
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
                            | "application/vnd.php.serialized"
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allfileusages
                     */
                    interface AllFileUsages extends Watch {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allimages
                     */
                    interface AllImages extends Watch {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alllinks
                     */
                    interface AllLinks extends Watch {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allpages
                     */
                    interface AllPages extends Watch {
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
                        gapprlevel?: string | string[];
                        gapprfiltercascade?: "all" | "cascading" | "noncascading";
                        gapprexpiry?: "all" | "definite" | "indefinite";
                        gaplimit?: limit;
                        gapdir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allredirects
                     */
                    interface AllRedirects extends Watch {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Allrevisions
                     */
                    interface AllRevisions extends Watch {
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
                            | "application/vnd.php.serialized"
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
                            | "application/vnd.php.serialized"
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Alltransclusions
                     */
                    interface AllTransclusions extends Watch {
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

                    interface AutomaticTranslationDenseLanguages extends Watch {
                        "generator"?: "automatictranslationdenselanguages";
                        "gqid": string;
                        "gsection-titles"?: boolean;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Backlinks
                     */
                    interface Backlinks extends Watch {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categories
                     */
                    interface Categories extends Watch {
                        generator?: "categories";
                        gclprop?: OneOrMore<"hidden" | "sortkey" | "timestamp">;
                        gclshow?: OneOrMore<"!hidden" | "hidden">;
                        gcllimit?: limit;
                        gclcontinue?: string;
                        gclcategories?: string | string[];
                        gcldir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Categorymembers
                     */
                    interface CategoryMembers extends Watch {
                        generator?: "categorymembers";
                        gcmtitle?: string;
                        gcmpageid?: number;
                        gcmprop?: OneOrMore<
                            "ids" | "sortkey" | "sortkeyprefix" | "timestamp" | "title" | "type"
                        >;
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

                    interface Configuredpages extends Watch {
                        generator?: "configuredpages";
                        gcpstart?: number;
                        gcpend?: number;
                        gcpdir?: "newer" | "older";
                        gcpnamespace?: namespace | namespace[];
                        gcpdefault?: "latest" | "stable";
                        gcpautoreview?: "none" | "sysop";
                        gcplimit?: limit;
                    }

                    interface ContentTranslation extends Watch {
                        generator?: "contenttranslation";
                        gtranslationid?: string;
                        gfrom?: string;
                        gto?: string;
                        gsourcetitle?: string;
                        gsourcesectiontitle?: string;
                        glimit?: limit;
                        goffset?: string;
                        gtype?: "draft" | "published";
                        gusecase?:
                            | "desktop-editor-draft"
                            | "translation-corpora-units"
                            | "unified-dashboard";
                    }

                    interface ContentTranslationSuggestions extends Watch {
                        generator?: "contenttranslationsuggestions";
                        gfrom?: string;
                        gto?: string;
                        glistid?: string;
                        glimit?: limit;
                        goffset?: string;
                        gseed?: number;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Deletedrevisions
                     */
                    interface DeletedRevisions extends Watch {
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
                            | "application/vnd.php.serialized"
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
                            | "application/vnd.php.serialized"
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Duplicatefiles
                     */
                    interface DuplicateFiles extends Watch {
                        generator?: "duplicatefiles";
                        gdflimit?: limit;
                        gdfcontinue?: string;
                        gdfdir?: "ascending" | "descending";
                        gdflocalonly?: boolean;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Embeddedin
                     */
                    interface Embeddedin extends Watch {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Exturlusage
                     */
                    interface ExtUrlUsage extends Watch {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Fileusage
                     */
                    interface FileUsage extends Watch {
                        generator?: "fileusage";
                        gfuprop?: OneOrMore<"pageid" | "redirect" | "title">;
                        gfunamespace?: namespace | namespace[];
                        gfushow?: OneOrMore<"!redirect" | "redirect">;
                        gfulimit?: limit;
                        gfucontinue?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GeoData#list.3Dgeosearch
                     */
                    interface GeoSearch extends Watch {
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
                        ggsprop?: OneOrMore<
                            "country" | "dim" | "globe" | "name" | "region" | "type"
                        >;
                        ggsprimary?: "all" | "primary" | "secondary";
                        ggsdebug?: boolean;
                    }

                    /**
                     * @private
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:GrowthExperiments#API
                     */
                    interface GrowthTasks extends Watch {
                        generator?: "growthtasks";
                        ggttasktypes?: OneOrMore<
                            | "copyedit"
                            | "expand"
                            | "image-recommendation"
                            | "link-recommendation"
                            | "links"
                            | "references"
                            | "section-image-recommendation"
                            | "update"
                        >;
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Images
                     */
                    interface Images extends Watch {
                        generator?: "images";
                        gimlimit?: limit;
                        gimcontinue?: string;
                        gimimages?: string | string[];
                        gimdir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Imageusage
                     */
                    interface ImageUsage extends Watch {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Iwbacklinks
                     */
                    // tslint:disable-next-line:interface-name
                    interface IWBacklinks extends Watch {
                        generator?: "iwbacklinks";
                        giwblprefix?: string;
                        giwbltitle?: string;
                        giwblcontinue?: string;
                        giwbllimit?: limit;
                        giwblprop?: OneOrMore<"iwprefix" | "iwtitle">;
                        giwbldir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Langbacklinks
                     */
                    interface LangBacklinks extends Watch {
                        generator?: "langbacklinks";
                        glbllang?: string;
                        glbltitle?: string;
                        glblcontinue?: string;
                        glbllimit?: limit;
                        glblprop?: OneOrMore<"lllang" | "lltitle">;
                        glbldir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Links
                     */
                    interface Links extends Watch {
                        generator?: "links";
                        gplnamespace?: namespace | namespace[];
                        gpllimit?: limit;
                        gplcontinue?: string;
                        gpltitles?: string | string[];
                        gpldir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Linkshere
                     */
                    interface LinksHere extends Watch {
                        generator?: "linkshere";
                        glhprop?: OneOrMore<"pageid" | "redirect" | "title">;
                        glhnamespace?: namespace | namespace[];
                        glhshow?: OneOrMore<"!redirect" | "redirect">;
                        glhlimit?: limit;
                        glhcontinue?: string;
                    }

                    interface MessageCollection extends Watch {
                        generator?: "messagecollection";
                        gmcgroup: string;
                        gmclanguage?: string;
                        gmclimit?: limit;
                        gmcoffset?: string;
                        gmcfilter?: string | string[];
                        gmcprop?: OneOrMore<
                            "definition" | "properties" | "tags" | "translation" | "revision"
                        >;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageViewInfo
                     */
                    interface MostViewed extends Watch {
                        generator?: "mostviewed";
                        gpvimmetric?: "pageviews";
                        gpvimlimit?: limit;
                        gpvimoffset?: number;
                    }

                    interface Oldreviewedpages extends Watch {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Pageswithprop
                     */
                    interface PagesWithProp extends Watch {
                        generator?: "pageswithprop";
                        gpwppropname: string;
                        gpwpprop?: OneOrMore<"ids" | "title" | "value">;
                        gpwpcontinue?: string;
                        gpwplimit?: limit;
                        gpwpdir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Prefixsearch
                     */
                    interface PrefixSearch extends Watch {
                        generator?: "prefixsearch";
                        gpssearch: string;
                        gpsnamespace?: namespace | namespace[];
                        gpslimit?: limit;
                        gpsoffset?: number;
                        gpsprofile?:
                            | "classic"
                            | "engine_autoselect"
                            | "fast-fuzzy"
                            | "fuzzy"
                            | "fuzzy-subphrases"
                            | "normal"
                            | "normal-subphrases"
                            | "strict";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:PageAssessments
                     */
                    interface ProjectPages extends Watch {
                        generator?: "projectpages";
                        gwppassessments?: boolean;
                        gwppprojects: string | string[];
                        gwpplimit?: limit;
                        gwppcontinue?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ProofreadPage/Index pagination API
                     */
                    interface ProofreadPagesInIndex extends Watch {
                        generator?: "proofreadpagesinindex";
                        gprppiiprop?: OneOrMore<
                            "formattedpagenumber" | "ids" | "title" | "formattedPageNumber"
                        >;
                        gprppiititle?: string;
                        gprppiipageid?: number;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Protectedtitles
                     */
                    interface ProtectedTitles extends Watch {
                        generator?: "protectedtitles";
                        gptnamespace?: namespace | namespace[];
                        gptlevel?: string | string[];
                        gptlimit?: limit;
                        gptdir?: "newer" | "older";
                        gptstart?: timestamp;
                        gptend?: timestamp;
                        gptprop?: OneOrMore<
                            | "comment"
                            | "expiry"
                            | "level"
                            | "parsedcomment"
                            | "timestamp"
                            | "user"
                            | "userid"
                        >;
                        gptcontinue?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Querypage
                     */
                    interface QueryPage extends Watch {
                        generator?: "querypage";
                        gqppage: string;
                        gqpoffset?: number;
                        gqplimit?: limit;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Random
                     */
                    interface Random extends Watch {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Extension:ReadingLists#API
                     */
                    interface ReadingListEntries extends Watch {
                        generator?: "readinglistentries";
                        grlelists?: number | number[];
                        grlechangedsince?: timestamp;
                        grlesort?: "name" | "updated";
                        grledir?: "ascending" | "descending";
                        grlelimit?: limit;
                        grlecontinue?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Recentchanges
                     */
                    interface RecentChanges extends Watch {
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
                        grcslot?: "main" | "mediainfo";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Redirects
                     */
                    interface Redirects extends Watch {
                        generator?: "redirects";
                        grdprop?: OneOrMore<"fragment" | "pageid" | "title">;
                        grdnamespace?: namespace | namespace[];
                        grdshow?: OneOrMore<"!fragment" | "fragment">;
                        grdlimit?: limit;
                        grdcontinue?: string;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Revisions
                     */
                    interface Revisions extends Watch {
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
                            | "application/vnd.php.serialized"
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
                            | "application/vnd.php.serialized"
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Search
                     */
                    interface Search extends Watch {
                        generator?: "search";
                        gsrsearch: string;
                        gsrnamespace?: namespace | namespace[];
                        gsrlimit?: limit;
                        gsroffset?: number;
                        gsrqiprofile?: string;
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Templates
                     */
                    interface Templates extends Watch {
                        generator?: "templates";
                        gtlnamespace?: namespace | namespace[];
                        gtllimit?: limit;
                        gtlcontinue?: string;
                        gtltemplates?: string | string[];
                        gtldir?: "ascending" | "descending";
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Transcludedin
                     */
                    interface Transcludedin extends Watch {
                        generator?: "transcludedin";
                        gtiprop?: OneOrMore<"pageid" | "redirect" | "title">;
                        gtinamespace?: namespace | namespace[];
                        gtishow?: OneOrMore<"!redirect" | "redirect">;
                        gtilimit?: limit;
                        gticontinue?: string;
                    }

                    interface Unreviewedpages extends Watch {
                        generator?: "unreviewedpages";
                        gurstart?: string;
                        gurend?: string;
                        gurdir?: "ascending" | "descending";
                        gurnamespace?: namespace | namespace[];
                        gurfilterredir?: "all" | "nonredirects" | "redirects";
                        gurfilterlevel?: number;
                        gurlimit?: limit;
                    }

                    /**
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlist
                     */
                    interface Watchlist extends Watch {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Watchlistraw
                     */
                    interface WatchlistRaw extends Watch {
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
                     * @see https://www.mediawiki.org/wiki/Special:MyLanguage/Wikibase/API
                     */
                    interface WBListEntityUsage extends Watch {
                        generator?: "wblistentityusage";
                        gwbleuprop?: OneOrMore<"url">;
                        gwbleuaspect?: OneOrMore<"C" | "D" | "L" | "O" | "S" | "T" | "X">;
                        gwbleuentities: string | string[];
                        gwbleulimit?: limit;
                        gwbleucontinue?: string;
                    }

                    /**
                     * @private
                     */
                    interface WBSearch extends Watch {
                        generator?: "wbsearch";
                        gwbssearch: string;
                        gwbslanguage?: string;
                        gwbsstrictlanguage?: boolean;
                        gwbstype?: string;
                        gwbslimit?: limit;
                        gwbsprofile?: "default" | "language";
                    }

                    interface WikiLambdaFnSearch extends Watch {
                        generator?: "wikilambdafn_search";
                        gwikilambdafn_zfunction_id?: string;
                        gwikilambdafn_type?: string;
                        gwikilambdafn_limit?: limit;
                        gwikilambdafn_continue?: string;
                    }

                    interface WikiLambdaLoadZObjects extends Watch {
                        generator?: "wikilambdaload_zobjects";
                        gwikilambdaload_zids: string | string[];
                        gwikilambdaload_revisions?: string | string[];
                        gwikilambdaload_language?: string;
                        gwikilambdaload_get_dependencies?: boolean;
                    }

                    interface WikiLambdaSearchLabels extends Watch {
                        generator?: "wikilambdasearch_labels";
                        gwikilambdasearch_search?: string;
                        gwikilambdasearch_language: string;
                        gwikilambdasearch_nofallback?: boolean;
                        gwikilambdasearch_exact?: boolean;
                        gwikilambdasearch_type?: string;
                        gwikilambdasearch_return_type?: string;
                        gwikilambdasearch_strict_return_type?: boolean;
                        gwikilambdasearch_limit?: limit;
                        gwikilambdasearch_continue?: string;
                    }
                }

                interface WBAvailableBadges extends Params {
                    action?: "wbavailablebadges";
                }

                interface WBCheckConstraintParameters extends Params {
                    action?: "wbcheckconstraintparameters";
                    propertyid?: string | string[];
                    constraintid?: string | string[];
                }

                interface WBCheckConstraints extends Params {
                    action?: "wbcheckconstraints";
                    id?: string | string[];
                    claimid?: string | string[];
                    constraintid?: string | string[];
                    status?: OneOrMore<
                        | "bad-parameters"
                        | "compliance"
                        | "deprecated"
                        | "exception"
                        | "not-in-scope"
                        | "suggestion"
                        | "todo"
                        | "violation"
                        | "warning"
                        | "*"
                    >;
                }

                interface WBCreateClaim extends Params {
                    action?: "wbcreateclaim";
                    entity: string;
                    snaktype: "novalue" | "somevalue" | "value";
                    property: string;
                    value?: string;
                    summary?: string;
                    tags?: string | string[];
                    token?: string;
                    baserevid?: number;
                    bot?: boolean;
                    returnto?: string;
                    returntoquery?: string;
                    returntoanchor?: string;
                }

                interface WBCreateRedirect extends Params {
                    action?: "wbcreateredirect";
                    from: string;
                    to: string;
                    token?: string;
                    bot?: boolean;
                    returnto?: string;
                    returntoquery?: string;
                    returntoanchor?: string;
                }

                interface WBEditEntity extends Params {
                    action?: "wbeditentity";
                    id?: string;
                    new?: string;
                    site?: string;
                    title?: string;
                    baserevid?: number;
                    summary?: string;
                    tags?: string | string[];
                    token?: string;
                    bot?: boolean;
                    returnto?: string;
                    returntoquery?: string;
                    returntoanchor?: string;
                    data: string;
                    clear?: boolean;
                }

                interface WBFormatEntities extends Params {
                    action?: "wbformatentities";
                    ids?: string | string[];
                }

                /**
                 * @private
                 */
                interface WBFormatReference extends Params {
                    action?: "wbformatreference";
                    reference: string;
                    style: "internal-data-bridge";
                    outputformat: "html";
                }

                interface WBFormatValue extends Params {
                    action?: "wbformatvalue";
                    generate?:
                        | "text/html"
                        | "text/html; disposition=verbose"
                        | "text/html; disposition=verbose-preview"
                        | "text/plain"
                        | "text/x-wiki";
                    datavalue: string;
                    datatype?:
                        | "commonsMedia"
                        | "entity-schema"
                        | "external-id"
                        | "geo-shape"
                        | "globe-coordinate"
                        | "math"
                        | "monolingualtext"
                        | "musical-notation"
                        | "quantity"
                        | "string"
                        | "tabular-data"
                        | "time"
                        | "url"
                        | "wikibase-form"
                        | "wikibase-item"
                        | "wikibase-lexeme"
                        | "wikibase-property"
                        | "wikibase-sense";
                    property?: string;
                    options?: string;
                }

                interface WBGetClaims extends Params {
                    action?: "wbgetclaims";
                    entity?: string;
                    property?: string;
                    claim?: string;
                    rank?: "deprecated" | "normal" | "preferred";
                    props?: OneOrMore<"references">;
                }

                interface WBGetEntities extends Params {
                    action?: "wbgetentities";
                    ids?: string | string[];
                    sites?: string | string[];
                    titles?: string | string[];
                    redirects?: "no" | "yes";
                    props?: OneOrMore<
                        | "aliases"
                        | "claims"
                        | "datatype"
                        | "descriptions"
                        | "info"
                        | "labels"
                        | "sitelinks"
                        | "sitelinks/urls"
                    >;
                    languages?: string | string[];
                    languagefallback?: boolean;
                    normalize?: boolean;
                    sitefilter?: string | string[];
                }

                /**
                 * @private
                 */
                interface WBLAddForm extends Params {
                    action?: "wbladdform";
                    lexemeId: string;
                    data: string;
                    baserevid?: number;
                    tags?: string | string[];
                    bot?: boolean;
                    returnto?: string;
                    returntoquery?: string;
                    returntoanchor?: string;
                    token?: string;
                }

                /**
                 * @private
                 */
                interface WBLAddSense extends Params {
                    action?: "wbladdsense";
                    lexemeId: string;
                    data: string;
                    baserevid?: number;
                    tags?: string | string[];
                    bot?: boolean;
                    returnto?: string;
                    returntoquery?: string;
                    returntoanchor?: string;
                    token?: string;
                }

                /**
                 * @private
                 */
                interface WBLEditFormElements extends Params {
                    action?: "wbleditformelements";
                    formId: string;
                    data: string;
                    baserevid?: number;
                    tags?: string | string[];
                    bot?: boolean;
                    returnto?: string;
                    returntoquery?: string;
                    returntoanchor?: string;
                    token?: string;
                }

                /**
                 * @private
                 */
                interface WBLEditSenseElements extends Params {
                    action?: "wbleditsenseelements";
                    senseId: string;
                    data: string;
                    baserevid?: number;
                    tags?: string | string[];
                    bot?: boolean;
                    returnto?: string;
                    returntoquery?: string;
                    returntoanchor?: string;
                    token?: string;
                }

                interface WBLinkTitles extends Params {
                    action?: "wblinktitles";
                    returnto?: string;
                    returntoquery?: string;
                    returntoanchor?: string;
                    tosite: string;
                    totitle: string;
                    fromsite: string;
                    fromtitle: string;
                    token?: string;
                    bot?: boolean;
                }

                interface WBLMergeLexemes extends Params {
                    action?: "wblmergelexemes";
                    source: string;
                    target: string;
                    summary?: string;
                    tags?: string | string[];
                    bot?: boolean;
                    returnto?: string;
                    returntoquery?: string;
                    returntoanchor?: string;
                    token?: string;
                }

                /**
                 * @private
                 */
                interface WBLRemoveForm extends Params {
                    action?: "wblremoveform";
                    id: string;
                    tags?: string | string[];
                    bot?: boolean;
                    baserevid?: number;
                    returnto?: string;
                    returntoquery?: string;
                    returntoanchor?: string;
                    token?: string;
                }

                /**
                 * @private
                 */
                interface WBLRemoveSense extends Params {
                    action?: "wblremovesense";
                    id: string;
                    baserevid?: number;
                    tags?: string | string[];
                    bot?: boolean;
                    returnto?: string;
                    returntoquery?: string;
                    returntoanchor?: string;
                    token?: string;
                }

                interface WBMergeItems extends Params {
                    action?: "wbmergeitems";
                    fromid: string;
                    toid: string;
                    ignoreconflicts?: OneOrMore<"description" | "sitelink" | "statement">;
                    summary?: string;
                    tags?: string | string[];
                    bot?: boolean;
                    token?: string;
                    returnto?: string;
                    returntoquery?: string;
                    returntoanchor?: string;
                }

                interface WBParseValue extends Params {
                    action?: "wbparsevalue";
                    datatype?:
                        | "commonsMedia"
                        | "entity-schema"
                        | "external-id"
                        | "geo-shape"
                        | "globe-coordinate"
                        | "math"
                        | "monolingualtext"
                        | "musical-notation"
                        | "quantity"
                        | "string"
                        | "tabular-data"
                        | "time"
                        | "url"
                        | "wikibase-form"
                        | "wikibase-item"
                        | "wikibase-lexeme"
                        | "wikibase-property"
                        | "wikibase-sense";
                    property?: string;
                    /**
                     * @deprecated
                     */
                    parser?:
                        | "commonsMedia"
                        | "entity-schema"
                        | "external-id"
                        | "geo-shape"
                        | "globe-coordinate"
                        | "globecoordinate"
                        | "math"
                        | "monolingualtext"
                        | "musical-notation"
                        | "null"
                        | "quantity"
                        | "string"
                        | "tabular-data"
                        | "time"
                        | "url"
                        | "wikibase-entityid"
                        | "wikibase-form"
                        | "wikibase-item"
                        | "wikibase-lexeme"
                        | "wikibase-property"
                        | "wikibase-sense";
                    values: string | string[];
                    options?: string;
                    validate?: boolean;
                }

                interface WBRemoveClaims extends Params {
                    action?: "wbremoveclaims";
                    claim: string | string[];
                    summary?: string;
                    tags?: string | string[];
                    token?: string;
                    baserevid?: number;
                    bot?: boolean;
                    returnto?: string;
                    returntoquery?: string;
                    returntoanchor?: string;
                }

                interface WBRemoveQualifiers extends Params {
                    action?: "wbremovequalifiers";
                    claim: string;
                    qualifiers: string | string[];
                    summary?: string;
                    tags?: string | string[];
                    token?: string;
                    baserevid?: number;
                    bot?: boolean;
                    returnto?: string;
                    returntoquery?: string;
                    returntoanchor?: string;
                }

                interface WBRemoveReferences extends Params {
                    action?: "wbremovereferences";
                    statement: string;
                    references: string | string[];
                    summary?: string;
                    tags?: string | string[];
                    token?: string;
                    baserevid?: number;
                    bot?: boolean;
                    returnto?: string;
                    returntoquery?: string;
                    returntoanchor?: string;
                }

                interface WBSearchEntities extends Params {
                    action?: "wbsearchentities";
                    search: string;
                    language: string;
                    strictlanguage?: boolean;
                    type?: "entity-schema" | "form" | "item" | "lexeme" | "property" | "sense";
                    limit?: limit;
                    continue?: number;
                    props?: OneOrMore<"url">;
                    profile?: "default" | "language";
                }

                interface WBSetAliases extends Params {
                    action?: "wbsetaliases";
                    id?: string;
                    new?: "item" | "property";
                    site?: string;
                    title?: string;
                    baserevid?: number;
                    summary?: string;
                    tags?: string | string[];
                    token?: string;
                    bot?: boolean;
                    returnto?: string;
                    returntoquery?: string;
                    returntoanchor?: string;
                    add?: string | string[];
                    remove?: string | string[];
                    set?: string | string[];
                    language: string;
                }

                interface WBSetClaim extends Params {
                    action?: "wbsetclaim";
                    claim: string;
                    index?: number;
                    summary?: string;
                    tags?: string | string[];
                    token?: string;
                    baserevid?: number;
                    bot?: boolean;
                    ignoreduplicatemainsnak?: boolean;
                    returnto?: string;
                    returntoquery?: string;
                    returntoanchor?: string;
                }

                interface WBSetClaimValue extends Params {
                    action?: "wbsetclaimvalue";
                    claim: string;
                    value?: string;
                    snaktype: "novalue" | "somevalue" | "value";
                    summary?: string;
                    tags?: string | string[];
                    token?: string;
                    baserevid?: number;
                    bot?: boolean;
                    returnto?: string;
                    returntoquery?: string;
                    returntoanchor?: string;
                }

                interface WBSetDescription extends Params {
                    action?: "wbsetdescription";
                    id?: string;
                    new?: string;
                    site?: string;
                    title?: string;
                    baserevid?: number;
                    summary?: string;
                    tags?: string | string[];
                    token?: string;
                    bot?: boolean;
                    returnto?: string;
                    returntoquery?: string;
                    returntoanchor?: string;
                    language: string;
                    value?: string;
                }

                interface WBSetLabel extends Params {
                    action?: "wbsetlabel";
                    id?: string;
                    new?: string;
                    site?: string;
                    title?: string;
                    baserevid?: number;
                    summary?: string;
                    tags?: string | string[];
                    token?: string;
                    bot?: boolean;
                    returnto?: string;
                    returntoquery?: string;
                    returntoanchor?: string;
                    language: string;
                    value?: string;
                }

                interface WBSetQualifier extends Params {
                    action?: "wbsetqualifier";
                    claim: string;
                    property?: string;
                    value?: string;
                    snaktype?: "novalue" | "somevalue" | "value";
                    snakhash?: string;
                    summary?: string;
                    tags?: string | string[];
                    token?: string;
                    baserevid?: number;
                    bot?: boolean;
                    returnto?: string;
                    returntoquery?: string;
                    returntoanchor?: string;
                }

                interface WBSetReference extends Params {
                    "action"?: "wbsetreference";
                    "statement": string;
                    "snaks": string;
                    "snaks-order"?: string;
                    "reference"?: string;
                    "index"?: number;
                    "summary"?: string;
                    "tags"?: string | string[];
                    "token"?: string;
                    "baserevid"?: number;
                    "bot"?: boolean;
                    "returnto"?: string;
                    "returntoquery"?: string;
                    "returntoanchor"?: string;
                }

                interface WBSetSiteLink extends Params {
                    action?: "wbsetsitelink";
                    id?: string;
                    new?: string;
                    site?: string;
                    title?: string;
                    baserevid?: number;
                    summary?: string;
                    tags?: string | string[];
                    token?: string;
                    bot?: boolean;
                    returnto?: string;
                    returntoquery?: string;
                    returntoanchor?: string;
                    linksite: string;
                    linktitle?: string;
                    badges?: string | string[];
                }

                interface WBSGetSuggestions extends Params {
                    action?: "wbsgetsuggestions";
                    entity?: string;
                    properties?: string | string[];
                    types?: string | string[];
                    limit?: limit;
                    continue?: number;
                    language?: string;
                    context?: "item" | "qualifier" | "reference";
                    include?: "" | "all";
                    search?: string;
                    event?: string;
                }

                interface WebappManifest extends Params {
                    action?: "webapp-manifest";
                }

                interface WebAuthn extends Params {
                    action?: "webauthn";
                    func: "getAuthInfo" | "getRegisterInfo";
                }

                interface WikiFunctionsRun extends Params {
                    action?: "wikifunctions_run";
                    function_call: string;
                }

                /**
                 * @private
                 */
                interface WikiLambdaEdit extends Params {
                    action?: "wikilambda_edit";
                    summary?: string;
                    zid?: string;
                    zobject: string;
                    token?: string;
                }

                interface WikiLambdaFetch extends Params {
                    action?: "wikilambda_fetch";
                    zids: string | string[];
                    revisions?: string | string[];
                    language?: string;
                }

                /**
                 * @private
                 */
                interface WikiLambdaFunctionCall extends Params {
                    action?: "wikilambda_function_call";
                    wikilambda_function_call_zobject: string;
                }

                /**
                 * @private
                 */
                interface WikiLambdaPerformTest extends Params {
                    action?: "wikilambda_perform_test";
                    wikilambda_perform_test_zfunction: string;
                    wikilambda_perform_test_zimplementations?: string | string[];
                    wikilambda_perform_test_ztesters?: string | string[];
                }

                /**
                 * @private
                 */
                interface WikiLambdaSupportedProgrammingLanguages extends Params {
                    action?: "wikilambda_supported_programming_languages";
                }

                interface WikiLove extends Params {
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
                interface WikimediaEventsBlockedEdit extends Params {
                    action?: "wikimediaeventsblockededit";
                    page: string;
                    interface:
                        | "discussiontools"
                        | "mobilefrontend"
                        | "other"
                        | "visualeditor"
                        | "wikieditor";
                    platform: "desktop" | "mobile";
                }
            }

            namespace Format {
                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Data_formats
                 */
                interface Json extends Params {
                    format?: "json";
                    callback?: string;
                    utf8?: boolean;
                    ascii?: boolean;
                    formatversion?: "1" | "2" | "latest";
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Data_formats
                 */
                interface JsonFM extends Params {
                    format?: "jsonfm";
                    wrappedhtml?: boolean;
                    callback?: string;
                    utf8?: boolean;
                    ascii?: boolean;
                    formatversion?: "1" | "2" | "latest";
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Data_formats
                 */
                interface None extends Params {
                    format?: "none";
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Data_formats
                 */
                interface Php extends Params {
                    format?: "php";
                    formatversion?: "1" | "2" | "latest";
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Data_formats
                 */
                interface PhpFM extends Params {
                    format?: "phpfm";
                    wrappedhtml?: boolean;
                    formatversion?: "1" | "2" | "latest";
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Data_formats
                 */
                interface RawFM extends Params {
                    format?: "rawfm";
                    wrappedhtml?: boolean;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Data_formats
                 */
                interface Xml extends Params {
                    format?: "xml";
                    xslt?: string;
                    includexmlnamespace?: boolean;
                }

                /**
                 * @see https://www.mediawiki.org/wiki/Special:MyLanguage/API:Data_formats
                 */
                interface XmlFM extends Params {
                    format?: "xmlfm";
                    wrappedhtml?: boolean;
                    xslt?: string;
                    includexmlnamespace?: boolean;
                }
            }
        }
    }
}

/** @deprecated Use {@link mw.Api.Params.Action.AbuseFilterCheckMatch `Partial<mw.Api.Params.Action.AbuseFilterCheckMatch>`} instead. */
export type AbuseFilterApiCheckMatchParams = Partial<mw.Api.Params.Action.AbuseFilterCheckMatch>;

/** @deprecated Use {@link mw.Api.Params.Action.AbuseFilterCheckSyntax `Partial<mw.Api.Params.Action.AbuseFilterCheckSyntax>`} instead. */
export type AbuseFilterApiCheckSyntaxParams = Partial<mw.Api.Params.Action.AbuseFilterCheckSyntax>;

/** @deprecated Use {@link mw.Api.Params.Action.AbuseFilterEvalExpression `Partial<mw.Api.Params.Action.AbuseFilterEvalExpression>`} instead. */
export type AbuseFilterApiEvalExpressionParams = Partial<mw.Api.Params.Action.AbuseFilterEvalExpression>;

/** @deprecated Use {@link mw.Api.Params.Action.AbuseFilterUnblockAutopromote `Partial<mw.Api.Params.Action.AbuseFilterUnblockAutopromote>`} instead. */
export type AbuseFilterApiUnblockAutopromoteParams = Partial<mw.Api.Params.Action.AbuseFilterUnblockAutopromote>;

/** @deprecated Use {@link mw.Api.Params.Action.AbuseLogPrivateDetails `Partial<mw.Api.Params.Action.AbuseLogPrivateDetails>`} instead. */
export type AbuseFilterApiAbuseLogPrivateDetailsParams = Partial<mw.Api.Params.Action.AbuseLogPrivateDetails>;

/** @deprecated Use {@link mw.Api.Params.Action.AcquireTempUserName `Partial<mw.Api.Params.Action.AcquireTempUserName>`} instead. */
export type ApiAcquireTempUserNameParams = Partial<mw.Api.Params.Action.AcquireTempUserName>;

/** @deprecated Use {@link mw.Api.Params.Action.AggregateGroups `Partial<mw.Api.Params.Action.AggregateGroups>`} instead. */
export type TranslateMessageGroupProcessingAggregateGroupsActionApiParams = Partial<mw.Api.Params.Action.AggregateGroups>;

/** @deprecated Use {@link mw.Api.Params.Action.AntiSpoof `Partial<mw.Api.Params.Action.AntiSpoof>`} instead. */
export type AntiSpoofApiAntiSpoofParams = Partial<mw.Api.Params.Action.AntiSpoof>;

/** @deprecated Use {@link mw.Api.Params.Action.Block `Partial<mw.Api.Params.Action.Block>`} instead. */
export type ApiBlockParams = Partial<mw.Api.Params.Action.Block>;

/** @deprecated Use {@link mw.Api.Params.Action.BounceHandler `Partial<mw.Api.Params.Action.BounceHandler>`} instead. */
export type BounceHandlerApiBounceHandlerParams = Partial<mw.Api.Params.Action.BounceHandler>;

/** @deprecated Use {@link mw.Api.Params.Action.CategoryTree `Partial<mw.Api.Params.Action.CategoryTree>`} instead. */
export type CategoryTreeApiCategoryTreeParams = Partial<mw.Api.Params.Action.CategoryTree>;

/** @deprecated Use {@link mw.Api.Params.Action.CentralAuthToken `Partial<mw.Api.Params.Action.CentralAuthToken>`} instead. */
export type CentralAuthApiCentralAuthTokenParams = Partial<mw.Api.Params.Action.CentralAuthToken>;

/** @deprecated Use {@link mw.Api.Params.Action.CentralNoticeCdnCacheUpdateBanner `Partial<mw.Api.Params.Action.CentralNoticeCdnCacheUpdateBanner>`} instead. */
export type ApiCentralNoticeCdnCacheUpdateBannerParams = Partial<mw.Api.Params.Action.CentralNoticeCdnCacheUpdateBanner>;

/** @deprecated Use {@link mw.Api.Params.Action.CentralNoticeChoiceData `Partial<mw.Api.Params.Action.CentralNoticeChoiceData>`} instead. */
export type ApiCentralNoticeChoiceDataParams = Partial<mw.Api.Params.Action.CentralNoticeChoiceData>;

/** @deprecated Use {@link mw.Api.Params.Action.CentralNoticeQueryCampaign `Partial<mw.Api.Params.Action.CentralNoticeQueryCampaign>`} instead. */
export type ApiCentralNoticeQueryCampaignParams = Partial<mw.Api.Params.Action.CentralNoticeQueryCampaign>;

/** @deprecated Use {@link mw.Api.Params.Action.ChangeAuthenticationData `Partial<mw.Api.Params.Action.ChangeAuthenticationData>`} instead. */
export type ApiChangeAuthenticationDataParams = Partial<mw.Api.Params.Action.ChangeAuthenticationData>;

/** @deprecated Use {@link mw.Api.Params.Action.ChangeContentModel `Partial<mw.Api.Params.Action.ChangeContentModel>`} instead. */
export type ApiChangeContentModelParams = Partial<mw.Api.Params.Action.ChangeContentModel>;

/** @deprecated Use {@link mw.Api.Params.Action.CheckToken `Partial<mw.Api.Params.Action.CheckToken>`} instead. */
export type ApiCheckTokenParams = Partial<mw.Api.Params.Action.CheckToken>;

/** @deprecated Use {@link mw.Api.Params.Action.CirrusCheckSanity `Partial<mw.Api.Params.Action.CirrusCheckSanity>`} instead. */
export type CirrusSearchApiCheckSanityParams = Partial<mw.Api.Params.Action.CirrusCheckSanity>;

/** @deprecated Use {@link mw.Api.Params.Action.CirrusConfigDump `Partial<mw.Api.Params.Action.CirrusConfigDump>`} instead. */
export type CirrusSearchApiConfigDumpParams = Partial<mw.Api.Params.Action.CirrusConfigDump>;

/** @deprecated Use {@link mw.Api.Params.Action.CirrusMappingDump `Partial<mw.Api.Params.Action.CirrusMappingDump>`} instead. */
export type CirrusSearchApiMappingDumpParams = Partial<mw.Api.Params.Action.CirrusMappingDump>;

/** @deprecated Use {@link mw.Api.Params.Action.CirrusProfilesDump `Partial<mw.Api.Params.Action.CirrusProfilesDump>`} instead. */
export type CirrusSearchApiProfilesDumpParams = Partial<mw.Api.Params.Action.CirrusProfilesDump>;

/** @deprecated Use {@link mw.Api.Params.Action.CirrusSettingsDump `Partial<mw.Api.Params.Action.CirrusSettingsDump>`} instead. */
export type CirrusSearchApiSettingsDumpParams = Partial<mw.Api.Params.Action.CirrusSettingsDump>;

/** @deprecated Use {@link mw.Api.Params.Action.ClearHasMsg `Partial<mw.Api.Params.Action.ClearHasMsg>`} instead. */
export type ApiClearHasMsgParams = Partial<mw.Api.Params.Action.ClearHasMsg>;

/** @deprecated Use {@link mw.Api.Params.Action.ClientLogin `Partial<mw.Api.Params.Action.ClientLogin>`} instead. */
export type ApiClientLoginParams = Partial<mw.Api.Params.Action.ClientLogin>;

/** @deprecated Use {@link mw.Api.Params.Action.Collection `Partial<mw.Api.Params.Action.Collection>`} instead. */
export type CollectionApiCollectionParams = Partial<mw.Api.Params.Action.Collection>;

/** @deprecated Use {@link mw.Api.Params.Action.CommunityConfigurationEdit `Partial<mw.Api.Params.Action.CommunityConfigurationEdit>`} instead. */
export type CommunityConfigurationApiEditParams = Partial<mw.Api.Params.Action.CommunityConfigurationEdit>;

/** @deprecated Use {@link mw.Api.Params.Action.Compare `Partial<mw.Api.Params.Action.Compare>`} instead. */
export type ApiComparePagesParams = Partial<mw.Api.Params.Action.Compare>;

/** @deprecated Use {@link mw.Api.Params.Action.CreateAccount `Partial<mw.Api.Params.Action.CreateAccount>`} instead. */
export type ApiAMCreateAccountParams = Partial<mw.Api.Params.Action.CreateAccount>;

/** @deprecated Use {@link mw.Api.Params.Action.CreateLocalAccount `Partial<mw.Api.Params.Action.CreateLocalAccount>`} instead. */
export type CentralAuthApiCreateLocalAccountParams = Partial<mw.Api.Params.Action.CreateLocalAccount>;

/** @deprecated Use {@link mw.Api.Params.Action.CSPReport `Partial<mw.Api.Params.Action.CSPReport>`} instead. */
export type ApiCSPReportParams = Partial<mw.Api.Params.Action.CSPReport>;

/** @deprecated Use {@link mw.Api.Params.Action.CXCheckUnreviewed `Partial<mw.Api.Params.Action.CXCheckUnreviewed>`} instead. */
export type ContentTranslationActionApiContentTranslationUnreviewedCheckParams = Partial<mw.Api.Params.Action.CXCheckUnreviewed>;

/** @deprecated Use {@link mw.Api.Params.Action.CXDelete `Partial<mw.Api.Params.Action.CXDelete>`} instead. */
export type ContentTranslationActionApiContentTranslationDeleteParams = Partial<mw.Api.Params.Action.CXDelete>;

/** @deprecated Use {@link mw.Api.Params.Action.CXPublish `Partial<mw.Api.Params.Action.CXPublish>`} instead. */
export type ContentTranslationActionApiContentTranslationPublishParams = Partial<mw.Api.Params.Action.CXPublish>;

/** @deprecated Use {@link mw.Api.Params.Action.CXPublishSection `Partial<mw.Api.Params.Action.CXPublishSection>`} instead. */
export type ContentTranslationActionApiSectionTranslationPublishParams = Partial<mw.Api.Params.Action.CXPublishSection>;

/** @deprecated Use {@link mw.Api.Params.Action.CXSave `Partial<mw.Api.Params.Action.CXSave>`} instead. */
export type ContentTranslationActionApiContentTranslationSaveParams = Partial<mw.Api.Params.Action.CXSave>;

/** @deprecated Use {@link mw.Api.Params.Action.CXSplit `Partial<mw.Api.Params.Action.CXSplit>`} instead. */
export type ContentTranslationActionApiContentTranslationSplitParams = Partial<mw.Api.Params.Action.CXSplit>;

/** @deprecated Use {@link mw.Api.Params.Action.CXSuggestionList `Partial<mw.Api.Params.Action.CXSuggestionList>`} instead. */
export type ContentTranslationActionApiContentTranslationSuggestionListParams = Partial<mw.Api.Params.Action.CXSuggestionList>;

/** @deprecated Use {@link mw.Api.Params.Action.CXToken `Partial<mw.Api.Params.Action.CXToken>`} instead. */
export type ContentTranslationActionApiContentTranslationTokenParams = Partial<mw.Api.Params.Action.CXToken>;

/** @deprecated Use {@link mw.Api.Params.Action.Delete `Partial<mw.Api.Params.Action.Delete>`} instead. */
export type ApiDeleteParams = Partial<mw.Api.Params.Action.Delete>;

/** @deprecated Use {@link mw.Api.Params.Action.DeleteGlobalAccount `Partial<mw.Api.Params.Action.DeleteGlobalAccount>`} instead. */
export type CentralAuthApiDeleteGlobalAccountParams = Partial<mw.Api.Params.Action.DeleteGlobalAccount>;

/** @deprecated Use {@link mw.Api.Params.Action.DiscussionToolsCompare `Partial<mw.Api.Params.Action.DiscussionToolsCompare>`} instead. */
export type DiscussionToolsApiDiscussionToolsCompareParams = Partial<mw.Api.Params.Action.DiscussionToolsCompare>;

/** @deprecated Use {@link mw.Api.Params.Action.DiscussionToolsEdit `Partial<mw.Api.Params.Action.DiscussionToolsEdit>`} instead. */
export type DiscussionToolsApiDiscussionToolsEditParams = Partial<mw.Api.Params.Action.DiscussionToolsEdit>;

/** @deprecated Use {@link mw.Api.Params.Action.DiscussionToolsFindComment `Partial<mw.Api.Params.Action.DiscussionToolsFindComment>`} instead. */
export type DiscussionToolsApiDiscussionToolsFindCommentParams = Partial<mw.Api.Params.Action.DiscussionToolsFindComment>;

/** @deprecated Use {@link mw.Api.Params.Action.DiscussionToolsGetSubscriptions `Partial<mw.Api.Params.Action.DiscussionToolsGetSubscriptions>`} instead. */
export type DiscussionToolsApiDiscussionToolsGetSubscriptionsParams = Partial<mw.Api.Params.Action.DiscussionToolsGetSubscriptions>;

/** @deprecated Use {@link mw.Api.Params.Action.DiscussionToolsPageInfo `Partial<mw.Api.Params.Action.DiscussionToolsPageInfo>`} instead. */
export type DiscussionToolsApiDiscussionToolsPageInfoParams = Partial<mw.Api.Params.Action.DiscussionToolsPageInfo>;

/** @deprecated Use {@link mw.Api.Params.Action.DiscussionToolsPreview `Partial<mw.Api.Params.Action.DiscussionToolsPreview>`} instead. */
export type DiscussionToolsApiDiscussionToolsPreviewParams = Partial<mw.Api.Params.Action.DiscussionToolsPreview>;

/** @deprecated Use {@link mw.Api.Params.Action.DiscussionToolsSubscribe `Partial<mw.Api.Params.Action.DiscussionToolsSubscribe>`} instead. */
export type DiscussionToolsApiDiscussionToolsSubscribeParams = Partial<mw.Api.Params.Action.DiscussionToolsSubscribe>;

/** @deprecated Use {@link mw.Api.Params.Action.DiscussionToolsThank `Partial<mw.Api.Params.Action.DiscussionToolsThank>`} instead. */
export type DiscussionToolsApiDiscussionToolsThankParams = Partial<mw.Api.Params.Action.DiscussionToolsThank>;

/** @deprecated Use {@link mw.Api.Params.Action.EchoCreateEvent `Partial<mw.Api.Params.Action.EchoCreateEvent>`} instead. */
export type NotificationsApiEchoCreateEventParams = Partial<mw.Api.Params.Action.EchoCreateEvent>;

/** @deprecated Use {@link mw.Api.Params.Action.EchoMarkRead `Partial<mw.Api.Params.Action.EchoMarkRead>`} instead. */
export type NotificationsApiEchoMarkReadParams = Partial<mw.Api.Params.Action.EchoMarkRead>;

/** @deprecated Use {@link mw.Api.Params.Action.EchoMarkSeen `Partial<mw.Api.Params.Action.EchoMarkSeen>`} instead. */
export type NotificationsApiEchoMarkSeenParams = Partial<mw.Api.Params.Action.EchoMarkSeen>;

/** @deprecated Use {@link mw.Api.Params.Action.EchoMute `Partial<mw.Api.Params.Action.EchoMute>`} instead. */
export type NotificationsApiEchoMuteParams = Partial<mw.Api.Params.Action.EchoMute>;

/** @deprecated Use {@link mw.Api.Params.Action.EchoPushSubscriptions `Partial<mw.Api.Params.Action.EchoPushSubscriptions>`} instead. */
export type NotificationsPushApiEchoPushSubscriptionsParams = Partial<mw.Api.Params.Action.EchoPushSubscriptions>;

/** @deprecated Use {@link mw.Api.Params.Action.Edit `Partial<mw.Api.Params.Action.Edit>`} instead. */
export type ApiEditPageParams = Partial<mw.Api.Params.Action.Edit>;

/** @deprecated Use {@link mw.Api.Params.Action.EditCheckReferenceUrl `Partial<mw.Api.Params.Action.EditCheckReferenceUrl>`} instead. */
export type VisualEditorEditCheckApiEditCheckReferenceUrlParams = Partial<mw.Api.Params.Action.EditCheckReferenceUrl>;

/** @deprecated Use {@link mw.Api.Params.Action.EditMassMessageList `Partial<mw.Api.Params.Action.EditMassMessageList>`} instead. */
export type MediaWikiMassMessageApiEditMassMessageListParams = Partial<mw.Api.Params.Action.EditMassMessageList>;

/** @deprecated Use {@link mw.Api.Params.Action.EmailUser `Partial<mw.Api.Params.Action.EmailUser>`} instead. */
export type ApiEmailUserParams = Partial<mw.Api.Params.Action.EmailUser>;

/** @deprecated Use {@link mw.Api.Params.Action.ExpandTemplates `Partial<mw.Api.Params.Action.ExpandTemplates>`} instead. */
export type ApiExpandTemplatesParams = Partial<mw.Api.Params.Action.ExpandTemplates>;

/** @deprecated Use {@link mw.Api.Params.Action.FancyCaptchaReload `Partial<mw.Api.Params.Action.FancyCaptchaReload>`} instead. */
export type ConfirmEditFancyCaptchaApiFancyCaptchaReloadParams = Partial<mw.Api.Params.Action.FancyCaptchaReload>;

/** @deprecated Use {@link mw.Api.Params.Action.FeaturedFeed `Partial<mw.Api.Params.Action.FeaturedFeed>`} instead. */
export type FeaturedFeedsApiFeaturedFeedsParams = Partial<mw.Api.Params.Action.FeaturedFeed>;

/** @deprecated Use {@link mw.Api.Params.Action.FeedContributions `Partial<mw.Api.Params.Action.FeedContributions>`} instead. */
export type ApiFeedContributionsParams = Partial<mw.Api.Params.Action.FeedContributions>;

/** @deprecated Use {@link mw.Api.Params.Action.FeedRecentChanges `Partial<mw.Api.Params.Action.FeedRecentChanges>`} instead. */
export type ApiFeedRecentChangesParams = Partial<mw.Api.Params.Action.FeedRecentChanges>;

/** @deprecated Use {@link mw.Api.Params.Action.FeedThreads `Partial<mw.Api.Params.Action.FeedThreads>`} instead. */
export type LiquidThreadsApiFeedLQTThreadsParams = Partial<mw.Api.Params.Action.FeedThreads>;

/** @deprecated Use {@link mw.Api.Params.Action.FeedWatchlist `Partial<mw.Api.Params.Action.FeedWatchlist>`} instead. */
export type ApiFeedWatchlistParams = Partial<mw.Api.Params.Action.FeedWatchlist>;

/** @deprecated Use {@link mw.Api.Params.Action.FileRevert `Partial<mw.Api.Params.Action.FileRevert>`} instead. */
export type ApiFileRevertParams = Partial<mw.Api.Params.Action.FileRevert>;

/** @deprecated Use {@link mw.Api.Params.Action.FlagConfig `Partial<mw.Api.Params.Action.FlagConfig>`} instead. */
export type ApiFlagConfigParams = Partial<mw.Api.Params.Action.FlagConfig>;

/** @deprecated Use {@link mw.Api.Params.Action.FlickrBlacklist `Partial<mw.Api.Params.Action.FlickrBlacklist>`} instead. */
export type UploadWizardApiFlickrBlacklistParams = Partial<mw.Api.Params.Action.FlickrBlacklist>;

/** @deprecated Use {@link mw.Api.Params.Action.Flow `Partial<mw.Api.Params.Action.Flow>`} instead. */
export type FlowApiFlowParams = Partial<mw.Api.Params.Action.Flow>;

/** @deprecated Use {@link mw.Api.Params.Action.FlowParsoidUtils `Partial<mw.Api.Params.Action.FlowParsoidUtils>`} instead. */
export type FlowApiParsoidUtilsFlowParams = Partial<mw.Api.Params.Action.FlowParsoidUtils>;

/** @deprecated Use {@link mw.Api.Params.Action.FlowThank `Partial<mw.Api.Params.Action.FlowThank>`} instead. */
export type ThanksApiFlowThankParams = Partial<mw.Api.Params.Action.FlowThank>;

/** @deprecated Use {@link mw.Api.Params.Action.GlobalBlock `Partial<mw.Api.Params.Action.GlobalBlock>`} instead. */
export type GlobalBlockingApiGlobalBlockParams = Partial<mw.Api.Params.Action.GlobalBlock>;

/** @deprecated Use {@link mw.Api.Params.Action.GlobalPreferenceOverrides `Partial<mw.Api.Params.Action.GlobalPreferenceOverrides>`} instead. */
export type GlobalPreferencesApiGlobalPreferenceOverridesParams = Partial<mw.Api.Params.Action.GlobalPreferenceOverrides>;

/** @deprecated Use {@link mw.Api.Params.Action.GlobalPreferences `Partial<mw.Api.Params.Action.GlobalPreferences>`} instead. */
export type GlobalPreferencesApiGlobalPreferencesParams = Partial<mw.Api.Params.Action.GlobalPreferences>;

/** @deprecated Use {@link mw.Api.Params.Action.GlobalUserRights `Partial<mw.Api.Params.Action.GlobalUserRights>`} instead. */
export type CentralAuthApiGlobalUserRightsParams = Partial<mw.Api.Params.Action.GlobalUserRights>;

/** @deprecated Use {@link mw.Api.Params.Action.GroupReview `Partial<mw.Api.Params.Action.GroupReview>`} instead. */
export type TranslateMessageGroupProcessingGroupReviewActionApiParams = Partial<mw.Api.Params.Action.GroupReview>;

/** @deprecated Use {@link mw.Api.Params.Action.GrowthInvalidateImageRecommendation `Partial<mw.Api.Params.Action.GrowthInvalidateImageRecommendation>`} instead. */
export type GrowthExperimentsApiInvalidateImageRecommendationParams = Partial<mw.Api.Params.Action.GrowthInvalidateImageRecommendation>;

/** @deprecated Use {@link mw.Api.Params.Action.GrowthInvalidatePersonalizedPraiseSuggestion `Partial<mw.Api.Params.Action.GrowthInvalidatePersonalizedPraiseSuggestion>`} instead. */
export type GrowthExperimentsApiInvalidatePersonalizedPraiseSuggestionParams = Partial<mw.Api.Params.Action.GrowthInvalidatePersonalizedPraiseSuggestion>;

/** @deprecated Use {@link mw.Api.Params.Action.GrowthManageMentorList `Partial<mw.Api.Params.Action.GrowthManageMentorList>`} instead. */
export type GrowthExperimentsApiManageMentorListParams = Partial<mw.Api.Params.Action.GrowthManageMentorList>;

/** @deprecated Use {@link mw.Api.Params.Action.GrowthMentorDashboardUpdateData `Partial<mw.Api.Params.Action.GrowthMentorDashboardUpdateData>`} instead. */
export type GrowthExperimentsApiMentorDashboardUpdateDataParams = Partial<mw.Api.Params.Action.GrowthMentorDashboardUpdateData>;

/** @deprecated Use {@link mw.Api.Params.Action.GrowthSetMenteeStatus `Partial<mw.Api.Params.Action.GrowthSetMenteeStatus>`} instead. */
export type GrowthExperimentsApiSetMenteeStatusParams = Partial<mw.Api.Params.Action.GrowthSetMenteeStatus>;

/** @deprecated Use {@link mw.Api.Params.Action.GrowthSetMentor `Partial<mw.Api.Params.Action.GrowthSetMentor>`} instead. */
export type GrowthExperimentsApiSetMentorParams = Partial<mw.Api.Params.Action.GrowthSetMentor>;

/** @deprecated Use {@link mw.Api.Params.Action.GrowthStarMentee `Partial<mw.Api.Params.Action.GrowthStarMentee>`} instead. */
export type GrowthExperimentsApiStarMenteeParams = Partial<mw.Api.Params.Action.GrowthStarMentee>;

/** @deprecated Use {@link mw.Api.Params.Action.Help `Partial<mw.Api.Params.Action.Help>`} instead. */
export type ApiHelpParams = Partial<mw.Api.Params.Action.Help>;

/** @deprecated Use {@link mw.Api.Params.Action.HelpPanelQuestionPoster `Partial<mw.Api.Params.Action.HelpPanelQuestionPoster>`} instead. */
export type GrowthExperimentsApiHelpPanelPostQuestionParams = Partial<mw.Api.Params.Action.HelpPanelQuestionPoster>;

/** @deprecated Use {@link mw.Api.Params.Action.HomePageQuestionStore `Partial<mw.Api.Params.Action.HomePageQuestionStore>`} instead. */
export type GrowthExperimentsApiQuestionStoreParams = Partial<mw.Api.Params.Action.HomePageQuestionStore>;

/** @deprecated Use {@link mw.Api.Params.Action.ImageRotate `Partial<mw.Api.Params.Action.ImageRotate>`} instead. */
export type ApiDisabledParams = Partial<mw.Api.Params.Action.ImageRotate>;

/** @deprecated Use {@link mw.Api.Params.Action.Import `Partial<mw.Api.Params.Action.Import>`} instead. */
export type ApiImportParams = Partial<mw.Api.Params.Action.Import>;

/** @deprecated Use {@link mw.Api.Params.Action.JsonConfig `Partial<mw.Api.Params.Action.JsonConfig>`} instead. */
export type JsonConfigJCApiParams = Partial<mw.Api.Params.Action.JsonConfig>;

/** @deprecated Use {@link mw.Api.Params.Action.JsonData `Partial<mw.Api.Params.Action.JsonData>`} instead. */
export type JsonConfigJCDataApiParams = Partial<mw.Api.Params.Action.JsonData>;

/** @deprecated Use {@link mw.Api.Params.Action.JsonSchema `Partial<mw.Api.Params.Action.JsonSchema>`} instead. */
export type EventLoggingApiJsonSchemaParams = Partial<mw.Api.Params.Action.JsonSchema>;

/** @deprecated Use {@link mw.Api.Params.Action.LanguageSearch `Partial<mw.Api.Params.Action.LanguageSearch>`} instead. */
export type UniversalLanguageSelectorApiLanguageSearchParams = Partial<mw.Api.Params.Action.LanguageSearch>;

/** @deprecated Use {@link mw.Api.Params.Action.LinkAccount `Partial<mw.Api.Params.Action.LinkAccount>`} instead. */
export type ApiLinkAccountParams = Partial<mw.Api.Params.Action.LinkAccount>;

/** @deprecated Use {@link mw.Api.Params.Action.Login `Partial<mw.Api.Params.Action.Login>`} instead. */
export type ApiLoginParams = Partial<mw.Api.Params.Action.Login>;

/** @deprecated Use {@link mw.Api.Params.Action.Logout `Partial<mw.Api.Params.Action.Logout>`} instead. */
export type ApiLogoutParams = Partial<mw.Api.Params.Action.Logout>;

/** @deprecated Use {@link mw.Api.Params.Action.ManageGroupSynchronizationCache `Partial<mw.Api.Params.Action.ManageGroupSynchronizationCache>`} instead. */
export type TranslateSynchronizationManageGroupSynchronizationCacheActionApiParams = Partial<mw.Api.Params.Action.ManageGroupSynchronizationCache>;

/** @deprecated Use {@link mw.Api.Params.Action.ManageMessageGroups `Partial<mw.Api.Params.Action.ManageMessageGroups>`} instead. */
export type TranslateMessageGroupProcessingManageMessageGroupsActionApiParams = Partial<mw.Api.Params.Action.ManageMessageGroups>;

/** @deprecated Use {@link mw.Api.Params.Action.ManageTags `Partial<mw.Api.Params.Action.ManageTags>`} instead. */
export type ApiManageTagsParams = Partial<mw.Api.Params.Action.ManageTags>;

/** @deprecated Use {@link mw.Api.Params.Action.MarkForTranslation `Partial<mw.Api.Params.Action.MarkForTranslation>`} instead. */
export type TranslatePageTranslationMarkForTranslationActionApiParams = Partial<mw.Api.Params.Action.MarkForTranslation>;

/** @deprecated Use {@link mw.Api.Params.Action.MassMessage `Partial<mw.Api.Params.Action.MassMessage>`} instead. */
export type MediaWikiMassMessageApiMassMessageParams = Partial<mw.Api.Params.Action.MassMessage>;

/** @deprecated Use {@link mw.Api.Params.Action.MediaDetection `Partial<mw.Api.Params.Action.MediaDetection>`} instead. */
export type UploadWizardApiMediaDetectionParams = Partial<mw.Api.Params.Action.MediaDetection>;

/** @deprecated Use {@link mw.Api.Params.Action.MergeHistory `Partial<mw.Api.Params.Action.MergeHistory>`} instead. */
export type ApiMergeHistoryParams = Partial<mw.Api.Params.Action.MergeHistory>;

/** @deprecated Use {@link mw.Api.Params.Action.MessageGroupSubscription `Partial<mw.Api.Params.Action.MessageGroupSubscription>`} instead. */
export type TranslateMessageGroupProcessingMessageGroupSubscriptionActionApiParams = Partial<mw.Api.Params.Action.MessageGroupSubscription>;

/** @deprecated Use {@link mw.Api.Params.Action.Move `Partial<mw.Api.Params.Action.Move>`} instead. */
export type ApiMoveParams = Partial<mw.Api.Params.Action.Move>;

/** @deprecated Use {@link mw.Api.Params.Action.NewsletterSubscribe `Partial<mw.Api.Params.Action.NewsletterSubscribe>`} instead. */
export type NewsletterApiNewsletterSubscribeParams = Partial<mw.Api.Params.Action.NewsletterSubscribe>;

/** @deprecated Use {@link mw.Api.Params.Action.OATHValidate `Partial<mw.Api.Params.Action.OATHValidate>`} instead. */
export type OATHAuthApiModuleApiOATHValidateParams = Partial<mw.Api.Params.Action.OATHValidate>;

/** @deprecated Use {@link mw.Api.Params.Action.OpenSearch `Partial<mw.Api.Params.Action.OpenSearch>`} instead. */
export type ApiOpenSearchParams = Partial<mw.Api.Params.Action.OpenSearch>;

/** @deprecated Use {@link mw.Api.Params.Action.Options `Partial<mw.Api.Params.Action.Options>`} instead. */
export type ApiOptionsParams = Partial<mw.Api.Params.Action.Options>;

/** @deprecated Use {@link mw.Api.Params.Action.PageTriageAction `Partial<mw.Api.Params.Action.PageTriageAction>`} instead. */
export type PageTriageApiPageTriageActionParams = Partial<mw.Api.Params.Action.PageTriageAction>;

/** @deprecated Use {@link mw.Api.Params.Action.PageTriageList `Partial<mw.Api.Params.Action.PageTriageList>`} instead. */
export type PageTriageApiPageTriageListParams = Partial<mw.Api.Params.Action.PageTriageList>;

/** @deprecated Use {@link mw.Api.Params.Action.PageTriageStats `Partial<mw.Api.Params.Action.PageTriageStats>`} instead. */
export type PageTriageApiPageTriageStatsParams = Partial<mw.Api.Params.Action.PageTriageStats>;

/** @deprecated Use {@link mw.Api.Params.Action.PageTriageTagCopyvio `Partial<mw.Api.Params.Action.PageTriageTagCopyvio>`} instead. */
export type PageTriageApiPageTriageTagCopyvioParams = Partial<mw.Api.Params.Action.PageTriageTagCopyvio>;

/** @deprecated Use {@link mw.Api.Params.Action.PageTriageTagging `Partial<mw.Api.Params.Action.PageTriageTagging>`} instead. */
export type PageTriageApiPageTriageTaggingParams = Partial<mw.Api.Params.Action.PageTriageTagging>;

/** @deprecated Use {@link mw.Api.Params.Action.ParamInfo `Partial<mw.Api.Params.Action.ParamInfo>`} instead. */
export type ApiParamInfoParams = Partial<mw.Api.Params.Action.ParamInfo>;

/** @deprecated Use {@link mw.Api.Params.Action.Parse `Partial<mw.Api.Params.Action.Parse>`} instead. */
export type ApiParseParams = Partial<mw.Api.Params.Action.Parse>;

/** @deprecated Use {@link mw.Api.Params.Action.ParserMigration `Partial<mw.Api.Params.Action.ParserMigration>`} instead. */
export type ParserMigrationApiParserMigrationParams = Partial<mw.Api.Params.Action.ParserMigration>;

/** @deprecated Use {@link mw.Api.Params.Action.Patrol `Partial<mw.Api.Params.Action.Patrol>`} instead. */
export type ApiPatrolParams = Partial<mw.Api.Params.Action.Patrol>;

/** @deprecated Use {@link mw.Api.Params.Action.Protect `Partial<mw.Api.Params.Action.Protect>`} instead. */
export type ApiProtectParams = Partial<mw.Api.Params.Action.Protect>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.AllCategories `Partial<mw.Api.Params.Action.Purge.Generator.AllCategories>`} / {@link mw.Api.Params.Action.Query.List.AllCategories `Partial<mw.Api.Params.Action.Query.List.AllCategories>`} / {@link mw.Api.Params.Action.Query.Generator.AllCategories `Partial<mw.Api.Params.Action.Query.Generator.AllCategories>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.AllCategories `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.AllCategories>`} / {@link mw.Api.Params.Action.TemplateData.Generator.AllCategories `Partial<mw.Api.Params.Action.TemplateData.Generator.AllCategories>`} / {@link mw.Api.Params.Action.Watch.Generator.AllCategories `Partial<mw.Api.Params.Action.Watch.Generator.AllCategories>`} instead. */
export type ApiQueryAllCategoriesParams = Partial<mw.Api.Params.Action.Purge.Generator.AllCategories>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.AllDeletedRevisions `Partial<mw.Api.Params.Action.Purge.Generator.AllDeletedRevisions>`} / {@link mw.Api.Params.Action.Query.List.AllDeletedRevisions `Partial<mw.Api.Params.Action.Query.List.AllDeletedRevisions>`} / {@link mw.Api.Params.Action.Query.Generator.AllDeletedRevisions `Partial<mw.Api.Params.Action.Query.Generator.AllDeletedRevisions>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.AllDeletedRevisions `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.AllDeletedRevisions>`} / {@link mw.Api.Params.Action.TemplateData.Generator.AllDeletedRevisions `Partial<mw.Api.Params.Action.TemplateData.Generator.AllDeletedRevisions>`} / {@link mw.Api.Params.Action.Watch.Generator.AllDeletedRevisions `Partial<mw.Api.Params.Action.Watch.Generator.AllDeletedRevisions>`} instead. */
export type ApiQueryAllDeletedRevisionsParams = Partial<mw.Api.Params.Action.Purge.Generator.AllDeletedRevisions>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.AllFileUsages `Partial<mw.Api.Params.Action.Purge.Generator.AllFileUsages>`} / {@link mw.Api.Params.Action.Purge.Generator.AllLinks `Partial<mw.Api.Params.Action.Purge.Generator.AllLinks>`} / {@link mw.Api.Params.Action.Purge.Generator.AllRedirects `Partial<mw.Api.Params.Action.Purge.Generator.AllRedirects>`} / {@link mw.Api.Params.Action.Purge.Generator.AllTransclusions `Partial<mw.Api.Params.Action.Purge.Generator.AllTransclusions>`} / {@link mw.Api.Params.Action.Query.List.AllFileUsages `Partial<mw.Api.Params.Action.Query.List.AllFileUsages>`} / {@link mw.Api.Params.Action.Query.List.AllLinks `Partial<mw.Api.Params.Action.Query.List.AllLinks>`} / {@link mw.Api.Params.Action.Query.List.AllRedirects `Partial<mw.Api.Params.Action.Query.List.AllRedirects>`} / {@link mw.Api.Params.Action.Query.List.AllTransclusions `Partial<mw.Api.Params.Action.Query.List.AllTransclusions>`} / {@link mw.Api.Params.Action.Query.Generator.AllFileUsages `Partial<mw.Api.Params.Action.Query.Generator.AllFileUsages>`} / {@link mw.Api.Params.Action.Query.Generator.AllLinks `Partial<mw.Api.Params.Action.Query.Generator.AllLinks>`} / {@link mw.Api.Params.Action.Query.Generator.AllRedirects `Partial<mw.Api.Params.Action.Query.Generator.AllRedirects>`} / {@link mw.Api.Params.Action.Query.Generator.AllTransclusions `Partial<mw.Api.Params.Action.Query.Generator.AllTransclusions>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.AllFileUsages `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.AllFileUsages>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.AllLinks `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.AllLinks>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.AllRedirects `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.AllRedirects>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.AllTransclusions `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.AllTransclusions>`} / {@link mw.Api.Params.Action.TemplateData.Generator.AllFileUsages `Partial<mw.Api.Params.Action.TemplateData.Generator.AllFileUsages>`} / {@link mw.Api.Params.Action.TemplateData.Generator.AllLinks `Partial<mw.Api.Params.Action.TemplateData.Generator.AllLinks>`} / {@link mw.Api.Params.Action.TemplateData.Generator.AllRedirects `Partial<mw.Api.Params.Action.TemplateData.Generator.AllRedirects>`} / {@link mw.Api.Params.Action.TemplateData.Generator.AllTransclusions `Partial<mw.Api.Params.Action.TemplateData.Generator.AllTransclusions>`} / {@link mw.Api.Params.Action.Watch.Generator.AllFileUsages `Partial<mw.Api.Params.Action.Watch.Generator.AllFileUsages>`} / {@link mw.Api.Params.Action.Watch.Generator.AllLinks `Partial<mw.Api.Params.Action.Watch.Generator.AllLinks>`} / {@link mw.Api.Params.Action.Watch.Generator.AllRedirects `Partial<mw.Api.Params.Action.Watch.Generator.AllRedirects>`} / {@link mw.Api.Params.Action.Watch.Generator.AllTransclusions `Partial<mw.Api.Params.Action.Watch.Generator.AllTransclusions>`} instead. */
export type ApiQueryAllLinksParams = Partial<mw.Api.Params.Action.Purge.Generator.AllFileUsages>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.AllImages `Partial<mw.Api.Params.Action.Purge.Generator.AllImages>`} / {@link mw.Api.Params.Action.Query.List.AllImages `Partial<mw.Api.Params.Action.Query.List.AllImages>`} / {@link mw.Api.Params.Action.Query.Generator.AllImages `Partial<mw.Api.Params.Action.Query.Generator.AllImages>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.AllImages `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.AllImages>`} / {@link mw.Api.Params.Action.TemplateData.Generator.AllImages `Partial<mw.Api.Params.Action.TemplateData.Generator.AllImages>`} / {@link mw.Api.Params.Action.Watch.Generator.AllImages `Partial<mw.Api.Params.Action.Watch.Generator.AllImages>`} instead. */
export type ApiQueryAllImagesParams = Partial<mw.Api.Params.Action.Purge.Generator.AllImages>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.AllPages `Partial<mw.Api.Params.Action.Purge.Generator.AllPages>`} / {@link mw.Api.Params.Action.Query.List.AllPages `Partial<mw.Api.Params.Action.Query.List.AllPages>`} / {@link mw.Api.Params.Action.Query.Generator.AllPages `Partial<mw.Api.Params.Action.Query.Generator.AllPages>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.AllPages `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.AllPages>`} / {@link mw.Api.Params.Action.TemplateData.Generator.AllPages `Partial<mw.Api.Params.Action.TemplateData.Generator.AllPages>`} / {@link mw.Api.Params.Action.Watch.Generator.AllPages `Partial<mw.Api.Params.Action.Watch.Generator.AllPages>`} instead. */
export type ApiQueryAllPagesParams = Partial<mw.Api.Params.Action.Purge.Generator.AllPages>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.AllRevisions `Partial<mw.Api.Params.Action.Purge.Generator.AllRevisions>`} / {@link mw.Api.Params.Action.Query.List.AllRevisions `Partial<mw.Api.Params.Action.Query.List.AllRevisions>`} / {@link mw.Api.Params.Action.Query.Generator.AllRevisions `Partial<mw.Api.Params.Action.Query.Generator.AllRevisions>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.AllRevisions `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.AllRevisions>`} / {@link mw.Api.Params.Action.TemplateData.Generator.AllRevisions `Partial<mw.Api.Params.Action.TemplateData.Generator.AllRevisions>`} / {@link mw.Api.Params.Action.Watch.Generator.AllRevisions `Partial<mw.Api.Params.Action.Watch.Generator.AllRevisions>`} instead. */
export type ApiQueryAllRevisionsParams = Partial<mw.Api.Params.Action.Purge.Generator.AllRevisions>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.AutomaticTranslationDenseLanguages `Partial<mw.Api.Params.Action.Purge.Generator.AutomaticTranslationDenseLanguages>`} / {@link mw.Api.Params.Action.Query.List.AutomaticTranslationDenseLanguages `Partial<mw.Api.Params.Action.Query.List.AutomaticTranslationDenseLanguages>`} / {@link mw.Api.Params.Action.Query.Generator.AutomaticTranslationDenseLanguages `Partial<mw.Api.Params.Action.Query.Generator.AutomaticTranslationDenseLanguages>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.AutomaticTranslationDenseLanguages `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.AutomaticTranslationDenseLanguages>`} / {@link mw.Api.Params.Action.TemplateData.Generator.AutomaticTranslationDenseLanguages `Partial<mw.Api.Params.Action.TemplateData.Generator.AutomaticTranslationDenseLanguages>`} / {@link mw.Api.Params.Action.Watch.Generator.AutomaticTranslationDenseLanguages `Partial<mw.Api.Params.Action.Watch.Generator.AutomaticTranslationDenseLanguages>`} instead. */
export type ContentTranslationActionApiQueryAutomaticTranslationDenseLanguagesParams = Partial<mw.Api.Params.Action.Purge.Generator.AutomaticTranslationDenseLanguages>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.Backlinks `Partial<mw.Api.Params.Action.Purge.Generator.Backlinks>`} / {@link mw.Api.Params.Action.Purge.Generator.Embeddedin `Partial<mw.Api.Params.Action.Purge.Generator.Embeddedin>`} / {@link mw.Api.Params.Action.Purge.Generator.ImageUsage `Partial<mw.Api.Params.Action.Purge.Generator.ImageUsage>`} / {@link mw.Api.Params.Action.Query.List.Backlinks `Partial<mw.Api.Params.Action.Query.List.Backlinks>`} / {@link mw.Api.Params.Action.Query.List.Embeddedin `Partial<mw.Api.Params.Action.Query.List.Embeddedin>`} / {@link mw.Api.Params.Action.Query.List.ImageUsage `Partial<mw.Api.Params.Action.Query.List.ImageUsage>`} / {@link mw.Api.Params.Action.Query.Generator.Backlinks `Partial<mw.Api.Params.Action.Query.Generator.Backlinks>`} / {@link mw.Api.Params.Action.Query.Generator.Embeddedin `Partial<mw.Api.Params.Action.Query.Generator.Embeddedin>`} / {@link mw.Api.Params.Action.Query.Generator.ImageUsage `Partial<mw.Api.Params.Action.Query.Generator.ImageUsage>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.Backlinks `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.Backlinks>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.Embeddedin `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.Embeddedin>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.ImageUsage `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.ImageUsage>`} / {@link mw.Api.Params.Action.TemplateData.Generator.Backlinks `Partial<mw.Api.Params.Action.TemplateData.Generator.Backlinks>`} / {@link mw.Api.Params.Action.TemplateData.Generator.Embeddedin `Partial<mw.Api.Params.Action.TemplateData.Generator.Embeddedin>`} / {@link mw.Api.Params.Action.TemplateData.Generator.ImageUsage `Partial<mw.Api.Params.Action.TemplateData.Generator.ImageUsage>`} / {@link mw.Api.Params.Action.Watch.Generator.Backlinks `Partial<mw.Api.Params.Action.Watch.Generator.Backlinks>`} / {@link mw.Api.Params.Action.Watch.Generator.Embeddedin `Partial<mw.Api.Params.Action.Watch.Generator.Embeddedin>`} / {@link mw.Api.Params.Action.Watch.Generator.ImageUsage `Partial<mw.Api.Params.Action.Watch.Generator.ImageUsage>`} instead. */
export type ApiQueryBacklinksParams = Partial<mw.Api.Params.Action.Purge.Generator.Backlinks>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.Categories `Partial<mw.Api.Params.Action.Purge.Generator.Categories>`} / {@link mw.Api.Params.Action.Query.Prop.Categories `Partial<mw.Api.Params.Action.Query.Prop.Categories>`} / {@link mw.Api.Params.Action.Query.Generator.Categories `Partial<mw.Api.Params.Action.Query.Generator.Categories>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.Categories `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.Categories>`} / {@link mw.Api.Params.Action.TemplateData.Generator.Categories `Partial<mw.Api.Params.Action.TemplateData.Generator.Categories>`} / {@link mw.Api.Params.Action.Watch.Generator.Categories `Partial<mw.Api.Params.Action.Watch.Generator.Categories>`} instead. */
export type ApiQueryCategoriesParams = Partial<mw.Api.Params.Action.Purge.Generator.Categories>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.CategoryMembers `Partial<mw.Api.Params.Action.Purge.Generator.CategoryMembers>`} / {@link mw.Api.Params.Action.Query.List.CategoryMembers `Partial<mw.Api.Params.Action.Query.List.CategoryMembers>`} / {@link mw.Api.Params.Action.Query.Generator.CategoryMembers `Partial<mw.Api.Params.Action.Query.Generator.CategoryMembers>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.CategoryMembers `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.CategoryMembers>`} / {@link mw.Api.Params.Action.TemplateData.Generator.CategoryMembers `Partial<mw.Api.Params.Action.TemplateData.Generator.CategoryMembers>`} / {@link mw.Api.Params.Action.Watch.Generator.CategoryMembers `Partial<mw.Api.Params.Action.Watch.Generator.CategoryMembers>`} instead. */
export type ApiQueryCategoryMembersParams = Partial<mw.Api.Params.Action.Purge.Generator.CategoryMembers>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.Configuredpages `Partial<mw.Api.Params.Action.Purge.Generator.Configuredpages>`} / {@link mw.Api.Params.Action.Query.List.Configuredpages `Partial<mw.Api.Params.Action.Query.List.Configuredpages>`} / {@link mw.Api.Params.Action.Query.Generator.Configuredpages `Partial<mw.Api.Params.Action.Query.Generator.Configuredpages>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.Configuredpages `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.Configuredpages>`} / {@link mw.Api.Params.Action.TemplateData.Generator.Configuredpages `Partial<mw.Api.Params.Action.TemplateData.Generator.Configuredpages>`} / {@link mw.Api.Params.Action.Watch.Generator.Configuredpages `Partial<mw.Api.Params.Action.Watch.Generator.Configuredpages>`} instead. */
export type ApiQueryConfiguredpagesParams = Partial<mw.Api.Params.Action.Purge.Generator.Configuredpages>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.ContentTranslation `Partial<mw.Api.Params.Action.Purge.Generator.ContentTranslation>`} / {@link mw.Api.Params.Action.Query.List.ContentTranslation `Partial<mw.Api.Params.Action.Query.List.ContentTranslation>`} / {@link mw.Api.Params.Action.Query.Generator.ContentTranslation `Partial<mw.Api.Params.Action.Query.Generator.ContentTranslation>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.ContentTranslation `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.ContentTranslation>`} / {@link mw.Api.Params.Action.TemplateData.Generator.ContentTranslation `Partial<mw.Api.Params.Action.TemplateData.Generator.ContentTranslation>`} / {@link mw.Api.Params.Action.Watch.Generator.ContentTranslation `Partial<mw.Api.Params.Action.Watch.Generator.ContentTranslation>`} instead. */
export type ContentTranslationActionApiQueryContentTranslationParams = Partial<mw.Api.Params.Action.Purge.Generator.ContentTranslation>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.ContentTranslationSuggestions `Partial<mw.Api.Params.Action.Purge.Generator.ContentTranslationSuggestions>`} / {@link mw.Api.Params.Action.Query.List.ContentTranslationSuggestions `Partial<mw.Api.Params.Action.Query.List.ContentTranslationSuggestions>`} / {@link mw.Api.Params.Action.Query.Generator.ContentTranslationSuggestions `Partial<mw.Api.Params.Action.Query.Generator.ContentTranslationSuggestions>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.ContentTranslationSuggestions `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.ContentTranslationSuggestions>`} / {@link mw.Api.Params.Action.TemplateData.Generator.ContentTranslationSuggestions `Partial<mw.Api.Params.Action.TemplateData.Generator.ContentTranslationSuggestions>`} / {@link mw.Api.Params.Action.Watch.Generator.ContentTranslationSuggestions `Partial<mw.Api.Params.Action.Watch.Generator.ContentTranslationSuggestions>`} instead. */
export type ContentTranslationActionApiQueryContentTranslationSuggestionsParams = Partial<mw.Api.Params.Action.Purge.Generator.ContentTranslationSuggestions>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.DeletedRevisions `Partial<mw.Api.Params.Action.Purge.Generator.DeletedRevisions>`} / {@link mw.Api.Params.Action.Query.Prop.DeletedRevisions `Partial<mw.Api.Params.Action.Query.Prop.DeletedRevisions>`} / {@link mw.Api.Params.Action.Query.Generator.DeletedRevisions `Partial<mw.Api.Params.Action.Query.Generator.DeletedRevisions>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.DeletedRevisions `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.DeletedRevisions>`} / {@link mw.Api.Params.Action.TemplateData.Generator.DeletedRevisions `Partial<mw.Api.Params.Action.TemplateData.Generator.DeletedRevisions>`} / {@link mw.Api.Params.Action.Watch.Generator.DeletedRevisions `Partial<mw.Api.Params.Action.Watch.Generator.DeletedRevisions>`} instead. */
export type ApiQueryDeletedRevisionsParams = Partial<mw.Api.Params.Action.Purge.Generator.DeletedRevisions>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.DuplicateFiles `Partial<mw.Api.Params.Action.Purge.Generator.DuplicateFiles>`} / {@link mw.Api.Params.Action.Query.Prop.DuplicateFiles `Partial<mw.Api.Params.Action.Query.Prop.DuplicateFiles>`} / {@link mw.Api.Params.Action.Query.Generator.DuplicateFiles `Partial<mw.Api.Params.Action.Query.Generator.DuplicateFiles>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.DuplicateFiles `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.DuplicateFiles>`} / {@link mw.Api.Params.Action.TemplateData.Generator.DuplicateFiles `Partial<mw.Api.Params.Action.TemplateData.Generator.DuplicateFiles>`} / {@link mw.Api.Params.Action.Watch.Generator.DuplicateFiles `Partial<mw.Api.Params.Action.Watch.Generator.DuplicateFiles>`} instead. */
export type ApiQueryDuplicateFilesParams = Partial<mw.Api.Params.Action.Purge.Generator.DuplicateFiles>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.ExtUrlUsage `Partial<mw.Api.Params.Action.Purge.Generator.ExtUrlUsage>`} / {@link mw.Api.Params.Action.Query.List.ExtUrlUsage `Partial<mw.Api.Params.Action.Query.List.ExtUrlUsage>`} / {@link mw.Api.Params.Action.Query.Generator.ExtUrlUsage `Partial<mw.Api.Params.Action.Query.Generator.ExtUrlUsage>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.ExtUrlUsage `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.ExtUrlUsage>`} / {@link mw.Api.Params.Action.TemplateData.Generator.ExtUrlUsage `Partial<mw.Api.Params.Action.TemplateData.Generator.ExtUrlUsage>`} / {@link mw.Api.Params.Action.Watch.Generator.ExtUrlUsage `Partial<mw.Api.Params.Action.Watch.Generator.ExtUrlUsage>`} instead. */
export type ApiQueryExtLinksUsageParams = Partial<mw.Api.Params.Action.Purge.Generator.ExtUrlUsage>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.FileUsage `Partial<mw.Api.Params.Action.Purge.Generator.FileUsage>`} / {@link mw.Api.Params.Action.Purge.Generator.LinksHere `Partial<mw.Api.Params.Action.Purge.Generator.LinksHere>`} / {@link mw.Api.Params.Action.Purge.Generator.Redirects `Partial<mw.Api.Params.Action.Purge.Generator.Redirects>`} / {@link mw.Api.Params.Action.Purge.Generator.Transcludedin `Partial<mw.Api.Params.Action.Purge.Generator.Transcludedin>`} / {@link mw.Api.Params.Action.Query.Prop.FileUsage `Partial<mw.Api.Params.Action.Query.Prop.FileUsage>`} / {@link mw.Api.Params.Action.Query.Prop.LinksHere `Partial<mw.Api.Params.Action.Query.Prop.LinksHere>`} / {@link mw.Api.Params.Action.Query.Prop.Redirects `Partial<mw.Api.Params.Action.Query.Prop.Redirects>`} / {@link mw.Api.Params.Action.Query.Prop.Transcludedin `Partial<mw.Api.Params.Action.Query.Prop.Transcludedin>`} / {@link mw.Api.Params.Action.Query.Generator.FileUsage `Partial<mw.Api.Params.Action.Query.Generator.FileUsage>`} / {@link mw.Api.Params.Action.Query.Generator.LinksHere `Partial<mw.Api.Params.Action.Query.Generator.LinksHere>`} / {@link mw.Api.Params.Action.Query.Generator.Redirects `Partial<mw.Api.Params.Action.Query.Generator.Redirects>`} / {@link mw.Api.Params.Action.Query.Generator.Transcludedin `Partial<mw.Api.Params.Action.Query.Generator.Transcludedin>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.FileUsage `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.FileUsage>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.LinksHere `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.LinksHere>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.Redirects `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.Redirects>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.Transcludedin `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.Transcludedin>`} / {@link mw.Api.Params.Action.TemplateData.Generator.FileUsage `Partial<mw.Api.Params.Action.TemplateData.Generator.FileUsage>`} / {@link mw.Api.Params.Action.TemplateData.Generator.LinksHere `Partial<mw.Api.Params.Action.TemplateData.Generator.LinksHere>`} / {@link mw.Api.Params.Action.TemplateData.Generator.Redirects `Partial<mw.Api.Params.Action.TemplateData.Generator.Redirects>`} / {@link mw.Api.Params.Action.TemplateData.Generator.Transcludedin `Partial<mw.Api.Params.Action.TemplateData.Generator.Transcludedin>`} / {@link mw.Api.Params.Action.Watch.Generator.FileUsage `Partial<mw.Api.Params.Action.Watch.Generator.FileUsage>`} / {@link mw.Api.Params.Action.Watch.Generator.LinksHere `Partial<mw.Api.Params.Action.Watch.Generator.LinksHere>`} / {@link mw.Api.Params.Action.Watch.Generator.Redirects `Partial<mw.Api.Params.Action.Watch.Generator.Redirects>`} / {@link mw.Api.Params.Action.Watch.Generator.Transcludedin `Partial<mw.Api.Params.Action.Watch.Generator.Transcludedin>`} instead. */
export type ApiQueryBacklinkspropParams = Partial<mw.Api.Params.Action.Purge.Generator.FileUsage>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.GeoSearch `Partial<mw.Api.Params.Action.Purge.Generator.GeoSearch>`} / {@link mw.Api.Params.Action.Query.List.GeoSearch `Partial<mw.Api.Params.Action.Query.List.GeoSearch>`} / {@link mw.Api.Params.Action.Query.Generator.GeoSearch `Partial<mw.Api.Params.Action.Query.Generator.GeoSearch>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.GeoSearch `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.GeoSearch>`} / {@link mw.Api.Params.Action.TemplateData.Generator.GeoSearch `Partial<mw.Api.Params.Action.TemplateData.Generator.GeoSearch>`} / {@link mw.Api.Params.Action.Watch.Generator.GeoSearch `Partial<mw.Api.Params.Action.Watch.Generator.GeoSearch>`} instead. */
export type GeoDataApiQueryGeoSearchElasticParams = Partial<mw.Api.Params.Action.Purge.Generator.GeoSearch>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.GrowthTasks `Partial<mw.Api.Params.Action.Purge.Generator.GrowthTasks>`} / {@link mw.Api.Params.Action.Query.List.GrowthTasks `Partial<mw.Api.Params.Action.Query.List.GrowthTasks>`} / {@link mw.Api.Params.Action.Query.Generator.GrowthTasks `Partial<mw.Api.Params.Action.Query.Generator.GrowthTasks>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.GrowthTasks `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.GrowthTasks>`} / {@link mw.Api.Params.Action.TemplateData.Generator.GrowthTasks `Partial<mw.Api.Params.Action.TemplateData.Generator.GrowthTasks>`} / {@link mw.Api.Params.Action.Watch.Generator.GrowthTasks `Partial<mw.Api.Params.Action.Watch.Generator.GrowthTasks>`} instead. */
export type GrowthExperimentsApiQueryGrowthTasksParams = Partial<mw.Api.Params.Action.Purge.Generator.GrowthTasks>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.Images `Partial<mw.Api.Params.Action.Purge.Generator.Images>`} / {@link mw.Api.Params.Action.Query.Prop.Images `Partial<mw.Api.Params.Action.Query.Prop.Images>`} / {@link mw.Api.Params.Action.Query.Generator.Images `Partial<mw.Api.Params.Action.Query.Generator.Images>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.Images `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.Images>`} / {@link mw.Api.Params.Action.TemplateData.Generator.Images `Partial<mw.Api.Params.Action.TemplateData.Generator.Images>`} / {@link mw.Api.Params.Action.Watch.Generator.Images `Partial<mw.Api.Params.Action.Watch.Generator.Images>`} instead. */
export type ApiQueryImagesParams = Partial<mw.Api.Params.Action.Purge.Generator.Images>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.IWBacklinks `Partial<mw.Api.Params.Action.Purge.Generator.IWBacklinks>`} / {@link mw.Api.Params.Action.Query.List.IWBacklinks `Partial<mw.Api.Params.Action.Query.List.IWBacklinks>`} / {@link mw.Api.Params.Action.Query.Generator.IWBacklinks `Partial<mw.Api.Params.Action.Query.Generator.IWBacklinks>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.IWBacklinks `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.IWBacklinks>`} / {@link mw.Api.Params.Action.TemplateData.Generator.IWBacklinks `Partial<mw.Api.Params.Action.TemplateData.Generator.IWBacklinks>`} / {@link mw.Api.Params.Action.Watch.Generator.IWBacklinks `Partial<mw.Api.Params.Action.Watch.Generator.IWBacklinks>`} instead. */
export type ApiQueryIWBacklinksParams = Partial<mw.Api.Params.Action.Purge.Generator.IWBacklinks>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.LangBacklinks `Partial<mw.Api.Params.Action.Purge.Generator.LangBacklinks>`} / {@link mw.Api.Params.Action.Query.List.LangBacklinks `Partial<mw.Api.Params.Action.Query.List.LangBacklinks>`} / {@link mw.Api.Params.Action.Query.Generator.LangBacklinks `Partial<mw.Api.Params.Action.Query.Generator.LangBacklinks>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.LangBacklinks `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.LangBacklinks>`} / {@link mw.Api.Params.Action.TemplateData.Generator.LangBacklinks `Partial<mw.Api.Params.Action.TemplateData.Generator.LangBacklinks>`} / {@link mw.Api.Params.Action.Watch.Generator.LangBacklinks `Partial<mw.Api.Params.Action.Watch.Generator.LangBacklinks>`} instead. */
export type ApiQueryLangBacklinksParams = Partial<mw.Api.Params.Action.Purge.Generator.LangBacklinks>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.Links `Partial<mw.Api.Params.Action.Purge.Generator.Links>`} / {@link mw.Api.Params.Action.Purge.Generator.Templates `Partial<mw.Api.Params.Action.Purge.Generator.Templates>`} / {@link mw.Api.Params.Action.Query.Prop.Links `Partial<mw.Api.Params.Action.Query.Prop.Links>`} / {@link mw.Api.Params.Action.Query.Prop.Templates `Partial<mw.Api.Params.Action.Query.Prop.Templates>`} / {@link mw.Api.Params.Action.Query.Generator.Links `Partial<mw.Api.Params.Action.Query.Generator.Links>`} / {@link mw.Api.Params.Action.Query.Generator.Templates `Partial<mw.Api.Params.Action.Query.Generator.Templates>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.Links `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.Links>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.Templates `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.Templates>`} / {@link mw.Api.Params.Action.TemplateData.Generator.Links `Partial<mw.Api.Params.Action.TemplateData.Generator.Links>`} / {@link mw.Api.Params.Action.TemplateData.Generator.Templates `Partial<mw.Api.Params.Action.TemplateData.Generator.Templates>`} / {@link mw.Api.Params.Action.Watch.Generator.Links `Partial<mw.Api.Params.Action.Watch.Generator.Links>`} / {@link mw.Api.Params.Action.Watch.Generator.Templates `Partial<mw.Api.Params.Action.Watch.Generator.Templates>`} instead. */
export type ApiQueryLinksParams = Partial<mw.Api.Params.Action.Purge.Generator.Links>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.MessageCollection `Partial<mw.Api.Params.Action.Purge.Generator.MessageCollection>`} / {@link mw.Api.Params.Action.Query.List.MessageCollection `Partial<mw.Api.Params.Action.Query.List.MessageCollection>`} / {@link mw.Api.Params.Action.Query.Generator.MessageCollection `Partial<mw.Api.Params.Action.Query.Generator.MessageCollection>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.MessageCollection `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.MessageCollection>`} / {@link mw.Api.Params.Action.TemplateData.Generator.MessageCollection `Partial<mw.Api.Params.Action.TemplateData.Generator.MessageCollection>`} / {@link mw.Api.Params.Action.Watch.Generator.MessageCollection `Partial<mw.Api.Params.Action.Watch.Generator.MessageCollection>`} instead. */
export type TranslateMessageLoadingQueryMessageCollectionActionApiParams = Partial<mw.Api.Params.Action.Purge.Generator.MessageCollection>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.MostViewed `Partial<mw.Api.Params.Action.Purge.Generator.MostViewed>`} / {@link mw.Api.Params.Action.Query.List.MostViewed `Partial<mw.Api.Params.Action.Query.List.MostViewed>`} / {@link mw.Api.Params.Action.Query.Generator.MostViewed `Partial<mw.Api.Params.Action.Query.Generator.MostViewed>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.MostViewed `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.MostViewed>`} / {@link mw.Api.Params.Action.TemplateData.Generator.MostViewed `Partial<mw.Api.Params.Action.TemplateData.Generator.MostViewed>`} / {@link mw.Api.Params.Action.Watch.Generator.MostViewed `Partial<mw.Api.Params.Action.Watch.Generator.MostViewed>`} instead. */
export type PageViewInfoApiQueryMostViewedParams = Partial<mw.Api.Params.Action.Purge.Generator.MostViewed>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.Oldreviewedpages `Partial<mw.Api.Params.Action.Purge.Generator.Oldreviewedpages>`} / {@link mw.Api.Params.Action.Query.List.Oldreviewedpages `Partial<mw.Api.Params.Action.Query.List.Oldreviewedpages>`} / {@link mw.Api.Params.Action.Query.Generator.Oldreviewedpages `Partial<mw.Api.Params.Action.Query.Generator.Oldreviewedpages>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.Oldreviewedpages `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.Oldreviewedpages>`} / {@link mw.Api.Params.Action.TemplateData.Generator.Oldreviewedpages `Partial<mw.Api.Params.Action.TemplateData.Generator.Oldreviewedpages>`} / {@link mw.Api.Params.Action.Watch.Generator.Oldreviewedpages `Partial<mw.Api.Params.Action.Watch.Generator.Oldreviewedpages>`} instead. */
export type ApiQueryOldreviewedpagesParams = Partial<mw.Api.Params.Action.Purge.Generator.Oldreviewedpages>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.PagesWithProp `Partial<mw.Api.Params.Action.Purge.Generator.PagesWithProp>`} / {@link mw.Api.Params.Action.Query.List.PagesWithProp `Partial<mw.Api.Params.Action.Query.List.PagesWithProp>`} / {@link mw.Api.Params.Action.Query.Generator.PagesWithProp `Partial<mw.Api.Params.Action.Query.Generator.PagesWithProp>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.PagesWithProp `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.PagesWithProp>`} / {@link mw.Api.Params.Action.TemplateData.Generator.PagesWithProp `Partial<mw.Api.Params.Action.TemplateData.Generator.PagesWithProp>`} / {@link mw.Api.Params.Action.Watch.Generator.PagesWithProp `Partial<mw.Api.Params.Action.Watch.Generator.PagesWithProp>`} instead. */
export type ApiQueryPagesWithPropParams = Partial<mw.Api.Params.Action.Purge.Generator.PagesWithProp>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.PrefixSearch `Partial<mw.Api.Params.Action.Purge.Generator.PrefixSearch>`} / {@link mw.Api.Params.Action.Query.List.PrefixSearch `Partial<mw.Api.Params.Action.Query.List.PrefixSearch>`} / {@link mw.Api.Params.Action.Query.Generator.PrefixSearch `Partial<mw.Api.Params.Action.Query.Generator.PrefixSearch>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.PrefixSearch `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.PrefixSearch>`} / {@link mw.Api.Params.Action.TemplateData.Generator.PrefixSearch `Partial<mw.Api.Params.Action.TemplateData.Generator.PrefixSearch>`} / {@link mw.Api.Params.Action.Watch.Generator.PrefixSearch `Partial<mw.Api.Params.Action.Watch.Generator.PrefixSearch>`} instead. */
export type ApiQueryPrefixSearchParams = Partial<mw.Api.Params.Action.Purge.Generator.PrefixSearch>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.ProjectPages `Partial<mw.Api.Params.Action.Purge.Generator.ProjectPages>`} / {@link mw.Api.Params.Action.Query.List.ProjectPages `Partial<mw.Api.Params.Action.Query.List.ProjectPages>`} / {@link mw.Api.Params.Action.Query.Generator.ProjectPages `Partial<mw.Api.Params.Action.Query.Generator.ProjectPages>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.ProjectPages `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.ProjectPages>`} / {@link mw.Api.Params.Action.TemplateData.Generator.ProjectPages `Partial<mw.Api.Params.Action.TemplateData.Generator.ProjectPages>`} / {@link mw.Api.Params.Action.Watch.Generator.ProjectPages `Partial<mw.Api.Params.Action.Watch.Generator.ProjectPages>`} instead. */
export type PageAssessmentsApiQueryProjectPagesParams = Partial<mw.Api.Params.Action.Purge.Generator.ProjectPages>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.ProofreadPagesInIndex `Partial<mw.Api.Params.Action.Purge.Generator.ProofreadPagesInIndex>`} / {@link mw.Api.Params.Action.Query.List.ProofreadPagesInIndex `Partial<mw.Api.Params.Action.Query.List.ProofreadPagesInIndex>`} / {@link mw.Api.Params.Action.Query.Generator.ProofreadPagesInIndex `Partial<mw.Api.Params.Action.Query.Generator.ProofreadPagesInIndex>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.ProofreadPagesInIndex `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.ProofreadPagesInIndex>`} / {@link mw.Api.Params.Action.TemplateData.Generator.ProofreadPagesInIndex `Partial<mw.Api.Params.Action.TemplateData.Generator.ProofreadPagesInIndex>`} / {@link mw.Api.Params.Action.Watch.Generator.ProofreadPagesInIndex `Partial<mw.Api.Params.Action.Watch.Generator.ProofreadPagesInIndex>`} instead. */
export type ProofreadPageApiQueryPagesInIndexParams = Partial<mw.Api.Params.Action.Purge.Generator.ProofreadPagesInIndex>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.ProtectedTitles `Partial<mw.Api.Params.Action.Purge.Generator.ProtectedTitles>`} / {@link mw.Api.Params.Action.Query.List.ProtectedTitles `Partial<mw.Api.Params.Action.Query.List.ProtectedTitles>`} / {@link mw.Api.Params.Action.Query.Generator.ProtectedTitles `Partial<mw.Api.Params.Action.Query.Generator.ProtectedTitles>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.ProtectedTitles `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.ProtectedTitles>`} / {@link mw.Api.Params.Action.TemplateData.Generator.ProtectedTitles `Partial<mw.Api.Params.Action.TemplateData.Generator.ProtectedTitles>`} / {@link mw.Api.Params.Action.Watch.Generator.ProtectedTitles `Partial<mw.Api.Params.Action.Watch.Generator.ProtectedTitles>`} instead. */
export type ApiQueryProtectedTitlesParams = Partial<mw.Api.Params.Action.Purge.Generator.ProtectedTitles>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.QueryPage `Partial<mw.Api.Params.Action.Purge.Generator.QueryPage>`} / {@link mw.Api.Params.Action.Query.List.QueryPage `Partial<mw.Api.Params.Action.Query.List.QueryPage>`} / {@link mw.Api.Params.Action.Query.Generator.QueryPage `Partial<mw.Api.Params.Action.Query.Generator.QueryPage>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.QueryPage `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.QueryPage>`} / {@link mw.Api.Params.Action.TemplateData.Generator.QueryPage `Partial<mw.Api.Params.Action.TemplateData.Generator.QueryPage>`} / {@link mw.Api.Params.Action.Watch.Generator.QueryPage `Partial<mw.Api.Params.Action.Watch.Generator.QueryPage>`} instead. */
export type ApiQueryQueryPageParams = Partial<mw.Api.Params.Action.Purge.Generator.QueryPage>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.Random `Partial<mw.Api.Params.Action.Purge.Generator.Random>`} / {@link mw.Api.Params.Action.Query.List.Random `Partial<mw.Api.Params.Action.Query.List.Random>`} / {@link mw.Api.Params.Action.Query.Generator.Random `Partial<mw.Api.Params.Action.Query.Generator.Random>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.Random `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.Random>`} / {@link mw.Api.Params.Action.TemplateData.Generator.Random `Partial<mw.Api.Params.Action.TemplateData.Generator.Random>`} / {@link mw.Api.Params.Action.Watch.Generator.Random `Partial<mw.Api.Params.Action.Watch.Generator.Random>`} instead. */
export type ApiQueryRandomParams = Partial<mw.Api.Params.Action.Purge.Generator.Random>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.ReadingListEntries `Partial<mw.Api.Params.Action.Purge.Generator.ReadingListEntries>`} / {@link mw.Api.Params.Action.Query.List.ReadingListEntries `Partial<mw.Api.Params.Action.Query.List.ReadingListEntries>`} / {@link mw.Api.Params.Action.Query.Generator.ReadingListEntries `Partial<mw.Api.Params.Action.Query.Generator.ReadingListEntries>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.ReadingListEntries `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.ReadingListEntries>`} / {@link mw.Api.Params.Action.TemplateData.Generator.ReadingListEntries `Partial<mw.Api.Params.Action.TemplateData.Generator.ReadingListEntries>`} / {@link mw.Api.Params.Action.Watch.Generator.ReadingListEntries `Partial<mw.Api.Params.Action.Watch.Generator.ReadingListEntries>`} instead. */
export type ReadingListsApiQueryReadingListEntriesParams = Partial<mw.Api.Params.Action.Purge.Generator.ReadingListEntries>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.RecentChanges `Partial<mw.Api.Params.Action.Purge.Generator.RecentChanges>`} / {@link mw.Api.Params.Action.Query.List.RecentChanges `Partial<mw.Api.Params.Action.Query.List.RecentChanges>`} / {@link mw.Api.Params.Action.Query.Generator.RecentChanges `Partial<mw.Api.Params.Action.Query.Generator.RecentChanges>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.RecentChanges `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.RecentChanges>`} / {@link mw.Api.Params.Action.TemplateData.Generator.RecentChanges `Partial<mw.Api.Params.Action.TemplateData.Generator.RecentChanges>`} / {@link mw.Api.Params.Action.Watch.Generator.RecentChanges `Partial<mw.Api.Params.Action.Watch.Generator.RecentChanges>`} instead. */
export type ApiQueryRecentChangesParams = Partial<mw.Api.Params.Action.Purge.Generator.RecentChanges>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.Revisions `Partial<mw.Api.Params.Action.Purge.Generator.Revisions>`} / {@link mw.Api.Params.Action.Query.Prop.Revisions `Partial<mw.Api.Params.Action.Query.Prop.Revisions>`} / {@link mw.Api.Params.Action.Query.Generator.Revisions `Partial<mw.Api.Params.Action.Query.Generator.Revisions>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.Revisions `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.Revisions>`} / {@link mw.Api.Params.Action.TemplateData.Generator.Revisions `Partial<mw.Api.Params.Action.TemplateData.Generator.Revisions>`} / {@link mw.Api.Params.Action.Watch.Generator.Revisions `Partial<mw.Api.Params.Action.Watch.Generator.Revisions>`} instead. */
export type ApiQueryRevisionsParams = Partial<mw.Api.Params.Action.Purge.Generator.Revisions>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.Search `Partial<mw.Api.Params.Action.Purge.Generator.Search>`} / {@link mw.Api.Params.Action.Query.List.Search `Partial<mw.Api.Params.Action.Query.List.Search>`} / {@link mw.Api.Params.Action.Query.Generator.Search `Partial<mw.Api.Params.Action.Query.Generator.Search>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.Search `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.Search>`} / {@link mw.Api.Params.Action.TemplateData.Generator.Search `Partial<mw.Api.Params.Action.TemplateData.Generator.Search>`} / {@link mw.Api.Params.Action.Watch.Generator.Search `Partial<mw.Api.Params.Action.Watch.Generator.Search>`} instead. */
export type ApiQuerySearchParams = Partial<mw.Api.Params.Action.Purge.Generator.Search>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.Unreviewedpages `Partial<mw.Api.Params.Action.Purge.Generator.Unreviewedpages>`} / {@link mw.Api.Params.Action.Query.List.Unreviewedpages `Partial<mw.Api.Params.Action.Query.List.Unreviewedpages>`} / {@link mw.Api.Params.Action.Query.Generator.Unreviewedpages `Partial<mw.Api.Params.Action.Query.Generator.Unreviewedpages>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.Unreviewedpages `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.Unreviewedpages>`} / {@link mw.Api.Params.Action.TemplateData.Generator.Unreviewedpages `Partial<mw.Api.Params.Action.TemplateData.Generator.Unreviewedpages>`} / {@link mw.Api.Params.Action.Watch.Generator.Unreviewedpages `Partial<mw.Api.Params.Action.Watch.Generator.Unreviewedpages>`} instead. */
export type ApiQueryUnreviewedpagesParams = Partial<mw.Api.Params.Action.Purge.Generator.Unreviewedpages>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.Watchlist `Partial<mw.Api.Params.Action.Purge.Generator.Watchlist>`} / {@link mw.Api.Params.Action.Query.List.Watchlist `Partial<mw.Api.Params.Action.Query.List.Watchlist>`} / {@link mw.Api.Params.Action.Query.Generator.Watchlist `Partial<mw.Api.Params.Action.Query.Generator.Watchlist>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.Watchlist `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.Watchlist>`} / {@link mw.Api.Params.Action.TemplateData.Generator.Watchlist `Partial<mw.Api.Params.Action.TemplateData.Generator.Watchlist>`} / {@link mw.Api.Params.Action.Watch.Generator.Watchlist `Partial<mw.Api.Params.Action.Watch.Generator.Watchlist>`} instead. */
export type ApiQueryWatchlistParams = Partial<mw.Api.Params.Action.Purge.Generator.Watchlist>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.WatchlistRaw `Partial<mw.Api.Params.Action.Purge.Generator.WatchlistRaw>`} / {@link mw.Api.Params.Action.Query.List.WatchlistRaw `Partial<mw.Api.Params.Action.Query.List.WatchlistRaw>`} / {@link mw.Api.Params.Action.Query.Generator.WatchlistRaw `Partial<mw.Api.Params.Action.Query.Generator.WatchlistRaw>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.WatchlistRaw `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.WatchlistRaw>`} / {@link mw.Api.Params.Action.TemplateData.Generator.WatchlistRaw `Partial<mw.Api.Params.Action.TemplateData.Generator.WatchlistRaw>`} / {@link mw.Api.Params.Action.Watch.Generator.WatchlistRaw `Partial<mw.Api.Params.Action.Watch.Generator.WatchlistRaw>`} instead. */
export type ApiQueryWatchlistRawParams = Partial<mw.Api.Params.Action.Purge.Generator.WatchlistRaw>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.WBListEntityUsage `Partial<mw.Api.Params.Action.Purge.Generator.WBListEntityUsage>`} / {@link mw.Api.Params.Action.Query.List.WBListEntityUsage `Partial<mw.Api.Params.Action.Query.List.WBListEntityUsage>`} / {@link mw.Api.Params.Action.Query.Generator.WBListEntityUsage `Partial<mw.Api.Params.Action.Query.Generator.WBListEntityUsage>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.WBListEntityUsage `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.WBListEntityUsage>`} / {@link mw.Api.Params.Action.TemplateData.Generator.WBListEntityUsage `Partial<mw.Api.Params.Action.TemplateData.Generator.WBListEntityUsage>`} / {@link mw.Api.Params.Action.Watch.Generator.WBListEntityUsage `Partial<mw.Api.Params.Action.Watch.Generator.WBListEntityUsage>`} instead. */
export type WikibaseClientApiListEntityUsageParams = Partial<mw.Api.Params.Action.Purge.Generator.WBListEntityUsage>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.WBSearch `Partial<mw.Api.Params.Action.Purge.Generator.WBSearch>`} / {@link mw.Api.Params.Action.Query.List.WBSearch `Partial<mw.Api.Params.Action.Query.List.WBSearch>`} / {@link mw.Api.Params.Action.Query.Generator.WBSearch `Partial<mw.Api.Params.Action.Query.Generator.WBSearch>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.WBSearch `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.WBSearch>`} / {@link mw.Api.Params.Action.TemplateData.Generator.WBSearch `Partial<mw.Api.Params.Action.TemplateData.Generator.WBSearch>`} / {@link mw.Api.Params.Action.Watch.Generator.WBSearch `Partial<mw.Api.Params.Action.Watch.Generator.WBSearch>`} instead. */
export type WikibaseRepoApiQuerySearchEntitiesParams = Partial<mw.Api.Params.Action.Purge.Generator.WBSearch>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.WikiLambdaFnSearch `Partial<mw.Api.Params.Action.Purge.Generator.WikiLambdaFnSearch>`} / {@link mw.Api.Params.Action.Query.List.WikiLambdaFnSearch `Partial<mw.Api.Params.Action.Query.List.WikiLambdaFnSearch>`} / {@link mw.Api.Params.Action.Query.Generator.WikiLambdaFnSearch `Partial<mw.Api.Params.Action.Query.Generator.WikiLambdaFnSearch>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.WikiLambdaFnSearch `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.WikiLambdaFnSearch>`} / {@link mw.Api.Params.Action.TemplateData.Generator.WikiLambdaFnSearch `Partial<mw.Api.Params.Action.TemplateData.Generator.WikiLambdaFnSearch>`} / {@link mw.Api.Params.Action.Watch.Generator.WikiLambdaFnSearch `Partial<mw.Api.Params.Action.Watch.Generator.WikiLambdaFnSearch>`} instead. */
export type WikiLambdaActionAPIApiQueryZFunctionReferenceParams = Partial<mw.Api.Params.Action.Purge.Generator.WikiLambdaFnSearch>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.WikiLambdaLoadZObjects `Partial<mw.Api.Params.Action.Purge.Generator.WikiLambdaLoadZObjects>`} / {@link mw.Api.Params.Action.Query.List.WikiLambdaLoadZObjects `Partial<mw.Api.Params.Action.Query.List.WikiLambdaLoadZObjects>`} / {@link mw.Api.Params.Action.Query.Generator.WikiLambdaLoadZObjects `Partial<mw.Api.Params.Action.Query.Generator.WikiLambdaLoadZObjects>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.WikiLambdaLoadZObjects `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.WikiLambdaLoadZObjects>`} / {@link mw.Api.Params.Action.TemplateData.Generator.WikiLambdaLoadZObjects `Partial<mw.Api.Params.Action.TemplateData.Generator.WikiLambdaLoadZObjects>`} / {@link mw.Api.Params.Action.Watch.Generator.WikiLambdaLoadZObjects `Partial<mw.Api.Params.Action.Watch.Generator.WikiLambdaLoadZObjects>`} instead. */
export type WikiLambdaActionAPIApiQueryZObjectsParams = Partial<mw.Api.Params.Action.Purge.Generator.WikiLambdaLoadZObjects>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge.Generator.WikiLambdaSearchLabels `Partial<mw.Api.Params.Action.Purge.Generator.WikiLambdaSearchLabels>`} / {@link mw.Api.Params.Action.Query.List.WikiLambdaSearchLabels `Partial<mw.Api.Params.Action.Query.List.WikiLambdaSearchLabels>`} / {@link mw.Api.Params.Action.Query.Generator.WikiLambdaSearchLabels `Partial<mw.Api.Params.Action.Query.Generator.WikiLambdaSearchLabels>`} / {@link mw.Api.Params.Action.SetNotificationTimestamp.Generator.WikiLambdaSearchLabels `Partial<mw.Api.Params.Action.SetNotificationTimestamp.Generator.WikiLambdaSearchLabels>`} / {@link mw.Api.Params.Action.TemplateData.Generator.WikiLambdaSearchLabels `Partial<mw.Api.Params.Action.TemplateData.Generator.WikiLambdaSearchLabels>`} / {@link mw.Api.Params.Action.Watch.Generator.WikiLambdaSearchLabels `Partial<mw.Api.Params.Action.Watch.Generator.WikiLambdaSearchLabels>`} instead. */
export type WikiLambdaActionAPIApiQueryZObjectLabelsParams = Partial<mw.Api.Params.Action.Purge.Generator.WikiLambdaSearchLabels>;

/** @deprecated Use {@link mw.Api.Params.Action.Purge `Partial<mw.Api.Params.Action.Purge>`} instead. */
export type ApiPurgeParams = Partial<mw.Api.Params.Action.Purge>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.CategoryInfo `Partial<mw.Api.Params.Action.Query.Prop.CategoryInfo>`} instead. */
export type ApiQueryCategoryInfoParams = Partial<mw.Api.Params.Action.Query.Prop.CategoryInfo>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.CirrusBuildDoc `Partial<mw.Api.Params.Action.Query.Prop.CirrusBuildDoc>`} instead. */
export type CirrusSearchApiQueryBuildDocumentParams = Partial<mw.Api.Params.Action.Query.Prop.CirrusBuildDoc>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.CirrusCompSuggestBuildDoc `Partial<mw.Api.Params.Action.Query.Prop.CirrusCompSuggestBuildDoc>`} instead. */
export type CirrusSearchApiQueryCompSuggestBuildDocParams = Partial<mw.Api.Params.Action.Query.Prop.CirrusCompSuggestBuildDoc>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.CirrusDoc `Partial<mw.Api.Params.Action.Query.Prop.CirrusDoc>`} instead. */
export type CirrusSearchApiQueryCirrusDocParams = Partial<mw.Api.Params.Action.Query.Prop.CirrusDoc>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.Contributors `Partial<mw.Api.Params.Action.Query.Prop.Contributors>`} instead. */
export type ApiQueryContributorsParams = Partial<mw.Api.Params.Action.Query.Prop.Contributors>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.Coordinates `Partial<mw.Api.Params.Action.Query.Prop.Coordinates>`} instead. */
export type GeoDataApiQueryCoordinatesParams = Partial<mw.Api.Params.Action.Query.Prop.Coordinates>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.DefaultContentForPage `Partial<mw.Api.Params.Action.Query.Prop.DefaultContentForPage>`} instead. */
export type ProofreadPageApiQueryDefaultContentForPageParams = Partial<mw.Api.Params.Action.Query.Prop.DefaultContentForPage>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.Description `Partial<mw.Api.Params.Action.Query.Prop.Description>`} instead. */
export type WikibaseClientApiDescriptionParams = Partial<mw.Api.Params.Action.Query.Prop.Description>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.EntityTerms `Partial<mw.Api.Params.Action.Query.Prop.EntityTerms>`} instead. */
export type WikibaseRepoApiEntityTermsParams = Partial<mw.Api.Params.Action.Query.Prop.EntityTerms>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.ExtLinks `Partial<mw.Api.Params.Action.Query.Prop.ExtLinks>`} instead. */
export type ApiQueryExternalLinksParams = Partial<mw.Api.Params.Action.Query.Prop.ExtLinks>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.Extracts `Partial<mw.Api.Params.Action.Query.Prop.Extracts>`} instead. */
export type TextExtractsApiQueryExtractsParams = Partial<mw.Api.Params.Action.Query.Prop.Extracts>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.Flagged `Partial<mw.Api.Params.Action.Query.Prop.Flagged>`} instead. */
export type ApiQueryFlaggedParams = Partial<mw.Api.Params.Action.Query.Prop.Flagged>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.FlowInfo `Partial<mw.Api.Params.Action.Query.Prop.FlowInfo>`} instead. */
export type FlowApiQueryPropFlowInfoParams = Partial<mw.Api.Params.Action.Query.Prop.FlowInfo>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.GlobalUsage `Partial<mw.Api.Params.Action.Query.Prop.GlobalUsage>`} instead. */
export type GlobalUsageApiQueryGlobalUsageParams = Partial<mw.Api.Params.Action.Query.Prop.GlobalUsage>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.GrowthImageSuggestionData `Partial<mw.Api.Params.Action.Query.Prop.GrowthImageSuggestionData>`} instead. */
export type GrowthExperimentsApiQueryImageSuggestionDataParams = Partial<mw.Api.Params.Action.Query.Prop.GrowthImageSuggestionData>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.ImageForPage `Partial<mw.Api.Params.Action.Query.Prop.ImageForPage>`} instead. */
export type ProofreadPageApiQueryImageForPageParams = Partial<mw.Api.Params.Action.Query.Prop.ImageForPage>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.ImageInfo `Partial<mw.Api.Params.Action.Query.Prop.ImageInfo>`} instead. */
export type ApiQueryImageInfoParams = Partial<mw.Api.Params.Action.Query.Prop.ImageInfo>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.Info `Partial<mw.Api.Params.Action.Query.Prop.Info>`} instead. */
export type ApiQueryInfoParams = Partial<mw.Api.Params.Action.Query.Prop.Info>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.IsReviewed `Partial<mw.Api.Params.Action.Query.Prop.IsReviewed>`} instead. */
export type PageTriageApiIsReviewedParams = Partial<mw.Api.Params.Action.Query.Prop.IsReviewed>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.IWLinks `Partial<mw.Api.Params.Action.Query.Prop.IWLinks>`} instead. */
export type ApiQueryIWLinksParams = Partial<mw.Api.Params.Action.Query.Prop.IWLinks>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.LangLinks `Partial<mw.Api.Params.Action.Query.Prop.LangLinks>`} instead. */
export type ApiQueryLangLinksParams = Partial<mw.Api.Params.Action.Query.Prop.LangLinks>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.LangLinksCount `Partial<mw.Api.Params.Action.Query.Prop.LangLinksCount>`} instead. */
export type ContentTranslationActionApiQueryLangLinksCountParams = Partial<mw.Api.Params.Action.Query.Prop.LangLinksCount>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.MapData `Partial<mw.Api.Params.Action.Query.Prop.MapData>`} instead. */
export type KartographerApiQueryMapDataParams = Partial<mw.Api.Params.Action.Query.Prop.MapData>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.MMContent `Partial<mw.Api.Params.Action.Query.Prop.MMContent>`} instead. */
export type MediaWikiMassMessageApiQueryMMContentParams = Partial<mw.Api.Params.Action.Query.Prop.MMContent>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.PageAssessments `Partial<mw.Api.Params.Action.Query.Prop.PageAssessments>`} instead. */
export type PageAssessmentsApiQueryPageAssessmentsParams = Partial<mw.Api.Params.Action.Query.Prop.PageAssessments>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.PageImages `Partial<mw.Api.Params.Action.Query.Prop.PageImages>`} instead. */
export type PageImagesApiQueryPageImagesParams = Partial<mw.Api.Params.Action.Query.Prop.PageImages>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.PageProps `Partial<mw.Api.Params.Action.Query.Prop.PageProps>`} instead. */
export type ApiQueryPagePropsParams = Partial<mw.Api.Params.Action.Query.Prop.PageProps>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.PageTerms `Partial<mw.Api.Params.Action.Query.Prop.PageTerms>`} instead. */
export type WikibaseClientApiPageTermsParams = Partial<mw.Api.Params.Action.Query.Prop.PageTerms>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.PageViews `Partial<mw.Api.Params.Action.Query.Prop.PageViews>`} instead. */
export type PageViewInfoApiQueryPageViewsParams = Partial<mw.Api.Params.Action.Query.Prop.PageViews>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.Proofread `Partial<mw.Api.Params.Action.Query.Prop.Proofread>`} instead. */
export type ProofreadPageApiQueryProofreadParams = Partial<mw.Api.Params.Action.Query.Prop.Proofread>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.StashImageInfo `Partial<mw.Api.Params.Action.Query.Prop.StashImageInfo>`} instead. */
export type ApiQueryStashImageInfoParams = Partial<mw.Api.Params.Action.Query.Prop.StashImageInfo>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.TranscodeStatus `Partial<mw.Api.Params.Action.Query.Prop.TranscodeStatus>`} instead. */
export type MediaWikiTimedMediaHandlerApiTranscodeStatusParams = Partial<mw.Api.Params.Action.Query.Prop.TranscodeStatus>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.VideoInfo `Partial<mw.Api.Params.Action.Query.Prop.VideoInfo>`} instead. */
export type MediaWikiTimedMediaHandlerApiQueryVideoInfoParams = Partial<mw.Api.Params.Action.Query.Prop.VideoInfo>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Prop.WBEntityUsage `Partial<mw.Api.Params.Action.Query.Prop.WBEntityUsage>`} instead. */
export type WikibaseClientApiPropsEntityUsageParams = Partial<mw.Api.Params.Action.Query.Prop.WBEntityUsage>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.AbuseFilters `Partial<mw.Api.Params.Action.Query.List.AbuseFilters>`} instead. */
export type AbuseFilterApiQueryAbuseFiltersParams = Partial<mw.Api.Params.Action.Query.List.AbuseFilters>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.AbuseLog `Partial<mw.Api.Params.Action.Query.List.AbuseLog>`} instead. */
export type AbuseFilterApiQueryAbuseLogParams = Partial<mw.Api.Params.Action.Query.List.AbuseLog>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.AllCampaigns `Partial<mw.Api.Params.Action.Query.List.AllCampaigns>`} instead. */
export type UploadWizardApiQueryAllCampaignsParams = Partial<mw.Api.Params.Action.Query.List.AllCampaigns>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.AllUsers `Partial<mw.Api.Params.Action.Query.List.AllUsers>`} instead. */
export type ApiQueryAllUsersParams = Partial<mw.Api.Params.Action.Query.List.AllUsers>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.BetaFeatures `Partial<mw.Api.Params.Action.Query.List.BetaFeatures>`} instead. */
export type BetaFeaturesApiQueryBetaFeaturesParams = Partial<mw.Api.Params.Action.Query.List.BetaFeatures>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.Blocks `Partial<mw.Api.Params.Action.Query.List.Blocks>`} instead. */
export type ApiQueryBlocksParams = Partial<mw.Api.Params.Action.Query.List.Blocks>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.CentralNoticeActiveCampaigns `Partial<mw.Api.Params.Action.Query.List.CentralNoticeActiveCampaigns>`} instead. */
export type ApiCentralNoticeQueryActiveCampaignsParams = Partial<mw.Api.Params.Action.Query.List.CentralNoticeActiveCampaigns>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.CentralNoticeLogs `Partial<mw.Api.Params.Action.Query.List.CentralNoticeLogs>`} instead. */
export type ApiCentralNoticeLogsParams = Partial<mw.Api.Params.Action.Query.List.CentralNoticeLogs>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.CheckUser `Partial<mw.Api.Params.Action.Query.List.CheckUser>`} instead. */
export type MediaWikiCheckUserApiQueryCheckUserParams = Partial<mw.Api.Params.Action.Query.List.CheckUser>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.CheckUserLog `Partial<mw.Api.Params.Action.Query.List.CheckUserLog>`} instead. */
export type MediaWikiCheckUserApiQueryCheckUserLogParams = Partial<mw.Api.Params.Action.Query.List.CheckUserLog>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.ContentTranslationCorpora `Partial<mw.Api.Params.Action.Query.List.ContentTranslationCorpora>`} instead. */
export type ContentTranslationActionApiQueryContentTranslationCorporaParams = Partial<mw.Api.Params.Action.Query.List.ContentTranslationCorpora>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.ContentTranslationLangTrend `Partial<mw.Api.Params.Action.Query.List.ContentTranslationLangTrend>`} instead. */
export type ContentTranslationActionApiQueryContentTranslationLanguageTrendParams = Partial<mw.Api.Params.Action.Query.List.ContentTranslationLangTrend>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.ContentTranslationStats `Partial<mw.Api.Params.Action.Query.List.ContentTranslationStats>`} instead. */
export type ContentTranslationActionApiQueryContentTranslationStatsParams = Partial<mw.Api.Params.Action.Query.List.ContentTranslationStats>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.CXPublishedTranslations `Partial<mw.Api.Params.Action.Query.List.CXPublishedTranslations>`} instead. */
export type ContentTranslationActionApiQueryPublishedTranslationsParams = Partial<mw.Api.Params.Action.Query.List.CXPublishedTranslations>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.CXTranslatorStats `Partial<mw.Api.Params.Action.Query.List.CXTranslatorStats>`} instead. */
export type ContentTranslationActionApiQueryTranslatorStatsParams = Partial<mw.Api.Params.Action.Query.List.CXTranslatorStats>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.Deletedrevs `Partial<mw.Api.Params.Action.Query.List.Deletedrevs>`} instead. */
export type ApiQueryDeletedrevsParams = Partial<mw.Api.Params.Action.Query.List.Deletedrevs>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.ExtDistBranches `Partial<mw.Api.Params.Action.Query.List.ExtDistBranches>`} instead. */
export type ExtensionDistributorApiListExtDistBranchesParams = Partial<mw.Api.Params.Action.Query.List.ExtDistBranches>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.ExtDistRepos `Partial<mw.Api.Params.Action.Query.List.ExtDistRepos>`} instead. */
export type ExtensionDistributorApiListExtDistReposParams = Partial<mw.Api.Params.Action.Query.List.ExtDistRepos>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.Filearchive `Partial<mw.Api.Params.Action.Query.List.Filearchive>`} instead. */
export type ApiQueryFilearchiveParams = Partial<mw.Api.Params.Action.Query.List.Filearchive>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.GadgetCategories `Partial<mw.Api.Params.Action.Query.List.GadgetCategories>`} instead. */
export type GadgetsApiQueryGadgetCategoriesParams = Partial<mw.Api.Params.Action.Query.List.GadgetCategories>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.Gadgets `Partial<mw.Api.Params.Action.Query.List.Gadgets>`} instead. */
export type GadgetsApiQueryGadgetsParams = Partial<mw.Api.Params.Action.Query.List.Gadgets>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.GlobalAllUsers `Partial<mw.Api.Params.Action.Query.List.GlobalAllUsers>`} instead. */
export type CentralAuthApiQueryGlobalAllUsersParams = Partial<mw.Api.Params.Action.Query.List.GlobalAllUsers>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.GlobalBlocks `Partial<mw.Api.Params.Action.Query.List.GlobalBlocks>`} instead. */
export type GlobalBlockingApiQueryGlobalBlocksParams = Partial<mw.Api.Params.Action.Query.List.GlobalBlocks>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.GlobalGroups `Partial<mw.Api.Params.Action.Query.List.GlobalGroups>`} instead. */
export type CentralAuthApiQueryGlobalGroupsParams = Partial<mw.Api.Params.Action.Query.List.GlobalGroups>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.GrowthMentorList `Partial<mw.Api.Params.Action.Query.List.GrowthMentorList>`} instead. */
export type GrowthExperimentsApiQueryMentorListParams = Partial<mw.Api.Params.Action.Query.List.GrowthMentorList>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.GrowthMentorMentee `Partial<mw.Api.Params.Action.Query.List.GrowthMentorMentee>`} instead. */
export type GrowthExperimentsApiQueryMentorMenteeParams = Partial<mw.Api.Params.Action.Query.List.GrowthMentorMentee>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.GrowthStarredMentees `Partial<mw.Api.Params.Action.Query.List.GrowthStarredMentees>`} instead. */
export type GrowthExperimentsApiQueryStarredMenteesParams = Partial<mw.Api.Params.Action.Query.List.GrowthStarredMentees>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.LintErrors `Partial<mw.Api.Params.Action.Query.List.LintErrors>`} instead. */
export type MediaWikiLinterApiQueryLintErrorsParams = Partial<mw.Api.Params.Action.Query.List.LintErrors>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.LogEvents `Partial<mw.Api.Params.Action.Query.List.LogEvents>`} instead. */
export type ApiQueryLogEventsParams = Partial<mw.Api.Params.Action.Query.List.LogEvents>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.MessageGroupSubscription `Partial<mw.Api.Params.Action.Query.List.MessageGroupSubscription>`} instead. */
export type TranslateMessageGroupProcessingQueryMessageGroupSubscriptionApiParams = Partial<mw.Api.Params.Action.Query.List.MessageGroupSubscription>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.MyStashedFiles `Partial<mw.Api.Params.Action.Query.List.MyStashedFiles>`} instead. */
export type ApiQueryMyStashedFilesParams = Partial<mw.Api.Params.Action.Query.List.MyStashedFiles>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.PagePropNames `Partial<mw.Api.Params.Action.Query.List.PagePropNames>`} instead. */
export type ApiQueryPagePropNamesParams = Partial<mw.Api.Params.Action.Query.List.PagePropNames>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.Projects `Partial<mw.Api.Params.Action.Query.List.Projects>`} instead. */
export type PageAssessmentsApiQueryProjectsParams = Partial<mw.Api.Params.Action.Query.List.Projects>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.Tags `Partial<mw.Api.Params.Action.Query.List.Tags>`} instead. */
export type ApiQueryTagsParams = Partial<mw.Api.Params.Action.Query.List.Tags>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.Threads `Partial<mw.Api.Params.Action.Query.List.Threads>`} instead. */
export type LiquidThreadsApiQueryLQTThreadsParams = Partial<mw.Api.Params.Action.Query.List.Threads>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.UserContribs `Partial<mw.Api.Params.Action.Query.List.UserContribs>`} instead. */
export type ApiQueryUserContribsParams = Partial<mw.Api.Params.Action.Query.List.UserContribs>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.Users `Partial<mw.Api.Params.Action.Query.List.Users>`} instead. */
export type ApiQueryUsersParams = Partial<mw.Api.Params.Action.Query.List.Users>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.WBSubscribers `Partial<mw.Api.Params.Action.Query.List.WBSubscribers>`} instead. */
export type WikibaseRepoApiListSubscribersParams = Partial<mw.Api.Params.Action.Query.List.WBSubscribers>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.List.WikiSets `Partial<mw.Api.Params.Action.Query.List.WikiSets>`} instead. */
export type CentralAuthApiQueryWikiSetsParams = Partial<mw.Api.Params.Action.Query.List.WikiSets>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.AllMessages `Partial<mw.Api.Params.Action.Query.Meta.AllMessages>`} instead. */
export type ApiQueryAllMessagesParams = Partial<mw.Api.Params.Action.Query.Meta.AllMessages>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.AuthManagerInfo `Partial<mw.Api.Params.Action.Query.Meta.AuthManagerInfo>`} instead. */
export type ApiQueryAuthManagerInfoParams = Partial<mw.Api.Params.Action.Query.Meta.AuthManagerInfo>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.Babel `Partial<mw.Api.Params.Action.Query.Meta.Babel>`} instead. */
export type MediaWikiBabelApiQueryBabelParams = Partial<mw.Api.Params.Action.Query.Meta.Babel>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.CommunityConfiguration `Partial<mw.Api.Params.Action.Query.Meta.CommunityConfiguration>`} instead. */
export type CommunityConfigurationApiQueryReadParams = Partial<mw.Api.Params.Action.Query.Meta.CommunityConfiguration>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.CXDeletedTranslations `Partial<mw.Api.Params.Action.Query.Meta.CXDeletedTranslations>`} instead. */
export type ContentTranslationActionApiQueryDeletedTranslationsParams = Partial<mw.Api.Params.Action.Query.Meta.CXDeletedTranslations>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.FeatureUsage `Partial<mw.Api.Params.Action.Query.Meta.FeatureUsage>`} instead. */
export type ApiFeatureUsageApiQueryFeatureUsageParams = Partial<mw.Api.Params.Action.Query.Meta.FeatureUsage>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.FileRepoInfo `Partial<mw.Api.Params.Action.Query.Meta.FileRepoInfo>`} instead. */
export type ApiQueryFileRepoInfoParams = Partial<mw.Api.Params.Action.Query.Meta.FileRepoInfo>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.GlobalPreferences `Partial<mw.Api.Params.Action.Query.Meta.GlobalPreferences>`} instead. */
export type GlobalPreferencesApiQueryGlobalPreferencesParams = Partial<mw.Api.Params.Action.Query.Meta.GlobalPreferences>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.GlobalRenameStatus `Partial<mw.Api.Params.Action.Query.Meta.GlobalRenameStatus>`} instead. */
export type CentralAuthApiQueryGlobalRenameStatusParams = Partial<mw.Api.Params.Action.Query.Meta.GlobalRenameStatus>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.GlobalUserInfo `Partial<mw.Api.Params.Action.Query.Meta.GlobalUserInfo>`} instead. */
export type CentralAuthApiQueryGlobalUserInfoParams = Partial<mw.Api.Params.Action.Query.Meta.GlobalUserInfo>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.GrowthMenteeStatus `Partial<mw.Api.Params.Action.Query.Meta.GrowthMenteeStatus>`} instead. */
export type GrowthExperimentsApiQueryMenteeStatusParams = Partial<mw.Api.Params.Action.Query.Meta.GrowthMenteeStatus>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.GrowthMentorStatus `Partial<mw.Api.Params.Action.Query.Meta.GrowthMentorStatus>`} instead. */
export type GrowthExperimentsApiQueryMentorStatusParams = Partial<mw.Api.Params.Action.Query.Meta.GrowthMentorStatus>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.GrowthNextSuggestedTaskType `Partial<mw.Api.Params.Action.Query.Meta.GrowthNextSuggestedTaskType>`} instead. */
export type GrowthExperimentsApiQueryNextSuggestedTaskTypeParams = Partial<mw.Api.Params.Action.Query.Meta.GrowthNextSuggestedTaskType>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.Languageinfo `Partial<mw.Api.Params.Action.Query.Meta.Languageinfo>`} instead. */
export type ApiQueryLanguageinfoParams = Partial<mw.Api.Params.Action.Query.Meta.Languageinfo>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.LanguageStats `Partial<mw.Api.Params.Action.Query.Meta.LanguageStats>`} instead. */
export type TranslateStatisticsQueryLanguageStatsActionApiParams = Partial<mw.Api.Params.Action.Query.Meta.LanguageStats>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.LinterStats `Partial<mw.Api.Params.Action.Query.Meta.LinterStats>`} instead. */
export type MediaWikiLinterApiQueryLinterStatsParams = Partial<mw.Api.Params.Action.Query.Meta.LinterStats>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.ManageMessageGroups `Partial<mw.Api.Params.Action.Query.Meta.ManageMessageGroups>`} instead. */
export type TranslateMessageGroupProcessingQueryManageMessageGroupsActionApiParams = Partial<mw.Api.Params.Action.Query.Meta.ManageMessageGroups>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.MessageGroups `Partial<mw.Api.Params.Action.Query.Meta.MessageGroups>`} instead. */
export type TranslateMessageGroupProcessingQueryMessageGroupsActionApiParams = Partial<mw.Api.Params.Action.Query.Meta.MessageGroups>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.MessageGroupStats `Partial<mw.Api.Params.Action.Query.Meta.MessageGroupStats>`} instead. */
export type TranslateStatisticsQueryMessageGroupStatsActionApiParams = Partial<mw.Api.Params.Action.Query.Meta.MessageGroupStats>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.MessageTranslations `Partial<mw.Api.Params.Action.Query.Meta.MessageTranslations>`} instead. */
export type TranslateMessageLoadingQueryMessageTranslationsActionApiParams = Partial<mw.Api.Params.Action.Query.Meta.MessageTranslations>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.Notifications `Partial<mw.Api.Params.Action.Query.Meta.Notifications>`} instead. */
export type NotificationsApiEchoNotificationsParams = Partial<mw.Api.Params.Action.Query.Meta.Notifications>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.OATH `Partial<mw.Api.Params.Action.Query.Meta.OATH>`} instead. */
export type OATHAuthApiModuleApiQueryOATHParams = Partial<mw.Api.Params.Action.Query.Meta.OATH>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.ORES `Partial<mw.Api.Params.Action.Query.Meta.ORES>`} instead. */
export type ORESHooksApiQueryORESParams = Partial<mw.Api.Params.Action.Query.Meta.ORES>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.ProofreadInfo `Partial<mw.Api.Params.Action.Query.Meta.ProofreadInfo>`} instead. */
export type ProofreadPageApiQueryProofreadInfoParams = Partial<mw.Api.Params.Action.Query.Meta.ProofreadInfo>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.ReadingLists `Partial<mw.Api.Params.Action.Query.Meta.ReadingLists>`} instead. */
export type ReadingListsApiQueryReadingListsParams = Partial<mw.Api.Params.Action.Query.Meta.ReadingLists>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.Siteinfo `Partial<mw.Api.Params.Action.Query.Meta.Siteinfo>`} instead. */
export type ApiQuerySiteinfoParams = Partial<mw.Api.Params.Action.Query.Meta.Siteinfo>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.SiteViews `Partial<mw.Api.Params.Action.Query.Meta.SiteViews>`} instead. */
export type PageViewInfoApiQuerySiteViewsParams = Partial<mw.Api.Params.Action.Query.Meta.SiteViews>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.Tokens `Partial<mw.Api.Params.Action.Query.Meta.Tokens>`} instead. */
export type ApiQueryTokensParams = Partial<mw.Api.Params.Action.Query.Meta.Tokens>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.UnreadNotificationPages `Partial<mw.Api.Params.Action.Query.Meta.UnreadNotificationPages>`} instead. */
export type NotificationsApiEchoUnreadNotificationPagesParams = Partial<mw.Api.Params.Action.Query.Meta.UnreadNotificationPages>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.UserInfo `Partial<mw.Api.Params.Action.Query.Meta.UserInfo>`} instead. */
export type ApiQueryUserInfoParams = Partial<mw.Api.Params.Action.Query.Meta.UserInfo>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.WBContentLanguages `Partial<mw.Api.Params.Action.Query.Meta.WBContentLanguages>`} instead. */
export type WikibaseRepoApiMetaContentLanguagesParams = Partial<mw.Api.Params.Action.Query.Meta.WBContentLanguages>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.WBDataBridgeConfig `Partial<mw.Api.Params.Action.Query.Meta.WBDataBridgeConfig>`} instead. */
export type WikibaseRepoApiMetaDataBridgeConfigParams = Partial<mw.Api.Params.Action.Query.Meta.WBDataBridgeConfig>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.Wikibase `Partial<mw.Api.Params.Action.Query.Meta.Wikibase>`} instead. */
export type WikibaseClientApiClientInfoParams = Partial<mw.Api.Params.Action.Query.Meta.Wikibase>;

/** @deprecated Use {@link mw.Api.Params.Action.Query.Meta.WikimediaEditorTasksCounts `Partial<mw.Api.Params.Action.Query.Meta.WikimediaEditorTasksCounts>`} instead. */
export type WikimediaEditorTasksApiQueryWikimediaEditorTasksCountsParams = Partial<mw.Api.Params.Action.Query.Meta.WikimediaEditorTasksCounts>;

/** @deprecated Use {@link mw.Api.Params.Action.Query `Partial<mw.Api.Params.Action.Query>`} instead. */
export type ApiQueryParams = Partial<mw.Api.Params.Action.Query>;

/** @deprecated Use {@link mw.Api.Params.Action.ReadingLists `Partial<mw.Api.Params.Action.ReadingLists>`} instead. */
export type ReadingListsApiReadingListsParams = Partial<mw.Api.Params.Action.ReadingLists>;

/** @deprecated Use {@link mw.Api.Params.Action.RemoveAuthenticationData `Partial<mw.Api.Params.Action.RemoveAuthenticationData>`} / {@link mw.Api.Params.Action.UnlinkAccount `Partial<mw.Api.Params.Action.UnlinkAccount>`} instead. */
export type ApiRemoveAuthenticationDataParams = Partial<mw.Api.Params.Action.RemoveAuthenticationData>;

/** @deprecated Use {@link mw.Api.Params.Action.ResetPassword `Partial<mw.Api.Params.Action.ResetPassword>`} instead. */
export type ApiResetPasswordParams = Partial<mw.Api.Params.Action.ResetPassword>;

/** @deprecated Use {@link mw.Api.Params.Action.Review `Partial<mw.Api.Params.Action.Review>`} instead. */
export type ApiReviewParams = Partial<mw.Api.Params.Action.Review>;

/** @deprecated Use {@link mw.Api.Params.Action.RevisionDelete `Partial<mw.Api.Params.Action.RevisionDelete>`} instead. */
export type ApiRevisionDeleteParams = Partial<mw.Api.Params.Action.RevisionDelete>;

/** @deprecated Use {@link mw.Api.Params.Action.Rollback `Partial<mw.Api.Params.Action.Rollback>`} instead. */
export type ApiRollbackParams = Partial<mw.Api.Params.Action.Rollback>;

/** @deprecated Use {@link mw.Api.Params.Action.Rsd `Partial<mw.Api.Params.Action.Rsd>`} instead. */
export type ApiRsdParams = Partial<mw.Api.Params.Action.Rsd>;

/** @deprecated Use {@link mw.Api.Params.Action.SanitizeMapData `Partial<mw.Api.Params.Action.SanitizeMapData>`} instead. */
export type KartographerApiSanitizeMapDataParams = Partial<mw.Api.Params.Action.SanitizeMapData>;

/** @deprecated Use {@link mw.Api.Params.Action.ScribuntoConsole `Partial<mw.Api.Params.Action.ScribuntoConsole>`} instead. */
export type ScribuntoApiScribuntoConsoleParams = Partial<mw.Api.Params.Action.ScribuntoConsole>;

/** @deprecated Use {@link mw.Api.Params.Action.SearchTranslations `Partial<mw.Api.Params.Action.SearchTranslations>`} instead. */
export type TranslateTtmServerSearchTranslationsActionApiParams = Partial<mw.Api.Params.Action.SearchTranslations>;

/** @deprecated Use {@link mw.Api.Params.Action.SecurePollAuth `Partial<mw.Api.Params.Action.SecurePollAuth>`} instead. */
export type SecurePollApiSecurePollAuthParams = Partial<mw.Api.Params.Action.SecurePollAuth>;

/** @deprecated Use {@link mw.Api.Params.Action.SetGlobalAccountStatus `Partial<mw.Api.Params.Action.SetGlobalAccountStatus>`} instead. */
export type CentralAuthApiSetGlobalAccountStatusParams = Partial<mw.Api.Params.Action.SetGlobalAccountStatus>;

/** @deprecated Use {@link mw.Api.Params.Action.SetNotificationTimestamp `Partial<mw.Api.Params.Action.SetNotificationTimestamp>`} instead. */
export type ApiSetNotificationTimestampParams = Partial<mw.Api.Params.Action.SetNotificationTimestamp>;

/** @deprecated Use {@link mw.Api.Params.Action.SetPageLanguage `Partial<mw.Api.Params.Action.SetPageLanguage>`} instead. */
export type ApiSetPageLanguageParams = Partial<mw.Api.Params.Action.SetPageLanguage>;

/** @deprecated Use {@link mw.Api.Params.Action.ShortenUrl `Partial<mw.Api.Params.Action.ShortenUrl>`} instead. */
export type UrlShortenerApiShortenUrlParams = Partial<mw.Api.Params.Action.ShortenUrl>;

/** @deprecated Use {@link mw.Api.Params.Action.SiteMatrix `Partial<mw.Api.Params.Action.SiteMatrix>`} instead. */
export type SiteMatrixApiSiteMatrixParams = Partial<mw.Api.Params.Action.SiteMatrix>;

/** @deprecated Use {@link mw.Api.Params.Action.SpamBlacklist `Partial<mw.Api.Params.Action.SpamBlacklist>`} instead. */
export type SpamBlacklistApiSpamBlacklistParams = Partial<mw.Api.Params.Action.SpamBlacklist>;

/** @deprecated Use {@link mw.Api.Params.Action.Stabilize `Partial<mw.Api.Params.Action.Stabilize>`} instead. */
export type ApiStabilizeProtectParams = Partial<mw.Api.Params.Action.Stabilize>;

/** @deprecated Use {@link mw.Api.Params.Action.StashEdit `Partial<mw.Api.Params.Action.StashEdit>`} instead. */
export type ApiStashEditParams = Partial<mw.Api.Params.Action.StashEdit>;

/** @deprecated Use {@link mw.Api.Params.Action.StreamConfigS `Partial<mw.Api.Params.Action.StreamConfigS>`} instead. */
export type EventStreamConfigApiStreamConfigsParams = Partial<mw.Api.Params.Action.StreamConfigS>;

/** @deprecated Use {@link mw.Api.Params.Action.StrikeVote `Partial<mw.Api.Params.Action.StrikeVote>`} instead. */
export type SecurePollApiStrikeVoteParams = Partial<mw.Api.Params.Action.StrikeVote>;

/** @deprecated Use {@link mw.Api.Params.Action.SXDelete `Partial<mw.Api.Params.Action.SXDelete>`} instead. */
export type ContentTranslationActionApiSectionTranslationDeleteParams = Partial<mw.Api.Params.Action.SXDelete>;

/** @deprecated Use {@link mw.Api.Params.Action.SXSave `Partial<mw.Api.Params.Action.SXSave>`} instead. */
export type ContentTranslationActionApiSectionTranslationSaveParams = Partial<mw.Api.Params.Action.SXSave>;

/** @deprecated Use {@link mw.Api.Params.Action.Tag `Partial<mw.Api.Params.Action.Tag>`} instead. */
export type ApiTagParams = Partial<mw.Api.Params.Action.Tag>;

/** @deprecated Use {@link mw.Api.Params.Action.TemplateData `Partial<mw.Api.Params.Action.TemplateData>`} instead. */
export type TemplateDataApiTemplateDataParams = Partial<mw.Api.Params.Action.TemplateData>;

/** @deprecated Use {@link mw.Api.Params.Action.Thank `Partial<mw.Api.Params.Action.Thank>`} instead. */
export type ThanksApiCoreThankParams = Partial<mw.Api.Params.Action.Thank>;

/** @deprecated Use {@link mw.Api.Params.Action.ThreadAction `Partial<mw.Api.Params.Action.ThreadAction>`} instead. */
export type LiquidThreadsApiThreadActionParams = Partial<mw.Api.Params.Action.ThreadAction>;

/** @deprecated Use {@link mw.Api.Params.Action.TimedText `Partial<mw.Api.Params.Action.TimedText>`} instead. */
export type MediaWikiTimedMediaHandlerApiTimedTextParams = Partial<mw.Api.Params.Action.TimedText>;

/** @deprecated Use {@link mw.Api.Params.Action.TitleBlacklist `Partial<mw.Api.Params.Action.TitleBlacklist>`} instead. */
export type TitleBlacklistApiTitleBlacklistParams = Partial<mw.Api.Params.Action.TitleBlacklist>;

/** @deprecated Use {@link mw.Api.Params.Action.TorBlock `Partial<mw.Api.Params.Action.TorBlock>`} instead. */
export type TorBlockApiTorBlockParams = Partial<mw.Api.Params.Action.TorBlock>;

/** @deprecated Use {@link mw.Api.Params.Action.TranscodeReset `Partial<mw.Api.Params.Action.TranscodeReset>`} instead. */
export type MediaWikiTimedMediaHandlerApiTranscodeResetParams = Partial<mw.Api.Params.Action.TranscodeReset>;

/** @deprecated Use {@link mw.Api.Params.Action.TranslationAids `Partial<mw.Api.Params.Action.TranslationAids>`} instead. */
export type TranslateTranslatorInterfaceAidTranslationAidsActionApiParams = Partial<mw.Api.Params.Action.TranslationAids>;

/** @deprecated Use {@link mw.Api.Params.Action.TranslationCheck `Partial<mw.Api.Params.Action.TranslationCheck>`} instead. */
export type TranslateValidationCheckTranslationActionApiParams = Partial<mw.Api.Params.Action.TranslationCheck>;

/** @deprecated Use {@link mw.Api.Params.Action.TranslationEntitySearch `Partial<mw.Api.Params.Action.TranslationEntitySearch>`} instead. */
export type TranslateTranslatorInterfaceTranslationEntitySearchActionApiParams = Partial<mw.Api.Params.Action.TranslationEntitySearch>;

/** @deprecated Use {@link mw.Api.Params.Action.TranslationReview `Partial<mw.Api.Params.Action.TranslationReview>`} instead. */
export type TranslateTranslatorInterfaceReviewTranslationActionApiParams = Partial<mw.Api.Params.Action.TranslationReview>;

/** @deprecated Use {@link mw.Api.Params.Action.TranslationStats `Partial<mw.Api.Params.Action.TranslationStats>`} instead. */
export type TranslateStatisticsQueryTranslationStatsActionApiParams = Partial<mw.Api.Params.Action.TranslationStats>;

/** @deprecated Use {@link mw.Api.Params.Action.TtmServer `Partial<mw.Api.Params.Action.TtmServer>`} instead. */
export type TranslateTtmServerTtmServerActionApiParams = Partial<mw.Api.Params.Action.TtmServer>;

/** @deprecated Use {@link mw.Api.Params.Action.ULSLocalization `Partial<mw.Api.Params.Action.ULSLocalization>`} instead. */
export type UniversalLanguageSelectorApiULSLocalizationParams = Partial<mw.Api.Params.Action.ULSLocalization>;

/** @deprecated Use {@link mw.Api.Params.Action.ULSSetLang `Partial<mw.Api.Params.Action.ULSSetLang>`} instead. */
export type UniversalLanguageSelectorApiULSSetLanguageParams = Partial<mw.Api.Params.Action.ULSSetLang>;

/** @deprecated Use {@link mw.Api.Params.Action.Unblock `Partial<mw.Api.Params.Action.Unblock>`} instead. */
export type ApiUnblockParams = Partial<mw.Api.Params.Action.Unblock>;

/** @deprecated Use {@link mw.Api.Params.Action.Undelete `Partial<mw.Api.Params.Action.Undelete>`} instead. */
export type ApiUndeleteParams = Partial<mw.Api.Params.Action.Undelete>;

/** @deprecated Use {@link mw.Api.Params.Action.Upload `Partial<mw.Api.Params.Action.Upload>`} instead. */
export type ApiUploadParams = Partial<mw.Api.Params.Action.Upload>;

/** @deprecated Use {@link mw.Api.Params.Action.Userrights `Partial<mw.Api.Params.Action.Userrights>`} instead. */
export type ApiUserrightsParams = Partial<mw.Api.Params.Action.Userrights>;

/** @deprecated Use {@link mw.Api.Params.Action.ValidatePassword `Partial<mw.Api.Params.Action.ValidatePassword>`} instead. */
export type ApiValidatePasswordParams = Partial<mw.Api.Params.Action.ValidatePassword>;

/** @deprecated Use {@link mw.Api.Params.Action.VisualEditor `Partial<mw.Api.Params.Action.VisualEditor>`} instead. */
export type VisualEditorApiVisualEditorParams = Partial<mw.Api.Params.Action.VisualEditor>;

/** @deprecated Use {@link mw.Api.Params.Action.VisualEditorEdit `Partial<mw.Api.Params.Action.VisualEditorEdit>`} instead. */
export type VisualEditorApiVisualEditorEditParams = Partial<mw.Api.Params.Action.VisualEditorEdit>;

/** @deprecated Use {@link mw.Api.Params.Action.Watch `Partial<mw.Api.Params.Action.Watch>`} instead. */
export type ApiWatchParams = Partial<mw.Api.Params.Action.Watch>;

/** @deprecated Use {@link mw.Api.Params.Action.WBAvailableBadges `Partial<mw.Api.Params.Action.WBAvailableBadges>`} instead. */
export type WikibaseRepoApiAvailableBadgesParams = Partial<mw.Api.Params.Action.WBAvailableBadges>;

/** @deprecated Use {@link mw.Api.Params.Action.WBCheckConstraintParameters `Partial<mw.Api.Params.Action.WBCheckConstraintParameters>`} instead. */
export type WikibaseQualityConstraintReportApiCheckConstraintParametersParams = Partial<mw.Api.Params.Action.WBCheckConstraintParameters>;

/** @deprecated Use {@link mw.Api.Params.Action.WBCheckConstraints `Partial<mw.Api.Params.Action.WBCheckConstraints>`} instead. */
export type WikibaseQualityConstraintReportApiCheckConstraintsParams = Partial<mw.Api.Params.Action.WBCheckConstraints>;

/** @deprecated Use {@link mw.Api.Params.Action.WBCreateClaim `Partial<mw.Api.Params.Action.WBCreateClaim>`} instead. */
export type WikibaseRepoApiCreateClaimParams = Partial<mw.Api.Params.Action.WBCreateClaim>;

/** @deprecated Use {@link mw.Api.Params.Action.WBCreateRedirect `Partial<mw.Api.Params.Action.WBCreateRedirect>`} instead. */
export type WikibaseRepoApiCreateRedirectParams = Partial<mw.Api.Params.Action.WBCreateRedirect>;

/** @deprecated Use {@link mw.Api.Params.Action.WBEditEntity `Partial<mw.Api.Params.Action.WBEditEntity>`} instead. */
export type WikibaseRepoApiEditEntityParams = Partial<mw.Api.Params.Action.WBEditEntity>;

/** @deprecated Use {@link mw.Api.Params.Action.WBFormatEntities `Partial<mw.Api.Params.Action.WBFormatEntities>`} instead. */
export type WikibaseRepoApiFormatEntitiesParams = Partial<mw.Api.Params.Action.WBFormatEntities>;

/** @deprecated Use {@link mw.Api.Params.Action.WBFormatReference `Partial<mw.Api.Params.Action.WBFormatReference>`} instead. */
export type WikibaseClientApiFormatReferenceParams = Partial<mw.Api.Params.Action.WBFormatReference>;

/** @deprecated Use {@link mw.Api.Params.Action.WBFormatValue `Partial<mw.Api.Params.Action.WBFormatValue>`} instead. */
export type WikibaseRepoApiFormatSnakValueParams = Partial<mw.Api.Params.Action.WBFormatValue>;

/** @deprecated Use {@link mw.Api.Params.Action.WBGetClaims `Partial<mw.Api.Params.Action.WBGetClaims>`} instead. */
export type WikibaseRepoApiGetClaimsParams = Partial<mw.Api.Params.Action.WBGetClaims>;

/** @deprecated Use {@link mw.Api.Params.Action.WBGetEntities `Partial<mw.Api.Params.Action.WBGetEntities>`} instead. */
export type WikibaseRepoApiGetEntitiesParams = Partial<mw.Api.Params.Action.WBGetEntities>;

/** @deprecated Use {@link mw.Api.Params.Action.WBLAddForm `Partial<mw.Api.Params.Action.WBLAddForm>`} instead. */
export type WikibaseLexemeMediaWikiApiAddFormParams = Partial<mw.Api.Params.Action.WBLAddForm>;

/** @deprecated Use {@link mw.Api.Params.Action.WBLAddSense `Partial<mw.Api.Params.Action.WBLAddSense>`} instead. */
export type WikibaseLexemeMediaWikiApiAddSenseParams = Partial<mw.Api.Params.Action.WBLAddSense>;

/** @deprecated Use {@link mw.Api.Params.Action.WBLEditFormElements `Partial<mw.Api.Params.Action.WBLEditFormElements>`} instead. */
export type WikibaseLexemeMediaWikiApiEditFormElementsParams = Partial<mw.Api.Params.Action.WBLEditFormElements>;

/** @deprecated Use {@link mw.Api.Params.Action.WBLEditSenseElements `Partial<mw.Api.Params.Action.WBLEditSenseElements>`} instead. */
export type WikibaseLexemeMediaWikiApiEditSenseElementsParams = Partial<mw.Api.Params.Action.WBLEditSenseElements>;

/** @deprecated Use {@link mw.Api.Params.Action.WBLinkTitles `Partial<mw.Api.Params.Action.WBLinkTitles>`} instead. */
export type WikibaseRepoApiLinkTitlesParams = Partial<mw.Api.Params.Action.WBLinkTitles>;

/** @deprecated Use {@link mw.Api.Params.Action.WBLMergeLexemes `Partial<mw.Api.Params.Action.WBLMergeLexemes>`} instead. */
export type WikibaseLexemeMediaWikiApiMergeLexemesParams = Partial<mw.Api.Params.Action.WBLMergeLexemes>;

/** @deprecated Use {@link mw.Api.Params.Action.WBLRemoveForm `Partial<mw.Api.Params.Action.WBLRemoveForm>`} instead. */
export type WikibaseLexemeMediaWikiApiRemoveFormParams = Partial<mw.Api.Params.Action.WBLRemoveForm>;

/** @deprecated Use {@link mw.Api.Params.Action.WBLRemoveSense `Partial<mw.Api.Params.Action.WBLRemoveSense>`} instead. */
export type WikibaseLexemeMediaWikiApiRemoveSenseParams = Partial<mw.Api.Params.Action.WBLRemoveSense>;

/** @deprecated Use {@link mw.Api.Params.Action.WBMergeItems `Partial<mw.Api.Params.Action.WBMergeItems>`} instead. */
export type WikibaseRepoApiMergeItemsParams = Partial<mw.Api.Params.Action.WBMergeItems>;

/** @deprecated Use {@link mw.Api.Params.Action.WBParseValue `Partial<mw.Api.Params.Action.WBParseValue>`} instead. */
export type WikibaseRepoApiParseValueParams = Partial<mw.Api.Params.Action.WBParseValue>;

/** @deprecated Use {@link mw.Api.Params.Action.WBRemoveClaims `Partial<mw.Api.Params.Action.WBRemoveClaims>`} instead. */
export type WikibaseRepoApiRemoveClaimsParams = Partial<mw.Api.Params.Action.WBRemoveClaims>;

/** @deprecated Use {@link mw.Api.Params.Action.WBRemoveQualifiers `Partial<mw.Api.Params.Action.WBRemoveQualifiers>`} instead. */
export type WikibaseRepoApiRemoveQualifiersParams = Partial<mw.Api.Params.Action.WBRemoveQualifiers>;

/** @deprecated Use {@link mw.Api.Params.Action.WBRemoveReferences `Partial<mw.Api.Params.Action.WBRemoveReferences>`} instead. */
export type WikibaseRepoApiRemoveReferencesParams = Partial<mw.Api.Params.Action.WBRemoveReferences>;

/** @deprecated Use {@link mw.Api.Params.Action.WBSearchEntities `Partial<mw.Api.Params.Action.WBSearchEntities>`} instead. */
export type WikibaseRepoApiSearchEntitiesParams = Partial<mw.Api.Params.Action.WBSearchEntities>;

/** @deprecated Use {@link mw.Api.Params.Action.WBSetAliases `Partial<mw.Api.Params.Action.WBSetAliases>`} instead. */
export type WikibaseRepoApiSetAliasesParams = Partial<mw.Api.Params.Action.WBSetAliases>;

/** @deprecated Use {@link mw.Api.Params.Action.WBSetClaim `Partial<mw.Api.Params.Action.WBSetClaim>`} instead. */
export type WikibaseRepoApiSetClaimParams = Partial<mw.Api.Params.Action.WBSetClaim>;

/** @deprecated Use {@link mw.Api.Params.Action.WBSetClaimValue `Partial<mw.Api.Params.Action.WBSetClaimValue>`} instead. */
export type WikibaseRepoApiSetClaimValueParams = Partial<mw.Api.Params.Action.WBSetClaimValue>;

/** @deprecated Use {@link mw.Api.Params.Action.WBSetDescription `Partial<mw.Api.Params.Action.WBSetDescription>`} instead. */
export type WikibaseRepoApiSetDescriptionParams = Partial<mw.Api.Params.Action.WBSetDescription>;

/** @deprecated Use {@link mw.Api.Params.Action.WBSetLabel `Partial<mw.Api.Params.Action.WBSetLabel>`} instead. */
export type WikibaseRepoApiSetLabelParams = Partial<mw.Api.Params.Action.WBSetLabel>;

/** @deprecated Use {@link mw.Api.Params.Action.WBSetQualifier `Partial<mw.Api.Params.Action.WBSetQualifier>`} instead. */
export type WikibaseRepoApiSetQualifierParams = Partial<mw.Api.Params.Action.WBSetQualifier>;

/** @deprecated Use {@link mw.Api.Params.Action.WBSetReference `Partial<mw.Api.Params.Action.WBSetReference>`} instead. */
export type WikibaseRepoApiSetReferenceParams = Partial<mw.Api.Params.Action.WBSetReference>;

/** @deprecated Use {@link mw.Api.Params.Action.WBSetSiteLink `Partial<mw.Api.Params.Action.WBSetSiteLink>`} instead. */
export type WikibaseRepoApiSetSiteLinkParams = Partial<mw.Api.Params.Action.WBSetSiteLink>;

/** @deprecated Use {@link mw.Api.Params.Action.WBSGetSuggestions `Partial<mw.Api.Params.Action.WBSGetSuggestions>`} instead. */
export type PropertySuggesterGetSuggestionsParams = Partial<mw.Api.Params.Action.WBSGetSuggestions>;

/** @deprecated Use {@link mw.Api.Params.Action.WebappManifest `Partial<mw.Api.Params.Action.WebappManifest>`} instead. */
export type MobileFrontendApiWebappManifestParams = Partial<mw.Api.Params.Action.WebappManifest>;

/** @deprecated Use {@link mw.Api.Params.Action.WebAuthn `Partial<mw.Api.Params.Action.WebAuthn>`} instead. */
export type WebAuthnApiWebAuthnParams = Partial<mw.Api.Params.Action.WebAuthn>;

/** @deprecated Use {@link mw.Api.Params.Action.WikiFunctionsRun `Partial<mw.Api.Params.Action.WikiFunctionsRun>`} instead. */
export type WikiLambdaPublicAPIPublicApiRunParams = Partial<mw.Api.Params.Action.WikiFunctionsRun>;

/** @deprecated Use {@link mw.Api.Params.Action.WikiLambdaEdit `Partial<mw.Api.Params.Action.WikiLambdaEdit>`} instead. */
export type WikiLambdaActionAPIApiZObjectEditorParams = Partial<mw.Api.Params.Action.WikiLambdaEdit>;

/** @deprecated Use {@link mw.Api.Params.Action.WikiLambdaFetch `Partial<mw.Api.Params.Action.WikiLambdaFetch>`} instead. */
export type WikiLambdaActionAPIApiZObjectFetcherParams = Partial<mw.Api.Params.Action.WikiLambdaFetch>;

/** @deprecated Use {@link mw.Api.Params.Action.WikiLambdaFunctionCall `Partial<mw.Api.Params.Action.WikiLambdaFunctionCall>`} instead. */
export type WikiLambdaActionAPIApiFunctionCallParams = Partial<mw.Api.Params.Action.WikiLambdaFunctionCall>;

/** @deprecated Use {@link mw.Api.Params.Action.WikiLambdaPerformTest `Partial<mw.Api.Params.Action.WikiLambdaPerformTest>`} instead. */
export type WikiLambdaActionAPIApiPerformTestParams = Partial<mw.Api.Params.Action.WikiLambdaPerformTest>;

/** @deprecated Use {@link mw.Api.Params.Action.WikiLambdaSupportedProgrammingLanguages `Partial<mw.Api.Params.Action.WikiLambdaSupportedProgrammingLanguages>`} instead. */
export type WikiLambdaActionAPIApiSupportedProgrammingLanguagesParams = Partial<mw.Api.Params.Action.WikiLambdaSupportedProgrammingLanguages>;

/** @deprecated Use {@link mw.Api.Params.Action.WikiLove `Partial<mw.Api.Params.Action.WikiLove>`} instead. */
export type WikiLoveApiWikiLoveParams = Partial<mw.Api.Params.Action.WikiLove>;

/** @deprecated Use {@link mw.Api.Params.Action.WikimediaEventsBlockedEdit `Partial<mw.Api.Params.Action.WikimediaEventsBlockedEdit>`} instead. */
export type WikimediaEventsApiWikimediaEventsBlockedEditParams = Partial<mw.Api.Params.Action.WikimediaEventsBlockedEdit>;

/** @deprecated Use {@link mw.Api.Params.Format.Json `Partial<mw.Api.Params.Format.Json>`} / {@link mw.Api.Params.Format.JsonFM `Partial<mw.Api.Params.Format.JsonFM>`} / {@link mw.Api.Params.Format.RawFM `Partial<mw.Api.Params.Format.RawFM>`} instead. */
export type ApiFormatJsonParams = Partial<mw.Api.Params.Format.Json>;

/** @deprecated Use {@link mw.Api.Params.Format.None `Partial<mw.Api.Params.Format.None>`} instead. */
export type ApiFormatNoneParams = Partial<mw.Api.Params.Format.None>;

/** @deprecated Use {@link mw.Api.Params.Format.Php `Partial<mw.Api.Params.Format.Php>`} / {@link mw.Api.Params.Format.PhpFM `Partial<mw.Api.Params.Format.PhpFM>`} instead. */
export type ApiFormatPhpParams = Partial<mw.Api.Params.Format.Php>;

/** @deprecated Use {@link mw.Api.Params.Format.Xml `Partial<mw.Api.Params.Format.Xml>`} / {@link mw.Api.Params.Format.XmlFM `Partial<mw.Api.Params.Format.XmlFM>`} instead. */
export type ApiFormatXmlParams = Partial<mw.Api.Params.Format.Xml>;

/** @deprecated Use {@link mw.Api.Params `Partial<mw.Api.Params>`} instead. */
export type ApiMainParams = Partial<mw.Api.Params>;

export {};
