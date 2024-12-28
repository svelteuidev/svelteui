<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { NumberInput } from '@svelteuidev/core';
    import { Star } from 'radix-icons-svelte';
<\/script>

<NumberInput
    label='Number input with decimal steps'
    defaultValue={0.05}
    precision={2}
    min={-1}
    max={1}
    icon={Star}
\/>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Group, NumberInput } from '@svelteuidev/core';
	import { Star } from 'radix-icons-svelte';
</script>

<Group position="center">
	<NumberInput
		label="Number input with decimal steps"
		defaultValue={0.05}
		precision={2}
		min={-1}
		max={1}
		step={0.05}
		icon={Star}
	/>
</Group>
