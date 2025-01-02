import { createStyles } from '@svelteuidev/core';

type WavesStyleParams = {
	width: number
	height: number
	flip: boolean
	alt: boolean
}

export default createStyles((theme, { width, height, flip, alt }: WavesStyleParams) => ({
	root: {
		[`${theme.dark} &`]: {
			bc: theme.fn.themeColor('dark', alt ? 8 : 7)
		},
		backgroundColor: alt ? 'white' : theme.fn.themeColor('gray', 0)
	},

	waves: {
		[`${theme.dark} &`]: {
			fill: theme.fn.themeColor('dark', alt ? 7 : 8)
		},
		fill: alt ? theme.fn.themeColor('gray', 0) : 'white',
		height: 18,
		width: `${width}%`,
		transform: flip ? 'scaleX(-1)' : undefined,
		filter: alt ? undefined : 'drop-shadow(10px 5px 5px rgba(0, 0, 0, 0.03))',

		'@sm': {
			height
		}
	}
}));
