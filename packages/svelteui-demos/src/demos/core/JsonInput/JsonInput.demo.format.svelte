<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script lang="ts">
	import { Center, JsonInput } from '@svelteuidev/core';
<\/script>

<Center>
	<JsonInput label="Data" placeholder="Enter data" formatOnBlur />
</Center>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, JsonInput } from '@svelteuidev/core';
</script>

<Center>
	<JsonInput label="Data" placeholder="Enter data" formatOnBlur />
</Center>
