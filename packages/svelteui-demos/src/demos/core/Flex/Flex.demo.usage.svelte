<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
	import { Button, Flex } from '@svelteuidev/core';
<\/script>

<Flex gap="lg">
	<Button>Button 1</Button>
	<Button>Button 2</Button>
	<Button>Button 3</Button>
</Flex>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Button, Flex } from '@svelteuidev/core';
</script>

<Flex gap="lg">
	<Button>Button 1</Button>
	<Button>Button 2</Button>
	<Button>Button 3</Button>
</Flex>
