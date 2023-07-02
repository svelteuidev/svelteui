---
title: Collapse
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/collapse/
category: 'misc'
description: 'Hides and shows content with a slide animation'
importCode: "import { Collapse } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Collapse/Collapse.svelte'
docs: 'core/collapse'
---

<script>
  import { Demo, CollapseDemos } from '@svelteuidev/demos';
  import { Heading } from "$lib/components";
  import { base } from '$app/paths';
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

<Demo demo={CollapseDemos.usage} />

## Transition duration

It's possible to control the transition duration with the prop `transitionDuration` (in milliseconds). It's also possible to disable the opacity animation with the prop `animateOpacity`

<Demo demo={CollapseDemos.transition} />

## Nested collapse

<Demo demo={CollapseDemos.nested} />
