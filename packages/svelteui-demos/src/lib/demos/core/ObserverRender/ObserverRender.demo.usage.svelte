<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { ObserverRender, Text, Paper } from '@svelteuidev/core';
<\/script>

<Paper override={{ overflowY: 'scroll', h: 300 }}>
	<div style="padding-top: 260px; padding-bottom: 280px;">
		<ObserverRender let:visible options={{ threshold: 1 }}>
			<Paper 
                p="xl"
                override={{ 
                    bc: visible ? '$green900' : '$red900', minW: '50%' 
                }} 
            >
				<Text override={{ color: 'white' }} weight="extrabold">
					{visible ? 'Fully visible' : 'Obscured'}
				</Text>
			</Paper>
		</ObserverRender>
	</div>
</Paper>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { ObserverRender, Text, Paper } from '@svelteuidev/core';
</script>

<Paper override={{ overflowY: 'scroll', h: 300 }}>
	<div style="padding-top: 260px; padding-bottom: 280px;">
		<ObserverRender let:visible options={{ threshold: 1 }}>
			<Paper override={{ bc: visible ? '$green900' : '$red900', minW: '50%' }} p="xl">
				<Text override={{ color: 'white' }} weight="extrabold">
					{visible ? 'Fully visible' : 'Obscured'}
				</Text>
			</Paper>
		</ObserverRender>
	</div>
</Paper>
