---
id: installation
title: Installation
---

import CodeBlock from '../components/CodeBlock'
import Project from '../components/blog/getting-started/Project'
import { Alert } from '@mantine/core';
import { InfoCircledIcon } from '@radix-ui/react-icons'

<Alert icon={<InfoCircledIcon />} title="Warning" color="yellow">
SvelteUI is built to work with projects that have svelte versions `3.44.0` and up. If enough people want backwards compatibility, then we will work on that. If you want to support backwards compatibility feel free to raise an issue on github
</Alert>

<br />

**Initialize a new Svelte or SvelteKit project (or add to an existing project).**

<Project />

<br />

You can install SvelteUI with [NPM](https://npmjs.com) or [Yarn](https://yarnpkg.com). You don't have too install every package, use them as needed. All packages except from the core package works independent from the others.

### NPM

<CodeBlock className='bash'>
    npm i @svelteuidev/core @svelteuidev/actions
</CodeBlock>

### Yarn

<CodeBlock className='bash'>
    yarn add @svelteuidev/core @svelteuidev/actions
</CodeBlock>

<br />

> Wanna give it a spin before you download? Take some time in the [playground](/playground)!
