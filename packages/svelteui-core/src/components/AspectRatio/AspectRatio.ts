import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { DefaultProps } from '$lib/styles';

export interface AspectRatioProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	ratio: number;
	children?: Snippet;
	[key: string]: any;
}
