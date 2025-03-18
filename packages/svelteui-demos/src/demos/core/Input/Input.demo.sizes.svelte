<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	export const type: CodeDemoType['type'] = 'demo';
	export const configuration: CodeDemoConfiguration = {};
</script>

<script lang="ts">
	import { Input, type SvelteUISize } from '@svelteuidev/core';

	const sizes: SvelteUISize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
</script>

{#each sizes as size}
	<Input {size} placeholder={`${size} input size`} />
{/each}
