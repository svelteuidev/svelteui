import { HTMLAttributes, HTMLBlockquoteAttributes, SVGAttributes } from 'svelte/elements';
import { SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import { TextProps } from '../Text/Text';

type BaseProps = TextProps<HTMLElement> & HTMLAttributes<HTMLBlockquoteAttributes>;

export interface BlockquoteProps extends BaseProps {
	icon?: Component | HTMLOrSVGElement;
	iconSize?: SvelteUINumberSize;
	color?: SvelteUIColor;
	citeProps?: HTMLAttributes<HTMLElement>;
}

export interface QuoteIconProps extends HTMLAttributes<SVGAttributes> {}
