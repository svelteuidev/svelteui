<script lang="ts">
	import { SvelteUIProvider } from '$lib';
	import { Button, Text, Center, Container, Stack, Group } from '$lib';
	import type { SvelteUIGradient } from '$lib';

	let darkMode: boolean = false;
	const toggleTheme = () => {
		darkMode = !darkMode;
	};

	const GRADIENTS: SvelteUIGradient[] = [
		{ from: 'blue', to: 'cyan', deg: 45 },
		{ from: 'red', to: 'pink', deg: 45 }
	];

	let x: number;
	let y: number;
	$: mobile = x < 525;
</script>

<svelte:window bind:innerWidth={x} bind:innerHeight={y} />

<SvelteUIProvider
	override={{ overflow: 'hidden' }}
	withGlobalStyles
	withNormalizeCSS
	themeObserver={darkMode ? 'dark' : 'light'}
>
	<Center override={{ pt: '$4' }}>
		<Group direction={mobile ? 'column' : 'row'} spacing="xl" position="center" noWrap>
			<Button
				gradient={darkMode ? GRADIENTS[1] : GRADIENTS[0]}
				on:click={toggleTheme}
				variant="gradient">{darkMode ? 'Dark' : 'Light'} Mode</Button
			>
			<Stack>
				<Text weight="bold" size={40} align="center" root="h1">Welcome to a SvelteUI package!</Text>
				<Text weight="medium" size="xl" align="center" root="p"
					>This is a test route to test the core package</Text
				>
			</Stack>
		</Group>
	</Center>
	<hr />
	<Container id="main-container" size="xl">
		<slot />
	</Container>
</SvelteUIProvider>
