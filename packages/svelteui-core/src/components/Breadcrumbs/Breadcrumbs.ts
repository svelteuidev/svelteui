import type { Snippet } from 'svelte';
import type { Writable } from 'svelte/store';
import type { HTMLAttributes } from 'svelte/elements';

import type { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';

export type BreadcrumbContext = Writable<{
	separator?: string;
	size?: SvelteUINumberSize;
	color?: SvelteUIColor;
}>;

export interface BreadcrumbProps extends DefaultProps<HTMLDivElement>, HTMLAttributes<HTMLElement> {
	value?: number;
	color?: SvelteUIColor;
	size?: SvelteUINumberSize;
	label?: string;
	separator?: string;
	children?: Snippet;
}
