<script lang="ts">
	import { focusWithin, viewportSize, mousePosition, browserContext, eyeDropper } from '$lib';
	import { Input, Button, Box, Text, Space, Group, Code, Center, Stack } from '@svelteuidev/core';

	const { focused, focuswithin } = focusWithin();
	const viewport = viewportSize();
	$: ({ width, height } = $viewport);
	const { position, mouseposition } = mousePosition();
	$: ({ x, y } = $position);
	const location = browserContext();
	console.log($location);
	const { isSupported, sRGBHex, open } = eyeDropper({ initialValue: '#ffffff' });
</script>

<svelte:body />

<h1>Welcome to a svelteui package!</h1>
<p>This is a test route to test the utilities</p>
<hr />

<div use:focuswithin>
	<Box css={{ backgroundColor: $focused ? '$blue50' : 'transparent', padding: '$10' }}>
		<Text size="sm">One of elements has focus: {$focused}</Text>
		<Input label="Focus this input" placeholder="Styles will be added to parent" />
		<Button override={{ mt: '$5' }}>Button</Button>
	</Box>
</div>
<Space h={30} />
<Text>Width: {width}, Height: {height}</Text>
<Space h={30} />
<div>
	<Group position="center">
		<div use:mouseposition style="width: 300px; height: 100px; background-color: #f1f3f5;" />
	</Group>
	<Text align="center">
		Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
	</Text>
</div>
<Space h={30} />
<Center css={{ width: 400, bc: '$blue50' }}>
	<Stack>
		<Text>isSupported: {isSupported}</Text>
		<Text>sRGBHex: {$sRGBHex}</Text>
		<Button on:click={() => open()}>Open Eye Dropper</Button>
	</Stack>
</Center>
