import { createStyles } from '@svelteuidev/core';
import type { SvelteUISize } from '@svelteuidev/core';

export const inputSizes = {
	xs: 20,
	sm: 23,
	md: 25,
	lg: 27,
	xl: 29
};

interface TimeInputBaseStyleParams {
	size: SvelteUISize;
	hasValue: boolean;
}

export default createStyles((theme, { size, hasValue }: TimeInputBaseStyleParams) => {
	return {
		root: {
			width: theme.fn.size({ size, sizes: inputSizes }),
			appearance: 'none',
			backgroundColor: 'transparent',
			color: 'inherit',
			padding: 0,
			textAlign: 'center',
			border: '1px solid transparent',
			fontSize: theme.fontSizes[size].value,
			lineHeight: 1,
			outline: 0,

			'&:focus': {
				textAlign: hasValue ? undefined : 'start'
			},

			'&::placeholder': {
				textAlign: 'center'
			},

			'&[disabled]': {
				[`${theme.dark} &`]: {
					color: theme.fn.themeColor('dark', 2)
				},
				color: theme.fn.themeColor('gray', 7),
				cursor: 'not-allowed'
			}
		}
	};
});
