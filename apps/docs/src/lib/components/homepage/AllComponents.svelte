<script lang="ts">
	// @ts-nocheck
	// prettier-ignore
	import { Group, ThemeIcon, Text, SimpleGrid, Box, Stack, ActionIcon, Tooltip, Container } from '@svelteuidev/core';
	import { ArrowRight } from 'radix-icons-svelte';
	import { components } from '$lib/data';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
	// import type { CSS } from '@svelteuidev/core'

	const styles = {
		focusRing: 'auto',
		display: 'block',
		padding: '$xlPX',
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
							<item.icon size={20} />
						</ThemeIcon>

						<Text weight="extrabold" override={{ letterSpacing: '$tight' }} size="xl">
							{item.title}
						</Text>
					</Group>
					<Tooltip label={`Go to ${item.title} docs`}>
						<a href={item.link}>
							<ActionIcon variant="light" size="lg">
								<ArrowRight color="black" />
							</ActionIcon>
						</a>
					</Tooltip>
				</Group>
				<Container>
					{#if item?.content}
						<item.component>
							{#if children}{@render children()}{:else}{item.content.valueOf()}{/if}
						</item.component>
					{:else}
						<item.component />
					{/if}
				</Container>
			</Stack>
		</Box>
	{/each}
</SimpleGrid>
