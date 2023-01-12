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

export interface AppShellEvents {}

export interface AppShellSlots {
  default: { slotValue: string };
  label: { slotValue: string };
  header: { slotValue: string };
  navbar: { slotValue: string };
  aside: { slotValue: string };
  footer: { slotValue: string };
}

export default class AppShell extends SvelteComponentTyped<AppShellProps, AppShellEvents, AppShellSlots> {}
