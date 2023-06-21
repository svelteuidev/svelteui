---
title: 'use-eye-dropper'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-eye-dropper/
description: 'Get access to a reactive EyeDropper API.'
importCode: "import { useEyeDropper } from '@svelteuidev/composables';"
docs: 'composables/use-eye-dropper'
source: 'svelteui-composables/src/utilities/use-eye-dropper/use-eye-dropper.ts'
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

The `use-eye-dropper` composable allows you to create an eyedropper tool. Users can use this tool to sample colors from their screens, including those outside of the browser window. Read more on it [here](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API). An object containing an open function, the reactive sRGBHex value, and a boolean value tracking whether or not this is supported, is returned from the function.

<Demo demo={ComposableDemos.useEyeDropperDemo.usage} />

## Params

| Param        | Description                                      |
| ------------ | ------------------------------------------------ |
| initialValue | A string representing a hex color to start with. |

## Definition

```js
export function useEyeDropper(options?: EyeDropperOptions): EyeDropperReturn;
```
