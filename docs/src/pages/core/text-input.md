---
title: TextInput
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/text-input/
category: 'inputs'
description: 'Text input with descriptions'
import: "import { TextInput } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/TextInput/TextInput.svelte'
docs: 'core/text-input.md'
---

<script>
    import { Demo, TextInputDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<style global>
    input {
        margin: 0;
    }
</style>

<Heading />

## Usage

<Demo demo={TextInputDemos.configurator} />

## Controlled

```svelte
<script>
    import { TextInput } from '@svelteuidev/core';

    let value;
    function onInput(e) {
        value = e.target.value;
    }
</script>

<TextInput value={value} on:change={onChange} />
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
