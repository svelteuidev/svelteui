import type { DefaultProps, SvelteuiNumberSize, SvelteuiSize } from '$lib/styles';
import type { Component } from '$lib/internal';

export interface InputBaseProps extends DefaultProps {
	icon: Component | HTMLOrSVGElement;
	iconWidth: number;
	iconProps: { size: number; color: 'currentColor' | string };
	rightSection: Component | HTMLOrSVGElement;
	rightSectionWidth: number;
	rightSectionProps: Record<string, unknown>;
	wrapperProps: Record<string, unknown>;
	required: boolean;
	radius: SvelteuiNumberSize;
	variant: InputVariant;
	disabled: boolean;
	size: SvelteuiSize;
	root: Component | keyof HTMLElementTagNameMap;
	value: string;
}

export interface InputProps extends InputBaseProps {
	invalid?: boolean;
	multiline?: boolean;
}

export type InputVariant = 'default' | 'filled' | 'unstyled' | 'headless';

export const sizes = {
	xs: 30,
	sm: 36,
	md: 42,
	lg: 50,
	xl: 60
};
