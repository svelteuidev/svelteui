import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUINumberSize } from '$lib/styles';

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
}
