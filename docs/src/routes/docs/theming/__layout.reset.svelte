<script lang="ts">
	import SideBar from '$lib/Components/Head/SideBar.svelte';
	import Navbar from '$lib/Components/Head/Navbar.svelte';
	import { showSideBar } from '$lib/stores/sidebar';
	import { page } from '$app/stores';

	$: sideBar = $showSideBar;
	$: val = $page.url.pathname.split('/');
	$: path = val[val.length - 1];
	$: formatTitle = (path: string) => {
		if (path.includes('-')) {
			const splitWords: string[] = path.split('-');
			let sentence: string[] = [];
			splitWords.forEach((word) => {
				const wordToUpper = word.charAt(0).toUpperCase() + word.substring(1);
				sentence.push(wordToUpper);
				sentence = sentence;
			});
			return sentence.join(' ');
		}
		return path.charAt(0).toUpperCase() + path.substring(1);
	};
</script>

<svelte:head>
	<title>{formatTitle(path)} | SvelteUI</title>
</svelte:head>

<Navbar />
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
	>
		<slot />
	</main>
</div>
