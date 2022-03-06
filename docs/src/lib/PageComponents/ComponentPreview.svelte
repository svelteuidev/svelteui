<script lang="ts">
	import { slide } from 'svelte/transition';

	export let className = '';
	export { className as class };

	let isShowingCode = false;

	function showCode() {
		isShowingCode = !isShowingCode;
	}
</script>

<div class="relative h-max p-10 rounded-xl shadow-md bg-gray-100 dark:bg-gray-800 {className}">
	<slot />
	<button on:click={showCode} class="absolute bottom-5 right-5"
		>{!isShowingCode ? 'Show Code' : 'Hide Code'}</button
	>
</div>
{#if isShowingCode}
	<div class="bg-gray-100 dark:bg-gray-800">
		<p>The Code</p>
	</div>
{/if}
