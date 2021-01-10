declare global {
    interface JQuery {
        // one overload for each command
        textSelection(command: "getContents"): string;

        textSelection(command: "setContents"): JQuery;

        textSelection(command: "getSelection"): string;

        textSelection(command: "replaceSelection"): JQuery;

        textSelection(
            command: "encapsulateSelection",
            commandOptions: {
                pre?: string;
                peri?: string;
                post?: string;
                ownline?: boolean;
                replace?: boolean;
                selectPeri?: boolean;
                splitlines?: boolean;
                selectionStart?: number;
                selectionEnd?: number;
            }
        ): JQuery;

        textSelection(
            command: "getCaretPosition",
            commandOptions?: {
                startAndEnd?: false;
            }
        ): number;

        textSelection(
            command: "getCaretPosition",
            commandOptions: {
                startAndEnd: true;
            }
        ): [number, number];

        textSelection(
            command: "setSelection",
            commandOptions: {
                start?: number;
                end?: number;
            }
        ): JQuery;

        textSelection(
            command: "scrollToCaretPosition",
            commandOptions: {
                force?: boolean;
            }
        ): JQuery;
    }
}

export {};
