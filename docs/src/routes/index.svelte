<script lang="ts">
	import Hero from '$lib/Components/HomePage/Hero.svelte';
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
	<title>SvelteUI</title>
</svelte:head>

{#if !visible}
	<div class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 animate-pulse">
		LOADING...
	</div>
{:else}
	<div>
		<Hero />
	</div>
{/if}
