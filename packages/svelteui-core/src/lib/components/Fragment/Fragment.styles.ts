import type { DefaultProps } from '$lib/styles';
import type { SvelteNode } from '$lib/internal';

export interface FragmentProps extends DefaultProps {
	root: SvelteNode;
}
