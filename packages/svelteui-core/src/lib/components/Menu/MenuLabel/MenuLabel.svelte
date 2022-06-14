<script lang="ts">
	import useStyles from './MenuLabel.styles';
	import { Text } from '../../Text';
	import type { TextProps as $$TextProps } from '../../Text/Text.styles';

	export let use: $$TextProps['use'] = [],
		element: $$TextProps['element'] = undefined,
		className: $$TextProps['className'] = '',
		override: $$TextProps['override'] = {},
		align: $$TextProps['align'] = 'left',
		color: $$TextProps['color'] = 'dark',
		root: $$TextProps['root'] = undefined,
		transform: $$TextProps['transform'] = 'none',
		variant: $$TextProps['variant'] = 'text',
		size: $$TextProps['size'] = 'md',
		weight: $$TextProps['weight'] = 'normal',
		gradient: $$TextProps['gradient'] = { from: 'indigo', to: 'cyan', deg: 45 },
		inline: $$TextProps['inline'] = true,
		lineClamp: $$TextProps['lineClamp'] = undefined,
		underline: $$TextProps['underline'] = false,
		inherit: $$TextProps['inherit'] = false,
		href: $$TextProps['href'] = '',
		tracking: $$TextProps['tracking'] = 'normal';
	export { className as class };

	$: ({ cx, getStyles } = useStyles());
</script>

<Text
	bind:element
	class={cx(className, getStyles({ css: override }))}
	{use}
	{align}
	{color}
	{root}
	{transform}
	{variant}
	{size}
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
	slot
</Text>
