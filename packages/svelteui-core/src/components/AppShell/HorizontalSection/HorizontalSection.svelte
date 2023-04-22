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
	import type { HorizontalSectionProps as $$HorizontalSectionProps } from './HorizontalSection';

	interface $$Props extends $$HorizontalSectionProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		width: $$Props['width'] = undefined,
		height: $$Props['height'] = undefined,
		fixed: $$Props['fixed'] = false,
		position: $$Props['position'] = {},
		hiddenBreakpoint: $$Props['hiddenBreakpoint'] = 'md',
		hidden: $$Props['hidden'] = false,
		zIndex: $$Props['zIndex'] = 100,
		section: $$Props['section'];
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

	$: ({ cx, classes, getStyles } = useStyles(
		{
			fixed,
			height,
			hiddenBreakpoint,
			position,
			width,
			zIndex,
			section,
			hidden
		},
		{ name: 'HorizontalSection' }
	));

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
	class={cx(className, classes.root, getStyles({ css: override }))}
	{...$$restProps}
>
	<slot />
</Box>
