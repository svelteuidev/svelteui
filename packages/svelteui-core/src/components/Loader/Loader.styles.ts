import { theme } from '$lib/styles-old';
import type { SvelteUIColor } from '$lib/styles-old';

export const LOADER_SIZES = {
	xs: 18,
	sm: 22,
	md: 36,
	lg: 44,
	xl: 58
};

export const getCorrectShade = (color: SvelteUIColor | string, dark: boolean = false) => {
	return theme.colors[dark ? `${color}400` : `${color}600`].value;
};
