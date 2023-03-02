<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
  import { Box } from '@svelteuidev/core';

  const demoStyles = {
    size: '200px',
    linearGradient: '19deg, #21D4FD 0%, #B721FF 100%',
    br: '$squared'
  };
<\/script>

<Box css={demoStyles} />
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Box, Center } from '@svelteuidev/core';

	const demoStyles = {
		size: '200px',
		linearGradient: '19deg, #21D4FD 0%, #B721FF 100%',
		br: '$squared'
	};
</script>

<Center>
	<Box css={demoStyles} />
</Center>
