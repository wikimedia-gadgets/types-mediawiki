## Unreleased

-   Updated to MediaWiki 1.47:
    -   Added `blockIndefiniteExpiry` and `blockIndefiniteExpiryLabel` configuration values (see `mw.config`).
    -   Added `mw.tempUserCreated.showCondensedPopup()` function.
    -   `mw.util.addPortletLink()` accepts a portlet options object as single argument. The legacy signature is deprecated.
    -   Removed `labels` (3rd) optional parameter from `new mw.Api().watch()`.

## 2.1.0

-   Updated to MediaWiki 1.45:
    -   Added `notice` as valid type for `mw.notify()` options.
    -   Added `blockCIDRLimit`, `wgParsoidHtmlVersion` configuration values.
    -   Added `revisionsize` property to the `wgPageParseReport.limitreport` configuration value.
-   Updated to MediaWiki 1.46:
    -   Added `labels` (3rd) optional parameter to `new mw.Api().watch()`.
    -   Added `enableWatchlistLabels`, `indefBlockReasonOptions`, `SpecialEditWatchlistUrl`, `SpecialWatchlistLabelsTitle`, `SpecialWatchlistLabelsUrl`, `watchlistLabels`, `wgAutoCreateTempUserEnabled`, `wgCreateAccountUsernamePolicyPopoverMsgs`, and `wgErrorPageMessageKey` configuration values (see `mw.config`).
    -   Added `mw.special.block.doBlockParamsReady` and `mw.special.block.formReset` hooks (see `mw.hook`).
    -   Added `ariaText` to `mw.notification()` options.
    -   Added `mw.util.adjustThumbWidthForSteps()` function.
    -   Deprecated `foreignActionApi` argument from `mw.ForeignRest` constructor.
    -   Moved `parseDom` method of `mw.Message` from `mediawiki.jqueryMsg` ResourceLoader module to `mediawiki.base`.
    -   `mw.util.addSubtitle()` returns a boolean indicating whether the subtitle was updated.
-   Added missing configuration values defined in MediaWiki core.
-   Fixed configuration value types:
    -   `wgPageParseReport` and `wgRestrictionMove` can be undefined.
    -   `wgPostEdit` can have a `+tempuser` suffix.
    -   `wgUserRegistration` can be null.

## 2.0.0

-   Types for MediaWiki API parameters have been moved to [types-mediawiki-api](https://github.com/wikimedia-gadgets/types-mediawiki-api).
-   Exports `ApiOptions`, `ForeignApiOptions`, `RestOptions`, and `UserInfo`, deprecated since 1.8.0, have been removed. Use the exposed `mw.Api.Options`, `mw.ForeignApi.Options`, `mw.Rest.Options`, and `mw.Api.UserInfo` instead.
-   `mw.Api.Promise.Upload`, deprecated since 1.10.0, has been removed. Use `mw.Upload.Promise` or `mw.Upload.AbortablePromise` instead.
-   Updated to MediaWiki 1.44:
    -   Added `mw.Api.AbortController`.
    -   Added `ajax.signal` and `userAgent` properties to `mw.Api` options.
    -   Added `new mw.Api().prepareExtensibleApiRequest`.
    -   Added an AJAX options argument to `new mw.Api().getToken`.
    -   Added `mw.deflateAsync`.
    -   Added `mw.hook(...).deprecate`.
    -   Added `mw.language.convertGrammarMapping`.
    -   Legacy token types are no longer deprecated.
    -   `mw.deflate` is deprecated, in favor of `mw.deflateAsync`.
    -   `mw.track` and `mw.trackSubscribe` accept multiple data arguments.
    -   Updated Vue to 3.5.13.
-   Parameter types of `apisandbox.formatRequest` hook callback have been narrowed.
