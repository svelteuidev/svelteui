<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
  import { Accordion } from '@svelteuidev/core';
<\/script>

<Accordion>
  <Accordion.Item value="typescript">
    {#snippet control()}
		<div>Typescript Based</div>
	{/snippet}
    Build type safe applications. All SvelteUI packages are built with TypeScript and support it by
    default. All components and functions export types, are documented, and give developers autocomplete
    features!
  </Accordion.Item>
  <Accordion.Item value="packed" disabled>
	{#snippet control()}
		<div>Feature packed</div>
	{/snippet}
    SvelteUI contains more than just components. With Actions, Transitions, and Utilities available
    to you, development will be fun and easy!
  </Accordion.Item>
  <Accordion.Item value="accessible">
    {#snippet control()}
		<div>Accessible and usable</div>
	{/snippet}
    All components are accessible according to WAI-ARIA standards. On top of that, no annoying focus
    ring. It will appear only when user navigates with keyboard.
  </Accordion.Item>
</Accordion>`;
	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code,
		codeVisible: true
	};
</script>

<script lang="ts">
	import { Accordion } from '@svelteuidev/core';
</script>

<Accordion>
	<Accordion.Item value="typescript">
		{#snippet control()}
			<div>Typescript Based</div>
		{/snippet}
		Build type safe applications. All SvelteUI packages are built with TypeScript and support it by default.
		All components and functions export types, are documented, and give developers autocomplete features!
	</Accordion.Item>
	<Accordion.Item value="packed" disabled>
		{#snippet control()}
			<div>Feature packed</div>
		{/snippet}
		SvelteUI contains more than just components. With Actions, Transitions, and Utilities available to
		you, development will be fun and easy!
	</Accordion.Item>
	<Accordion.Item value="accessible">
		{#snippet control()}
			<div>Accessible and usable</div>
		{/snippet}
		All components are accessible according to WAI-ARIA standards. On top of that, no annoying focus
		ring. It will appear only when user navigates with keyboard.
	</Accordion.Item>
</Accordion>
