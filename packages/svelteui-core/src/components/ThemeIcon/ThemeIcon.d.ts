import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUIColor, SvelteUIGradient, SvelteUINumberSize } from '$lib/styles-old';

export type ThemeIconVariant =
	| 'filled'
	| 'light'
	| 'gradient'
	| 'outline'
	| 'subtle'
	| 'default'
	| 'white';

export interface ThemeIconProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	size?: SvelteUINumberSize;
	radius?: SvelteUINumberSize;
	color?: SvelteUIColor;
	variant?: ThemeIconVariant;
	gradient?: SvelteUIGradient;
}
