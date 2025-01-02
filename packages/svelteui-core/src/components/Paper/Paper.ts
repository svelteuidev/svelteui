import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { DefaultProps, SvelteUINumberSize, SvelteUIShadow } from '$lib/styles';

export interface PaperProps extends DefaultProps<HTMLDivElement>, HTMLAttributes<HTMLElement> {
	shadow?: SvelteUIShadow;
	radius?: SvelteUINumberSize;
	withBorder?: boolean;
	padding?: SvelteUINumberSize;
	children?: Snippet;
	[key: string]: any;
}
