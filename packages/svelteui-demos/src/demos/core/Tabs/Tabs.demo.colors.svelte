<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
	import { Tabs } from '@svelteuidev/core';
<\/script>

<Tabs color='teal'>
    <Tabs.Tab labelText='Teal tab'>Teal tab content</Tabs.Tab>
    <Tabs.Tab labelText='Still teal tab'>Teal tab content #2</Tabs.Tab>
    <Tabs.Tab labelText='Pink tab' color='pink'>Pink tab content</Tabs.Tab>
</Tabs>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Tabs } from '@svelteuidev/core';
</script>

<Tabs color="teal">
	<Tabs.Tab labelText="Teal tab">Teal tab content</Tabs.Tab>
	<Tabs.Tab labelText="Still teal tab">Teal tab content #2</Tabs.Tab>
	<Tabs.Tab labelText="Pink tab" color="pink">Pink tab content</Tabs.Tab>
</Tabs>
