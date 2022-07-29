<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
    <script>
        import { Divider } from '@svelteuidev/core';
    <\/script>
    
    <Divider />
    <Divider variant='dashed' />
    <Divider variant='dotted' />
	`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Divider } from '@svelteuidev/core';
</script>

<Divider />

<Divider variant="dashed" />

<Divider variant="dotted" />
