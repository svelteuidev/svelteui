import { HTMLAttributes } from 'svelte/elements';
import { Component } from '$lib/internal';
import { DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface IconRendererProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	icon?: Component | HTMLOrSVGElement;
	iconSize?: SvelteUINumberSize;
	iconProps?: Record<string, unknown>;
}
