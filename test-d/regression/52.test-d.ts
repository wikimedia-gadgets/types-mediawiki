// https://github.com/wikimedia-gadgets/types-mediawiki/issues/52
import { expectType } from "tsd";

declare const map: mw.Map;
declare const k: string;

if (map.exists(k)) {
    expectType<string>(k);
} else {
    expectType<string>(k);
}
