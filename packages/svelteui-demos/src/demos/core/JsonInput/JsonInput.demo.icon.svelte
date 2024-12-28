<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script lang="ts">
	import { Center, JsonInput } from '@svelteuidev/core';
	import { Gear } from 'radix-icons-svelte';
<\/script>

<Center>
	<JsonInput label="Robot Configuration" placeholder="Enter JSON data" icon={Gear} />
</Center>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, JsonInput } from '@svelteuidev/core';
	import { Gear } from 'radix-icons-svelte';
</script>

<Center>
	<JsonInput label="Settings" placeholder="Enter JSON data" icon={Gear} />
</Center>
