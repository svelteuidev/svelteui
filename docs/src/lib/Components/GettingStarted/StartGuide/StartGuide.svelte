<script lang="ts">
	import { STARTGUIDE_DATA } from './data';
	import Guides from './Guides.svelte';
	import { Prism } from '@svelteuidev/prism';
	import { Code } from '@svelteuidev/core';

	/** Variable for switching cards stitches variant*/
	const active = { state: 'active' };
	const allDone = `<script>\n\timport { Button } from '@svelteuidev/core';\n<\/script>\n\n<Button>Click Me</Button>`;

	$: initScript =
		selected === 'svelte'
			? 'npx degit sveltejs/template my-svelte-project'
			: 'npm init svelte@next my-app';
	$: dependencies = '';
	$: selected = 'svelte';

	const yarnScript = `yarn add ${dependencies || '@svelteuidev/core @svelteuidev/actions'}`;
	const npmScript = `npm install ${dependencies || '@svelteuidev/core @svelteuidev/actions'}`;
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

	<div class="">
		<h3>Initialize a new project</h3>

		<Code copy message={initScript} block>{initScript}</Code>

		<h2>Install dependencies</h2>

		<h3>With yarn</h3>

		<Prism theme="twilight" language="tsx" block message={yarnScript}>{yarnScript}</Prism>

		<h3>With npm</h3>

		<Prism theme="twilight" language="tsx" block message={npmScript}>{npmScript}</Prism>

		<h3>All done!</h3>

		<Prism theme="twilight" language="html" block message={allDone}>{allDone}</Prism>
	</div>
</div>
