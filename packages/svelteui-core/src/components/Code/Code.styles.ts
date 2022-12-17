import { createStyles, fns } from '$lib/styles';
import type { SvelteUIColor } from '$lib/styles';

export interface CodeStyleParams {
	color: SvelteUIColor;
	noMono: boolean;
	block: boolean;
	width: number;
}

const { rgba } = fns;

export default createStyles((theme, { color, block, noMono, width }: CodeStyleParams) => {
	const { themeColor }: typeof theme.fn = theme.fn;
	return {
		root: {
			darkMode: {
				backgroundColor: color === 'dark' ? themeColor(color, 4) : rgba(themeColor(color, 8), 0.35),
				color: color === 'dark' ? themeColor('dark', 0) : 'white'
			},
			position: 'relative',
			lineHeight: noMono ? 0 : theme.lineHeights.md.value,
			padding: `2px 10px`,
			borderRadius: theme.radii.sm.value,
			color: themeColor('dark', 7),
			backgroundColor: themeColor(color, 0),
			fontFamily: noMono ? '$standard' : '$mono',
			fontSize: '$sm',
			width: block ? `${width}%` : 'auto'
		},
		copy: {
			darkMode: {
				backgroundColor: 'rgba(52, 58, 64, 0.35);',
				color: 'white'
			},
			position: 'sticky',
			bottom: '60%',
			left: '99%',
			zIndex: '2',
			backgroundColor: 'white'
		},
		block: {
			margin: 0,
			padding: theme.space.xsPX.value,
			overflowX: 'auto'
		}
	};
});
