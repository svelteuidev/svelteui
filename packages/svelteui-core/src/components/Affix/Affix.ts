import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { DefaultProps } from '$lib/styles';

export interface AffixProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	target?: HTMLElement | string;
	zIndex?: number;
	position?: {
		top?: string | number;
		left?: string | number;
		bottom?: string | number;
		right?: string | number;
	};
	children: Snippet;
	[key: string]: any;
}
