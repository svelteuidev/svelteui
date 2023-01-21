<script>
	import { Badge, Center, Title, Box } from '@svelteuidev/core';

	const override = {
		gap: '0.5rem'
	};
	const title = {
		fontFamily: 'var(--font)'
	};
</script>

<a href="/" class="logoEl">
	<Center {override} inline>
		<Box css={{ d: 'flex' }}>
			<Title override={title} order={2} inline>Svelte</Title>
			<Title override={title} order={2} inline color="blue">UI</Title>
		</Box>
		<Badge override={{ display: 'inline-block' }} variant="outline">Beta</Badge>
	</Center>
</a>

<style>
  .logoEl {
    display: flex;
    align-items: center;
  }
</style>
