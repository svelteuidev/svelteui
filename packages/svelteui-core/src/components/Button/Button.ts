import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';

import type { DefaultProps, SvelteUIColor, SvelteUINumberSize, SvelteUIGradient } from '$lib/styles';
import type { LoaderProps } from '../Loader/Loader';

export type ButtonVariant =
	| 'filled'
	| 'light'
	| 'outline'
	| 'default'
	| 'white'
	| 'gradient'
	| 'subtle';

interface ButtonPropsInternal extends DefaultProps<HTMLButtonElement | HTMLAnchorElement> {
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
	leftIcon?: Snippet;
	children?: Snippet;
	rightIcon?: Snippet;
	[key: string]: any
}

export type ButtonProps = ButtonPropsInternal & HTMLButtonAttributes & HTMLAnchorAttributes;
