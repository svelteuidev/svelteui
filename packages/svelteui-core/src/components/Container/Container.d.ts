import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUINumberSize, SvelteUISize } from '$lib/styles';

export interface ContainerProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	size?: SvelteUINumberSize;
	fluid?: boolean;
	sizes?: Record<SvelteUISize, number>;
}
