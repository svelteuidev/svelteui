import { createStyles } from '$lib/styles';
import type { SvelteUIColor, SvelteUINumberSize } from '$lib/styles';

export interface MenuItemStylesParams {
	radius: SvelteUINumberSize;
	color: SvelteUIColor;
}

function findAncestor(element: HTMLElement, className: string) {
	let _element = element;
	while ((_element = _element.parentElement) && !_element.classList.contains(className));
	return _element;
}

export function getContextItemIndex(
	options: { elementSelector: string; parentClassName: string },
	node: HTMLElement
) {
	if (!node) {
		return -1;
	}

	return Array.from(
		findAncestor(node, options.parentClassName)?.querySelectorAll(options.elementSelector) ?? []
	).findIndex((element) => element === node);
}

export default createStyles((theme, { color, radius }: MenuItemStylesParams) => {
	return {
		root: {
			darkMode: {
				color: color ? theme.fn.themeColor(color, 5) : theme.fn.themeColor('dark', 0),
				'&:disabled': {
					color: theme.fn.themeColor('dark', 3)
				}
			},
			WebkitTapHighlightColor: 'transparent',
			fontFamily: theme.fonts.standard.value,
			fontSize: theme.fontSizes.sm.value,
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
			},
			'&.itemHovered': {
				[`${theme.dark} &`]: {
					backgroundColor: color
						? theme.fn.rgba(theme.fn.themeColor(color, 8), 0.35)
						: theme.fn.rgba(theme.fn.themeColor('dark', 3), 0.35)
				},
				backgroundColor: color
					? theme.fn.rgba(theme.fn.themeColor(color, 0), 1)
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
