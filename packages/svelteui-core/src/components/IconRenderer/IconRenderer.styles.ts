import { createStyles } from '$lib/styles-old';
import type { SvelteUINumberSize } from '$lib/styles-old';

export interface IconRendererStylesParams {
	iconSize: SvelteUINumberSize;
}

export default createStyles((theme, { iconSize }: IconRendererStylesParams) => {
	return {
		root: {
			focusRing: 'auto',
			position: 'relative',
			appearance: 'none',
			WebkitAppearance: 'none',
			WebkitTapHighlightColor: 'transparent',
			boxSizing: 'border-box',
			height: `${theme.fn.size({ size: iconSize, sizes: theme.space })}px`,
			minHeight: `${theme.fn.size({ size: iconSize, sizes: theme.space })}px`,
			width: `${theme.fn.size({ size: iconSize, sizes: theme.space })}px`,
			minWidth: `${theme.fn.size({ size: iconSize, sizes: theme.space })}px`,
			padding: 0,
			lineHeight: 1,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			cursor: 'pointer',
			textDecoration: 'none'
		},
		icon: {
			height: `${theme.fn.size({ size: iconSize, sizes: theme.space })}px`,
			minHeight: `${theme.fn.size({ size: iconSize, sizes: theme.space })}px`,
			position: 'static',
			margin: 0,
			ml: 0,
			mr: 0,
			mt: 0,
			mb: 0
		}
	};
});
