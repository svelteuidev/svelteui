import { createStyles } from '$lib/styles';
import {
	getSortedBreakpoints,
	theme as appShellTheme
} from './get-sorted-breakpoints/get-sorted-breakpoints';
import type { SvelteUINumberSize } from '$lib/styles';
import type { HorizontalSectionPosition } from './HorizontalSection';

interface HorizontalSectionStyles {
	width: Partial<Record<string, string | number>>;
	height: string | number;
	position: HorizontalSectionPosition;
	hiddenBreakpoint: SvelteUINumberSize;
	fixed: boolean;
	zIndex: number;
	section: 'navbar' | 'aside';
	hidden: boolean;
}

export default createStyles(
	(
		theme,
		{
			height,
			width,
			fixed,
			position,
			hiddenBreakpoint,
			zIndex,
			section,
			hidden
		}: HorizontalSectionStyles
	) => {
		const breakpoints =
			typeof width === 'object' && width !== null
				? getSortedBreakpoints(width, appShellTheme).reduce((acc, [breakpoint, breakpointSize]) => {
						acc[`@media (min-width: ${breakpoint + 1}px)`] = {
							width: breakpointSize,
							minWidth: breakpointSize
						};

						return acc;
					}, {})
				: null;

		return {
			root: {
				darkMode: {
					backgroundColor: theme.fn.themeColor('dark', 7),
					[section === 'navbar' ? 'borderRight' : 'borderLeft']: `1px solid ${theme.fn.themeColor(
						'dark',
						5
					)}`
				},
				fontFamily: theme.fonts.standard.value ?? 'sans-serif',
				...position,
				top: position?.top || 'var(--svelteui-header-height)',
				zIndex,
				height:
					height ||
					'calc(100vh - var(--svelteui-header-height, 0px) - var(--svelteui-footer-height, 0px))',
				width: width?.base || '100%',
				position: fixed ? 'fixed' : 'static',
				boxSizing: 'border-box',
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: 'white',
				[section === 'navbar' ? 'borderRight' : 'borderLeft']: `1px solid ${theme.fn.themeColor(
					'gray',
					2
				)}`,
				...breakpoints,
				[`@media (max-width: ${theme.fn.size({
					size: hiddenBreakpoint,
					sizes: appShellTheme.breakpoints
				})}px)`]: hidden
					? {
							display: 'none'
						}
					: {}
			}
		};
	}
);
