import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { CSS, DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface OverlayProps extends DefaultProps, Omit<HTMLAttributes<HTMLElement>, 'color'> {
	blur?: number;
	gradient?: string;
	center?: boolean;
	opacity?: CSS['opacity'];
	color?: CSS['backgroundColor'];
	zIndex?: CSS['zIndex'];
	radius?: SvelteUINumberSize;
	children?: Snippet;
	[key: string]: any;
}
