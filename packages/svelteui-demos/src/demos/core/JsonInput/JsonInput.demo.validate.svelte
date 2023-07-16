<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script lang="ts">
	import { Center, JsonInput } from '@svelteuidev/core';
<\/script>

<Center>
	<JsonInput error label="Validate" validationError="Invalid data" />
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
	<JsonInput error label="Valid data" validationError="Invalid data" />
</Center>
