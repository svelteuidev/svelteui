---
title: Textarea
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/textarea/
category: 'inputs'
description: 'Multiline text input'
importCode: "import { Textarea } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Textarea/Textarea.svelte'
docs: 'core/textarea'
---

<script>
    import { Demo, TextareaDemos } from '@svelteuidev/demos';
	import { Heading } from "$lib/components";
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

<Demo demo={TextareaDemos.configurator} />

## Bindings

```svelte
<script>
	import { Textarea } from '@svelteuidev/core';

	let value = '';
</script>

<Textarea bind:value />
```

## Invalid state and error

<Demo demo={TextareaDemos.invalid} />

## Disabled state

<Demo demo={TextareaDemos.disabled} />

## With icon

<Demo demo={TextareaDemos.icon} />

## With right section

<Demo demo={TextareaDemos.rightsection} />

## Accessibility

Provide `aria-label` in case you use component without label for screen reader support:

```svelte
<Textarea /> // -> not ok, input is not labeled
<Textarea label="Comment" /> // -> ok, input and label are connected
<Textarea aria-label="Comment" /> // -> ok, label is not visible but will be announced by screen reader
```
