<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Button } from '@svelteuidev/core';
<\/script>

<Button color='blue' ripple>Click me!</Button>
<Button color='red' ripple>Click me!</Button>
<Button color='orange' ripple>Click me!</Button>
<Button color='pink' ripple>Click me!</Button>
<Button color='dark' ripple>Click me!</Button>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Button, Group } from '@svelteuidev/core';
</script>

<Group position="center">
	{#each ['blue', 'red', 'orange', 'pink', 'dark'] as color}
		<Button {color} ripple>Click me!</Button>
	{/each}
</Group>
