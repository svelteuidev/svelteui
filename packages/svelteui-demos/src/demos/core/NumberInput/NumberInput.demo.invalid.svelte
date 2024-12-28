<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { NumberInput } from '@svelteuidev/core';
<\/script>

<NumberInput error label='Your age' defaultValue={19} \/>
<NumberInput error='You must be at least 18' label='Your age' defaultValue={16} \/>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, Stack, NumberInput } from '@svelteuidev/core';

	let value: number = $state();
</script>

<Center>
	<Stack position="center">
		<NumberInput error label="Your age" defaultValue={19} />
		<NumberInput
			bind:value
			error={value < 18 ? 'You must be at least 18' : null}
			label="Your age"
			defaultValue={16}
		/>
	</Stack>
</Center>
