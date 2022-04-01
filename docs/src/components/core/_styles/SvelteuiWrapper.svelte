<script>
	import { dark, theme, getCssText } from './index';
	export let colorScheme = 'light';
	export let ssr = false;
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
