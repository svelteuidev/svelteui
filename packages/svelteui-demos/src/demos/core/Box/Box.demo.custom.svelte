<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Box, Code } from '@svelteuidev/core';
<\/script>

<Box root={Code}>I am a code component now</Box>
<Box root='span'>I am a span tag</Box>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Box, Code, Group } from '@svelteuidev/core';
</script>

<Group position="center">
	<Box root={Code}>I am a code component now</Box>
	<Box root="span">I am a span tag</Box>
</Group>
