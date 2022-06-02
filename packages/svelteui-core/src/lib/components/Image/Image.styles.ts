import { createStyles } from '$lib/styles';
import type { DefaultProps, Override, SvelteUINumberSize } from '$lib/styles';

export interface ImageProps extends DefaultProps {
	override: Override['props'];
	overridePlaceholder: Override['props'];
	radius: SvelteUINumberSize;
	className: string;
	src: string;
	alt: string;
	fit: 'cover' | 'contain' | undefined;
	width: string | number;
	height: string | number;
	caption: string;
	usePlaceholder: boolean;
}

export interface ImageStylesParams {
	radius: SvelteUINumberSize;
	width: string | number;
	height: string | number;
	fit: 'cover' | 'contain' | undefined;
}

export default createStyles((theme, { radius, height, width, fit }: ImageStylesParams) => {
	return {
		root: {},
		imageWrapper: {
			position: 'relative'
		},

		figure: {
			margin: 0
		},

		image: {
			width,
			height,
			fontFamily: '$standard',
			display: 'block',
			border: 0,
			borderRadius: theme.fn.radius(radius),
			objectFit: fit
		},

		caption: {
			[`${theme.dark} &`]: {
				color: theme.fn.themeColor('dark', 2)
			},
			color: theme.fn.themeColor('gray', 7),
			marginTop: theme.space.xsPX.value
		},

		placeholder: {
			[`${theme.dark} &`]: {
				color: theme.fn.themeColor('dark', 2),
				backgroundColor: theme.fn.themeColor('dark', 8)
			},
			width,
			height,
			position: 'absolute',
			top: 0,
			right: 0,
			left: 0,
			bottom: 0,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			color: theme.fn.themeColor('gray', 6),
			backgroundColor: theme.fn.themeColor('gray', 0),
			borderRadius: theme.fn.radius(radius)
		}
	};
});
