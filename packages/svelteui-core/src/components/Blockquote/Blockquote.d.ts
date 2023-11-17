import { HTMLAttributes, HTMLBlockquoteAttributes, SVGAttributes } from 'svelte/elements';
import { SvelteUIColor, SvelteUINumberSize } from '$lib/styles-old';
import { TextProps } from '../Text/Text';

type BaseProps = TextProps<HTMLElement> & HTMLBlockquoteAttributes;

export interface BlockquoteProps extends BaseProps {
	icon?: Component | HTMLOrSVGElement;
	iconSize?: SvelteUINumberSize;
	color?: SvelteUIColor;
}

export interface QuoteIconProps extends HTMLAttributes<SVGAttributes> {}
