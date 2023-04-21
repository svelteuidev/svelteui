<script lang="ts" context="module">
	import type { CodeDemoType, CodeDemoConfiguration } from '$lib/types';

	const code = `
<script>
 	import { colorScheme, SvelteUIProvider, Stack, Switch, Text } from '@svelteuidev/core';

	function toggleTheme() {
		colorScheme.update((v) => (v === 'light' ? 'dark' : 'light'));
	}
<\/script>

<SvelteUIProvider withGlobalStyles themeObserver={$colorScheme}>
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
	import { colorScheme, Stack, Switch, Text } from '@svelteuidev/core';

	function toggleTheme() {
		colorScheme.update((v) => (v === 'light' ? 'dark' : 'light'));
	}
</script>

<Stack align="center">
	<Text>Press to change the theme</Text>
	<Switch on:change={toggleTheme} />
</Stack>
