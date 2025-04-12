// https://github.com/wikimedia-gadgets/types-mediawiki/issues/55
import { ApiUploadParams } from "types-mediawiki-api";

const params: ApiUploadParams = {};
new mw.Api().ajax(params);
