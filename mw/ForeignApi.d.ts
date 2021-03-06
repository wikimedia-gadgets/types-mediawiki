import { ApiOptions } from "./Api";

interface ForeignApiOptions extends ApiOptions {
    anonymous?: boolean;
}

declare global {
    namespace mw {
        class ForeignApi extends mw.Api {
            /**
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.ForeignApi
             */
            constructor(url: string | mw.Uri, options?: ForeignApiOptions);

            /**
             * Return the origin to use for API requests, in the required format (protocol, host and port, if any).
             *
             * @protected
             * @return {string | undefined}
             */
            protected getOrigin(): string | undefined;
        }
    }
}

export {};
