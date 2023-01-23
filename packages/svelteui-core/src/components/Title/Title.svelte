<script lang="ts">
	import useStyles from './Title.styles';
	import { Text } from '../Text';
	import { titleSizes } from './Title.styles';
	import type { TitleProps as $$TitleProps, HTMLHeadingElements } from './Title';

	interface $$Props extends $$TitleProps {}

	export let element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		order: $$Props['order'] = 1;
	export { className as class };

	const classNames = 'title';
	let node: HTMLHeadingElements;

	$: node = `h${order}` as HTMLHeadingElements;
	$: ({ cx, classes } = useStyles(null, { override, name: "Title" }));
</script>

<!--
@component

Display text that uses title styling and title HTML tags.

@see https://svelteui.org/core/title
@example
    ```tsx
    <Title>This is a title</Title> // standard title component
    <Title order={3}>This is a title</Title> // title component with order 2
    <Title order={1} override={{ fontSize: '90px' }}>This is a bigger title</Title> // title component with override style
    ```
-->

<Text
	bind:element
	class={cx(className, classNames, classes.root)}
	root={node}
	size={titleSizes[order].fontSize}
	{...$$restProps}
>
	<slot />
</Text>
