<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
  <script>
    import { Divider } from '@svelteuidev/core';
    import { MagnifyingGlass } from 'radix-icons-svelte';
  <\/script>

  <Divider labelText='Label on the left' labelPosition='left' \/>
  <Divider labelText='Label in the center' labelPosition='center' \/>
  <Divider labelText='Label on the right' labelPosition='right' \/>
  <Divider labelPosition='center'>
    {#snippet label()}
      <div>
        <MagnifyingGlass \/>
        <span style="vertical-align: middle;">Search results<\/span>
      <\/div>
    {/snippet}
  <\/Divider>
  <Divider
    size='md'
    variant='dashed'
    labelText='Click here'
    labelPosition='left'
    labelProps={{ variant: 'link', href: 'https://svelteui.dev', root: 'a' }}
  \/>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Divider } from '@svelteuidev/core';
	import { MagnifyingGlass } from 'radix-icons-svelte';
</script>

<Divider labelText="Label on the left" labelPosition="left" />

<Divider labelText="Label in the center" labelPosition="center" />

<Divider labelText="Label on the right" labelPosition="right" />

<Divider labelPosition="center">
	{#snippet label()}
		<div>
			<MagnifyingGlass />
			<span style="vertical-align: middle;">Search results</span>
		</div>
	{/snippet}
</Divider>

<Divider
	size="md"
	variant="dashed"
	labelText="Click here"
	labelPosition="left"
	labelProps={{ variant: 'link', href: 'https://svelteui.dev', root: 'a' }}
/>
