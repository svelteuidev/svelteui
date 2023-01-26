import { keyframes, createStyles } from '$lib/styles';
import type { SvelteUINumberSize } from '$lib/styles';

export interface SkeletonStyleParams {
	height: number | string;
	width: number | string;
	circle: boolean;
	radius: SvelteUINumberSize;
	animate: boolean;
}

export const fade = keyframes({
	'from, to': { opacity: 0.4 },
	'50%': { opacity: 1 }
});

export default createStyles(
	(theme, { animate, circle, height, radius, width }: SkeletonStyleParams) => {
		return {
			root: {
				[`${theme.dark} &`]: {
					'&.visible': {
						'&::before': {
							background: theme.fn.themeColor('dark', 7)
						},

						'&::after': {
							background: theme.fn.themeColor('dark', 4)
						}
					}
				},
				height,
				width: circle ? height : `${width}%`,
				borderRadius: circle ? height : `$${radius}`,
				position: 'relative',
				overflow: 'hidden',

				'&.visible': {
					'&::before': {
						content: '""',
						position: 'absolute',
						background: 'white',
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						zIndex: 10
					},

					'&::after': {
						content: '""',
						position: 'absolute',
						background: theme.fn.themeColor('gray', 3),
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						animation: animate ? `${fade} 1500ms linear infinite` : 'none',
						zIndex: 11
					}
				}
			}
		};
	}
);
