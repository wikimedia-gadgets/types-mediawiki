// tslint:disable:no-mergeable-namespace

/** @deprecated Use {@link mw.Api.Assert} instead */
export type ApiAssert = mw.Api.Assert;
/** @deprecated Use {@link mw.Api.TokenType} instead */
export type ApiTokenType = mw.Api.TokenType;
/** @deprecated Use {@link mw.Api.LegacyTokenType} instead */
export type ApiLegacyTokenType = mw.Api.LegacyTokenType;
/** @deprecated Use {@link mw.Api.Params} instead */
export type ApiParams = mw.Api.Params;

// AUTOMATICALLY GENERATED FROM HERE:

declare global {
    namespace mw.Api.Params {
        namespace AbuseFilter {
            interface CheckMatch extends Params {
                action: "abusefiltercheckmatch";
                filter?: string;
                vars?: string;
                rcid?: number;
                logid?: number;
            }
        }

        namespace AbuseFilter {
            interface CheckSyntax extends Params {
                action: "abusefilterchecksyntax";
                filter?: string;
            }
        }

        namespace AbuseFilter {
            interface EvalExpression extends Params {
                action: "abusefilterevalexpression";
                expression?: string;
                prettyprint?: boolean;
            }
        }

        namespace AbuseFilter {
            interface UnblockAutopromote extends Params {
                action: "abusefilterunblockautopromote";
                user?: string;
                token?: string;
            }
        }

        namespace AbuseFilter {
            interface AbuseLogPrivateDetails extends Params {
                action: "abuselogprivatedetails";
                logid?: number;
                reason?: string;
                token?: string;
            }
        }

        interface AcquireTempUserName extends Params {
            action: "acquiretempusername";
        }

        interface AntiSpoof extends Params {
            action: "antispoof";
            username?: string;
        }

        interface Block extends Params {
            action: "block";
            user?: string;
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
            watchlistexpiry?: string;
            tags?: TypeOrArray<string>;
            partial?: boolean;
            pagerestrictions?: TypeOrArray<string>;
            namespacerestrictions?: TypeOrArray<number>;
            token?: string;
        }

        interface BounceHandler extends Params {
            action: "bouncehandler";
            email?: string;
        }

        interface CategoryTree extends Params {
            action: "categorytree";
            category?: string;
            options?: string;
        }

        namespace CentralAuth {
            interface CentralAuthToken extends Params {
                action: "centralauthtoken";
            }
        }

        interface CentralNoticeCdnCacheUpdateBanner extends Params {
            action: "centralnoticecdncacheupdatebanner";
            banner?: string;
            language?: string;
            token?: string;
        }

        interface CentralNoticeChoiceData extends Params {
            action: "centralnoticechoicedata";
            project?: string;
            language?: string;
        }

        interface CentralNoticeQueryCampaign extends Params {
            action: "centralnoticequerycampaign";
            campaign?: string;
        }

        interface ChangeAuthenticationData extends Params {
            action: "changeauthenticationdata";
            changeauthrequest?: string;
            changeauthtoken?: string;
        }

        interface ChangeContentModel extends Params {
            action: "changecontentmodel";
            title?: string;
            pageid?: number;
            summary?: string;
            tags?: TypeOrArray<string>;
            model?:
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

        interface CheckToken extends Params {
            action: "checktoken";
            type?:
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

        namespace CirrusSearch {
            interface ConfigDump extends Params {
                action: "cirrus-config-dump";
                prop?: TypeOrArray<
                    "globals" | "namespacemap" | "profiles" | "replicagroup" | "usertesting"
                >;
            }
        }

        namespace CirrusSearch {
            interface MappingDump extends Params {
                action: "cirrus-mapping-dump";
            }
        }

        namespace CirrusSearch {
            interface ProfilesDump extends Params {
                action: "cirrus-profiles-dump";
                verbose?: boolean;
            }
        }

        namespace CirrusSearch {
            interface SettingsDump extends Params {
                action: "cirrus-settings-dump";
            }
        }

        interface ClearHasMsg extends Params {
            action: "clearhasmsg";
        }

        interface ClientLogin extends Params {
            action: "clientlogin";
            loginrequests?: TypeOrArray<string>;
            loginmessageformat?: "html" | "none" | "raw" | "wikitext";
            loginmergerequestfields?: boolean;
            loginpreservestate?: boolean;
            loginreturnurl?: string;
            logincontinue?: boolean;
            logintoken?: string;
        }

        interface Collection extends Params {
            action: "collection";
            submodule?:
                | "addarticle"
                | "addcategory"
                | "addchapter"
                | "clearcollection"
                | "getbookcreatorboxcontent"
                | "getcollection"
                | "getpopupdata"
                | "postcollection"
                | "removearticle"
                | "removeitem"
                | "renamechapter"
                | "setsorting"
                | "settitles"
                | "sortitems"
                | "suggestarticleaction"
                | "suggestundoarticleaction";
        }

        interface ComparePages extends Params {
            action: "compare";
            fromtitle?: string;
            fromid?: number;
            fromrev?: number;
            fromslots?: TypeOrArray<"main">;
            frompst?: boolean;
            fromtext?: string;
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
            fromcontentmodel?:
                | "GadgetDefinition"
                | "JsonSchema"
                | "MassMessageListContent"
                | "Scribunto"
                | "SecurePoll"
                | "css"
                | "flow-board"
                | "javascript"
                | "json"
                | "sanitized-css"
                | "text"
                | "unknown"
                | "wikitext";
            fromsection?: string;
            totitle?: string;
            toid?: number;
            torev?: number;
            torelative?: "cur" | "next" | "prev";
            toslots?: TypeOrArray<"main">;
            topst?: boolean;
            totext?: string;
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
            tocontentmodel?:
                | "GadgetDefinition"
                | "JsonSchema"
                | "MassMessageListContent"
                | "Scribunto"
                | "SecurePoll"
                | "css"
                | "flow-board"
                | "javascript"
                | "json"
                | "sanitized-css"
                | "text"
                | "unknown"
                | "wikitext";
            tosection?: string;
            prop?: TypeOrArray<
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
            slots?: TypeOrArray<"main">;
            difftype?: "inline" | "table" | "unified";
        }

        interface AMCreateAccount extends Params {
            action: "createaccount";
            createrequests?: TypeOrArray<string>;
            createmessageformat?: "html" | "none" | "raw" | "wikitext";
            createmergerequestfields?: boolean;
            createpreservestate?: boolean;
            createreturnurl?: string;
            createcontinue?: boolean;
            createtoken?: string;
        }

        namespace CentralAuth {
            interface CreateLocalAccount extends Params {
                action: "createlocalaccount";
                username?: string;
                reason?: string;
                token?: string;
            }
        }

        interface CSPReport extends Params {
            action: "cspreport";
            reportonly?: boolean;
            source?: string;
        }

        namespace ContentTranslation.Action {
            interface ContentTranslationDelete extends Params {
                action: "cxdelete";
                from?: string;
                to?: string;
                sourcetitle?: string;
                token?: string;
            }
        }

        namespace ContentTranslation.Action {
            interface ContentTranslationPublish extends Params {
                action: "cxpublish";
                title?: string;
                html?: string;
                from?: string;
                to?: string;
                sourcetitle?: string;
                categories?: string;
                publishtags?: TypeOrArray<string>;
                wpCaptchaId?: string;
                wpCaptchaWord?: string;
                cxversion?: number;
                token?: string;
            }
        }

        namespace ContentTranslation.Action {
            interface SectionTranslationPublish extends Params {
                action: "cxpublishsection";
                title?: string;
                html?: string;
                sourcelanguage?: string;
                targetlanguage?: string;
                sourcetitle?: string;
                sourcerevid?: string;
                sourcesectiontitle?: string;
                targetsectiontitle?: string;
                sectiontranslationid?: number;
                issandbox?: boolean;
                captchaid?: string;
                captchaword?: string;
                token?: string;
            }
        }

        namespace ContentTranslation.Action {
            interface ContentTranslationSave extends Params {
                action: "cxsave";
                from?: string;
                to?: string;
                sourcetitle?: string;
                title?: string;
                content?: string;
                sourcerevision?: number;
                progress?: string;
                cxversion?: number;
                sourcecategories?: string;
                targetcategories?: string;
                token?: string;
            }
        }

        namespace ContentTranslation.Action {
            interface ContentTranslationSplit extends Params {
                action: "cxsplit";
                translationid?: number;
                token?: string;
            }
        }

        namespace ContentTranslation.Action {
            interface ContentTranslationSuggestionList extends Params {
                action: "cxsuggestionlist";
                listname?: string;
                listaction?: "add" | "remove" | "view";
                titles?: TypeOrArray<string>;
                from?: string;
                to?: string;
                token?: string;
            }
        }

        namespace ContentTranslation.Action {
            interface ContentTranslationToken extends Params {
                action: "cxtoken";
                token?: string;
            }
        }

        interface Delete extends Params {
            action: "delete";
            title?: string;
            pageid?: number;
            reason?: string;
            tags?: TypeOrArray<string>;
            deletetalk?: boolean;
            watch?: boolean;
            watchlist?: "nochange" | "preferences" | "unwatch" | "watch";
            watchlistexpiry?: string;
            unwatch?: boolean;
            oldimage?: string;
            token?: string;
        }

        namespace CentralAuth {
            interface DeleteGlobalAccount extends Params {
                action: "deleteglobalaccount";
                user?: string;
                reason?: string;
                token?: string;
            }
        }

        namespace DiscussionTools {
            interface DiscussionToolsCompare extends Params {
                action: "discussiontoolscompare";
                fromtitle?: string;
                fromrev?: number;
                totitle?: string;
                torev?: number;
            }
        }

        namespace DiscussionTools {
            interface DiscussionToolsEdit extends Params {
                action: "discussiontoolsedit";
                paction?: "addcomment" | "addtopic";
                autosubscribe?: "default" | "no" | "yes";
                page?: string;
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
                    | "cologneblue"
                    | "contenttranslation"
                    | "fallback"
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
                tags?: TypeOrArray<string>;
                returnto?: string;
                returntoquery?: string;
                returntoanchor?: string;
                mobileformat?: boolean;
            }
        }

        namespace DiscussionTools {
            interface DiscussionToolsFindComment extends Params {
                action: "discussiontoolsfindcomment";
                idorname?: string;
                heading?: string;
                page?: string;
            }
        }

        namespace DiscussionTools {
            interface DiscussionToolsGetSubscriptions extends Params {
                action: "discussiontoolsgetsubscriptions";
                commentname?: TypeOrArray<string>;
            }
        }

        namespace DiscussionTools {
            interface DiscussionToolsPageInfo extends Params {
                action: "discussiontoolspageinfo";
                page?: string;
                oldid?: number;
                prop?: TypeOrArray<"threaditemshtml" | "transcludedfrom">;
                excludesignatures?: boolean;
            }
        }

        namespace DiscussionTools {
            interface DiscussionToolsPreview extends Params {
                action: "discussiontoolspreview";
                type?: "reply" | "topic";
                page?: string;
                wikitext?: string;
                sectiontitle?: string;
                useskin?:
                    | "apioutput"
                    | "cologneblue"
                    | "contenttranslation"
                    | "fallback"
                    | "minerva"
                    | "modern"
                    | "monobook"
                    | "timeless"
                    | "vector"
                    | "vector-2022";
                mobileformat?: boolean;
            }
        }

        namespace DiscussionTools {
            interface DiscussionToolsSubscribe extends Params {
                action: "discussiontoolssubscribe";
                page?: string;
                token?: string;
                commentname?: string;
                subscribe?: boolean;
            }
        }

        namespace Notifications {
            interface EchoMarkRead extends Params {
                action: "echomarkread";
                wikis?: TypeOrArray<string>;
                list?: TypeOrArray<string>;
                unreadlist?: TypeOrArray<string>;
                all?: boolean;
                sections?: TypeOrArray<"alert" | "message">;
                token?: string;
            }
        }

        namespace Notifications {
            interface EchoMarkSeen extends Params {
                action: "echomarkseen";
                type?: "alert" | "all" | "message";
                timestampFormat?: "ISO_8601" | "MW";
            }
        }

        namespace Notifications {
            interface EchoMute extends Params {
                action: "echomute";
                type?: "page-linked-title" | "user";
                mute?: TypeOrArray<string>;
                unmute?: TypeOrArray<string>;
                token?: string;
            }
        }

        namespace Notifications.Push {
            interface EchoPushSubscriptions extends Params {
                action: "echopushsubscriptions";
                command?: "create" | "delete";
                token?: string;
            }
        }

        interface EditPage extends Params {
            action: "edit";
            title?: string;
            pageid?: number;
            section?: string;
            sectiontitle?: string;
            text?: string;
            summary?: string;
            tags?: TypeOrArray<string>;
            minor?: boolean;
            notminor?: boolean;
            bot?: boolean;
            baserevid?: number;
            basetimestamp?: string;
            starttimestamp?: string;
            recreate?: boolean;
            createonly?: boolean;
            nocreate?: boolean;
            watch?: boolean;
            unwatch?: boolean;
            watchlist?: "nochange" | "preferences" | "unwatch" | "watch";
            watchlistexpiry?: string;
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
                | "flow-board"
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

        namespace VisualEditor.EditCheck {
            interface EditCheckReferenceUrl extends Params {
                action: "editcheckreferenceurl";
                url?: string;
            }
        }

        namespace MassMessage {
            interface EditMassMessageList extends Params {
                action: "editmassmessagelist";
                spamlist?: string;
                description?: string;
                add?: TypeOrArray<string>;
                remove?: TypeOrArray<string>;
                minor?: boolean;
                watchlist?: "nochange" | "preferences" | "unwatch" | "watch";
                token?: string;
            }
        }

        interface EmailUser extends Params {
            action: "emailuser";
            target?: string;
            subject?: string;
            text?: string;
            ccme?: boolean;
            token?: string;
        }

        interface ExpandTemplates extends Params {
            action: "expandtemplates";
            title?: string;
            text?: string;
            revid?: number;
            prop?: TypeOrArray<
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
            generatexml?: boolean;
            templatesandboxprefix?: TypeOrArray<string>;
            templatesandboxtitle?: string;
            templatesandboxtext?: string;
            templatesandboxcontentmodel?:
                | "GadgetDefinition"
                | "JsonSchema"
                | "MassMessageListContent"
                | "Scribunto"
                | "SecurePoll"
                | "css"
                | "flow-board"
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

        namespace ConfirmEdit.FancyCaptcha {
            interface FancyCaptchaReload extends Params {
                action: "fancycaptchareload";
            }
        }

        interface FeaturedFeeds extends Params {
            action: "featuredfeed";
            feedformat?: "atom" | "rss";
            feed?: "featured" | "potd" | "raw" | "wikimag";
            language?: string;
        }

        interface FeedContributions extends Params {
            action: "feedcontributions";
            feedformat?: "atom" | "rss";
            user?: string;
            namespace?: number;
            year?: number;
            month?: number;
            tagfilter?: TypeOrArray<string>;
            deletedonly?: boolean;
            toponly?: boolean;
            newonly?: boolean;
            hideminor?: boolean;
            showsizediff?: boolean;
        }

        interface FeedRecentChanges extends Params {
            action: "feedrecentchanges";
            feedformat?: "atom" | "rss";
            namespace?: number;
            invert?: boolean;
            associated?: boolean;
            days?: number;
            limit?: number;
            from?: string;
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

        interface FeedWatchlist extends Params {
            action: "feedwatchlist";
            feedformat?: "atom" | "rss";
            hours?: number;
            linktosections?: boolean;
            allrev?: boolean;
            wlowner?: string;
            wltoken?: string;
            wlshow?: TypeOrArray<
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
            wltype?: TypeOrArray<"categorize" | "edit" | "external" | "log" | "new">;
            wlexcludeuser?: string;
        }

        interface FileRevert extends Params {
            action: "filerevert";
            filename?: string;
            comment?: string;
            archivename?: string;
            token?: string;
        }

        interface Flow extends Params {
            action: "flow";
            submodule?:
                | "edit-header"
                | "edit-post"
                | "edit-title"
                | "edit-topic-summary"
                | "lock-topic"
                | "moderate-post"
                | "moderate-topic"
                | "new-topic"
                | "reply"
                | "undo-edit-header"
                | "undo-edit-post"
                | "undo-edit-topic-summary"
                | "view-header"
                | "view-post"
                | "view-post-history"
                | "view-topic"
                | "view-topic-history"
                | "view-topic-summary"
                | "view-topiclist"
                | "close-open-topic";
            page?: string;
            token?: string;
        }

        namespace Flow {
            interface ParsoidUtilsFlow extends Params {
                action: "flow-parsoid-utils";
                from?: "html" | "wikitext";
                to?: "html" | "wikitext";
                content?: string;
                title?: string;
                pageid?: number;
            }
        }

        namespace Thanks {
            interface FlowThank extends Params {
                action: "flowthank";
                postid?: string;
                token?: string;
            }
        }

        namespace GlobalBlocking {
            interface GlobalBlock extends Params {
                action: "globalblock";
                target?: string;
                expiry?: string;
                unblock?: boolean;
                reason?: string;
                anononly?: boolean;
                modify?: boolean;
                alsolocal?: boolean;
                localblockstalk?: boolean;
                localblocksemail?: boolean;
                localanononly?: boolean;
                token?: string;
            }
        }

        namespace GlobalPreferences {
            interface GlobalPreferenceOverrides extends Params {
                action: "globalpreferenceoverrides";
                reset?: boolean;
                resetkinds?: TypeOrArray<
                    | "all"
                    | "registered"
                    | "registered-checkmatrix"
                    | "registered-multiselect"
                    | "special"
                    | "unused"
                    | "userjs"
                >;
                change?: TypeOrArray<string>;
                optionname?: string;
                optionvalue?: string;
                token?: string;
            }
        }

        interface GlobalPreferences extends Params {
            action: "globalpreferences";
            reset?: boolean;
            resetkinds?: TypeOrArray<
                | "all"
                | "registered"
                | "registered-checkmatrix"
                | "registered-multiselect"
                | "special"
                | "unused"
                | "userjs"
            >;
            change?: TypeOrArray<string>;
            optionname?: string;
            optionvalue?: string;
            token?: string;
        }

        namespace CentralAuth {
            interface GlobalUserRights extends Params {
                action: "globaluserrights";
                user?: string;
                userid?: number;
                add?: TypeOrArray<
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
                expiry?: TypeOrArray<string>;
                remove?: TypeOrArray<
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
                tags?: TypeOrArray<string>;
            }
        }

        namespace GrowthExperiments {
            interface InvalidateImageRecommendation extends Params {
                action: "growthinvalidateimagerecommendation";
                tasktype?: "image-recommendation" | "section-image-recommendation";
                title?: string;
                filename?: string;
                sectiontitle?: string;
                sectionnumber?: number;
                token?: string;
            }
        }

        namespace GrowthExperiments {
            interface InvalidatePersonalizedPraiseSuggestion extends Params {
                action: "growthinvalidatepersonalizedpraisesuggestion";
                mentee?: string;
                reason?: "praised" | "skipped";
                skipreason?: "already-praised" | "not-now" | "not-praiseworthy" | "other";
                token?: string;
            }
        }

        namespace GrowthExperiments {
            interface ManageMentorList extends Params {
                action: "growthmanagementorlist";
                geaction?: "add" | "change" | "remove";
                message?: string;
                weight?: "0" | "1" | "2" | "4";
                isaway?: boolean;
                awaytimestamp?: string;
                summary?: string;
                username?: string;
                token?: string;
            }
        }

        namespace GrowthExperiments {
            interface MentorDashboardUpdateData extends Params {
                action: "growthmentordashboardupdatedata";
                token?: string;
            }
        }

        namespace GrowthExperiments {
            interface SetMenteeStatus extends Params {
                action: "growthsetmenteestatus";
                state?: "disabled" | "enabled" | "optout";
                token?: string;
            }
        }

        namespace GrowthExperiments {
            interface SetMentor extends Params {
                action: "growthsetmentor";
                mentee?: string;
                mentor?: string;
                reason?: string;
                token?: string;
            }
        }

        namespace GrowthExperiments {
            interface StarMentee extends Params {
                action: "growthstarmentee";
                gesaction?: "star" | "unstar";
                gesmentee?: string;
                token?: string;
            }
        }

        interface Help extends Params {
            action: "help";
            modules?: TypeOrArray<string>;
            submodules?: boolean;
            recursivesubmodules?: boolean;
            wrap?: boolean;
            toc?: boolean;
        }

        namespace GrowthExperiments {
            interface HelpPanelPostQuestion extends Params {
                action: "helppanelquestionposter";
                body?: string;
                source?:
                    | "helpdesk"
                    | "helppanel"
                    | "homepage-mentorship"
                    | "mentor-helppanel"
                    | "mentor-homepage";
                relevanttitle?: string;
                token?: string;
            }
        }

        namespace GrowthExperiments {
            interface QuestionStore extends Params {
                action: "homepagequestionstore";
                storage?:
                    | "growthexperiments-helppanel-questions"
                    | "growthexperiments-mentor-questions";
            }
        }

        interface Disabled extends Params {
            action: "imagerotate";
        }

        interface Import extends Params {
            action: "import";
            summary?: string;
            xml?: File;
            interwikiprefix?: string;
            interwikisource?:
                | "af"
                | "ang"
                | "ar"
                | "ast"
                | "bg"
                | "br"
                | "ca"
                | "co"
                | "commons"
                | "cs"
                | "csb"
                | "da"
                | "de"
                | "el"
                | "en"
                | "eo"
                | "es"
                | "et"
                | "fa"
                | "fi"
                | "fy"
                | "ga"
                | "gl"
                | "gn"
                | "gu"
                | "he"
                | "hi"
                | "hr"
                | "hsb"
                | "hu"
                | "hy"
                | "ia"
                | "id"
                | "ie"
                | "io"
                | "is"
                | "it"
                | "ja"
                | "kk"
                | "ko"
                | "ku"
                | "la"
                | "li"
                | "lo"
                | "lt"
                | "meta"
                | "ml"
                | "n"
                | "nds"
                | "nl"
                | "no"
                | "oc"
                | "pl"
                | "pt"
                | "q"
                | "ro"
                | "ru"
                | "s"
                | "scn"
                | "simple"
                | "sk"
                | "sl"
                | "species"
                | "sq"
                | "sr"
                | "st"
                | "sv"
                | "sw"
                | "ta"
                | "te"
                | "th"
                | "tr"
                | "tt"
                | "uk"
                | "ur"
                | "v"
                | "vi"
                | "vo"
                | "w"
                | "wikt"
                | "zh"
                | "zhminnan";
            interwikipage?: string;
            fullhistory?: boolean;
            templates?: boolean;
            namespace?: number;
            assignknownusers?: boolean;
            rootpage?: string;
            tags?: TypeOrArray<string>;
            token?: string;
        }

        namespace Format {
            interface Json extends Params {
                format: "json";
                callback?: string;
                utf8?: boolean;
                ascii?: boolean;
                formatversion?: "1" | "2" | "latest";
            }
        }

        namespace JsonConfig {
            interface JC extends Params {
                action: "jsonconfig";
                command?: "reload" | "reset" | "status";
                namespace?: number;
                title?: string;
                content?: string;
            }
        }

        namespace JsonConfig {
            interface JCData extends Params {
                action: "jsondata";
                title?: string;
            }
        }

        namespace Format {
            interface JsonFM extends Params {
                format: "jsonfm";
                wrappedhtml?: boolean;
                callback?: string;
                utf8?: boolean;
                ascii?: boolean;
                formatversion?: "1" | "2" | "latest";
            }
        }

        namespace UniversalLanguageSelector {
            interface LanguageSearch extends Params {
                action: "languagesearch";
                search?: string;
                typos?: number;
            }
        }

        interface LinkAccount extends Params {
            action: "linkaccount";
            linkrequests?: TypeOrArray<string>;
            linkmessageformat?: "html" | "none" | "raw" | "wikitext";
            linkmergerequestfields?: boolean;
            linkreturnurl?: string;
            linkcontinue?: boolean;
            linktoken?: string;
        }

        interface Login extends Params {
            action: "login";
            lgname?: string;
            lgpassword?: string;
            lgdomain?: string;
            lgtoken?: string;
        }

        interface Logout extends Params {
            action: "logout";
            token?: string;
        }

        interface ManageTags extends Params {
            action: "managetags";
            operation?: "activate" | "create" | "deactivate" | "delete";
            tag?: string;
            reason?: string;
            ignorewarnings?: boolean;
            tags?: TypeOrArray<string>;
            token?: string;
        }

        interface MassMessage extends Params {
            "action": "massmessage";
            "spamlist"?: string;
            "subject"?: string;
            "message"?: string;
            "page-message"?: string;
            "token"?: string;
        }

        interface MergeHistory extends Params {
            action: "mergehistory";
            from?: string;
            fromid?: number;
            to?: string;
            toid?: number;
            timestamp?: string;
            reason?: string;
            token?: string;
        }

        interface Move extends Params {
            action: "move";
            from?: string;
            fromid?: number;
            to?: string;
            reason?: string;
            movetalk?: boolean;
            movesubpages?: boolean;
            noredirect?: boolean;
            watchlist?: "nochange" | "preferences" | "unwatch" | "watch";
            watchlistexpiry?: string;
            ignorewarnings?: boolean;
            tags?: TypeOrArray<string>;
            token?: string;
        }

        namespace Format {
            interface None extends Params {
                format: "none";
            }
        }

        namespace OATHAuth {
            interface OATHValidate extends Params {
                action: "oathvalidate";
                user?: string;
                data?: string;
                token?: string;
            }
        }

        interface OpenSearch extends Params {
            action: "opensearch";
            search?: string;
            namespace?: TypeOrArray<number>;
            limit?: Limit;
            profile?:
                | "classic"
                | "engine_autoselect"
                | "fast-fuzzy"
                | "fuzzy"
                | "normal"
                | "strict";
            suggest?: boolean;
            redirects?: "resolve" | "return";
            format?: "json" | "jsonfm" | "xml" | "xmlfm";
            warningsaserror?: boolean;
        }

        interface Options extends Params {
            action: "options";
            reset?: boolean;
            resetkinds?: TypeOrArray<
                | "all"
                | "registered"
                | "registered-checkmatrix"
                | "registered-multiselect"
                | "special"
                | "unused"
                | "userjs"
            >;
            change?: TypeOrArray<string>;
            optionname?: string;
            optionvalue?: string;
            token?: string;
        }

        interface ParamInfo extends Params {
            action: "paraminfo";
            modules?: TypeOrArray<string>;
            helpformat?: "html" | "none" | "raw" | "wikitext";
            querymodules?: TypeOrArray<
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
                | "flowinfo"
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
            mainmodule?: string;
            pagesetmodule?: string;
            formatmodules?: TypeOrArray<
                "json" | "jsonfm" | "none" | "php" | "phpfm" | "rawfm" | "xml" | "xmlfm"
            >;
        }

        interface Parse extends Params {
            action: "parse";
            title?: string;
            text?: string;
            revid?: number;
            summary?: string;
            page?: string;
            pageid?: number;
            redirects?: boolean;
            oldid?: number;
            prop?: TypeOrArray<
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
            parsoid?: boolean;
            pst?: boolean;
            onlypst?: boolean;
            effectivelanglinks?: boolean;
            section?: string;
            sectiontitle?: string;
            disablepp?: boolean;
            disablelimitreport?: boolean;
            disableeditsection?: boolean;
            disablestylededuplication?: boolean;
            showstrategykeys?: boolean;
            generatexml?: boolean;
            preview?: boolean;
            sectionpreview?: boolean;
            disabletoc?: boolean;
            useskin?:
                | "apioutput"
                | "cologneblue"
                | "contenttranslation"
                | "fallback"
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
                | "flow-board"
                | "javascript"
                | "json"
                | "sanitized-css"
                | "text"
                | "unknown"
                | "wikitext";
            mobileformat?: boolean;
            templatesandboxprefix?: TypeOrArray<string>;
            templatesandboxtitle?: string;
            templatesandboxtext?: string;
            templatesandboxcontentmodel?:
                | "GadgetDefinition"
                | "JsonSchema"
                | "MassMessageListContent"
                | "Scribunto"
                | "SecurePoll"
                | "css"
                | "flow-board"
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

        interface ParserMigration extends Params {
            action: "parser-migration";
            title?: string;
            config?: TypeOrArray<"new" | "old">;
            redirect?: string;
        }

        interface Patrol extends Params {
            action: "patrol";
            rcid?: number;
            revid?: number;
            tags?: TypeOrArray<string>;
            token?: string;
        }

        namespace Format {
            interface Php extends Params {
                format: "php";
                formatversion?: "1" | "2" | "latest";
            }
        }

        namespace Format {
            interface PhpFM extends Params {
                format: "phpfm";
                wrappedhtml?: boolean;
                formatversion?: "1" | "2" | "latest";
            }
        }

        interface Protect extends Params {
            action: "protect";
            title?: string;
            pageid?: number;
            protections?: TypeOrArray<string>;
            expiry?: TypeOrArray<string>;
            reason?: string;
            tags?: TypeOrArray<string>;
            cascade?: boolean;
            watch?: boolean;
            watchlist?: "nochange" | "preferences" | "unwatch" | "watch";
            watchlistexpiry?: string;
            token?: string;
        }

        interface Purge extends Params {
            action: "purge";
            forcelinkupdate?: boolean;
            forcerecursivelinkupdate?: boolean;
            continue?: string;
            titles?: TypeOrArray<string>;
            pageids?: TypeOrArray<number>;
            revids?: TypeOrArray<number>;
            generator?:
                | "allcategories"
                | "alldeletedrevisions"
                | "allfileusages"
                | "allimages"
                | "alllinks"
                | "allpages"
                | "allredirects"
                | "allrevisions"
                | "alltransclusions"
                | "backlinks"
                | "categories"
                | "categorymembers"
                | "contenttranslation"
                | "contenttranslationsuggestions"
                | "deletedrevisions"
                | "duplicatefiles"
                | "embeddedin"
                | "exturlusage"
                | "fileusage"
                | "geosearch"
                | "images"
                | "imageusage"
                | "iwbacklinks"
                | "langbacklinks"
                | "links"
                | "linkshere"
                | "mostviewed"
                | "pageswithprop"
                | "prefixsearch"
                | "projectpages"
                | "protectedtitles"
                | "querypage"
                | "random"
                | "recentchanges"
                | "redirects"
                | "revisions"
                | "search"
                | "templates"
                | "transcludedin"
                | "watchlist"
                | "watchlistraw"
                | "wblistentityusage"
                | "growthtasks"
                | "readinglistentries";
            redirects?: boolean;
            converttitles?: boolean;
        }

        interface Query extends Params {
            action: "query";
            prop?: TypeOrArray<
                | "categories"
                | "categoryinfo"
                | "cirrusbuilddoc"
                | "cirruscompsuggestbuilddoc"
                | "cirrusdoc"
                | "contributors"
                | "coordinates"
                | "deletedrevisions"
                | "duplicatefiles"
                | "extlinks"
                | "extracts"
                | "fileusage"
                | "globalusage"
                | "growthimagesuggestiondata"
                | "imageinfo"
                | "images"
                | "info"
                | "iwlinks"
                | "langlinks"
                | "langlinkscount"
                | "links"
                | "linkshere"
                | "mmcontent"
                | "pageassessments"
                | "pageimages"
                | "pageprops"
                | "pageterms"
                | "pageviews"
                | "redirects"
                | "revisions"
                | "stashimageinfo"
                | "templates"
                | "transcludedin"
                | "transcodestatus"
                | "videoinfo"
                | "wbentityusage"
                | "flowinfo"
                | "description"
                | "mapdata"
            >;
            list?: TypeOrArray<
                | "abusefilters"
                | "abuselog"
                | "allcategories"
                | "alldeletedrevisions"
                | "allfileusages"
                | "allimages"
                | "alllinks"
                | "allpages"
                | "allredirects"
                | "allrevisions"
                | "alltransclusions"
                | "allusers"
                | "backlinks"
                | "betafeatures"
                | "blocks"
                | "categorymembers"
                | "centralnoticeactivecampaigns"
                | "centralnoticelogs"
                | "checkuser"
                | "checkuserlog"
                | "contenttranslation"
                | "contenttranslationcorpora"
                | "contenttranslationlangtrend"
                | "contenttranslationstats"
                | "contenttranslationsuggestions"
                | "cxpublishedtranslations"
                | "cxtranslatorstats"
                | "embeddedin"
                | "exturlusage"
                | "filearchive"
                | "gadgetcategories"
                | "gadgets"
                | "geosearch"
                | "globalallusers"
                | "globalblocks"
                | "globalgroups"
                | "growthmentorlist"
                | "growthmentormentee"
                | "growthstarredmentees"
                | "imageusage"
                | "iwbacklinks"
                | "langbacklinks"
                | "linterrors"
                | "logevents"
                | "mostviewed"
                | "mystashedfiles"
                | "pagepropnames"
                | "pageswithprop"
                | "prefixsearch"
                | "projectpages"
                | "projects"
                | "protectedtitles"
                | "querypage"
                | "random"
                | "recentchanges"
                | "search"
                | "tags"
                | "usercontribs"
                | "users"
                | "watchlist"
                | "watchlistraw"
                | "wblistentityusage"
                | "wikisets"
                | "deletedrevs"
                | "growthtasks"
                | "readinglistentries"
            >;
            meta?: TypeOrArray<
                | "allmessages"
                | "authmanagerinfo"
                | "babel"
                | "featureusage"
                | "filerepoinfo"
                | "globalpreferences"
                | "globalrenamestatus"
                | "globaluserinfo"
                | "growthmenteestatus"
                | "growthmentorstatus"
                | "languageinfo"
                | "linterstats"
                | "notifications"
                | "ores"
                | "siteinfo"
                | "siteviews"
                | "tokens"
                | "unreadnotificationpages"
                | "userinfo"
                | "wikibase"
                | "cxdeletedtranslations"
                | "growthnextsuggestedtasktype"
                | "oath"
                | "readinglists"
            >;
            indexpageids?: boolean;
            export?: boolean;
            exportnowrap?: boolean;
            exportschema?: "0.10" | "0.11";
            iwurl?: boolean;
            continue?: string;
            rawcontinue?: boolean;
            titles?: TypeOrArray<string>;
            pageids?: TypeOrArray<number>;
            revids?: TypeOrArray<number>;
            generator?:
                | "allcategories"
                | "alldeletedrevisions"
                | "allfileusages"
                | "allimages"
                | "alllinks"
                | "allpages"
                | "allredirects"
                | "allrevisions"
                | "alltransclusions"
                | "backlinks"
                | "categories"
                | "categorymembers"
                | "contenttranslation"
                | "contenttranslationsuggestions"
                | "deletedrevisions"
                | "duplicatefiles"
                | "embeddedin"
                | "exturlusage"
                | "fileusage"
                | "geosearch"
                | "images"
                | "imageusage"
                | "iwbacklinks"
                | "langbacklinks"
                | "links"
                | "linkshere"
                | "mostviewed"
                | "pageswithprop"
                | "prefixsearch"
                | "projectpages"
                | "protectedtitles"
                | "querypage"
                | "random"
                | "recentchanges"
                | "redirects"
                | "revisions"
                | "search"
                | "templates"
                | "transcludedin"
                | "watchlist"
                | "watchlistraw"
                | "wblistentityusage"
                | "growthtasks"
                | "readinglistentries";
            redirects?: boolean;
            converttitles?: boolean;
        }

        namespace Format {
            interface RawFM extends Params {
                format: "rawfm";
                wrappedhtml?: boolean;
            }
        }

        interface ReadingLists extends Params {
            action: "readinglists";
            command?:
                | "create"
                | "createentry"
                | "delete"
                | "deleteentry"
                | "setup"
                | "teardown"
                | "update";
            token?: string;
        }

        interface RemoveAuthenticationData extends Params {
            action: "removeauthenticationdata";
            request?: string;
            token?: string;
        }

        interface ResetPassword extends Params {
            action: "resetpassword";
            user?: string;
            email?: string;
            token?: string;
        }

        interface RevisionDelete extends Params {
            action: "revisiondelete";
            type?: "archive" | "filearchive" | "logging" | "oldimage" | "revision";
            target?: string;
            ids?: TypeOrArray<string>;
            hide?: TypeOrArray<"comment" | "content" | "user">;
            show?: TypeOrArray<"comment" | "content" | "user">;
            suppress?: "no" | "nochange" | "yes";
            reason?: string;
            tags?: TypeOrArray<string>;
            token?: string;
        }

        interface Rollback extends Params {
            action: "rollback";
            title?: string;
            pageid?: number;
            tags?: TypeOrArray<string>;
            user?: string;
            summary?: string;
            markbot?: boolean;
            watchlist?: "nochange" | "preferences" | "unwatch" | "watch";
            watchlistexpiry?: string;
            token?: string;
        }

        interface Rsd extends Params {
            action: "rsd";
        }

        namespace Kartographer {
            interface SanitizeMapData extends Params {
                action: "sanitize-mapdata";
                title?: string;
                text?: string;
            }
        }

        namespace Scribunto {
            interface ScribuntoConsole extends Params {
                action: "scribunto-console";
                title?: string;
                content?: string;
                session?: number;
                question?: string;
                clear?: boolean;
                token?: string;
            }
        }

        namespace SecurePoll {
            interface SecurePollAuth extends Params {
                action: "securepollauth";
                token?: string;
                id?: number;
            }
        }

        namespace CentralAuth {
            interface SetGlobalAccountStatus extends Params {
                action: "setglobalaccountstatus";
                user?: string;
                locked?: "" | "lock" | "unlock";
                hidden?: "" | "lists" | "suppressed";
                reason?: string;
                statecheck?: string;
                token?: string;
            }
        }

        interface SetNotificationTimestamp extends Params {
            action: "setnotificationtimestamp";
            entirewatchlist?: boolean;
            timestamp?: string;
            torevid?: number;
            newerthanrevid?: number;
            continue?: string;
            titles?: TypeOrArray<string>;
            pageids?: TypeOrArray<number>;
            revids?: TypeOrArray<number>;
            generator?:
                | "allcategories"
                | "alldeletedrevisions"
                | "allfileusages"
                | "allimages"
                | "alllinks"
                | "allpages"
                | "allredirects"
                | "allrevisions"
                | "alltransclusions"
                | "backlinks"
                | "categories"
                | "categorymembers"
                | "contenttranslation"
                | "contenttranslationsuggestions"
                | "deletedrevisions"
                | "duplicatefiles"
                | "embeddedin"
                | "exturlusage"
                | "fileusage"
                | "geosearch"
                | "images"
                | "imageusage"
                | "iwbacklinks"
                | "langbacklinks"
                | "links"
                | "linkshere"
                | "mostviewed"
                | "pageswithprop"
                | "prefixsearch"
                | "projectpages"
                | "protectedtitles"
                | "querypage"
                | "random"
                | "recentchanges"
                | "redirects"
                | "revisions"
                | "search"
                | "templates"
                | "transcludedin"
                | "watchlist"
                | "watchlistraw"
                | "wblistentityusage"
                | "growthtasks"
                | "readinglistentries";
            redirects?: boolean;
            converttitles?: boolean;
            token?: string;
        }

        interface SetPageLanguage extends Params {
            action: "setpagelanguage";
            title?: string;
            pageid?: number;
            lang?:
                | "aae"
                | "ab"
                | "abs"
                | "ace"
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
                | "mwl"
                | "my"
                | "myv"
                | "mzn"
                | "na"
                | "nah"
                | "nan"
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
                | "nrm"
                | "nso"
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
            tags?: TypeOrArray<string>;
            token?: string;
        }

        namespace UrlShortener {
            interface ShortenUrl extends Params {
                action: "shortenurl";
                url?: string;
                qrcode?: boolean;
            }
        }

        interface SiteMatrix extends Params {
            action: "sitematrix";
            smtype?: TypeOrArray<"language" | "special">;
            smstate?: TypeOrArray<"all" | "closed" | "fishbowl" | "nonglobal" | "private">;
            smlangprop?: TypeOrArray<"code" | "dir" | "localname" | "name" | "site">;
            smsiteprop?: TypeOrArray<"code" | "dbname" | "lang" | "sitename" | "url">;
            smlimit?: Limit;
            smcontinue?: string;
        }

        interface SpamBlacklist extends Params {
            action: "spamblacklist";
            url?: TypeOrArray<string>;
        }

        interface StashEdit extends Params {
            action: "stashedit";
            title?: string;
            section?: string;
            sectiontitle?: string;
            text?: string;
            stashedtexthash?: string;
            summary?: string;
            contentmodel?:
                | "GadgetDefinition"
                | "JsonSchema"
                | "MassMessageListContent"
                | "Scribunto"
                | "SecurePoll"
                | "css"
                | "flow-board"
                | "javascript"
                | "json"
                | "sanitized-css"
                | "text"
                | "unknown"
                | "wikitext";
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
            baserevid?: number;
            token?: string;
        }

        namespace EventStreamConfig {
            interface StreamConfigs extends Params {
                action: "streamconfigs";
                streams?: TypeOrArray<string>;
                constraints?: TypeOrArray<string>;
                all_settings?: boolean;
            }
        }

        namespace SecurePoll {
            interface StrikeVote extends Params {
                action: "strikevote";
                option?: "strike" | "unstrike";
                reason?: string;
                voteid?: number;
                token?: string;
            }
        }

        namespace ContentTranslation.Action {
            interface SectionTranslationDelete extends Params {
                action: "sxdelete";
                sectiontranslationid?: number;
                translationid?: number;
                sectionid?: string;
                token?: string;
            }
        }

        namespace ContentTranslation.Action {
            interface SectionTranslationSave extends Params {
                action: "sxsave";
                sourcelanguage?: string;
                targetlanguage?: string;
                sourcetitle?: string;
                targettitle?: string;
                content?: string;
                sourcerevision?: number;
                sourcesectiontitle?: string;
                targetsectiontitle?: string;
                sectionid?: string;
                issandbox?: boolean;
                progress?: string;
                token?: string;
            }
        }

        interface Tag extends Params {
            action: "tag";
            rcid?: TypeOrArray<number>;
            revid?: TypeOrArray<number>;
            logid?: TypeOrArray<number>;
            add?: TypeOrArray<
                | "0xBlockMessage"
                | "AWB"
                | "Adiutor"
                | "BandeauxCategories"
                | "BandeauxEbauches"
                | "BandeauxPortails"
                | "C-helper"
                | "CopyvioIP"
                | "HotCats"
                | "LiveRC"
                | "PaStec"
                | "PaletteDeluxe"
                | "ProveIt"
                | "PublierBrouillon"
                | "RenommageCategorie"
                | "Test balise"
                | "WPCleaner"
                | "delete"
                | "huggle"
                | "paidedits"
                | "retrait bandeau maintenance"
                | "spamblock"
                | "wikimooc2017"
                | "wmrc"
            >;
            remove?: TypeOrArray<string>;
            reason?: string;
            tags?: TypeOrArray<string>;
            token?: string;
        }

        interface TemplateData extends Params {
            action: "templatedata";
            includeMissingTitles?: boolean;
            doNotIgnoreMissingTitles?: boolean;
            lang?: string;
            titles?: TypeOrArray<string>;
            pageids?: TypeOrArray<number>;
            revids?: TypeOrArray<number>;
            generator?:
                | "allcategories"
                | "alldeletedrevisions"
                | "allfileusages"
                | "allimages"
                | "alllinks"
                | "allpages"
                | "allredirects"
                | "allrevisions"
                | "alltransclusions"
                | "backlinks"
                | "categories"
                | "categorymembers"
                | "contenttranslation"
                | "contenttranslationsuggestions"
                | "deletedrevisions"
                | "duplicatefiles"
                | "embeddedin"
                | "exturlusage"
                | "fileusage"
                | "geosearch"
                | "images"
                | "imageusage"
                | "iwbacklinks"
                | "langbacklinks"
                | "links"
                | "linkshere"
                | "mostviewed"
                | "pageswithprop"
                | "prefixsearch"
                | "projectpages"
                | "protectedtitles"
                | "querypage"
                | "random"
                | "recentchanges"
                | "redirects"
                | "revisions"
                | "search"
                | "templates"
                | "transcludedin"
                | "watchlist"
                | "watchlistraw"
                | "wblistentityusage"
                | "growthtasks"
                | "readinglistentries";
            redirects?: boolean;
            converttitles?: boolean;
        }

        namespace Thanks {
            interface CoreThank extends Params {
                action: "thank";
                rev?: number;
                log?: number;
                token?: string;
                source?: string;
            }
        }

        namespace TimedMediaHandler {
            interface TimedText extends Params {
                action: "timedtext";
                title?: string;
                pageid?: number;
                trackformat?: "srt" | "vtt";
                lang?: string;
            }
        }

        interface TitleBlacklist extends Params {
            action: "titleblacklist";
            tbtitle?: string;
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
            action: "torblock";
            ip?: string;
        }

        namespace TimedMediaHandler {
            interface TranscodeReset extends Params {
                action: "transcodereset";
                title?: string;
                transcodekey?: string;
                token?: string;
            }
        }

        namespace UniversalLanguageSelector {
            interface ULSLocalization extends Params {
                action: "ulslocalization";
                language?: string;
            }
        }

        namespace UniversalLanguageSelector {
            interface ULSSetLanguage extends Params {
                action: "ulssetlang";
                languagecode?: string;
                token?: string;
            }
        }

        interface Unblock extends Params {
            action: "unblock";
            id?: number;
            user?: string;
            userid?: number;
            reason?: string;
            tags?: TypeOrArray<string>;
            watchuser?: boolean;
            watchlistexpiry?: string;
            token?: string;
        }

        interface Undelete extends Params {
            action: "undelete";
            title?: string;
            reason?: string;
            tags?: TypeOrArray<string>;
            timestamps?: TypeOrArray<string>;
            fileids?: TypeOrArray<number>;
            undeletetalk?: boolean;
            watchlist?: "nochange" | "preferences" | "unwatch" | "watch";
            watchlistexpiry?: string;
            token?: string;
        }

        interface UnlinkAccount extends Params {
            action: "unlinkaccount";
            request?: string;
            token?: string;
        }

        interface Upload extends Params {
            action: "upload";
            filename?: string;
            comment?: string;
            tags?: TypeOrArray<string>;
            text?: string;
            watch?: boolean;
            watchlist?: "nochange" | "preferences" | "watch";
            watchlistexpiry?: string;
            ignorewarnings?: boolean;
            file?: File;
            url?: string;
            filekey?: string;
            sessionkey?: string;
            stash?: boolean;
            filesize?: number;
            offset?: number;
            chunk?: File;
            async?: boolean;
            checkstatus?: boolean;
            token?: string;
        }

        interface Userrights extends Params {
            action: "userrights";
            user?: string;
            userid?: number;
            add?: TypeOrArray<
                | "abusefilter"
                | "accountcreator"
                | "bot"
                | "bureaucrat"
                | "checkuser"
                | "confirmed"
                | "flow-bot"
                | "import"
                | "interface-admin"
                | "ipblock-exempt"
                | "no-ipinfo"
                | "rollbacker"
                | "steward"
                | "suppress"
                | "sysop"
                | "transwiki"
            >;
            expiry?: TypeOrArray<string>;
            remove?: TypeOrArray<
                | "abusefilter"
                | "accountcreator"
                | "bot"
                | "bureaucrat"
                | "checkuser"
                | "confirmed"
                | "flow-bot"
                | "import"
                | "interface-admin"
                | "ipblock-exempt"
                | "no-ipinfo"
                | "rollbacker"
                | "steward"
                | "suppress"
                | "sysop"
                | "transwiki"
            >;
            reason?: string;
            token?: string;
            tags?: TypeOrArray<string>;
            watchuser?: boolean;
            watchlistexpiry?: string;
        }

        interface ValidatePassword extends Params {
            action: "validatepassword";
            password?: string;
            user?: string;
            email?: string;
            realname?: string;
        }

        interface VisualEditor extends Params {
            action: "visualeditor";
            page?: string;
            badetag?: string;
            format?: "json" | "jsonfm";
            paction?: "metadata" | "parse" | "parsefragment" | "templatesused" | "wikitext";
            wikitext?: string;
            section?: string;
            stash?: boolean;
            oldid?: number;
            editintro?: string;
            pst?: boolean;
            preload?: string;
            preloadparams?: TypeOrArray<string>;
        }

        namespace VisualEditor {
            interface VisualEditorEdit extends Params {
                action: "visualeditoredit";
                paction?: "diff" | "save" | "serialize" | "serializeforcache";
                page?: string;
                token?: string;
                wikitext?: string;
                section?: string;
                sectiontitle?: string;
                basetimestamp?: string;
                starttimestamp?: string;
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
                    | "cologneblue"
                    | "contenttranslation"
                    | "fallback"
                    | "minerva"
                    | "modern"
                    | "monobook"
                    | "timeless"
                    | "vector"
                    | "vector-2022";
                tags?: TypeOrArray<string>;
                plugins?: TypeOrArray<string>;
                mobileformat?: boolean;
            }
        }

        interface Watch extends Params {
            action: "watch";
            title?: string;
            expiry?: string;
            unwatch?: boolean;
            continue?: string;
            titles?: TypeOrArray<string>;
            pageids?: TypeOrArray<number>;
            revids?: TypeOrArray<number>;
            generator?:
                | "allcategories"
                | "alldeletedrevisions"
                | "allfileusages"
                | "allimages"
                | "alllinks"
                | "allpages"
                | "allredirects"
                | "allrevisions"
                | "alltransclusions"
                | "backlinks"
                | "categories"
                | "categorymembers"
                | "contenttranslation"
                | "contenttranslationsuggestions"
                | "deletedrevisions"
                | "duplicatefiles"
                | "embeddedin"
                | "exturlusage"
                | "fileusage"
                | "geosearch"
                | "images"
                | "imageusage"
                | "iwbacklinks"
                | "langbacklinks"
                | "links"
                | "linkshere"
                | "mostviewed"
                | "pageswithprop"
                | "prefixsearch"
                | "projectpages"
                | "protectedtitles"
                | "querypage"
                | "random"
                | "recentchanges"
                | "redirects"
                | "revisions"
                | "search"
                | "templates"
                | "transcludedin"
                | "watchlist"
                | "watchlistraw"
                | "wblistentityusage"
                | "growthtasks"
                | "readinglistentries";
            redirects?: boolean;
            converttitles?: boolean;
            token?: string;
        }

        namespace MobileFrontend {
            interface WebappManifest extends Params {
                action: "webapp-manifest";
            }
        }

        interface WebAuthn extends Params {
            action: "webauthn";
            func?: "getAuthInfo" | "getRegisterInfo";
        }

        namespace WikimediaEvents {
            interface WikimediaEventsBlockedEdit extends Params {
                action: "wikimediaeventsblockededit";
                page?: string;
                interface?:
                    | "discussiontools"
                    | "mobilefrontend"
                    | "other"
                    | "visualeditor"
                    | "wikieditor";
                platform?: "desktop" | "mobile";
            }
        }

        namespace Format {
            interface Xml extends Params {
                format: "xml";
                xslt?: string;
                includexmlnamespace?: boolean;
            }
        }

        namespace Format {
            interface XmlFM extends Params {
                format: "xmlfm";
                wrappedhtml?: boolean;
                xslt?: string;
                includexmlnamespace?: boolean;
            }
        }

        namespace Query.AbuseFilter {
            interface AbuseFilters extends Query {
                abfstartid?: number;
                abfendid?: number;
                abfdir?: "newer" | "older";
                abfshow?: TypeOrArray<
                    "!deleted" | "!enabled" | "!private" | "deleted" | "enabled" | "private"
                >;
                abflimit?: Limit;
                abfprop?: TypeOrArray<
                    | "actions"
                    | "comments"
                    | "description"
                    | "hits"
                    | "id"
                    | "lasteditor"
                    | "lastedittime"
                    | "pattern"
                    | "private"
                    | "status"
                >;
            }
        }

        namespace Query.AbuseFilter {
            interface AbuseLog extends Query {
                afllogid?: number;
                aflstart?: string;
                aflend?: string;
                afldir?: "newer" | "older";
                afluser?: string;
                afltitle?: string;
                aflfilter?: TypeOrArray<string>;
                afllimit?: Limit;
                aflprop?: TypeOrArray<
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
        }

        namespace Query {
            interface AllCategories extends Query {
                acfrom?: string;
                accontinue?: string;
                acto?: string;
                acprefix?: string;
                acdir?: "ascending" | "descending";
                acmin?: number;
                acmax?: number;
                aclimit?: Limit;
                acprop?: TypeOrArray<"hidden" | "size">;
            }
        }

        namespace Query {
            interface AllDeletedRevisions extends Query {
                adrprop?: TypeOrArray<
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
                adrslots?: TypeOrArray<"main">;
                adrlimit?: Limit;
                adrexpandtemplates?: boolean;
                adrgeneratexml?: boolean;
                adrparse?: boolean;
                adrsection?: string;
                adrdiffto?: string;
                adrdifftotext?: string;
                adrdifftotextpst?: boolean;
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
                adrnamespace?: TypeOrArray<number>;
                adrstart?: string;
                adrend?: string;
                adrdir?: "newer" | "older";
                adrfrom?: string;
                adrto?: string;
                adrprefix?: string;
                adrexcludeuser?: string;
                adrtag?: string;
                adrcontinue?: string;
                adrgeneratetitles?: boolean;
            }
        }

        namespace Query {
            interface AllFileUsages extends Query {
                afcontinue?: string;
                affrom?: string;
                afto?: string;
                afprefix?: string;
                afunique?: boolean;
                afprop?: TypeOrArray<"ids" | "title">;
                aflimit?: Limit;
                afdir?: "ascending" | "descending";
            }
        }

        namespace Query {
            interface AllImages extends Query {
                aisort?: "name" | "timestamp";
                aidir?: "ascending" | "descending" | "newer" | "older";
                aifrom?: string;
                aito?: string;
                aicontinue?: string;
                aistart?: string;
                aiend?: string;
                aiprop?: TypeOrArray<
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
                aimime?: TypeOrArray<string>;
                ailimit?: Limit;
            }
        }

        namespace Query {
            interface AllLinks extends Query {
                alcontinue?: string;
                alfrom?: string;
                alto?: string;
                alprefix?: string;
                alunique?: boolean;
                alprop?: TypeOrArray<"ids" | "title">;
                alnamespace?: number;
                allimit?: Limit;
                aldir?: "ascending" | "descending";
            }
        }

        namespace Query {
            interface AllMessages extends Query {
                ammessages?: TypeOrArray<string>;
                amprop?: TypeOrArray<"default">;
                amenableparser?: boolean;
                amnocontent?: boolean;
                amincludelocal?: boolean;
                amargs?: TypeOrArray<string>;
                amfilter?: string;
                amcustomised?: "all" | "modified" | "unmodified";
                amlang?: string;
                amfrom?: string;
                amto?: string;
                amtitle?: string;
                amprefix?: string;
            }
        }

        namespace Query {
            interface AllPages extends Query {
                apfrom?: string;
                apcontinue?: string;
                apto?: string;
                apprefix?: string;
                apnamespace?: number;
                apfilterredir?: "all" | "nonredirects" | "redirects";
                apfilterlanglinks?: "all" | "withlanglinks" | "withoutlanglinks";
                apminsize?: number;
                apmaxsize?: number;
                apprtype?: TypeOrArray<"edit" | "move" | "upload">;
                apprlevel?: TypeOrArray<
                    "" | "autoconfirmed" | "editextendedsemiprotected" | "sysop"
                >;
                apprfiltercascade?: "all" | "cascading" | "noncascading";
                apprexpiry?: "all" | "definite" | "indefinite";
                aplimit?: Limit;
                apdir?: "ascending" | "descending";
            }
        }

        namespace Query {
            interface AllRedirects extends Query {
                arcontinue?: string;
                arfrom?: string;
                arto?: string;
                arprefix?: string;
                arunique?: boolean;
                arprop?: TypeOrArray<"fragment" | "ids" | "interwiki" | "title">;
                arnamespace?: number;
                arlimit?: Limit;
                ardir?: "ascending" | "descending";
            }
        }

        namespace Query {
            interface AllRevisions extends Query {
                arvprop?: TypeOrArray<
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
                arvslots?: TypeOrArray<"main">;
                arvlimit?: Limit;
                arvexpandtemplates?: boolean;
                arvgeneratexml?: boolean;
                arvparse?: boolean;
                arvsection?: string;
                arvdiffto?: string;
                arvdifftotext?: string;
                arvdifftotextpst?: boolean;
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
                arvnamespace?: TypeOrArray<number>;
                arvstart?: string;
                arvend?: string;
                arvdir?: "newer" | "older";
                arvexcludeuser?: string;
                arvcontinue?: string;
                arvgeneratetitles?: boolean;
            }
        }

        namespace Query {
            interface AllTransclusions extends Query {
                atcontinue?: string;
                atfrom?: string;
                atto?: string;
                atprefix?: string;
                atunique?: boolean;
                atprop?: TypeOrArray<"ids" | "title">;
                atnamespace?: number;
                atlimit?: Limit;
                atdir?: "ascending" | "descending";
            }
        }

        namespace Query {
            interface AllUsers extends Query {
                aufrom?: string;
                auto?: string;
                auprefix?: string;
                audir?: "ascending" | "descending";
                augroup?: TypeOrArray<
                    | "abusefilter"
                    | "accountcreator"
                    | "bot"
                    | "bureaucrat"
                    | "checkuser"
                    | "confirmed"
                    | "flow-bot"
                    | "import"
                    | "interface-admin"
                    | "ipblock-exempt"
                    | "no-ipinfo"
                    | "rollbacker"
                    | "steward"
                    | "suppress"
                    | "sysop"
                    | "transwiki"
                >;
                auexcludegroup?: TypeOrArray<
                    | "abusefilter"
                    | "accountcreator"
                    | "bot"
                    | "bureaucrat"
                    | "checkuser"
                    | "confirmed"
                    | "flow-bot"
                    | "import"
                    | "interface-admin"
                    | "ipblock-exempt"
                    | "no-ipinfo"
                    | "rollbacker"
                    | "steward"
                    | "suppress"
                    | "sysop"
                    | "transwiki"
                >;
                aurights?: TypeOrArray<
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
                    | "createtalk"
                    | "delete"
                    | "delete-redirect"
                    | "deletechangetags"
                    | "deletedhistory"
                    | "deletedtext"
                    | "deletelogentry"
                    | "deleterevision"
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
                    | "flow-edit-title"
                    | "flow-hide"
                    | "flow-lock"
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
                    | "writeapi"
                >;
                auprop?: TypeOrArray<
                    | "blockinfo"
                    | "centralids"
                    | "editcount"
                    | "groups"
                    | "implicitgroups"
                    | "registration"
                    | "rights"
                >;
                aulimit?: Limit;
                auwitheditsonly?: boolean;
                auactiveusers?: boolean;
                auattachedwiki?: string;
            }
        }

        namespace Query {
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
        }

        namespace Query {
            interface Babel extends Query {
                babuser?: string;
            }
        }

        namespace Query {
            interface Backlinks extends Query {
                bltitle?: string;
                blpageid?: number;
                blcontinue?: string;
                blnamespace?: TypeOrArray<number>;
                bldir?: "ascending" | "descending";
                blfilterredir?: "all" | "nonredirects" | "redirects";
                bllimit?: Limit;
                blredirect?: boolean;
            }
        }

        namespace Query {
            interface BetaFeatures extends Query {
                bfcounts?: string;
            }
        }

        namespace Query {
            interface Blocks extends Query {
                bkstart?: string;
                bkend?: string;
                bkdir?: "newer" | "older";
                bkids?: TypeOrArray<number>;
                bkusers?: TypeOrArray<string>;
                bkip?: string;
                bklimit?: Limit;
                bkprop?: TypeOrArray<
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
                bkshow?: TypeOrArray<
                    "!account" | "!ip" | "!range" | "!temp" | "account" | "ip" | "range" | "temp"
                >;
                bkcontinue?: string;
            }
        }

        namespace Query {
            interface Categories extends Query {
                clprop?: TypeOrArray<"hidden" | "sortkey" | "timestamp">;
                clshow?: TypeOrArray<"!hidden" | "hidden">;
                cllimit?: Limit;
                clcontinue?: string;
                clcategories?: TypeOrArray<string>;
                cldir?: "ascending" | "descending";
            }
        }

        namespace Query {
            interface CategoryInfo extends Query {
                cicontinue?: string;
            }
        }

        namespace Query {
            interface CategoryMembers extends Query {
                cmtitle?: string;
                cmpageid?: number;
                cmprop?: TypeOrArray<
                    "ids" | "sortkey" | "sortkeyprefix" | "timestamp" | "title" | "type"
                >;
                cmnamespace?: TypeOrArray<number>;
                cmtype?: TypeOrArray<"file" | "page" | "subcat">;
                cmcontinue?: string;
                cmlimit?: Limit;
                cmsort?: "sortkey" | "timestamp";
                cmdir?: "asc" | "ascending" | "desc" | "descending" | "newer" | "older";
                cmstart?: string;
                cmend?: string;
                cmstarthexsortkey?: string;
                cmendhexsortkey?: string;
                cmstartsortkeyprefix?: string;
                cmendsortkeyprefix?: string;
                cmstartsortkey?: string;
                cmendsortkey?: string;
            }
        }

        namespace Query {
            interface CentralNoticeActiveCampaigns extends Query {
                cnacincludefuture?: boolean;
            }
        }

        namespace Query {
            interface CentralNoticeLogs extends Query {
                campaign?: string;
                user?: string;
                limit?: Limit;
                offset?: number;
                start?: string;
                end?: string;
            }
        }

        namespace Query {
            interface CheckUser extends Query {
                curequest?: "actions" | "ipusers" | "userips" | "edits";
                cutarget?: string;
                cureason?: string;
                culimit?: Limit;
                cutimecond?: string;
                cuxff?: string;
                cutoken?: string;
            }
        }

        namespace Query.CheckUser {
            interface CheckUserLog extends Query {
                culuser?: string;
                cultarget?: string;
                culreason?: string;
                cullimit?: Limit;
                culdir?: "newer" | "older";
                culfrom?: string;
                culto?: string;
                culcontinue?: string;
            }
        }

        namespace Query.CirrusSearch {
            interface BuildDocument extends Query {
                cbbuilders?: TypeOrArray<"content" | "links">;
                cblimiterprofile?: string;
            }
        }

        namespace Query.CirrusSearch {
            interface CompSuggestBuildDoc extends Query {
                csbmethod?: string;
            }
        }

        namespace Query.CirrusSearch {
            interface CirrusDoc extends Query {
                cdincludes?: TypeOrArray<string>;
            }
        }

        namespace Query.ContentTranslation {
            interface Action extends Query {
                translationid?: string;
                from?: string;
                to?: string;
                sourcetitle?: string;
                sourcesectiontitle?: string;
                limit?: Limit;
                offset?: string;
                type?: "draft" | "published";
                usecase?:
                    | "desktop-editor-draft"
                    | "translation-corpora-units"
                    | "unified-dashboard";
            }
        }

        namespace Query.ContentTranslation.Action {
            interface ContentTranslationCorpora extends Query {
                translationid?: number;
                striphtml?: boolean;
                types?: TypeOrArray<"mt" | "source" | "user">;
            }
        }

        namespace Query.ContentTranslation.Action {
            interface ContentTranslationLanguageTrend extends Query {
                source?: string;
                target?: string;
                interval?: "month" | "week";
            }
        }

        namespace Query.ContentTranslation.Action {
            // tslint:disable-next-line:no-empty-interface
            interface ContentTranslationStats extends Query {}
        }

        namespace Query.ContentTranslation.Action {
            interface ContentTranslationSuggestions extends Query {
                from?: string;
                to?: string;
                listid?: string;
                limit?: Limit;
                offset?: string;
                seed?: number;
            }
        }

        namespace Query {
            interface Contributors extends Query {
                pcgroup?: TypeOrArray<
                    | "abusefilter"
                    | "accountcreator"
                    | "bot"
                    | "bureaucrat"
                    | "checkuser"
                    | "confirmed"
                    | "flow-bot"
                    | "import"
                    | "interface-admin"
                    | "ipblock-exempt"
                    | "no-ipinfo"
                    | "rollbacker"
                    | "steward"
                    | "suppress"
                    | "sysop"
                    | "transwiki"
                >;
                pcexcludegroup?: TypeOrArray<
                    | "abusefilter"
                    | "accountcreator"
                    | "bot"
                    | "bureaucrat"
                    | "checkuser"
                    | "confirmed"
                    | "flow-bot"
                    | "import"
                    | "interface-admin"
                    | "ipblock-exempt"
                    | "no-ipinfo"
                    | "rollbacker"
                    | "steward"
                    | "suppress"
                    | "sysop"
                    | "transwiki"
                >;
                pcrights?: TypeOrArray<
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
                    | "createtalk"
                    | "delete"
                    | "delete-redirect"
                    | "deletechangetags"
                    | "deletedhistory"
                    | "deletedtext"
                    | "deletelogentry"
                    | "deleterevision"
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
                    | "flow-edit-title"
                    | "flow-hide"
                    | "flow-lock"
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
                    | "writeapi"
                >;
                pcexcluderights?: TypeOrArray<
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
                    | "createtalk"
                    | "delete"
                    | "delete-redirect"
                    | "deletechangetags"
                    | "deletedhistory"
                    | "deletedtext"
                    | "deletelogentry"
                    | "deleterevision"
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
                    | "flow-edit-title"
                    | "flow-hide"
                    | "flow-lock"
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
                    | "writeapi"
                >;
                pclimit?: Limit;
                pccontinue?: string;
            }
        }

        namespace Query.GeoData {
            interface Coordinates extends Query {
                colimit?: Limit;
                cocontinue?: string;
                coprop?: TypeOrArray<"country" | "dim" | "globe" | "name" | "region" | "type">;
                coprimary?: "all" | "primary" | "secondary";
                codistancefrompoint?: string;
                codistancefrompage?: string;
            }
        }

        namespace Query.ContentTranslation.Action {
            interface DeletedTranslations extends Query {
                dtafter?: string;
                dtnamespace?: number;
            }
        }

        namespace Query.ContentTranslation.Action {
            interface PublishedTranslations extends Query {
                from?: string;
                to?: string;
                limit?: Limit;
                offset?: string;
            }
        }

        namespace Query.ContentTranslation.Action {
            interface TranslatorStats extends Query {
                translator?: string;
            }
        }

        namespace Query {
            interface DeletedRevisions extends Query {
                drvprop?: TypeOrArray<
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
                drvslots?: TypeOrArray<"main">;
                drvlimit?: Limit;
                drvexpandtemplates?: boolean;
                drvgeneratexml?: boolean;
                drvparse?: boolean;
                drvsection?: string;
                drvdiffto?: string;
                drvdifftotext?: string;
                drvdifftotextpst?: boolean;
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
                drvstart?: string;
                drvend?: string;
                drvdir?: "newer" | "older";
                drvtag?: string;
                drvuser?: string;
                drvexcludeuser?: string;
                drvcontinue?: string;
            }
        }

        namespace Query {
            interface Deletedrevs extends Query {
                drstart?: string;
                drend?: string;
                drdir?: "newer" | "older";
                drfrom?: string;
                drto?: string;
                drprefix?: string;
                drunique?: boolean;
                drnamespace?: number;
                drtag?: string;
                druser?: string;
                drexcludeuser?: string;
                drprop?: TypeOrArray<
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
                drlimit?: Limit;
                drcontinue?: string;
            }
        }

        namespace Query.Wikibase {
            interface Description extends Query {
                desccontinue?: number;
                descprefersource?: "central" | "local";
            }
        }

        namespace Query {
            interface DuplicateFiles extends Query {
                dflimit?: Limit;
                dfcontinue?: string;
                dfdir?: "ascending" | "descending";
                dflocalonly?: boolean;
            }
        }

        namespace Query {
            interface EmbeddedIn extends Query {
                eititle?: string;
                eipageid?: number;
                eicontinue?: string;
                einamespace?: TypeOrArray<number>;
                eidir?: "ascending" | "descending";
                eifilterredir?: "all" | "nonredirects" | "redirects";
                eilimit?: Limit;
            }
        }

        namespace Query {
            interface ExternalLinks extends Query {
                ellimit?: Limit;
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
                elexpandurl?: boolean;
            }
        }

        namespace Query.TextExtracts {
            interface Extracts extends Query {
                exchars?: number;
                exsentences?: number;
                exlimit?: Limit;
                exintro?: boolean;
                explaintext?: boolean;
                exsectionformat?: "plain" | "raw" | "wiki";
                excontinue?: number;
            }
        }

        namespace Query {
            interface ExtLinksUsage extends Query {
                euprop?: TypeOrArray<"ids" | "title" | "url">;
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
                eunamespace?: TypeOrArray<number>;
                eulimit?: Limit;
                euexpandurl?: boolean;
            }
        }

        namespace Query {
            interface FeatureUsage extends Query {
                afustart?: string;
                afuend?: string;
                afuagent?: string;
                afufeatures?: TypeOrArray<string>;
            }
        }

        namespace Query {
            interface Filearchive extends Query {
                fafrom?: string;
                fato?: string;
                faprefix?: string;
                fadir?: "ascending" | "descending";
                fasha1?: string;
                fasha1base36?: string;
                faprop?: TypeOrArray<
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
                falimit?: Limit;
                facontinue?: string;
            }
        }

        namespace Query {
            interface FileRepoInfo extends Query {
                friprop?: TypeOrArray<
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
        }

        namespace Query {
            interface FileUsage extends Query {
                fuprop?: TypeOrArray<"pageid" | "redirect" | "title">;
                funamespace?: TypeOrArray<number>;
                fushow?: TypeOrArray<"!redirect" | "redirect">;
                fulimit?: Limit;
                fucontinue?: string;
            }
        }

        namespace Query.Flow {
            // tslint:disable-next-line:no-empty-interface
            interface PropFlowInfo extends Query {}
        }

        namespace Query.Gadgets {
            interface GadgetCategories extends Query {
                gcprop?: TypeOrArray<"members" | "name" | "title">;
                gcnames?: TypeOrArray<string>;
            }
        }

        namespace Query {
            interface Gadgets extends Query {
                gaprop?: TypeOrArray<"desc" | "id" | "metadata">;
                gacategories?: TypeOrArray<string>;
                gaids?: TypeOrArray<string>;
                gaallowedonly?: boolean;
                gaenabledonly?: boolean;
            }
        }

        namespace Query.GeoData {
            interface GeoSearchElastic extends Query {
                gscoord?: string;
                gspage?: string;
                gsbbox?: string;
                gsradius?: number;
                gsmaxdim?: number;
                gssort?: "distance" | "relevance";
                gslimit?: Limit;
                gsglobe?: "earth";
                gsnamespace?: TypeOrArray<number>;
                gsprop?: TypeOrArray<"country" | "dim" | "globe" | "name" | "region" | "type">;
                gsprimary?: "all" | "primary" | "secondary";
                gsdebug?: boolean;
            }
        }

        namespace Query.CentralAuth {
            interface GlobalAllUsers extends Query {
                agufrom?: string;
                aguto?: string;
                aguprefix?: string;
                agudir?: "ascending" | "descending";
                agugroup?: TypeOrArray<
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
                aguexcludegroup?: TypeOrArray<
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
                aguprop?: TypeOrArray<"existslocally" | "groups" | "lockinfo">;
                agulimit?: Limit;
            }
        }

        namespace Query.GlobalBlocking {
            interface GlobalBlocks extends Query {
                bgstart?: string;
                bgend?: string;
                bgdir?: "newer" | "older";
                bgids?: TypeOrArray<number>;
                bgaddresses?: TypeOrArray<string>;
                bgip?: string;
                bglimit?: Limit;
                bgprop?: TypeOrArray<
                    "address" | "by" | "expiry" | "id" | "range" | "reason" | "timestamp"
                >;
            }
        }

        namespace Query.CentralAuth {
            interface GlobalGroups extends Query {
                ggpprop?: TypeOrArray<"rights">;
            }
        }

        namespace Query {
            interface GlobalPreferences extends Query {
                gprprop?: TypeOrArray<"localoverrides" | "preferences">;
            }
        }

        namespace Query.CentralAuth {
            interface GlobalRenameStatus extends Query {
                grsuser?: string;
            }
        }

        namespace Query {
            interface GlobalUsage extends Query {
                guprop?: TypeOrArray<"namespace" | "pageid" | "url">;
                gulimit?: Limit;
                gunamespace?: TypeOrArray<number>;
                gusite?: TypeOrArray<string>;
                gucontinue?: string;
                gufilterlocal?: boolean;
            }
        }

        namespace Query.CentralAuth {
            interface GlobalUserInfo extends Query {
                guiuser?: string;
                guiid?: number;
                guiprop?: TypeOrArray<"editcount" | "groups" | "merged" | "rights" | "unattached">;
            }
        }

        namespace Query.GrowthExperiments {
            interface ImageSuggestionData extends Query {
                gisdtasktype?: "image-recommendation" | "section-image-recommendation";
                gisdcontinue?: string;
            }
        }

        namespace Query.GrowthExperiments {
            // tslint:disable-next-line:no-empty-interface
            interface MenteeStatus extends Query {}
        }

        namespace Query.GrowthExperiments {
            // tslint:disable-next-line:no-empty-interface
            interface MentorList extends Query {}
        }

        namespace Query.GrowthExperiments {
            interface MentorMentee extends Query {
                gemmmentor?: string;
            }
        }

        namespace Query.GrowthExperiments {
            // tslint:disable-next-line:no-empty-interface
            interface MentorStatus extends Query {}
        }

        namespace Query.GrowthExperiments {
            interface NextSuggestedTaskType extends Query {
                gnsttactivetasktype?:
                    | "copyedit"
                    | "expand"
                    | "image-recommendation"
                    | "link-recommendation"
                    | "links"
                    | "references"
                    | "section-image-recommendation"
                    | "update";
            }
        }

        namespace Query.GrowthExperiments {
            // tslint:disable-next-line:no-empty-interface
            interface StarredMentees extends Query {}
        }

        namespace Query.GrowthExperiments {
            interface GrowthTasks extends Query {
                gttasktypes?: TypeOrArray<
                    | "copyedit"
                    | "expand"
                    | "image-recommendation"
                    | "link-recommendation"
                    | "links"
                    | "references"
                    | "section-image-recommendation"
                    | "update"
                >;
                gttopics?: TypeOrArray<
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
                gtlimit?: Limit;
                gtoffset?: number;
                gtdebug?: boolean;
                gtexcludepageids?: TypeOrArray<number>;
            }
        }

        namespace Query {
            interface ImageInfo extends Query {
                iiprop?: TypeOrArray<
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
                iilimit?: Limit;
                iistart?: string;
                iiend?: string;
                iiurlwidth?: number;
                iiurlheight?: number;
                iimetadataversion?: string;
                iiextmetadatalanguage?: string;
                iiextmetadatamultilang?: boolean;
                iiextmetadatafilter?: TypeOrArray<string>;
                iiurlparam?: string;
                iibadfilecontexttitle?: string;
                iicontinue?: string;
                iilocalonly?: boolean;
            }
        }

        namespace Query {
            interface Images extends Query {
                imlimit?: Limit;
                imcontinue?: string;
                imimages?: TypeOrArray<string>;
                imdir?: "ascending" | "descending";
            }
        }

        namespace Query {
            interface ImageUsage extends Query {
                iutitle?: string;
                iupageid?: number;
                iucontinue?: string;
                iunamespace?: TypeOrArray<number>;
                iudir?: "ascending" | "descending";
                iufilterredir?: "all" | "nonredirects" | "redirects";
                iulimit?: Limit;
                iuredirect?: boolean;
            }
        }

        namespace Query {
            interface Info extends Query {
                inprop?: TypeOrArray<
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
                intestactions?: TypeOrArray<string>;
                intestactionsdetail?: "boolean" | "full" | "quick";
                intestactionsautocreate?: boolean;
                inpreloadcustom?: string;
                inpreloadparams?: TypeOrArray<string>;
                inpreloadnewsection?: boolean;
                ineditintrostyle?: "lessframes" | "moreframes";
                ineditintroskip?: TypeOrArray<string>;
                ineditintrocustom?: string;
                incontinue?: string;
            }
        }

        namespace Query {
            // tslint:disable-next-line:interface-name
            interface IWBacklinks extends Query {
                iwblprefix?: string;
                iwbltitle?: string;
                iwblcontinue?: string;
                iwbllimit?: Limit;
                iwblprop?: TypeOrArray<"iwprefix" | "iwtitle">;
                iwbldir?: "ascending" | "descending";
            }
        }

        namespace Query {
            // tslint:disable-next-line:interface-name
            interface IWLinks extends Query {
                iwprop?: TypeOrArray<"url">;
                iwprefix?: string;
                iwtitle?: string;
                iwdir?: "ascending" | "descending";
                iwlimit?: Limit;
                iwcontinue?: string;
                iwurl?: boolean;
            }
        }

        namespace Query {
            interface LangBacklinks extends Query {
                lbllang?: string;
                lbltitle?: string;
                lblcontinue?: string;
                lbllimit?: Limit;
                lblprop?: TypeOrArray<"lllang" | "lltitle">;
                lbldir?: "ascending" | "descending";
            }
        }

        namespace Query {
            interface LangLinks extends Query {
                llprop?: TypeOrArray<"autonym" | "langname" | "url">;
                lllang?: string;
                lltitle?: string;
                lldir?: "ascending" | "descending";
                llinlanguagecode?: string;
                lllimit?: Limit;
                llcontinue?: string;
                llurl?: boolean;
            }
        }

        namespace Query.ContentTranslation.Action {
            // tslint:disable-next-line:no-empty-interface
            interface LangLinksCount extends Query {}
        }

        namespace Query {
            interface Languageinfo extends Query {
                liprop?: TypeOrArray<
                    | "autonym"
                    | "bcp47"
                    | "code"
                    | "dir"
                    | "fallbacks"
                    | "name"
                    | "variantnames"
                    | "variants"
                >;
                licode?: TypeOrArray<string>;
                licontinue?: string;
            }
        }

        namespace Query {
            interface Links extends Query {
                plnamespace?: TypeOrArray<number>;
                pllimit?: Limit;
                plcontinue?: string;
                pltitles?: TypeOrArray<string>;
                pldir?: "ascending" | "descending";
            }
        }

        namespace Query {
            interface LinksHere extends Query {
                lhprop?: TypeOrArray<"pageid" | "redirect" | "title">;
                lhnamespace?: TypeOrArray<number>;
                lhshow?: TypeOrArray<"!redirect" | "redirect">;
                lhlimit?: Limit;
                lhcontinue?: string;
            }
        }

        namespace Query.Linter {
            interface LintErrors extends Query {
                "lntcategories"?: TypeOrArray<
                    | "bogus-image-options"
                    | "deletable-table-tag"
                    | "fostered"
                    | "html5-misnesting"
                    | "misc-tidy-replacement-issues"
                    | "misnested-tag"
                    | "missing-end-tag"
                    | "missing-end-tag-in-heading"
                    | "multi-colon-escape"
                    | "multiline-html-table-in-list"
                    | "multiple-unclosed-formatting-tags"
                    | "obsolete-tag"
                    | "pwrap-bug-workaround"
                    | "self-closed-tag"
                    | "stripped-tag"
                    | "tidy-font-bug"
                    | "tidy-whitespace-bug"
                    | "unclosed-quotes-in-heading"
                    | "wikilink-in-extlink"
                >;
                "lntinvisible-categories"?: TypeOrArray<"large-tables">;
                "lntlimit"?: Limit;
                "lntnamespace"?: TypeOrArray<number>;
                "lntpageid"?: TypeOrArray<number>;
                "lnttitle"?: string;
                "lntfrom"?: number;
            }
        }

        namespace Query.Linter {
            // tslint:disable-next-line:no-empty-interface
            interface LinterStats extends Query {}
        }

        namespace Query {
            interface LogEvents extends Query {
                leprop?: TypeOrArray<
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
                    | "patrol"
                    | "protect"
                    | "renameuser"
                    | "rights"
                    | "spamblacklist"
                    | "suppress"
                    | "tag"
                    | "thanks"
                    | "timedmediahandler"
                    | "titleblacklist"
                    | "upload"
                    | "urlshortener"
                    | "usermerge";
                leaction?:
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
                    | "delete/flow-delete-post"
                    | "delete/flow-delete-topic"
                    | "delete/flow-restore-post"
                    | "delete/flow-restore-topic"
                    | "delete/restore"
                    | "delete/revision"
                    | "gblblock/dwhitelist"
                    | "gblblock/gblock"
                    | "gblblock/gblock2"
                    | "gblblock/gunblock"
                    | "gblblock/modify"
                    | "gblblock/whitelist"
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
                    | "import/lqt-to-flow-topic"
                    | "import/upload"
                    | "interwiki/*"
                    | "ipinfo/*"
                    | "lock/flow-lock-topic"
                    | "lock/flow-restore-topic"
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
                    | "patrol/autopatrol"
                    | "patrol/patrol"
                    | "protect/modify"
                    | "protect/move_prot"
                    | "protect/protect"
                    | "protect/unprotect"
                    | "renameuser/renameuser"
                    | "rights/autopromote"
                    | "rights/blockautopromote"
                    | "rights/restoreautopromote"
                    | "rights/rights"
                    | "spamblacklist/*"
                    | "suppress/block"
                    | "suppress/cadelete"
                    | "suppress/delete"
                    | "suppress/event"
                    | "suppress/flow-restore-post"
                    | "suppress/flow-restore-topic"
                    | "suppress/flow-suppress-post"
                    | "suppress/flow-suppress-topic"
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
                lestart?: string;
                leend?: string;
                ledir?: "newer" | "older";
                leuser?: string;
                letitle?: string;
                lenamespace?: number;
                leprefix?: string;
                letag?: string;
                lelimit?: Limit;
                lecontinue?: string;
            }
        }

        namespace Query.Kartographer {
            interface MapData extends Query {
                mpdgroups?: string;
                mpdlimit?: Limit;
                mpdcontinue?: number;
            }
        }

        namespace Query.MassMessage {
            // tslint:disable-next-line:no-empty-interface
            interface MMContent extends Query {}
        }

        namespace Query.PageViewInfo {
            interface MostViewed extends Query {
                pvimmetric?: "pageviews";
                pvimlimit?: Limit;
                pvimoffset?: number;
            }
        }

        namespace Query {
            interface MyStashedFiles extends Query {
                msfprop?: TypeOrArray<"size" | "type">;
                msflimit?: Limit;
                msfcontinue?: string;
            }
        }

        namespace Query.Notifications {
            interface EchoNotifications extends Query {
                notwikis?: TypeOrArray<string>;
                notfilter?: TypeOrArray<"!read" | "read">;
                notprop?: TypeOrArray<"count" | "list" | "seenTime">;
                notsections?: TypeOrArray<"alert" | "message">;
                notgroupbysection?: boolean;
                notformat?: "flyout" | "html" | "model" | "special";
                notlimit?: Limit;
                notcontinue?: string;
                notunreadfirst?: boolean;
                nottitles?: TypeOrArray<string>;
                notbundle?: boolean;
                notnotifiertypes?: TypeOrArray<"email" | "push" | "web">;
                notalertcontinue?: string;
                notalertunreadfirst?: boolean;
                notmessagecontinue?: string;
                notmessageunreadfirst?: boolean;
                notcrosswikisummary?: boolean;
            }
        }

        namespace Query.OATHAuth {
            interface OATH extends Query {
                oathuser?: string;
                oathreason?: string;
            }
        }

        namespace Query.ORES {
            // tslint:disable-next-line:no-empty-interface
            interface Hooks extends Query {}
        }

        namespace Query {
            interface PageAssessments extends Query {
                pacontinue?: string;
                palimit?: Limit;
            }
        }

        namespace Query {
            interface PageImages extends Query {
                piprop?: TypeOrArray<"name" | "original" | "thumbnail">;
                pithumbsize?: number;
                pilimit?: Limit;
                pilicense?: "any" | "free";
                picontinue?: number;
                pilangcode?: string;
            }
        }

        namespace Query {
            interface PagePropNames extends Query {
                ppncontinue?: string;
                ppnlimit?: Limit;
            }
        }

        namespace Query {
            interface PageProps extends Query {
                ppcontinue?: string;
                ppprop?: TypeOrArray<string>;
            }
        }

        namespace Query {
            interface PagesWithProp extends Query {
                pwppropname?: string;
                pwpprop?: TypeOrArray<"ids" | "title" | "value">;
                pwpcontinue?: string;
                pwplimit?: Limit;
                pwpdir?: "ascending" | "descending";
            }
        }

        namespace Query.Wikibase {
            interface PageTerms extends Query {
                wbptcontinue?: number;
                wbptlanguage?:
                    | "aa"
                    | "aae"
                    | "ab"
                    | "abs"
                    | "ace"
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
                    | "mus"
                    | "mwl"
                    | "my"
                    | "myv"
                    | "mzn"
                    | "na"
                    | "nah"
                    | "nan"
                    | "nan-hani"
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
                    | "nrm"
                    | "nso"
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
                wbptterms?: TypeOrArray<"alias" | "description" | "label">;
            }
        }

        namespace Query.PageViewInfo {
            interface PageViews extends Query {
                pvipmetric?: "pageviews";
                pvipdays?: number;
                pvipcontinue?: string;
            }
        }

        namespace Query {
            interface PrefixSearch extends Query {
                pssearch?: string;
                psnamespace?: TypeOrArray<number>;
                pslimit?: Limit;
                psoffset?: number;
                psprofile?:
                    | "classic"
                    | "engine_autoselect"
                    | "fast-fuzzy"
                    | "fuzzy"
                    | "normal"
                    | "strict";
            }
        }

        namespace Query.PageAssessments {
            interface ProjectPages extends Query {
                wppassessments?: boolean;
                wppprojects?: TypeOrArray<string>;
                wpplimit?: Limit;
                wppcontinue?: string;
            }
        }

        namespace Query.PageAssessments {
            // tslint:disable-next-line:no-empty-interface
            interface Projects extends Query {}
        }

        namespace Query {
            interface ProtectedTitles extends Query {
                ptnamespace?: TypeOrArray<number>;
                ptlevel?: TypeOrArray<"autoconfirmed" | "editextendedsemiprotected" | "sysop">;
                ptlimit?: Limit;
                ptdir?: "newer" | "older";
                ptstart?: string;
                ptend?: string;
                ptprop?: TypeOrArray<
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
        }

        namespace Query {
            interface QueryPage extends Query {
                qppage?:
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
                qplimit?: Limit;
            }
        }

        namespace Query {
            interface Random extends Query {
                rnnamespace?: TypeOrArray<number>;
                rnfilterredir?: "all" | "nonredirects" | "redirects";
                rnredirect?: boolean;
                rnlimit?: Limit;
                rncontinue?: string;
            }
        }

        namespace Query.ReadingLists {
            interface ReadingListEntries extends Query {
                rlelists?: TypeOrArray<number>;
                rlechangedsince?: string;
                rlesort?: "name" | "updated";
                rledir?: "ascending" | "descending";
                rlelimit?: Limit;
                rlecontinue?: string;
            }
        }

        namespace Query {
            interface ReadingLists extends Query {
                rllist?: number;
                rlproject?: string;
                rltitle?: string;
                rlchangedsince?: string;
                rlsort?: "name" | "updated";
                rldir?: "ascending" | "descending";
                rllimit?: Limit;
                rlcontinue?: string;
            }
        }

        namespace Query {
            interface RecentChanges extends Query {
                rcstart?: string;
                rcend?: string;
                rcdir?: "newer" | "older";
                rcnamespace?: TypeOrArray<number>;
                rcuser?: string;
                rcexcludeuser?: string;
                rctag?: string;
                rcprop?: TypeOrArray<
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
                rcshow?: TypeOrArray<
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
                rclimit?: Limit;
                rctype?: TypeOrArray<"categorize" | "edit" | "external" | "log" | "new">;
                rctoponly?: boolean;
                rctitle?: string;
                rccontinue?: string;
                rcgeneraterevisions?: boolean;
                rcslot?: "main";
            }
        }

        namespace Query {
            interface Redirects extends Query {
                rdprop?: TypeOrArray<"fragment" | "pageid" | "title">;
                rdnamespace?: TypeOrArray<number>;
                rdshow?: TypeOrArray<"!fragment" | "fragment">;
                rdlimit?: Limit;
                rdcontinue?: string;
            }
        }

        namespace Query {
            interface Revisions extends Query {
                rvprop?: TypeOrArray<
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
                rvslots?: TypeOrArray<"main">;
                rvlimit?: Limit;
                rvexpandtemplates?: boolean;
                rvgeneratexml?: boolean;
                rvparse?: boolean;
                rvsection?: string;
                rvdiffto?: string;
                rvdifftotext?: string;
                rvdifftotextpst?: boolean;
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
                rvstart?: string;
                rvend?: string;
                rvdir?: "newer" | "older";
                rvuser?: string;
                rvexcludeuser?: string;
                rvtag?: string;
                rvcontinue?: string;
            }
        }

        namespace Query {
            interface Search extends Query {
                srsearch?: string;
                srnamespace?: TypeOrArray<number>;
                srlimit?: Limit;
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
                srinfo?: TypeOrArray<"rewrittenquery" | "suggestion" | "totalhits">;
                srprop?: TypeOrArray<
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
        }

        namespace Query {
            interface Siteinfo extends Query {
                siprop?: TypeOrArray<
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
        }

        namespace Query.PageViewInfo {
            interface SiteViews extends Query {
                pvismetric?: "pageviews" | "uniques";
                pvisdays?: number;
            }
        }

        namespace Query {
            interface StashImageInfo extends Query {
                siifilekey?: TypeOrArray<string>;
                siisessionkey?: TypeOrArray<string>;
                siiprop?: TypeOrArray<
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
        }

        namespace Query {
            interface Tags extends Query {
                tgcontinue?: string;
                tglimit?: Limit;
                tgprop?: TypeOrArray<
                    "active" | "defined" | "description" | "displayname" | "hitcount" | "source"
                >;
            }
        }

        namespace Query {
            interface Templates extends Query {
                tlnamespace?: TypeOrArray<number>;
                tllimit?: Limit;
                tlcontinue?: string;
                tltemplates?: TypeOrArray<string>;
                tldir?: "ascending" | "descending";
            }
        }

        namespace Query {
            interface Tokens extends Query {
                type?: TypeOrArray<
                    | "createaccount"
                    | "csrf"
                    | "deleteglobalaccount"
                    | "login"
                    | "patrol"
                    | "rollback"
                    | "setglobalaccountstatus"
                    | "userrights"
                    | "watch"
                >;
            }
        }

        namespace Query {
            interface TranscludedIn extends Query {
                tiprop?: TypeOrArray<"pageid" | "redirect" | "title">;
                tinamespace?: TypeOrArray<number>;
                tishow?: TypeOrArray<"!redirect" | "redirect">;
                tilimit?: Limit;
                ticontinue?: string;
            }
        }

        namespace Query.TimedMediaHandler {
            // tslint:disable-next-line:no-empty-interface
            interface TranscodeStatus extends Query {}
        }

        namespace Query.Notifications {
            interface EchoUnreadNotificationPages extends Query {
                unpwikis?: TypeOrArray<string>;
                unpgrouppages?: boolean;
                unplimit?: Limit;
            }
        }

        namespace Query {
            interface UserContribs extends Query {
                uclimit?: Limit;
                ucstart?: string;
                ucend?: string;
                uccontinue?: string;
                ucuser?: TypeOrArray<string>;
                ucuserids?: TypeOrArray<number>;
                ucuserprefix?: string;
                uciprange?: string;
                ucdir?: "newer" | "older";
                ucnamespace?: TypeOrArray<number>;
                ucprop?: TypeOrArray<
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
                ucshow?: TypeOrArray<
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
                uctoponly?: boolean;
            }
        }

        namespace Query {
            interface UserInfo extends Query {
                uiprop?: TypeOrArray<
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
                >;
                uiattachedwiki?: string;
            }
        }

        namespace Query {
            interface Users extends Query {
                usprop?: TypeOrArray<
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
                ususers?: TypeOrArray<string>;
                ususerids?: TypeOrArray<number>;
            }
        }

        namespace Query.TimedMediaHandler {
            interface VideoInfo extends Query {
                viprop?: TypeOrArray<
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
                vilimit?: Limit;
                vistart?: string;
                viend?: string;
                viurlwidth?: number;
                viurlheight?: number;
                vimetadataversion?: string;
                viextmetadatalanguage?: string;
                viextmetadatamultilang?: boolean;
                viextmetadatafilter?: TypeOrArray<string>;
                viurlparam?: string;
                vibadfilecontexttitle?: string;
                vicontinue?: string;
                vilocalonly?: boolean;
            }
        }

        namespace Query {
            interface Watchlist extends Query {
                wlallrev?: boolean;
                wlstart?: string;
                wlend?: string;
                wlnamespace?: TypeOrArray<number>;
                wluser?: string;
                wlexcludeuser?: string;
                wldir?: "newer" | "older";
                wllimit?: Limit;
                wlprop?: TypeOrArray<
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
                wlshow?: TypeOrArray<
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
                wltype?: TypeOrArray<"categorize" | "edit" | "external" | "log" | "new">;
                wlowner?: string;
                wltoken?: string;
                wlcontinue?: string;
            }
        }

        namespace Query {
            interface WatchlistRaw extends Query {
                wrcontinue?: string;
                wrnamespace?: TypeOrArray<number>;
                wrlimit?: Limit;
                wrprop?: TypeOrArray<"changed">;
                wrshow?: TypeOrArray<"!changed" | "changed">;
                wrowner?: string;
                wrtoken?: string;
                wrdir?: "ascending" | "descending";
                wrfromtitle?: string;
                wrtotitle?: string;
            }
        }

        namespace Query.Wikibase {
            interface PropsEntityUsage extends Query {
                wbeuprop?: TypeOrArray<"url">;
                wbeuaspect?: TypeOrArray<"C" | "D" | "L" | "O" | "S" | "T" | "X">;
                wbeuentities?: TypeOrArray<string>;
                wbeulimit?: Limit;
                wbeucontinue?: string;
            }
        }

        namespace Query.Wikibase {
            interface ListEntityUsage extends Query {
                wbleuprop?: TypeOrArray<"url">;
                wbleuaspect?: TypeOrArray<"C" | "D" | "L" | "O" | "S" | "T" | "X">;
                wbleuentities?: TypeOrArray<string>;
                wbleulimit?: Limit;
                wbleucontinue?: string;
            }
        }

        namespace Query.Wikibase {
            interface ClientInfo extends Query {
                wbprop?: TypeOrArray<"siteid" | "url">;
            }
        }

        namespace Query.CentralAuth {
            interface WikiSets extends Query {
                wsfrom?: string;
                wsprop?: TypeOrArray<"type" | "wikisincluded" | "wikisnotincluded">;
                wslimit?: Limit;
                wsorderbyname?: boolean;
            }
        }
    }
}

/** @deprecated Use {@link mw.Api.Params.AbuseFilter.CheckMatch} instead */
export type AbuseFilterApiCheckMatch = mw.Api.Params.AbuseFilter.CheckMatch;
/** @deprecated Use {@link mw.Api.Params.AbuseFilter.CheckSyntax} instead */
export type AbuseFilterApiCheckSyntax = mw.Api.Params.AbuseFilter.CheckSyntax;
/** @deprecated Use {@link mw.Api.Params.AbuseFilter.EvalExpression} instead */
export type AbuseFilterApiEvalExpression = mw.Api.Params.AbuseFilter.EvalExpression;
/** @deprecated Use {@link mw.Api.Params.AbuseFilter.UnblockAutopromote} instead */
export type AbuseFilterApiUnblockAutopromote = mw.Api.Params.AbuseFilter.UnblockAutopromote;
/** @deprecated Use {@link mw.Api.Params.AbuseFilter.AbuseLogPrivateDetails} instead */
export type AbuseFilterApiAbuseLogPrivateDetails = mw.Api.Params.AbuseFilter.AbuseLogPrivateDetails;
/** @deprecated Use {@link mw.Api.Params.AcquireTempUserName} instead */
export type ApiAcquireTempUserName = mw.Api.Params.AcquireTempUserName;
/** @deprecated Use {@link mw.Api.Params.AntiSpoof} instead */
export type AntiSpoofApiAntiSpoof = mw.Api.Params.AntiSpoof;
/** @deprecated Use {@link mw.Api.Params.Block} instead */
export type ApiBlock = mw.Api.Params.Block;
/** @deprecated Use {@link mw.Api.Params.BounceHandler} instead */
export type BounceHandlerApiBounceHandler = mw.Api.Params.BounceHandler;
/** @deprecated Use {@link mw.Api.Params.CategoryTree} instead */
export type CategoryTreeApiCategoryTree = mw.Api.Params.CategoryTree;
/** @deprecated Use {@link mw.Api.Params.CentralAuth.CentralAuthToken} instead */
export type CentralAuthApiCentralAuthToken = mw.Api.Params.CentralAuth.CentralAuthToken;
/** @deprecated Use {@link mw.Api.Params.CentralNoticeCdnCacheUpdateBanner} instead */
export type ApiCentralNoticeCdnCacheUpdateBanner = mw.Api.Params.CentralNoticeCdnCacheUpdateBanner;
/** @deprecated Use {@link mw.Api.Params.CentralNoticeChoiceData} instead */
export type ApiCentralNoticeChoiceData = mw.Api.Params.CentralNoticeChoiceData;
/** @deprecated Use {@link mw.Api.Params.CentralNoticeQueryCampaign} instead */
export type ApiCentralNoticeQueryCampaign = mw.Api.Params.CentralNoticeQueryCampaign;
/** @deprecated Use {@link mw.Api.Params.ChangeAuthenticationData} instead */
export type ApiChangeAuthenticationData = mw.Api.Params.ChangeAuthenticationData;
/** @deprecated Use {@link mw.Api.Params.ChangeContentModel} instead */
export type ApiChangeContentModel = mw.Api.Params.ChangeContentModel;
/** @deprecated Use {@link mw.Api.Params.CheckToken} instead */
export type ApiCheckToken = mw.Api.Params.CheckToken;
/** @deprecated Use {@link mw.Api.Params.CirrusSearch.ConfigDump} instead */
export type CirrusSearchApiConfigDump = mw.Api.Params.CirrusSearch.ConfigDump;
/** @deprecated Use {@link mw.Api.Params.CirrusSearch.MappingDump} instead */
export type CirrusSearchApiMappingDump = mw.Api.Params.CirrusSearch.MappingDump;
/** @deprecated Use {@link mw.Api.Params.CirrusSearch.ProfilesDump} instead */
export type CirrusSearchApiProfilesDump = mw.Api.Params.CirrusSearch.ProfilesDump;
/** @deprecated Use {@link mw.Api.Params.CirrusSearch.SettingsDump} instead */
export type CirrusSearchApiSettingsDump = mw.Api.Params.CirrusSearch.SettingsDump;
/** @deprecated Use {@link mw.Api.Params.ClearHasMsg} instead */
export type ApiClearHasMsg = mw.Api.Params.ClearHasMsg;
/** @deprecated Use {@link mw.Api.Params.ClientLogin} instead */
export type ApiClientLogin = mw.Api.Params.ClientLogin;
/** @deprecated Use {@link mw.Api.Params.Collection} instead */
export type CollectionApiCollection = mw.Api.Params.Collection;
/** @deprecated Use {@link mw.Api.Params.ComparePages} instead */
export type ApiComparePages = mw.Api.Params.ComparePages;
/** @deprecated Use {@link mw.Api.Params.AMCreateAccount} instead */
export type ApiAMCreateAccount = mw.Api.Params.AMCreateAccount;
/** @deprecated Use {@link mw.Api.Params.CentralAuth.CreateLocalAccount} instead */
export type CentralAuthApiCreateLocalAccount = mw.Api.Params.CentralAuth.CreateLocalAccount;
/** @deprecated Use {@link mw.Api.Params.CSPReport} instead */
export type ApiCSPReport = mw.Api.Params.CSPReport;
/** @deprecated Use {@link mw.Api.Params.ContentTranslation.Action.ContentTranslationDelete} instead */
export type ContentTranslationActionApiContentTranslationDelete = mw.Api.Params.ContentTranslation.Action.ContentTranslationDelete;
/** @deprecated Use {@link mw.Api.Params.ContentTranslation.Action.ContentTranslationPublish} instead */
export type ContentTranslationActionApiContentTranslationPublish = mw.Api.Params.ContentTranslation.Action.ContentTranslationPublish;
/** @deprecated Use {@link mw.Api.Params.ContentTranslation.Action.SectionTranslationPublish} instead */
export type ContentTranslationActionApiSectionTranslationPublish = mw.Api.Params.ContentTranslation.Action.SectionTranslationPublish;
/** @deprecated Use {@link mw.Api.Params.ContentTranslation.Action.ContentTranslationSave} instead */
export type ContentTranslationActionApiContentTranslationSave = mw.Api.Params.ContentTranslation.Action.ContentTranslationSave;
/** @deprecated Use {@link mw.Api.Params.ContentTranslation.Action.ContentTranslationSplit} instead */
export type ContentTranslationActionApiContentTranslationSplit = mw.Api.Params.ContentTranslation.Action.ContentTranslationSplit;
/** @deprecated Use {@link mw.Api.Params.ContentTranslation.Action.ContentTranslationSuggestionList} instead */
export type ContentTranslationActionApiContentTranslationSuggestionList = mw.Api.Params.ContentTranslation.Action.ContentTranslationSuggestionList;
/** @deprecated Use {@link mw.Api.Params.ContentTranslation.Action.ContentTranslationToken} instead */
export type ContentTranslationActionApiContentTranslationToken = mw.Api.Params.ContentTranslation.Action.ContentTranslationToken;
/** @deprecated Use {@link mw.Api.Params.Delete} instead */
export type ApiDelete = mw.Api.Params.Delete;
/** @deprecated Use {@link mw.Api.Params.CentralAuth.DeleteGlobalAccount} instead */
export type CentralAuthApiDeleteGlobalAccount = mw.Api.Params.CentralAuth.DeleteGlobalAccount;
/** @deprecated Use {@link mw.Api.Params.DiscussionTools.DiscussionToolsCompare} instead */
export type DiscussionToolsApiDiscussionToolsCompare = mw.Api.Params.DiscussionTools.DiscussionToolsCompare;
/** @deprecated Use {@link mw.Api.Params.DiscussionTools.DiscussionToolsEdit} instead */
export type DiscussionToolsApiDiscussionToolsEdit = mw.Api.Params.DiscussionTools.DiscussionToolsEdit;
/** @deprecated Use {@link mw.Api.Params.DiscussionTools.DiscussionToolsFindComment} instead */
export type DiscussionToolsApiDiscussionToolsFindComment = mw.Api.Params.DiscussionTools.DiscussionToolsFindComment;
/** @deprecated Use {@link mw.Api.Params.DiscussionTools.DiscussionToolsGetSubscriptions} instead */
export type DiscussionToolsApiDiscussionToolsGetSubscriptions = mw.Api.Params.DiscussionTools.DiscussionToolsGetSubscriptions;
/** @deprecated Use {@link mw.Api.Params.DiscussionTools.DiscussionToolsPageInfo} instead */
export type DiscussionToolsApiDiscussionToolsPageInfo = mw.Api.Params.DiscussionTools.DiscussionToolsPageInfo;
/** @deprecated Use {@link mw.Api.Params.DiscussionTools.DiscussionToolsPreview} instead */
export type DiscussionToolsApiDiscussionToolsPreview = mw.Api.Params.DiscussionTools.DiscussionToolsPreview;
/** @deprecated Use {@link mw.Api.Params.DiscussionTools.DiscussionToolsSubscribe} instead */
export type DiscussionToolsApiDiscussionToolsSubscribe = mw.Api.Params.DiscussionTools.DiscussionToolsSubscribe;
/** @deprecated Use {@link mw.Api.Params.Notifications.EchoMarkRead} instead */
export type NotificationsApiEchoMarkRead = mw.Api.Params.Notifications.EchoMarkRead;
/** @deprecated Use {@link mw.Api.Params.Notifications.EchoMarkSeen} instead */
export type NotificationsApiEchoMarkSeen = mw.Api.Params.Notifications.EchoMarkSeen;
/** @deprecated Use {@link mw.Api.Params.Notifications.EchoMute} instead */
export type NotificationsApiEchoMute = mw.Api.Params.Notifications.EchoMute;
/** @deprecated Use {@link mw.Api.Params.Notifications.Push.EchoPushSubscriptions} instead */
export type NotificationsPushApiEchoPushSubscriptions = mw.Api.Params.Notifications.Push.EchoPushSubscriptions;
/** @deprecated Use {@link mw.Api.Params.EditPage} instead */
export type ApiEditPage = mw.Api.Params.EditPage;
/** @deprecated Use {@link mw.Api.Params.VisualEditor.EditCheck.EditCheckReferenceUrl} instead */
export type VisualEditorEditCheckApiEditCheckReferenceUrl = mw.Api.Params.VisualEditor.EditCheck.EditCheckReferenceUrl;
/** @deprecated Use {@link mw.Api.Params.MassMessage.EditMassMessageList} instead */
export type MediaWikiMassMessageApiEditMassMessageList = mw.Api.Params.MassMessage.EditMassMessageList;
/** @deprecated Use {@link mw.Api.Params.EmailUser} instead */
export type ApiEmailUser = mw.Api.Params.EmailUser;
/** @deprecated Use {@link mw.Api.Params.ExpandTemplates} instead */
export type ApiExpandTemplates = mw.Api.Params.ExpandTemplates;
/** @deprecated Use {@link mw.Api.Params.ConfirmEdit.FancyCaptcha.FancyCaptchaReload} instead */
export type ConfirmEditFancyCaptchaApiFancyCaptchaReload = mw.Api.Params.ConfirmEdit.FancyCaptcha.FancyCaptchaReload;
/** @deprecated Use {@link mw.Api.Params.FeaturedFeeds} instead */
export type FeaturedFeedsApiFeaturedFeeds = mw.Api.Params.FeaturedFeeds;
/** @deprecated Use {@link mw.Api.Params.FeedContributions} instead */
export type ApiFeedContributions = mw.Api.Params.FeedContributions;
/** @deprecated Use {@link mw.Api.Params.FeedRecentChanges} instead */
export type ApiFeedRecentChanges = mw.Api.Params.FeedRecentChanges;
/** @deprecated Use {@link mw.Api.Params.FeedWatchlist} instead */
export type ApiFeedWatchlist = mw.Api.Params.FeedWatchlist;
/** @deprecated Use {@link mw.Api.Params.FileRevert} instead */
export type ApiFileRevert = mw.Api.Params.FileRevert;
/** @deprecated Use {@link mw.Api.Params.Flow} instead */
export type FlowApiFlow = mw.Api.Params.Flow;
/** @deprecated Use {@link mw.Api.Params.Flow.ParsoidUtilsFlow} instead */
export type FlowApiParsoidUtilsFlow = mw.Api.Params.Flow.ParsoidUtilsFlow;
/** @deprecated Use {@link mw.Api.Params.Thanks.FlowThank} instead */
export type ThanksApiFlowThank = mw.Api.Params.Thanks.FlowThank;
/** @deprecated Use {@link mw.Api.Params.GlobalBlocking.GlobalBlock} instead */
export type GlobalBlockingApiGlobalBlock = mw.Api.Params.GlobalBlocking.GlobalBlock;
/** @deprecated Use {@link mw.Api.Params.GlobalPreferences.GlobalPreferenceOverrides} instead */
export type GlobalPreferencesApiGlobalPreferenceOverrides = mw.Api.Params.GlobalPreferences.GlobalPreferenceOverrides;
/** @deprecated Use {@link mw.Api.Params.GlobalPreferences} instead */
export type GlobalPreferencesApiGlobalPreferences = mw.Api.Params.GlobalPreferences;
/** @deprecated Use {@link mw.Api.Params.CentralAuth.GlobalUserRights} instead */
export type CentralAuthApiGlobalUserRights = mw.Api.Params.CentralAuth.GlobalUserRights;
/** @deprecated Use {@link mw.Api.Params.GrowthExperiments.InvalidateImageRecommendation} instead */
export type GrowthExperimentsApiInvalidateImageRecommendation = mw.Api.Params.GrowthExperiments.InvalidateImageRecommendation;
/** @deprecated Use {@link mw.Api.Params.GrowthExperiments.InvalidatePersonalizedPraiseSuggestion} instead */
export type GrowthExperimentsApiInvalidatePersonalizedPraiseSuggestion = mw.Api.Params.GrowthExperiments.InvalidatePersonalizedPraiseSuggestion;
/** @deprecated Use {@link mw.Api.Params.GrowthExperiments.ManageMentorList} instead */
export type GrowthExperimentsApiManageMentorList = mw.Api.Params.GrowthExperiments.ManageMentorList;
/** @deprecated Use {@link mw.Api.Params.GrowthExperiments.MentorDashboardUpdateData} instead */
export type GrowthExperimentsApiMentorDashboardUpdateData = mw.Api.Params.GrowthExperiments.MentorDashboardUpdateData;
/** @deprecated Use {@link mw.Api.Params.GrowthExperiments.SetMenteeStatus} instead */
export type GrowthExperimentsApiSetMenteeStatus = mw.Api.Params.GrowthExperiments.SetMenteeStatus;
/** @deprecated Use {@link mw.Api.Params.GrowthExperiments.SetMentor} instead */
export type GrowthExperimentsApiSetMentor = mw.Api.Params.GrowthExperiments.SetMentor;
/** @deprecated Use {@link mw.Api.Params.GrowthExperiments.StarMentee} instead */
export type GrowthExperimentsApiStarMentee = mw.Api.Params.GrowthExperiments.StarMentee;
/** @deprecated Use {@link mw.Api.Params.Help} instead */
export type ApiHelp = mw.Api.Params.Help;
/** @deprecated Use {@link mw.Api.Params.GrowthExperiments.HelpPanelPostQuestion} instead */
export type GrowthExperimentsApiHelpPanelPostQuestion = mw.Api.Params.GrowthExperiments.HelpPanelPostQuestion;
/** @deprecated Use {@link mw.Api.Params.GrowthExperiments.QuestionStore} instead */
export type GrowthExperimentsApiQuestionStore = mw.Api.Params.GrowthExperiments.QuestionStore;
/** @deprecated Use {@link mw.Api.Params.Disabled} instead */
export type ApiDisabled = mw.Api.Params.Disabled;
/** @deprecated Use {@link mw.Api.Params.Import} instead */
export type ApiImport = mw.Api.Params.Import;
/** @deprecated Use {@link mw.Api.Params.Format.Json} / {@link mw.Api.Params.Format.JsonFM} / {@link mw.Api.Params.Format.RawFM} instead */
export type ApiFormatJson = mw.Api.Params.Format.Json;
/** @deprecated Use {@link mw.Api.Params.JsonConfig.JC} instead */
export type JsonConfigJCApi = mw.Api.Params.JsonConfig.JC;
/** @deprecated Use {@link mw.Api.Params.JsonConfig.JCData} instead */
export type JsonConfigJCDataApi = mw.Api.Params.JsonConfig.JCData;
/** @deprecated Use {@link mw.Api.Params.UniversalLanguageSelector.LanguageSearch} instead */
export type UniversalLanguageSelectorApiLanguageSearch = mw.Api.Params.UniversalLanguageSelector.LanguageSearch;
/** @deprecated Use {@link mw.Api.Params.LinkAccount} instead */
export type ApiLinkAccount = mw.Api.Params.LinkAccount;
/** @deprecated Use {@link mw.Api.Params.Login} instead */
export type ApiLogin = mw.Api.Params.Login;
/** @deprecated Use {@link mw.Api.Params.Logout} instead */
export type ApiLogout = mw.Api.Params.Logout;
/** @deprecated Use {@link mw.Api.Params.ManageTags} instead */
export type ApiManageTags = mw.Api.Params.ManageTags;
/** @deprecated Use {@link mw.Api.Params.MassMessage} instead */
export type MediaWikiMassMessageApiMassMessage = mw.Api.Params.MassMessage;
/** @deprecated Use {@link mw.Api.Params.MergeHistory} instead */
export type ApiMergeHistory = mw.Api.Params.MergeHistory;
/** @deprecated Use {@link mw.Api.Params.Move} instead */
export type ApiMove = mw.Api.Params.Move;
/** @deprecated Use {@link mw.Api.Params.Format.None} instead */
export type ApiFormatNone = mw.Api.Params.Format.None;
/** @deprecated Use {@link mw.Api.Params.OATHAuth.OATHValidate} instead */
export type OATHAuthApiModuleApiOATHValidate = mw.Api.Params.OATHAuth.OATHValidate;
/** @deprecated Use {@link mw.Api.Params.OpenSearch} instead */
export type ApiOpenSearch = mw.Api.Params.OpenSearch;
/** @deprecated Use {@link mw.Api.Params.Options} instead */
export type ApiOptions = mw.Api.Params.Options;
/** @deprecated Use {@link mw.Api.Params.ParamInfo} instead */
export type ApiParamInfo = mw.Api.Params.ParamInfo;
/** @deprecated Use {@link mw.Api.Params.Parse} instead */
export type ApiParse = mw.Api.Params.Parse;
/** @deprecated Use {@link mw.Api.Params.ParserMigration} instead */
export type ParserMigrationApiParserMigration = mw.Api.Params.ParserMigration;
/** @deprecated Use {@link mw.Api.Params.Patrol} instead */
export type ApiPatrol = mw.Api.Params.Patrol;
/** @deprecated Use {@link mw.Api.Params.Format.Php} / {@link mw.Api.Params.Format.PhpFM} instead */
export type ApiFormatPhp = mw.Api.Params.Format.Php;
/** @deprecated Use {@link mw.Api.Params.Protect} instead */
export type ApiProtect = mw.Api.Params.Protect;
/** @deprecated Use {@link mw.Api.Params.Purge} instead */
export type ApiPurge = mw.Api.Params.Purge;
/** @deprecated Use {@link mw.Api.Params.Query} instead */
export type ApiQuery = mw.Api.Params.Query;
/** @deprecated Use {@link mw.Api.Params.ReadingLists} instead */
export type ReadingListsApiReadingLists = mw.Api.Params.ReadingLists;
/** @deprecated Use {@link mw.Api.Params.RemoveAuthenticationData} / {@link mw.Api.Params.UnlinkAccount} instead */
export type ApiRemoveAuthenticationData = mw.Api.Params.RemoveAuthenticationData;
/** @deprecated Use {@link mw.Api.Params.ResetPassword} instead */
export type ApiResetPassword = mw.Api.Params.ResetPassword;
/** @deprecated Use {@link mw.Api.Params.RevisionDelete} instead */
export type ApiRevisionDelete = mw.Api.Params.RevisionDelete;
/** @deprecated Use {@link mw.Api.Params.Rollback} instead */
export type ApiRollback = mw.Api.Params.Rollback;
/** @deprecated Use {@link mw.Api.Params.Rsd} instead */
export type ApiRsd = mw.Api.Params.Rsd;
/** @deprecated Use {@link mw.Api.Params.Kartographer.SanitizeMapData} instead */
export type KartographerApiSanitizeMapData = mw.Api.Params.Kartographer.SanitizeMapData;
/** @deprecated Use {@link mw.Api.Params.Scribunto.ScribuntoConsole} instead */
export type ScribuntoApiScribuntoConsole = mw.Api.Params.Scribunto.ScribuntoConsole;
/** @deprecated Use {@link mw.Api.Params.SecurePoll.SecurePollAuth} instead */
export type SecurePollApiSecurePollAuth = mw.Api.Params.SecurePoll.SecurePollAuth;
/** @deprecated Use {@link mw.Api.Params.CentralAuth.SetGlobalAccountStatus} instead */
export type CentralAuthApiSetGlobalAccountStatus = mw.Api.Params.CentralAuth.SetGlobalAccountStatus;
/** @deprecated Use {@link mw.Api.Params.SetNotificationTimestamp} instead */
export type ApiSetNotificationTimestamp = mw.Api.Params.SetNotificationTimestamp;
/** @deprecated Use {@link mw.Api.Params.SetPageLanguage} instead */
export type ApiSetPageLanguage = mw.Api.Params.SetPageLanguage;
/** @deprecated Use {@link mw.Api.Params.UrlShortener.ShortenUrl} instead */
export type UrlShortenerApiShortenUrl = mw.Api.Params.UrlShortener.ShortenUrl;
/** @deprecated Use {@link mw.Api.Params.SiteMatrix} instead */
export type SiteMatrixApiSiteMatrix = mw.Api.Params.SiteMatrix;
/** @deprecated Use {@link mw.Api.Params.SpamBlacklist} instead */
export type SpamBlacklistApiSpamBlacklist = mw.Api.Params.SpamBlacklist;
/** @deprecated Use {@link mw.Api.Params.StashEdit} instead */
export type ApiStashEdit = mw.Api.Params.StashEdit;
/** @deprecated Use {@link mw.Api.Params.EventStreamConfig.StreamConfigs} instead */
export type EventStreamConfigApiStreamConfigs = mw.Api.Params.EventStreamConfig.StreamConfigs;
/** @deprecated Use {@link mw.Api.Params.SecurePoll.StrikeVote} instead */
export type SecurePollApiStrikeVote = mw.Api.Params.SecurePoll.StrikeVote;
/** @deprecated Use {@link mw.Api.Params.ContentTranslation.Action.SectionTranslationDelete} instead */
export type ContentTranslationActionApiSectionTranslationDelete = mw.Api.Params.ContentTranslation.Action.SectionTranslationDelete;
/** @deprecated Use {@link mw.Api.Params.ContentTranslation.Action.SectionTranslationSave} instead */
export type ContentTranslationActionApiSectionTranslationSave = mw.Api.Params.ContentTranslation.Action.SectionTranslationSave;
/** @deprecated Use {@link mw.Api.Params.Tag} instead */
export type ApiTag = mw.Api.Params.Tag;
/** @deprecated Use {@link mw.Api.Params.TemplateData} instead */
export type TemplateDataApiTemplateData = mw.Api.Params.TemplateData;
/** @deprecated Use {@link mw.Api.Params.Thanks.CoreThank} instead */
export type ThanksApiCoreThank = mw.Api.Params.Thanks.CoreThank;
/** @deprecated Use {@link mw.Api.Params.TimedMediaHandler.TimedText} instead */
export type MediaWikiTimedMediaHandlerApiTimedText = mw.Api.Params.TimedMediaHandler.TimedText;
/** @deprecated Use {@link mw.Api.Params.TitleBlacklist} instead */
export type TitleBlacklistApiTitleBlacklist = mw.Api.Params.TitleBlacklist;
/** @deprecated Use {@link mw.Api.Params.TorBlock} instead */
export type TorBlockApiTorBlock = mw.Api.Params.TorBlock;
/** @deprecated Use {@link mw.Api.Params.TimedMediaHandler.TranscodeReset} instead */
export type MediaWikiTimedMediaHandlerApiTranscodeReset = mw.Api.Params.TimedMediaHandler.TranscodeReset;
/** @deprecated Use {@link mw.Api.Params.UniversalLanguageSelector.ULSLocalization} instead */
export type UniversalLanguageSelectorApiULSLocalization = mw.Api.Params.UniversalLanguageSelector.ULSLocalization;
/** @deprecated Use {@link mw.Api.Params.UniversalLanguageSelector.ULSSetLanguage} instead */
export type UniversalLanguageSelectorApiULSSetLanguage = mw.Api.Params.UniversalLanguageSelector.ULSSetLanguage;
/** @deprecated Use {@link mw.Api.Params.Unblock} instead */
export type ApiUnblock = mw.Api.Params.Unblock;
/** @deprecated Use {@link mw.Api.Params.Undelete} instead */
export type ApiUndelete = mw.Api.Params.Undelete;
/** @deprecated Use {@link mw.Api.Params.Upload} instead */
export type ApiUpload = mw.Api.Params.Upload;
/** @deprecated Use {@link mw.Api.Params.Userrights} instead */
export type ApiUserrights = mw.Api.Params.Userrights;
/** @deprecated Use {@link mw.Api.Params.ValidatePassword} instead */
export type ApiValidatePassword = mw.Api.Params.ValidatePassword;
/** @deprecated Use {@link mw.Api.Params.VisualEditor} instead */
export type VisualEditorApiVisualEditor = mw.Api.Params.VisualEditor;
/** @deprecated Use {@link mw.Api.Params.VisualEditor.VisualEditorEdit} instead */
export type VisualEditorApiVisualEditorEdit = mw.Api.Params.VisualEditor.VisualEditorEdit;
/** @deprecated Use {@link mw.Api.Params.Watch} instead */
export type ApiWatch = mw.Api.Params.Watch;
/** @deprecated Use {@link mw.Api.Params.MobileFrontend.WebappManifest} instead */
export type MobileFrontendApiWebappManifest = mw.Api.Params.MobileFrontend.WebappManifest;
/** @deprecated Use {@link mw.Api.Params.WebAuthn} instead */
export type WebAuthnApiWebAuthn = mw.Api.Params.WebAuthn;
/** @deprecated Use {@link mw.Api.Params.WikimediaEvents.WikimediaEventsBlockedEdit} instead */
export type WikimediaEventsApiWikimediaEventsBlockedEdit = mw.Api.Params.WikimediaEvents.WikimediaEventsBlockedEdit;
/** @deprecated Use {@link mw.Api.Params.Format.Xml} / {@link mw.Api.Params.Format.XmlFM} instead */
export type ApiFormatXml = mw.Api.Params.Format.Xml;
/** @deprecated Use {@link mw.Api.Params.Query.AbuseFilter.AbuseFilters} instead */
export type AbuseFilterApiQueryAbuseFilters = mw.Api.Params.Query.AbuseFilter.AbuseFilters;
/** @deprecated Use {@link mw.Api.Params.Query.AbuseFilter.AbuseLog} instead */
export type AbuseFilterApiQueryAbuseLog = mw.Api.Params.Query.AbuseFilter.AbuseLog;
/** @deprecated Use {@link mw.Api.Params.Query.AllCategories} instead */
export type ApiQueryAllCategories = mw.Api.Params.Query.AllCategories;
/** @deprecated Use {@link mw.Api.Params.Query.AllDeletedRevisions} instead */
export type ApiQueryAllDeletedRevisions = mw.Api.Params.Query.AllDeletedRevisions;
/** @deprecated Use {@link mw.Api.Params.Query.AllFileUsages} / {@link mw.Api.Params.Query.AllLinks} / {@link mw.Api.Params.Query.AllRedirects} / {@link mw.Api.Params.Query.AllTransclusions} instead */
export type ApiQueryAllLinks = mw.Api.Params.Query.AllFileUsages;
/** @deprecated Use {@link mw.Api.Params.Query.AllImages} instead */
export type ApiQueryAllImages = mw.Api.Params.Query.AllImages;
/** @deprecated Use {@link mw.Api.Params.Query.AllMessages} instead */
export type ApiQueryAllMessages = mw.Api.Params.Query.AllMessages;
/** @deprecated Use {@link mw.Api.Params.Query.AllPages} instead */
export type ApiQueryAllPages = mw.Api.Params.Query.AllPages;
/** @deprecated Use {@link mw.Api.Params.Query.AllRevisions} instead */
export type ApiQueryAllRevisions = mw.Api.Params.Query.AllRevisions;
/** @deprecated Use {@link mw.Api.Params.Query.AllUsers} instead */
export type ApiQueryAllUsers = mw.Api.Params.Query.AllUsers;
/** @deprecated Use {@link mw.Api.Params.Query.AuthManagerInfo} instead */
export type ApiQueryAuthManagerInfo = mw.Api.Params.Query.AuthManagerInfo;
/** @deprecated Use {@link mw.Api.Params.Query.Babel} instead */
export type MediaWikiBabelApiQueryBabel = mw.Api.Params.Query.Babel;
/** @deprecated Use {@link mw.Api.Params.Query.Backlinks} / {@link mw.Api.Params.Query.EmbeddedIn} / {@link mw.Api.Params.Query.ImageUsage} instead */
export type ApiQueryBacklinks = mw.Api.Params.Query.Backlinks;
/** @deprecated Use {@link mw.Api.Params.Query.BetaFeatures} instead */
export type BetaFeaturesApiQueryBetaFeatures = mw.Api.Params.Query.BetaFeatures;
/** @deprecated Use {@link mw.Api.Params.Query.Blocks} instead */
export type ApiQueryBlocks = mw.Api.Params.Query.Blocks;
/** @deprecated Use {@link mw.Api.Params.Query.Categories} instead */
export type ApiQueryCategories = mw.Api.Params.Query.Categories;
/** @deprecated Use {@link mw.Api.Params.Query.CategoryInfo} instead */
export type ApiQueryCategoryInfo = mw.Api.Params.Query.CategoryInfo;
/** @deprecated Use {@link mw.Api.Params.Query.CategoryMembers} instead */
export type ApiQueryCategoryMembers = mw.Api.Params.Query.CategoryMembers;
/** @deprecated Use {@link mw.Api.Params.Query.CentralNoticeActiveCampaigns} instead */
export type ApiCentralNoticeQueryActiveCampaigns = mw.Api.Params.Query.CentralNoticeActiveCampaigns;
/** @deprecated Use {@link mw.Api.Params.Query.CentralNoticeLogs} instead */
export type ApiCentralNoticeLogs = mw.Api.Params.Query.CentralNoticeLogs;
/** @deprecated Use {@link mw.Api.Params.Query.CheckUser} instead */
export type MediaWikiCheckUserApiQueryCheckUser = mw.Api.Params.Query.CheckUser;
/** @deprecated Use {@link mw.Api.Params.Query.CheckUser.CheckUserLog} instead */
export type MediaWikiCheckUserApiQueryCheckUserLog = mw.Api.Params.Query.CheckUser.CheckUserLog;
/** @deprecated Use {@link mw.Api.Params.Query.CirrusSearch.BuildDocument} instead */
export type CirrusSearchApiQueryBuildDocument = mw.Api.Params.Query.CirrusSearch.BuildDocument;
/** @deprecated Use {@link mw.Api.Params.Query.CirrusSearch.CompSuggestBuildDoc} instead */
export type CirrusSearchApiQueryCompSuggestBuildDoc = mw.Api.Params.Query.CirrusSearch.CompSuggestBuildDoc;
/** @deprecated Use {@link mw.Api.Params.Query.CirrusSearch.CirrusDoc} instead */
export type CirrusSearchApiQueryCirrusDoc = mw.Api.Params.Query.CirrusSearch.CirrusDoc;
/** @deprecated Use {@link mw.Api.Params.Query.ContentTranslation.Action} instead */
export type ContentTranslationActionApiQueryContentTranslation = mw.Api.Params.Query.ContentTranslation.Action;
/** @deprecated Use {@link mw.Api.Params.Query.ContentTranslation.Action.ContentTranslationCorpora} instead */
export type ContentTranslationActionApiQueryContentTranslationCorpora = mw.Api.Params.Query.ContentTranslation.Action.ContentTranslationCorpora;
/** @deprecated Use {@link mw.Api.Params.Query.ContentTranslation.Action.ContentTranslationLanguageTrend} instead */
export type ContentTranslationActionApiQueryContentTranslationLanguageTrend = mw.Api.Params.Query.ContentTranslation.Action.ContentTranslationLanguageTrend;
/** @deprecated Use {@link mw.Api.Params.Query.ContentTranslation.Action.ContentTranslationStats} instead */
export type ContentTranslationActionApiQueryContentTranslationStats = mw.Api.Params.Query.ContentTranslation.Action.ContentTranslationStats;
/** @deprecated Use {@link mw.Api.Params.Query.ContentTranslation.Action.ContentTranslationSuggestions} instead */
export type ContentTranslationActionApiQueryContentTranslationSuggestions = mw.Api.Params.Query.ContentTranslation.Action.ContentTranslationSuggestions;
/** @deprecated Use {@link mw.Api.Params.Query.Contributors} instead */
export type ApiQueryContributors = mw.Api.Params.Query.Contributors;
/** @deprecated Use {@link mw.Api.Params.Query.GeoData.Coordinates} instead */
export type GeoDataApiQueryCoordinates = mw.Api.Params.Query.GeoData.Coordinates;
/** @deprecated Use {@link mw.Api.Params.Query.ContentTranslation.Action.DeletedTranslations} instead */
export type ContentTranslationActionApiQueryDeletedTranslations = mw.Api.Params.Query.ContentTranslation.Action.DeletedTranslations;
/** @deprecated Use {@link mw.Api.Params.Query.ContentTranslation.Action.PublishedTranslations} instead */
export type ContentTranslationActionApiQueryPublishedTranslations = mw.Api.Params.Query.ContentTranslation.Action.PublishedTranslations;
/** @deprecated Use {@link mw.Api.Params.Query.ContentTranslation.Action.TranslatorStats} instead */
export type ContentTranslationActionApiQueryTranslatorStats = mw.Api.Params.Query.ContentTranslation.Action.TranslatorStats;
/** @deprecated Use {@link mw.Api.Params.Query.DeletedRevisions} instead */
export type ApiQueryDeletedRevisions = mw.Api.Params.Query.DeletedRevisions;
/** @deprecated Use {@link mw.Api.Params.Query.Deletedrevs} instead */
export type ApiQueryDeletedrevs = mw.Api.Params.Query.Deletedrevs;
/** @deprecated Use {@link mw.Api.Params.Query.Wikibase.Description} instead */
export type WikibaseClientApiDescription = mw.Api.Params.Query.Wikibase.Description;
/** @deprecated Use {@link mw.Api.Params.Query.DuplicateFiles} instead */
export type ApiQueryDuplicateFiles = mw.Api.Params.Query.DuplicateFiles;
/** @deprecated Use {@link mw.Api.Params.Query.ExternalLinks} instead */
export type ApiQueryExternalLinks = mw.Api.Params.Query.ExternalLinks;
/** @deprecated Use {@link mw.Api.Params.Query.TextExtracts.Extracts} instead */
export type TextExtractsApiQueryExtracts = mw.Api.Params.Query.TextExtracts.Extracts;
/** @deprecated Use {@link mw.Api.Params.Query.ExtLinksUsage} instead */
export type ApiQueryExtLinksUsage = mw.Api.Params.Query.ExtLinksUsage;
/** @deprecated Use {@link mw.Api.Params.Query.FeatureUsage} instead */
export type ApiFeatureUsageApiQueryFeatureUsage = mw.Api.Params.Query.FeatureUsage;
/** @deprecated Use {@link mw.Api.Params.Query.Filearchive} instead */
export type ApiQueryFilearchive = mw.Api.Params.Query.Filearchive;
/** @deprecated Use {@link mw.Api.Params.Query.FileRepoInfo} instead */
export type ApiQueryFileRepoInfo = mw.Api.Params.Query.FileRepoInfo;
/** @deprecated Use {@link mw.Api.Params.Query.FileUsage} / {@link mw.Api.Params.Query.LinksHere} / {@link mw.Api.Params.Query.Redirects} / {@link mw.Api.Params.Query.TranscludedIn} instead */
export type ApiQueryBacklinksprop = mw.Api.Params.Query.FileUsage;
/** @deprecated Use {@link mw.Api.Params.Query.Flow.PropFlowInfo} instead */
export type FlowApiQueryPropFlowInfo = mw.Api.Params.Query.Flow.PropFlowInfo;
/** @deprecated Use {@link mw.Api.Params.Query.Gadgets.GadgetCategories} instead */
export type GadgetsApiQueryGadgetCategories = mw.Api.Params.Query.Gadgets.GadgetCategories;
/** @deprecated Use {@link mw.Api.Params.Query.Gadgets} instead */
export type GadgetsApiQueryGadgets = mw.Api.Params.Query.Gadgets;
/** @deprecated Use {@link mw.Api.Params.Query.GeoData.GeoSearchElastic} instead */
export type GeoDataApiQueryGeoSearchElastic = mw.Api.Params.Query.GeoData.GeoSearchElastic;
/** @deprecated Use {@link mw.Api.Params.Query.CentralAuth.GlobalAllUsers} instead */
export type CentralAuthApiQueryGlobalAllUsers = mw.Api.Params.Query.CentralAuth.GlobalAllUsers;
/** @deprecated Use {@link mw.Api.Params.Query.GlobalBlocking.GlobalBlocks} instead */
export type GlobalBlockingApiQueryGlobalBlocks = mw.Api.Params.Query.GlobalBlocking.GlobalBlocks;
/** @deprecated Use {@link mw.Api.Params.Query.CentralAuth.GlobalGroups} instead */
export type CentralAuthApiQueryGlobalGroups = mw.Api.Params.Query.CentralAuth.GlobalGroups;
/** @deprecated Use {@link mw.Api.Params.Query.GlobalPreferences} instead */
export type GlobalPreferencesApiQueryGlobalPreferences = mw.Api.Params.Query.GlobalPreferences;
/** @deprecated Use {@link mw.Api.Params.Query.CentralAuth.GlobalRenameStatus} instead */
export type CentralAuthApiQueryGlobalRenameStatus = mw.Api.Params.Query.CentralAuth.GlobalRenameStatus;
/** @deprecated Use {@link mw.Api.Params.Query.GlobalUsage} instead */
export type GlobalUsageApiQueryGlobalUsage = mw.Api.Params.Query.GlobalUsage;
/** @deprecated Use {@link mw.Api.Params.Query.CentralAuth.GlobalUserInfo} instead */
export type CentralAuthApiQueryGlobalUserInfo = mw.Api.Params.Query.CentralAuth.GlobalUserInfo;
/** @deprecated Use {@link mw.Api.Params.Query.GrowthExperiments.ImageSuggestionData} instead */
export type GrowthExperimentsApiQueryImageSuggestionData = mw.Api.Params.Query.GrowthExperiments.ImageSuggestionData;
/** @deprecated Use {@link mw.Api.Params.Query.GrowthExperiments.MenteeStatus} instead */
export type GrowthExperimentsApiQueryMenteeStatus = mw.Api.Params.Query.GrowthExperiments.MenteeStatus;
/** @deprecated Use {@link mw.Api.Params.Query.GrowthExperiments.MentorList} instead */
export type GrowthExperimentsApiQueryMentorList = mw.Api.Params.Query.GrowthExperiments.MentorList;
/** @deprecated Use {@link mw.Api.Params.Query.GrowthExperiments.MentorMentee} instead */
export type GrowthExperimentsApiQueryMentorMentee = mw.Api.Params.Query.GrowthExperiments.MentorMentee;
/** @deprecated Use {@link mw.Api.Params.Query.GrowthExperiments.MentorStatus} instead */
export type GrowthExperimentsApiQueryMentorStatus = mw.Api.Params.Query.GrowthExperiments.MentorStatus;
/** @deprecated Use {@link mw.Api.Params.Query.GrowthExperiments.NextSuggestedTaskType} instead */
export type GrowthExperimentsApiQueryNextSuggestedTaskType = mw.Api.Params.Query.GrowthExperiments.NextSuggestedTaskType;
/** @deprecated Use {@link mw.Api.Params.Query.GrowthExperiments.StarredMentees} instead */
export type GrowthExperimentsApiQueryStarredMentees = mw.Api.Params.Query.GrowthExperiments.StarredMentees;
/** @deprecated Use {@link mw.Api.Params.Query.GrowthExperiments.GrowthTasks} instead */
export type GrowthExperimentsApiQueryGrowthTasks = mw.Api.Params.Query.GrowthExperiments.GrowthTasks;
/** @deprecated Use {@link mw.Api.Params.Query.ImageInfo} instead */
export type ApiQueryImageInfo = mw.Api.Params.Query.ImageInfo;
/** @deprecated Use {@link mw.Api.Params.Query.Images} instead */
export type ApiQueryImages = mw.Api.Params.Query.Images;
/** @deprecated Use {@link mw.Api.Params.Query.Info} instead */
export type ApiQueryInfo = mw.Api.Params.Query.Info;
/** @deprecated Use {@link mw.Api.Params.Query.IWBacklinks} instead */
export type ApiQueryIWBacklinks = mw.Api.Params.Query.IWBacklinks;
/** @deprecated Use {@link mw.Api.Params.Query.IWLinks} instead */
export type ApiQueryIWLinks = mw.Api.Params.Query.IWLinks;
/** @deprecated Use {@link mw.Api.Params.Query.LangBacklinks} instead */
export type ApiQueryLangBacklinks = mw.Api.Params.Query.LangBacklinks;
/** @deprecated Use {@link mw.Api.Params.Query.LangLinks} instead */
export type ApiQueryLangLinks = mw.Api.Params.Query.LangLinks;
/** @deprecated Use {@link mw.Api.Params.Query.ContentTranslation.Action.LangLinksCount} instead */
export type ContentTranslationActionApiQueryLangLinksCount = mw.Api.Params.Query.ContentTranslation.Action.LangLinksCount;
/** @deprecated Use {@link mw.Api.Params.Query.Languageinfo} instead */
export type ApiQueryLanguageinfo = mw.Api.Params.Query.Languageinfo;
/** @deprecated Use {@link mw.Api.Params.Query.Links} / {@link mw.Api.Params.Query.Templates} instead */
export type ApiQueryLinks = mw.Api.Params.Query.Links;
/** @deprecated Use {@link mw.Api.Params.Query.Linter.LintErrors} instead */
export type MediaWikiLinterApiQueryLintErrors = mw.Api.Params.Query.Linter.LintErrors;
/** @deprecated Use {@link mw.Api.Params.Query.Linter.LinterStats} instead */
export type MediaWikiLinterApiQueryLinterStats = mw.Api.Params.Query.Linter.LinterStats;
/** @deprecated Use {@link mw.Api.Params.Query.LogEvents} instead */
export type ApiQueryLogEvents = mw.Api.Params.Query.LogEvents;
/** @deprecated Use {@link mw.Api.Params.Query.Kartographer.MapData} instead */
export type KartographerApiQueryMapData = mw.Api.Params.Query.Kartographer.MapData;
/** @deprecated Use {@link mw.Api.Params.Query.MassMessage.MMContent} instead */
export type MediaWikiMassMessageApiQueryMMContent = mw.Api.Params.Query.MassMessage.MMContent;
/** @deprecated Use {@link mw.Api.Params.Query.PageViewInfo.MostViewed} instead */
export type PageViewInfoApiQueryMostViewed = mw.Api.Params.Query.PageViewInfo.MostViewed;
/** @deprecated Use {@link mw.Api.Params.Query.MyStashedFiles} instead */
export type ApiQueryMyStashedFiles = mw.Api.Params.Query.MyStashedFiles;
/** @deprecated Use {@link mw.Api.Params.Query.Notifications.EchoNotifications} instead */
export type NotificationsApiEchoNotifications = mw.Api.Params.Query.Notifications.EchoNotifications;
/** @deprecated Use {@link mw.Api.Params.Query.OATHAuth.OATH} instead */
export type OATHAuthApiModuleApiQueryOATH = mw.Api.Params.Query.OATHAuth.OATH;
/** @deprecated Use {@link mw.Api.Params.Query.ORES.Hooks} instead */
export type ORESHooksApiQueryORES = mw.Api.Params.Query.ORES.Hooks;
/** @deprecated Use {@link mw.Api.Params.Query.PageAssessments} instead */
export type PageAssessmentsApiQueryPageAssessments = mw.Api.Params.Query.PageAssessments;
/** @deprecated Use {@link mw.Api.Params.Query.PageImages} instead */
export type PageImagesApiQueryPageImages = mw.Api.Params.Query.PageImages;
/** @deprecated Use {@link mw.Api.Params.Query.PagePropNames} instead */
export type ApiQueryPagePropNames = mw.Api.Params.Query.PagePropNames;
/** @deprecated Use {@link mw.Api.Params.Query.PageProps} instead */
export type ApiQueryPageProps = mw.Api.Params.Query.PageProps;
/** @deprecated Use {@link mw.Api.Params.Query.PagesWithProp} instead */
export type ApiQueryPagesWithProp = mw.Api.Params.Query.PagesWithProp;
/** @deprecated Use {@link mw.Api.Params.Query.Wikibase.PageTerms} instead */
export type WikibaseClientApiPageTerms = mw.Api.Params.Query.Wikibase.PageTerms;
/** @deprecated Use {@link mw.Api.Params.Query.PageViewInfo.PageViews} instead */
export type PageViewInfoApiQueryPageViews = mw.Api.Params.Query.PageViewInfo.PageViews;
/** @deprecated Use {@link mw.Api.Params.Query.PrefixSearch} instead */
export type ApiQueryPrefixSearch = mw.Api.Params.Query.PrefixSearch;
/** @deprecated Use {@link mw.Api.Params.Query.PageAssessments.ProjectPages} instead */
export type PageAssessmentsApiQueryProjectPages = mw.Api.Params.Query.PageAssessments.ProjectPages;
/** @deprecated Use {@link mw.Api.Params.Query.PageAssessments.Projects} instead */
export type PageAssessmentsApiQueryProjects = mw.Api.Params.Query.PageAssessments.Projects;
/** @deprecated Use {@link mw.Api.Params.Query.ProtectedTitles} instead */
export type ApiQueryProtectedTitles = mw.Api.Params.Query.ProtectedTitles;
/** @deprecated Use {@link mw.Api.Params.Query.QueryPage} instead */
export type ApiQueryQueryPage = mw.Api.Params.Query.QueryPage;
/** @deprecated Use {@link mw.Api.Params.Query.Random} instead */
export type ApiQueryRandom = mw.Api.Params.Query.Random;
/** @deprecated Use {@link mw.Api.Params.Query.ReadingLists.ReadingListEntries} instead */
export type ReadingListsApiQueryReadingListEntries = mw.Api.Params.Query.ReadingLists.ReadingListEntries;
/** @deprecated Use {@link mw.Api.Params.Query.ReadingLists} instead */
export type ReadingListsApiQueryReadingLists = mw.Api.Params.Query.ReadingLists;
/** @deprecated Use {@link mw.Api.Params.Query.RecentChanges} instead */
export type ApiQueryRecentChanges = mw.Api.Params.Query.RecentChanges;
/** @deprecated Use {@link mw.Api.Params.Query.Revisions} instead */
export type ApiQueryRevisions = mw.Api.Params.Query.Revisions;
/** @deprecated Use {@link mw.Api.Params.Query.Search} instead */
export type ApiQuerySearch = mw.Api.Params.Query.Search;
/** @deprecated Use {@link mw.Api.Params.Query.Siteinfo} instead */
export type ApiQuerySiteinfo = mw.Api.Params.Query.Siteinfo;
/** @deprecated Use {@link mw.Api.Params.Query.PageViewInfo.SiteViews} instead */
export type PageViewInfoApiQuerySiteViews = mw.Api.Params.Query.PageViewInfo.SiteViews;
/** @deprecated Use {@link mw.Api.Params.Query.StashImageInfo} instead */
export type ApiQueryStashImageInfo = mw.Api.Params.Query.StashImageInfo;
/** @deprecated Use {@link mw.Api.Params.Query.Tags} instead */
export type ApiQueryTags = mw.Api.Params.Query.Tags;
/** @deprecated Use {@link mw.Api.Params.Query.Tokens} instead */
export type ApiQueryTokens = mw.Api.Params.Query.Tokens;
/** @deprecated Use {@link mw.Api.Params.Query.TimedMediaHandler.TranscodeStatus} instead */
export type MediaWikiTimedMediaHandlerApiTranscodeStatus = mw.Api.Params.Query.TimedMediaHandler.TranscodeStatus;
/** @deprecated Use {@link mw.Api.Params.Query.Notifications.EchoUnreadNotificationPages} instead */
export type NotificationsApiEchoUnreadNotificationPages = mw.Api.Params.Query.Notifications.EchoUnreadNotificationPages;
/** @deprecated Use {@link mw.Api.Params.Query.UserContribs} instead */
export type ApiQueryUserContribs = mw.Api.Params.Query.UserContribs;
/** @deprecated Use {@link mw.Api.Params.Query.UserInfo} instead */
export type ApiQueryUserInfo = mw.Api.Params.Query.UserInfo;
/** @deprecated Use {@link mw.Api.Params.Query.Users} instead */
export type ApiQueryUsers = mw.Api.Params.Query.Users;
/** @deprecated Use {@link mw.Api.Params.Query.TimedMediaHandler.VideoInfo} instead */
export type MediaWikiTimedMediaHandlerApiQueryVideoInfo = mw.Api.Params.Query.TimedMediaHandler.VideoInfo;
/** @deprecated Use {@link mw.Api.Params.Query.Watchlist} instead */
export type ApiQueryWatchlist = mw.Api.Params.Query.Watchlist;
/** @deprecated Use {@link mw.Api.Params.Query.WatchlistRaw} instead */
export type ApiQueryWatchlistRaw = mw.Api.Params.Query.WatchlistRaw;
/** @deprecated Use {@link mw.Api.Params.Query.Wikibase.PropsEntityUsage} instead */
export type WikibaseClientApiPropsEntityUsage = mw.Api.Params.Query.Wikibase.PropsEntityUsage;
/** @deprecated Use {@link mw.Api.Params.Query.Wikibase.ListEntityUsage} instead */
export type WikibaseClientApiListEntityUsage = mw.Api.Params.Query.Wikibase.ListEntityUsage;
/** @deprecated Use {@link mw.Api.Params.Query.Wikibase.ClientInfo} instead */
export type WikibaseClientApiClientInfo = mw.Api.Params.Query.Wikibase.ClientInfo;
/** @deprecated Use {@link mw.Api.Params.Query.CentralAuth.WikiSets} instead */
export type CentralAuthApiQueryWikiSets = mw.Api.Params.Query.CentralAuth.WikiSets;

export {};
