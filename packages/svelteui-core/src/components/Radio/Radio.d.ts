import { HTMLAttributes } from 'svelte/elements';
import { Component } from '$lib/internal';
import { DefaultProps, SvelteUIColor, SvelteUINumberSize, SvelteUISize } from '$lib/styles';


export type RadioContext = Writable<{ 
	value?: string;
}>;

export interface RadioProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	color?: SvelteUIColor;
	id?: string;
	name?: string;
	checked?: boolean;
	disabled?: boolean;
	value?: string;
	label?: Component | string;
	radius?: SvelteUINumberSize | number;
	size?: SvelteUISize;
	labelDirection?: 'right' | 'bottom';
	isGrouped?: boolean;
}
