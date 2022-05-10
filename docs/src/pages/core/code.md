---
title: Code
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/code/
category: 'typography'
description: 'Inline or block code without syntax highlight'
import: "import { Code } from '@svelteuidev/core';"
source: 'svelteui-core/src/lib/components/Code/Code.svelte'
docs: 'core/code.md'
---

<script lang="ts">
    import { Code } from '@svelteuidev/core';
    import { Heading, Preview } from 'components';

    const code = `
        <script>
            import { Code } from '@svelteuidev/core';
        <\/script>

        <Code>This code will be inline<\/Code>
    `;
    const blockCode = `
        <script>
            import { Code } from '@svelteuidev/core';
        <\/script>

        <Code block copy>This code will be in block and you can copy<\/Code>
    `;
    const colorCode = `
        <script>
            import { Code } from '@svelteuidev/core';
        <\/script>

        <Code color="red">This code is red<\/Code>
        <Code color="teal">This code is teal<\/Code>
        <Code color="blue">This code is blue<\/Code>
    `;
</script>

<Heading />

## Usage

By default the Code component renders inline `code` html element:

<Preview code={code}>
    <Code>This code will be inline</Code>
</Preview>

### Block code

To render code in `pre` element pass block prop to Code component. It is also possible to allow copying the code to the clipboard with the prop `copy`:

<Preview code={blockCode}>
    <Code block copy message={"This code will be in block and you can copy"}>
        This code will be in block and you can copy
    </Code>
</Preview>

### Custom color

By default, code has gray color, you can change it to any color from [theme colors](theming/default-theme.md):

<Preview code={colorCode}>
    <Code color="red">This code is red</Code>
    <Code color="teal">This code is teal</Code>
    <Code color="blue">This code is blue</Code>
</Preview>

### Syntax highlight

For syntax highlight consult the [prism package](others/prism).
