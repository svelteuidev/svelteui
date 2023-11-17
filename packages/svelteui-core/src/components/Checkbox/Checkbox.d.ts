import { HTMLInputAttributes } from 'svelte/elements';
import { Component } from '$lib/internal';
import { DefaultProps, SvelteUIColor, SvelteUINumberSize, SvelteUISize } from '$lib/styles-old';

export interface CheckboxProps
	extends DefaultProps<HTMLInputElement>,
		Omit<HTMLInputAttributes, 'size'> {
	color?: SvelteUIColor;
	id?: string;
	checked?: boolean;
	disabled?: boolean;
	indeterminate?: boolean;
	value?: string;
	label?: Component | string;
	radius?: SvelteUINumberSize | number;
	size?: SvelteUISize;
	transitionDuration?: number;
	wrapperProps?: { [key: string]: any };
}
