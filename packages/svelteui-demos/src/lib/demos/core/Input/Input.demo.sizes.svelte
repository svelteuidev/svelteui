<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	export const type: CodeDemoType['type'] = 'demo';
	export const configuration: CodeDemoConfiguration = {};
</script>

<script lang="ts">
	import { Input } from '@svelteuidev/core';
</script>

{#each ['xs', 'sm', 'md', 'lg', 'xl'] as size}
	<Input {size} placeholder={`${size} input size`} />
{/each}
