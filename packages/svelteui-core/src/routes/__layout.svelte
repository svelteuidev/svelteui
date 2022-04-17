<script lang="ts">
	import { SvelteUIProvider } from '$lib';
	import { Button, Text } from '$lib';
	import type { CSS } from '$lib';

	let darkMode: boolean = false;
	const toggleTheme = () => {
		darkMode = !darkMode;
	};

	const override: CSS = {
		position: 'absolute',
		top: '25%',
		left: '10%'
	};
</script>

<SvelteUIProvider ssr withGlobalStyles withNormalizeCSS themeObserver={'dark'}>
	<div class="title-container">
		<Button {override} on:click={toggleTheme} variant="gradient"
			>{darkMode ? 'Dark' : 'Light'} Mode</Button
		>
		<Text weight="bold" size={40} align="center" root="h1">Welcome to a SvelteUI package!</Text>
		<Text weight="medium" size="xl" align="center" root="p"
			>This is a test route to test the core package</Text
		>
		<hr />
	</div>
	<div class="container">
		<slot />
	</div>
</SvelteUIProvider>

<style>
	.container {
		padding: 2rem;
		margin: 0 auto;
	}
	.title-container {
		position: relative;
		margin-top: 10px;
	}
</style>
