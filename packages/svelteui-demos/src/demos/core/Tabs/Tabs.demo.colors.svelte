<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
	import { Tabs } from '@svelteuidev/core';
<\/script>

<Tabs color='teal'>
    <Tabs.Tab label='Teal tab'>Teal tab content</Tabs.Tab>
    <Tabs.Tab label='Still teal tab'>Teal tab content #2</Tabs.Tab>
    <Tabs.Tab label='Pink tab' color='pink'>Pink tab content</Tabs.Tab>
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
	<Tabs.Tab label="Teal tab">Teal tab content</Tabs.Tab>
	<Tabs.Tab label="Still teal tab">Teal tab content #2</Tabs.Tab>
	<Tabs.Tab label="Pink tab" color="pink">Pink tab content</Tabs.Tab>
</Tabs>
