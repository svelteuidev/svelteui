<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
    import { NativeSelect } from '@svelteuidev/core';
    import { StarFilled } from 'radix-icons-svelte';
<\/script>

<NativeSelect
    data={['Svelte', 'Vue', 'Angular', 'React']}
    label="Pick the best"
    iconComponent={StarFilled}
	override={{ '.withIcon': { pl: '40px !important' } }}
/>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { NativeSelect } from '@svelteuidev/core';
	import { StarFilled } from 'radix-icons-svelte';
</script>

<NativeSelect
	data={['Svelte', 'Vue', 'Angular', 'React']}
	label="Pick the best"
	iconComponent={StarFilled}
	override={{ '.withIcon': { pl: '40px !important' } }}
/>
