import { createStyles } from '$lib/styles';

export default createStyles((theme) => ({
	root: {
		[`${theme.dark} &`]: {
			color: theme.colors['dark50']?.value
		},
		focusRing: 'auto',
		cursor: 'pointer',
		border: 0,
		padding: 0,
		appearance: 'none',
		fontSize: theme.fontSizes.md.value,
		backgroundColor: 'transparent',
		textAlign: 'left',
		color: 'black',
		textDecoration: 'none'
	}
}));
