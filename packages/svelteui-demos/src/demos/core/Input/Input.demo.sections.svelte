<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
    import { Badge, Input } from '@svelteuidev/core';
    import { MagnifyingGlass } from 'radix-icons-svelte';
<\/script>

<Input
    iconComponent={MagnifyingGlass}
    placeholder='Search'
    rightSectionWidth={70}
    styles={{ rightSection: { pointerEvents: 'none' } }}
>
    {#snippet rightSection()}
		<Badge color="blue" variant="filled">new</Badge>
	{/snippet}
</Input>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Badge, Input } from '@svelteuidev/core';
	import { MagnifyingGlass } from 'radix-icons-svelte';
</script>

<Input
	iconComponent={MagnifyingGlass}
	placeholder="Search"
	rightSectionWidth={70}
	styles={{ rightSection: { pointerEvents: 'none' } }}
>
	{#snippet rightSection()}
		<Badge color="blue" variant="filled">new</Badge>
	{/snippet}
</Input>
