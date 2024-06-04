// https://github.com/wikimedia-gadgets/types-mediawiki/issues/45
const api = new mw.Api();
api.postWithEditToken(
    api.assertCurrentUser({
        formatversion: "2",
        action: "edit",
        title: "Wikipedia:Sandbox",
        appendtext: "Test",
    })
);
