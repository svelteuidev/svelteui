<script lang="ts">
	import { dark, theme, getCssText } from '$lib';

	export let colorScheme: 'light' | 'dark' = 'light';
	export let ssr: boolean = false;

	const ssrStyles = `<style\tid="stitches">${getCssText()}<\/style>`;
</script>

<svelte:head>
	{#if ssr}
		{@html ssrStyles}
	{/if}
</svelte:head>

<div class={colorScheme === 'light' ? theme : dark}>
	<slot><!-- optional fallback --></slot>
</div>
