import type {
	CSS,
	DefaultProps,
	SvelteUIColor,
	SvelteUINumberSize,
	SvelteUISize
} from '$lib/styles';
import type { GroupPosition } from '../../Group';

export interface ChipGroupProps<T = boolean> extends DefaultProps {
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
