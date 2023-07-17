import { HTMLAttributes } from 'svelte/elements';
import type { SvelteUIColor } from '$lib/styles';
import { TextProps } from '../Text/Text';

export interface BlockquoteProps extends TextProps<HTMLHeadingElement> {
	showIcon?: boolean;
	color?: SvelteUIColor;
}

export interface QuoteIconProps extends HTMLAttributes<'svg'> {}
