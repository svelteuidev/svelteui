import { createStyles } from '$lib/styles';

export interface DrawerStylesParams {
	overflow: 'outside' | 'inside';
	size: string | number;
	speed: number;
	zIndex: number;
	position: 'right' | 'left' | 'top' | 'bottom';
}

export const sizes = {
	xs: 320,
	sm: 380,
	md: 440,
	lg: 620,
	xl: 780,
	full: '100%'
};

export default createStyles((theme, { overflow, size, zIndex, position, speed }: DrawerStylesParams) => {
	const customSize = size in sizes === false;
	const computedSize = typeof size === 'string' && customSize ? size : theme.fn.size({ sizes, size });
	return {
		close: {},
		overlay: {},
		root: {
			position: 'fixed',
			zIndex,
			top: 0,
			left: 0,
			right: 0,
			bottom: 0


		},

		wrapper: {
			backgroundColor: 'white',
			zIndex: 1111,


		},
		title: {
			marginRight: +theme.space.md.value,
			textOverflow: 'ellipsis',
			display: 'block',
			wordBreak: 'break-word',
		},

		Drawer: {
			[`${theme.dark} &`]: {
				backgroundColor: theme.fn.themeColor('dark', 7)
			},
			position: 'fixed',
			top: `${position === 'top' || position === 'left' || position === 'right' ? (position === 'top' ? ('-' + computedSize) : 0) : 'auto'}`,
			bottom: `${position === 'bottom' || position === 'left' || position === 'right' ? (position === 'bottom' ? ('-' + computedSize) : 0) : 'auto'} `,
			right: `${position === 'right' || position === 'bottom' || position === 'top' ? (position === 'right' ? ('-' + computedSize) : 0) : 'auto'} `,
			left: `${position === 'left' || position === 'bottom' || position === 'top' ? (position === 'left' ? ('-' + computedSize) : 0) : 'auto'} `,
			width: position === 'left' || position === 'right' ? computedSize : '100vw',
			height: position === 'top' || position === 'bottom' ? computedSize : '100vh',
			boxShadow: '-6px 0 16px -8px #00000014, -9px 0 28px #0000000d, -12px 0 48px 16px #00000008;',
			transition: `${position} ${speed}ms cubic-bezier(.23,1,.32,1),box-shadow ${speed}ms cubic-bezier(.23,1,.32,1)`,
			outline: 0,
			backgroundColor: 'white',
			zIndex: 1

		},

		header: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			marginBottom: parseInt(theme.space.md.value),
			marginRight: -9
		},

		body: {
			maxHeight: overflow === 'inside' ? 'calc(100vh - 185px)' : null,
			overflowY: overflow === 'inside' ? 'auto' : null,
			wordBreak: 'break-word'
		}
	};
});
