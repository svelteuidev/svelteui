<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
    import { Code } from '@svelteuidev/core';
<\/script>

<Code color="red">This code is red</Code>
<Code color="teal">This code is teal</Code>
<Code color="blue">This code is blue</Code>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Code, Group } from '@svelteuidev/core';
</script>

<Group position="center">
	{#each ['red', 'teal', 'blue'] as color}
		<Code {color}>This code is {color}</Code>
	{/each}
</Group>
