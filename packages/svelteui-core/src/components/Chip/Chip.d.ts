import { HTMLAttributes } from 'svelte/elements';
import { Component } from '$lib/internal';
import { DefaultProps, SvelteUIColor, SvelteUINumberSize, SvelteUISize } from '$lib/styles-old';

export interface ChipProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	color?: SvelteUIColor;
	id?: string;
	checked?: boolean;
	disabled?: boolean;
	value?: string;
	label?: Component | string;
	radius?: SvelteUINumberSize | number;
	size?: SvelteUISize;
	type?: 'checkbox' | 'radio';
	variant?: 'outline' | 'filled';
	transitionDuration?: number;
}
