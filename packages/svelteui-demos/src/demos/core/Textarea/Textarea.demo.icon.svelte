<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
  import { Textarea } from '@svelteuidev/core';
  import { EnvelopeClosed } from 'radix-icons-svelte';
<\/script>

<Textarea label="Message" placeholder="Dear John" iconComponent={EnvelopeClosed} />
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, Textarea } from '@svelteuidev/core';
	import { EnvelopeClosed } from 'radix-icons-svelte';
</script>

<Center>
	<Textarea label="Message" placeholder="Dear John" iconComponent={EnvelopeClosed} />
</Center>
