<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
    import { Chip } from '@svelteuidev/core';
<\/script>

<Chip variant="outline">Outline default</Chip>
<Chip variant="outline" checked>Outline checked</Chip>
<Chip variant="outline" checked disabled>Outline checked disabled</Chip>
<Chip variant="filled">Filled default</Chip>
<Chip variant="filled" checked>Filled checked</Chip>
<Chip variant="filled" checked disabled>Filled checked disabled</Chip>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Chip, Group, Stack } from '@svelteuidev/core';
</script>

<Stack align="center">
	<Group>
		<Chip variant="outline">Outline default</Chip>
		<Chip variant="outline" checked>Outline checked</Chip>
		<Chip variant="outline" checked disabled>Outline checked disabled</Chip>
	</Group>
	<Group>
		<Chip variant="filled">Filled default</Chip>
		<Chip variant="filled" checked>Filled checked</Chip>
		<Chip variant="filled" checked disabled>Filled checked disabled</Chip>
	</Group>
</Stack>
