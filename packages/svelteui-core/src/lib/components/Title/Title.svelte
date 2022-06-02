<script lang="ts">
	import useStyles from './Title.styles';
	import { Text } from '../Text';
	import { titleSizes } from './Title.styles';
	import type { TitleProps as $$TitleProps, HTMLHeadingElements } from './Title.styles';

	export let use: $$TitleProps['use'] = [],
		element: $$TitleProps['element'] = undefined,
		className: $$TitleProps['className'] = '',
		override: $$TitleProps['override'] = {},
		align: $$TitleProps['align'] = 'left',
		order: $$TitleProps['order'] = 1,
		color: $$TitleProps['color'] = 'dark',
		transform: $$TitleProps['transform'] = 'none',
		variant: $$TitleProps['variant'] = 'text',
		weight: $$TitleProps['weight'] = 'normal',
		gradient: $$TitleProps['gradient'] = { from: 'indigo', to: 'cyan', deg: 45 },
		inline: $$TitleProps['inline'] = true,
		lineClamp: $$TitleProps['lineClamp'] = undefined,
		underline: $$TitleProps['underline'] = undefined,
		inherit: $$TitleProps['inherit'] = false,
		href: $$TitleProps['href'] = '',
		tracking: $$TitleProps['tracking'] = 'normal';
	export { className as class };

	let node: HTMLHeadingElements;
	$: node = `h${order}` as HTMLHeadingElements;

	$: ({ cx, getStyles } = useStyles());
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
	class={cx(className, { title: true }, getStyles({ css: override }))}
	root={node}
	size={titleSizes[order].fontSize}
	{use}
	{align}
	{color}
	{transform}
	{variant}
	{weight}
	{gradient}
	{inline}
	{lineClamp}
	{underline}
	{inherit}
	{href}
	{tracking}
	{...$$restProps}
>
	<slot />
</Text>
