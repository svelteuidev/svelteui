---
title: Breadcrumbs
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/breadcrumbs/
category: 'navigation'
description: 'List of links to different parts of navigation'
import: "import { Breadcrumbs } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Breadcrumbs/Breadcrumbs.svelte'
docs: 'core/breadcrumbs.md'
---

<script>
    import { Demo, BreadcrumbsDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

Breadcrumbs supports text and links (by passing an `href`), and uses `/` as the default separator.

<Demo demo={BreadcrumbsDemos.usage} />
