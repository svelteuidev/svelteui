<script lang="ts">
	import {
		SvelteUIProvider,
		Seo,
		AppShell,
		Header,
		ActionIcon,
		Group,
		Container,
		Title
	} from '@svelteuidev/core';
	import { Sun, Moon } from 'radix-icons-svelte';

	let isDark = false;
	function toggleTheme() {
		isDark = !isDark;
	}
</script>

<SvelteUIProvider withGlobalStyles withNormalizeCSS themeObserver={isDark ? 'dark' : 'light'}>
	<Seo title="Home" titleTemplate="%t% | SvelteUI Dates" />
	<AppShell>
		<Header slot="header" height={60} override={{ px: '$mdPX' }}>
			<Group position="apart">
				<Title override={{ m: '$8' }} order={3} weight="bold" tracking="tight">
					SvelteUI Preprocessors
				</Title>
				<ActionIcon variant="default" size={30} on:click={toggleTheme}>
					{#if isDark}
						<Moon />
					{:else}
						<Sun />
					{/if}
				</ActionIcon>
			</Group>
		</Header>
		<Container>
			<slot />
		</Container>
	</AppShell>
</SvelteUIProvider>
