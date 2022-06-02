import { createStyles } from '$lib/styles';
import type { TextProps } from '../Text/Text.styles';

export interface TitleProps extends TextProps {
	order: TitleOrder;
}

export type TitleOrder = 1 | 2 | 3 | 4 | 5 | 6;

export type HTMLHeadingElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const titleSizes = {
	1: {
		fontSize: 34,
		lineHeight: 1.3
	},
	2: {
		fontSize: 26,
		lineHeight: 1.35
	},
	3: {
		fontSize: 22,
		lineHeight: 1.4
	},
	4: {
		fontSize: 18,
		lineHeight: 1.45
	},
	5: {
		fontSize: 16,
		lineHeight: 1.5
	},
	6: {
		fontSize: 14,
		lineHeight: 1.5
	}
};

export default createStyles(() => {
	return {
		root: {
			margin: 0
		}
	};
});
