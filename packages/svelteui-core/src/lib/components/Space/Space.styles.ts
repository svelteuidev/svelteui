import type { DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface SpaceProps extends DefaultProps {
	/** Width, set to add horizontal spacing */
	w: SvelteUINumberSize;

	/** Height, set to add vertical spacing */
	h: SvelteUINumberSize;
}
