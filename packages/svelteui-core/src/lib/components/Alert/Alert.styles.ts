import { vFunc, createStyles } from '$lib/styles';
import type { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import type { Component } from '$lib/internal';

export interface AlertProps extends DefaultProps {
	title: string;
	color: SvelteUIColor;
	radius: SvelteUINumberSize;
	variant: AlertVariant;
	icon: Component | HTMLOrSVGElement;
	iconSize: number;
	withCloseButton: boolean;
	closeButtonLabel: string;
	onClose(args?: any): any;
}

export type AlertVariant = 'filled' | 'outline' | 'light';

export interface AlertStylesParams {
	color: SvelteUIColor;
	radius: SvelteUINumberSize;
	variant: AlertVariant;
}

export default createStyles((theme, { color, radius, variant }: AlertStylesParams) => {
	return {
		root: {
			position: 'relative',
			overflow: 'hidden',
			padding: `${theme.space.smPX} ${theme.space.mdPX}`,
			borderRadius: theme.fn.radius(radius),
			border: '1px solid transparent'
		},
		wrapper: {
			display: 'flex'
		},
		content: {
			flex: 1
		},
		title: {
			boxSizing: 'border-box',
			margin: 0,
			marginBottom: 7,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			lineHeight: theme.lineHeights.sm,
			fontSize: theme.fontSizes.sm,
			fontWeight: '$bold'
		},
		label: {
			display: 'block',
			overflow: 'hidden',
			textOverflow: 'ellipsis'
		},
		icon: {
			lineHeight: 1,
			width: 20,
			height: 20,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-start',
			marginRight: theme.space.mdPX,
			marginTop: 1
		},
		message: {
			lineHeight: theme.lineHeights.sm,
			textOverflow: 'ellipsis',
			overflow: 'hidden',
			fontSize: theme.fontSizes.sm,
			color:
				variant === 'filled'
					? theme.colors.white
					: theme.colorScheme === 'dark'
					? variant === 'light'
						? theme.colors.white
						: theme.fn.themeColor('dark', 0)
					: theme.colors.black
		},
		closeButton: {
			marginTop: 2,
			color:
				variant === 'filled'
					? theme.colors.white
					: theme.colorScheme === 'dark'
					? variant === 'light'
						? theme.colors.white
						: theme.fn.themeColor('dark', 0)
					: theme.colors.black
		},
		variants: {
			variation: vFunc(color, undefined)
		}
	};
});
