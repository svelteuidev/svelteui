<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
	import { Grid } from '@svelteuidev/core';
<\/script>

<Grid>
    <Grid.Col md={6} lg={3}>1</Grid.Col>
    <Grid.Col md={6} lg={3}>2</Grid.Col>
    <Grid.Col md={6} lg={3}>3</Grid.Col>
    <Grid.Col md={6} lg={3}>4</Grid.Col>
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
	<Grid.Col md={6} lg={3}>
		<ColWrapper>1</ColWrapper>
	</Grid.Col>
	<Grid.Col md={6} lg={3}>
		<ColWrapper>2</ColWrapper>
	</Grid.Col>
	<Grid.Col md={6} lg={3}>
		<ColWrapper>3</ColWrapper>
	</Grid.Col>
	<Grid.Col md={6} lg={3}>
		<ColWrapper>4</ColWrapper>
	</Grid.Col>
</Grid>
