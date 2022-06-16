<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
	import { Fragment } from '@svelteuidev/core';
    import { setContext } from 'svelte'

    let value
<\/script>

<Fragment
    onCreate={() => {
      setContext('some context key', value)
    }}
>
    children can now access this context value
</Fragment>

// or using the context prop

<Fragment context={{ 'some context key': value }}>
    children can now access this context value
</Fragment>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Fragment } from '@svelteuidev/core';
	import { setContext } from 'svelte';

	let value;
</script>

<Fragment
	onCreate={() => {
		setContext('your context key', value);
	}}
>
	children can now access the context value
</Fragment>
