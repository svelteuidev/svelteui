import { createStyles } from '$lib/styles';
import type { SvelteUINumberSize } from '$lib/styles';

export interface TableStyleParams {
	striped: boolean;
	highlightOnHover: boolean;
	cellPadding: SvelteUINumberSize;
	textAlign: 'center' | 'left' | 'right';
	withRowBorder: boolean;
	withColumnBorder: boolean;
	withTableBorder: boolean;
}

export const padding = {
	sm: 4,
	md: 8,
	lg: 16
};

export default createStyles(
	(
		theme,
		{
			highlightOnHover,
			striped,
			cellPadding,
			textAlign,
			withRowBorder,
			withColumnBorder,
			withTableBorder
		}: TableStyleParams
	) => {
		const { themeColor } = theme.fn;
		return {
			root: {
				tableLayout: 'auto',
				borderCollapse: 'collapse',
				cursor: highlightOnHover ? 'pointer' : 'default',
				border: withTableBorder ? `1px solid ${themeColor('gray', 3)}` : '',
				'& > thead > tr > th, & > tbody > tr > td': {
					padding:
						typeof cellPadding === 'number' ? `${cellPadding}px` : `${padding[`${cellPadding}`]}px`,
					textAlign
				},
				'& tr': {
					borderBottom: withRowBorder ? `1px solid ${themeColor('gray', 3)}` : 'none'
				},
				'& td, & th': {
					borderRight: withColumnBorder ? `1px solid ${themeColor('gray', 3)}` : 'none'
				},
				'& tbody tr:last-of-type': {
					borderBottom: 'none'
				},
				'& td:last-of-type': {
					borderRight: 'none'
				},
				'& tr:nth-child(even)': {
					backgroundColor: striped ? themeColor('gray', 1) : '',
					darkMode: {
						backgroundColor: striped ? themeColor('dark', 6) : ''
					}
				},
				'& > tbody > tr:hover': {
					backgroundColor: highlightOnHover ? themeColor('gray', 2) : '',
					darkMode: {
						backgroundColor: highlightOnHover ? themeColor('dark', 5) : ''
					}
				},
				darkMode: {
					borderColor: themeColor('dark', 4)
				}
			}
		};
	}
);
