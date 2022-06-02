<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { TextInput } from '@svelteuidev/core';
    import { EnvelopeClosed } from 'radix-icons-svelte';
<\/script>

<TextInput
    label='Your email'
    placeholder='Your email'
    icon={EnvelopeClosed}
\/>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, TextInput } from '@svelteuidev/core';
	import { EnvelopeClosed } from 'radix-icons-svelte';
</script>

<Center>
	<TextInput
        label='Your email'
        placeholder='Your email'
        icon={EnvelopeClosed}
    />
</Center>
