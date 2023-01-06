import { createStyles } from '$lib/styles';
import type { DefaultProps, SvelteUIShadow, SvelteUISize } from '$lib/styles';
import type { Component, TransitionName, TransitionOptions } from '$lib/internal';
import type { InputWrapperBaseProps, InputWrapperProps } from '../InputWrapper';
import type { InputBaseProps } from '../Input';
import type { SelectItem } from './types';

export interface BaseSelectProps<T, V> {
	data: (string | T)[];
	value?: V;
	defaultValue?: V;
	size?: SvelteUISize;
	transition?: TransitionName;
	transitionOptions?: TransitionOptions;
	shadow?: SvelteUIShadow;
	itemComponent?: Component;
	nothingFoundLabel?: Component;
	zIndex?: number;
	dropdownPosition?: 'bottom' | 'top';
	// switchDirectionOnFlip?: boolean;
}

export type ExtendedSelectProps = Omit<InputWrapperBaseProps, 'element'> &
	Omit<InputBaseProps, 'element'>;

export interface SelectProps
	extends DefaultProps<HTMLInputElement>,
		BaseSelectProps<SelectItem, string | null>,
		ExtendedSelectProps {
	maxDropdownHeight?: number;
	dropdownComponent?: Component;
	wrapperProps?: Partial<InputWrapperProps>;
}

export interface SelectStyleParams {
	size: SvelteUISize;
	shadow: SvelteUIShadow;
}

export default createStyles((theme, { size, shadow }: SelectStyleParams) => {
	return {
		root: {},
		input: {
			backgroundColor: 'red',
			'&:not(:disabled)': {
				cursor: 'pointer',

				'&::selection': {
					backgroundColor: 'transparent'
				}
			}
		},
		wrapper: {
			padding: 4,
			display: 'flex',
			width: '100%',
			boxSizing: 'border-box'
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
