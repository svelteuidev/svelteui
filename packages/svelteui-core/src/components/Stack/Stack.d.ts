import { HTMLAttributes } from 'svelte/elements';
import { CSS, DefaultProps, SvelteUINumberSize } from '$lib/styles-old';

export interface StackProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	spacing?: SvelteUINumberSize;
	align?: CSS['alignItems'];
	justify?: CSS['justifyContent'];
}
