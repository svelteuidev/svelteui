import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUINumberSize } from '$lib/styles-old';

export interface AppShellProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	zIndex?: number;
	fixed?: boolean;
	padding?: SvelteUINumberSize;
	navbarOffsetBreakpoint?: SvelteUINumberSize;
	asideOffsetBreakpoint?: SvelteUINumberSize;
}
