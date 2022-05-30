export {};

type PatternBank = Array<PatternBankItem<string>>;

interface PatternBankItem<T> {
	name: T;
	pattern: string;
}

interface UseRegexOptions {
	test?: boolean;
	testType?: 'test' | 'search' | 'match' | 'match-all';
}

// prettier-ignore
const PATTERN_BANK: PatternBank = [
    {name: 'getAllOf', pattern: '(?:^|\W)%svelteui%(?:$|\W)'}
];

const useRegexOptions: UseRegexOptions = {
	test: false,
	testType: 'test'
};

// expect 'getAllOf' to "match" "against"
// for the three values
type useRegexFn = (name: string, matcher: string, options?: UseRegexOptions) => any;

type useRegexFactoryFn = (extensions: PatternBank) => useRegexFn;

export function useRegexFactory(extensions: PatternBank = []): ReturnType<useRegexFactoryFn> {
	// "settings of the constructor"
	const patternBank: PatternBank = [...PATTERN_BANK, ...extensions];

	function useRegex(name: string, matcher: string, options: UseRegexOptions = useRegexOptions) {
		let pattern: string;
		const { test, testType }: UseRegexOptions = { ...useRegexOptions, ...options };

		/** get the pattern from the object at name */
		for (const _pattern of patternBank) {
			if (name === _pattern.name) pattern = _pattern.pattern;
		}
		// set pattern equal to the pattern retrieved with the matcher
		pattern = pattern.replace(/%svelteui%/g, matcher);

		const regex = new RegExp(pattern);

		if (test) {
			let value: unknown;
			switch (testType) {
				case 'test':
					value = regex.test(matcher);
					break;

				case 'search':
					value = matcher.search(regex);
					break;

				case 'match':
					value = matcher.match(regex);
					break;

				case 'match-all':
					value = matcher.matchAll(regex);
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
