<script lang="ts">
	import useStyles from './Anchor.styles';
	import Text from '../Text/Text.svelte';
	import type { AnchorProps as $$AnchorProps } from './Anchor.styles';

  interface $$Props extends $$AnchorProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		root: $$Props['root'] = 'a',
		align: $$Props['align'] = 'left',
		color: $$Props['color'] = 'blue',
		transform: $$Props['transform'] = 'none',
		weight: $$Props['weight'] = 'normal',
		gradient: $$Props['gradient'] = { from: 'indigo', to: 'cyan', deg: 45 },
		inline: $$Props['inline'] = true,
		lineClamp: $$Props['lineClamp'] = undefined,
		underline: $$Props['underline'] = true,
		inherit: $$Props['inherit'] = false,
		href: $$Props['href'] = '',
		tracking: $$Props['tracking'] = 'normal',
		external: $$Props['external'] = false;
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
