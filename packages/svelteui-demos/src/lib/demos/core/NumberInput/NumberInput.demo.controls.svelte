<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { NumberInput } from '@svelteuidev/core';
<\/script>

<NumberInput label='By default controls are visible' placeholder='Visible'\/>

<NumberInput
    label='Disable with hideControls prop'
    placeholder='Disable with hideControls prop'
    hideControls
\/>

<NumberInput
    label='Controls also not rendered when input is disabled'
    placeholder='Disabled'
    disabled
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
		<NumberInput label="By default controls are visible" placeholder="Visible" />

		<NumberInput
			label="Disable with hideControls prop"
			placeholder="Disabled with hideControls prop"
			hideControls
		/>

		<NumberInput
			label="Controls also not rendered when input is disabled"
			placeholder="Disabled"
			disabled
		/>
	</Stack>
</Center>
