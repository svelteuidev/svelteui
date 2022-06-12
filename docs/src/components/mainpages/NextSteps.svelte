<script lang="ts">
	// @ts-nocheck
	import { Group, ThemeIcon, Text, SimpleGrid, Anchor } from '@svelteuidev/core';
	import { Logo } from 'components';
	import { NEXT_STEPS_DATA } from '../../data';
	// import type { CSS } from '@svelteuidev/core'

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
	const collectionsStyles = {
		focusRing: 'auto',
		display: 'block',
		padding: '$xlPX',
		borderRadius: '$md',
		linearGradient: '50deg, rgb(28, 126, 214) 0%, rgb(34, 184, 207) 100%',
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
		<Anchor root="a" href={item.link} override={styles} underline={false}>
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
		</Anchor>
	{/each}
	<Anchor
		root="a"
		href="https://svelteuidev.github.io/svelteui-collections/"
		override={collectionsStyles}
		underline={false}
	>
		<Group>
			<Logo size={35} />
			<Text weight={500} size="lg" override={{ color: 'white' }}>
				Check Out SvelteUI Collections
			</Text>
		</Group>
		<Text size="sm" override={{ lineHeight: 1.6, mt: 16, color: 'white' }}>
			SvelteUI Collections is a set of pre-made responsive components, made with SvelteUI designed
			and built by SvelteUI maintainers and the community.
		</Text>
	</Anchor>
</SimpleGrid>
