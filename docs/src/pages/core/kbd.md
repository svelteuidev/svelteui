---
title: Kbd
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/kbd/
category: 'data-display'
description: 'Display keyboard button or keys combination'
import: "import { Kbd } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/Kbd/Kbd.svelte'
docs: 'core/kbd.md'
---

<script>
    import { Demo, KbdDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

<Demo demo={KbdDemos.usage} />

## Example

Usage example with [TextInput](core/text-input) component – `Kbd` is used to describe a keyboard shortcut:

<Demo demo={KbdDemos.example} />
