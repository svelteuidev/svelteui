<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
  import { Loader, Textarea } from '@svelteuidev/core';
<\/script>

<Textarea label="Your story" placeholder="Once upon a time">
  <svelte:fragment slot="rightSection">
    <Loader color="blue" size="xs" />
  </svelte:fragment>
</Textarea>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, Loader, Textarea } from '@svelteuidev/core';
</script>

<Center>
	<Textarea label="Your story" placeholder="Once upon a time">
		{#snippet rightSection()}
			
				<Loader color="blue" size="xs" />
			
			{/snippet}
	</Textarea>
</Center>
