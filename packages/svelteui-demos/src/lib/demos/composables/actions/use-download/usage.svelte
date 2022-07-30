<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { onMount } from 'svelte';
    import { Button } from '@svelteuidev/core';
    import { download } from '@svelteuidev/composables';

    let file;
    onMount(() => {
        file = new Blob([JSON.stringify({ hello: 'world' })], { type: 'application/json' })
    });
<\/script>

<Button 
    variant='outline'
    use={[[download, { blob: file, filename: "test.txt" }]]}
    on:usedownload={() => console.log('File Downloaded')}
>
    Download File
</Button>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { onMount } from 'svelte';
	import { Button, Center } from '@svelteuidev/core';
	import { download } from '@svelteuidev/composables';

	let file;
	onMount(() => {
		file = new Blob([JSON.stringify({ hello: 'world' })], { type: 'application/json' });
	});
</script>

<Center>
	<Button
		variant="outline"
		use={[[download, { blob: file, filename: 'hello.txt' }]]}
		on:usedownload={() => console.log('File Downloaded')}
	>
		Download File
	</Button>
</Center>
