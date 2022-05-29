import { css } from '../index.js';
import { cssFactory } from './css.js';
import { colorScheme } from '../SvelteUIProvider/svelteui.stores';
import { fromEntries } from './utils/from-entries/from-entries.js';
import { theme as themeObj, dark as darkObj, fns as newFns } from '../index.js';
import type { theme as _theme, dark as _dark, fns as Fns } from '../index';
import type { CSS } from '../types';

interface DirtyObject {
	[key: string]: CSS;
	root: CSS;
}

interface Context {
	fns: typeof Fns;
	colorScheme?: 'light' | 'dark';
}

export function createStyles<Params = void>(
	getCssObjectOrCssObject:
		| ((theme: typeof _theme, params: Params, dark?: typeof _dark, ctx?: Context) => DirtyObject)
		| DirtyObject
) {
	const getCssObject =
		typeof getCssObjectOrCssObject === 'function'
			? getCssObjectOrCssObject
			: () => getCssObjectOrCssObject;

	function useStyles(params: Params = {} as Params) {
		let observer;
		const theme = themeObj;
		const dark = darkObj;
		colorScheme.subscribe((val) => {
			observer = val;
		});
		const ctx: Context = { fns: newFns, colorScheme: observer };

		/** store the created dirty object in a variable */
		const cssObjectDirty: DirtyObject = getCssObject(theme, params, dark, ctx);
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
			ctx,
			theme,
			classes,
			getStyles: css(cssObjectClean)
		};
	}
	return useStyles;
}
