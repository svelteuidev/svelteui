<script lang="ts">
	import { run } from 'svelte/legacy';

	import { getSystemStyles } from './context';
	import { css as _css, useSvelteUITheme, useSvelteUIThemeContext } from '$lib/styles';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import type { BoxProps as $$BoxProps } from './Box';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		css?: $$Props['css'];
		root?: $$Props['root'];
		m?: $$Props['m'];
		my?: $$Props['my'];
		mx?: $$Props['mx'];
		mt?: $$Props['mt'];
		mb?: $$Props['mb'];
		ml?: $$Props['ml'];
		mr?: $$Props['mr'];
		p?: $$Props['p'];
		py?: $$Props['py'];
		px?: $$Props['px'];
		pt?: $$Props['pt'];
		pb?: $$Props['pb'];
		pl?: $$Props['pl'];
		pr?: $$Props['pr'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		css = {},
		root = undefined,
		m = undefined,
		my = undefined,
		mx = undefined,
		mt = undefined,
		mb = undefined,
		ml = undefined,
		mr = undefined,
		p = undefined,
		py = undefined,
		px = undefined,
		pt = undefined,
		pb = undefined,
		pl = undefined,
		pr = undefined,
		children,
		...rest
	}: Props = $props();
	

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());
	/** workaround for root type errors, this should be replaced by a better type system */
	const castRoot = () => root as string;
	const theme = useSvelteUIThemeContext()?.theme || useSvelteUITheme();
	let getCSSStyles = $derived(typeof css === 'function' ? css : () => css);

	let isHTMLElement = $state();
	let isComponent = $state();
	run(() => {
		isHTMLElement = root && typeof root === 'string';
		isComponent = root && typeof root === 'function';
	});
	let BoxStyles = $derived(_css({}));
	let systemStyles = $derived(getSystemStyles(
		{
			m,
			my,
			mx,
			mt,
			mb,
			ml,
			mr,
			p,
			py,
			px,
			pt,
			pb,
			pl,
			pr
		},
		theme
	));
</script>

<!--
@component

Add inline styles to any element or component with sx.

@see https://svelteui.dev/core/box
@example
    ```svelte
    <Box css={{backgroundColor: '$blue600'}}>example</Box>
	<Box root='span'>example</Box>
	<Box css={{pt: '$20'}}>padding top of 5rem</Box> // uses the paddingTop shorthand, and theme scale
    ```
-->

{#if isHTMLElement}
	<!-- prettier-ignore -->
	<svelte:element
		bind:this={element}
		this={castRoot()}
		use:forwardEvents
		use:useActions={use}
		class="{className} {BoxStyles({ css: {...getCSSStyles(theme), ...systemStyles} })}"
		{...rest}
	>
		{@render children?.()}
	</svelte:element>
{:else if isComponent && typeof root !== 'string'}
	{@const SvelteComponent = root}
	<SvelteComponent
		bind:this={element}
		use={[forwardEvents, [useActions, use]]}
		class="{className} {BoxStyles({ css: { ...getCSSStyles(theme), ...systemStyles } })}"
		{...rest}
	>
		{@render children?.()}
	</SvelteComponent>
{:else}
	<div
		bind:this={element}
		use:forwardEvents
		use:useActions={use}
		class="{className} {BoxStyles({ css: { ...getCSSStyles(theme), ...systemStyles } })}"
		{...rest}
	>
		{@render children?.()}
	</div>
{/if}
