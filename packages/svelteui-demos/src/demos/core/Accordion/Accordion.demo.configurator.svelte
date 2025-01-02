<script lang="ts" module>
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) =>
		`<script>
  import { Accordion } from '@svelteuidev/core';
<\/script>

<Accordion${props}>
  <Accordion.Item value="typescript">
  	{#snippet control()}
		<div>Typescript Based</div>
	{/snippet}
    Build type safe applications...
  </Accordion.Item>
  <Accordion.Item value="packed">
    {#snippet control()}
		<div>Feature packed</div>
	{/snippet}
    SvelteUI contains more than just components...
  </Accordion.Item>
  <Accordion.Item value="accessible">
    {#snippet control()}
		<div>Accessible and usable</div>
	{/snippet}
    All components are accessible according to WAI-ARIA standards....
  </Accordion.Item>
</Accordion>`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{
				name: 'variant',
				type: 'select',
				data: [
					{ label: 'default', value: 'default' },
					{ label: 'contained', value: 'contained' },
					{ label: 'filled', value: 'filled' },
					{ label: 'separated', value: 'separated' }
				],
				initialValue: 'default',
				defaultValue: 'default'
			},
			{ name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
			{
				name: 'chevronPosition',
				label: 'Chevron Position',
				type: 'select',
				data: [
					{ label: 'left', value: 'left' },
					{ label: 'right', value: 'right' }
				],
				initialValue: 'right',
				defaultValue: 'right'
			},
			{
				name: 'disableChevronRotation',
				label: 'Disable chevron rotation',
				type: 'boolean',
				initialValue: false,
				defaultValue: false
			}
		]
	};
</script>

<script lang="ts">
	import type { AccordionProps } from '@svelteuidev/core';
	import { Accordion } from '@svelteuidev/core';

	let props: AccordionProps = $props();
</script>

<Accordion {...props}>
	<Accordion.Item value="typescript">
		{#snippet control()}
			<div>Typescript Based</div>
		{/snippet}
		Build type safe applications. All SvelteUI packages are built with TypeScript and support it by default.
		All components and functions export types, are documented, and give developers autocomplete features!
	</Accordion.Item>
	<Accordion.Item value="packed">
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
