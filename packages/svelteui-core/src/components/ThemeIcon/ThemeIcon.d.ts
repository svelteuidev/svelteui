import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUIColor, SvelteUIGradient, SvelteUINumberSize } from '$lib/styles';

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

export interface ThemeIconSlots {
	default: Record<string, never>;
}

export default class ThemeIcon extends SvelteComponentTyped<
	ThemeIconProps,
	Record<string, never>,
	ThemeIconSlots
> {}
