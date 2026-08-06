<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { NumberInput } from '@svelteuidev/core';
<\/script>

<NumberInput
    label='Step on hold'
    description='Step the value when clicking and holding the arrows'
    stepHoldDelay={500}
    stepHoldInterval={100}
\/>

<NumberInput
    label='Step the value with interval function'
    description='Step value will increase incrementally when control is hold'
    stepHoldDelay={500}
    stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
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
			label="Step on hold"
			description="Step the value when clicking and holding the arrows"
			stepHoldDelay={500}
			stepHoldInterval={100}
			placeholder="Hold the button"
		/>

		<NumberInput
			label="Step the value with interval function"
			description="Step value will increase incrementally when control is hold"
			stepHoldDelay={500}
			stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
			placeholder="Hold the button"
		/>
	</Stack>
</Center>
