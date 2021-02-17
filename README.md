[![NPM version](https://img.shields.io/npm/v/types-mediawiki.svg)](https://www.npmjs.com/package/types-mediawiki)
![Linter](https://github.com/wikimedia-gadgets/types-mediawiki/workflows/Lint/badge.svg)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# types-mediawiki

TypeScript definitions for MediaWiki JS interface.

This package covers the functions in the `mw` global object, as well a few jQuery plugins used in MediaWiki core. This is a work in progress.

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

You should be all set! `mw` will be available in the global scope. There is no need to put any import statements in the TypeScript source files. This package includes [@types/jquery](https://www.npmjs.com/package/@types/jquery) as a dependency, so you don't need to install that separately.

**If you find any errors or have suggestions for more specific typings, please open a PR or file an issue.**

### Action API parameters

This package also provides typings for API request parameters for the [MediaWiki Action API](https://www.mediawiki.org/wiki/API:Main_page). API endpoints defined in MediaWiki core and by a number of extensions (the ones enabled on English Wikipedia) are covered. These aren't exported to the global scope, however. For usage, you need to import them. For example:

```ts
import type { ApiEditPageParams, ApiParseParams } from "types-mediawiki/api_params";
```

Since it is just a type import, it doesn't generate any JavaScript. Hence, such imports can also be used in non-modular applications.

---

TODO:

-   Add doc comments for everything. Presently they are not included at all.
-   Add types for more jQuery plugins.
