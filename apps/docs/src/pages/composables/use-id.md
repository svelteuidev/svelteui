---
title: 'use-id'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-id/
description: 'Get element width and height and subscribe to changes'
import: "import { useId } from '@svelteuidev/composables';"
docs: 'composables/use-id.md'
source: 'svelteui-composables/src/lib/utilities/use-id/use-id.ts'
---

<script lang='ts'>
    import { Demo, ComposableDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

`use-id` generates a random id. It differs from [use-hash](/use-hash), in that it is completely random (or as random as it can be). And due to its nature, it's commonly used in places where you would use a uuid.

<Demo demo={ComposableDemos.useIdDemo.usage} />

## Definition

```tsx
export function useId(): string;
```
