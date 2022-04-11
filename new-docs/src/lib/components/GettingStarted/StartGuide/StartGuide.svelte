<script lang="ts">
	import { css } from '@svelteuidev/core';
	import { STARTGUIDE_DATA } from './data';
	import Guides from './Guides.svelte';
	import { Code } from '@svelteuidev/core';
	import { deps } from '../Installation/data';

	/** Variable for switching cards stitches variant*/
	const active = { state: 'active' };
	const allDone = `<script>\n\timport { Button } from '@svelteuidev/core';\n<\/script>\n\n<Button>Click Me</Button>`;

	$: initScript =
		selected === 'svelte'
			? 'npx degit sveltejs/template my-svelte-project'
			: 'npm init svelte@next my-app';
	$: selected = 'svelte';
	$: yarnScript = `yarn add ${dependancies($deps) || '@svelteuidev/core @svelteuidev/actions'}`;
	$: npmScript = `npm install ${dependancies($deps) || '@svelteuidev/core @svelteuidev/actions'}`;
	$: dependancies = (arr: Array<string>) => {
		return arr.join(' ');
	};

	const ContainerStyles = css({
		h1: {
			fontSize: '1.5rem',
			lineHeight: '2rem',
			'@sm': {
				fontSize: '2.25rem',
				lineHeight: '2.5rem'
			}
		},
		'& .guide-wrapper': {
			display: 'grid',
			gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
			gap: '2.5rem',
			'@md': {
				display: 'flex'
			}
		}
	});
</script>

<div class={ContainerStyles()}>
	<h1 class="">Get started with</h1>
	<div class="guide-wrapper">
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

		<Code copy message={yarnScript} block>{yarnScript}</Code>

		<h3>With npm</h3>

		<Code copy message={npmScript} block>{npmScript}</Code>

		<h3>All done!</h3>

		<Code copy block message={allDone}>{allDone}</Code>
	</div>
</div>
