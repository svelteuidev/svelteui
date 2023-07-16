---
title: JsonInput
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/json-input/
category: 'inputs'
description: 'Textarea specially made for JSON input'
importCode: "import { JsonInput } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/JsonInput/JsonInput.svelte'
docs: 'core/json-input'
---

<script>
    import { Demo, JsonInputDemos } from '@svelteuidev/demos';
	import { Heading } from "$lib/components";
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

<Demo demo={JsonInputDemos.configurator} />

## Bindings

```svelte
<script>
	import { JsonInput } from '@svelteuidev/core';

	let value = '';
</script>

<JsonInput bind:value />
```

## JSON validation

<Demo demo={JsonInputDemos.validate} />

## Format on blur

<Demo demo={JsonInputDemos.format} />

## Disabled state

<Demo demo={JsonInputDemos.disabled} />

## With icon

<Demo demo={JsonInputDemos.icon} />

## Accessibility

Provide `aria-label` in case you use component without label for screen reader support:

```svelte
<JsonInput /> // -> not ok, input is not labeled
<JsonInput label="Comment" /> // -> ok, input and label are connected
<JsonInput aria-label="Comment" /> // -> ok, label is not visible but will be announced by screen reader
```
