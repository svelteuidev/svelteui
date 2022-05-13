---
title: ServerRender
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/server-render/
category: 'misc'
description: "Disables rendering of child content that doesn't work in a Browser environment"
import: "import { ServerRender } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/ServerRender/ServerRender.svelte'
docs: 'core/server-render.md'
---

<script>
    import { ServerRender, Text } from '@svelteuidev/core';
    import { Heading, Preview } from 'components';

    const serverRender = `
    <ServerRender>
        This will only function in a SSR environment.
    <\/ServerRender>
    `
</script>

<Heading />

## Usage

ServerRender allows for you to block the rendering of child content that doesn't function or makes sense in a browser environment.

<Preview code={serverRender} cols={1}>
    <ServerRender>
        This will only function in a SSR environment.
    </ServerRender>
    <Text>There is server rendered code above, but you can't see it 😝</Text>
</Preview>

Note that this component doesn't render any extra nodes to the DOM like the [Fragment](core/fragment) component.
