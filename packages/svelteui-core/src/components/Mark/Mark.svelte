<script lang="ts">
	import useStyles from './Mark.styles';
	import { Text } from '../Text';
	import type { MarkProps as $$MarkProps } from './Mark';

	

	interface Props {
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		root?: $$Props['root'];
		color?: $$Props['color'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		element = $bindable(undefined),
		class: className = '',
		override = {},
		root = 'mark',
		color = 'yellow',
		children,
		...rest
	}: Props = $props();
	

	let { cx, classes } = $derived(useStyles({ color }, { override, name: 'Mark' }));
</script>

<!--
@component

Highlight text within a larger body of text

@see https://svelteui.dev/core/mark
@example
    ```tsx
    <Text>This is a sentence with a <Mark>highlighted part</Mark> in it </Text>
    ```
-->

<Text bind:element class={cx(className, classes.root)} {root} {...rest}>
	{@render children?.()}
</Text>
