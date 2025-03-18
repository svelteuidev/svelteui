import type { HTMLAttributes } from 'svelte/elements';
import type {
	DefaultProps,
	SvelteUIColor,
	SvelteUIGradient,
	SvelteUINumberSize,
	SvelteUISize
} from '$lib/styles';
import type { Snippet } from 'svelte';

export type BadgeVariant = 'light' | 'filled' | 'outline' | 'dot' | 'gradient';

export interface BadgeProps extends DefaultProps<HTMLDivElement>, HTMLAttributes<HTMLElement> {
	color?: SvelteUIColor;
	variant?: BadgeVariant;
	gradient?: SvelteUIGradient;
	size?: SvelteUISize;
	radius?: SvelteUINumberSize;
	fullWidth?: boolean;
	children?: Snippet;
	leftSection?: Snippet;
	rightSection?: Snippet;
	[key: string]: any;
}
