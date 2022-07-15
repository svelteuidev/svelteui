export interface PreprocessOptions {
    sourceTagName?: string;
    displayTagName?: string;
}
export interface ParsedPair {
    foundSource: boolean;
    foundDisplay: boolean;
    displayNodesStart: Array<number>;
    content: string;
}
export interface ParsedPairs extends Record<string, ParsedPair> {
    never?: never;
}
