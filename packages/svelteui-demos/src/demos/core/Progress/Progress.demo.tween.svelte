<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
	const code = `
<Progress tween bind:value />
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Progress, Space, Group, Button } from '@svelteuidev/core';

	let value = $state(10);
</script>

<Progress tween bind:value size="lg" />
<Space h="lg" />
<Group>
	<Button onclick={() => (value += 10)}>Increment</Button>
	<Button onclick={() => (value -= 10)}>Decrement</Button>
</Group>
