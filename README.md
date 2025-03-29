[![NPM version](https://img.shields.io/npm/v/types-mediawiki.svg)](https://www.npmjs.com/package/types-mediawiki)
![Linter](https://github.com/wikimedia-gadgets/types-mediawiki/workflows/Lint/badge.svg)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# types-mediawiki

TypeScript definitions for MediaWiki JS interface.

This package covers the functions and classes in the `mw` global object, as well some jQuery plugins used in MediaWiki core. All commonly used parts of the interface are covered.

[`@types/jquery`](https://www.npmjs.com/package/@types/jquery) and [`@types/oojs-ui`](https://www.npmjs.com/package/@types/oojs-ui) from [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) are included as dependencies, so you don't need to install them separately.

[![Download stats](https://nodei.co/npm/types-mediawiki.png?downloads=true&downloadRank=true)](https://nodei.co/npm/types-mediawiki/)

## Usage

To use types from this package, run

```bash
npm i types-mediawiki
```

Edit your project's `tsconfig.json` file so that it includes

```
"include": [
  "./node_modules/types-mediawiki"
]
```

You should be all set! `mw` will be available in the global scope. There is no need to put any import statements in the TypeScript source files.

**If you find any errors or have suggestions for more specific typings, please open a PR or file an issue.**

### mw.config

Types for mw.config are included:

```ts
let NS = mw.config.get("wgNamespaceNumber"); // NS gets type number
let pageName = mw.config.get("wgPageName"); // pageName gets type string
```

mw.config entries added by MediaWiki extensions can also be used but their type is not known, so they need to be explicitly cast:

```ts
let namespaces = mw.config.get("pageTriageNamespaces") as number[];
```

(`mw.config.get('pageTriageNamespaces')` gets the type `unknown` without a cast.)

### MediaWiki API parameters

This package used to provide typings for API request parameters for the [MediaWiki Action API](https://www.mediawiki.org/wiki/Special:MyLanguage/API:Main_page) till v1.10.1. These have since been moved to a separate package, [types-mediawiki-api](https://github.com/wikimedia-gadgets/types-mediawiki-api).