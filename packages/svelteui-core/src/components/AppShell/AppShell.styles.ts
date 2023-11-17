import { createStyles, fns } from '$lib/styles-old';
import { theme as appShellTheme } from './HorizontalSection/get-sorted-breakpoints/get-sorted-breakpoints';
import type { SvelteUINumberSize, CSS } from '$lib/styles-old';
import type { AppShellTheme } from './HorizontalSection/get-sorted-breakpoints/get-sorted-breakpoints';

export interface AppShellStylesParams {
	padding: SvelteUINumberSize;
	fixed: boolean;
	navbarOffsetBreakpoint: SvelteUINumberSize;
	asideOffsetBreakpoint: SvelteUINumberSize;
}

function getPositionStyles(props: AppShellStylesParams, theme: AppShellTheme): CSS {
	const padding = fns.size({ size: props.padding, sizes: theme.spacing });

	const navbarOffset = props.navbarOffsetBreakpoint
		? fns.size({ size: props.navbarOffsetBreakpoint, sizes: theme.breakpoints })
		: null;

	const asideOffset = props.asideOffsetBreakpoint
		? fns.size({ size: props.asideOffsetBreakpoint, sizes: theme.breakpoints })
		: null;

	if (!props.fixed) {
		return { padding };
	}

	return {
		minHeight: '100vh',
		paddingTop: `calc(var(--svelteui-header-height, 0px) + ${padding}px)`,
		paddingBottom: `calc(var(--svelteui-footer-height, 0px) + ${padding}px)`,
		paddingLeft: `calc(var(--svelteui-navbar-width, 0px) + ${padding}px)`,
		paddingRight: `calc(var(--svelteui-aside-width, 0px) + ${padding}px)`,

		[`@media (max-width: ${navbarOffset}px)`]: {
			paddingLeft: padding
		},

		[`@media (max-width: ${asideOffset}px)`]: {
			paddingRight: padding
		}
	};
}

export default createStyles((_, props: AppShellStylesParams) => {
	return {
		root: {
			boxSizing: 'border-box'
		},
		body: {
			display: 'flex',
			boxSizing: 'border-box'
		},
		main: {
			flex: 1,
			width: '100vw',
			boxSizing: 'border-box',
			...getPositionStyles(props, appShellTheme)
		}
	};
});
