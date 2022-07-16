<script lang="ts">
	import useStyles from './Stack.styles';
	import Box from '../Box/Box.svelte';
	import type { StackProps as $$StackProps } from './Stack.styles';

	export let use: $$StackProps['use'] = [],
		element: $$StackProps['element'] = undefined,
		className: $$StackProps['className'] = '',
		override: $$StackProps['override'] = {},
		spacing: $$StackProps['spacing'] = 'md',
		align: $$StackProps['align'] = 'stretch',
		justify: $$StackProps['justify'] = 'center';
	export { className as class };

	$: ({ cx, getStyles } = useStyles({ align, justify, spacing }));
</script>

<!--
@component

Compose elements and components in a vertical flex container.
	
@see https://svelteui.org/core/stack
@example
    ```svelte
    <Stack align="flex-end" justify="space-between" override={{ height: 300 }}>
		<Button variant="outline">1</Button>
		<Button variant="outline">2</Button>
		<Button variant="outline">3</Button>
	</Stack>
    ```
-->

<Box bind:element {use} class={cx(className, getStyles({ css: override }))} {...$$restProps}>
	<slot />
</Box>
