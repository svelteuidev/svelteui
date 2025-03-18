<script lang="ts">
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';
	import { fly } from 'svelte/transition';

	import { colorScheme, Burger, SvelteUIProvider, type ColorScheme } from '@svelteuidev/core';
	import { page } from '$app/stores';
	import { Device, Logo, PageTransition, TopBar, Sidebar } from '$lib/components';
	import '$lib/theme/style.css';
	import type { PageData } from './$types';

	let show_sidebar: boolean = $state(false);

	let nosidebar = $derived($page.url.pathname === '/');

	onMount(() => {
		const colorSchemeValue = localStorage.getItem('colorScheme') as ColorScheme;
		if (colorSchemeValue) $colorScheme = colorSchemeValue;
	});

	interface Props {
		data: PageData;
		children?: Snippet;
	}

	let { data, children }: Props = $props();
</script>

<div style="overflow: hidden">
	<PageTransition refresh={data.pathname}>
		<div class="main" class:nosidebar>
			<article class="article" class:homepage={$page.url.pathname === '/'}>
				{@render children?.()}
			</article>
		</div>
	</PageTransition>

	<SvelteUIProvider withGlobalStyles themeObserver={$colorScheme}>
		{#if !nosidebar}
			<div
				transition:fly|global={{ x: -100, duration: 300 }}
				class="sidebar"
				class:active-sidebar={show_sidebar}
			>
				<Sidebar pathname={$page.url.pathname} />
			</div>
		{/if}
		<div class="topbar">
			{#if !nosidebar}
				<div style="margin-left: 12px" class="sidebar_burger">
					<Burger
						color="blue"
						opened={show_sidebar}
						class="show_sidebar"
						onclick={(e) => {
							e.stopPropagation();
							show_sidebar = !show_sidebar;
						}}
					/>
				</div>
			{/if}
			<div class="logo"><Logo /></div>
			<div>
				<Device />
				<TopBar />
			</div>
		</div>
	</SvelteUIProvider>
</div>

<style>
	.article.homepage {
		margin: 0 auto !important;
		padding-top: 0 !important;
	}
</style>
