import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import { Component } from '$lib/internal';

export type ResultViewVariant = 'filled' | 'outline' | 'light';

export interface ResultViewProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	title?: string;
	subtitle?: string;
	color?: SvelteUIColor;
	size?: SvelteUINumberSize;  
	icon?: Component | HTMLOrSVGElement;
	iconSize?: number;
	iconProps?: Record<string, unknown>; 
}
 