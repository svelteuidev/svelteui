<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
  import { Button, Tooltip } from '@svelteuidev/core';
<\/script>

<Tooltip withArrow opened labelComponent='Default arrow'>
    <Button>Default arrow</Button>
</Tooltip>
<Tooltip withArrow opened arrowSize={3} labelComponent='Arrow with size'>
    <Button>Arrow with size</Button>
</Tooltip>
`;

	export const type: CodeDemoType['type'] = 'demo';
	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Button, Center, SimpleGrid, Tooltip } from '@svelteuidev/core';
</script>

<Center override={{ height: '80px', alignItems: 'flex-end' }}>
	<SimpleGrid cols={2}>
		<Tooltip withArrow opened labelComponent="Default arrow">
			<Button>Default arrow</Button>
		</Tooltip>
		<Tooltip withArrow opened arrowSize={3} labelComponent="Arrow with size">
			<Button>Arrow with size</Button>
		</Tooltip>
	</SimpleGrid>
</Center>
