<script lang="ts">
	import { SvelteUIProvider, Container, Title, Button, Group, Anchor } from '@svelteuidev/core';

	let isDark = false;
	function toggleTheme() {
		isDark = !isDark;
	}
</script>

<SvelteUIProvider
	override={{ mb: 200 }}
	withGlobalStyles
	withNormalizeCSS
	themeObserver={isDark ? 'dark' : 'light'}
	ssr
>
	<Group override={{ my: '$5' }} position="center">
		<Button on:click={toggleTheme} variant="outline">
			{isDark ? 'Dark' : 'Light'} Mode
		</Button>
		<Title weight="bold" override={{ letterSpacing: '$tight' }}>
			This is the testing route for the demos
		</Title>
		<Anchor href="/">Home</Anchor>
		<Anchor href="examples">Examples</Anchor>
	</Group>
	<hr />
	<Container>
		<slot />
	</Container>
</SvelteUIProvider>

<style>
	:global(body) {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
			Cantarell, 'Helvetica Neue', sans-serif;
	}
</style>
