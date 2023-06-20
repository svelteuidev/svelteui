---
title: Switch
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/switch/
category: 'inputs'
description: 'Capture boolean input from user'
importCode: "import { Switch } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Switch/Switch.svelte'
docs: 'core/switch'
---

<script lang="ts">
  import { Demo, SwitchDemos } from '@svelteuidev/demos';
	import { Heading } from "$lib/components";
</script>

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

Switch component is used to enable/disable something, normally used for boolean values or for binary actions. The component dispatches an `on:change` event, and supports a `checked` prop for programmatically setting the checked state.

<Demo demo={SwitchDemos.configurator} />

## Inner labels and Size

There is support for inserting text inside the switch for when it is enabled and/or disabled. It is also possible to control the size of the switch with predefined values: `xs`, `sm`, `md`, `lg`, `xl`.

<Demo demo={SwitchDemos.inner} />

## Accessibility

Switch is a regular input with checkbox type. Provide `aria-label` if Switch is used without `label`:

```svelte
<Switch /> // -> not ok, input is not labeled
<Switch label="I agree to everything" /> // -> ok, input and label is connected
<Switch aria-label="I agree to everything" /> // -> ok, label is not visible but will be announced by
screen reader
```
