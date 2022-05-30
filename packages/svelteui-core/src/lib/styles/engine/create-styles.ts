/* eslint-disable @typescript-eslint/ban-ts-comment */
import { css } from '../index.js';
import { cssFactory } from './css.js';
import { colorScheme } from '../SvelteUIProvider/svelteui.stores';
import { fromEntries } from './utils/from-entries/from-entries.js';
import { theme as themeObj, dark as darkObj, fns as newFns } from '../index.js';
import type { CSS } from '../types';
import type { SvelteUITheme } from './types';

export interface DirtyObject {
	[key: string]: CSS;
	root: CSS;
}

export function createStyles<Params = void>(
	getCssObjectOrCssObject: ((theme: SvelteUITheme, params: Params) => DirtyObject) | DirtyObject
) {
	const getCssObject =
		typeof getCssObjectOrCssObject === 'function'
			? getCssObjectOrCssObject
			: () => getCssObjectOrCssObject;

	function useStyles(params: Params = {} as Params) {
		let observer;
		colorScheme.subscribe((val) => (observer = val));

		/** create our new theme object */
		const theme: SvelteUITheme = {
			// @ts-ignore
			...themeObj,
			colorScheme: observer,
			dark: darkObj.selector,
			fn: {
				themeColor: newFns.themeColor,
				size: newFns.size
			}
		};

		/** store the created dirty object in a variable */
		const cssObjectDirty: DirtyObject = getCssObject(theme, params);
		/** clone the dirty object to modify it's properties */
		const sanitizeObject = Object.assign({}, cssObjectDirty);

		/** takes all keys and maps them to the proper string values */
		Object.keys(sanitizeObject).map((value) => {
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
