import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { CSS, DefaultProps } from '$lib/styles';

export interface FlexProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	gap?: CSS['gap'];
	rowGap?: CSS['rowGap'];
	columnGap?: CSS['columnGap'];
	align?: CSS['alignItems'];
	justify?: CSS['justifyContent'];
	wrap?: CSS['flexWrap'];
	direction?: CSS['flexDirection'];
	children?: Snippet;
	[key: string]: any;
}
