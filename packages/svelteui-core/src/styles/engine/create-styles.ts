/* eslint-disable @typescript-eslint/no-unused-vars */
import { css } from '../index.js';
import { cssFactory } from './css.js';
import { fromEntries } from './utils/from-entries/from-entries.js';
import { useSvelteUITheme, useSvelteUIThemeContext } from '$lib/styles';
import type { CSS } from '$lib/styles';
import type { SvelteUITheme } from '$lib/styles';

const CLASS_KEY = 'svelteui';

type CreateRef = (refName: string) => string;

type CSSObject = {
	darkMode?: CSS;
	ref?: string;
} & CSS;

export interface DirtyObject {
	[key: string]: {
		darkMode?: CSS;
		ref?: string;
	} & CSS;
	root?: {
		darkMode?: CSS;
		ref?: string;
	} & CSS;
}

export interface UseStylesOptions<Key extends string | 'root'> {
	override?: CSS;
	classNames?: Partial<Record<Key, string>>;
	styles?: Partial<Record<Key, CSS>> | ((theme: SvelteUITheme) => Partial<Record<Key, CSS>>);
	name?: string;
}

function createRef(refName: string) {
	return `__svelteui-ref-${refName || ''}`;
}

/**
 * Sanitizes the provided CSS object, converting certain keywords to
 * respective CSS selectors, transforms keys into generated CSS classes
 * and returns the mapping between these generated classes and their initial
 * keys.
 *
 * @param object The CSS object that has not yet been sanitized.
 * @param theme The current theme object.
 * @param ref The ref object.
 * @returns The class map that maps the name of the key in the CSS object
 * and the generated hash class.
 */
function sanitizeCss(object: DirtyObject, theme: SvelteUITheme) {
	// builds this to map the generated class name to the class key
	// given in the CSS object
	const refs: string[] = [];
	const classMap = {};

	const _sanitize = (obj: Record<string, any>) => {
		Object.keys(obj).map((value) => {
			// transforms certain keywords into the correct CSS selectors
			if (value === 'variants') return;

			// saves the reference value so that later it can be added
			// to reference the CSS selector
			if (value === 'ref') {
				refs.push(obj.ref as string);
			}
			if (value === 'darkMode') {
				obj[`${theme.dark} &`] = obj.darkMode;
			}

			// returns the recursive call if the CSS is not an object
			if (obj[value] === null || typeof obj[value] !== 'object') return;

			// calls the sanitize method recursively so that it can sanitize
			// all the style objects
			_sanitize(obj[value]);

			// removes the darkMode style since it has been switched
			// to the correct CSS selector
			if (value === 'darkMode') {
				delete obj[value];
			} else if (value.startsWith('@media')) {
				// do nothing if its a @media selector
			}

			// only adds the correct selectors if it has none
			else if (!value.startsWith('&') && !value.startsWith(theme.dark)) {
				const getStyles = css(obj[value]);
				classMap[value] = getStyles().toString();
				obj[`& .${getStyles().toString()}`] = obj[value];
				delete obj[value];
			}
		});
	};

	_sanitize(object);

	// deletes the root key since it won't be sanitized here
	delete object['& .root'];

	return { classMap, refs: Array.from(new Set(refs)) };
}

export function createStyles<Key extends string = string, Params = void>(
	input:
		| ((theme: SvelteUITheme, params: Params, createRef: CreateRef) => Record<Key, CSSObject>)
		| Record<Key, CSSObject>
) {
	const getCssObject = typeof input === 'function' ? input : () => input;

	function useStyles(params: Params = {} as Params, options?: UseStylesOptions<Key>) {
		// uses the theme present in the current context or fallbacks to the default theme
		const theme: SvelteUITheme = useSvelteUIThemeContext()?.theme || useSvelteUITheme();
		const { cx } = cssFactory();

		const { override, name } = options || {};
		const dirtyCssObject = getCssObject(theme, params, createRef);

		// builds the CSS object that contains transformed values
		const sanitizedCss = Object.assign({}, dirtyCssObject);
		const { classMap, refs } = sanitizeCss(sanitizedCss, theme);

		const root = dirtyCssObject['root'] ?? undefined;
		const cssObjectClean = root !== undefined ? { ...root, ...sanitizedCss } : dirtyCssObject;

		const getStyles = css(cssObjectClean);

		// transforms the keys into strings to be consumed by the classes
		const classes: Record<Key, string> = fromEntries(
			Object.keys(dirtyCssObject).map((keys) => {
				const ref = refs.find((r) => r.includes(keys)) ?? '';
				const getRefName: string[] = ref?.split('-') ?? [];
				const keyIsRef = ref?.split('-')[getRefName?.length - 1] === keys;
				const value = keys.toString();

				let transformedClasses = classMap[value] ?? value;

				// add the value to the array if the ref provided is valid
				if (ref && keyIsRef) {
					transformedClasses = `${transformedClasses} ${ref}`;
				}

				// generates the root styles, applying the override styles
				if (keys === 'root') {
					transformedClasses = getStyles({ css: override }).toString();
				}

				// adds a custom class that can be used to override style
				let libClass = `${CLASS_KEY}-${keys.toString()}`;
				if (name) {
					libClass = `${CLASS_KEY}-${name}-${keys.toString()}`;
					transformedClasses = `${transformedClasses} ${libClass}`;
				}

				return [keys, transformedClasses];
			})
		);

		return {
			cx,
			theme,
			classes,
			getStyles: css(cssObjectClean)
		};
	}
	return useStyles;
}
