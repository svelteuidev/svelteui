import type { DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface SimpleGridProps extends DefaultProps {
	breakpoints?: SimpleGridBreakpoint[];
	cols?: number;
	spacing?: SvelteUINumberSize;
}
export interface SimpleGridBreakpoint {
	maxWidth?: SvelteUINumberSize;
	minWidth?: SvelteUINumberSize;
	cols: number;
	spacing?: SvelteUINumberSize;
}
