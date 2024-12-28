<script lang="ts" module>
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
    import { Box, Button } from '@svelteuidev/core';
    import { portal } from '@svelteuidev/composables';

    let magic = false;
<\/script>

{#if magic}
    <div>
        Look at the top of the page
    </div>
{/if}
<div>
    <Box 
        use={[[portal, magic ? 'h1' : null]]}
        css={{bc: 'white', border: '1px solid black', br: '$md', padding: '$md'}} 
    >
        I'm being rendered {magic ? 'outside' : 'inside'} of the preview
    </Box>
</div>
<Button on:click={() => magic = !magic}>Click me to see the magic</Button>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Box, Button, Stack } from '@svelteuidev/core';
	import { portal } from '@svelteuidev/composables';

	let magic = $state(false);
</script>

<Stack align="center">
	{#if magic}
		<div>Look at the top of the page</div>
	{/if}
	<div>
		<Box
			use={[[portal, magic ? 'h1' : null]]}
			css={{ bc: 'white', border: '1px solid black', br: '$md', padding: '$md' }}
		>
			I'm being rendered {magic ? 'outside' : 'inside'} of the preview
		</Box>
	</div>
	<Button on:click={() => (magic = !magic)}>Click me to see the magic</Button>
</Stack>
