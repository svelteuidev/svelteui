import { createStyles } from '$lib/styles';
import type { DefaultProps, SvelteUISize } from '$lib/styles';
import type { Component } from '$lib/internal';
import type { SelectItem } from '../types';

export interface SelectContentProps extends DefaultProps {
	data: SelectItem[];
	value: string;
	hovered: number;
	isItemSelected?(itemValue: string): boolean;
	size?: SvelteUISize;
	itemComponent?: Component;
	nothingFoundLabel?: Component;
}

export interface SelectContentStyleParams {
	size: SvelteUISize;
}

export default createStyles((theme, { size }: SelectContentStyleParams) => {
	return {
		root: {},
		item: {
			boxSizing: 'border-box',
			textAlign: 'left',
			width: '100%',
			padding: `${theme.fn.size({ size, sizes: theme.space }) / 1.5}px ${theme.fn.size({
				size,
				sizes: theme.space
			})}px`,
			cursor: 'pointer',
			fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
			color: theme.colors.black.value,
			borderRadius: theme.fn.radius('sm'),

			darkMode: {
				color: theme.fn.themeColor('dark', 0)
			},

			'&[data-hovered]': {
				backgroundColor: theme.fn.themeColor('gray', 1),
				darkMode: {
					backgroundColor: theme.fn.themeColor('dark', 4)
				}
			},

			'&[data-selected]': {
				backgroundColor: theme.fn.variant({ variant: 'filled' }).background,
				color: theme.fn.variant({ variant: 'filled' }).color,
				'@media (hover: hover)': {
					'&:hover': {
						backgroundColor: theme.fn.variant({ variant: 'filled' }).hover
					}
				},
				'@media (hover: none)': {
					'&:active': {
						backgroundColor: theme.fn.variant({ variant: 'filled' }).hover
					}
				}
			},

			'&[data-disabled]': {
				cursor: 'default',
				color: theme.fn.themeColor('dark', 2)
			}
		},
		nothingFound: {
			boxSizing: 'border-box',
			color: theme.fn.themeColor('gray', 6),
			paddingTop: theme.fn.size({ size, sizes: theme.space }) / 2,
			paddingBottom: theme.fn.size({ size, sizes: theme.space }) / 2,
			textAlign: 'center'
		}
	};
});
