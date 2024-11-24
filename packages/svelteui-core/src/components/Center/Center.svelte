<script lang="ts">
	import useStyles from './Center.styles';
	import Box from '../Box/Box.svelte';
	import type { CenterProps as $$CenterProps } from './Center';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		inline?: $$Props['inline'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		inline = false,
		children,
		...rest
	}: Props = $props();
	

	let { cx, classes, getStyles } = $derived(useStyles({ inline }, { name: 'Center' }));
</script>

<!--
@component

Centers content vertically and horizontally.

@see https://svelteui.dev/core/center
@example
    ```svelte
	<Center override={{ width: 400, height: 200, bg: '$blue100' }}>
		<Box css={{ bg: '$blue300' }}>All elements inside Center are centered</Box>
	</Center>
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
