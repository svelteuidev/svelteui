<script lang="ts">
	import useStyles from './VerticalSection.styles';
	import { Box } from '../../Box';
	import { globalCss } from '$lib/styles';
	import type { VerticalSectionProps as $$VerticalSectionProps } from './VerticalSection';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		height?: $$Props['height'];
		fixed?: $$Props['fixed'];
		position?: $$Props['position'];
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
		height = undefined,
		fixed = false,
		position = {},
		zIndex = 100,
		section,
		children,
		...rest
	}: Props = $props();
	

	let { cx, classes, getStyles } = $derived(useStyles(
		{
			borderPosition: section === 'header' ? 'bottom' : 'top',
			fixed,
			height,
			position,
			zIndex
		},
		{ name: 'VerticalSection' }
	));

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
	class={cx(className, classes.root, getStyles({ css: override }))}
	{...rest}
>
	{@render children?.()}
</Box>
