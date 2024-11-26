<script lang="ts">
	import useStyles from './Anchor.styles';
	import Text from '../Text/Text.svelte';
	import type { AnchorProps } from './Anchor';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		root = 'a',
		align = 'left',
		color = 'blue',
		transform = 'none',
		weight = 'normal',
		gradient = { from: 'indigo', to: 'cyan', deg: 45 },
		inline = true,
		lineClamp = undefined,
		underline = true,
		inherit = false,
		href = '',
		tracking = 'normal',
		external = false,
		children,
		...rest
	}: AnchorProps = $props();

	let { cx, classes, getStyles } = $derived(useStyles(null, { name: 'Anchor' }));
</script>

<Text
	bind:element
	class={cx(className, classes.root, getStyles({ css: override }))}
	variant="link"
	{use}
	{root}
	{align}
	{color}
	{transform}
	{weight}
	{gradient}
	{inline}
	{lineClamp}
	{underline}
	{inherit}
	{href}
	{tracking}
	target={external ? '_blank' : null}
	rel={external ? 'noreferrer noopener' : null}
	{...rest}
>
	{#if children}
		{@render children()}
	{:else}
		Enter some anchor text
	{/if}
</Text>
