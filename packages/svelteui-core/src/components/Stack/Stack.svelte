<script lang="ts">
	import Box from '../Box/Box.svelte';
	import useStyles from './Stack.styles';
	import type { StackProps as $$StackProps } from './Stack';

	interface $$Props extends $$StackProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		spacing: $$Props['spacing'] = 'md',
		align: $$Props['align'] = 'stretch',
		justify: $$Props['justify'] = 'center';
	export { className as class };

	$: ({ cx, classes, getStyles } = useStyles({ align, justify, spacing }, { name: 'Stack' }));
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
	{...$$restProps}
>
	<slot />
</Box>
