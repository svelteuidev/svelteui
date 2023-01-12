import { createStyles } from '$lib/styles';
import type {  CSS, SvelteUINumberSize } from '$lib/styles';
import type { GroupPosition } from './Group';

export interface GroupStylesParams {
	position: GroupPosition;
	noWrap: boolean;
	grow: boolean;
	spacing: SvelteUINumberSize;
	direction: 'row' | 'column';
	align: CSS['alignItems'];
	children: number;
}

export const POSITIONS = {
	left: 'flex-start',
	center: 'center',
	right: 'flex-end',
	apart: 'space-between'
};

export default createStyles(
	(theme, { align, direction, grow, noWrap, position, spacing, children }: GroupStylesParams) => {
		return {
			root: {
				boxSizing: 'border-box',
				display: 'flex',
				flexDirection: direction,
				alignItems:
					align ||
					(direction === 'row'
						? 'center'
						: grow
						? 'stretch'
						: position === 'apart'
						? 'flex-start'
						: POSITIONS[position]),
				flexWrap: noWrap ? 'nowrap' : 'wrap',
				justifyContent: direction === 'row' ? POSITIONS[position] : undefined,
				gap: theme.fn.size({ size: spacing, sizes: theme.space }),

				'& > *': {
					boxSizing: 'border-box',
					maxWidth:
						grow && direction === 'row'
							? `calc(${100 / children}% - ${
									theme.fn.size({ size: spacing, sizes: theme.space }) -
									theme.fn.size({ size: spacing, sizes: theme.space }) / children
							  }px)`
							: undefined,
					flexGrow: grow ? 1 : 0
				}
			}
		};
	}
);
