<script lang="ts">
	import { css } from '$lib/styles';
	import Text from '../Text/Text.svelte';
	import type { AnchorProps as $$AnchorProps } from './Anchor.styles';

	/** Used for custom classes to be applied to the button e.g. Tailwind classes */
	export let className: $$AnchorProps['className'] = '';
	export { className as class };
	/** Override prop for custom theming the component */
	export let override: $$AnchorProps['override'] = {};
    /** The component that is used as the anchor root */
	export let root: $$AnchorProps['root'] = 'a';
    /** The text variant to be used in the anchor */
	export let variant: $$AnchorProps['variant'] = root === 'a' ? 'link' : null;

	$: AnchorStyles = css({});
	$: variant = root === 'a' ? 'link' : variant;
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
    <Anchor root={Button} href="https://svelteui.org/" target="_blank">Documentation</Anchor>
    <Anchor root={Link} to="/home" color='violet' size='lg'>Click here</Anchor>
    ```
-->
<Text
    class="{className} {AnchorStyles({ css: override })}"
    root={root}
    variant={variant}
    {...$$restProps}
>
	<slot>Enter some anchor text</slot>
</Text>
