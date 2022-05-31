<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { Anchor } from '@svelteuidev/core';
<\/script>

<Anchor>SvelteUI documentation</Anchor>
	`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Anchor } from '@svelteuidev/core';
</script>

<Anchor>SvelteUI documentation</Anchor>
