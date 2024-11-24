<script lang="ts">
	import useStyles from './Title.styles';
	import { Text } from '../Text';
	import { titleSizes } from './Title.styles';
	import type { TitleProps as $$TitleProps, HTMLHeadingElements } from './Title';

	

	interface Props {
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		order?: $$Props['order'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		element = $bindable(undefined),
		class: className = '',
		override = {},
		order = 1,
		children,
		...rest
	}: Props = $props();
	

	let node: HTMLHeadingElements = $derived(`h${order}` as HTMLHeadingElements);

	
	let { cx, classes } = $derived(useStyles(null, { override, name: 'Title' }));
</script>

<!--
@component

Display text that uses title styling and title HTML tags.

@see https://svelteui.dev/core/title
@example
    ```tsx
    <Title>This is a title</Title> // standard title component
    <Title order={3}>This is a title</Title> // title component with order 2
    <Title order={1} override={{ fontSize: '90px' }}>This is a bigger title</Title> // title component with override style
    ```
-->

<Text
	bind:element
	class={cx(className, classes.root)}
	root={node}
	size={titleSizes[order].fontSize}
	{...rest}
>
	{@render children?.()}
</Text>
