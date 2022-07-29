<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
    import { Input } from '@svelteuidev/core';
<\/script>

<Input variant='default' placeholder='Default variant' />
<Input variant='filled' placeholder='Filled variant' />
<Input variant='unstyled' placeholder='Unstyled variant' />`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Input } from '@svelteuidev/core';
</script>

<Input variant="default" placeholder="Default variant" />
<Input variant="filled" placeholder="Filled variant" />
<Input variant="unstyled" placeholder="Unstyled variant" />
