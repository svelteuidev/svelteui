<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
	import { Text, Button, TextInput } from '@svelteuidev/core';
	import { useFocusWithin } from '@svelteuidev/composables';

	const [focused, ref] = useFocusWithin();
<\/script>

<Box 
	use={[[ref]]} 
	css={{ backgroundColor: $focused ? '$blue50' : 'transparent', padding: '$10' }}
>
	<Text 
		root="p" 
		align="center" 
		size="md" 
		weight="bold" 
		tracking="tight" 
		mb="lg"
	>
		One of elements has focus:
		<Text root="span" inherit variant="gradient">{$focused}</Text>
	</Text>
	<TextInput label="Focus this input" placeholder="Styles will be added to parent" />
	<Button override={{ mt: '$5' }}>Click Me</Button>
</Box>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Text, Button, TextInput, useSvelteUITheme } from '@svelteuidev/core';
	import { useFocusWithin, upperFirst } from '@svelteuidev/composables';

	const [focused, ref] = useFocusWithin();
	const theme = useSvelteUITheme();
	const blue = theme.colors.blue50.value;
	const style = 'padding:1rem;border-radius:8px';
</script>

<div use:ref style:background-color={$focused ? blue : 'transparent'} {style}>
	<Text root="p" align="center" size="md" weight="bold" tracking="tight" mb="lg">
		One of elements has focus:
		<Text root="span" inherit variant="gradient">{upperFirst($focused.toString())}</Text>
	</Text>
	<TextInput label="Focus this input" placeholder="Styles will be added to parent" />
	<Button override={{ mt: '$5' }}>Click Me</Button>
</div>
