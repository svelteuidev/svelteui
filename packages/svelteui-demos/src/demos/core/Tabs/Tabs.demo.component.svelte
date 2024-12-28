<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
	import { Tabs } from '@svelteuidev/core';
<\/script>

<Tabs>
    <Tabs.Tab label="First" title="Reveal hidden truth on long mouse over">
        First tab content
    </Tabs.Tab>
    <Tabs.Tab label="Not allowed" disabled>
        https://youtu.be/dQw4w9WgXcQ
    </Tabs.Tab>
    <Tabs.Tab label="Delete this?" color="red" override={{ fontWeight: 500 }}>
        Yes, delete this
    </Tabs.Tab>
</Tabs>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Tabs } from '@svelteuidev/core';
</script>

<Tabs>
	<Tabs.Tab label="First" title="Reveal hidden truth on long mouse over">
		First tab content
	</Tabs.Tab>
	<Tabs.Tab label="Not allowed" disabled>https://youtu.be/dQw4w9WgXcQ</Tabs.Tab>
	<Tabs.Tab label="Delete this?" color="red" override={{ backgroundColor: 'red' }}>
		Yes, delete this
	</Tabs.Tab>
</Tabs>
