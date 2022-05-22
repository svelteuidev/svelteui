<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
    <script>
        import { Anchor, Center, Box } from '@svelteuidev/core';
    <\/script>
    
    <Anchor href="https://svelteui.org" target="_blank">
      <Center inline>
        <ArrowLeft size={14} />
        <Box css={{ ml: 5 }}>Back to Mantine website</Box>
      </Center>
    </Anchor>
	`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, Box } from '@svelteuidev/core';
	import { ArrowLeft } from 'radix-icons-svelte';
</script>

<Box css={{ color: '$blue600' }} root="a" href="/" target="_blank">
	<Center inline>
		<ArrowLeft size={14} />
		<Box css={{ ml: 5 }}>Back to the homepage</Box>
	</Center>
</Box>
