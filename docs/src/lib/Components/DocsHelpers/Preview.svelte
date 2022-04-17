<script lang="ts">
	export let gap: number = 1;
	export let direction: 'column' | 'row' = 'row';
	export let style = '';
	export let className = '';
	export { className as class };
</script>

<div
	class="container {className}"
	style="display: flex; flex-direction: {direction}; gap: {gap}rem; align-items: center; {style}"
>
	<slot />
</div>

<style>
	:global(.dark) .container {
		border: 1px solid white;
	}
	.container {
		height: max-content;
		border: 1px solid transparent;
		border-radius: 0.375rem;
		box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
	}
</style>
