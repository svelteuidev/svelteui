import { createStyles } from '$lib/styles';
import type { LiteralUnion } from '$lib/internal';
import type {
	DefaultProps,
	SvelteUINumberSize,
	SvelteUIShadow,
	Transition,
	SvelteUISize
} from '$lib/styles';

export interface ModalProps extends DefaultProps {
	opened: boolean;
	title?: any;
	zIndex?: number;
	overflow?: 'outside' | 'inside';
	withCloseButton?: boolean;
	overlayOpacity?: number;
	overlayColor?: string;
	overlayBlur?: number;
	radius?: SvelteUINumberSize;
	size?: LiteralUnion<SvelteUISize, number | string>;
	transition?: Transition;
	transitionDuration?: number;
	transitionTimingFunction?: string;
	closeButtonLabel?: string;
	id?: string;
	shadow?: SvelteUIShadow;
	padding?: SvelteUINumberSize;
	closeOnClickOutside?: boolean;
	closeOnEscape?: boolean;
	trapFocus?: boolean;
	centered?: boolean;
	target?: HTMLElement | string;
	withinPortal?: boolean;
	onClose(args?: any): any;
}

export interface ModalStylesParams {
	overflow: 'outside' | 'inside';
	size: string | number;
	centered: boolean;
	zIndex: number;
}

export const sizes = {
	xs: 320,
	sm: 380,
	md: 440,
	lg: 620,
	xl: 780,
	full: '100%'
};

export default createStyles((theme, { centered, overflow, size, zIndex }: ModalStylesParams) => {
	const customSize = size in sizes === false;
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

		inner: {
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			overflowY: 'auto',
			padding: `${+theme.space.xl.value * 2}px ${+theme.space.md.value}px`,
			display: 'flex',
			justifyContent: 'center',
			alignItems: centered ? 'center' : 'flex-start'
		},

		title: {
			marginRight: +theme.space.md.value,
			textOverflow: 'ellipsis',
			display: 'block',
			wordBreak: 'break-word'
		},

		modal: {
			[`${theme.dark} &`]: {
				backgroundColor: theme.fn.themeColor('dark', 7)
			},
			position: 'relative',
			width: typeof size === 'string' && customSize ? size : theme.fn.size({ sizes, size }),
			outline: 0,
			backgroundColor: 'white',
			marginTop: centered ? 'auto' : undefined,
			marginBottom: centered ? 'auto' : undefined,
			zIndex: 1,
			marginLeft: 'calc(var(--removed-scroll-width, 0px) * -1)'
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
