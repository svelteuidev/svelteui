<script>
	import { SourceCode, DisplaySourceCode } from '$lib';
	const fruits = ['apple', 'banana', 'orange', 'grape'];
	import { Button, Divider, Group } from '@svelteuidev/core';
	import { Prism } from '@svelteuidev/prism';
</script>

<SourceCode sourceId="test">
	<!-- Comments are included too! -->
	<ul>
		{#each fruits as fruit}
			<li>{fruit}</li>
		{/each}
	</ul>
</SourceCode>

<DisplaySourceCode sourceId="test" let:source>
	<h2>You can override how the source code is displayed!</h2>
	<div>{source}</div>
</DisplaySourceCode>

<h2>Or you can allow the library to display it in a {'<pre>'} element for you!</h2>
<DisplaySourceCode sourceId="test" />

<Divider />

<Group position="center">
	<SourceCode sourceId="ButtonDemo">
		<Button>Click me</Button>
	</SourceCode>
</Group>

<DisplaySourceCode let:source sourceId="ButtonDemo">
	<Prism lineNumbers language="svelte" code={source} />
</DisplaySourceCode>
