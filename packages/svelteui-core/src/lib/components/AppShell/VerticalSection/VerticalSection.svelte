<script lang="ts">
	import useStyles from './VerticalSection.styles';
	import { Box } from '../../Box';
	import { globalCss } from '$lib/styles';
	import type { VerticalSectionProps as $$VerticalSectionProps } from './VerticalSection.styles';

	export let use: $$VerticalSectionProps['use'] = [],
		element: $$VerticalSectionProps['element'] = undefined,
		className: $$VerticalSectionProps['className'] = '',
		override: $$VerticalSectionProps['override'] = {},
		height: $$VerticalSectionProps['height'] = undefined,
		fixed: $$VerticalSectionProps['fixed'] = false,
		position: $$VerticalSectionProps['position'] = {},
		zIndex: $$VerticalSectionProps['zIndex'] = 100,
		section: $$VerticalSectionProps['section'];
	export { className as class };

	$: ({ getStyles } = useStyles({
		borderPosition: section === 'header' ? 'bottom' : 'top',
		fixed,
		height,
		position,
		zIndex
	}));

	const injectStyles = globalCss({
		':root': {
			[`--svelteui-${section}-height`]: `${height}px`
		}
	});
	injectStyles();
</script>

<Box
	{use}
	bind:element
	root={section === 'header' ? 'nav' : 'footer'}
	class="{getStyles({ css: override })} {className}"
	{...$$restProps}
>
	<slot />
</Box>
