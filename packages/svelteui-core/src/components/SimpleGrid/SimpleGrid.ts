import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface SimpleGridBreakpoint {
	maxWidth?: SvelteUINumberSize;
	minWidth?: SvelteUINumberSize;
	cols: number;
	spacing?: SvelteUINumberSize;
}

export interface SimpleGridProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	breakpoints?: SimpleGridBreakpoint[];
	cols?: number;
	spacing?: SvelteUINumberSize;
	children?: Snippet;
	[key: string]: any;
}
