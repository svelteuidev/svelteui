<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
    <script>
        import { Box, Divider } from '@svelteuidev/core';
    <\/script>
    
    <Box css={{ height: '200px', display: 'flex', justifyContent: 'center' }}>
        <Divider orientation='vertical' \/>
    <\/Box>
	`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Box, Divider } from '@svelteuidev/core';
</script>

<Box css={{ height: '200px', display: 'flex', justifyContent: 'center' }}>
	<Divider size="sm" orientation="vertical" />
</Box>
