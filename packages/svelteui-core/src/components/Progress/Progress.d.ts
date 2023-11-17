import { HTMLAttributes } from 'svelte/elements';
import { EasingFunction } from 'svelte/transition';
import { ColorShades, DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles-old';

export interface Sections {
	value: number;
	color: SvelteUIColor;
	label?: string;
}

export interface ProgressProps extends DefaultProps<HTMLDivElement>, HTMLAttributes<HTMLElement> {
	value?: number;
	color?: SvelteUIColor;
	size?: SvelteUINumberSize;
	radius?: SvelteUINumberSize;
	striped?: boolean;
	animate?: boolean;
	label?: string;
	ariaLabel?: string;
	shade?: ColorShades;
	tween?: boolean;
	tweenOptions?: { delay?: number; duration?: number; easing?: EasingFunction };
	sections?: Sections[];
}
