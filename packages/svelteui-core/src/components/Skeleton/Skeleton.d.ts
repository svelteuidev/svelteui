import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface SkeletonProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	visible?: boolean;
	height?: number | string;
	width?: number | string;
	circle?: boolean;
	radius?: SvelteUINumberSize;
	animate?: boolean;
}

export interface SkeletonSlots {
	default: Record<string, never>;
}

export default class Skeleton extends SvelteComponentTyped<
	SkeletonProps,
	Record<string, never>,
	SkeletonSlots
> {}
