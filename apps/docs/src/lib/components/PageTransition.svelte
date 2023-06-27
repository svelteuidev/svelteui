<script lang="ts">
	import { fly } from 'svelte/transition';
	export let refresh: string;
</script>

{#key refresh}
	<div in:fly={{ x: -5, duration: 300, delay: 300 }} out:fly={{ x: 5, duration: 300 }}>
		<slot />
	</div>
{/key}
