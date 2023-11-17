import { HTMLAttributes } from 'svelte/elements';
import type { DefaultProps } from '$lib/styles-old';

export interface AffixProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	target?: HTMLElement | string;
	zIndex?: number;
	position?: {
		top?: string | number;
		left?: string | number;
		bottom?: string | number;
		right?: string | number;
	};
}
