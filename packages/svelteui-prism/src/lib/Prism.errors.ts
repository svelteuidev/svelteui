import type { ErrorCtx } from '@svelteuidev/core';

/** Error codes for component Prism
 *
 * `Object.freeze` is needed to keep modification outside of the object unavailable
 *
 * ## Code 1:
 * If the 'language' prop is not one of the languages that Prism supports by default or
 * it is not being imported.
 */
export const PrismErrors: readonly ErrorCtx[] = Object.freeze([
	{
		error: true,
		message: 'Prism component for the language provided was not found.',
		solution: `
                If the language is not one supported by default by Prism, please register it.
				For more information see https://prismjs.com/index.html#supported-languages
                `
	}
]);
