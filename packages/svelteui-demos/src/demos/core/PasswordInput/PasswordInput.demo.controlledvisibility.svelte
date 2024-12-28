<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
  import { Center, PasswordInput } from '@svelteuidev/core';
	import { EnvelopeClosed, EnvelopeOpen } from 'radix-icons-svelte';

	let show = false;

	const onVisibilityChange = (visible) => {
		show = visible;
	};
<\/script>

<PasswordInput label="Your password" visible={show} {onVisibilityChange} />
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, PasswordInput } from '@svelteuidev/core';

	let show = $state(false);

	const onVisibilityChange = (visible) => {
		show = visible;
	};
</script>

<Center>
	<PasswordInput label="Your password" visible={show} {onVisibilityChange} />
</Center>
