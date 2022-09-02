<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Button } from '@svelteuidev/core';
	import { useRafFn } from '@svelteuidev/composables';

	let count = 0;
	const { pause, resume } = useRafFn(() => count++);
<\/script>

<div>Count: {count}</div>
<Button on:click={() => pause()}>Pause</Button>
<Button on:click={() => resume()}>Resume</Button>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Button, Group } from '@svelteuidev/core';
	import { useRafFn } from '@svelteuidev/composables';

	let count = 0;
	const { pause, resume } = useRafFn(() => {
		count++;
	});
</script>

<Group position="center">
	<div>Count: {count}</div>
	<Button on:click={() => pause()}>Pause</Button>
	<Button on:click={() => resume()}>Resume</Button>
</Group>
