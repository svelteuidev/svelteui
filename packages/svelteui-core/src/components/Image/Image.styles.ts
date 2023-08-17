import { createStyles } from '$lib/styles';
import type { SvelteUINumberSize } from '$lib/styles';
import type { ImageFit } from './Image';

export interface ImageStylesParams {
	radius: SvelteUINumberSize;
	width: string | number;
	height: string | number;
	fit: ImageFit;
}

export default createStyles((theme, { radius, height, width, fit }: ImageStylesParams) => {
	return {
		root: {
			fontFamily: theme.fonts.standard.value ?? 'sans-serif'
		},
		imageWrapper: {
			position: 'relative'
		},

		figure: {
			margin: 0
		},

		image: {
			width,
			height,
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
