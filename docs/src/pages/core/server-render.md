---
title: ServerRender
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/server-render/
category: 'misc'
description: "Disables rendering of child content that doesn't work in a Browser environment"
import: "import { ServerRender } from '@svelteuidev/core';"
source: 'svelteui-core/src/lib/components/ServerRender/ServerRender.svelte'
docs: 'core/server-render.md'
---

<script>
    import { Demo, ServerRenderDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

ServerRender allows for you to block the rendering of child content that doesn't function or makes sense in a browser environment.

<Demo demo={ServerRenderDemos.usage} />

Note that this component doesn't render any extra nodes to the DOM like the [Fragment](core/fragment) component.
