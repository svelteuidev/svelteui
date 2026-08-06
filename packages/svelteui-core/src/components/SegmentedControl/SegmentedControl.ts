import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUIColor, SvelteUISize, SvelteUINumberSize } from '$lib/styles';

export interface SegmentedControlItem {
	value: string;
	label: unknown;
	disabled?: boolean;
}

export interface SegmentedControlProps
	extends DefaultProps<HTMLDivElement>,
		HTMLAttributes<HTMLElement> {
	data: string[] | SegmentedControlItem[];
	value?: string;
	disabled?: boolean;
	name?: string;
	fullWidth?: boolean;
	color?: SvelteUIColor;
	size?: SvelteUISize;
	radius?: SvelteUINumberSize;
	transitionDuration?: number;
	transitionTimingFunction?: string;
	defaultValue?: string;
	orientation?: 'vertical' | 'horizontal';
}
