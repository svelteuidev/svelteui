import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { EasingFunction } from 'svelte/transition';

import type { ColorShades, DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';

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
	labelText?: string;
	ariaLabel?: string;
	shade?: ColorShades;
	tween?: boolean;
	tweenOptions?: { delay?: number; duration?: number; easing?: EasingFunction };
	sections?: Sections[];
	label?: Snippet;
	[key: string]: any;
}
