---
title: 'Version 0.7.0'
order: 5
release: https://github.com/svelteuidev/svelteui/releases/tag/0.7.0
date: 'May 13th, 2022'
---

<script>
  import { Group, Space, Divider, Progress, Button, Alert, Paper } from "@svelteuidev/core";
	import { ExclamationTriangle } from 'radix-icons-svelte';
	import {
    Demo,
    TimelineDemos,
    GridDemos,
    NotificationDemos,
    MediaQueryDemos,
    ModalDemos,
    ComposableDemos,
    MonthDemos,
    TabsDemos,
    MenuDemos
  } from '@svelteuidev/demos';
  import { MinorHeading } from '$lib/components';
  import { base } from '$app/paths';

  let progressVal = 10
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<MinorHeading {title} {order} {release} {date} />

## Breaking Changes

- The `Card` component no longer exports a `Card.Container` component. It is just `Card` now.

- Currently components export `ComponentStyles` and that is how you would access types (i.e ComponentStyles.ComponentProps). That will no longer be the case and in 0.7.1 everything will be named exports rather than under a namespace.

<Space h='xl' />

### _New SvelteUI Dates Package:_

<Demo demo={MonthDemos.usage} toggle={true} />

### _New SvelteUI Preprocessors Package:_

[view-source]({base}/preprocessors/view-source) Preprocessor for displaying source code

<Space h='xl' />

## New features and components 🔥

### _Styling Improvements:_

- createStyles has gotten many improvements, make sure to read the [creating styles]({base}/theming/creating-styles) guide!

### _Components:_

## [MediaQuery]({base}/core/media-query) Component:

<Demo demo={MediaQueryDemos.usage} toggle={true} />

## [Progress]({base}/core/progress) Component:

<Paper>
  <Progress
    size="xl"
    radius="xl"
    sections={[
      { value: 30, color: 'pink', label: 'Documents' },
      { value: 30, color: 'grape', label: 'Apps' },
      { value: 25, color: 'violet', label: 'Other' },
    ]}
  />
  <Space h='lg' />
  <Progress tween bind:value={progressVal} />
  <Space h='lg' />
  <Group>
    <Button on:click={()=>progressVal+=10}>Increment</Button>
    <Button on:click={()=>progressVal-=10}>Decrement</Button>
  </Group>
</Paper>

## [Alert]({base}/core/alert) Component:

<Paper>
  <Alert icon={ExclamationTriangle} title="Bummer!" color="red">
      Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
  </Alert>
</Paper>

## [Notification]({base}/core/notification) Component:

<Demo demo={NotificationDemos.usage} toggle={true} />

## [Tabs]({base}/core/tabs) Component:

<Demo demo={TabsDemos.usage} toggle={true} />

## [Modal]({base}/core/modal) Component:

<Demo demo={ModalDemos.usage} toggle={true} />

## [Grid]({base}/core/grid) Component:

<Demo demo={GridDemos.usage} toggle={true} />

## [Timeline]({base}/core/timeline) Component:

<Demo demo={TimelineDemos.usage} toggle={true} />

## [Menu]({base}/core/menu) Component:

<Demo demo={MenuDemos.usage} toggle={true} />

### _Composables:_

## [use-web-worker]({base}/composables/use-web-worker)

Run expensive functions without blocking the UI through a web worker

<Demo demo={ComposableDemos.useWebWorkerDemo.usage} toggle={true} />

## [use-throttle]({base}/composables/use-throttle)

Function that let's you throttle the execution of a function

<Demo demo={ComposableDemos.useThrottleDemo.usage} toggle={true} />

## [use-debounce]({base}/composables/use-debounce)

Function that let's you debounce the execution of a function

<Demo demo={ComposableDemos.useDebounceDemo.usage} toggle={true} />

## [use-element-size]({base}/composables/use-element-size)

Get element width and height and subscribe to changes

<Demo demo={ComposableDemos.useElementSizeDemo.usage} toggle={true} />

## [use-id]({base}/composables/use-id)

Generate a random id

<Demo demo={ComposableDemos.useIdDemo.usage} toggle={true} />

## Bug fixes and improvements

### _Packages:_

- Better typescript support for colors
- NativeSelect data prop is now reactive
- Fixed Switch not having cursor pointer on hover
- Fixed Prism component trying to remove already removed children
- Fixed Prism content overflow issues
- Fixed SvelteUIProvider not applying custom themes.
  <Divider variant='dotted' />
- Added getRef function to createStyles
- createStyles now supports autocompletion for class names.
- All components now support padding and margin props coming in (0.7.1)
- Box component css prop can now be a function that subscribes to the current theme context
- Added overrideControls prop to NumberInput
