<script lang="ts">
	import useStyles from './VerticalSection.styles';
	import { Box } from '../../Box';
	import { globalCss } from '$lib/styles';
	import type { VerticalSectionProps as $$VerticalSectionProps } from './VerticalSection';

	interface $$Props extends $$VerticalSectionProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		height: $$Props['height'] = undefined,
		fixed: $$Props['fixed'] = false,
		position: $$Props['position'] = {},
		zIndex: $$Props['zIndex'] = 100,
		section: $$Props['section'];
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
