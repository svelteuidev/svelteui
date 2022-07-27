<script>
	import { features } from '../../data';
	import { Title, Text, SimpleGrid, ThemeIcon, Center, Stack, Paper } from '@svelteuidev/core';
</script>

<SimpleGrid
	breakpoints={[
		{ minWidth: 1024, cols: 3, spacing: 'md' },
		{ minWidth: 768, cols: 2, spacing: 'sm' },
		{ minWidth: 640, cols: 1, spacing: 'sm' }
	]}
>
	{#each features as { description, icon, title }}
		<Paper shadow="xl">
			<Stack>
				<Center override={{ jc: 'start', gap: '$10' }} inline>
					<ThemeIcon variant="gradient" size="xl">
						<svelte:component this={icon} size={25} />
					</ThemeIcon>
					<Title order={3} weight="extrabold">{title}</Title>
				</Center>
				<Text size="lg" override={{ lineHeight: '$md' }}>{description}</Text>
			</Stack>
		</Paper>
	{/each}
</SimpleGrid>
