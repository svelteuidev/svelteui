<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
	import { Grid } from '@svelteuidev/core';
<\/script>

<Grid>
    <Grid.Col span={4}>1</Grid.Col>
    <Grid.Col span={4}>2</Grid.Col>
    <Grid.Col span={4}>3</Grid.Col>
</Grid>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Grid } from '@svelteuidev/core';

	import { default as ColWrapper } from './ColWrapper.svelte';
</script>

<Grid>
	<Grid.Col span={4}>
		<ColWrapper>1</ColWrapper>
	</Grid.Col>
	<Grid.Col span={4}>
		<ColWrapper>2</ColWrapper>
	</Grid.Col>
	<Grid.Col span={4}>
		<ColWrapper>3</ColWrapper>
	</Grid.Col>
</Grid>
