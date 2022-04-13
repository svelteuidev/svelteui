import { css } from '@svelteuidev/core';

// @ts-ignore
export const NavbarStyles = css({
	[`.dark-theme &`]: {
		backgroundColor: '$dark700',
		borderBottom: '2px solid $gray600'
	},
	position: 'fixed',
	top: '0px',
	left: '0px',
	width: '100%',
	zIndex: 20,
	height: '5rem',
	display: 'flex',
	alignItems: 'center',
	backgroundColor: 'White',
	boxShadow: '$sm',
	'& a': {
		textDecoration: 'none',
		color: '$gray600',
		fontSize: '1.5rem',
		lineHeight: '2rem'
	},
	'& nav': {
		size: '100%',
		marginRight: 'auto',
		marginLeft: 'auto'
	},
	'& .content': {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: '100%',
		paddingLeft: '1.25rem',
		paddingRight: '1.25rem',
		'@md': {
			paddingLeft: '2.5rem',
			paddingRight: '2.5rem'
		}
	},
	'& .controls': {
		display: 'none',
		alignItems: 'center',
		gap: '1rem',
		'@md': {
			display: 'flex'
		}
	},
	'& .token-ui': {
		color: '$blue500'
	},
	'& .token-version': {
		display: 'none',
		fontWeight: '$Normal',
		color: '$gray600',
		'@md': {
			display: 'inline-block'
		}
	}
});

// @ts-ignore
export const BurgerStyles = css({
	display: 'block',
	'@md': {
		display: 'none'
	}
});

export const override = {
	['.dark-theme &']: {
		backgroundColor: '$indigo700'
	},
	backgroundColor: '#7289da',
	'&:hover': { backgroundColor: '$indigo500' }
};
