import { HTMLAttributes } from 'svelte/elements';
import { CSS, DefaultProps, SvelteUINumberSize } from '$lib/styles-old';

export interface MediaQueryProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	smallerThan?: SvelteUINumberSize;
	largerThan?: SvelteUINumberSize;
	styles?: CSS;
	query?: string;
}
