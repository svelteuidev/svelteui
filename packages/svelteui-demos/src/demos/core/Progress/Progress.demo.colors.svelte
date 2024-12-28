<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
	const code = `
<script>
	import { Progress } from '@svelteuidev/core';
<\/script>

<Progress
	sections={[
		{ value: 40, color: '#68b5e8' },
		{ value: 15, color: '#6888e8' },
		{ value: 15, color: '#8468e8' }
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
	sections={[
		{ value: 40, color: '#68b5e8' },
		{ value: 15, color: '#6888e8' },
		{ value: 15, color: '#8468e8' }
	]}
/>
