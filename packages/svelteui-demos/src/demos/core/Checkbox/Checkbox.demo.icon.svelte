<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
    import { Checkbox } from '@svelteuidev/core';
    import { Heart, HeartFilled, Rocket } from 'radix-icons-svelte';

    let indeterminate = true;
<\/script>

<Checkbox checked label="Custom icon">
    <Rocket size={10} />    
</Checkbox>
<Checkbox checked label="Custom icon" {indeterminate}>
    {#if indeterminate}
        <HeartFilled size={10} />
    {:else}
        <Heart size={10} />
    {/if}
</Checkbox>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Checkbox, Stack } from '@svelteuidev/core';
	import { Heart, HeartFilled, Rocket } from 'radix-icons-svelte';

	let indeterminate = true;
</script>

<Stack position="center">
	<Checkbox checked label="Custom icon">
		<Rocket size={10} />
	</Checkbox>
	<Checkbox checked label="Custom icon" {indeterminate}>
		{#if indeterminate}
			<HeartFilled size={10} />
		{:else}
			<Heart size={10} />
		{/if}
	</Checkbox>
</Stack>
