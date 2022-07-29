<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
    import { NativeSelect, Text } from '@svelteuidev/core';

    let value = 'Svelte';
<\/script>

<NativeSelect
    data={['Svelte', 'React', 'Vue', 'Angular']}
    bind:value
    override={{ select: { padding: 0 } }}
    label="What is the best framework?"
/>
<Text>The best is <Text root="span" inline variant="gradient">{value}</Text></Text>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { NativeSelect, Text } from '@svelteuidev/core';

	let value = 'Svelte';
</script>

<NativeSelect
	data={['Svelte', 'React', 'Vue', 'Angular']}
	bind:value
	override={{ select: { padding: 0 } }}
	label="What is the best framework?"
/>
<Text>The best is <Text root="span" inline variant="gradient">{value}</Text></Text>
