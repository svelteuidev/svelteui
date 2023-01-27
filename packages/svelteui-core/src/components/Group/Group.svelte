<script lang="ts">
	import useStyles from './Group.styles';
	import { onMount } from 'svelte';
	import Box from '../Box/Box.svelte';
	import type { GroupProps as $$GroupProps } from './Group';

	interface $$Props extends $$GroupProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		position: $$Props['position'] = 'left',
		noWrap: $$Props['noWrap'] = false,
		grow: $$Props['grow'] = false,
		spacing: $$Props['spacing'] = 'md',
		direction: $$Props['direction'] = 'row',
		align: $$Props['align'] = 'center';
	export { className as class };

	/** The children being rendered */
	let children: $$Props['children'];

	/** can only get access to children at runtime */
	$: onMount(() => {
		children = element.childElementCount;
	});

	$: ({ cx, getStyles } = useStyles(
		{
			align,
			children,
			direction,
			grow,
			noWrap,
			position,
			spacing
		},
		{ name: 'Group' }
	));
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
