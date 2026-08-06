<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	export const type: CodeDemoType['type'] = 'demo';
	export const configuration: CodeDemoConfiguration = {};
</script>

<script lang="ts">
	import { Badge, Center, SimpleGrid, Tooltip } from '@svelteuidev/core';
</script>

<Center>
	<SimpleGrid cols={3}>
		<Tooltip position="top" placement="start" labelComponent="top-start" withArrow>
			<Badge>top-start</Badge>
		</Tooltip>
		<Tooltip position="top" placement="center" labelComponent="top-center" withArrow>
			<Badge>top-center</Badge>
		</Tooltip>
		<Tooltip position="top" placement="end" labelComponent="top-end" withArrow>
			<Badge>top-end</Badge>
		</Tooltip>
		<Tooltip position="right" placement="start" labelComponent="right-start" withArrow>
			<Badge>right-start</Badge>
		</Tooltip>
		<Tooltip position="right" placement="center" labelComponent="right-center" withArrow>
			<Badge>right-center</Badge>
		</Tooltip>
		<Tooltip position="right" placement="end" labelComponent="right-end" withArrow>
			<Badge>right-end</Badge>
		</Tooltip>
		<Tooltip position="bottom" placement="start" labelComponent="bottom-start" withArrow>
			<Badge>bottom-start</Badge>
		</Tooltip>
		<Tooltip position="bottom" placement="center" labelComponent="bottom-center" withArrow>
			<Badge>bottom-center</Badge>
		</Tooltip>
		<Tooltip position="bottom" placement="end" labelComponent="bottom-end" withArrow>
			<Badge>bottom-end</Badge>
		</Tooltip>
		<Tooltip position="left" placement="start" labelComponent="left-start" withArrow>
			<Badge>left-start</Badge>
		</Tooltip>
		<Tooltip position="left" placement="center" labelComponent="left-center" withArrow>
			<Badge>left-center</Badge>
		</Tooltip>
		<Tooltip position="left" placement="end" labelComponent="left-end" withArrow>
			<Badge>left-end</Badge>
		</Tooltip>
	</SimpleGrid>
</Center>
