<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
  import { Accordion } from '@svelteuidev/core';
  import { Plus } from 'radix-icons-svelte';
<\/script>

<Accordion chevron={Plus}>
  <Accordion.Item value="typescript">
    <div slot="control">Typescript Based</div>
    Build type safe applications. All SvelteUI packages are built with TypeScript and support it by
    default. All components and functions export types, are documented, and give developers autocomplete
    features!
  </Accordion.Item>
  <Accordion.Item value="packed">
    <div slot="control">Feature packed</div>
    SvelteUI contains more than just components. With Actions, Transitions, and Utilities available
    to you, development will be fun and easy!
  </Accordion.Item>
  <Accordion.Item value="accessible">
    <div slot="control">Accessible and usable</div>
    All components are accessible according to WAI-ARIA standards. On top of that, no annoying focus
    ring. It will appear only when user navigates with keyboard.
  </Accordion.Item>
</Accordion>`;
	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code,
		toggle: true
	};
</script>

<script lang="ts">
	import { Accordion } from '@svelteuidev/core';
	import { Plus } from 'radix-icons-svelte';
</script>

<Accordion chevron={Plus}>
	<Accordion.Item value="typescript">
		<div slot="control">Typescript Based</div>
		Build type safe applications. All SvelteUI packages are built with TypeScript and support it by default.
		All components and functions export types, are documented, and give developers autocomplete features!
	</Accordion.Item>
	<Accordion.Item value="packed">
		<div slot="control">Feature packed</div>
		SvelteUI contains more than just components. With Actions, Transitions, and Utilities available to
		you, development will be fun and easy!
	</Accordion.Item>
	<Accordion.Item value="accessible">
		<div slot="control">Accessible and usable</div>
		All components are accessible according to WAI-ARIA standards. On top of that, no annoying focus
		ring. It will appear only when user navigates with keyboard.
	</Accordion.Item>
</Accordion>
