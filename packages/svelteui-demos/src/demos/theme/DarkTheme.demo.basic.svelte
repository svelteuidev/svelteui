<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
  import { SvelteUIProvider, Stack, Switch, Text } from '@svelteuidev/core';

  let isDark = false;
	function toggleTheme() {
		isDark = !isDark;
	}
<\/script>

<SvelteUIProvider withGlobalStyles themeObserver={isDark ? 'dark' : 'light'}>
    <Stack align='center'>
        <Text>Press to change the theme</Text>
        <Switch on:change={toggleTheme} />
    </Stack>
</SvelteUIProvider>
`;

	export const type: CodeDemoType['type'] = 'demo';

	export const configuration: CodeDemoConfiguration = {
		code
	};
</script>

<script lang="ts">
	import { Stack, SvelteUIProvider, Switch, Text } from '@svelteuidev/core';

	let isDark = false;
	function toggleTheme() {
		isDark = !isDark;
	}
</script>

<SvelteUIProvider withGlobalStyles themeObserver={isDark ? 'dark' : 'light'}>
	<Stack align="center">
		<Text>Press to change the theme</Text>
		<Switch on:change={toggleTheme} />
	</Stack>
</SvelteUIProvider>
