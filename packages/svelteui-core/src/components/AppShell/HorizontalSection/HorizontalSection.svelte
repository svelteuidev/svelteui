<script lang="ts" module>
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

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		width?: $$Props['width'];
		height?: $$Props['height'];
		fixed?: $$Props['fixed'];
		position?: $$Props['position'];
		hiddenBreakpoint?: $$Props['hiddenBreakpoint'];
		hidden?: $$Props['hidden'];
		zIndex?: $$Props['zIndex'];
		section: $$Props['section'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		width = undefined,
		height = undefined,
		fixed = false,
		position = {},
		hiddenBreakpoint = 'md',
		hidden = false,
		zIndex = 100,
		section,
		children,
		...rest
	}: Props = $props();
	

	const breakpoints = getSortedBreakpoints(width, appShellTheme).reduce(
		(acc, [breakpoint, breakpointSize]) => {
			acc[`@media (min-width: ${breakpoint + 1}px)`] = {
				[`--svelteui-${section}-width`]: `${breakpointSize}px`
			};

			return acc;
		},
		{}
	);

	let { cx, classes, getStyles } = $derived(useStyles(
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
	{...rest}
>
	{@render children?.()}
</Box>
