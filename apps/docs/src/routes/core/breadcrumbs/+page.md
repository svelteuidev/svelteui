---
title: Breadcrumbs
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/breadcrumbs/
category: 'navigation'
description: 'List of links to different parts of navigation'
importCode: "import { Breadcrumbs } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Breadcrumbs/Breadcrumbs.svelte'
docs: 'core/breadcrumbs'
---

<script>
  import { Demo, BreadcrumbsDemos } from '@svelteuidev/demos';
  import { Heading } from "$lib/components";
  import { base } from '$app/paths';
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

Breadcrumbs supports text and links (by passing an `href`), and uses `/` as the default separator.

<Demo demo={BreadcrumbsDemos.usage} />
