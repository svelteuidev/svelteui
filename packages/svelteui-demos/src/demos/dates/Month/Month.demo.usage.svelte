<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { Month } from '@svelteuidev/dates';

    let value = new Date();
<\/script>

<Month bind:value month={value} onChange={(val) => (value = val)} />
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Center, Text, Stack, Paper } from '@svelteuidev/core';
	import { Month } from '@svelteuidev/dates';

	let value = $state(new Date());
	const mx = 'margin-left:auto;margin-right:auto;';
</script>

<Center>
	<Stack>
		<div style="width:max-content;{mx}">
			<Month bind:value month={value} onChange={(val) => (value = val)} />
		</div>
		<Text align="center">{value}</Text>
	</Stack>
</Center>
