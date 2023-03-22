<script lang="ts">
	import { fly } from 'svelte/transition';
	import { colorScheme, Burger, SvelteUIProvider } from '@svelteuidev/core';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { Device, Logo, PageTransition, TopBar, Sidebar } from '$lib/components';
	import { set_active_link } from '$lib/theme/utils';
	import '$lib/theme/style.css';
	import '$lib/theme/theme.css';
	import type { PageData } from './$types';

	let window_width = 0;
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

	let sidebar_details: { index: number; expand: boolean };

	function onToggleSidebar(event: CustomEvent<{ index: number; expand: boolean }>) {
		sidebar_details = event.detail;
	}

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
		<article class="article" class:homepage={$page.url.pathname === '/'}>
      <slot />
    </article>
  </div>
</PageTransition>

<SvelteUIProvider withGlobalStyles themeObserver={$colorScheme}>
	{#if !nosidebar}
		{#if !mobile || (mobile && show_sidebar)}
			<div transition:fly={{ x: -100, duration: 300 }} class="sidebar">
				{#key $page}
					<div use:set_active_link={{ page: $page }}>
						<Sidebar on:toggleSidebar={onToggleSidebar} {sidebar} />
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
		<div>
			<Device />
			<TopBar />
		</div>
	</div>
</SvelteUIProvider>

<style>
  .article.homepage {
    margin: 0 auto !important;
  }
</style>
