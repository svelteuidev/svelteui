<script lang="ts">
	import useStyles from './Anchor.styles';
	import Text from '../Text/Text.svelte';
	import type { AnchorProps as $$AnchorProps } from './Anchor.styles';

	export let use: $$AnchorProps['use'] = [],
		element: $$AnchorProps['element'] = undefined,
		className: $$AnchorProps['className'] = '',
		override: $$AnchorProps['override'] = {},
		root: $$AnchorProps['root'] = 'a',
		align: $$AnchorProps['align'] = 'left',
		color: $$AnchorProps['color'] = 'blue',
		transform: $$AnchorProps['transform'] = 'none',
		weight: $$AnchorProps['weight'] = 'normal',
		gradient: $$AnchorProps['gradient'] = { from: 'indigo', to: 'cyan', deg: 45 },
		inline: $$AnchorProps['inline'] = true,
		lineClamp: $$AnchorProps['lineClamp'] = undefined,
		underline: $$AnchorProps['underline'] = true,
		inherit: $$AnchorProps['inherit'] = false,
		href: $$AnchorProps['href'] = '',
		tracking: $$AnchorProps['tracking'] = 'normal',
		external: $$AnchorProps['external'] = false;
	export { className as class };

	$: ({ cx, getStyles } = useStyles());
</script>

<!--
@component
**UNSTABLE:** new API, yet to be vetted.

Display an anchor text that is a wrapper around `Text` component using an `a` as the default
root.
	
@see https://svelteui.org/core/anchor
@example
    ```svelte
    <Anchor href="https://svelteui.org/">Main Page</Anchor>
    <Anchor root={ Button } href="https://svelteui.org/" target="_blank">Documentation</Anchor>
    <Anchor root={ Link } to="/home" color='violet' size='lg'>Click here</Anchor>
    ```
-->
<Text
	bind:element
	class={cx(className, getStyles({ css: override }))}
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
	{...$$restProps}
>
	<slot>Enter some anchor text</slot>
</Text>
