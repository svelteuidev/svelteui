<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { Camera, EnvelopeClosed, Gear } from 'radix-icons-svelte';
	import { Tabs } from './index';
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
