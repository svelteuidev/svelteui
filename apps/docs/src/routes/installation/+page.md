---
title: 'Installation'
---

<svelte:head>
  <title>Installation - SvelteUI</title>
</svelte:head>

<script>
	import { CodeBlock, MinorHeading, NextSteps, Installation, StartGuide, BottomNav } from '$lib/components'
	import { STARTGUIDE_DATA as guideData, ID } from '$lib/components/mainpages/GettingStarted/Guides/data'

	let packages = ["@svelteuidev/core", "@svelteuidev/composables"];
    let value = 'kit'
	$: sanitizedPKG = packages || ["@svelteuidev/core", "@svelteuidev/composables"].join(' ')
</script>

<MinorHeading title="Installation" />

## Initialize a new Svelte or SvelteKit project

**or add to an existing project**

<StartGuide setId={(val) => value = val} />

## Choose your packages

<Installation setDeps={(val) => (packages = val)} />

### Initialize Application

<CodeBlock copy message={guideData[ID[value]].template}>
	{guideData[ID[value]].template}
</CodeBlock>

## Choose your packages

### NPM

<CodeBlock copy message={`npm i ${sanitizedPKG}`}>npm i {sanitizedPKG}</CodeBlock>

### Yarn

<CodeBlock copy message={`yarn add ${sanitizedPKG}`}>yarn add {sanitizedPKG}</CodeBlock>

## Next steps

<NextSteps />

<BottomNav
both
slug={{ prev: 'introduction', next: 'basics' }}
title={{ prev: 'Introduction', next: 'Learn the basics' }}
group={{ prev: 'Getting Started', next: 'Getting Started' }}
/>
