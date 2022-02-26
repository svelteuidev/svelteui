<script lang="ts">
	import { NormalizeCSS } from '$lib';
	NormalizeCSS();
</script>

<div>
	<div class="title-container">
		<h1>Welcome to a svelteui package!</h1>
		<p>This is a test route to test the core package</p>
		<hr />
	</div>
	<div class="container">
		<slot />
	</div>
</div>

<style>
	.container {
		padding: 2rem;
		margin: 0 auto;
	}
	.title-container {
		text-align: center;
	}
</style>
