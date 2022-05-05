<script>
	import { Prism } from "$lib";
	import "prismjs/components/prism-java.js";

	import { SvelteUIProvider } from "@svelteuidev/core";

	let code = `
		const a = 2;
		const b = 2;

		console.log(a + b);

		// this is a function
		function add(a, b) {
			return a + b;
		}
	`
	let svelteCode = `<div>a</div>`;
	let javaCode = `System.out.println("batata")`;
</script>

<SvelteUIProvider withGlobalStyles withNormalizeCSS themeObserver={'dark'}>
	<Prism code={code} />
	<Prism code={svelteCode} language="svelte" />
	<Prism code={javaCode} language="java" />
</SvelteUIProvider>

