<script lang="ts">
	import useStyles from './Group.styles';
	import { onMount } from 'svelte';
	import Box from '../Box/Box.svelte';
	import type { GroupProps as $$GroupProps } from './Group.styles';

	export let use: $$GroupProps['use'] = [],
		element: $$GroupProps['element'] = undefined,
		className: $$GroupProps['className'] = '',
		override: $$GroupProps['override'] = {},
		position: $$GroupProps['position'] = 'left',
		noWrap: $$GroupProps['noWrap'] = false,
		grow: $$GroupProps['grow'] = false,
		spacing: $$GroupProps['spacing'] = 'md',
		direction: $$GroupProps['direction'] = 'row',
		align: $$GroupProps['align'] = 'center';
	export { className as class };

	/** The children being rendered */
	let children: $$GroupProps['children'];

	/** can only get access to children at runtime */
	$: onMount(() => {
		children = element.childElementCount;
	});

	$: ({ cx, getStyles } = useStyles({
		align,
		children,
		direction,
		grow,
		noWrap,
		position,
		spacing
	}));
</script>

<!--
@component

Compose elements and components in a vertical flex container.
	
@see https://svelteui.org/core/group
@example
    ```svelte
    <Group grow>
		<Button variant="outline">1</Button>
		<Button variant="outline">2</Button>
		<Button variant="outline">3</Button>
	</Group>
    ```
-->

<Box bind:element {use} class={cx(className, getStyles({ css: override }))} {...$$restProps}>
	<slot />
</Box>
