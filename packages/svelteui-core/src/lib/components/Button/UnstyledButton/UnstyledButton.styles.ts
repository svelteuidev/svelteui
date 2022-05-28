import { createStyles } from '$lib/styles';
import type { ButtonProps } from '../Button.styles';

export interface UnstyledButtonProps extends ButtonProps {
	root: keyof HTMLElementTagNameMap;
}

export default createStyles((theme, _, dark) => ({
	root: {
		[`${dark.selector} &`]: {
			color: theme.colors['dark50'].value
		},
		focusRing: 'auto',
		cursor: 'pointer',
		border: 0,
		padding: 0,
		appearance: 'none',
		fontSize: theme.fontSizes.md,
		backgroundColor: 'transparent',
		textAlign: 'left',
		color: 'black',
		textDecoration: 'none'
	}
}));
