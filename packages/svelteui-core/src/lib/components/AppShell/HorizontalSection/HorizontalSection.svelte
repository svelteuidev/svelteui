<script lang="ts" context="module">
	import type { Selectors } from '$lib/styles';
	export type HorizontalSectionStylesNames = Selectors<typeof useStyles>;
</script>

<script lang="ts">
	import useStyles from './HorizontalSection.styles';
	import { Box } from '../../Box';
	import { globalCss } from '$lib/styles';
	import {
		getSortedBreakpoints,
		theme as appShellTheme
	} from './get-sorted-breakpoints/get-sorted-breakpoints';
	import type { HorizontalSectionProps as $$HorizontalSectionProps } from './HorizontalSection.styles';

	export let use: $$HorizontalSectionProps['use'] = [],
		element: $$HorizontalSectionProps['element'] = undefined,
		className: $$HorizontalSectionProps['className'] = '',
		override: $$HorizontalSectionProps['override'] = {},
		width: $$HorizontalSectionProps['width'] = undefined,
		height: $$HorizontalSectionProps['height'] = undefined,
		fixed: $$HorizontalSectionProps['fixed'] = false,
		position: $$HorizontalSectionProps['position'] = {},
		hiddenBreakpoint: $$HorizontalSectionProps['hiddenBreakpoint'] = 'md',
		hidden: $$HorizontalSectionProps['hidden'] = false,
		zIndex: $$HorizontalSectionProps['zIndex'] = 100,
		section: $$HorizontalSectionProps['section'];
	export { className as class };

	const breakpoints = getSortedBreakpoints(width, appShellTheme).reduce(
		(acc, [breakpoint, breakpointSize]) => {
			acc[`@media (min-width: ${breakpoint + 1}px)`] = {
				[`--svelteui-${section}-width`]: `${breakpointSize}px`
			};

			return acc;
		},
		{}
	);

	$: ({ classes, cx, getStyles } = useStyles({
		fixed,
		height,
		hiddenBreakpoint,
		position,
		width,
		zIndex,
		section
	}));

	const injectRoot = globalCss({
		':root': {
			[`--svelteui-${section}-width`]: width?.base ? `${width.base}px` : '0px',
			...breakpoints
		}
	});
	injectRoot();
</script>

<Box
	{use}
	bind:element
	root={section === 'navbar' ? 'nav' : 'aside'}
	class="{cx(hidden && classes.hidden, className)} {getStyles({ css: override })}"
	{...$$restProps}
>
	<slot />
</Box>
