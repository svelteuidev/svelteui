<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
	const code = `
<script>
    import { Month } from '@svelteuidev/dates';
<\/script>

<Month hideWeekdays month={new Date()} />
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Group } from '@svelteuidev/core';
	import { Month } from '@svelteuidev/dates';
</script>

<Group position="center">
	<Month month={new Date()} hideWeekdays />
</Group>
