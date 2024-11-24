<script lang="ts" module>
	import type { Selectors } from '$lib/styles';
	export type AppShellStylesNames = Selectors<typeof useStyles>;
</script>

<script lang="ts">
	import { Box } from '../Box';
	import useStyles from './AppShell.styles';
	import AppShellProvider from './AppShellProvider.svelte';
	import type { AppShellProps as $$AppShellProps } from './AppShell';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		zIndex?: $$Props['zIndex'];
		fixed?: $$Props['fixed'];
		padding?: $$Props['padding'];
		navbarOffsetBreakpoint?: $$Props['navbarOffsetBreakpoint'];
		asideOffsetBreakpoint?: $$Props['asideOffsetBreakpoint'];
		header?: import('svelte').Snippet;
		navbar?: import('svelte').Snippet;
		children?: import('svelte').Snippet;
		aside?: import('svelte').Snippet;
		footer?: import('svelte').Snippet;
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		zIndex = 100,
		fixed = true,
		padding = 'md',
		navbarOffsetBreakpoint = undefined,
		asideOffsetBreakpoint = undefined,
		header,
		navbar,
		children,
		aside,
		footer
	}: Props = $props();
	

	let { cx, classes } = $derived(useStyles(
		{
			padding,
			fixed,
			navbarOffsetBreakpoint,
			asideOffsetBreakpoint
		},
		{ override, name: 'AppShell' }
	));
</script>

<!-- @TODO: Remove the AppShellProvider, since it's not being used for anything (react pattern) -->
<AppShellProvider {use} bind:element value={{ fixed, zIndex }} class={cx(className, classes.root)}>
	<Box>
		{#if header}
			{@render header?.()}
		{/if}
		<div class={classes.body}>
			{#if navbar}
				{@render navbar?.()}
			{/if}
			<main class={classes.main}>
				{@render children?.()}
			</main>
			{#if aside}
				{@render aside?.()}
			{/if}
		</div>
		{#if footer}
			{@render footer?.()}
		{/if}
	</Box>
</AppShellProvider>
