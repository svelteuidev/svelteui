<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code =
`<script>
	import { Box, Button, Group, Overlay } from '@svelteuidev/core';

    let visible = false;
<\/script>

<Box css={{ height: 100, position: 'relative' }}>
    {#if visible}
        <Overlay opacity={0.6} color="#000" zIndex={5} blur={2} />
    {/if}
    Overlay with a blur
</Box>

<Group children={1} position="center">
    <Button on:click={() => visible = !visible}>Toggle overlay</Button>
</Group>`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script>
	import { Box, Button, Group, Overlay, Text } from '@svelteuidev/core';

    let visible = false;
</script>

<Box css={{ height: 50, position: 'relative' }}>
    {#if visible}
        <Overlay opacity={0.6} color="#000" zIndex={5} blur={2} />
    {/if}
    <Text align='center'>Overlay with a blur</Text>
</Box>

<Group children={1} position="center">
    <Button on:click={() => visible = !visible}>Toggle overlay</Button>
</Group>
