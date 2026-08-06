---
title: Radio
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/radio/
category: 'inputs'
description: 'Wrapper around the radio input type'
importCode: "import { Radio } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Radio/Radio.svelte'
docs: 'core/radio'
---

<script>
  import { Demo, RadioDemos } from '@svelteuidev/demos';
	import { Heading } from "$lib/components";
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

<Demo demo={RadioDemos.configurator} />

## Controlled

```svelte
<script>
	import { Radio } from '@svelteuidev/core';

	let checked = false;
</script>

<Radio bind:checked />
```

# RadioGroup

<Demo demo={RadioDemos.groupConfigurator} />

## Controlled

The `RadioGroup` supports two props to bind the current active value: `value` and `group`. This last one exists to maintain the semantics of the native radio behavior.

```svelte
<script>
	import { RadioGroup } from '@svelteuidev/core';

	const items = [
		{ label: 'Svelte', value: 'svelte' },
		{ label: 'React', value: 'react' },
		{ label: 'Vue', value: 'vue' },
		{ label: 'Angular', value: 'angular' },
		{ label: 'Solid', value: 'solid' }
	];

	let value = $state('svelte');
	let group = $state('svelte');
</script>

<RadioGroup {items} bind:value />
<RadioGroup {items} bind:group />
```
