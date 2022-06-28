<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
	import { Fragment } from '@svelteuidev/core';
<\/script>

<Fragment
	mode="lifecycle"
	on:create={() => console.log('Component Created')}
	on:mount={() => console.log('Component Mounted')}
	on:before:update={() => console.log('Component is about to update')}
	on:after:update={() => console.log('Component just updated')}
	on:destroy={() => console.log('Component Destroyed')}
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
	on:create={() => console.log('Component Created')}
	on:mount={() => console.log('Component Mounted')}
	on:before:update={() => console.log('Component is about to update')}
	on:after:update={() => console.log('Component just updated')}
	on:destroy={() => console.log('Component Destroyed')}
>
	some content
</Fragment>
