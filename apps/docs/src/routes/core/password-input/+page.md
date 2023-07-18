---
title: PasswordInput
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/password-input/
category: 'inputs'
description: 'Password input with visibility toggle'
importCode: "import { PasswordInput } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/PasswordInput/PasswordInput.svelte'
docs: 'core/password-input'
---

<script>
    import { Demo, PasswordInputDemos } from '@svelteuidev/demos';
	import { Heading } from "$lib/components";
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

<Demo demo={PasswordInputDemos.configurator} />

## Bindings

```svelte
<script>
	import { PasswordInput } from '@svelteuidev/core';

	let value = '';
</script>

<PasswordInput bind:value />
```

## Invalid state and error

<Demo demo={PasswordInputDemos.invalid} />

## Disabled state

<Demo demo={PasswordInputDemos.disabled} />

## With icon

<Demo demo={PasswordInputDemos.icon} />

## With custom visibility icon

<Demo demo={PasswordInputDemos.visibilityicon} />

## Controlled visibility state

<Demo demo={PasswordInputDemos.controlledvisibility} />

## Visibility toggle focus

<Demo demo={PasswordInputDemos.visibilityfocus} />

## Accessibility

Provide `aria-label` in case you use component without label for screen reader support:

```svelte
<PasswordInput /> // -> not ok, input is not labeled
<PasswordInput label="Password" /> // -> ok, input and label are connected
<PasswordInput aria-label="Password" /> // -> ok, label is not visible but will be announced by screen
reader
```
