import { createStyles } from '$lib/styles';
import type { SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import type { ResultViewVariant } from './ResultView';

export const fontSizes = {
	xs: 20,
	sm: 24,
	md: 28,
	lg: 32,
	xl: 36
};


export interface ResultViewStylesParams {
	color: SvelteUIColor;
	size: SvelteUINumberSize;
}

export default createStyles((theme, { color, size }: ResultViewStylesParams, getRef) => {
	return {
		root: {
			position: 'relative',
			overflow: 'hidden',
			padding: `${theme.space.sm.value}px ${theme.space.md.value}px`,
			border: '1px solid transparent'
		},
		wrapper: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			gap: '20px'

		},
		content: {
			flex: 1,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			gap: '5px',
			flexDirection: 'column',
		},
		innerContent: {
			display:'block',
			width:'100%',
			background: theme.colors.gray50.value,
			padding:'5px 20px',
			fontSize: fontSizes[size]*0.64

		},
		title: {
			boxSizing: 'border-box',
			margin: 0,
			marginBottom: 3,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			lineHeight: theme.lineHeights.sm.value,
			fontSize: fontSizes[size],
			fontWeight: '$medium'
		},
		icon: {
			lineHeight: 1,
			width: 20,
			height: 20,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-start',
		
			marginTop: 1,
			color: theme.fn.variant({ variant: 'light', color }).color[1],

		},
		subtitle: {
			darkMode: {
				color: theme.colors.gray900.value
			},
			lineHeight: theme.lineHeights.sm.value,
			textOverflow: 'ellipsis',
			overflow: 'hidden',
			fontSize: fontSizes[size] * 0.6,
			color: theme.colors.gray600.value
		},
		extra: {

			marginTop: '20px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			gap: '15px',
			flexDirection: 'row',

		}
	};
});
