<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
	import { Fragment } from '@svelteuidev/core';
<\/script>

<Fragment
	mode="lifecycle"
	onCreate={() => console.log('Component Created')}
	onMount={() => console.log('Component Mounted')}
	beforeUpdate={() => console.log('Component is about to update')}
	afterUpdate={() => console.log('Component just updated')}
	onDestroy={() => console.log('Component Destroyed')}
>
	some content
</Fragment>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Fragment } from '@svelteuidev/core';
</script>

<Fragment
	mode="lifecycle"
	onCreate={() => console.log('Component Created')}
	onMount={() => console.log('Component Mounted')}
	beforeUpdate={() => console.log('Component is about to update')}
	afterUpdate={() => console.log('Component just updated')}
	onDestroy={() => console.log('Component Destroyed')}
>
	some content
</Fragment>
