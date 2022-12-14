---
title: SvelteUI Preprocessors
group: 'svelteuidev-preprocessors'
packageGroup: '@svelteuidev/preprocessors'
slug: /preprocessors/getting-started/
description: 'Svelte preprocessor library to assist in many areas of development'
source: 'svelteui-preprocessors'
---

<script>
    import { Alert, Space } from "@svelteuidev/core";
	import { ExclamationTriangle } from 'radix-icons-svelte';
    import { Heading, CodeBlock } from 'components';
</script>

<Heading />

<Alert icon={ExclamationTriangle} title="INFO" color="indigo" variant='filled'>
    If you have any suggestions for preprocessors, start a discussion or hop onto Discord!
</Alert>

## Installation

`@svelteuidev/preprocessors` package does not depend on any other libraries, you can use it with or without other `@svelteuidev/` packages:

Install with npm:

```bash
npm install @svelteuidev/preprocessors
```

Install with yarn:

```bash
yarn add @svelteuidev/preprocessors
```

## Basics

Svelte's preprocessor gives you a lot of freedom when it comes to writing your components. It is the very thing that enables you to use things like Sass or Typescript in your Svelte Markup. SvelteUI has created a new package to provide you powerful features for your development.

### Order

Preprocessors can be very powerful when used correctly. Something that is very important is the order in which you place your preprocessors, because they are executed in the order they are placed in. All SvelteUI preprocessors will tell you which order they should be placed in, in their respective documentation section.

## Preprocessors

So far the list of available preprocessors are

| Title      | Description                                         |
| ---------- | --------------------------------------------------- |
| viewSource | Allows you to display source code with fine control |
