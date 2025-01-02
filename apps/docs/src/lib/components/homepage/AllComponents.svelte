<script lang="ts">
	// prettier-ignore
	import { Group, ThemeIcon, Text, SimpleGrid, Box, Stack, ActionIcon, Tooltip, Container } from '@svelteuidev/core';
	import { ArrowRight } from 'radix-icons-svelte';
	import { components } from '$lib/data';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

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
		{@const { link, component, content, title, color, ...rest } = item}
		{@const Component = component}
		<Box href={link} css={styles}>
			<Stack>
				<Group position="apart">
					<Group>
						<ThemeIcon size={34} override={{ backgroundColor: item.color }}>
							<item.icon size={20} />
						</ThemeIcon>

						<Text weight="extrabold" override={{ letterSpacing: '$tight' }} size="xl">
							{item.title}
						</Text>
					</Group>
					<Tooltip labelComponent={`Go to ${item.title} docs`}>
						<a href={item.link}>
							<ActionIcon variant="light" size="lg">
								<ArrowRight color="black" />
							</ActionIcon>
						</a>
					</Tooltip>
				</Group>
				<Container>
					{#if content}
						<Component {...item}>
							{#if children}
								{@render children()}
							{:else}
								{item.content.valueOf()}
							{/if}
						</Component>
					{:else}
						<Component />
					{/if}
				</Container>
			</Stack>
		</Box>
	{/each}
</SimpleGrid>
