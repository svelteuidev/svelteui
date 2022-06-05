/* eslint-disable @typescript-eslint/ban-ts-comment */
import { css } from '../index.js';
import { cssFactory } from './css.js';
import { fromEntries } from './utils/from-entries/from-entries.js';
import { useSvelteUITheme } from '../SvelteUIProvider/default-theme';
import type { CSS } from '../types';
import type { SvelteUITheme } from './types';

export interface DirtyObject {
	[key: string]: CSS;
	root: CSS;
}

/**
 * custom made css-in-js styling function with high customizable and many features
 *
 * allows you to subscribe to the current theme context
 *
 * @param getCssObjectOrCssObject - either an object of styles or a function that returns an object of styles
 * @returns
 */
export function createStyles<Params = void>(
	getCssObjectOrCssObject: ((theme: SvelteUITheme, params: Params) => DirtyObject) | DirtyObject
) {
	const getCssObject =
		typeof getCssObjectOrCssObject === 'function'
			? getCssObjectOrCssObject
			: () => getCssObjectOrCssObject;

	function useStyles(params: Params = {} as Params) {
		/** create our new theme object */
		const theme: SvelteUITheme = useSvelteUITheme();

		/** store the created dirty object in a variable */
		const cssObjectDirty: DirtyObject = getCssObject(theme, params);
		/** clone the dirty object to modify it's properties */
		const sanitizeObject = Object.assign({}, cssObjectDirty);

		/** takes all keys and maps them to the proper string values */
		Object.keys(sanitizeObject).map((value) => {
			if (value === 'variants') return;
			sanitizeObject[`& .${value}`] = sanitizeObject[value];
			delete sanitizeObject[value];
		});

		/** delete the root property as it is not needed */
		delete sanitizeObject['& .root'];

		const { root } = cssObjectDirty;
		const { cx } = cssFactory();

		/** create our clean object that will get passed to the css function */
		const cssObjectClean = root !== undefined ? { ...root, ...sanitizeObject } : cssObjectDirty;

		/** transform keys from dirty object into strings to be consumed by classes */
		const classes = fromEntries(
			Object.keys(cssObjectDirty).map((keys) => {
				const value = keys.toString();
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
