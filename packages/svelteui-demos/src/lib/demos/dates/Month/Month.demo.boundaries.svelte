<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
	const code = `
<script>
	import { Month } from '@svelteuidev/dates';
	import dayjs from 'dayjs';

	const initialDate = dayjs(new Date()).startOf('month').add(10, 'days').toDate();
	let value = initialDate;
<\/script>

<Month
    month={value}
    {value}
    onChange={(val) => (value = val)}
    minDate={dayjs(new Date()).startOf('month').add(5, 'days').toDate()}
    maxDate={dayjs(new Date()).endOf('month').subtract(5, 'days').toDate()}
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
	import dayjs from 'dayjs';

	const initialDate = dayjs(new Date()).startOf('month').add(10, 'days').toDate();
	let value = initialDate;
</script>

<Group position="center">
	<Month
		month={value}
		{value}
		onChange={(val) => (value = val)}
		minDate={dayjs(new Date()).startOf('month').add(5, 'days').toDate()}
		maxDate={dayjs(new Date()).endOf('month').subtract(5, 'days').toDate()}
	/>
</Group>
