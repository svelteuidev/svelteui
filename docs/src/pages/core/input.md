---
title: Input
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/input/
category: 'inputs'
description: 'Base component to create custom inputs'
import: "import { Input } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/Input/Input.svelte'
docs: 'core/input.md'
---

<script>
    import { Input, Badge } from '@svelteuidev/core';
    import { MagnifyingGlass } from "radix-icons-svelte";
    import { Heading, Preview } from 'components';

    const input = `
    <script>
        import { Input } from '@svelteuidev/core'
    <\/script>

    <Input placeholder='your email' \/>
    `
    const inputVariants = `
    <script>
        import { Input } from '@svelteuidev/core'
    <\/script>
    
    <Input variant="default" placeholder="Default variant" \/>
    <Input variant="filled" placeholder="Filled variant" \/>
    <Input variant="unstyled" placeholder="Unstyled variant" \/>
    `
    const inputIcon = `
    <script>
        import { Input, Badge } from '@svelteuidev/core'
        import { MagnifyingGlass } from 'radix-icons-svelte'
    <\/script>

    <Input
        icon={MagnifyingGlass}
        placeholder="Search"
        rightSectionWidth={70}
        styles={{ rightSection: { pointerEvents: 'none' } }}
    >
        <Badge slot='rightSection' color="blue" variant="filled">
            new
        <\/Badge>
    <\/Input>
    `
    const inputSizes = `
    <script>
        import { Input } from '@svelteuidev/core'
    <\/script>

    {#each ['xs', 'sm', 'md', 'lg', 'xl'] as size}
        <Input size={size} placeholder={\`$\{size} input size\`} \/>
    {/each}
    `
    const inputCustom = `
    <script>
        import { Input } from '@svelteuidev/core'
    <\/script>

    <Input root="button">Button input<\/Input>

    <Input root="select">
      <option value="1">1<\/option>
      <option value="2">2<\/option>
    <\/Input>
    `
    const inputHeadless = `
    <script>
        import { Input } from '@svelteuidev/core'
    <\/script>

     <Input
      override={{ input: { width: '100%', boxSizing: 'border-box' } }}
      icon={MagnifyingGlass}
      variant="headless"
      placeholder="Add your own styles with styles API"
    >
        <p slot="rightSection">$<\/p>
    <\/Input>
    `
</script>

<Heading />

## Disclaimer

**!important:** In most cases, you should not use Input component in your application.
The Input component is a base for other inputs and was not designed to be used directly.

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

Input component is used as base for all other inputs ([TextInput](core/text-input), [Textarea (not yet implemented)](core/textarea) and others).
The single purpose of Input is to provide shared styles and features to other inputs.
Use other components listed above to build forms (as they provide better accessibility)
and Input component as base for your own custom inputs with SvelteUI theme.

<Preview cols={1} width={90} code={input}>
    <Input placeholder='your email' />
</Preview>

## Variants

Input has 3 variants, all of which are available on all SvelteUI inputs.
Note that unstyled input variant may significantly impact usability, use it wisely.

<Preview cols={1} width={90} code={inputVariants}>
    <Input variant="default" placeholder="Default variant" />
    <Input variant="filled" placeholder="Filled variant" />
    <Input variant="unstyled" placeholder="Unstyled variant" />
</Preview>

## Icon and right section

The Input component has two ways to render an Icon. The left Icon is passed in as a prop, and it is any valid Svelte Component. The right Icon is passed in through a named slot.

<Preview cols={1} width={90} code={inputIcon}>
    <Input
        icon={MagnifyingGlass}
        placeholder="Search"
        rightSectionWidth={70}
        styles={{ rightSection: { pointerEvents: 'none' } }}
    >
        <Badge slot='rightSection' color="blue" variant="filled">
            new
        </Badge>
    </Input>
</Preview>

## Sizes

Component has 5 pre-made sizes: xs, sm, md, lg, xl, use `size` prop to control input height, padding and font-size:

<Preview cols={1} width={90} code={inputSizes}>
{#each ['xs', 'sm', 'md', 'lg', 'xl'] as size}
    <Input size={size} placeholder={`${size} input size`} />
{/each}
</Preview>

## Custom component

As Input component is intended to be a base for all other inputs,
you can pass the `root` prop which will define the root element:

<Preview cols={1} width={90} code={inputCustom}>
    <Input root="button">Button input</Input>

    <Input root="select">
      <option value="1">1</option>
      <option value="2">2</option>
    </Input>

</Preview>

## Headless variant

If you want to add your own styles to input it's better to start from scratch rather than overriding SvelteUI styles,
use special `headless` variant which does not include any SvelteUI styles but still supports all other features: icon, right section, etc.:

<Preview cols={1} width={90} code={inputHeadless}>
    <Input
      override={{ input: { width: '100%', boxSizing: 'border-box' } }}
      icon={MagnifyingGlass}
      variant="headless"
      placeholder="Add your own styles with styles API"
    >
    <p slot="rightSection">$</p>
</Input>
</Preview>
