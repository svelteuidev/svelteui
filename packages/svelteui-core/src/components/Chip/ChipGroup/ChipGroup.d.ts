import { HTMLAttributes } from 'svelte/elements';
import { CSS, DefaultProps, SvelteUIColor, SvelteUINumberSize, SvelteUISize } from '$lib/styles';
import { GroupPosition } from '../../Group/Group';

export interface ChipGroupProps<T = boolean> extends DefaultProps, HTMLAttributes<HTMLElement> {
	color?: SvelteUIColor;
	items?: { label: string; value: string }[];
	value?: T extends true ? string[] : string;
	label?: string;
	multiple?: T;
	disabled?: boolean;
	variant?: 'outline' | 'filled';
	size?: SvelteUISize;
	radius?: SvelteUINumberSize;
	position?: GroupPosition;
	direction?: 'row' | 'column';
	align?: CSS['alignItems'];
	spacing?: SvelteUINumberSize;
	wrapperProps?: Record<string, any>;
}

export interface ChipGroupEvents<T = boolean> {
	change: CustomEvent<T extends true ? string[] : string>;
	[evt: string]: CustomEvent<any>;
}
