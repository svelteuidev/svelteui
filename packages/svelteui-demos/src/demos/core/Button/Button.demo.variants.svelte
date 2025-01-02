<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
	import type { ButtonProps } from '@svelteuidev/core';

	const code = `
	<script>
		import { Button } from '@svelteuidev/core';
	<\/script>
	
	<Button variant="filled">filled</Button>
	<Button variant="light">light</Button>
	<Button variant="outline">outline</Button>
	<Button variant="default">default</Button>
	<Button variant="subtle">subtle</Button>
	`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code,
		codeVisible: true
	};

	let variants: ButtonProps['variant'][] = ['filled', 'light', 'outline', 'default', 'subtle'];
</script>

<script lang="ts">
	import { Button, Group } from '@svelteuidev/core';
</script>

<Group position="center">
	{#each variants as variant}
		<Button {variant}>{variant}</Button>
	{/each}
</Group>
