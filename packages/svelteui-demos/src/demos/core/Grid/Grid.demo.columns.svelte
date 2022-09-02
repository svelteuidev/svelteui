<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
	import { Grid } from '@svelteuidev/core';
<\/script>

<Grid cols={24}>
    <Grid.Col span={12}>1</Grid.Col>
    <Grid.Col span={6}>2</Grid.Col>
    <Grid.Col span={6}>3</Grid.Col>
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

<Grid cols={24}>
	<Grid.Col span={12}>
		<ColWrapper>1</ColWrapper>
	</Grid.Col>
	<Grid.Col span={6}>
		<ColWrapper>2</ColWrapper>
	</Grid.Col>
	<Grid.Col span={6}>
		<ColWrapper>3</ColWrapper>
	</Grid.Col>
</Grid>
