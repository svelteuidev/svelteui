<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
	import { Tabs } from '@svelteuidev/core';
    import { Camera, EnvelopeClosed, Gear } from 'radix-icons-svelte';
<\/script>

<Tabs>
    <Tabs.Tab labelText='Gallery' iconComponent={Camera}>Gallery tab content</Tabs.Tab>
    <Tabs.Tab labelText='Messages' iconComponent={EnvelopeClosed}>Messages tab content</Tabs.Tab>
    <Tabs.Tab iconComponent={Gear}>Settings tab content</Tabs.Tab>
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
	<Tabs.Tab labelText="Gallery" iconComponent={Camera}>Gallery tab content</Tabs.Tab>
	<Tabs.Tab labelText="Messages" iconComponent={EnvelopeClosed}>Messages tab content</Tabs.Tab>
	<Tabs.Tab iconComponent={Gear}>Settings tab content</Tabs.Tab>
</Tabs>
