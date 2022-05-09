---
layout: 'no_sidebar'
title: 'SvelteUI - A variety of components, actions, transition and utility functions'
---

<script lang="ts">
  import { GithubLogo, ChevronDown, ArrowRight } from 'radix-icons-svelte';
  import {
    css,
    Button,
    Text,
    Center,
    Stack,
    Group,
    Container,
    keyframes,
    SvelteUIProvider,
  } from '@svelteuidev/core';
  const PrimaryButton = {
    boxShadow: '0 2px 14px #228be6',
    transition: 'all 0.2s ease-in-out',
    color: 'white !important',
    textDecoration: 'none !important',
    '&:hover': {
      boxShadow: '0 4px 20px #228be6',
    },
  };
  const bounce = keyframes({
    '0%': { transform: 'translateY(-25%)' },
    '50%': { transform: 'none' },
    '100%': { transform: 'translateY(-25%)' },
  });
  const ChevronStyles = css({
    length: 0,
    animation: `${bounce} 1s infinite ease`,
  });
</script>

<SvelteUIProvider withGlobalStyles ssr>
  <Container override={{ ml: '$80' }} size="xl">
    <Stack>
      <Text align="center" size={40} weight="bold">
        Create fully functional and accessible web applications in less time
        than ever before.
      </Text>
      <Text weight="extrabold" variant="gradient" align="center" size={60}>
        Regardless of design experience.
      </Text>
      <Text weight="semibold" size="xl" align="center">
        Check out the source code, or read the documentation & get started!
      </Text>
      <Group position="center">
        <Button href="introduction" size="xl" override={PrimaryButton}>
          <ArrowRight size={20} slot="leftIcon" />
          <p>Get Started</p>
        </Button>
        <Button override={{m: 0}} size="xl" variant="default">
          <GithubLogo size={25} slot="leftIcon" />
          <p>Source Code</p>
        </Button>
      </Group>
    </Stack>
  </Container>
</SvelteUIProvider>

<!-- Scroll down to get a better look -->
<!-- <ChevronDown class={ChevronStyles()} size={60} /> -->
