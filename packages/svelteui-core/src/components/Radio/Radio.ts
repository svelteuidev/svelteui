import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { Component } from '$lib/internal';
import type { DefaultProps, SvelteUIColor, SvelteUINumberSize, SvelteUISize } from '$lib/styles';

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
	children?: Snippet;
	[key: string]: any
}
