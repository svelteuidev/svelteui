---
title: 'Prism code highlight'
group: 'svelteuidev-prism'
packageGroup: '@svelteuidev/prism'
description: 'Code highlight with SvelteUI theme colors and styles'
slug: /others/prism/
import: "import { Prism } from '@svelteuidev/prism';"
source: 'svelteui-prism/src/lib'
docs: 'others/prism.md'
license: MIT
---

<script>
    import { Prism } from '@svelteuidev/prism';
    import { Box } from '@svelteuidev/core';
    import { Heading, Preview, CodeBlock } from 'components';


    const prismExampleCode = `
    <script>
        import { Button } from '@svelteuidev/core'
    <\/script>

    <Button>Hello<\/Button>
    `
    
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

    const prismCodeLineNumbers = `
    <script>
        import { Prism } from '@svelteuidev/prism'

        const prismExampleCode = \`
        <script>
            import { Button } from '@svelteuidev/core'
        <\/script>

        <Button>Hello<\/Button>
        \`
        
        <Prism lineNumbers language='svelte' code={prismExampleCode} \/>
    <\/script>

    <Button>Hello<\/Button>
    `
    const prismCodeHighlight = `
    <script>
        import { Prism } from '@svelteuidev/prism'

        const prismExampleCode = \`
        <script>
            import { Button } from '@svelteuidev/core'
        <\/script>

        <Button>Hello<\/Button>
        \`
        
        <Prism lineNumbers highlightLines='3-4' language='svelte' code={prismExampleCode} \/>
    <\/script>

    <Button>Hello<\/Button>
    `
    const prismCodeCopy = `
    <script>
        import { Prism } from '@svelteuidev/prism'

        const prismExampleCode = \`
        <script>
            import { Button } from '@svelteuidev/core'
        <\/script>

        <Button>Hello<\/Button>
        \`
        
        <Prism copy={false} language='svelte' code={prismExampleCode} \/>
    <\/script>

    <Button>Hello<\/Button>
    `
</script>

<Heading />

## Installation

Package depends on [Prism](https://) and [@svelteuidev/core](https://www.npmjs.com/package/@svelteuidev/core).

Install with npm:

<CodeBlock copy>
    npm install @svelteuidev/prism @svelteuidev/core
</CodeBlock>

Install with yarn:

<CodeBlock copy>
    yarn add @svelteuidev/prism @svelteuidev/core
</CodeBlock>

## Usage

Use Prism component to highlight code with SvelteUI theme styles. Component uses PrismJS under the hood and support light and dark theme, it is used in SvelteUI docs to display all code examples.

<Preview width={70} cols={1} code={prismCode}>
    <Box css={{pre: {bc: '$gray50'}, 'pre code': {color: '$gray900'}}}>
        <Prism language='svelte' code={prismExampleCode} />
    </Box>
</Preview>

Set `withLineNumbers` prop to display line numbers:

> Due to a bug with the docs, line numbers aren't displayed correctly.

<Preview width={70} cols={1} code={prismCodeLineNumbers}>
    <Box css={{pre: {bc: '$gray50'}, 'pre code': {color: '$gray900'}}}>
        <Prism lineNumbers language='svelte' code={prismExampleCode} />
    </Box>
</Preview>

## Lines highlight

To highlight individual lines use `highlightLines` prop with the string containing
line numbers.

- e.g. `highlightLines='1-2,4'`

<Preview width={70} cols={1} code={prismCodeHighlight}>
    <Box css={{pre: {bc: '$gray50'}, 'pre code': {color: '$gray900'}}}>
        <Prism lineNumbers highlightLines='3-4' language='svelte' code={prismExampleCode} />
    </Box>
</Preview>

## Copy button

To remove copy button set `copy` prop to false.

<Preview width={70} cols={1} code={prismCodeCopy}>
    <Box css={{pre: {bc: '$gray50'}, 'pre code': {color: '$gray900'}}}>
        <Prism copy={false} language='svelte' code={prismExampleCode} />
    </Box>
</Preview>

> This is only Prism v1. More updates will roll out overtime.