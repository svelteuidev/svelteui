<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { ObserverRender, Text, Paper } from '@svelteuidev/core';
<\/script>

`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { ObserverRender, Text, Paper } from '@svelteuidev/core';
</script>
