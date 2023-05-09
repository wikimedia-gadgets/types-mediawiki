declare global {
    namespace mw {
        namespace storage {
            function get(key: string): string | null | boolean;

            function getObject(key: string): any;

            function remove(key: string): boolean;

            function set(key: string, value: string, expiry?: number): boolean;

            function setObject(key: string, value: any, expiry?: number): boolean;
        }
    }
}

export {};
