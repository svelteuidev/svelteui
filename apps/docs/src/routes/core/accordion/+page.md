---
title: Accordion
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/accordion/
category: 'data-display'
description: 'Shows and divides content into collapsible sections'
importCode: "import { Accordion } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Accordion/Accordion.svelte'
docs: 'core/accordion'
---

<script lang="ts">
  import { Demo, AccordionDemos } from '@svelteuidev/demos';
  import { Heading } from "$lib/components";
  import { base } from '$app/paths';
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

<Demo demo={AccordionDemos.configurator} />

## Customize Control

Control can be fully customizable by setting any king of element inside the `control` slot.

<Demo demo={AccordionDemos.custom} />

## Change chevron

<Demo demo={AccordionDemos.chevron} />

## Controlled

The accordion component can be controlled externally with the prop `value` (which can be binded) and with the `on:change` event.

<Demo demo={AccordionDemos.controlled} />

## Default open

It's possible to set default opened items with the prop `defaultValue`. When `multiple` is false, this value should be a string.

<Demo demo={AccordionDemos.defaultValue} />

When `multiple` is `true`, this should be provided as an arrays of strings.

<Demo demo={AccordionDemos.defaultValueMultiple} />

## Disabled items

<Demo demo={AccordionDemos.disabled} />

## Transition

It's possible to change the chevron and collapse transition duration by modifying the prop `transitionDuration` (in milliseconds).

<Demo demo={AccordionDemos.transitionDuration} />

To disable the transition completely, set `transitionDuration` to `0`.

<Demo demo={AccordionDemos.noTransition} />

## Data attributes

Each item exposes data attributes that can be used to style the component.

- `data-rotate` for the chevron, which tells if the chevron should rotate. If `disableChevronRotation` is set, it will always be false.
- `data-active` in `Accordion.Item` when it's content is expanded.

<Demo demo={AccordionDemos.data} />

## Accessibility

The accordion component follows the [WAI-ARIA recommendations](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/) on accessibility.
