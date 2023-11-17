import {
	CSS,
	DefaultProps,
	SvelteUIColor,
	SvelteUINumberSize,
	SvelteUISize
} from '$lib/styles-old';

export interface CheckboxGroupProps extends DefaultProps<HTMLInputElement> {
	color?: SvelteUIColor;
	items?: { label: string; value: string }[];
	value?: string[];
	label?: string;
	size?: SvelteUISize;
	radius?: SvelteUINumberSize;
	direction?: 'row' | 'column';
	align?: CSS['alignItems'];
	spacing?: SvelteUINumberSize;
	wrapperProps?: Record<string, any>;
}

export interface CheckboxGroupEvents {
	change: CustomEvent<string[]>;
	[evt: string]: CustomEvent<any>;
}
