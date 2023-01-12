import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import { TextProps } from '../Text/Text';

export type DividerVariant = 'solid' | 'dashed' | 'dotted';

export interface DividerProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	color?: SvelteUIColor;
	orientation?: 'horizontal' | 'vertical';
	size?: SvelteUINumberSize;
	label?: string;
	labelPosition?: 'left' | 'center' | 'right';
	labelProps?: TextProps;
	variant?: DividerVariant;
}

export interface DividerSlots {
	label: Record<string, never>;
}

export default class Divider extends SvelteComponentTyped<
	DividerProps,
	Record<string, never>,
	DividerSlots
> {}
