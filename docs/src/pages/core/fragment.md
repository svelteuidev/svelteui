---
title: Fragment
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/fragment/
category: 'misc'
description: 'Fragments let you group a list of children without adding extra nodes to the DOM.'
import: "import { Fragment } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/Fragment/Fragment.svelte'
docs: 'core/fragment.md'
---

<script>
    import { Demo, FragmentDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

Fragments serve as a cleaner alternative to using unnecessary divs in your code. These fragments do not produce any extra elements in the DOM, which means that a Fragment's child components will render without any wrapping DOM node.

To simply put Fragments enable you to group multiple sibling components without introducing any unnecessary markup in the rendered HTML.

<Demo demo={FragmentDemos.usage} />

## Declarative Testing

Fragment can also be used as a declarative version of a Svelte component. Because there are instances when you may need lifecycle or a state within a test but don't want to develop a new component, Fragment comes in handy with this specific use.

```svelte
<Fragment>
    Testing for lifecycle methods update in next patch
</Fragment>
```
