import type { SvelteuiNumberSize, DefaultProps, CSS } from '$lib/styles';

export interface StackProps extends DefaultProps {
	spacing: SvelteuiNumberSize;
	align: CSS['alignItems'];
	justify: CSS['justifyContent'];
}
