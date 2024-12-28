<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
	const code = `
<script>
	import { Month } from '@svelteuidev/dates';

    let value = new Date()
<\/script>

<Month
    month={value}
    value={value}
    onChange={(val) => (value = val)}
    weekendDays={[5, 6]}
/>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Group } from '@svelteuidev/core';
	import { Month } from '@svelteuidev/dates';

	let value = $state(new Date());
</script>

<Group position="center">
	<Month month={value} {value} onChange={(val) => (value = val)} weekendDays={[5, 6]} />
</Group>
