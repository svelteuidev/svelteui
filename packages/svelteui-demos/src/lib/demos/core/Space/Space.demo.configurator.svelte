<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) =>
`<script>
  import { Space, Text } from '@svelteuidev/core';
<\/script>

<Text>First line</Text>
<Space ${props} />
<Text>Second line</Text>`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{ name: 'h', type: 'size', initialValue: 'md', defaultValue: 'md' }
		]
	};
</script>

<script lang="ts">
	import type { SpaceStyles } from '@svelteuidev/core';
	import { Space, Text } from '@svelteuidev/core';

	export let props: SpaceStyles.SpaceProps = {};
</script>

<Text>First line</Text>
<Space {...props} />
<Text>Second line</Text>