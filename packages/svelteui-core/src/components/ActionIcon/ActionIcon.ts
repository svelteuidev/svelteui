import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes } from 'svelte/elements';

import type { Component, LiteralUnion } from '$lib/internal/types';
import type { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import type { LoaderProps } from '../Loader/Loader';

export type ActionIconVariant =
	| 'hover'
	| 'filled'
	| 'outline'
	| 'light'
	| 'default'
	| 'transparent';

export interface ActionIconProps extends DefaultProps, HTMLButtonAttributes {
	root?: LiteralUnion<keyof HTMLElementTagNameMap | Component, string>;
	color?: SvelteUIColor;
	variant?: ActionIconVariant;
	size?: SvelteUINumberSize | string;
	radius?: SvelteUINumberSize | number;
	loaderProps?: LoaderProps;
	loading?: boolean;
	disabled?: boolean;
	href?: string;
	external?: boolean;
	children?: Snippet;
	[key: string]: any;
}
