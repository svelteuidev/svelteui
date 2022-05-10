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

import { CodeBlock, Heading } from 'components'

<Heading />

## Installation

Package depends on [Prism](https://), [Dependent](https://), [@svelteuidev/core](https://www.npmjs.com/package/@svelteuidev/core).

Install with npm:

<CodeBlock copy>
npm install @svelteuidev/prism @svelteuidev/core
</CodeBlock>

Install with yarn:

<CodeBlock copy>
yarn add @svelteuidev/prism @svelteuidev/core
</CodeBlock>

## Usage

Use Prism component to highlight code with svelteuidev theme styles.
Component uses [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer)
under the hood and support light and dark theme, it is used in svelteuidev docs to display all code examples.

## Line numbers

Set `withLineNumbers` prop to display line numbers:

### Demo Here

## Lines highlight

To highlight individual lines use `highlightLines` prop with object containing
line numbers as keys and highlight options as values. Highlight options include
color from `theme.colors` and label which replaces line number:

### Demo Here

## Copy button

To remove copy button set `noCopy` prop.
Copy button labels can be changed with `copyLabel` and `copiedLabel` props:

### Demo Here

## Native scrollbars

By default, Prism uses [ScrollArea](/core/scroll-area/) component to handle overflow content,
to replace it with native scrollbars set `scrollAreaComponent="div"`:

### Demo Here

## With tabs

To display multiple files use `Prism.Tabs` component, it supports the same props as [Tabs](/core/tabs/) component:

### Demo Here

## Force dark/light theme

You can force dark/light color scheme by setting `colorScheme` prop:

### Demo Here

## Languages

Component supports all languages which are supported by [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer):

### Demo Here
