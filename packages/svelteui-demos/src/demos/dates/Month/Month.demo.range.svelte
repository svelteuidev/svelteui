<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
	const code = `
<script>
    import dayjs from 'dayjs';
    import { Month } from '@svelteuidev/dates';
<\/script>

<Month>
    month={new Date()}
    range={[
    	dayjs(new Date()).startOf('month').toDate(),
    	dayjs(new Date()).startOf('month').add(4, 'days').toDate(),
    ]}
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
</script>

<Group position="center">
	<Month
		month={new Date()}
		range={[
			dayjs(new Date()).startOf('month').toDate(),
			dayjs(new Date()).startOf('month').add(4, 'days').toDate()
		]}
	/>
</Group>
