import { createStyles } from '$lib/styles';
import {
	getSortedBreakpoints,
	theme as appShellTheme
} from './get-sorted-breakpoints/get-sorted-breakpoints';
import type { DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface HorizontalSectionProps extends HorizontalSectionSharedProps {
	section: 'navbar' | 'aside';
}

export interface HorizontalSectionSharedProps extends DefaultProps {
	width?: HorizontalSectionWidth;
	height?: string | number;
	fixed?: boolean;
	position?: HorizontalSectionPosition;
	hiddenBreakpoint?: SvelteUINumberSize;
	hidden?: boolean;
	zIndex?: number;
}

export type HorizontalSectionWidth = Partial<Record<string, string | number>>;

export interface HorizontalSectionPosition {
	top?: number;
	left?: number;
	bottom?: number;
	right?: number;
}

interface HorizontalSectionStyles {
	width: Partial<Record<string, string | number>>;
	height: string | number;
	position: HorizontalSectionPosition;
	hiddenBreakpoint: SvelteUINumberSize;
	fixed: boolean;
	zIndex: number;
	section: 'navbar' | 'aside';
}

export default createStyles(
	(
		theme,
		{ height, width, fixed, position, hiddenBreakpoint, zIndex, section }: HorizontalSectionStyles,
		dark,
		ctx
	) => {
		const { themeColor, size } = ctx.fns;

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
				[`${dark.selector} &`]: {
					backgroundColor: themeColor('dark', 7),
					[section === 'navbar' ? 'borderRight' : 'borderLeft']: `1px solid ${themeColor(
						'dark',
						5
					)}`
				},
				fontFamily: '$standard' || 'sans-serif',
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
				[section === 'navbar' ? 'borderRight' : 'borderLeft']: `1px solid ${themeColor('gray', 2)}`,
				...breakpoints
			},

			hidden: {
				[`@media (max-width: ${size({
					size: hiddenBreakpoint,
					sizes: appShellTheme.breakpoints
				})}px)`]: {
					display: 'none'
				}
			}
		};
	}
);
