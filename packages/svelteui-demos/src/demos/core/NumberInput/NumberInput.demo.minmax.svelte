<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { NumberInput } from '@svelteuidev/core';
<\/script>

<NumberInput
    label='Your age'
    placeholder='Your age'
    description='From 0 to 120, step is 1'
    min={0}
    max={120}
\/>
<NumberInput
    label='Your weight in kg'
    placeholder='Your weight'
    description='From 0 to infinity, step is 5'
    min={0}
    step={5}
\/>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, NumberInput, Stack } from '@svelteuidev/core';
</script>

<Center>
	<Stack position="center">
		<NumberInput
			label="Your age"
			placeholder="Your age"
			description="From 0 to 120, step is 1"
			min={0}
			max={120}
		/>
		<NumberInput
			label="Your weight in kg"
			placeholder="Your weight"
			description="From 0 to infinity, step is 5"
			min={0}
			step={5}
		/>
	</Stack>
</Center>
