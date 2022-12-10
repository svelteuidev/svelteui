---
title: Input
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/input/
category: 'inputs'
description: 'Base component to create custom inputs'
import: "import { Input } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Input/Input.svelte'
docs: 'core/input.md'
---

<script>
    import { Demo, InputDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
    import { Alert } from '@svelteuidev/core';
    import { InfoCircled } from 'radix-icons-svelte';
</script>

<Heading />

## Disclaimer

<Alert icon={InfoCircled}  title="Important" color="blue" >
   In most cases, you should not use Input component in your application. The Input component is a base for other inputs and was not designed to be used directly.
</Alert>

```svelte
// Incorrect usage, input is not accessible
<InputWrapper label="Input label">
	<Input />
</InputWrapper>

// Use TextInput instead of Input everywhere you want to use Input, // it is accessible by default
and includes InputWrapper
<TextInput label="Input label" description="Input description" />
```

## Usage

Input component is used as base for all other inputs ([TextInput](core/text-input), Textarea (not yet implemented) and others). The single purpose of Input is to provide shared styles and features to other inputs.
Use other components listed above to build forms (as they provide better accessibility) and Input component as base for your own custom inputs with SvelteUI theme.

<Demo demo={InputDemos.configurator} />

## Variants

Input has 3 variants, all of which are available on all SvelteUI inputs. Note that `unstyled` input variant may significantly impact usability, so use it wisely.

<Demo demo={InputDemos.variants} />

## Icon and right section

The Input component has two ways to render an Icon. The left Icon is passed in as a prop, and it is any valid Svelte Component. The right Icon is passed in through a named slot.

<Demo demo={InputDemos.sections} />

## Sizes

Component has 5 pre-made sizes: `xs`, `sm`, `md`, `lg`, `xl`. Use `size` prop to control input height, padding and font-size:

<Demo demo={InputDemos.sizes} />

## Custom component

As Input component is intended to be a base for all other inputs, you can pass the `root` prop which will define the root element:

<Demo demo={InputDemos.custom} />

## Headless variant

If you want to add your own styles to Input, it's better to start from scratch rather than overriding SvelteUI styles.
Use special `headless` variant which does not include any SvelteUI styles but still supports all other features: icon, right section, etc.:

<Demo demo={InputDemos.headless} />
