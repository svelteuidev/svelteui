<script lang="ts">
	import { Prism } from '$lib';
	const t = `const name = "Kamell"`;
	const t2 = `const name = "Kamell Perry"`;
</script>

<svelte:head>
	<link href="/prism.css" rel="stylesheet" />
	<script defer src="/prism.js"></script>
</svelte:head>

<pre><code class="language-js">{@html t}</code></pre>
<Prism block>{t2}</Prism>
