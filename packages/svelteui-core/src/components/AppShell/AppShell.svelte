<script lang="ts" context="module">
	import type { Selectors } from '$lib/styles';
	export type AppShellStylesNames = Selectors<typeof useStyles>;
</script>

<script lang="ts">
	import useStyles from './AppShell.styles';
	import AppShellProvider from './AppShellProvider.svelte';
	import { Box } from '../Box';
	import type { AppShellProps as $$AppShellProps } from './AppShell.styles';

  interface $$Props extends $$AppShellProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		zIndex: $$Props['zIndex'] = 100,
		fixed: $$Props['fixed'] = false,
		padding: $$Props['padding'] = 'md',
		navbarOffsetBreakpoint: $$Props['navbarOffsetBreakpoint'] = undefined,
		asideOffsetBreakpoint: $$Props['asideOffsetBreakpoint'] = undefined;
	export { className as class };

	$: ({ cx, classes } = useStyles(
		{
			padding,
			fixed,
			navbarOffsetBreakpoint,
			asideOffsetBreakpoint
		},
		{ override, name: 'AppShell' }
	));
</script>

<AppShellProvider {use} bind:element value={{ fixed, zIndex }} class={cx(className, classes.root)}>
	<Box>
		{#if $$slots.header}
			<slot name="header" />
		{/if}
		<div class={classes.body}>
			{#if $$slots.navbar}
				<slot name="navbar" />
			{/if}
			<main class={classes.main}>
				<slot />
			</main>
			{#if $$slots.aside}
				<slot name="aside" />
			{/if}
		</div>
		{#if $$slots.footer}
			<slot name="footer" />
		{/if}
	</Box>
</AppShellProvider>
