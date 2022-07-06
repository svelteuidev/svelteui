import type { PatternBank, UseRegexOptions, useRegexFactoryFn } from './types';

const PATTERN_BANK: PatternBank = [{ name: 'getAllOf', pattern: '(?:^|W)%svelteui%(?:$|W)' }];

const useRegexOptions: UseRegexOptions = {
	test: false,
	testType: 'test',
	testString: ''
};

/**
 * The `useRegexFactory` function is used to add your own custom regex patterns to the `useRegex` function.
 *
 * @param extensions - an array of pattern bank options that allows for you to extend the default bank.
 * @returns a useRegex function
 */
export function useRegexFactory(extensions: PatternBank = []): ReturnType<useRegexFactoryFn> {
	// "settings of the constructor"
	const patternBank: PatternBank = [...PATTERN_BANK, ...extensions];

	/**
	 * The `useRegex` function is used to get common regex patterns, or test against those patterns directly in the function.
	 *
	 * The list of patterns can be extended with the useRegexFactory function.
	 *
	 * @param name - name of the desired regex pattern to use
	 * @param matcher - the "item" to match the regex against
	 * @param options optional options object that tells the function how to test your regex if you want to test it
	 * @returns a regex pattern, or a tested regex string
	 */
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
