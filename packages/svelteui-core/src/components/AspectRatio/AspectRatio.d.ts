import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps } from '$lib/styles-old';

export interface AspectRatioProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	ratio: number;
}
