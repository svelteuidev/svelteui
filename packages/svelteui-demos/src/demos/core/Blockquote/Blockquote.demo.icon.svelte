<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
  import { Blockquote } from '@svelteuidev/core';
  import { EnvelopeClosed } from 'radix-icons-svelte';

  const text = 'Some very wise words with deep meaning, that make you wonder.';
<\/script>

<Blockquote iconComponent={EnvelopeClosed} iconSize={32}>
  	{text}
  	{#snippet citeContent()}
		- Your cat
	{/snippet}
</Blockquote>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, Blockquote } from '@svelteuidev/core';
	import { EnvelopeClosed } from 'radix-icons-svelte';

	const text = 'Some very wise words with deep meaning, that make you wonder.';
</script>

<Center>
	<Blockquote iconComponent={EnvelopeClosed} iconSize={32}>
		{text}
		{#snippet citeContent()}
			- Your cat
		{/snippet}
	</Blockquote>
</Center>
