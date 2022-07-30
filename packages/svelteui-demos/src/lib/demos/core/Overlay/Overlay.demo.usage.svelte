<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `<script>
	import { Box, Button, Group, Overlay, Text } from '@svelteuidev/core';

    let visible = false;
    let count = 0;
<\/script>

<Box css={{ height: 100, position: 'relative' }}>
    {#if visible}
        <Overlay opacity={0.6} color="#000" zIndex={5} />
    {/if}
    <Button on:click={() => count++} color={visible ? 'red' : 'teal'}>
        {!visible ? 'Click as much as you like' : "Won't click, haha"}
    </Button>
</Box>
<Group children={2} direction='column' position="center">
    <Text>Count: {count}</Text>
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
	let count = 0;
</script>

<Box
	css={{
		display: 'flex',
		justifyContent: 'center',
		height: 60,
		position: 'relative',
		textAlign: 'center'
	}}
>
	{#if visible}
		<Overlay opacity={0.6} color="#000" zIndex={5} />
	{/if}
	<Button on:click={() => count++} color={visible ? 'red' : 'teal'}>
		{!visible ? 'Click as much as you like' : "Won't click, haha"}
	</Button>
</Box>
<Group children={2} direction="column" position="center">
	<Text>Count: {count}</Text>
	<Button on:click={() => (visible = !visible)}>Toggle overlay</Button>
</Group>
