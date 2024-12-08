import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';

export interface BreadcrumbItemProps
	extends DefaultProps<HTMLDivElement>,
		HTMLAttributes<HTMLElement> {
	value?: number;
	color?: SvelteUIColor;
	size?: SvelteUINumberSize;
	label?: string;
	active?: boolean;
	href?: string;
	icon?: Snippet<[any]>;
	children?: Snippet;
}
