<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
    import { Code } from '@svelteuidev/core';
<\/script>

<Code>This code will be inline</Code>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Code, Center } from '@svelteuidev/core';
</script>

<Center>
	<Code>This code will be inline</Code>
</Center>
