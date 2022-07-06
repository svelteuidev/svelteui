import type { LiteralUnion } from 'type-fest';

export type PatternBankPatterns = 'getAllOf';

export type PatternBank = Array<PatternBankItem>;

export interface PatternBankItem {
	name: LiteralUnion<PatternBankPatterns, string>;
	pattern: string;
}

export interface UseRegexOptions {
	test?: boolean;
	testType: 'test' | 'search' | 'match' | 'match-all';
	testString: string;
}
// expect 'getAllOf' to "match" "against"
// for the three values
export type useRegexFn = (
	name: LiteralUnion<PatternBankPatterns, string>,
	matcher: string,
	options?: UseRegexOptions
) => any;
export type useRegexFactoryFn = (extensions: PatternBank) => useRegexFn;
