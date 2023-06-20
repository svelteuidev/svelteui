---
title: AppShell
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/app-shell/
category: 'layout'
description: 'Responsive shell for your application with header, navbar, sidebar, and footer'
importCode: "import { AppShell, Navbar, Header, Aside, Footer, ShellSection } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/AppShell/AppShell.svelte'
docs: 'core/app-shell'
---

<script>
    import { Demo, AppShellDemos } from '@svelteuidev/demos';
	import { Heading } from "$lib/components";
  	import { base } from '$app/paths';
</script>

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

AppShell is a layout component that is used to develop a common layout pattern of Header - Navbar - Footer - Aside - Content. To make customization easier, the AppShell, Header, Footer, Aside, and Navbar components come with bare minimum styling.

Ideally you'd use this component in your top level layout, in conjunction with the [SvelteUIProvider]({base}/theming/svelteui-provider), [TypographyProvider]({base}/core/typography-provider) and [Seo]({base}/core/seo). These components will set up your project for success!

<Demo demo={AppShellDemos.usage} />

## Responsive Styles

You can see what a responsive AppShell's code would look like:

<Demo demo={AppShellDemos.responsive} />

## ShellSection

The AppShell exposes a `ShellSection` component that can be used anywhere in the AppShell context.

```svelte
<Navbar>
	<!-- First section with normal height (depends on section content) -->
	<ShellSection>First section</ShellSection>

	<!-- Grow section will take all available space that is not taken by first and last sections -->
	<ShellSection grow>Grow section</ShellSection>

	<!-- Last section with normal height (depends on section content) -->
	<ShellSection>Last section</ShellSection>
</Navbar>
```

## Responsive Widths

```svelte
<!-- This applies to the Aside Component as well -->
<Navbar
	width={{
		// When viewport is larger than theme.breakpoints.sm, Navbar width will be 300px
		sm: 300,

		// When viewport is larger than theme.breakpoints.lg, Navbar width will be 400px
		lg: 400,

		// When other breakpoints do not match base width is used, defaults to 100%
		base: 100
	}}
/>
```

## Fixed Positioning

To make Navbar or Aside fixed (like in the docs), set fixed and position props:

```svelte
<Navbar fixed position={{ top: 0, left: 0 }} />
```

## Semantic elements

- Header and Navbar component's root element is `nav`
- Footer component's root element is `footer`
- Aside component's root element is `aside`
- AppShell wraps content with `main` tag
  - Because of this, it's important to not use a `main` tag inside AppShell.
