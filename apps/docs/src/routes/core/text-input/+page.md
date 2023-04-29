---
title: TextInput
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/text-input/
category: 'inputs'
description: 'Text input with descriptions'
importCode: "import { TextInput } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/TextInput/TextInput.svelte'
docs: 'core/text-input.md'
---

<script>
    import { Demo, TextInputDemos } from '@svelteuidev/demos';
	import { Heading } from "$lib/components";
</script>

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

<Demo demo={TextInputDemos.configurator} />

## Bindings

```svelte
<script>
	import { TextInput } from '@svelteuidev/core';

	let value = '';
</script>

<TextInput bind:value />
```

## Invalid state and error

<Demo demo={TextInputDemos.invalid} />

## Disabled state

<Demo demo={TextInputDemos.disabled} />

## With icon

<Demo demo={TextInputDemos.icon} />

## With right section

<Demo demo={TextInputDemos.rightsection} />

## Accessibility

Provide `aria-label` in case you use component without label for screen reader support:

```svelte
<TextInput /> // -> not ok, input is not labeled
<TextInput label="Your age" /> // -> ok, input and label are connected
<TextInput aria-label="Your age" /> // -> ok, label is not visible but will be announced by screen reader
```
