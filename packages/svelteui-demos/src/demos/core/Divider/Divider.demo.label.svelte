<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
  <script>
    import { Divider } from '@svelteuidev/core';
    import { MagnifyingGlass } from 'radix-icons-svelte';
  <\/script>

  <Divider label='Label on the left' labelPosition='left' \/>
  <Divider label='Label in the center' labelPosition='center' \/>
  <Divider label='Label on the right' labelPosition='right' \/>
  <Divider labelPosition='center'>
    <div slot='label'>
      <MagnifyingGlass \/>
      <span>Search results<\/span>
    <\/div>
  <\/Divider>
  <Divider
    size='md'
    variant='dashed'
    label='Click here'
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

<Divider label="Label on the left" labelPosition="left" />

<Divider label="Label in the center" labelPosition="center" />

<Divider label="Label on the right" labelPosition="right" />

<Divider labelPosition="center">
	<div slot="label">
		<MagnifyingGlass />
		<span style="vertical-align: middle;">Search results</span>
	</div>
</Divider>

<Divider
	size="md"
	variant="dashed"
	label="Click here"
	labelPosition="left"
	labelProps={{ variant: 'link', href: 'https://svelteui.dev', root: 'a' }}
/>
