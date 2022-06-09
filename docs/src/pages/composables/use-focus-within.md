---
title: 'use-focus-within'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-focus-within/
description: 'Detect if any element within has focus.'
import: "import { useFocusWithin } from '@svelteuidev/composables';"
docs: 'composables/use-focus-within.md'
source: 'svelteui-composables/src/lib/utilities/use-focus-within/use-focus-within.ts'
---

<script lang='ts'>
    import { Demo, ComposableDemos } from "@svelteuidev/demos";
    import { Heading } from 'components'
</script>

<Heading />

## Usage

The use-focus-within composable determines whether any element within has focus. It works in the same way that the CSS selector for focus-within works.

<Demo demo={ComposableDemos.useFocusWithinDemo.usage} />

## Params

| Param   | Description            |
| ------- | ---------------------- |
| onBlur  | calls function onBlur  |
| onFocus | calls function onFocus |

## Definition

```ts
export function useFocusWithin({ onBlur, onFocus }?: UseFocusWithinOptions): FocusWithin;
```
