<script lang="ts" context="module">
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
    excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
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

	let value = new Date();
</script>

<Group position="center">
	<Month
		month={value}
		{value}
		onChange={(val) => (value = val)}
		excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
	/>
</Group>
