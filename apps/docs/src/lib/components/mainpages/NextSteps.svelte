<script lang="ts">
	// @ts-nocheck
	import { Group, ThemeIcon, Text, SimpleGrid, Anchor } from '@svelteuidev/core';
	import { NEXT_STEPS_DATA } from '$lib/data';

	const styles = {
		focusRing: 'auto',
		display: 'block',
		padding: '$xlPX',
		borderRadius: '$md',
		border: `1px solid $gray300`,
		backgroundColor: 'white',
		color: 'black',
		transition: 'box-shadow 200ms ease, transform 100ms ease',

		'&:hover': {
			transform: 'scale(1.01)',
			boxShadow: '$md',
			textDecoration: 'none'
		}
	};
</script>

<SimpleGrid cols={2} breakpoints={[{ maxWidth: 800, cols: 1 }]}>
	{#each NEXT_STEPS_DATA as item}
		<Anchor root="a" href={item.link} override={styles} underline={false} class="next_steps">
			<Group>
				<ThemeIcon size={34} override={{ backgroundColor: `${item.color} !important` }}>
					<svelte:component this={item.icon} size={20} />
				</ThemeIcon>

				<Text weight={500} size="lg">
					{item.title}
				</Text>
			</Group>
			<Text size="sm" color="dimmed" override={{ lineHeight: 1.6, mt: 16 }}>
				{item.description}
			</Text>
		</Anchor>
	{/each}
</SimpleGrid>
