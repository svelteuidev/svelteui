<script lang="ts" context="module">
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
	import { Center, NumberInput, Stack } from '@svelteuidev/core';
</script>

<Center>
    <Stack position="center">
        <NumberInput error label='Your age' defaultValue={19} />
        <NumberInput error='You must be at least 18' label='Your age' defaultValue={16} />
    </Stack>
</Center>
