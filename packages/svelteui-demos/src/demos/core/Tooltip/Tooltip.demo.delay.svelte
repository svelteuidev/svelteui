<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
  import { Button, Tooltip } from '@svelteuidev/core';
<\/script>

<Tooltip label="Opened after 500ms" openDelay={500}>
    <Button variant="outline">Delay open - 500ms</Button>
</Tooltip>

<Tooltip label="Closes after 500ms" closeDelay={500}>
    <Button variant="outline">Delay close - 500ms</Button>
</Tooltip>
`;

	export const type: CodeDemoType['type'] = 'demo';
	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Button, Center, Tooltip } from '@svelteuidev/core';
</script>

<Center>
	<Tooltip override={{ marginRight: '10px' }} label="Opened after 500ms" openDelay={500}>
		<Button variant="outline">Delay open - 500ms</Button>
	</Tooltip>

	<Tooltip label="Closes after 500ms" closeDelay={500}>
		<Button variant="outline">Delay close - 500ms</Button>
	</Tooltip>
</Center>
