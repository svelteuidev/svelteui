import type { CSS, DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';

export interface CheckboxGroupProps extends DefaultProps {
	color: SvelteUIColor;
	items: { label: string; value: string }[];
	value: string[];
	label: string;
	size: SvelteUINumberSize;
	radius: SvelteUINumberSize | number;
	direction: 'row' | 'column';
	align: CSS['alignItems'];
	spacing: SvelteUINumberSize;
	wrapperProps: { [key: string]: any };
}
