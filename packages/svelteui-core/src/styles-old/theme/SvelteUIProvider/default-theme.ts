/* eslint-disable @typescript-eslint/ban-ts-comment */
import { theme, dark } from '../../stitches.config';
import { fns } from '../functions';
import { colorNameMap } from '../default-colors';
import { colorScheme } from './svelteui.stores';
import type { SvelteUITheme } from '../types';

export function useSvelteUITheme(): SvelteUITheme {
	let observer;
	colorScheme?.subscribe((mode) => {
		observer = mode;
	});
	const DEFAULT_THEME: SvelteUITheme = {
		// @ts-ignore
		...theme,
		colorNames: colorNameMap,
		colorScheme: observer,
		dark: dark?.selector,
		fn: {
			cover: fns.cover,
			themeColor: fns.themeColor,
			size: fns.size,
			radius: fns.radius,
			rgba: fns.rgba,
			variant: fns.variant
		}
	};
	return DEFAULT_THEME;
}
