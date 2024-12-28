import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { CSS, DefaultProps, SvelteUIColor, SvelteUINumberSize, SvelteUISize } from '$lib/styles';
import type { GroupPosition } from '../../Group/Group';

export interface RadioGroupProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	items: { label: string; value: string }[];
	group?: string;
	color?: SvelteUIColor;
	value?: string;
	label?: string;
	disabled?: boolean;
	size?: SvelteUISize;
	radius?: SvelteUINumberSize;
	position?: GroupPosition;
	direction?: 'row' | 'column';
	labelDirection?: 'right' | 'left';
	align?: CSS['alignItems'];
	spacing?: SvelteUINumberSize;
	name?: string;
	onChange?: (value: string) => void
	children?: Snippet;
	[key: string]: any
}

