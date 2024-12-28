<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
	const code = `
<script>
	import { Month } from '@svelteuidev/dates';
<\/script>

<Month month={new Date()} firstDayOfWeek="sunday" />
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
	<Month month={new Date()} firstDayOfWeek="sunday" />
</Group>
