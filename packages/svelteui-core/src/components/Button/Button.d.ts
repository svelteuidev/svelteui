import { SvelteComponentTyped } from 'svelte';
import { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUIColor, SvelteUINumberSize, SvelteUIGradient } from '$lib/styles';
import { LoaderProps } from '../Loader/Loader';

export type ButtonVariant =
	| 'filled'
	| 'light'
	| 'outline'
	| 'default'
	| 'white'
	| 'gradient'
	| 'subtle';

export interface ButtonProps
	extends DefaultProps<HTMLButtonElement | HTMLAnchorElement>,
		HTMLButtonAttributes,
		HTMLAnchorAttributes {
	variant?: ButtonVariant;
	color?: SvelteUIColor;
	size?: SvelteUINumberSize;
	radius?: SvelteUINumberSize | number;
	gradient?: SvelteUIGradient;
	loaderPosition?: 'left' | 'right';
	loaderProps?: LoaderProps;
	href?: string;
	external?: boolean;
	disabled?: boolean;
	compact?: boolean;
	loading?: boolean;
	uppercase?: boolean;
	fullSize?: boolean;
	ripple?: boolean;
}

export interface ButtonEvents {
	click: MouseEvent;
	mouseover: MouseEvent;
	mouseenter: MouseEvent;
	mouseleave: MouseEvent;
}

export interface ButtonSlots {
	default: Record<string, never>;
	leftIcon: Record<string, never>;
	rightIcon: Record<string, never>;
}

export default class Button extends SvelteComponentTyped<ButtonProps, ButtonEvents, ButtonSlots> {}
