<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
  import { Blockquote } from '@svelteuidev/core';
  import { EnvelopeClosed } from 'radix-icons-svelte';

  const text = "Some very wise words with deep meaning, that make you wonder.";
<\/script>

<Blockquote icon={EnvelopeClosed} iconSize={32}>
  {text}
  <svelte:fragment slot="cite">- Your cat</svelte:fragment>
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
	<Blockquote icon={EnvelopeClosed} iconSize={32}>
		{text}
		<svelte:fragment slot="cite">- Your cat</svelte:fragment>
	</Blockquote>
</Center>
