<script>
	import { Prism } from '$lib';
	import 'prismjs/components/prism-java.js';

	import { SvelteUIProvider } from '@svelteuidev/core';

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
</script>

<SvelteUIProvider withGlobalStyles withNormalizeCSS themeObserver={'dark'}>
	<Prism code={code} lineNumbers={true} highlightLines={'1-4,8'}/>
	<Prism code={svelteCode} language="svelte" />
	<Prism code={javaCode} language="java" />
</SvelteUIProvider>
