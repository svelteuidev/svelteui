import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { DefaultProps, SvelteUIColor } from '$lib/styles';

export interface CodeProps
	extends DefaultProps<HTMLPreElement | HTMLElement>,
		HTMLAttributes<HTMLPreElement | HTMLElement> {
	color?: SvelteUIColor;
	block?: boolean;
	width?: number;
	copy?: boolean;
	message?: string;
	noMono?: boolean;
	children?: Snippet;
	[key: string]: any
}
