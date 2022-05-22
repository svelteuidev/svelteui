<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	const codeTemplate = (props) => `
<script>
  import { SimpleGrid, Center } from '@svelteuidev/core';
<\/script>

<SimpleGrid${props}>
  {#each [...Array(5).keys()] as _, i}
    <Center override={{ bc: '#d3eafd', padding: '$12', color: '$white' }}>{i + 1}</Center>
  {/each}
</SimpleGrid>
 `;

	export const configuration: ConfiguratorDemoConfiguration = {
		configurator: [
			{ name: 'cols', type: 'number', initialValue: 3, defaultValue: 1, min: 1, max: 6 },
			{ name: 'spacing', type: 'size', initialValue: 'md', defaultValue: 'md' }
		],
		codeTemplate,
		previewBackground: {
			light: '#f8f9fa',
			dark: '#141517'
		},
		previewMaxWidth: 500,
		center: false
	};
</script>

<script lang="ts">
	import { SimpleGrid, Center } from '@svelteuidev/core';

	export let props = {};
</script>

<SimpleGrid {...props}>
	{#each [...Array(5).keys()] as _, i}
		<Center override={{ bc: '#d3eafd', padding: '$8', color: '$white' }}>{i + 1}</Center>
	{/each}
</SimpleGrid>
