---
title: 'Installation'
---

<script>
	import { CodeBlock, MinorHeading, NextSteps, Installation, StartGuide } from 'components'

    const styles = `<style id='svelteui-inject-body' type='text/css'>.article>*:nth-child(3){margin-top:1rem!important;}<\/style>`;
    
	let packages = ["@svelteuidev/core", "@svelteuidev/composables"];
	let templates = ["npx degit sveltejs/template my-svelte-project", "npm init svelte@next my-app"]
    let value = 'svelte'
	$: sanitizedPKG = packages || ["@svelteuidev/core", "@svelteuidev/composables"].join(' ')
</script>

<svelte:head>
{@html styles}
</svelte:head>

<MinorHeading />

## Initialize a new Svelte or SvelteKit project (or add to an existing project).

<StartGuide setId={(val) => value = val} />

## Choose your packages

<Installation setDeps={(val) => (packages = val)} />

### Initialize Application

<CodeBlock copy message={templates[value === 'Svelte' ? 0 : 1]}>
{value === 'svelte' ? templates[0] : templates[1]}
</CodeBlock>

### NPM

<CodeBlock copy message={`npm i ${sanitizedPKG}`}>npm i {sanitizedPKG}</CodeBlock>

### Yarn

<CodeBlock copy message={`yarn add ${sanitizedPKG}`}>yarn add {sanitizedPKG}</CodeBlock>

## Next steps

<NextSteps />
