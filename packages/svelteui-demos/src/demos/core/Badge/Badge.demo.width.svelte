<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
  import { Badge, Box } from '@svelteuidev/core';
<\/script>

<Box>
    <Badge variant="filled" fullWidth>
        Full width badge
    </Badge>
</Box>

<Box>
    <Badge variant="filled" fullWidth>
        Badge with overflow
    </Badge>
</Box>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code,
		toggle: true
	};
</script>

<script lang="ts">
	import { Badge, Box, Group } from '@svelteuidev/core';
</script>

<Group position="center">
	<Box css={{ width: 200 }}>
		<Badge variant="filled" fullWidth>Full width badge</Badge>
	</Box>

	<Box css={{ width: 120 }}>
		<Badge variant="filled" fullWidth>Badge with overflow</Badge>
	</Box>
</Group>
