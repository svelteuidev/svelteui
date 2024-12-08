import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { Component } from '$lib/internal';
import type { DefaultProps, SvelteUIColor, SvelteUINumberSize, SvelteUISize } from '$lib/styles';

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
	children?: Snippet;
	[key: string]: any
}
