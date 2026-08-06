<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
  import { Center, PasswordInput } from '@svelteuidev/core';
	import { EnvelopeClosed, EnvelopeOpen } from 'radix-icons-svelte';

	let show = $state(false);
<\/script>

<PasswordInput label="Your password" bind:visible={show} />
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, PasswordInput } from '@svelteuidev/core';

	let show = $state(false);
</script>

<Center>
	<PasswordInput label="Your password" bind:visible={show} />
</Center>
