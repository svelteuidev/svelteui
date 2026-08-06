import type { Snippet } from 'svelte';
import type { HTMLInputAttributes } from 'svelte/elements';
import type { Component } from '$lib/internal';
import type { DefaultProps, SvelteUIColor, SvelteUINumberSize, SvelteUISize } from '$lib/styles';

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
	children?: Snippet;
	[key: string]: any;
}
