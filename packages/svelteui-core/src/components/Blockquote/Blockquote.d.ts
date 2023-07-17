import { HTMLAttributes } from 'svelte/elements';
import type { SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import { TextProps } from '../Text/Text';

type BaseProps = TextProps<HTMLElement> & HTMLAttributes<'blockquote'>;

export interface BlockquoteProps extends BaseProps {
	icon?: Component | HTMLOrSVGElement;
	iconSize?: SvelteUINumberSize;
	color?: SvelteUIColor;
}

export interface QuoteIconProps extends HTMLAttributes<'svg'> {}
