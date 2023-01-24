/* eslint-disable @typescript-eslint/no-unused-vars */
import { css } from '../index.js';
import { cssFactory } from './css.js';
import { fromEntries } from './utils/from-entries/from-entries.js';
import { useSvelteUITheme, useSvelteUIThemeContext } from '$lib/styles';
import type { CSS } from '$lib/styles';
import type { SvelteUITheme } from '$lib/styles';

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

function createSanitizedObject(object: DirtyObject, theme: SvelteUITheme, ref: string) {
	Object.keys(object).map((value) => {
		/** special key mapping */
		if (value === 'variants') return;
		if ('ref' in object[value]) ref = object[value].ref as string;
		if ('darkMode' in object[value]) {
			object[value][`${theme.dark} &`] = object[value].darkMode;
		}
		/** general key mapping */
		object[`& .${value}`] = object[value];

		/** remove the old keys as they are not needed */
		delete object[value];
	});
	/** delete the root property as it is not needed */
	delete object['& .root'];
}

/**
 * custom made css-in-js styling function that is highly customizable and has many features
 *
 * allows you to subscribe to the current theme context
 *
 * @param getCssObjectOrCssObject - either an object of styles or a function that returns an object of styles
 * @returns
 */
export function createStyles<Key extends string = string, Params = void>(
	input:
		| ((theme: SvelteUITheme, params: Params, createRef: CreateRef) => Record<Key, CSSObject>)
		| Record<Key, CSSObject>
) {
	const getCssObject = typeof input === 'function' ? input : () => input;

	function useStyles(params: Params = {} as Params, options?: UseStylesOptions<Key>) {
		/** create our new theme object */
		const theme: SvelteUITheme = useSvelteUIThemeContext()?.theme || useSvelteUITheme();
		const { cx } = cssFactory();
		const { override } = options || {};
		let ref: string;

		/** store the created dirty object in a variable */
		const cssObjectDirty: DirtyObject = getCssObject(theme, params, createRef);
		/** clone the dirty object to modify it's properties */
		const sanitizeObject = Object.assign({}, cssObjectDirty);

		/** takes all keys and maps them to the proper string values */
		createSanitizedObject(sanitizeObject, theme, ref);

		const { root } = cssObjectDirty;

		/** create our clean object that will get passed to the css function */
		const cssObjectClean = root !== undefined ? { ...root, ...sanitizeObject } : cssObjectDirty;
		const getStyles = css(cssObjectClean);

		/** transform keys from dirty object into strings to be consumed by classes */
		const classes: Record<Key, string> = fromEntries(
			Object.keys(cssObjectDirty).map((keys) => {
				const getRefName: string[] = ref?.split('-') ?? [];
				const keyIsRef = ref?.split('-')[getRefName?.length - 1] === keys;
				let value = keys.toString();

				/** if we get a valid ref, then add that value to the array */
				if (ref && keyIsRef) {
					value = `${value} ${ref}`;
				}
				if (keys === 'root') {
					/** generate our styles */
					value = getStyles({ css: override }).toString();
				}

				return [keys, value];
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
