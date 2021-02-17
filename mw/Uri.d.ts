declare global {
    namespace mw {
        class Uri {
            fragment: string | undefined;
            host: string;
            password: string | undefined;
            path: string;
            port: string | undefined;
            protocol: string;
            query: any;
            user: string | undefined;

            constructor(
                uri?:
                    | string
                    | mw.Uri
                    | {
                          fragment?: string;
                          host: string;
                          password?: string;
                          path: string;
                          port?: string;
                          protocol: string;
                          query?: any;
                          user?: string;
                      },
                options?: {
                    strictMode?: boolean;
                    overrideKeys?: boolean;
                    arrayParams?: boolean;
                }
            );

            clone(): mw.Uri;

            extend(parameters: any): mw.Uri;

            getAuthority(): string;

            getHostPort(): string;

            getQueryString(): string;

            getRelativePath(): string;

            getUserInfo(): string;

            toString(): string;

            static decode(s: string): string;

            static encode(s: string): string;
        }
    }
}

export {};
