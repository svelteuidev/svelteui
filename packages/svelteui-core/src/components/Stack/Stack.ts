import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { CSS, DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface StackProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	spacing?: SvelteUINumberSize;
	align?: CSS['alignItems'];
	justify?: CSS['justifyContent'];
	children?: Snippet;
	[key: string]: any
}
