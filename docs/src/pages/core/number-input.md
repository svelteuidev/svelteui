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
    import { Box } from '@svelteuidev/core';
    import { Prism } from '@svelteuidev/prism';
    import { Demo, NumberInputDemos } from '@svelteuidev/demos';
    import { CodeBlock, Heading, Preview } from 'components';

    const controlled = `
    <script>
        import { NumberInput } from '@svelteuidev/core';

        let value;
        function onChange(e) {
            value = e.detail;
        }
    <\/script>

    <NumberInput value={value} on:change={onChange} \/>
    `;

    const blur = `<NumberInput noClampOnBlur \/>`;

    const accessibility = `
    <NumberInput /> // -> not ok, input is not labeled
    <NumberInput label="Your age" /> // -> ok, input and label are connected
    <NumberInput aria-label="Your age" /> // -> ok, label is not visible but will be announced by screen reader
    `;

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

## Parser and formatter

Props `parser` and `formattter` allow the customization of how the value is displayed in the input.

<Demo demo={NumberInputDemos.parser} />

## Min, max and step

Props `min` and `max` define the upper and lower values of the input value. When the user interacts with the controls or presses the up and down arrows, the value is incremented/decremented by the provided prop `step`.

<Demo demo={NumberInputDemos.minmax} />

## Increment and decrement on hold

Props `stepHoldDelay` and `stepHoldInterval` define the behaviour when the controls are clicked and hold.

<Demo demo={NumberInputDemos.hold} />

## Decimal steps

To use decimal steps it is required to pass the following props:

* `step` - as a decimal number, e.g. `0.05`
* `precision` - the number of decimal places to show

<Demo demo={NumberInputDemos.decimal} />

## Decimal separator

To chahnge the default decimal separator - `.` - it is only required to use the `decimalSeparator` prop.

<Demo demo={NumberInputDemos.separator} />

## Remove controls

Controls are not rendered in the cases:

* `hideControls` prop is set to `true`
* NumberInput is `disabled`
* `variant` prop is `unstyled`

<Demo demo={NumberInputDemos.controls} />

## Custom increment/decrement controls

NumberInput exposes increment/decrement functions that allow external controls to use internal logic.

<Demo demo={NumberInputDemos.externalcontrols} />

## Invalid state and error

<Demo demo={NumberInputDemos.invalid} />

## With icon

<Demo demo={NumberInputDemos.icon} />

## Accessibility

NumberInput renders regular input with `type="text"`. Increment/decrement controls have `aria-hidden` attribute and cannot be focused – users with keyboard can increment/decrement value by step with up/down arrows.

Provide `aria-label` in case you use component without label for screen reader support:

<Box css={{ pre: { bc: '$gray50' }, 'pre code': { color: '$gray900' } }}>
    <Prism language='svelte' code={accessibility} />
</Box>
