import { createStyles } from '$lib/styles';
import type { SvelteUINumberSize, SvelteUIColor } from '$lib/styles';


export interface FileUploadStylesParams {
	color: SvelteUIColor;
	size: SvelteUINumberSize;
}

export const fontSizes = {
	xs: 12,
	sm: 14,
	md: 16,
	lg: 18,
	xl: 20
};

export const heights = {
	xs: 30,
	sm: 38,
	md: 48,
	lg: 58,
	xl: 68
};


export default createStyles(
	(theme, { color, size }: FileUploadStylesParams) => ({
		root: {
			position: 'relative',
			display: 'flex'
		},
		drag: {
			[`${theme.dark} &`]: {
				background: theme.fn.themeColor('dark', 4),
				border: `1px dashed ${theme.fn.themeColor('dark', 4)}`,
			},
			position: 'relative',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			gap: '12px',
			padding: '20px 10px',
			width: '100%',
			height: '100%',
			textAlign: 'center',
			background: '#fafafa',
			border: `1px dashed ${theme.fn.themeColor('gray', 4)}`,
			borderRadius: '2px',
			cursor: 'pointer',
			'&:hover': {
				border: `1px dashed ${color}`,
			},
			'&.disabled *': {
				[`${theme.dark} &`]: {
					background: theme.fn.themeColor('dark', 4),
					border: `1px dashed ${theme.fn.themeColor('dark', 4)}`,
					color: theme.fn.themeColor('gray', 6)
				},
				background: theme.fn.themeColor('light', 4),
				border: `1px dashed ${theme.fn.themeColor('light', 4)}`,
				color: theme.fn.themeColor('gray', 4)
			}

		},
		inputContainer: {
			width: 0,
			height: 0,
			padding: 0,
			opacity: 0,
			margin: 0,
			overflow: 'hidden'
		},
		input: {
			visibility: 'hidden'
		},
		icon: {
			fontSize: '30px'
		},
		uploadIcon: {
			paddingRight: '15px'
		},
		active: {
			backgroundColor: `${color}`
		},
		fileItemWrapper: {
			[`${theme.dark} &`]: {
				border: `1px solid ${theme.fn.themeColor('dark', 4)}`,
			},
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			position: 'relative',
			height: heights[size],
			padding: '8px',
			border: `1px solid ${theme.fn.themeColor('gray', 4)}`,
			borderRadius: '2px',
			margin: '8px 0px'
		},
		fileItemIcon: {
			lineHeight: '60px',
			textAlign: 'center',
			opacity: '.8',
			flex: 'none',

		},
		fileItemName: {
			flex: 'auto',
			margin: 0,
			padding: '0 8px',
			fontSize: fontSizes[size]
		},
		fileItemAction: {
			position: 'static',
			marginLeft: '8px',
			marginRight: '8px',

		},
		buttonType: {
			display: 'flex',
			gap: '10px'
		}
	})
);
