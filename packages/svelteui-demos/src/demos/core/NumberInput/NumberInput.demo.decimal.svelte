<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { NumberInput } from '@svelteuidev/core';
<\/script>

<NumberInput
    label='Number input with decimal steps'
    defaultValue={0.05}
    precision={2}
    min={-1}
    max={1}
    step={0.05}
\/>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Group, NumberInput } from '@svelteuidev/core';
</script>

<Group position="center">
	<NumberInput
		label="Number input with decimal steps"
		defaultValue={0.05}
		precision={2}
		min={-1}
		max={1}
		step={0.05}
	/>
</Group>
