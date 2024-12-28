<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';
	const code = `
<script>
    import { Progress } from '@svelteuidev/core';
<\/script>

<Progress value={75} label="75%" size="xl" radius="xl" />
<Progress
    mt='md'
    size="xl"
    radius="xl"
    sections={[
        { value: 30, color: 'pink', label: 'Documents' },
        { value: 30, color: 'grape', label: 'Apps' },
        { value: 25, color: 'violet', label: 'Other' },
    ]}
/>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Progress, Space } from '@svelteuidev/core';
</script>

<Progress value={75} label="75%" size="xl" radius="xl" />
<Space h="md" />
<Progress
	size="xl"
	radius="xl"
	sections={[
		{ value: 30, color: 'pink', label: 'Documents' },
		{ value: 30, color: 'grape', label: 'Apps' },
		{ value: 25, color: 'violet', label: 'Other' }
	]}
/>
