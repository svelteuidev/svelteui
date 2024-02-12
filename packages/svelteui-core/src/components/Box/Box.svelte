<script lang="ts">
	import { getSystemStyles } from './context';
	import { css as _css, useSvelteUITheme, useSvelteUIThemeContext } from '$lib/styles';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import type { BoxProps as $$BoxProps } from './Box';

	interface $$Props extends $$BoxProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		css: $$Props['css'] = {},
		root: $$Props['root'] = undefined,
		m: $$Props['m'] = undefined,
		my: $$Props['my'] = undefined,
		mx: $$Props['mx'] = undefined,
		mt: $$Props['mt'] = undefined,
		mb: $$Props['mb'] = undefined,
		ml: $$Props['ml'] = undefined,
		mr: $$Props['mr'] = undefined,
		p: $$Props['p'] = undefined,
		py: $$Props['py'] = undefined,
		px: $$Props['px'] = undefined,
		pt: $$Props['pt'] = undefined,
		pb: $$Props['pb'] = undefined,
		pl: $$Props['pl'] = undefined,
		pr: $$Props['pr'] = undefined;
	export { className as class };

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());
	/** workaround for root type errors, this should be replaced by a better type system */
	const castRoot = () => root as string;
	const theme = useSvelteUIThemeContext()?.theme || useSvelteUITheme();
	$: getCSSStyles = typeof css === 'function' ? css : () => css;

	let isHTMLElement;
	let isComponent;
	$: {
		isHTMLElement = root && typeof root === 'string';
		isComponent = root && typeof root === 'function';
	}
	$: BoxStyles = _css({});
	$: systemStyles = getSystemStyles(
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
	);
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
		{...$$restProps}
	>
		<slot></slot>
	</svelte:element>
{:else if isComponent && typeof root !== 'string'}
	<svelte:component
		this={root}
		bind:this={element}
		use={[forwardEvents, [useActions, use]]}
		class="{className} {BoxStyles({ css: { ...getCSSStyles(theme), ...systemStyles } })}"
		{...$$restProps}
	>
		<slot />
	</svelte:component>
{:else}
	<div
		bind:this={element}
		use:forwardEvents
		use:useActions={use}
		class="{className} {BoxStyles({ css: { ...getCSSStyles(theme), ...systemStyles } })}"
		{...$$restProps}
	>
		<slot />
	</div>
{/if}
