---
title: InputWrapper
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/input-wrapper/
category: 'inputs'
description: 'Enhance custom inputs with label, error and description'
import: "import { InputWrapper } from '@svelteuidev/core';"
source: 'svelteui-src/components/InputWrapper/InputWrapper.svelte'
docs: 'core/input-wrapper.md'
---

<script>
    import { Demo, InputWrapperDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Disclaimer

**!important:** Do not use InputWrapper with SvelteUI inputs, it is already included in most inputs:

```svelte
// Incorrect usage, input is not accessible
<InputWrapper label="Input label">
	<TextInput />
</InputWrapper>

// TextInput already includes InputWrapper
<TextInput label="Input label" description="Input description" />
```

## Usage

InputWrapper is used to wrap for all SvelteUI inputs ([Select (not yet implemented)](core/select), [TextInput](core/text-input), [NumberInput](core/number-input) and others).
It includes label with optional required asterisk, description and error message.

All SvelteUI inputs support the same props as InputWrapper. You can combine it with [Input](core/input) component
to build your own custom inputs with the same style and behavior.

<Demo demo={InputWrapperDemos.configurator} />

## Change label element

Some inputs like [RadioGroup (not yet implemented)](/core/radio-group/) may require to detach label from certain element.
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
