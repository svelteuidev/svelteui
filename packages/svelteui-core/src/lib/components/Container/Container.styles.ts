import type { DefaultProps, SvelteUINumberSize, SvelteUISize } from '$lib/styles';

export interface ContainerProps extends DefaultProps {
	size?: SvelteUINumberSize;
	fluid?: boolean;
	sizes?: Record<SvelteUISize, number>;
}
