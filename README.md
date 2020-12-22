[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# types-mediawiki
TypeScript definitions for MediaWiki JS interface.

This project is still a **work in progress**. 

The intention is to cover all functions in the `mw` global object, as well as the custom jQuery plugins used in MediaWiki core. The doc-comments (copied from MW source code) and the types of the function parameters and return values should be included, ideally.

----

TODO:
- [ ] Add doc comments for everything
- [x] Finish mw.Api
- [ ] Add jQuery plugins (use [@types/jquery](https://www.npmjs.com/package/@types/jquery) as a dependency)
- [ ] Publish on NPM.
