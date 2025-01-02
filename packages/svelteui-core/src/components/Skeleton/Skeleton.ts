import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface SkeletonProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	visible?: boolean;
	height?: number | string;
	width?: number | string;
	circle?: boolean;
	radius?: SvelteUINumberSize;
	animate?: boolean;
	children?: Snippet;
	[key: string]: any;
}
