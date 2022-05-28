---
title: NumberInput
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/number-input/
category: 'inputs'
description: 'Number input with optional controls'
import: "import { NumberInput } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/NumberInput/NumberInput.svelte'
docs: 'core/number-input.md'
---

<script>
    import { Box, NumberInput } from '@svelteuidev/core';
    import { Prism } from '@svelteuidev/prism';
    import { Demo, NumberInputDemos } from '@svelteuidev/demos';
    import { CodeBlock, Heading } from 'components';

    const controlled = `
    <script>
        import { NumberInput } from '@svelteuidev/core';

        let value;
        function onChange(e) {
            value = e.detail;
        }
    <\/script>

    <NumberInput value={value} on:change={onChange} \/>
    `

    const blur = `<NumberInput noClampOnBlur \/>`;

    let value;
    function onChange(e) {
        value = e.detail;
    }
</script>

<style global>
    input {
        margin: 0;
    }
</style>

<Heading />

## Usage

<Demo demo={NumberInputDemos.configurator} />

## Controlled

<Box css={{ pre: { bc: '$gray50' }, 'pre code': { color: '$gray900' } }}>
    <Prism language='svelte' code={controlled} />
</Box>

## Clamp on blur

NumberInput has an internal state to control the value of the user input. When the blur event is triggered, it clamps the value with the given min and max values and removes invalid values, for example text.

<Box css={{ pre: { bc: '$gray50' }, 'pre code': { color: '$gray900' } }}>
    <Prism language='svelte' code={blur} />
</Box>