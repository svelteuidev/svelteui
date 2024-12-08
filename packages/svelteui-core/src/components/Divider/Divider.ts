import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import type { TextProps } from '../Text/Text';

export type DividerVariant = 'solid' | 'dashed' | 'dotted';

export interface DividerProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	color?: SvelteUIColor;
	orientation?: 'horizontal' | 'vertical';
	size?: SvelteUINumberSize;
	labelText?: string;
	labelPosition?: 'left' | 'center' | 'right';
	labelProps?: TextProps;
	variant?: DividerVariant;
	label?: Snippet;
	children?: Snippet;
	[key: string]: any
}
