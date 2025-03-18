---
title: Modal
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/modal/
category: 'overlay'
description: 'Modal with optional header'
importCode: "import { Modal } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Modal/Modal.svelte'
docs: 'core/modal'
---

<script>
	import { Alert, Text } from '@svelteuidev/core';
	import { Demo, ModalDemos } from '@svelteuidev/demos';
  import { InfoCircled } from 'radix-icons-svelte';
	import { Heading } from "$lib/components";
  import { base } from '$app/paths';
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

<Alert iconComponent={InfoCircled} title="Important!" color='blue' override={{ marginBottom: '16px' }}>
<Text override={{ lineHeight: '1.6' }}>
When using the Modal component it's important that you wrap your app in the <a href='theming/svelteui-provider'>SvelteUIProvider</a>. If for some reason you don't want to do that, you must change the <code>target</code> prop to something else. Such as <code>{"target={'body'}"}</code>.
</Text>
</Alert>

<Demo demo={ModalDemos.usage} />

## Remove title and close button

You can remove modal title and close button.
It will still be possible to close modal by clicking on overlay or pressing escape.

<Demo demo={ModalDemos.header} />

## Center modal vertically

<Demo demo={ModalDemos.centered} />

## Change size

You can change modal width by setting `size` prop to predefined size or any valid width, for example, 55% or 200px.
Size controls modal width, max-width is set to 100% with spacing on left and right, no matter what `size` is passed 100% will not be exceeded:

```svelte
<Modal size="sm" /> // -> predefined small size
<Modal size={378} /> // -> size in px
<Modal size="55%" /> // -> size in %
<Modal size="calc(100vw - 87px)" /> // -> size with calc
<Modal size="255%" /> // -> max-width is set to 100%, won't work
```

<Demo demo={ModalDemos.sizes} />

## Customize overlay

Modal uses [Overlay]({base}/core/overlay/) component, so you can change overlay opacity, blur and color:

<Demo demo={ModalDemos.overlay} />

## Modal with overflow

You can control Modal vertical overflow behavior by setting `overflow` prop:

<Demo demo={ModalDemos.overflow} />

## Control behavior

The following props can be used to control Modal behavior.
In most cases you should not turn these features off as it will make your modal less accessible.

<!-- - `trapFocus` – defines whether focus should be trapped inside modal -->

- `closeOnEscape` – defines whether Modal should be closed when user presses `Escape` key
- `closeOnClickOutside` – defines whether Modal should be closed when user clicks outside of modal body

## Accessibility and usability

- When Modal is opened, focus is trapped inside and vertical scroll is locked at current position
- When user clicks on overlay or presses escape, Modal closes
- Modal transitions are disabled if user prefers to reduce motion
- Modal wrapper has `aria-modal="true"` and `role="dialog"` attributes
- Modal wrapper has `aria-labelledby` and `aria-describedby` pointing to modal title and body

For better screen reader support set `closeButtonLabel` prop:

```svelte
// sets title attribute on close button
<Modal closeButtonLabel="Close authentication modal" />
```
