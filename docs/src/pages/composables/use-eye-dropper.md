---
title: 'use-eye-dropper'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-eye-dropper/
description: 'Get access to a reactive EyeDropper API.'
import: "import { useEyeDropper } from '@svelteuidev/composables';"
docs: 'composables/use-eye-dropper.md'
source: 'svelteui-composables/src/lib/utilities/use-eye-dropper/use-eye-dropper.ts'
---

<script lang='ts'>
    import { Demo, ComposableDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

<Demo demo={ComposableDemos.useEyeDropperDemo.usage} />

## Params

| Param        | Description                                      |
| ------------ | ------------------------------------------------ |
| initialValue | A string representing a hex color to start with. |

## Definition

```ts
export function useEyeDropper(options?: EyeDropperOptions): EyeDropperReturn;
```
