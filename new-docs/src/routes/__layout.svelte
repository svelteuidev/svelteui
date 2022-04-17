<script lang="ts">
	import { SvelteUIProvider } from '@svelteuidev/core';
	import { colorScheme } from '@svelteness/kit-docs';
	import { page } from '$app/stores';

	$: home = $page.url.pathname === '/';
</script>

<SvelteUIProvider
	withGlobalStyles={home ? true : false}
	ssr
	themeObserver={$colorScheme === 'dark' ? 'dark' : 'light'}
>
	<slot />
</SvelteUIProvider>
