// SnowballEn.d.ts
interface PublicStemmer {
    stemWord(word: string): string;
}
declare const stemmer: PublicStemmer;
export default stemmer;
