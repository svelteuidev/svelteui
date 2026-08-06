import type { HTMLAttributes } from 'svelte/elements';
import type { Component } from '$lib/internal';
import type { DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface IconRendererProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	icon?: Component | HTMLOrSVGElement;
	iconSize?: SvelteUINumberSize;
	iconProps?: Record<string, unknown>;
}
