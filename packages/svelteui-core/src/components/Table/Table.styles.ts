import { createStyles } from '$lib/styles';
import type { SvelteUINumberSize } from '$lib/styles';

export interface TableStyleParams {
	withBorder: boolean;
	striped: boolean;
	highlightOnHover: boolean;
	cellPadding: SvelteUINumberSize;
	textAlign: 'center' | 'left' | 'right';
}

export const padding = {
	sm: 4,
	md: 8,
	lg: 16
};

export default createStyles(
	(theme, { withBorder, highlightOnHover, striped, cellPadding, textAlign }: TableStyleParams) => {
		const { themeColor } = theme.fn;
		return {
			root: {
				borderCollapse: 'collapse',
				cursor: highlightOnHover ? 'pointer' : 'default',
				border: withBorder ? `1px solid ${themeColor('gray', 6)}` : '',
				borderStyle: withBorder ? '' : 'hidden',
				'& > * > th, & > * > td': {
					padding:
						typeof cellPadding === 'number' ? `${cellPadding}px` : `${padding[`${cellPadding}`]}px`,
					border: `1px solid ${themeColor('gray', 6)}`,
					textAlign
				},
				'& > tr:nth-child(even)': {
					backgroundColor: striped ? themeColor('gray', 9) : ''
				},
				'& > tr:hover': {
					backgroundColor: highlightOnHover ? themeColor('gray', 9) : ''
				}
			}
		};
	}
);
