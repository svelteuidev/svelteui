<script lang="ts">
	import Box from '../Box/Box.svelte';
	import useStyles from './Stack.styles';
	import type { StackProps as $$StackProps } from './Stack';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		spacing?: $$Props['spacing'];
		align?: $$Props['align'];
		justify?: $$Props['justify'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		spacing = 'md',
		align = 'stretch',
		justify = 'center',
		children,
		...rest
	}: Props = $props();
	

	let { cx, classes, getStyles } = $derived(useStyles({ align, justify, spacing }, { name: 'Stack' }));
</script>

<!--
@component

Compose elements and components in a vertical flex container.

@see https://svelteui.dev/core/stack
@example
    ```svelte
    <Stack align="flex-end" justify="space-between" override={{ height: 300 }}>
		<Button variant="outline">1</Button>
		<Button variant="outline">2</Button>
		<Button variant="outline">3</Button>
	</Stack>
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
