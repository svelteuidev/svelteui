<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
  	import { Blockquote } from '@svelteuidev/core';

  	const text = \`Money is just one thing, folks. There's a lot of other one things that are everything. There's
		also that one thing that's a one thing so special you'd give every other one thing to save that
		one thing and be lost without that one thing. And if you lost that one thing, you'd be left with
		nothing. A nothing so empty and cold that all the other one things will mean nothing.\`;
<\/script>

<Blockquote>
  	{text}
	{#snippet citeContent()}
		- Corey Riffin
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

	const text = `Money is just one thing, folks. There's a lot of other one things that are everything. There's
		also that one thing that's a one thing so special you'd give every other one thing to save that
		one thing and be lost without that one thing. And if you lost that one thing, you'd be left with
		nothing. A nothing so empty and cold that all the other one things will mean nothing.`;
</script>

<Center>
	<Blockquote>
		{text}
		{#snippet citeContent()}
			- Corey Riffin
		{/snippet}
	</Blockquote>
</Center>
