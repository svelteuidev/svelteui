<script lang="ts">
	import { STARTGUIDE_DATA } from './data';
	import Guides from './Guides.svelte';
	import { Code } from '@svelteuidev/core';

	let actionLink = true;
	let dependencies = 'test';
	let initScript = 'test 2';

	$: selected = 'svelte';
	const active = { state: 'active' };
</script>

<div>
	<h1 class="text-2xl sm:text-4xl">Get started with</h1>
	<div class="grid grid-cols-1 md:flex gap-10">
		{#each STARTGUIDE_DATA as { title, id, icon } (id)}
			<Guides
				on:click={() => (selected = id)}
				{title}
				{icon}
				active={selected === id ? active : {}}
			/>
		{/each}
	</div>
	<div>
		{actionLink ? 'Or init' : 'Init'} new application
	</div>

	<Code>{initScript}</Code>

	<div>Install dependencies</div>

	<div>With yarn</div>

	<Code>{`yarn add ${dependencies || '@mantine/core @mantine/hooks'}`}</Code>

	<div>With npm</div>

	<Code>{`npm install ${dependencies || '@mantine/core @mantine/hooks'}`}</Code>

	<div>All done!</div>
</div>
