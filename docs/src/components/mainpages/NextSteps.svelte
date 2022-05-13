<script lang="ts">
	import { Group, ThemeIcon, Text, SimpleGrid, Box } from '@svelteuidev/core';
	import { mobile } from 'components';
	import { NEXT_STEPS_DATA } from '../../data';
	// import type { CSS } from '@svelteuidev/core'

	const styles = {
		focusRing: 'auto',
		display: 'block',
		padding: '$xl',
		borderRadius: '$md',
		border: `1px solid $gray300`,
		backgroundColor: 'white',
		color: 'black',

		'&:hover': {
			backgroundColor: '$gray50',
			textDecoration: 'none'
		}
	};
</script>

<SimpleGrid
	breakpoints={[
		{ minWidth: 800, cols: 1, spacing: 'md' },
		{ minWidth: 1024, cols: 3, spacing: 'sm' }
	]}
>
	{#each NEXT_STEPS_DATA as item}
		<Box root="a" href={item.link} css={styles}>
			<Group>
				<ThemeIcon size={34} override={{ backgroundColor: item.color }}>
					<svelte:component this={item.icon} size={20} />
				</ThemeIcon>

				<Text weight={500} size="lg">
					{item.title}
				</Text>
			</Group>
			<Text size="sm" color="dimmed" override={{ lineHeight: 1.6, mt: 16 }}>
				{item.description}
			</Text>
		</Box>
	{/each}
</SimpleGrid>
