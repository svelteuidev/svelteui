<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
	import { Tabs } from '@svelteuidev/core';
    import { Camera, EnvelopeClosed, Gear } from 'radix-icons-svelte';
<\/script>

<Tabs>
    <Tabs.Tab label='Gallery' icon={Camera}>Gallery tab content</Tabs.Tab>
    <Tabs.Tab label='Messages' icon={EnvelopeClosed}>Messages tab content</Tabs.Tab>
    <Tabs.Tab icon={Gear}>Settings tab content</Tabs.Tab>
</Tabs>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Tabs } from '@svelteuidev/core';
	import { Camera, EnvelopeClosed, Gear } from 'radix-icons-svelte';
</script>

<Tabs>
	<Tabs.Tab label="Gallery" icon={Camera}>Gallery tab content</Tabs.Tab>
	<Tabs.Tab label="Messages" icon={EnvelopeClosed}>Messages tab content</Tabs.Tab>
	<Tabs.Tab icon={Gear}>Settings tab content</Tabs.Tab>
</Tabs>
