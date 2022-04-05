<script lang="ts">
	import { error } from '$lib';
	import type { CurrentComponents } from '$lib';

	export let observable = false;
	export let component: CurrentComponents;
	export let code: Record<string, boolean | string>;
</script>

{#if observable}
	{@html error(component, code).template}
{/if}
