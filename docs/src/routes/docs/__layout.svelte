<script lang="ts">
	import Toc from '$components/Test/Toc/Toc.svelte';
	import SideBar from '$lib/Components/Head/SideBar.svelte';
	import { showSideBar } from '$lib/stores/sidebar';

	let main;

	$: sideBar = $showSideBar;
</script>

<div
	class={'max-w-screen w-full mx-auto py-10 md:px-5 gap-4 md:grid md:grid-cols-[15.625rem,1fr] md:items-start xl:grid-cols-4'}
>
	<div class="hidden md:block">
		<SideBar />
	</div>
	{#if sideBar}
		<div class={!sideBar ? 'hidden' : 'md:hidden'}>
			<SideBar sidebar={sideBar} />
		</div>
	{/if}
	<main
		class="z-0 max-w-full px-4 prose prose-zinc dark:prose-invert prose-hr:border-gray-800 prose-a:text-brand hover:prose-a:text-brand-dark prose-tr:flex prose-th:flex-1 prose-td:flex-1 prose-blockquote:text-sm prose-blockquote:text-gray-500 prose-blockquote:border-gray-700 prose-p:text-black dark:prose-p:text-white pross xl:col-start-1 xl:col-end-4 xl:ml-64"
		bind:this={main}
	>
		<slot />
	</main>
	<div class="hidden xl:block sticky top-20 z-40">
		<Toc target={main} />
	</div>
</div>
