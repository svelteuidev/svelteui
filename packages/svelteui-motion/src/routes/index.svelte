<script lang="ts">
	import { flipboard } from '$lib';
	import { onMount } from 'svelte';

	let v = false;
	onMount(() => {
		v = true;
	});
</script>

<h1>Welcome to a svelteui package!</h1>
<p>This is a test route to test the motion package</p>
<hr />

{#if v}
	<p transition:flipboard>Transition</p>
{/if}
