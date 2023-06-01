<script lang="ts">
	export let title = 'Title';
	export let date: String;
	import { colorScheme, Stack, Text, Group, Center } from '@svelteuidev/core';
	import { Calendar } from 'radix-icons-svelte';
</script>

<Stack
	override={{
		backgroundColor: $colorScheme === 'light' ? "$blue100" : "$dark800",
		padding: '$8',
    	borderRadius: "0.5rem"
	}}
>
	<Stack override={{ h1: { mb: 0 } }} spacing="xs">
		<h1 style="margin-top: 0">{title}</h1>
	</Stack>
	{#if date}
		<Group spacing={55}>
			<Text>Release Date</Text>
			<Text>
				<Center override={{ gap: '$4' }} inline>
					<Calendar />
					{date}
				</Center>
			</Text>
		</Group>
	{/if}
</Stack>

<style>
	h1 {
		font-size: 2em;
	}
</style>
