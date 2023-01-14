<script lang="ts">
  export let title = "Title"
  export let date: String
	// @ts-ignore
	// import { current_page } from '@svelte-docs/get/routes';
	import { Stack, Text, Group, Center } from '@svelteuidev/core';
	import { Calendar } from 'radix-icons-svelte';
</script>

<Stack>
	<Stack override={{ mb: 20, h1: { mb: 0 } }} spacing="xs">
		<h1>{title}</h1>
	</Stack>
	{#if date}
		<Group spacing={55}>
			<Text color="dimmed">Release Date</Text>
			<Text>
				<Center override={{ gap: '$4' }} inline>
					<Calendar />
					{date}
				</Center>
			</Text>
		</Group>
	{/if}
</Stack>

<hr />

<style>
  h1 {
    font-size: 2em;
  }
</style>
