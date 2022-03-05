<script lang="ts">
	import { pages, mainLinks } from '$lib/Components/Head/pages';
	import ChevronDown from '$components/svgs/icons/ChevronDown.svelte';
	import SidebarLinks from './SidebarLinks.svelte';

	export let sidebar = false;

	function showCategories(i: number) {
		pages[i].expand = !pages[i].expand;
	}
</script>

<aside
	class={sidebar
		? 'fixed z-20 bottom-0 left-0 right-0 top-20 bg-white dark:bg-dark-700 overflow-scroll'
		: 'fixed z-20 md:bottom-0 md:left-0 md:top-0 bg-white dark:bg-dark-700 md:px-4 md:w-64 md:mt-20 md:min-h-0 border-r border-gray-200 dark:border-gray-800 overflow-y-scroll'}
>
	<div class="mt-6 px-8 md:px-0">
		<div class="ml-5">
			<SidebarLinks iterable={mainLinks} />
		</div>
		{#each pages as { title, links, pathname, expand }, i}
			<button
				on:click={() => showCategories(i)}
				class="flex items-center text-xs uppercase text-gray-500 font-black mb-2 mt-8 px-3 py-2 w-full"
			>
				<ChevronDown expanded={expand ? expand : null} size={16} />
				<p class="pl-3">{title}</p>
			</button>
			{#if expand}
				<div class="border-l-2 ml-5">
					<SidebarLinks iterable={links} {pathname} />
				</div>
			{/if}
		{:else}
			<p>Oops something is wrong! Report an issue on Github</p>
		{/each}
	</div>
</aside>

<style>
	/* width */
	::-webkit-scrollbar {
		width: 5px;
	}
	/* Handle */
	::-webkit-scrollbar-thumb {
		background: rgb(128, 128, 128);
		border-radius: 5px;
	}
</style>
