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
    import { Code, Box } from '@svelteuidev/core';
    import { Prism } from '@svelteuidev/prism';
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

    <Code block copy message={"This code will be in block and you can copy"}>
        This code will be in block and you can copy
    <\/Code>
    `;
    const colorCode = `
    <script>
        import { Code } from '@svelteuidev/core';
    <\/script>

    <Code color="red">This code is red<\/Code>
    <Code color="teal">This code is teal<\/Code>
    <Code color="blue">This code is blue<\/Code>
    `;
    const prismCode = `
    <script>
        import { Prism } from '@svelteuidev/prism'

        const prismExampleCode = \`
        <script>
            import { Button } from '@svelteuidev/core'
        <\/script>

        <Button>Hello<\/Button>
        \`
        
        <Prism language='svelte' code={prismExampleCode} \/>
    <\/script>

    <Button>Hello<\/Button>
    `
    const prismExampleCode = `
    <script>
        import { Button } from '@svelteuidev/core'
    <\/script>

    <Button>Hello<\/Button>
    `
</script>

<Heading />

## Usage

By default the Code component renders inline `code` html element:

<Preview cols={1} code={code}>
    <Code>This code will be inline</Code>
</Preview>

## Block code

To render code in `pre` element pass block prop to Code component. It is also possible to allow copying the code to the clipboard with the prop `copy`:

<Preview cols={1} code={blockCode}>
    <Code block copy message={"This code will be in block and you can copy"}>
        This code will be in block and you can copy
    </Code>
</Preview>

## Custom color

By default, code has gray color, you can change it to any color from [theme colors](theming/default-theme.md):

<Preview code={colorCode}>
    <Code color="red">This code is red</Code>
    <Code color="teal">This code is teal</Code>
    <Code color="blue">This code is blue</Code>
</Preview>

## Syntax highlight

For syntax highlight consult the [prism package](others/prism).

<Preview width={90} cols={1} code={prismCode}>
    <Box css={{pre: {bc: '$gray50'}, 'pre code': {color: '$gray900'}}}>
        <Prism language='svelte' code={prismExampleCode} />
    </Box>
</Preview>
