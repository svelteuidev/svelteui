<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code =
`<script>
    import { Code } from '@svelteuidev/core';
<\/script>

<Code color="red">This code is red</Code>
<Code color="teal">This code is teal</Code>
<Code color="blue">This code is blue</Code>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Code } from '@svelteuidev/core';
</script>

<Code color="red">This code is red</Code>
<Code color="teal">This code is teal</Code>
<Code color="blue">This code is blue</Code>
