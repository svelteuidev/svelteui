<script lang="ts">
	import Installation from '$lib/Components/GettingStarted/Installation/Installation.svelte';
	import StartGuide from '$lib/Components/GettingStarted/StartGuide/StartGuide.svelte';
	import DocsLoader from '$lib/temp/DocsLoader.svelte';
	import { onMount } from 'svelte';

	/**
	 * Need a loader so content isn't unstyled on load
	 * Will change when SSR gets completed
	 * */
	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>

<svelte:head>
	<title>Getting Started | SvelteUI</title>
</svelte:head>

{#if !visible}
	<DocsLoader />
{:else}
	<div class="space-y-12 prose-headings:text-black dark:prose-headings:text-white">
		<Installation />
		<StartGuide />
	</div>
{/if}
