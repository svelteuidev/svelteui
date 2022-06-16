import type { LiteralUnion } from 'type-fest';

type PatternBankPatterns = 'getAllOf';

type PatternBank = Array<PatternBankItem>;

interface PatternBankItem {
	name: LiteralUnion<PatternBankPatterns, string>;
	pattern: string;
}

interface UseRegexOptions {
	test?: boolean;
	testType: 'test' | 'search' | 'match' | 'match-all';
	testString: string;
}

// prettier-ignore
const PATTERN_BANK: PatternBank = [
    {name: 'getAllOf', pattern: '(?:^|\W)%svelteui%(?:$|\W)'}
];

const useRegexOptions: UseRegexOptions = {
	test: false,
	testType: 'test',
	testString: ''
};

// expect 'getAllOf' to "match" "against"
// for the three values
type useRegexFn = (
	name: LiteralUnion<PatternBankPatterns, string>,
	matcher: string,
	options?: UseRegexOptions
) => any;

type useRegexFactoryFn = (extensions: PatternBank) => useRegexFn;

export function useRegexFactory(extensions: PatternBank = []): ReturnType<useRegexFactoryFn> {
	// "settings of the constructor"
	const patternBank: PatternBank = [...PATTERN_BANK, ...extensions];

	function useRegex(name, matcher, options = useRegexOptions) {
		let pattern: string;
		const { test, testType, testString }: UseRegexOptions = { ...useRegexOptions, ...options };

		/** get the pattern from the object at name */
		patternBank.forEach((_pattern) => {
			if (name === _pattern.name) pattern = _pattern.pattern;
		});
		// set pattern equal to the pattern retrieved with the matcher
		pattern = pattern.replace(/%svelteui%/g, matcher);

		const regex = new RegExp(pattern, testType === 'match-all' ? 'g' : null);

		if (test) {
			let value: unknown;
			switch (testType) {
				case 'test':
					value = regex.test(testString);
					break;

				case 'search':
					value = testString.search(regex);
					break;

				case 'match':
					value = testString.match(regex);
					break;

				case 'match-all':
					value = testString.matchAll(regex);
					break;
				default:
					break;
			}
			return value;
		}

		return regex;
	}

	return useRegex;
}
