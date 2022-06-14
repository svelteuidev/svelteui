import { createStyles, rgba } from '$lib/styles';
import type { Component, LiteralUnion } from '$lib/internal';
import type { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';

export interface SharedMenuItemProps extends DefaultProps {
	color?: SvelteUIColor;
	disabled?: boolean;
}

export interface MenuItemProps extends SharedMenuItemProps {
	root: LiteralUnion<keyof HTMLElementTagNameMap | Component, string>;
}

export interface MenuItemStylesParams {
	radius: SvelteUINumberSize;
	color: SvelteUIColor;
}

export default createStyles((theme, { color, radius }: MenuItemStylesParams) => {
	return {
		root: {
			'&.item': {
				[`${theme.dark} &`]: {
					color: color ? theme.fn.themeColor(color, 5) : theme.fn.themeColor('dark', 0),
					'&:disabled': {
						color: theme.fn.themeColor('dark', 3)
					}
				},
				WebkitTapHighlightColor: 'transparent',
				fontSize: theme.fontSizes.sm,
				border: 0,
				backgroundColor: 'transparent',
				outline: 0,
				width: '100%',
				textAlign: 'left',
				display: 'inline-block',
				textDecoration: 'none',
				boxSizing: 'border-box',
				padding: `${+theme.space.xs.value}px ${+theme.space.sm.value}px`,
				cursor: 'pointer',
				borderRadius: theme.fn.radius(radius),
				color: color ? theme.fn.themeColor(color, 7) : 'black',

				'&:disabled': {
					color: theme.fn.themeColor('gray', 5),
					pointerEvents: 'none'
				}
			},
			'&.itemHovered': {
				[`${theme.dark} &`]: {
					backgroundColor: color
						? rgba(theme.fn.themeColor(color, 8), 0.35)
						: rgba(theme.fn.themeColor('dark', 3), 0.35)
				},
				backgroundColor: color
					? rgba(theme.fn.themeColor(color, 0), 1)
					: theme.fn.themeColor('gray', 0)
			}
		},

		itemInner: {
			display: 'flex',
			alignItems: 'center',
			height: '100%'
		},

		itemBody: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			flex: 1
		},

		itemIcon: {
			marginRight: theme.space.xsPX.value,

			'& *': {
				display: 'block'
			}
		},

		itemLabel: {
			lineHeight: 1
		}
	};
});
