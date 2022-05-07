<script lang="ts">
	import { ENVIRONMENT } from '$lib/internal';
	const { server } = ENVIRONMENT;
</script>

{#if server}
	<slot />
{/if}
