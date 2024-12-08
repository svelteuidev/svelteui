<script lang="ts">
	import { css as _css, useSvelteUITheme, useSvelteUIThemeContext } from '$lib/styles';
	import { useActions } from '$lib/internal';
	import { getSystemStyles } from './context';
	import type { BoxProps } from './Box';

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
	}: BoxProps = $props();

	/** workaround for root type errors, this should be replaced by a better type system */
	const castRoot = () => root as string;
	const theme = useSvelteUIThemeContext()?.theme || useSvelteUITheme();
	let getCSSStyles = $derived(typeof css === 'function' ? css : () => css);

	let isHTMLElement = $derived(root && typeof root === 'string');
	let isComponent = $derived(root && typeof root === 'function');

	let BoxStyles = $derived(_css({}));
	let systemStyles = $derived(
		getSystemStyles(
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
		)
	);
</script>

{#if isHTMLElement}
	<!-- prettier-ignore -->
	<svelte:element
		bind:this={element}
		this={castRoot()}
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
		use={[[useActions, use]]}
		class="{className} {BoxStyles({ css: { ...getCSSStyles(theme), ...systemStyles } })}"
		{...rest}
	>
		{@render children?.()}
	</SvelteComponent>
{:else}
	<div
		bind:this={element}
		use:useActions={use}
		class="{className} {BoxStyles({ css: { ...getCSSStyles(theme), ...systemStyles } })}"
		{...rest}
	>
		{@render children?.()}
	</div>
{/if}
