import { createStyles } from '$lib/styles';
import type { SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import type { DividerVariant } from "./Divider";

export interface DividerStyleParams {
	color?: SvelteUIColor;
	size?: SvelteUINumberSize;
	variant?: DividerVariant;
}

export const sizes = {
	xs: 1,
	sm: 2,
	md: 3,
	lg: 4,
	xl: 5
};

export default createStyles((theme, { color, size, variant }: DividerStyleParams) => {
	const { size: sizeFn, themeColor } = theme.fn;
	return {
		root: {
			'&.svelteui-Divider-horizontal': {
				border: 0,
				borderTopWidth: typeof size === 'number' ? `${size}px` : sizeFn({ size, sizes }),
				borderTopColor: themeColor(color, 4),
				borderTopStyle: variant,
				margin: '12px 0px 12px 0px'
			},
			'&.svelteui-Divider-vertical': {
				border: 0,
				alignSelf: 'stretch',
				height: '100%',
				borderLeftWidth: typeof size === 'number' ? `${size}px` : sizeFn({ size, sizes }),
				borderLeftColor: themeColor(color, 4),
				borderLeftStyle: variant
			},
			'&.shows-label': {
				borderTop: '0 !important'
			}
		},
		label: {
			display: 'flex',
			alignItems: 'center',
			color: color === 'dark' ? themeColor('dark', 1) : themeColor(color, 6),
			[`${theme.dark} &`]: {
				color: color === 'dark' ? themeColor('dark', 1) : themeColor(color, 5)
			},

			'&.left': {
				'&::before': {
					display: 'none'
				}
			},

			'&.right': {
				'&::after': {
					display: 'none'
				}
			},

			'&::before': {
				content: '""',
				flex: 1,
				height: 1,
				borderTopWidth: typeof size === 'number' ? `${size}px` : sizeFn({ size, sizes }),
				borderTopStyle: `${variant}`,
				borderTopColor: themeColor(color, 4),
				marginRight: '10px',
				[`${theme.dark} &`]: {
					borderTopColor: themeColor(color, 3)
				}
			},

			'&::after': {
				content: '""',
				flex: 1,
				borderTopWidth: typeof size === 'number' ? `${size}px` : sizeFn({ size, sizes }),
				borderTopStyle: `${variant}`,
				borderTopColor: themeColor(color, 3),
				marginLeft: '10px'
			}
		}
	};
});
