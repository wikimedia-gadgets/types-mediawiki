
## 2.0.0

- Types for MediaWiki API parameters have been moved to [types-mediawiki-api](https://github.com/wikimedia-gadgets/types-mediawiki-api).
- Exports `ApiOptions`, `ForeignApiOptions`, `RestOptions`, and `UserInfo`, deprecated since 1.8.0, have been removed. Use the exposed `mw.Api.Options`, `mw.ForeignApi.Options`, `mw.Rest.Options`, and `mw.Api.UserInfo` instead.
- `mw.Api.Promise.Upload`, deprecated since 1.10.0, has been removed. Use `mw.Upload.Promise` or `mw.Upload.AbortablePromise` instead.
