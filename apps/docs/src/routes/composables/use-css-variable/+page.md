---
title: 'use-css-variable'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-css-variable/
description: 'Whenever some of their values change, update css properties on the fly'
importCode: "import { cssvariable } from '@svelteuidev/composables';"
docs: 'composables/use-css-variable'
source: 'svelteui-composables/src/actions/use-css-variable/use-css-variable.ts'
---

<script lang='ts'>
    import { Demo, ComposableDemos } from '@svelteuidev/demos';
    import { Heading } from "$lib/components";
    import { base } from '$app/paths';
</script>

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {description} {importCode} {docs} {source} />

## Usage

With the `use-css-variable` action, an object of properties will be treated as CSS custom variables. By defining this object inside of a `$: ` reactive block, `use-css-variable` can update those CSS properties on the fly whenever some of its values change.

<Demo demo={ComposableDemos.useCssVariableDemo.usage} />

## Params

| Param | Description                                                          |
| ----- | -------------------------------------------------------------------- |
| props | The object that possesses the variables, and their associated values |

## Definition

```js
export function cssvariable(node: HTMLElement, props: UnknownKeyString<string>): ReturnType<Action>;
```
