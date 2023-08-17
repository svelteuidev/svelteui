import { createStyles } from '$lib/styles';
import type { MenuProps } from './Menu';

export interface MenuStyleParams {
	size: MenuProps['size'];
}

export const sizes = {
	xs: 120,
	sm: 160,
	md: 200,
	lg: 240,
	xl: 300
};

const MENU_PADDING = 4;

export function getNextItem(active: number, items: HTMLButtonElement[]) {
	for (let i = active + 1; i < items.length; i += 1) {
		if (!items[i].disabled) {
			return i;
		}
	}

	return active;
}

export function findInitialItem(items: HTMLButtonElement[]) {
	for (let i = 0; i < items.length; i += 1) {
		if (!items[i].disabled) {
			return i;
		}
	}

	return -1;
}

export function getPreviousItem(active: number, items: HTMLButtonElement[]) {
	for (let i = active - 1; i >= 0; i -= 1) {
		if (!items[i].disabled) {
			return i;
		}
	}

	if (!items[active]) {
		return findInitialItem(items);
	}

	return active;
}

export default createStyles((theme, { size }: MenuStyleParams) => ({
	root: {
		display: 'inline-block',
		position: 'relative'
	},

	arrow: {
		darkMode: {
			borderColor: theme.fn.themeColor('dark', 6),
			background: theme.fn.themeColor('dark', 6)
		},
		borderColor: theme.fn.themeColor('gray', 2),
		background: theme.colors.white.value
	},

	body: {
		darkMode: {
			border: `1px solid ${theme.fn.themeColor('dark', 6)}`,
			backgroundColor: theme.fn.themeColor('dark', 6),
			'& .svelteui-Divider-horizontal': {
				borderTopColor: theme.fn.themeColor('dark', 7)
			}
		},
		width: theme.fn.size({ size, sizes }),
		overflow: 'hidden',
		pointerEvents: 'all',
		border: `1px solid ${theme.fn.themeColor('gray', 2)}`,
		backgroundColor: theme.colors.white.value,
		padding: MENU_PADDING,

		'& .svelteui-Divider-horizontal': {
			margin: `${parseInt(theme.space.xs.value) / 2}px -${MENU_PADDING}px`,
			borderTopColor: theme.fn.themeColor('gray', 2)
		}
	},

	label: {
		darkMode: {
			color: theme.fn.themeColor('dark', 2)
		},
		color: theme.fn.themeColor('gray', 2),
		fontWeight: 500,
		fontSize: theme.fontSizes.xs,
		fontFamily: theme.fonts.standard.value,
		padding: `${parseInt(theme.space.xs.value) / 2}px ${parseInt(theme.space.sm.value)}px`,
		cursor: 'default'
	}
}));
