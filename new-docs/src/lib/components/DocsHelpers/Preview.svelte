<script lang="ts">
	export let style = '';
</script>

<div class="container" {style}>
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
