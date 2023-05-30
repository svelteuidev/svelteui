<script lang="ts">
	import { fly } from 'svelte/transition';
	import { colorScheme, Burger, SvelteUIProvider } from '@svelteuidev/core';
	import { page } from '$app/stores';
	import { Device, Logo, PageTransition, TopBar, Sidebar } from '$lib/components';
	import { set_active_link } from '$lib/theme/utils';
	import '$lib/theme/style.css';
	import type { PageData } from './$types';
  	import { onMount } from 'svelte';

	let show_sidebar: boolean = false;

	$: nosidebar = $page.url.pathname === '/';

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

  onMount(() => {
    const colorSchemeValue = localStorage.getItem("colorScheme")
    if (colorSchemeValue) $colorScheme = colorSchemeValue
  })

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


<div style="overflow: hidden">
  <PageTransition refresh={data.pathname}>
    <div class="main" class:nosidebar={nosidebar}>
      <article class="article" class:homepage={$page.url.pathname === '/'}>
        <slot />
      </article>
    </div>
  </PageTransition>

  <SvelteUIProvider withGlobalStyles themeObserver={$colorScheme}>
    {#if !nosidebar}
      <div transition:fly={{ x: -100, duration: 300 }} class="sidebar" class:active-sidebar={show_sidebar}>
        {#key $page}
          <div use:set_active_link={{ page: $page }}>
            <Sidebar on:toggleSidebar={onToggleSidebar} {sidebar} />
          </div>
        {/key}
      </div>
    {/if}
    <div class="topbar">
      {#if !nosidebar}
        <div style="margin-left: 12px" class="sidebar_burger">
          <Burger
            color="blue"
            opened={show_sidebar}
            class="show_sidebar"
            on:click!stopPropagation={() => (show_sidebar = !show_sidebar)}
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
