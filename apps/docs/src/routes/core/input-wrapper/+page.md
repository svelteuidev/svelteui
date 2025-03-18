---
title: InputWrapper
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/input-wrapper/
category: 'inputs'
description: 'Enhance custom inputs with label, error and description'
importCode: "import { InputWrapper } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/InputWrapper/InputWrapper.svelte'
docs: 'core/input-wrapper'
---

<script>
	import { Demo, InputWrapperDemos } from '@svelteuidev/demos';
	import { Alert, Space } from '@svelteuidev/core';
	import { InfoCircled } from 'radix-icons-svelte';
	import { Heading } from "$lib/components";
  	import { base } from '$app/paths';
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Disclaimer

<Alert iconComponent={InfoCircled} title="Important" color="blue" >
   Do not use InputWrapper with SvelteUI inputs, it is already included in most inputs.
</Alert>

<Space h={20} />

```svelte
// Incorrect usage, input is not accessible
<InputWrapper label="Input label">
	<TextInput />
</InputWrapper>

// TextInput already includes InputWrapper
<TextInput label="Input label" description="Input description" />
```

## Usage

InputWrapper is used to wrap all SvelteUI inputs (Select (not yet implemented), [TextInput]({base}/core/text-input), [NumberInput]({base}/core/number-input) and others).
It includes label with optional required asterisk, description and error message.

All SvelteUI inputs support the same props as InputWrapper. You can combine it with [Input]({base}/core/input) component
to build your own custom inputs with the same style and behavior.

<Demo demo={InputWrapperDemos.configurator} />

## Change label element

Some inputs like RadioGroup (not yet implemented) may require to detach label from certain element.
To implement this, use `labelElement`:

```svelte
<script>
	import { InputWrapper } from '@svelteuidev/core';
</script>

<InputWrapper id="with-label">
	<input id="with-label" />
</InputWrapper>

// id is not required for div label as it is not connected to any element

<InputWrapper labelElement="div">
	<input type="radio" name="radio" value="1" />
	<input type="radio" name="radio" value="2" />
	<input type="radio" name="radio" value="3" />
</InputWrapper>
```
