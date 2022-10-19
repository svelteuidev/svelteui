<script lang="ts">
	import { onMount } from 'svelte';
	import addons from '@storybook/addons';
	import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
	import { SvelteUIProvider } from '@svelteuidev/core';
	import type { ColorScheme } from '@svelteuidev/core';

	let channel;
	let theme: ColorScheme = 'light';

	onMount(() => {
		channel = addons.getChannel();
		channel.on(DARK_MODE_EVENT_NAME, setTheme);
	});

	function setTheme(isDark) {
		theme = isDark ? 'dark' : 'light';
	}
</script>

<SvelteUIProvider themeObserver={theme} withNormalizeCSS withGlobalStyles>
	<slot />
</SvelteUIProvider>
