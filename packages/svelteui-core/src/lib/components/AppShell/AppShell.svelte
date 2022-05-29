<script lang="ts" context="module">
	import type { Selectors } from '$lib/styles';
	export type AppShellStylesNames = Selectors<typeof useStyles>;
</script>

<script lang="ts">
	import useStyles from './AppShell.styles';
	import AppShellProvider from './AppShellProvider.svelte';
	import { Box } from '../Box';
	import type { AppShellProps as $$AppShellProps } from './AppShell.styles';

	export let use: $$AppShellProps['use'] = [],
		element: $$AppShellProps['element'] = undefined,
		className: $$AppShellProps['className'] = '',
		override: $$AppShellProps['override'] = {},
		zIndex: $$AppShellProps['zIndex'] = 100,
		fixed: $$AppShellProps['fixed'] = false,
		padding: $$AppShellProps['padding'] = 'md',
		navbarOffsetBreakpoint: $$AppShellProps['navbarOffsetBreakpoint'] = undefined,
		asideOffsetBreakpoint: $$AppShellProps['asideOffsetBreakpoint'] = undefined;
	export { className as class };

	$: ({ classes, getStyles } = useStyles({
		padding,
		fixed,
		navbarOffsetBreakpoint,
		asideOffsetBreakpoint
	}));
</script>

<AppShellProvider
	{use}
	bind:element
	value={{ fixed, zIndex }}
	class="{className} {getStyles({ css: override })}"
>
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
