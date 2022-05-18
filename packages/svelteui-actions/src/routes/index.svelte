<script lang="ts">
	import {} from '$lib';
	import { Button, Space } from '@svelteuidev/core';
	import { onMount } from 'svelte';

	function toggle() {
		visible = !visible;
	}

	let value;
	let visible = false;
	let pos = { x: 0, y: 0 };
	onMount(() => {
		pos = { x: 1, y: 1 };
	});
</script>

<h1>Welcome to a svelteui package!</h1>
<p>This is a test route to test the actions package</p>
<hr />

<Space h="xl" />
<Button on:click={toggle}>{visible ? 'Confirm' : 'Edit'}</Button>
<Space h="xl" />

X: {pos.x}
Y: {pos.y}
