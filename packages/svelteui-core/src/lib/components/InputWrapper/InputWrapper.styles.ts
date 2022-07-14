import { createStyles } from '$lib/styles';
import type { DefaultProps, SvelteUISize } from '$lib/styles';

export interface InputWrapperBaseProps extends DefaultProps {
	label?: string;
	description?: string;
	error?: string | boolean;
	required?: boolean;
	labelProps?: Record<string, unknown>;
	descriptionProps?: Record<string, unknown>;
	errorProps?: Record<string, unknown>;
}
export interface InputWrapperProps extends InputWrapperBaseProps {
	id?: string;
	labelElement?: 'label' | 'div';
	size?: SvelteUISize;
}

export interface InputWrapperStyleParams {
	size: SvelteUISize;
}

export default createStyles((theme, { size }: InputWrapperStyleParams) => {
	return {
		root: {
			lineHeight: theme.lineHeights.md.value
		},

		label: {
			[`${theme.dark} &`]: {
				color: theme.fn.themeColor('dark', 0)
			},
			display: 'inline-block',
			marginBottom: 4,
			fontSize: theme.fontSizes[size].value,
			fontWeight: 500,
			color: theme.fn.themeColor('gray', 9),
			wordBreak: 'break-word',
			cursor: 'default',
			WebkitTapHighlightColor: 'transparent'
		},

		error: {
			[`${theme.dark} &`]: {
				color: theme.fn.themeColor('red', 6)
			},
			marginTop: 5,
			wordBreak: 'break-word',
			color: theme.fn.themeColor('red', 7)
		},

		description: {
			[`${theme.dark} &`]: {
				color: `${theme.fn.themeColor('dark', 2)} !important`
			},
			marginTop: -3,
			marginBottom: 7,
			wordBreak: 'break-word',
			color: `${theme.fn.themeColor('gray', 6)} !important`,
			fontSize: theme.fontSizes[size].value,
			lineHeight: 1.2
		},

		required: {
			[`${theme.dark} &`]: {
				color: '$red500'
			},
			color: theme.fn.themeColor('red', 7)
		}
	};
});
