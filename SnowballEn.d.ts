// SnowballEn.d.ts
declare class BaseStemmer {
    setCurrent(value: string): void;
    getCurrent(): string;
}

declare class SnowballEn extends BaseStemmer {
    stemWord(word: string): string;
}

declare const stemmer: SnowballEn;
export default stemmer;
