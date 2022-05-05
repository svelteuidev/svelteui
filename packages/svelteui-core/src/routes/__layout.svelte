<script lang="ts">
	import { SvelteUIProvider } from '$lib';
	import { Button, Text, Box } from '$lib';
	import type { CSS } from '@stitches/core';
	import type { SvelteuiGradient } from '$lib';

	let darkMode: boolean = false;
	const toggleTheme = () => {
		darkMode = !darkMode;
	};

	const override: CSS = {
		position: 'absolute',
		top: '25%',
		left: '10%'
	};

	const GRADIENTS: SvelteuiGradient[] = [
		{ from: 'blue', to: 'cyan', deg: 45 },
		{ from: 'red', to: 'pink', deg: 45 }
	];
</script>

<SvelteUIProvider withGlobalStyles withNormalizeCSS themeObserver={darkMode ? 'dark' : 'light'}>
	<Box css={{ position: 'relative', mt: '$4' }}>
		<Button
			gradient={darkMode ? GRADIENTS[1] : GRADIENTS[0]}
			{override}
			on:click={toggleTheme}
			variant="gradient">{darkMode ? 'Dark' : 'Light'} Mode</Button
		>
		<Text weight="bold" size={40} align="center" root="h1">Welcome to a SvelteUI package!</Text>
		<Text weight="medium" size="xl" align="center" root="p"
			>This is a test route to test the core package</Text
		>
		<hr />
	</Box>
	<Box css={{ padding: '2rem', margin: '0rem auto' }}>
		<slot />
	</Box>
</SvelteUIProvider>
