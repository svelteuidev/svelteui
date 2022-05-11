---
title: Image
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/image/
category: 'data-display'
description: 'Image with optional placeholder for loading and error state'
import: "import { Image } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/Image/Image.svelte'
docs: 'core/image.md'
---

<script lang="ts">
    import { BackgroundImage, Image, SimpleGrid, Text } from '@svelteuidev/core';
    import { Heading, Preview } from 'components';

    const url = "https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?auto=format&fit=crop&w=720&q=80";
    const doggo = "https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?auto=format&fit=crop&w=640&q=80";

    const image = `
    <script>
        import { Image } from '@svelteuidev/core';
    <\/script>

    <Image
        radius="md"
        src={url}
        alt="Random unsplash image"
    \/>
    `;
    const sizeImage = `
    <script>
        import { Image } from '@svelteuidev/core';
    <\/script>

    <Image
        width={200}
        height={80}
        src={url}
    \/>
    <Image
        width={200}
        height={80}
        fit="contain"
        src={url}
    \/>
    <Image
        height={80}
        src={url}
    \/>
    `;
    const placeholderImage = `
    <script>
        import { Image } from '@svelteuidev/core';
    <\/script>

    <Image
        width={200}
        height={120}
        src={null}
        alt="Without placeholder"
    \/>
    <Image
        width={200}
        height={120}
        src={null}
        alt="With default placeholder"
        usePlaceholder
    \/>
    `;
    const captionImage = `
    <script>
        import { Image } from '@svelteuidev/core';
    <\/script>

    <Image
        radius="md"
        src={doggo}
        alt="Random unsplash image"
        caption="My dog begging for treats"
    \/>
    `;
    const radiusImage = `
    <script>
        import { Image } from '@svelteuidev/core';
    <\/script>

    <Image radius={0} src={doggo} \/>
    <Image radius={"lg"} src={doggo} \/>
    <Image radius={10} src={doggo} \/>
    `;
    const backgroundImage = `
    <script>
        import { BackgroundImage, Text } from '@svelteuidev/core';
    <\/script>

    <BackgroundImage
        src={url}
        radius="sm"
    >
        <Text color="#fff">
            BackgroundImage component can be used to add any content on image. It is useful for hero
            headers and other similar sections
        <\/Text>
    <\/BackgroundImage>
    `;
</script>

<Heading />

## Usage

Image component is a wrapper around img element with option to change object fit, radius and placeholder:

<Preview code={image}>
    <Image
      radius="md"
      src={url}
      alt="Random unsplash image"
    />
</Preview>

### Width and height

In the example above, the image takes 100% of width of its container and height is calculated dynamically based on image proportion. To change this behavior, set image width and height to define image size.

Note that if image proportions do not match given width and height, some parts will be cut out. In case you want to show image in its original proportions but fitted in current width and height set `fit="contain"`:

<Preview code={sizeImage}>
    <SimpleGrid cols={3}>
        <Image
            width={200}
            height={80}
            src={url}
        />
        <Image
            width={200}
            height={80}
            fit="contain"
            src={url}
        />
        <Image
            height={80}
            src={url}
        />
    </SimpleGrid>
</Preview>

### Placeholder

By default the placeholders image is disabled. Image placeholder is displayed in these cases:

* `usePlaceholder` prop is set to true
* Image is currently loading
* Error occurred during image loading (e.g. broken link)
* Image did not receive `src` prop

Placeholder size is determined by width and height props. Placeholder is centered vertically and horizontally across provided width and height.

<Preview code={placeholderImage}>
    <SimpleGrid cols={2}>
        <Image
            width={200}
            height={120}
            src={null}
            alt="Without placeholder"
        />
        <div style="width: 200px; height: 120px">
            <Image
                width={200}
                height={120}
                src={null}
                alt="With default placeholder"
                usePlaceholder
            />
        </div>
    </SimpleGrid>
</Preview>

### With caption

You can add figcaption to an image with `caption` prop:

<Preview code={captionImage}>
    <SimpleGrid cols={1}>
        <Image
            radius="md"
            src={doggo}
            alt="Random unsplash image"
            caption="My dog begging for treats"
        />
    </SimpleGrid>
</Preview>

### Radius

Radius is applied both to image and placeholder. Radius has predefined values: `xs`, `sm`, `md`, `lg`, `xl`. Alternatively, you can use a number to set border-radius in px:

<Preview code={radiusImage}>
    <SimpleGrid cols={3}>
        <Image radius={0} src={doggo} />
        <Image radius={"lg"} src={doggo} />
        <Image radius={10} src={doggo} />
    </SimpleGrid>
</Preview>

### BackgroundImage component

Use BackgroundImage component when you need to display image below any content. Component sets `background-image` to given `src`, `background-size` to `cover` and `background-position` to `center`. It can be used for cards, hero headers and similar components:

<Preview code={backgroundImage}>
    <BackgroundImage
        src={url}
        radius="sm"
    >
        <Text color="#fff">
        BackgroundImage component can be used to add any content on image. It is useful for hero
        headers and other similar sections
        </Text>
    </BackgroundImage>
</Preview>