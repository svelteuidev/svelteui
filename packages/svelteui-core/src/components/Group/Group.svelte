<script lang="ts">
	import { run } from 'svelte/legacy';

	import useStyles from './Group.styles';
	import { onMount } from 'svelte';
	import Box from '../Box/Box.svelte';
	import type { GroupProps as $$GroupProps } from './Group';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		position?: $$Props['position'];
		noWrap?: $$Props['noWrap'];
		grow?: $$Props['grow'];
		spacing?: $$Props['spacing'];
		direction?: $$Props['direction'];
		align?: $$Props['align'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		position = 'left',
		noWrap = false,
		grow = false,
		spacing = 'md',
		direction = 'row',
		align = 'center',
		children,
		...rest
	}: Props = $props();
	

	/** The children being rendered */
	let children: $$Props['children'] = $state();

	/** can only get access to children at runtime */
	run(() => {
		onMount(() => {
			children = element.childElementCount;
		});
	});

	let { cx, classes, getStyles } = $derived(useStyles(
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

@see https://svelteui.dev/core/group
@example
    ```svelte
    <Group grow>
		<Button variant="outline">1</Button>
		<Button variant="outline">2</Button>
		<Button variant="outline">3</Button>
	</Group>
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
