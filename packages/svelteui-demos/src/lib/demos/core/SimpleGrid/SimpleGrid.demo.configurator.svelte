<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) =>
		`<script>
  import { SimpleGrid } from '@svelteuidev/core';
<\/script>

<SimpleGrid ${props}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
</SimpleGrid>`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{ name: 'cols', type: 'number', initialValue: 3, min: 1, max: 5 },
			{ name: 'spacing', type: 'size', initialValue: 'md', defaultValue: 'md' }
		]
	};
</script>

<script lang="ts">
	import type { SimpleGridProps } from '@svelteuidev/core';
	import { Center, SimpleGrid } from '@svelteuidev/core';

	export let props: SimpleGridProps = {};
</script>

<SimpleGrid {...props}>
	{#each [...Array(5).keys()] as _, i}
		<Center override={{ bc: 'AliceBlue', padding: '$12', color: '$blue600' }}>{i + 1}</Center>
	{/each}
</SimpleGrid>
