import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUINumberSize } from '$lib/styles-old';

export interface SkeletonProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	visible?: boolean;
	height?: number | string;
	width?: number | string;
	circle?: boolean;
	radius?: SvelteUINumberSize;
	animate?: boolean;
}
