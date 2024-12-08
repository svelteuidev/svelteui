import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlideParams } from 'svelte/transition';
import type { DefaultProps } from '$lib/styles';

export interface CollapseProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	open: boolean;
	animateOpacity?: boolean;
	transitionDuration?: number;
	slideTransitionOptions?: SlideParams;
	children?: Snippet;
	[key: string]: any
}
