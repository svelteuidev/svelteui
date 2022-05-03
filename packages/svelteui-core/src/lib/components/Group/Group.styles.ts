import type { DefaultProps, CSS, SvelteuiNumberSize } from '$lib/styles';

export interface GroupProps extends DefaultProps {
	position: GroupPosition;
	noWrap: boolean;
	grow: boolean;
	spacing: SvelteuiNumberSize;
	direction: 'row' | 'column';
	align: CSS['alignItems'];
	children: number;
}

export type GroupPosition = 'right' | 'center' | 'left' | 'apart';

export const POSITIONS = {
	left: 'flex-start',
	center: 'center',
	right: 'flex-end',
	apart: 'space-between'
};
