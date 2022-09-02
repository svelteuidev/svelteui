<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
    import { Code } from '@svelteuidev/core';
<\/script>

<Code block copy message='This code will be in block and you can copy'>
    This code will be in block and you can copy
</Code>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Code } from '@svelteuidev/core';
</script>

<Code block copy message="This code will be in block and you can copy">
	This code will be in block and you can copy
</Code>
