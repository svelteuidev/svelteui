<script>
	import { Burger } from '@svelteuidev/core';
	import { current_page } from '@svelte-docs/get/routes';
	import maintitle from '@svelte-docs/get/maintitle';
	import Logo from '@INCLUDES/logo.md';
	import Topbar from '@INCLUDES/topbar.md';
	import Sidebar from '@INCLUDES/sidebar.md';
	import { set_active_link, outside_click } from '../utils';
	import { fly } from 'svelte/transition';

	current_page.subscribe(() => {
		window.scrollTo(0, 0);
	});

	let window_width = 0;
	let show_sidebar = false;

	$: mobile = window_width < 800;
	$: show_sidebar = mobile ? show_sidebar : false;

	$: title = $current_page.title ? $current_page.title + ' — ' + maintitle : maintitle;
	$: nosidebar = $current_page.meta.layout === 'no_sidebar';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<svelte:window bind:innerWidth={window_width} />

<div class="main" class:nosidebar={nosidebar || mobile}>
	<div class="article">
		<svelte:component this={$current_page.component} />
	</div>
</div>

{#if !nosidebar}
	{#if !mobile || (mobile && show_sidebar)}
		<div
			transition:fly={{ x: -100, duration: 300 }}
			class="sidebar"
			use:set_active_link
			use:outside_click={() => (show_sidebar = false)}
		>
			<Sidebar />
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
