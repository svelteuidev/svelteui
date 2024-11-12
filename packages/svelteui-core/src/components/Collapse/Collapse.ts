import { HTMLAttributes } from 'svelte/elements';
import { SlideParams } from 'svelte/transition';
import { DefaultProps } from '$lib/styles';

export interface CollapseProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	open: boolean;
	animateOpacity?: boolean;
	transitionDuration?: number;
	slideTransitionOptions?: SlideParams;
}
