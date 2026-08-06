import type { HTMLAttributes } from 'svelte/elements';
import type { DefaultProps, SvelteUINumberSize } from '$lib/styles';
import type { Snippet } from 'svelte';

export interface AppShellProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	zIndex?: number;
	fixed?: boolean;
	padding?: SvelteUINumberSize;
	navbarOffsetBreakpoint?: SvelteUINumberSize;
	asideOffsetBreakpoint?: SvelteUINumberSize;
	header?: Snippet;
	navbar?: Snippet;
	children?: Snippet;
	aside?: Snippet;
	footer?: Snippet;
}
