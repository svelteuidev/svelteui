<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
    import { Checkbox } from '@svelteuidev/core';
<\/script>

<Checkbox checked size='xs' label='xs checkbox' />
<Checkbox checked size='sm' label='sm checkbox' />
<Checkbox checked size='md' label='md checkbox' />
<Checkbox checked size='lg' label='lg checkbox' />
<Checkbox checked size='xl' label='xl checkbox' />`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Checkbox, Stack } from '@svelteuidev/core';
</script>

<Stack position="center">
	<Checkbox checked size="xs" label="xs checkbox" />
	<Checkbox checked size="sm" label="sm checkbox" />
	<Checkbox checked size="md" label="md checkbox" />
	<Checkbox checked size="lg" label="lg checkbox" />
	<Checkbox checked size="xl" label="xl checkbox" />
</Stack>
