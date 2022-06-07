/* eslint-disable @typescript-eslint/ban-ts-comment */
import { theme, dark, fns, colorScheme } from '../index';
import type { SvelteUITheme } from '../engine/types';

export function useSvelteUITheme(): SvelteUITheme {
	let observer;
	colorScheme?.subscribe((mode) => {
		observer = mode;
	});
	const DEFAULT_THEME: SvelteUITheme = {
		// @ts-ignore
		...theme,
		colorScheme: observer,
		dark: dark?.selector,
		fn: {
			themeColor: fns.themeColor,
			size: fns.size,
			radius: fns.radius
		}
	};
	return DEFAULT_THEME;
}
