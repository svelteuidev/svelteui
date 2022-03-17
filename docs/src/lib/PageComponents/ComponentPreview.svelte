<!-- This component will be deprected soon -->
<script lang="ts">
	import { slide } from 'svelte/transition';
	import { Code } from '@svelteuidev/core';

	/** The code to be displayed */
	export let code: string = '<> No code to show yet </>';
	/** The class to be applied to component */
	export let className = '';
	export { className as class };

	let isShowingCode = false;

	function showCode() {
		isShowingCode = !isShowingCode;
	}
</script>

<div class="relative h-max p-10 rounded-xl shadow-md bg-gray-100 dark:bg-gray-800 {className}">
	<slot />

	<button on:click={showCode} class="absolute bottom-3 right-5"
		>{!isShowingCode ? 'Show Code <>' : 'Hide Code </>'}</button
	>
</div>
{#if isShowingCode}
	<div transition:slide={{ duration: 100 }} class="rounded-xl bg-gray-100 dark:bg-gray-800">
		<Code copy message={code} block>{code}</Code>
	</div>
{/if}
