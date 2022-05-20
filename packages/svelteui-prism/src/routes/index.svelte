<script>
	import { Prism } from '$lib';
	import 'prismjs/components/prism-java.js';

	import { SvelteUIProvider, Group, Button, Title, Space } from '@svelteuidev/core';

	let code = `
		const a = 2;
		const b = 2;

		console.log(a + b);

		// this is a function
		async function add(a, b) {
			return a + b;
		}
		await add(a, b);
	`;
	let svelteCode = `
		{#if true}
			<div>True</div>
		{:else}
			<div>False</div>
		{/if}
	`;
	let javaCode = `System.out.println("I like coffee")`;

	let isDark = false;
	function toggleTheme() {
		isDark = !isDark;
	}
</script>

<SvelteUIProvider withGlobalStyles withNormalizeCSS themeObserver={isDark ? 'dark' : 'light'}>
	<Group override={{ my: '$5' }} position="center">
		<Button on:click={toggleTheme} variant="outline">
			{isDark ? 'Dark' : 'Light'} Mode
		</Button>
		<Title weight="bold" override={{ letterSpacing: '$tight' }}>
			This is the testing route for Prism
		</Title>
	</Group>
	<hr />
	<Prism {code} lineNumbers={true} highlightLines={'1-4,8'} />
	<Space h="xl" />
	<Prism code={svelteCode} language="svelte" />
	<Space h="xl" />
	<Prism code={javaCode} language="java" />
</SvelteUIProvider>
