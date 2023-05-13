---
title: 'Version 0.5.5'
order: 2
release: https://github.com/svelteuidev/svelteui/releases/tag/0.5.0
date: 'April 16th, 2022'
---

<script lang='ts'>
    import { ActionIcon, Image, Switch, Text, Title, BackgroundImage, Group, Center, Stack } from '@svelteuidev/core'
    import { GithubLogo } from 'radix-icons-svelte';
    import { MinorHeading } from '$lib/components';
    import { base } from '$app/paths';
</script>

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<MinorHeading {title} {order} {release} {date} />

> Do not download the Prism package yet. It is currently unstable.

## New features and components 😁

### _Components:_

[ActionIcon]({base}/core/action-icon) component:

<Group>
    <ActionIcon variant='default' />
    <ActionIcon variant='filled' color='blue' size='xl' >
        <GithubLogo />
    </ActionIcon>
</Group>

[Image]({base}/core/image) component:

<Stack override={{width: '$80'}}>

<Center>
    <Image
    src="https://images.unsplash.com/photo-1648753532185-77d83918b809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80"
    height={240}
    alt="unsplash image"
    radius='lg'
    />
</Center>

<BackgroundImage src="https://images.unsplash.com/photo-1649014048485-590f93c42936?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" radius='md'>

BackgroundImage component can be used to add any content on image. It is useful for hero headers
and other similar sections

</BackgroundImage>
</Stack>

[Switch]({base}/core/switch) component:

<Switch size='lg' color="grape" offLabel={'OFF'} onLabel={'ON'} label="I agree to sell my soul" />

[Text]({base}/core/text) component:

<Text color='dimmed' size='xl'>Hello World</Text>

<Text variant='gradient' size='xl' gradient={{from: 'green', to: 'orange', deg: 45}}>Hello World with a twist</Text>

[Title]({base}/core/title) component:

<Title variant='gradient' order={1}>This is a title</Title>
<Title color='red' order={5}>This is too</Title>

<br />

### _Actions:_

[use-download]({base}/actions/use-download) Download will occur with a given Blob object.

[use-page-leave]({base}/actions/use-page-leave) Call function when mouse leaves the page

[use-tab-leave]({base}/actions/use-tab-leave) Call function when the user switches tabs

### _Utilities:_

[raf-fn]({base}/utilities/raf-fn) Call function on every `requestAnimationFrame`. With controls of pausing and resuming.

## API changes

- Better error handling through new error UI
- <code>{'<SvelteuiWrapper />'}</code> changed to <code>{'<SvelteUIProvider />'}</code>

## Bug fixes and improvements

### _Packages:_

- Fixed Button component not showing styles
- Fixed code component copy button not showing properly
- Native dark theme support by default

### _Docs:_

- Migrated docs to [Kit-docs](https://kit-docs.svelteness.dev)

