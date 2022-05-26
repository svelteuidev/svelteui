import { keyframes } from '$lib/styles';
import type { DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface SkeletonProps extends DefaultProps<HTMLDivElement | HTMLElement> {
	visible?: boolean;
	height?: number | string;
	width?: number | string;
	circle?: boolean;
	radius?: SvelteUINumberSize;
	animate?: boolean;
}

export const fade = keyframes({
	'from, to': { opacity: 0.4 },
	'50%': { opacity: 1 }
});
