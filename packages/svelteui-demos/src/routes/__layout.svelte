<script lang="ts">
	import { SvelteUIProvider, Container } from '@svelteuidev/core';
</script>

<SvelteUIProvider withGlobalStyles withNormalizeCSS>
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
