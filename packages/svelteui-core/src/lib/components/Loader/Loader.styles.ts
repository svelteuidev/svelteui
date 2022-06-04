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

export interface LoaderPropsExtended extends Partial<SVGElement> {
	/** Defines width of loader */
	size?: SvelteUINumberSize;

	/** Loader color from theme */
	color?: SvelteUIColor | 'white';

	/** Loader appearance */
	variant?: LoaderType;
}

export interface LoaderProps extends DefaultProps<Omit<Component, 'prototype'>> {
	variant: LoaderPropsExtended['variant'];
	color: LoaderPropsExtended['color'];
	size: LoaderPropsExtended['size'];
}

export const getCorrectShade = (color: SvelteUIColor | string, dark: boolean = false) => {
	return theme.colors[dark ? `${color}400` : `${color}600`].value;
};
