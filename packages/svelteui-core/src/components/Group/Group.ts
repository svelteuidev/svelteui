import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { CSS, DefaultProps, SvelteUINumberSize } from '$lib/styles';

export type GroupPosition = 'right' | 'center' | 'left' | 'apart';

export interface GroupProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	position?: GroupPosition;
	noWrap?: boolean;
	grow?: boolean;
	spacing?: SvelteUINumberSize;
	direction?: 'row' | 'column';
	align?: CSS['alignItems'];
	children?: Snippet;
	[key: string]: any
}
