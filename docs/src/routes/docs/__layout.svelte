<script lang="ts">
	import Toc from '$components/Test/Toc/Toc.svelte';
	import SideBar from '$lib/Components/Head/SideBar.svelte';
	import { page } from '$app/stores';
	import { ActivityLog } from 'radix-icons-svelte';

	let main;

	$: val = $page.url.pathname.split('/');
	$: path = val[val.length - 1];
	$: toggleToc = (path) => {
		if (path === 'docs' || path === 'contribute') {
			return 'xl:hidden';
		}
		return 'xl:block';
	};
	$: toggleTocGrid = (path) => {
		if (path === 'docs' || path === 'contribute') {
			return 'xl:grid-cols-3';
		}
		return 'xl:grid-cols-4';
	};
</script>

<div
	class="max-w-screen w-full mx-auto py-10 md:px-5 gap-4 md:grid md:grid-cols-[15.625rem,1fr] md:items-start {toggleTocGrid(
		path
	)}"
>
	<div class="hidden md:block">
		<SideBar />
	</div>
	<main
		class="z-0 max-w-full px-4 prose prose-zinc dark:prose-invert prose-hr:border-gray-800 prose-a:text-brand hover:prose-a:text-brand-dark prose-tr:flex prose-th:flex-1 prose-td:flex-1 prose-blockquote:text-sm prose-blockquote:text-gray-500 prose-blockquote:border-gray-700 prose-p:text-black dark:prose-p:text-white xl:col-start-1 xl:col-end-4 xl:ml-64"
		bind:this={main}
	>
		<slot />
	</main>
	<div class="hidden sticky top-20 z-40 {toggleToc(path)}">
		<h3 class="flex items-center gap-3 text-lg font-bold"><ActivityLog /> Table of contents</h3>
		<Toc target={main} />
	</div>
</div>
