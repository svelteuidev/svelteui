---
title: Container
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/container/
category: 'layout'
description: 'Center content horizontally with predefined max-width'
import: "import { Container } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/Container/Container.svelte'
docs: 'core/container.md'
---

<script>
    import { Container } from '@svelteuidev/core';
    import { Heading, Preview } from 'components';

    const container = `
    <script>
        import { Container } from '@svelteuidev/core'
    <\/script>

    <Container override={{bc: 'AliceBlue'}}>
        Default container
    <\/Container>

    <Container size="xs" override={{px: 'xs', bc: 'AliceBlue'}}>
        xs container with xs horizontal padding
    <\/Container>

    <Container size={200} override={{px: 0, bc: 'AliceBlue'}}>
        200px container with 0px horizontal padding
    <\/Container>
    `
</script>

<Heading />

## Usage

Container is the most basic layout element, it centers content horizontally and add horizontal padding from theme.
Component accepts these props:

- **size** - controls default max width
- **padding** - controls horizontal padding of container, use xs, sm, md, lg, xl for value defined in theme.spacing or number to set horizontal padding in px
- **fluid** - overwrites size prop and sets max width to 100%

<Preview width={100} cols={1} code={container}>
    <Container override={{bc: 'AliceBlue', w: 960, h: 50}}>
        Default container
    </Container>

    <Container size="xs" override={{px: 'xs', bc: 'AliceBlue', w: 540, h: 50}}>
        xs container with xs horizontal padding
    </Container>

    <Container size={200} override={{px: 0, bc: 'AliceBlue', w: 200, h: 50}}>
        200px container with 0px horizontal padding
    </Container>
</Preview>

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