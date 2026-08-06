<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script lang="ts">
	import { Center, JsonInput } from '@svelteuidev/core';

	const sampleJson = '{"tasks": ["dancing", "taking over the world"]}';
<\/script>

<Center>
	<JsonInput disabled label="Disabled with value" value={sampleJson} />
</Center>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, JsonInput } from '@svelteuidev/core';

	const sampleJson = '{"tasks": ["dancing", "taking over the world"]}';
</script>

<Center>
	<JsonInput disabled label="Robot configuration" value={sampleJson} />
</Center>
