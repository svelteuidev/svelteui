import type { DefaultProps, SvelteuiNumberSize } from '$lib/styles';

export interface SpaceProps extends DefaultProps {
	/** Width, set to add horizontal spacing */
	w: SvelteuiNumberSize;

	/** Height, set to add vertical spacing */
	h: SvelteuiNumberSize;
}
