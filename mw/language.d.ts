declare global {
    namespace mw {
        namespace language {
            function bcp47(languageTag: string): string;

            function convertGrammar(word: string, form: string): string;

            function convertNumber(num: number, integer?: boolean): number | string;

            function convertPlural(
                count: number,
                forms: string[],
                explicitPluralForms?: any
            ): string;

            function flipTransform(...Transformation: any[]): any;

            function gender(gender: string, forms: string[]): string;

            function getData(langCode: string, dataKey: string): any;

            function getDigitTransformTable(): any;

            function getFallbackLanguageChain(): string[];

            function getFallbackLanguages(): string[];

            function getSeparatorTransformTable(): any;

            function listToText(list: string[]): string;

            function setData(langCode: string, dataKey: string, value?: any): void;
        }
    }
}

export {};
