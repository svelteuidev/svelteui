<script lang="ts">
	import useStyles from './Flex.styles';
	import Box from '../Box/Box.svelte';
	import type { FlexProps as $$FlexProps } from './Flex';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		gap?: $$Props['gap'];
		rowGap?: $$Props['rowGap'];
		columnGap?: $$Props['columnGap'];
		align?: $$Props['align'];
		justify?: $$Props['justify'];
		wrap?: $$Props['wrap'];
		direction?: $$Props['direction'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		gap = undefined,
		rowGap = undefined,
		columnGap = undefined,
		align = undefined,
		justify = undefined,
		wrap = undefined,
		direction = undefined,
		children,
		...rest
	}: Props = $props();
	

	let { cx, classes, getStyles } = $derived(useStyles(
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
	{...rest}
>
	{@render children?.()}
</Box>
