<script lang="ts">
	import { fly } from 'svelte/transition';
	import { colorScheme, Burger, SvelteUIProvider } from '@svelteuidev/core';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import Logo from '$lib/includes/logo.svelte';
	import Topbar from '$lib/includes/topbar.svelte';
	import Sidebar from '$lib/includes/sidebar.svelte';
	import { set_active_link } from '$lib/theme/utils';
	import '$lib/theme/style.css';
	import '$lib/theme/theme.css';
	import type { PageData } from './$types';

	let show_sidebar: boolean;

	$: mobile = window_width < 800;
	$: nosidebar = browser && $page.url.pathname === '/';
	$: show_sidebar = mobile ? show_sidebar : false;

	let sidebar = [
		{ id: 1, expand: false },
		{ id: 2, expand: false },
		{ id: 3, expand: false },
		{ id: 4, expand: false },
		{ id: 5, expand: false },
		{ id: 6, expand: false },
		{ id: 7, expand: false },
		{ id: 8, expand: false }
	];

	let window_width = 0,
		sidebar_details: { index: number, expand: boolean };
	$: {
    if (sidebar_details) {
      sidebar = sidebar.map((sidebarItem) =>
			sidebarItem.id === sidebar_details.index + 1
				? { ...sidebarItem, expand: sidebar_details.expand }
				: sidebarItem
		);
    }
	}
  export let data: PageData
</script>

<svelte:window bind:innerWidth={window_width} />

<PageTransition refresh={data.pathname}>
  <div class="main" class:nosidebar={nosidebar || mobile}>
    <div class="article" class:homepage={$page.url.pathname === "/"}>
      <slot />
    </div>
  </div>
</PageTransition>

<SvelteUIProvider withGlobalStyles themeObserver={$colorScheme}>
	{#if !nosidebar}
		{#if !mobile || (mobile && show_sidebar)}
			<div transition:fly={{ x: -100, duration: 300 }} class="sidebar">
				{#key $page}
					<div
						use:set_active_link={{ page: $page }}
					>
						<Sidebar on:toggleSidebar={({ detail }) => (sidebar_details = detail)} {sidebar} />
					</div>
				{/key}
			</div>
		{/if}
	{/if}
	<div class="topbar">
		{#if mobile && !nosidebar}
			<Burger
				color="blue"
				opened={show_sidebar}
				class="show_sidebar"
				on:click!stopPropagation={() => (show_sidebar = !show_sidebar)}
			/>
		{/if}
		<div class="logo"><Logo /></div>
		<div><Topbar /></div>
	</div>
</SvelteUIProvider>

<style>
  .article.homepage {
    margin: 0 auto !important;
  }
</style>
