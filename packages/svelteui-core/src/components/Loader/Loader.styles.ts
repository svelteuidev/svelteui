import { theme } from '$lib/styles';
import type { Component } from '$lib/internal';
import type { SvelteUINumberSize, SvelteUIColor, LoaderType, DefaultProps } from '$lib/styles';

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
