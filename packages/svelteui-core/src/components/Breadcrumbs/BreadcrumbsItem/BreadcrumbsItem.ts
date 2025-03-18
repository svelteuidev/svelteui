import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import type { Component } from '$lib/internal';

export interface BreadcrumbItemProps
	extends DefaultProps<HTMLDivElement>,
		HTMLAttributes<HTMLElement> {
	value?: number;
	color?: SvelteUIColor;
	size?: SvelteUINumberSize;
	label?: string;
	active?: boolean;
	href?: string;
	iconComponent?: Component | HTMLOrSVGElement;
	icon?: Snippet<[any]>;
	children?: Snippet;
}
