<script lang="ts">
	import { Box, Center } from '@svelteuidev/core';
	import { Animation, TextAnimation } from '$lib';
	import { onMount } from 'svelte';

	let v = false;
	onMount(() => {
		v = true;
	});
</script>

<h1>Welcome to a svelteui package!</h1>
<p>This is a test route to test the motion package</p>
<hr />

<Center override={{ bc: '$blue50', width: 300 }}>
	<Animation animation="spin" duration={1}>
		<Box css={{ bc: '$blue200' }}>Hello</Box>
	</Animation>
</Center>

<TextAnimation animation="hue">Test Text</TextAnimation>
