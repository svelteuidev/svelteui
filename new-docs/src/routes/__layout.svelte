<script lang="ts">
	import { SvelteUIProvider } from '@svelteuidev/core';
	import { colorScheme } from '@svelteness/kit-docs';
</script>

<SvelteUIProvider ssr themeObserver={$colorScheme === 'dark' ? 'dark' : 'light'}>
	<slot />
</SvelteUIProvider>
