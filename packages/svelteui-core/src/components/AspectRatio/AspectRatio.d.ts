import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps } from '$lib/styles';

export interface AspectRatioProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	ratio: number;
}
