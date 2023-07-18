<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
  import { Center, PasswordInput } from '@svelteuidev/core';
	import { EnvelopeClosed, EnvelopeOpen } from 'radix-icons-svelte';
<\/script>

<PasswordInput label="Your password">
  <svelte:fragment slot="visibilityToggleIcon" let:visible>
    {#if visible}
      <EnvelopeOpen />
    {:else}
      <EnvelopeClosed />
    {/if}
  </svelte:fragment>
</PasswordInput>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Center, PasswordInput } from '@svelteuidev/core';
	import { EnvelopeClosed, EnvelopeOpen } from 'radix-icons-svelte';
</script>

<Center>
	<PasswordInput label="Your password">
		<svelte:fragment slot="visibilityToggleIcon" let:visible>
			{#if visible}
				<EnvelopeOpen />
			{:else}
				<EnvelopeClosed />
			{/if}
		</svelte:fragment>
	</PasswordInput>
</Center>
