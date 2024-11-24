<script lang="ts">
	import useStyles from './Anchor.styles';
	import Text from '../Text/Text.svelte';
	import type { AnchorProps as $$AnchorProps } from './Anchor';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		root?: $$Props['root'];
		align?: $$Props['align'];
		color?: $$Props['color'];
		transform?: $$Props['transform'];
		weight?: $$Props['weight'];
		gradient?: $$Props['gradient'];
		inline?: $$Props['inline'];
		lineClamp?: $$Props['lineClamp'];
		underline?: $$Props['underline'];
		inherit?: $$Props['inherit'];
		href?: $$Props['href'];
		tracking?: $$Props['tracking'];
		external?: $$Props['external'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

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
	}: Props = $props();
	

	let { cx, classes, getStyles } = $derived(useStyles(null, { name: 'Anchor' }));
</script>

<!--
@component
**UNSTABLE:** new API, yet to be vetted.

Display an anchor text that is a wrapper around `Text` component using an `a` as the default
root.

@see https://svelteui.dev/core/anchor
@example
    ```svelte
    <Anchor href="https://svelteui.dev/">Main Page</Anchor>
    <Anchor root={ Button } href="https://svelteui.dev/" target="_blank">Documentation</Anchor>
    <Anchor root={ Link } to="/home" color='violet' size='lg'>Click here</Anchor>
    ```
-->
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
	{#if children}{@render children()}{:else}Enter some anchor text{/if}
</Text>
