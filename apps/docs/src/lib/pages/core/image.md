---
title: Image
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/image/
category: 'data-display'
description: 'Image with optional placeholder for loading and error state'
importCode: "import { Image } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Image/Image.svelte'
docs: 'core/image.md'
---

<script lang="ts">
    import { Demo, ImageDemos } from '@svelteuidev/demos';
</script>

## Usage

Image component is a wrapper around an `img` element with the option to change object-fit, radius and placeholder:

<Demo demo={ImageDemos.usage} />

## Width and height

In the example above, the image takes 100% of width of its container and height is calculated dynamically based on image proportion. To change this behavior, set image `width` and `height` to define image size.

Note that if image proportions do not match given width and height, some parts will be cut out. In case you want to show image in its original proportions but fitted in current width and height set `fit="contain"`:

<Demo demo={ImageDemos.width} />

## Placeholder

By default the placeholders image is disabled. Image placeholder is displayed in these cases:

- `usePlaceholder` prop is set to true
- Image is currently loading
- Error occurred during image loading (e.g. broken link)
- Image did not receive `src` prop

Placeholder size is determined by width and height props. Placeholder is centered vertically and horizontally across provided width and height.

<Demo demo={ImageDemos.placeholder} />

## With caption

You can add figcaption to an image with `caption` prop:

<Demo demo={ImageDemos.caption} />

## Radius

Radius is applied both to image and placeholder. Radius has predefined values: `xs`, `sm`, `md`, `lg`, `xl`. Alternatively, you can use a number to set border-radius in px:

<Demo demo={ImageDemos.radius} />

## BackgroundImage component

Use BackgroundImage component when you need to display image below any content. Component sets `background-image` to given `src`, `background-size` to `cover` and `background-position` to `center`. It can be used for cards, hero headers and similar components:

<Demo demo={ImageDemos.background} />
