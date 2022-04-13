<script lang="ts">
	import { css } from '@svelteuidev/core';
	import Installation from '$lib/Components/GettingStarted/Installation/Installation.svelte';
	import StartGuide from '$lib/Components/GettingStarted/StartGuide/StartGuide.svelte';

	// @ts-ignore
	const IndexStyles = css({
		'& .spacing > :not([hidden]) ~ :not([hidden])': {
			marginTop: 'calc(3rem * calc(1 - 0))',
			marginBottom: 'calc(3rem * 0)'
		}
	});
</script>

<svelte:head>
	<title>Getting Started | SvelteUI</title>
</svelte:head>

<div class={IndexStyles()}>
	<div class="space-between">
		<Installation />
		<StartGuide />
	</div>
</div>
