<script lang="ts">
	import { useActions } from '$lib/internal';
	import useStyles from './BackgroundImage.styles';
	import type { BackgroundImageProps } from './BackgroundImage';

	let {
		use = [],
		element = $bindable(null),
		class: className = '',
		override = {},
		radius = 0,
		src = '',
		width = undefined,
		height = undefined,
		children,
		...rest
	}: BackgroundImageProps = $props();

	let { cx, classes, getStyles } = $derived(
		useStyles({ height, radius, src, width }, { name: 'BackgroundImage' })
	);
</script>

<div
	bind:this={element}
	use:useActions={use}
	class={cx(className, classes.root, getStyles({ css: override }))}
	{...rest}
>
	{@render children?.()}
</div>
