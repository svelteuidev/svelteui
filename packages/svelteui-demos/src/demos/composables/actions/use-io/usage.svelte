<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Paper, Text } from '@svelteuidev/core';
	import { io } from '@svelteuidev/composables';

	let visible = $state(false);
	const handleChange = ({ detail }) => (visible = detail.inView);
<\/script>

<Paper override={{ overflowY: 'scroll', h: 300 }}>
	<div style="padding-top: 260px; padding-bottom: 280px;">
		<div use:io={{ threshold: 1 }} oniochange={handleChange}>
			<Paper override={{ bc: visible ? '$green900' : '$red900', minW: '50%' }} padding="xl">
				<Text override={{ color: 'white' }} weight="extrabold">
					{visible ? 'Fully visible' : 'Obscured'}
				</Text>
			</Paper>
		</div>
	</div>
</Paper>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code,
		spacing: false
	};
</script>

<script>
	import { Paper, Text } from '@svelteuidev/core';
	import { io } from '@svelteuidev/composables';

	let visible = $state(false);
	const handleChange = ({ detail }) => (visible = detail.inView);
</script>

<Paper override={{ overflowY: 'scroll', h: 300 }}>
	<div style="padding-top: 260px; padding-bottom: 280px;">
		<div use:io={{ threshold: 1 }} oniochange={handleChange}>
			<Paper override={{ bc: visible ? '$green900' : '$red900', minW: '50%' }} padding="xl">
				<Text override={{ color: 'white' }} weight="extrabold">
					{visible ? 'Fully visible' : 'Obscured'}
				</Text>
			</Paper>
		</div>
	</div>
</Paper>
