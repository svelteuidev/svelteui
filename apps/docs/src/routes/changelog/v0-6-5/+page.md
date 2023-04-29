---
title: 'Version 0.6.5'
order: 1
release: https://github.com/svelteuidev/svelteui/releases/tag/0.6.5
date: 'May 13th, 2022'
---

<script>
  import {
    Divider,
    Anchor,
    Button,
    Popper,
    Box,
    Center,
    Text,
    Paper,
    Tooltip,
    Skeleton,
    ObserverRender,
    Card,
    Burger,
    Kbd,
    Affix,
    NumberInput,
    TextInput,
    Group,
    Image,
    Badge,
    Space,
    ThemeIcon
  } from "@svelteuidev/core";
  import { Animation, TextAnimation } from "@svelteuidev/motion";
  import { fly } from 'svelte/transition';
	import { ArrowUp, StarFilled } from 'radix-icons-svelte';
  import { MinorHeading } from '$lib/components';
  import { base } from '$app/paths';

  let ref
  let opened = false
  let mounted = false
  let scrollY = 0;
</script>

<svelte:window on:scroll={() => scrollY = window.scrollY } />

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<MinorHeading {title} {order} {release} {date} />

## SvelteUI Collections

[SvelteUI Collections](https://svelteuidev.github.io/svelteui-collections/) is the newest addition to the SvelteUI Organization's projects. It's a A collection of fully responsive pre-made components designed and built by SvelteUI maintainers and the community. These components are built with SvelteUI and can help you build your next website quickly.

<Space h={50} />

## Breaking Changes

- The `@svelteuidev/actions` and `@svelteuidev/utilities` packages have been deprecated. They have merged into a new package called `@svelteuidev/composables`. The idea of a composable in SvelteUI, is some useful functionality encapsulated within a Svelte action function, or utility function.

- `xs-xl` space values are no longer string ('10px') values and instead number (10) values. If you need to use regular pixel values, use `xsPX-xlPX` instead.

- Group component no longer exports a `children` prop

<Space h={50} />

## New features and components 🔥

### _Styling Improvements:_

- use of the `css` function has been deprecated and replaced by the `createStyles` function. It makes styling even easier, and will become even better overtime. Read more about it [here]({base}/theming/create-styles)

### _Components:_

[Anchor]({base}/core/anchor) Component:

<Anchor href='/'>SvelteUI documentation</Anchor>

<Space h='xl' />

[Popper]({base}/core/popper) Component:

<Button bind:element={ref} on:click={() => mounted = !mounted }>Click here</Button>
<Popper
  {mounted}
  reference={ref}
  placement="center"
  position="bottom"
  withArrow={true}
  arrowOverride={{ bc: '$gray100' }}
>
  <Box css={{ bc: '$gray100', borderRadius: 5, padding: '30px' }}>
    <Center css={{ width: 100 }}>
      <Text>This is some amazing content</Text>
    </Center>
  </Box>
</Popper>

<Space h='xl' />

[Paper]({base}/core/paper) Component:

<Paper shadow="xs" p="md">
  <Text>Paper is the simplest component</Text>
  <Text>
    Use it to create cards, dropdowns, modals and other components that require a background with shadow
  </Text>
</Paper>

<Space h='xl' />

[Divider]({base}/core/divider) Component:

<Divider override={{my: '$smPX'}} />
<Divider override={{my: '$smPX'}} variant="dashed" />
<Divider override={{my: '$smPX'}} variant="dotted" />

<Space h='xl' />

[Portal]({base}/core/portal) Component:

Portal is a wrapper component for the [use-portal composable]({base}/composables/use-portal). With it, you can render any component or element at the end of the `document.body` or at any given element. The Modal (not yet implemented) component is wrapped in Portal by default.

<Space h='xl' />

[Tooltip]({base}/core/tooltip) Component:

<Tooltip label='I am a Tooltip' closeDelay={300}>
  <Button>Hover Me</Button>
</Tooltip>

<Space h='xl' />

[Skeleton]({base}/core/skeleton) Component:

<Paper>
  <Skeleton height={50} circle override={{ mb: '24px' }} />
  <Skeleton height={8} radius="xl"   />
  <Skeleton height={8} radius="xl" override={{ mt: '8px' }} />
  <Skeleton height={8} width={70} radius="xl" override={{ mt: '8px' }} />
</Paper>

<Space h='xl' />

[ObserverRender]({base}/core/observer-render) Component:

<Paper override={{ overflowY: 'scroll', h: 300 }}>
  <div style="padding-top: 260px; padding-bottom: 280px;" >
    <ObserverRender let:visible options={{ threshold: 1 }}>
      <Paper
        override={{bc: visible ? '$green900' : '$red900', minW: '50%'}}
        p="xl"
      >
        <Text override={{ color: 'white' }} weight='extrabold'>
          {visible ? 'Fully visible' : 'Obscured'}
        </Text>
      </Paper>
    </ObserverRender>
  </div>
</Paper>

<Space h='xl' />

[TypographyProvider]({base}/core/typography-provider) Component:

Use the TypographyProvider to give your HTML content Typography styles. TypographyProvider includes styles for:

- paragraphs
- headings
- lists
- blockquotes
- tables
- links
- images
- hr
- code and pre

<Space h='xl' />

[Card]({base}/core/card) Component:

<div style='width: 340px;'>
  <Card shadow='sm' p='lg'>
    <Card.Section padding='lg'>
      <Image
        src='https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80'
        height={160}
        alt='Portugal'
      />
    </Card.Section>
    <Group position='apart' override={{ mb: '5px', mt: '$smPX' }}>
      <Text weight={500}>Portugal Porto Adventures</Text>
      <Badge color='pink' variant='light'>
        On Sale
      </Badge>
    </Group>
    <Text size='sm' override={{ color: '$dark700', lineHeight: 1.5 }}>
      With Portugal Porto Adventures you can explore more of the beautiful portuguese cities,
      by walking on food, meeting the locals and eat excellent food and wine
    </Text>
    <Button variant='light' color='blue' fullSize override={{ mt: '14px' }}>
      Book classic tour now
    </Button>
  </Card>
</div>

<Space h='xl' />

[Seo]({base}/core/seo) Component:

The Seo component gives you the ability to manage SEO easier.

<Space h='xl' />

[Burger]({base}/core/burger) Component:

<Burger
  {opened}
  on:click={() => (opened = !opened)}
/>

<Space h='xl' />

[Kbd]({base}/core/kbd) Component:

<Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>

<Space h='xl' />

[Affix]({base}/core/affix) Component:

Look at the bottom right!

<Affix position={{ bottom: 20, right: 20 }}>
  {#if scrollY > 2500}
    <div transition:fly={{ y: 20, duration: 250 }}>
      <Button on:click={() => window.scrollTo(0, 0)}>
        <svelte:fragment slot='leftIcon'>
          <ArrowUp />
        </svelte:fragment>
        Scroll to top
      </Button>
    </div>
  {/if}
</Affix>

<Space h='xl' />

[AppShell]({base}/core/app-shell) Component:

AppShell is a layout component for creating a common layout pattern of Header - Navbar - Footer - Aside - Content. To make customization easier, the AppShell, Header, Footer, Aside, and Navbar components come with a set of minimal base styles.

<Space h='xl' />

[NumberInput]({base}/core/number-input) Component:

<NumberInput
  placeholder="Your age"
  label="Your age"
/>

<Space h='xl' />

[TextInput]({base}/core/text-input) Component:

<TextInput
  placeholder="Your name"
  label="Full name"
/>

### _Composables:_

[use-io]({base}/composables/use-io) Get details about an element's intersection with its scroll container

[use-hot-key]({base}/composables/use-hot-key) Listen keys combinations/shortcuts

[use-lock-scroll]({base}/composables/use-lock-scroll) Lock scroll at current position

[use-browser-context]({base}/composables/use-browser-context) Get access to the reactive browser location API

[use-eye-dropper]({base}/composables/use-eye-dropper) Get access to a reactive EyeDropper API

[use-focus-within]({base}/composables/use-focus-within) Detect if any element within has focus

[use-mouse-position]({base}/composables/use-mouse-position) Get mouse position relative to viewport or given element

[use-viewport-size]({base}/composables/use-viewport-size) Get viewport width and height

### _Motion:_

> Early in development, 2 new components were made for the motion package. We've since realized that the motion package needs a serious overhaul. You can expect these components to be removed from future versions

Animation Component:

<Group>
  {#each ['bounce', 'float', 'ping', 'pulsate', 'pulse', 'spin'] as animation}
    <Animation animation={animation}>
      <ThemeIcon>
        <StarFilled />
      </ThemeIcon>
    </Animation>
  {/each}
</Group>

TextAnimation Component:

<Group>
  {#each ['flow', 'hue' ] as animation}
    <TextAnimation animation={animation}>
      <p>This is text with spice</p>
    </TextAnimation>
  {/each}
</Group>

## Bug fixes and improvements

### _Packages:_

- Fixed Space component not working properly
- Fixed longpress action not having touch events
- Fixed NativeSelect & Switch dark styles not showing
  <Divider variant='dotted' />
- Added $$restProps to all components with Box as their base
- Added Fragment lifecycle methods
- Added support for [event modifiers](https://svelte.dev/docs#template-syntax-element-directives-on-eventname) on components
- Added external prop to Anchor component
- Added automatic children detection to Group

