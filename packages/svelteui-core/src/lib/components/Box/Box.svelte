<script lang="ts">
	import { getSystemStyles } from './context';
	import { css as _css, useSvelteUITheme, useSvelteUIThemeContext } from '$lib/styles';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import type { BoxProps as $$BoxProps } from './Box.styles';

	export let use: $$BoxProps['use'] = [],
		element: $$BoxProps['element'] = undefined,
		className: $$BoxProps['className'] = '',
		css: $$BoxProps['override'] = {},
		root: $$BoxProps['root'] = undefined,
		m: $$BoxProps['m'] = undefined,
		my: $$BoxProps['my'] = undefined,
		mx: $$BoxProps['mx'] = undefined,
		mt: $$BoxProps['mt'] = undefined,
		mb: $$BoxProps['mb'] = undefined,
		ml: $$BoxProps['ml'] = undefined,
		mr: $$BoxProps['mr'] = undefined,
		p: $$BoxProps['p'] = undefined,
		py: $$BoxProps['py'] = undefined,
		px: $$BoxProps['px'] = undefined,
		pt: $$BoxProps['pt'] = undefined,
		pb: $$BoxProps['pb'] = undefined,
		pl: $$BoxProps['pl'] = undefined,
		pr: $$BoxProps['pr'] = undefined;
	export { className as class };

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());
	/** workaround for root type errors, this should be replaced by a better type system */
	const castRoot = () => root as string;
	const theme = useSvelteUIThemeContext().theme ?? useSvelteUITheme();

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
	
@see https://svelteui.org/core/box
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
		class="{className} {BoxStyles({ css: {...css, ...systemStyles} })}"
		{...$$restProps}
	>
		<slot></slot>
	</svelte:element>
{:else if isComponent}
	<svelte:component
		this={root}
		bind:this={element}
		use={[forwardEvents, [useActions, use]]}
		class="{className} {BoxStyles({ css: { ...css, ...systemStyles } })}"
		{...$$restProps}
	>
		<slot />
	</svelte:component>
{:else}
	<div
		bind:this={element}
		use:forwardEvents
		use:useActions={use}
		class="{className} {BoxStyles({ css: { ...css, ...systemStyles } })}"
		{...$$restProps}
	>
		<slot />
	</div>
{/if}
