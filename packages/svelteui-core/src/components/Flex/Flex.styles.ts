import { createStyles } from '$lib/styles';
import type { FlexProps } from './Flex';

export type FlexStylesParams = FlexProps;

export default createStyles(
	(theme, { gap, rowGap, columnGap, align, justify, wrap, direction }: FlexStylesParams) => {
		return {
			root: {
				boxSizing: 'border-box',
				display: 'flex',
				flexDirection: direction,
				alignItems: align,
				flexWrap: wrap,
				justifyContent: justify,
				gap: gap ? theme.fn.size({ size: gap as string, sizes: theme.space }) : undefined,
				rowGap: rowGap ? theme.fn.size({ size: rowGap as string, sizes: theme.space }) : undefined,
				columnGap: columnGap
					? theme.fn.size({ size: columnGap as string, sizes: theme.space })
					: undefined
			}
		};
	}
);
