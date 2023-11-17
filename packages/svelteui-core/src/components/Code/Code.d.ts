import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUIColor } from '$lib/styles-old';

export interface CodeProps
	extends DefaultProps<HTMLPreElement | HTMLElement>,
		HTMLAttributes<HTMLPreElement | HTMLElement> {
	color?: SvelteUIColor;
	block?: boolean;
	width?: number;
	copy?: boolean;
	message?: string;
	noMono?: boolean;
}
