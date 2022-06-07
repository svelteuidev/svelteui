<script lang="ts">
	import { Month } from '$lib';
	import { Text } from '@svelteuidev/core';

	let value = new Date();
</script>

<Month month={value} bind:value onChange={(val) => (value = val)} />
Selected Date: <Text color="blue">{value}</Text>
