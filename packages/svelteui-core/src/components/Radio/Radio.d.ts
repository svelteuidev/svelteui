import { HTMLAttributes } from 'svelte/elements';
import { Component } from '$lib/internal';
import { DefaultProps, SvelteUIColor, SvelteUINumberSize, SvelteUISize } from '$lib/styles-old';

export interface RadioProps
	extends DefaultProps<HTMLInputElement>,
		HTMLAttributes<HTMLInputElement> {
	color?: SvelteUIColor;
	id?: string;
	name?: string;
	checked?: boolean;
	disabled?: boolean;
	value?: string;
	label?: Component | string;
	radius?: SvelteUINumberSize | number;
	size?: SvelteUISize;
	labelDirection?: 'right' | 'left';
	error?: boolean;
	group?: string;
	isGrouped?: boolean;
}
