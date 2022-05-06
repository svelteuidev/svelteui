import type { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import type { Component } from '$lib/internal';

export interface CheckboxProps extends DefaultProps {
	color: SvelteUIColor;
	id: string;
	checked: boolean;
	disabled: boolean;
	indeterminate: boolean;
	label: Component | string;
	radius: SvelteUINumberSize | number;
	size: SvelteUINumberSize;
	transitionDuration: number;
	wrapperProps: { [key: string]: any };
}

export const sizes = {
	xs: 16,
	sm: 20,
	md: 24,
	lg: 30,
	xl: 36
};

export const iconSizes = {
	xs: 8,
	sm: 10,
	md: 14,
	lg: 16,
	xl: 20
};
