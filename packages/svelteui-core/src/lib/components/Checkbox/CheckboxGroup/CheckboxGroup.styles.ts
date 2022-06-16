import type {
	CSS,
	DefaultProps,
	SvelteUIColor,
	SvelteUINumberSize,
	SvelteUISize
} from '$lib/styles';

export interface CheckboxGroupProps extends DefaultProps {
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
