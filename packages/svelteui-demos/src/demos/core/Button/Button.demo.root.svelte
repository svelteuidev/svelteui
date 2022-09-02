<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { Button } from '@svelteuidev/core';
<\/script>

<Button href="https://github.com/svelteuidev/svelteui">I go to svelteuidev/svelteui</Button>
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
	<Button href="https://github.com/svelteuidev/svelteui">I go to svelteuidev/svelteui</Button>
</Group>
