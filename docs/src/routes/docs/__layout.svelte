<script lang="ts">
	import SideBar from '$lib/Components/Head/SideBar.svelte';
	import { showSideBar } from '$lib/stores/sidebar';

	$: sideBar = $showSideBar;
</script>

<div
	class={'max-w-screen w-full mx-auto py-10 md:px-5 gap-4 md:grid md:grid-cols-[15.625rem,1fr] md:items-start'}
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
		class="z-0 max-w-full px-4 prose prose-invert prose-hr:border-gray-800 prose-a:text-brand hover:prose-a:text-brand-dark prose-tr:flex prose-th:flex-1 prose-td:flex-1 prose-blockquote:text-sm prose-blockquote:text-gray-500 prose-blockquote:border-gray-700"
	>
		<slot />
	</main>
</div>
