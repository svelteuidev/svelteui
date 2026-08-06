<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { Breadcrumbs, IconRenderer } from '@svelteuidev/core';
    import { Home, Person } from 'radix-icons-svelte';
<\/script>

<Breadcrumbs size="md">
  <Breadcrumbs.Item href="https://svelteui.dev">
    {#snippet icon()}
		<IconRenderer icon={Home} />
	{/snippet}
  </Breadcrumbs.Item>
  <Breadcrumbs.Item>
    {#snippet icon()}
		<IconRenderer icon={Person} />
	{/snippet}
    Application List
  </Breadcrumbs.Item>
  <Breadcrumbs.Item active={true}>View</Breadcrumbs.Item>
</Breadcrumbs>

<Breadcrumbs size="md" separator="→">
	<Breadcrumbs.Item href="https://svelteui.dev">Home</Breadcrumbs.Item>
	<Breadcrumbs.Item active={true}>Application List</Breadcrumbs.Item>
</Breadcrumbs>
	`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Breadcrumbs, IconRenderer, Space } from '@svelteuidev/core';
	import { Home, Person } from 'radix-icons-svelte';
</script>

<Breadcrumbs>
	<Breadcrumbs.Item href="https://svelteui.dev">
		{#snippet icon()}
			<IconRenderer icon={Home} />
		{/snippet}
	</Breadcrumbs.Item>
	<Breadcrumbs.Item>
		{#snippet icon()}
			<IconRenderer icon={Person} />
		{/snippet}
		Application List
	</Breadcrumbs.Item>
	<Breadcrumbs.Item active={true}>View</Breadcrumbs.Item>
</Breadcrumbs>

<Space h={10} />

<Breadcrumbs size="lg" separator="→">
	<Breadcrumbs.Item href="https://svelteui.dev">Home</Breadcrumbs.Item>
	<Breadcrumbs.Item active={true}>Application List</Breadcrumbs.Item>
</Breadcrumbs>
