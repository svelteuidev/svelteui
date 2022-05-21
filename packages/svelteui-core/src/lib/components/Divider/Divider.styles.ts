import type { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import type { TextProps } from '../Text/Text.styles';

export interface DividerProps extends DefaultProps {
	color?: SvelteUIColor;
	orientation?: 'horizontal' | 'vertical';
	size?: SvelteUINumberSize;
	label?: string;
	labelPosition?: 'left' | 'center' | 'right';
	labelProps?: TextProps;
	variant?: DividerVariant;
}

export type DividerVariant = 'solid' | 'dashed' | 'dotted';
