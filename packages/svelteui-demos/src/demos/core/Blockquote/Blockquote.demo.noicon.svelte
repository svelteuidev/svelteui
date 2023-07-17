<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
  import { Blockquote } from '@svelteuidev/core';

  const text = 'If you walk in the rain, you will get wet.';
<\/script>

<Blockquote icon={null}>
  {text}
  <svelte:fragment slot="cite">- A very wise sage</svelte:fragment>
</Blockquote>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, Blockquote } from '@svelteuidev/core';

	const text = 'If you walk in the rain, you will get wet.';
</script>

<Center>
	<Blockquote icon={null}>
		{text}
		<svelte:fragment slot="cite">- A very wise sage</svelte:fragment>
	</Blockquote>
</Center>
