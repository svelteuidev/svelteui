---
title: Affix
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/affix/
category: 'overlay'
description: 'Render Svelte component inside portal at fixed position'
import: "import { Affix } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/Affix/Affix.svelte'
docs: 'core/affix.md'
---

<script>
    import { Demo, AffixDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

Affix renders an element inside the `target` prop given, with fixed position inside a [Portal](core/portal) component.

<Demo demo={AffixDemos.usage} />
