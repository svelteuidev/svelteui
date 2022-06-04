<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
    <script>
        import { Center } from '@svelteuidev/core';
    <\/script>
    
    <Center>
        All elements inside Center are centered
    </Center>
	`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, Box } from '@svelteuidev/core';
</script>

<Center override={{ maxW: 400, height: 200, bc: '$blue50', m: 'auto', p: '$5' }}>
	<Box css={{ bc: '$blue200' }}>All elements inside Center are centered</Box>
</Center>
