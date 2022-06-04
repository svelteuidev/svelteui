<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Text, Button, Box, Input } from '@svelteuidev/core';
	import { useFocusWithin } from '@svelteuidev/composables';

	const { focuswithin, focused } = useFocusWithin();
<\/script>

<div use:focuswithin>
	<Box css={{ backgroundColor: $focused ? '$blue50' : 'transparent', padding: '$10' }}>
		<Text size="sm">One of elements has focus: { $focused }</Text>
		<Input label="Focus this input" placeholder="Styles will be added to parent" />
		<Button override={{ mt: '$5' }}>Button</Button>
	</Box>
</div>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Text, Button, Box, Input } from '@svelteuidev/core';
	import { useFocusWithin } from '@svelteuidev/composables';

	const { focuswithin, focused } = useFocusWithin();
</script>

<div use:focuswithin>
	<Box css={{ backgroundColor: $focused ? '$blue50' : 'transparent', padding: '$10' }}>
		<Text size="sm">One of elements has focus: {$focused}</Text>
		<Input label="Focus this input" placeholder="Styles will be added to parent" />
		<Button override={{ mt: '$5' }}>Button</Button>
	</Box>
</div>
