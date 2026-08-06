import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { CSS, DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface MediaQueryProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	smallerThan?: SvelteUINumberSize;
	largerThan?: SvelteUINumberSize;
	styles?: CSS;
	query?: string;
	children?: Snippet;
}
