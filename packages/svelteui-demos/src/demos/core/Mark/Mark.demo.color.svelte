<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string) =>
		`<script>
  import { Text, Mark } from '@svelteuidev/core';
<\/script>

<Text>A bunch of text with a <Mark${props}>highlighted bit</Mark$> in it.</Text>
`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [{ name: 'color', type: 'color', initialValue: 'yellow', defaultValue: 'yellow' }]
	};
</script>

<script lang="ts">
	import type { MarkProps } from '@svelteuidev/core';
	import { Center, Text, Mark } from '@svelteuidev/core';

	export let props: MarkProps = {};
</script>

<Center>
	<Text>A bunch of text with a <Mark {...props}>highlighted bit</Mark> in it.</Text>
</Center>
