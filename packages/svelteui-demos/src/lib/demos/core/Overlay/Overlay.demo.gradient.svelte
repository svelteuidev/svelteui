<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
	import { Box, Button, Overlay } from '@svelteuidev/core';
<\/script>

<Box
    css={{
    position: 'relative',
    height: 200,
    width: '100%',
    maxWidth: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    }}
>
    <Button>Under overlay</Button>
    <Overlay gradient={'linear-gradient(105deg, black 20%, #312f2f 50%, $gray400 100%)''} />
</Box>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Box, Button, Overlay } from '@svelteuidev/core';
</script>

<Box
	css={{
		position: 'relative',
		height: 200,
		width: '100%',
		maxWidth: 400,
		marginLeft: 'auto',
		marginRight: 'auto',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}}
>
	<Button>Under overlay</Button>
	<Overlay gradient={`linear-gradient(105deg, black 20%, #312f2f 50%, $gray400 100%)`} />
</Box>
