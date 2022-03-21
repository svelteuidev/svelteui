<script lang="ts">
	import { page } from '$app/stores';
	import { showSideBar } from '$lib/stores/sidebar';
	import { HamburgerMenu, Cross1, GithubLogo } from 'radix-icons-svelte';
	import Toggle from '$components/utils/Toggle.svelte';

	$: sideBar = $showSideBar;

	const toggleSideBar = () => {
		sideBar = !sideBar;
		showSideBar.set(sideBar);
	};
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
				<span class="hidden md:inline-block text-base text-gray-600">v0.5.0</span>
				<span class="text-base text-gray-600">Beta</span>
			</a>
			<div class="flex items-center gap-4">
				<Toggle on:toggle />
				<a
					href="https://github.com/Brisklemonade/svelteui"
					target="_blank"
					rel="noreferrer"
					class="hidden md:block hover:text-gray-500 py-4"
				>
					<GithubLogo size={24} />
				</a>
			</div>
		</div>
	</nav>
</header>

<!-- 
	Search element for later use
	<input
	type="text"
	id="table-search"
	class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
	placeholder="Search for items"
	/>
-->
