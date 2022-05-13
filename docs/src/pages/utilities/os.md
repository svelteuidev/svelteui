---
title: os
group: 'svelteuidev-utilities'
packageGroup: '@svelteuidev/utilities'
slug: /utilities/os/
description: 'Get user os'
import: "import { os as _os } from '@svelteuidev/utilities';"
source: 'svelteui-utilities/src/lib/dist/functions/os/os.ts'
docs: 'utilities/os.md'
---

<script lang='ts'>
    import { Button } from '@svelteuidev/core';
	import { os as _os } from '@svelteuidev/utilities';
    import { Heading, Preview } from 'components'

    const os = _os();

    const code = `
    <script>
        import { os as _os } from '@svelteuidev/utilities';
        const os = _os();
    <\/script>

    <p>Your OS is <b>{os}<\/b><\/p>
    `;
</script>

<Heading />

## Usage

The `os` utility function detects a user's Operating System. Possible values are: `undetermined`, `macos`, `ios`, `windows`, `android`, `linux`. If the OS cannot be identified as well as during server side rendering, `undetermined` will be returned.

<Preview cols={1} {code}>
    <p>Your os is <b>{os}</b></p>
</Preview>

## Typescript

```ts
import type { OS } from '@svelteuidev/utilities';
// OS type is 'undetermined' | 'macos' | 'ios' | 'windows' | 'android' | 'linux'
```

## Definition

```ts
export function os(): OS;
```