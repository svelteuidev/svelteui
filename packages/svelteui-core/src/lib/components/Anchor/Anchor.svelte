<script lang="ts">
	import { css } from '$lib/styles';
	import Text from '../Text/Text.svelte';
	import type { AnchorProps as $$AnchorProps } from './Anchor.styles';

	/** Used for forwarding actions from component */
	export let use: $$AnchorProps['use'] = [];
	/** Used for components to bind to elements */
	export let element: $$AnchorProps['element'] = undefined;
	/** Used for custom classes to be applied to the button e.g. Tailwind classes */
	export let className: $$AnchorProps['className'] = '';
	export { className as class };
	/** Override prop for custom theming the component */
	export let override: $$AnchorProps['override'] = {};
	/** The component that is used as the anchor root */
	export let root: $$AnchorProps['root'] = 'a';
	/** The alignment to be applied to the text */
	export let align: $$AnchorProps['align'] = 'left';
	/** Code color for the text from the default theme */
	export let color: $$AnchorProps['color'] = 'blue';
	/** Sets the text-transform CSS property of the text*/
	export let transform: $$AnchorProps['transform'] = 'none';
	/** The size of the text from the default theme */
	export let weight: $$AnchorProps['weight'] = 'normal';
	/** Controls gradient settings in gradient variant only */
	export let gradient: $$AnchorProps['gradient'] = { from: 'indigo', to: 'cyan', deg: 45 };
	/** If enabled sets the line-height to 1 to center the text */
	export let inline: $$AnchorProps['inline'] = true;
	/** Sets the maximum lines of text using CSS -webkit-line-clamp property */
	export let lineClamp: $$AnchorProps['lineClamp'] = undefined;
	/** Underlines the text */
	export let underline: $$AnchorProps['underline'] = undefined;
	/** If it should inherit font properties from the parent component */
	export let inherit: $$AnchorProps['inherit'] = false;
	/** Applies an href to the button component and converts it to an anchor tag */
	export let href: $$AnchorProps['href'] = '';

	$: AnchorStyles = css({
		backgroundColor: 'transparent',
		cursor: 'pointer',
		padding: 0,
		border: 0
	});
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
	class="{className} {AnchorStyles({ css: override })}"
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
	{...$$restProps}
>
	<slot>Enter some anchor text</slot>
</Text>
