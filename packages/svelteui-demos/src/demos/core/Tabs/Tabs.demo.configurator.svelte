<script lang="ts" module>
	import type { ConfiguratorDemoType, ConfiguratorDemoConfiguration } from '$lib/types';

	const codeTemplate = (props: string, children: string) =>
		`<script>
    import { Tabs } from '@svelteuidev/core';
    import { Camera, EnvelopeClosed, Gear } from 'radix-icons-svelte';
<\/script>

<Tabs${props}>
    <Tabs.Tab labelText='Gallery' iconComponent={Camera}>Gallery tab content</Tabs.Tab>
    <Tabs.Tab labelText='Messages' iconComponent={EnvelopeClosed}>Messages tab content</Tabs.Tab>
    <Tabs.Tab labelText='Settings' iconComponent={Gear}>Settings tab content</Tabs.Tab>
</Tabs>`;

	export const type: ConfiguratorDemoType['type'] = 'configurator';

	export const configuration: ConfiguratorDemoConfiguration = {
		codeTemplate,
		configurator: [
			{
				name: 'color',
				type: 'color',
				initialValue: 'blue',
				defaultValue: 'blue'
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
				name: 'tabPadding',
				label: 'Tab Padding',
				type: 'size',
				initialValue: 'xs',
				defaultValue: 'xs'
			},
			{
				name: 'orientation',
				type: 'select',
				data: [
					{ label: 'horizontal', value: 'horizontal' },
					{ label: 'vertical', value: 'vertical' }
				],
				initialValue: 'horizontal',
				defaultValue: 'horizontal'
			}
		]
	};
</script>

<script lang="ts">
	import type { TabsProps } from '@svelteuidev/core';
	import { Tabs } from '@svelteuidev/core';
	import { Camera, EnvelopeClosed, Gear } from 'radix-icons-svelte';

	let props: TabsProps = $props();
</script>

<Tabs {...props}>
	<Tabs.Tab labelText="Gallery" iconComponent={Camera}>Gallery tab content</Tabs.Tab>
	<Tabs.Tab labelText="Messages" iconComponent={EnvelopeClosed}>Messages tab content</Tabs.Tab>
	<Tabs.Tab labelText="Settings" iconComponent={Gear}>Settings tab content</Tabs.Tab>
</Tabs>
