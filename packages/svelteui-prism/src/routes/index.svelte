<script>
	import { Prism } from "$lib";
	import "prismjs/components/prism-java.js";

	let code = `
		const a = 2;
		const b = 2;

		console.log(a + b);

		function add(a, b) {
			return a + b;
		}
	`
	let svelteCode = `<div>a</div>`;
	let javaCode = `System.out.println("batata")`;
</script>

<Prism code={code} />
<Prism code={svelteCode} language="svelte" />
<Prism code={javaCode} language="java" />

