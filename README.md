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
"types": [
  "./node_modules/types-mediawiki",
]
```

You should be all set! `mw` will be available in the global scope. There is no need to put any import statements in the TypeScript source files. This package includes [@types/jquery](https://www.npmjs.com/package/@types/jquery) as a dependency, so you don't need to install that separately.

**If you find any errors or have suggestions for more specific typings, please open a PR or file an issue.**

----

TODO:
- Add doc comments for everything. Presently they are not included at all.
- Add types for more jQuery plugins.
