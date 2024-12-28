<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
	const code = `
<script>
	import { Progress } from '@svelteuidev/core';
<\/script>

<Progress
	size="xl"
	sections={[
		{ value: 40, color: 'cyan' },
		{ value: 20, color: 'blue' },
		{ value: 15, color: 'indigo' }
	]}
/>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Progress } from '@svelteuidev/core';
</script>

<Progress
	size="xl"
	sections={[
		{ value: 40, color: 'cyan' },
		{ value: 20, color: 'blue' },
		{ value: 15, color: 'indigo' }
	]}
/>
