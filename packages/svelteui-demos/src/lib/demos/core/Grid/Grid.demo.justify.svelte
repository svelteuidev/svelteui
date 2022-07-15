<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) =>
		`<script>
  import { Grid } from '@svelteuidev/core';
<\/script>

<Grid${props}>
    <Grid.Col span={3} override={{ minHeight: 80 }}>1</Grid.Col>
    <Grid.Col span={3} override={{ minHeight: 120 }}>2</Grid.Col>
    <Grid.Col span={3}>3</Grid.Col>
</Grid>
`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{
				name: 'justify',
				type: 'select',
				data: [
					{ label: 'flex-start', value: 'flex-start' },
					{ label: 'flex-end', value: 'flex-end' },
					{ label: 'center', value: 'center' },
					{ label: 'space-between', value: 'space-between' },
					{ label: 'space-around', value: 'space-around' }
				],
				initialValue: 'flex-start',
				defaultValue: 'flex-start'
			},
			{
				name: 'align',
				type: 'select',
				data: [
					{ label: 'flex-start', value: 'flex-start' },
					{ label: 'flex-end', value: 'flex-end' },
					{ label: 'center', value: 'center' },
					{ label: 'stretch', value: 'stretch' }
				],
				initialValue: 'stretch',
				defaultValue: 'stretch'
			}
		]
	};
</script>

<script lang="ts">
	import type { GridProps } from '@svelteuidev/core';
	import { Grid } from '@svelteuidev/core';

	import { default as ColWrapper } from './ColWrapper.svelte';

	export let props: GridProps = {};
</script>

<Grid {...props}>
	<Grid.Col span={3} override={{ minHeight: 80 }}>
		<ColWrapper>1</ColWrapper>
	</Grid.Col>
	<Grid.Col span={3} override={{ minHeight: 120 }}>
		<ColWrapper>2</ColWrapper>
	</Grid.Col>
	<Grid.Col span={3}>
		<ColWrapper>3</ColWrapper>
	</Grid.Col>
</Grid>
