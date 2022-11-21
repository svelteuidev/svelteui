---
title: use-os
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/os/
description: 'Get user os'
import: "import { useOs } from '@svelteuidev/composables';"
source: 'svelteui-src/utilities/use-os/use-os.ts'
docs: 'composables/use-os.md'
---

<script lang='ts'>
    import { ComposableDemos, Demo } from "@svelteuidev/demos";
    import { Heading} from 'components'
</script>

<Heading />

## Usage

The `use-os` composable detects a user's Operating System. Possible values are: `undetermined`, `macos`, `ios`, `windows`, `android`, `linux`. If the OS cannot be identified as well as during server side rendering, `undetermined` will be returned.

<Demo demo={ComposableDemos.useOsDemo.usage} />

## Typescript

```ts
import type { OS } from '@svelteuidev/composables';
// OS type is 'undetermined' | 'macos' | 'ios' | 'windows' | 'android' | 'linux'
```

## Definition

```ts
export function useOs(): OS;
```
