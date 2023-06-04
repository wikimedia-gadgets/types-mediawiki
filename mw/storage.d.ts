interface SafeStorage {
    get(key: string): string | null | boolean;

    getObject(key: string): any;

    remove(key: string): boolean;

    set(key: string, value: string, expiry?: number): boolean;

    setExpires(key: string, expiry?: number): void;

    setObject(key: string, value: any, expiry?: number): boolean;
}

interface MwStorage extends SafeStorage {
    session: SafeStorage;
}

declare global {
    namespace mw {
        const storage: MwStorage;
    }
}

export {};
