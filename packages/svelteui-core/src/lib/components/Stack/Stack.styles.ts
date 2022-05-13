import type { SvelteUINumberSize, DefaultProps, CSS } from '$lib/styles';

export interface StackProps extends DefaultProps {
	spacing: SvelteUINumberSize;
	align: CSS['alignItems'];
	justify: CSS['justifyContent'];
}
