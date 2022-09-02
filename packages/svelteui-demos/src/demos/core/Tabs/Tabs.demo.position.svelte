<script lang="ts" context="module">
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) =>
		`<script>
    import { Tabs } from '@svelteuidev/core';
<\/script>

<Tabs${props}>
    <Tabs.Tab label="First">First tab content</Tabs.Tab>
    <Tabs.Tab label="Second">Second tab content</Tabs.Tab>
    <Tabs.Tab label="Third">Third tab content</Tabs.Tab>
</Tabs>`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{
				name: 'grow',
				type: 'boolean',
				initialValue: false,
				defaultValue: false
			},
			{
				name: 'variant',
				type: 'select',
				data: [
					{ label: 'default', value: 'default' },
					{ label: 'outline', value: 'outline' },
					{ label: 'pills', value: 'pills' }
				],
				initialValue: 'default',
				defaultValue: 'default'
			},
			{
				name: 'position',
				type: 'select',
				data: [
					{ label: 'left', value: 'left' },
					{ label: 'right', value: 'right' },
					{ label: 'center', value: 'center' },
					{ label: 'apart', value: 'apart' }
				],
				initialValue: 'left',
				defaultValue: 'left'
			}
		]
	};
</script>

<script lang="ts">
	import type { TabsProps } from '@svelteuidev/core';
	import { Tabs } from '@svelteuidev/core';

	export let props: TabsProps = {};
</script>

<Tabs {...props}>
	<Tabs.Tab label="First">First tab content</Tabs.Tab>
	<Tabs.Tab label="Second">Second tab content</Tabs.Tab>
	<Tabs.Tab label="Third">Third tab content</Tabs.Tab>
</Tabs>
