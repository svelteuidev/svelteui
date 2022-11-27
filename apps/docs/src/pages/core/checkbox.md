---
title: Checkbox
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/checkbox/
category: 'inputs'
description: 'Add inline styles to any element or component with css prop'
import: "import { Checkbox } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Checkbox/Checkbox.svelte'
docs: 'core/checkbox.md'
---

<script>
    import { Demo, CheckboxDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

<Demo demo={CheckboxDemos.configurator} />

## States

<Demo demo={CheckboxDemos.states} />

## Replace icon

<Demo demo={CheckboxDemos.icon} />

## Sizes

Checkbox has 5 predefined sizes: `xs`, `sm`, `md`, `lg`, `xl`. Size defines label font-size and input width and height:

<Demo demo={CheckboxDemos.sizes} />

## Indeterminate state

Checkbox supports indeterminate state. When `indeterminate` prop is true, `checked` prop is ignored:

<Demo demo={CheckboxDemos.indeterminate} />

## Accessibility

Provide `aria-label` in case you use checkbox without label for screen reader support:

```svelte
<Checkbox /> // -> not ok, input is not labeled
<Checkbox label="My checkbox" /> // -> ok, input and label is connected
<Checkbox aria-label="My checkbox" /> // -> ok, label is not visible but will be announced by screen reader
```

# CheckboxGroup

<Demo demo={CheckboxDemos.groupConfigurator} />

## Controlled

```svelte
<script>
    import { CheckboxGroup } from '@svelteuidev/core';

    const items = [
        { label: 'Svelte', value: 'svelte' },
        { label: 'React', value: 'react' },
        { label: 'Vue', value: 'vue' },
        { label: 'Angular', value: 'angular' },
        { label: 'Solid', value: 'solid' }
    ];
</script>

<CheckboxGroup {items} value={['svelte']} />
```
