---
title: Container
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/container/
category: 'layout'
description: 'Center content horizontally with predefined max-width'
import: "import { Container } from '@svelteuidev/core';"
source: 'svelteui-core/src/lib/components/Container/Container.svelte'
docs: 'core/container.md'
---

<script>
    import { Demo, ContainerDemos } from '@svelteuidev/demos'
    import { Heading, Preview } from 'components';
</script>

<Heading />

## Usage

Container is the most basic layout element, it centers content horizontally and add horizontal padding from theme.
Component accepts these props:

- **size** - controls default max width
- **padding** - controls horizontal padding of container, use xs, sm, md, lg, xl for value defined in theme.spacing or number to set horizontal padding in px
- **fluid** - overwrites size prop and sets max width to 100%

<Demo demo={ContainerDemos.usage} />

## Configure sizes

To configure container sizes use the sizes prop:

```svelte
<script>
    import { Container } from '@svelteuidev/core';

    sizes: {
        xs: 540,
        sm: 720,
        md: 960,
        lg: 1140,
        xl: 1320,
    },
</script>

<Container {sizes} size="sm">Your app</Container>
```
