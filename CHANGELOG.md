
## 2.0.0

- Types for MediaWiki API parameters have been moved to [types-mediawiki-api](https://github.com/wikimedia-gadgets/types-mediawiki-api).
- Exports `ApiOptions`, `ForeignApiOptions`, `RestOptions`, and `UserInfo`, deprecated since 1.8.0, have been removed. Use the exposed `mw.Api.Options`, `mw.ForeignApi.Options`, `mw.Rest.Options`, and `mw.Api.UserInfo` instead.
- `mw.Api.Promise.Upload`, deprecated since 1.10.0, has been removed. Use `mw.Upload.Promise` or `mw.Upload.AbortablePromise` instead.
- Updated to MediaWiki 1.44:
  * Added `mw.Api.AbortController`.
  * Added `ajax.signal` and `userAgent` properties to `mw.Api` options.
  * Added `new mw.Api().prepareExtensibleApiRequest`.
  * Added an AJAX options argument to `new mw.Api().getToken`.
  * Added `mw.deflateAsync`.
  * Added `mw.hook(...).deprecate`.
  * Added `mw.language.convertGrammarMapping`.
  * Legacy token types are no longer deprecated.
  * `mw.deflate` is deprecated, in favor of `mw.deflateAsync`.
  * `mw.track` and `mw.trackSubscribe` accept multiple data arguments.
  * Updated Vue to 3.5.13.
- Parameter types of `apisandbox.formatRequest` hook callback have been narrowed.
