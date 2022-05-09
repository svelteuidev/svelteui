---
title: 'Installation'
---

<script>
    import { NativeSelect, CheckboxGroup, Center, Container } from '@svelteuidev/core'
	import { CodeBlock, MinorHeading } from 'components'

    const data = ['Svelte', 'SvelteKit']
    const items = [
		{
			value: "@svelteuidev/core",
			label: "@svelteuidev/core"
		},
		{
			value: "@svelteuidev/actions",
			label: "@svelteuidev/actions"
		},
		{
			value: "@svelteuidev/utilities",
			label: "@svelteuidev/utilities"
		},
		{
			value: "@svelteuidev/motion",
			label: "@svelteuidev/motion"
		},
		{
			value: "@svelteuidev/prism",
			label: "@svelteuidev/prism"
		}
	];


	let packages = ["@svelteuidev/core", "@svelteuidev/actions"];
	let templates = ["npx degit sveltejs/template my-svelte-project", "npm init svelte@next my-app"]
    $: value = 'Svelte'
	$: sanitizedPKG = packages.join(' ')
</script>

<MinorHeading />

> SvelteUI is built to work with projects that have svelte versions `3.47.0` and up. If enough people want backwards compatibility, then we will work on that. If you want to support backwards compatibility feel free to raise an issue on github

## **Initialize a new Svelte or SvelteKit project (or add to an existing project).**

<NativeSelect
{data}
bind:value
override={{select: {padding: 0}}}
label='Select which project you would like to initialize'
/>

<CodeBlock copy message={templates[value === 'Svelte' ? 0 : 1]}>
{value === 'Svelte' ? templates[0] : templates[1]}
</CodeBlock>

You can install SvelteUI with [NPM](https://npmjs.com) or [Yarn](https://yarnpkg.com). You don't have too install every package, you can use them as needed. All packages except from the core package works independent from the others.

<Center override={{bc: '$blue100', padding: '$10 $4'}}>
    <CheckboxGroup
	 	items={items} 
	 	bind:value={packages} 
	 	label={"Choose your packages"} 
	 />
</Center>

### NPM

<CodeBlock copy message={`npm i ${sanitizedPKG}`}>npm i {sanitizedPKG}</CodeBlock>

### Yarn

<CodeBlock copy message={`yarn add ${sanitizedPKG}`}>yarn add {sanitizedPKG}</CodeBlock>
