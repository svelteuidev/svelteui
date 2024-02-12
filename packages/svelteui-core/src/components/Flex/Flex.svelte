<script lang="ts">
	import useStyles from './Flex.styles';
	import Box from '../Box/Box.svelte';
	import type { FlexProps as $$FlexProps } from './Flex';

	interface $$Props extends $$FlexProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		gap: $$Props['gap'] = undefined,
		rowGap: $$Props['rowGap'] = undefined,
		columnGap: $$Props['columnGap'] = undefined,
		align: $$Props['align'] = undefined,
		justify: $$Props['justify'] = undefined,
		wrap: $$Props['wrap'] = undefined,
		direction: $$Props['direction'] = undefined;
	export { className as class };

	$: ({ cx, classes, getStyles } = useStyles(
		{
			gap,
			rowGap,
			columnGap,
			align,
			justify,
			wrap,
			direction
		},
		{ name: 'Flex' }
	));
</script>

<!--
@component

CSS flexbox component.

@see https://svelteui.dev/core/flex
@example
    ```svelte
  	<Flex>
		<Button variant="outline">1</Button>
		<Button variant="outline">2</Button>
		<Button variant="outline">3</Button>
	</Flex>
    ```
-->

<Box
	bind:element
	{use}
	class={cx(className, classes.root, getStyles({ css: override }))}
	{...$$restProps}
>
	<slot />
</Box>
