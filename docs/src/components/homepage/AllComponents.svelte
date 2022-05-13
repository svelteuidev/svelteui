<script lang="ts">
	// @ts-nocheck
	import { Group, ThemeIcon, Text, SimpleGrid, Box, Stack, ActionIcon } from '@svelteuidev/core';
	import { ArrowRight } from 'radix-icons-svelte';
	import { ToolTip } from 'components';
	import { components } from '../../data';
	import Container from '@svelteuidev/core/components/Container/Container.svelte';
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
			textDecoration: 'none'
		}
	};
</script>

<SimpleGrid
	breakpoints={[
		{ minWidth: 800, cols: 1, spacing: 'md' },
		{ minWidth: 1024, cols: 3, spacing: 'sm' }
	]}
	spacing="lg"
>
	{#each components as item}
		<Box href={item.link} css={styles}>
			<Stack>
				<Group children={2} position="apart">
					<Group children={2}>
						<ThemeIcon size={34} override={{ backgroundColor: item.color }}>
							<svelte:component this={item.icon} size={20} />
						</ThemeIcon>

						<Text weight="extrabold" override={{ letterSpacing: '$tight' }} size="xl">
							{item.title}
						</Text>
					</Group>
					<ToolTip tip={`Go to ${item.title} docs`}>
						<a href={item.link}>
							<ActionIcon variant="light" size="lg">
								<ArrowRight color="black" />
							</ActionIcon>
						</a>
					</ToolTip>
				</Group>
				<Container>
					{#if item?.content}
						<svelte:component this={item.component}>
							<slot>{item.content.valueOf()}</slot>
						</svelte:component>
					{:else}
						<svelte:component this={item.component} />
					{/if}
				</Container>
			</Stack>
		</Box>
	{/each}
</SimpleGrid>
