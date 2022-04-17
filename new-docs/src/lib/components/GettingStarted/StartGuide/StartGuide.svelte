<script lang="ts">
	import { css } from '@svelteuidev/core';
	import { STARTGUIDE_DATA } from './data';
	import { Code } from '@svelteuidev/core';
	import { deps } from '../Installation/data';
	import Guides from './Guides.svelte';

	/** Variable for switching cards stitches variant*/
	const active = { state: 'active' };

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
		length: 0,
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

	const override = { fontSize: 'large', lineHeight: 0.3 };
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

		<div class="not-prose">
			<Code {override} noMono width={100} copy message={initScript} block>{initScript}</Code>
		</div>

		<h2>Install dependencies</h2>

		<h3>With yarn</h3>

		<div class="not-prose">
			<Code {override} noMono width={100} copy message={yarnScript} block>{yarnScript}</Code>
		</div>

		<h3>With npm</h3>

		<div class="not-prose">
			<Code {override} noMono width={100} copy message={npmScript} block>{npmScript}</Code>
		</div>

		<h3>All done!</h3>
	</div>
</div>
