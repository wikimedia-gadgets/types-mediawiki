declare global {
    namespace mw {
        namespace loader {
            function addStyleTag(text: string, nextNode?: Node): HTMLElement;

            function getModuleNames(): string[];

            const moduleRegistry: Record<
                string,
                {
                    dependencies: string[];
                    group: any;
                    module: {
                        exports: any;
                    };
                    packageExports: any;
                    skip: string | null;
                    source: string;
                    state: "registered" | "ready";
                    version: string;
                }
            >;

            function getScript(url: string): JQuery.Promise<any>;

            function getState(module: string): string | null;

            function load(modules: string | string[], type?: string): void;

            function register(
                modules: string | string[],
                version?: string | number,
                dependencies?: string[],
                group?: string,
                source?: string,
                skip?: string
            ): void;

            function state(states: any): void;

            function using(
                dependencies: string[] | string,
                ready?: (require: (module: string) => any) => any,
                error?: () => any
            ): JQuery.Promise<any>;
        }
    }
}

export {};
