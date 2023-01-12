import { createStyles } from '$lib/styles';
import type { SvelteUINumberSize } from '$lib/styles';

export interface IconRendererStylesParams {
	iconSize: SvelteUINumberSize;
}

export default createStyles((_, { iconSize }: IconRendererStylesParams) => {
	return {
		root: {
			focusRing: 'auto',
			position: 'relative',
			appearance: 'none',
			WebkitAppearance: 'none',
			WebkitTapHighlightColor: 'transparent',
			boxSizing: 'border-box',
			height: `${iconSize}px`,
			minHeight: `${iconSize}px`,
			width: `${iconSize}px`,
			minWidth: `${iconSize}px`,
			padding: 0,
			lineHeight: 1,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			cursor: 'pointer',
			textDecoration: 'none'
		},
		icon: {
			height: `${iconSize}px`,
			minHeight: `${iconSize}px`,
			position: 'static',
			margin: 0,
			ml: 0,
			mr: 0,
			mt: 0,
			mb: 0
		}
	};
});
