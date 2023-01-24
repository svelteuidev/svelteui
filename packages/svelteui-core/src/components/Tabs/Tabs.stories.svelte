<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Camera, EnvelopeClosed, Gear } from 'radix-icons-svelte';
	import { Tabs } from './index';
	import { Badge } from '../Badge';
</script>

<Meta title="Components/Tabs" component={Tabs} />

<Template let:args>
	<Tabs {...args}>
		<Tabs.Tab label="Gallery" icon={Camera}>Gallery tab content</Tabs.Tab>
		<Tabs.Tab label="Messages" icon={EnvelopeClosed}>Messages tab content</Tabs.Tab>
		<Tabs.Tab label="Settings" icon={Gear}>Settings tab content</Tabs.Tab>
	</Tabs>
</Template>

<Story name="Tabs" id="tabs" />

<Story name="Tabs using icon slot" id="tabs_slot">
	<Tabs>
		<Tabs.Tab label="Gallery">
			<svelte:fragment slot="icon">
				<Badge>New</Badge>
			</svelte:fragment>
			Gallery tab content
		</Tabs.Tab>
	</Tabs>
</Story>
