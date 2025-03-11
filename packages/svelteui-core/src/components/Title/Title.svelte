<script lang="ts">
	import useStyles from './Title.styles';
	import { Text } from '../Text';
	import { titleSizes } from './Title.styles';
	import type { TitleProps, HTMLHeadingElements } from './Title';

	let {
		element = $bindable(null),
		class: className = '',
		override = {},
		order = 1,
		children,
		...rest
	}: TitleProps = $props();

	let node: HTMLHeadingElements = $derived(`h${order}` as HTMLHeadingElements);

	let { cx, classes } = $derived(useStyles(null, { override, name: 'Title' }));
</script>

<Text
	bind:element
	class={cx(className, classes.root)}
	root={node}
	size={titleSizes[order].fontSize}
	{...rest}
>
	{@render children?.()}
</Text>
