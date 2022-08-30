<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { Button } from '@svelteuidev/core';
<\/script>

<Button compact>Click Me</Button>
<Button variant='outline' compact>Click Me</Button>
<Button variant='default' compact>Click Me</Button>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Button, Group } from '@svelteuidev/core';
</script>

<Group position="center">
	<Button compact>Click Me</Button>
	<Button variant="outline" compact>Click Me</Button>
	<Button variant="default" compact>Click Me</Button>
</Group>
