import { HTMLAttributes } from 'svelte/elements';
import type { SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import { TextProps } from '../Text/Text';

export interface BlockquoteProps extends TextProps<HTMLHeadingElement> {
	icon?: Component | HTMLOrSVGElement;
	iconSize?: SvelteUINumberSize;
	color?: SvelteUIColor;
}

export interface QuoteIconProps extends HTMLAttributes<'svg'> {}
