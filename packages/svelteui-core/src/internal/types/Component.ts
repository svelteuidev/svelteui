import type { SvelteComponent, Component as ComponentInternal } from 'svelte';

export type Component = typeof SvelteComponent<any> | ComponentInternal;
