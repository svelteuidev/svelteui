import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface AppShellProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	zIndex?: number;
	fixed?: boolean;
	padding?: SvelteUINumberSize;
	navbarOffsetBreakpoint?: SvelteUINumberSize;
	asideOffsetBreakpoint?: SvelteUINumberSize;
}

export interface AppShellSlots {
	default: Record<string, never>;
	label: Record<string, never>;
	header: Record<string, never>;
	navbar: Record<string, never>;
	aside: Record<string, never>;
	footer: Record<string, never>;
}

export default class AppShell extends SvelteComponentTyped<
	AppShellProps,
	Record<string, never>,
	AppShellSlots
> {}
