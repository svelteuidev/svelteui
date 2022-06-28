<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) =>
		`<script>
  import { Grid } from '@svelteuidev/core';
<\/script>

<Grid${props}>
    <Grid.Col span={4}>1</Grid.Col>
    <Grid.Col span={4}>2</Grid.Col>
    <Grid.Col span={4}>3</Grid.Col>
    <Grid.Col span={4}>4</Grid.Col>
    <Grid.Col span={4}>5</Grid.Col>
</Grid>
`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{ name: 'spacing', type: 'size', initialValue: 'md', defaultValue: 'md' },
			{ name: 'grow', type: 'boolean', initialValue: true, defaultValue: true }
		]
	};
</script>

<script lang="ts">
	import type { GridStyles } from '@svelteuidev/core';
	import { Grid } from '@svelteuidev/core';

	import { default as ColWrapper } from './ColWrapper.svelte';

	export let props: GridStyles.GridProps = {};
</script>

<Grid {...props}>
	<Grid.Col span={4}>
		<ColWrapper>1</ColWrapper>
	</Grid.Col>
	<Grid.Col span={4}>
		<ColWrapper>2</ColWrapper>
	</Grid.Col>
	<Grid.Col span={4}>
		<ColWrapper>3</ColWrapper>
	</Grid.Col>
	<Grid.Col span={4}>
		<ColWrapper>4</ColWrapper>
	</Grid.Col>
	<Grid.Col span={4}>
		<ColWrapper>5</ColWrapper>
	</Grid.Col>
</Grid>
