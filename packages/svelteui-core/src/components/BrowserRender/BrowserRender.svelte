<script lang="ts">
	import { ENVIRONMENT } from '$lib/internal';
	const { browser } = ENVIRONMENT;
</script>

{#if browser}
	<slot />
{/if}
