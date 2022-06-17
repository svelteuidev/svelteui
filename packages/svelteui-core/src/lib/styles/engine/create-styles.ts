/* eslint-disable @typescript-eslint/ban-ts-comment */
import { css } from '../index.js';
import { cssFactory } from './css.js';
import { fromEntries } from './utils/from-entries/from-entries.js';
import { useSvelteUITheme } from '../SvelteUIProvider/default-theme';
import { useSvelteUIThemeContext } from '../SvelteUIProvider';
import type { CSS } from '../types';
import type { SvelteUITheme, SvelteUIThemeOverride } from './types';

type CreateRef = (refName: string) => string;

export interface DirtyObject {
	[key: string]: CSS;
	root: CSS;
}

function createRef(refName: string) {
	return `__svelteui-ref-${refName || ''}`;
}

/**
 * custom made css-in-js styling function that is highly customizable and has many features
 *
 * allows you to subscribe to the current theme context
 *
 * @param getCssObjectOrCssObject - either an object of styles or a function that returns an object of styles
 * @returns
 */
export function createStyles<Params = void>(
	input: ((theme: SvelteUITheme, params: Params, createRef: CreateRef) => DirtyObject) | DirtyObject
) {
	const getCssObject = typeof input === 'function' ? input : () => input;

	function useStyles(params: Params = {} as Params) {
		/** create our new theme object */
		const theme: SvelteUITheme = useSvelteUIThemeContext().theme;
		const { cx } = cssFactory();

		/** store the created dirty object in a variable */
		const cssObjectDirty: DirtyObject = getCssObject(theme, params, createRef);
		/** clone the dirty object to modify it's properties */
		const sanitizeObject = Object.assign({}, cssObjectDirty);

		/** takes all keys and maps them to the proper string values */
		let ref: string;
		Object.keys(sanitizeObject).map((value) => {
			if (value === 'variants') return;

			sanitizeObject[`& .${value}`] = sanitizeObject[value];

			if ('ref' in sanitizeObject[value]) ref = sanitizeObject[value].ref as string;

			delete sanitizeObject[value];
		});

		/** delete the root property as it is not needed */
		delete sanitizeObject['& .root'];

		const { root } = cssObjectDirty;

		/** create our clean object that will get passed to the css function */
		const cssObjectClean = root !== undefined ? { ...root, ...sanitizeObject } : cssObjectDirty;

		/** transform keys from dirty object into strings to be consumed by classes */
		const classes = fromEntries(
			Object.keys(cssObjectDirty).map((keys) => {
				const getRefName: string[] = ref?.split('-') ?? [];
				let value = keys.toString();

				/** if we get a valid ref, then add that value to the array */
				if (ref && ref?.split('-')[getRefName?.length - 1] === keys) {
					value = `${value} ${ref}`;
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
