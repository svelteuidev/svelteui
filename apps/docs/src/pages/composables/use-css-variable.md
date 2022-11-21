---
title: 'use-css-variable'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-css-variable/
description: 'Whenever some of their values change, update css properties on the fly'
import: "import { cssvariable } from '@svelteuidev/composables';"
docs: 'composables/use-css-variable.md'
source: 'svelteui-src/actions/use-css-variable/use-css-variable.ts'
---

<script lang='ts'>
    import { Demo, ComposableDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

With the `use-css-variable` action, an object of properties will be treated as CSS custom variables. By defining this object inside of a `$: ` reactive block, `use-css-variable` can update those CSS properties on the fly whenever some of its values change.

<Demo demo={ComposableDemos.useCssVariableDemo.usage} />

## Params

| Param | Description                                                          |
| ----- | -------------------------------------------------------------------- |
| props | The object that possesses the variables, and their associated values |

## Definition

```ts
export function cssvariable(node: HTMLElement, props: UnknownKeyString<string>): ReturnType<Action>;
```
