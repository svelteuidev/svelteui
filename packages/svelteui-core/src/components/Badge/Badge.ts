import { HTMLAttributes } from 'svelte/elements';
import {
	DefaultProps,
	SvelteUIColor,
	SvelteUIGradient,
	SvelteUINumberSize,
	SvelteUISize
} from '$lib/styles';

export type BadgeVariant = 'light' | 'filled' | 'outline' | 'dot' | 'gradient';

export interface BadgeProps extends DefaultProps<HTMLDivElement>, HTMLAttributes<HTMLElement> {
	color?: SvelteUIColor;
	variant?: BadgeVariant;
	gradient?: SvelteUIGradient;
	size?: SvelteUISize;
	radius?: SvelteUINumberSize;
	fullWidth?: boolean;
}
