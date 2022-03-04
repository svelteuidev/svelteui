<script lang="ts">
	import { page } from '$app/stores';
	import { showSideBar } from '$lib/stores/sidebar';
	import { HamburgerMenu, Cross1 } from 'radix-icons-svelte';
	import Github from '$components/svgs/icons/Github.svelte';
	import Toggle from '$components/utils/Toggle.svelte';
	import '../../../app.css';

	let sideBar = $showSideBar;

	$: path = $page.url.pathname.split('/')[1];

	function toggleSideBar() {
		sideBar = !sideBar;
		showSideBar.set(sideBar);
	}
</script>

<header class="fixed top-0 left-0 w-full z-20 h-20 flex items-center backdrop-blur-md">
	<nav class="h-full w-full mx-auto">
		<div
			class="px-5 sm:px-10 flex items-center justify-between h-full border-b border-gray-200 dark:border-gray-800"
		>
			<button class="block md:hidden" on:click={toggleSideBar}>
				{#if !sideBar}
					<HamburgerMenu size={25} />
				{:else}
					<Cross1 size={25} />
				{/if}
			</button>
			<a href="/" class="text-black dark:text-gray-200 text-2xl font-black">
				Svelte<span class="text-primary-500">UI</span>
				<span class="hidden md:inline-block text-base text-gray-600">v0.4.0</span>
			</a>
			<div class="flex items-center gap-4">
				<Toggle />
				<Github />
			</div>
		</div>
	</nav>
</header>
