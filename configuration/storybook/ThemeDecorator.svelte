<script lang="ts">
	import { onMount } from 'svelte';
	import { addons } from '@storybook/preview-api';
	import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
	// import { SvelteUIProvider } from '@svelteuidev/core';
	import type { ColorScheme } from '@svelteuidev/core';

	let channel;
	let theme: ColorScheme = 'light';

	onMount(() => {
		channel = addons.getChannel();
		channel.on(DARK_MODE_EVENT_NAME, setTheme);
	});

	function setTheme(isDark) {
		theme = isDark ? 'dark' : 'light';
		if (isDark) {
			window.document.documentElement.dataset.theme = 'dark';
		} else {
			window.document.documentElement.dataset.theme = 'light';
		}
	}
</script>

<slot />
<!-- TODO(migration): remove this commment -->
<!-- <SvelteUIProvider themeObserver={theme} withNormalizeCSS withGlobalStyles>
</SvelteUIProvider> -->
