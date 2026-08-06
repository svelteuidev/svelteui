<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { Kbd } from '@svelteuidev/core';
<\/script>

<Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>
	`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, Kbd } from '@svelteuidev/core';
</script>

<Center>
	<Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>
</Center>
