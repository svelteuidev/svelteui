<script lang="ts" module>
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) =>
		`<script>
  import { Space, Text } from '@svelteuidev/core';
<\/script>

<div style="display: flex">
    <Text>First line</Text>
    <Space ${props} />
    <Text>Second line</Text>
</div>`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [{ name: 'w', type: 'size', initialValue: 'md', defaultValue: 'md' }]
	};
</script>

<script lang="ts">
	import type { SpaceProps } from '@svelteuidev/core';
	import { Space, Text } from '@svelteuidev/core';

	let props: SpaceProps = $props();
</script>

<div style="display: flex">
	<Text>First line</Text>
	<Space {...props} />
	<Text>Second line</Text>
</div>
