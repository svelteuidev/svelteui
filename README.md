<div id="top"></div>

<br />
<div align="center">
   <img src="gallery/Logo.png" alt="Logo" width="80" height="80">
  <a href="https://github.com/svelteuidev/svelteui">
    <h1 align="center">SvelteUI</h1>
  </a>

[![NPM](https://img.shields.io/github/license/svelteuidev/svelteui)](https://github.com/svelteuidev/svelteui/blob/main/LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/svelteuidev/svelteui)](https://github.com/svelteuidev/svelteui/graphs/contributors)
[![npm](https://img.shields.io/npm/v/@svelteuidev/core)](https://www.npmjs.com/package/@svelteuidev/core)
[![npm](https://img.shields.io/npm/dm/@svelteuidev/core)](https://www.npmjs.com/package/@svelteuidev/core)
[![Help wanted](https://img.shields.io/github/labels/svelteuidev/svelteui/help%20wanted?label=Contribute)](https://github.com/svelteuidev/svelteui/labels/help%20wanted)
[![Discord](https://img.shields.io/badge/Chat%20on-Discord-%235865f2)](https://discord.gg/2J2xmzCS79)

  <p align="center">
   SvelteUI is an all inclusive Svelte library - Components, Actions, Utilities, Animations <br /> What more could you ask for ¯\_(ツ)_/¯
    <br />
    <a href="https://svelteui.dev/"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/svelteuidev/svelteui/issues">Report Bug</a>
    ·
    <a href="https://github.com/svelteuidev/svelteui/issues">Request Feature</a>
  </p>
</div>

<br />

## **About The Project**

[Read the Changelog](https://svelteui.dev/changelog/v0-6-0)

### Features

- [SvelteKit](https://kit.svelte.dev/) and SSR Compatible
- [TypeScript](https://typescriptlang.org/) and type definitions are supported, but optional
- All components are accessible according to [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) standards
- Dark theme included, as well as a custom theming api
- Minimal third-party dependency usage
- Easy setup - **Zero Configuration**

<br />

## Packages

**[`@svelteui/core`](https://svelteui.dev/core/button)** - core components library with 40+ components

**[`@svelteui/composables`](https://svelteui.dev/composables/use-click-outside)** - collection of 20+ useful actions and utilities

**[`@svelteui/dates`](https://svelteui.dev/dates/getting-started)** - calendars, date and time pickers based on SvelteUI components

**[`@svelteui/preprocessors`](https://svelteui.dev/preprocessors/view-source)** - Svelte preprocessor library to assist in many areas of development

**[`@svelteui/motion`](https://svelteui.dev/motion/typewriter)** - collection of transitions to utilize on dom elements

**[`@svelteui/prism`](https://svelteui.dev/others/prism)** - code highlight component built with prism action

<br />

## Getting help

I want to build a friendly community that is happy to help those who need it. Help build one up by joining the discord |:

- [Join Discord community](https://discord.gg/2J2xmzCS79) – it will be the easiest way to get help.
- [Github Discussions](https://github.com/svelteuidev/svelteui/discussions) - you can discuss anything relating to the project here.

<br />

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

- If you have a suggestion that would make this project better, submit an issue
- If you would like to directly contribute, read the [contribution guide](https://svelteui.dev/contributing) then submit a PR

<br />

## Contributors

<a href="https://github.com/svelteuidev/svelteui/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=svelteuidev/svelteui" />
</a>

<br />

## License

Everything in the project is distributed under the MIT License

<br />

## Contact

- Twitter - [Brisklemonaid](https://twitter.com/brisklemonaid)
- Discord - [SvelteUI Discord](https://discord.gg/2J2xmzCS79)

<p align="right">(<a href="#top">back to top</a>)</p>

## Roadmap & TO-DO's

**Here is where you can find the Roadmap for SvelteUI up to version 1.0**

We would love to hear from you in issues, discussions, and discord to improve the roadmap. As we proceed along our roadmap, we continue to learn. As a result, some of the listed topics may no longer be relevant to us, therefore as the project develops, we might add or remove topics. We will pay close attention to your suggestions and if necessary, modify our plans.

We use certain "Marks" to give you quick indications of the current state of any item in the roadmap. The colorful icons can be displayed by typing `:COLOR_circle:`

Annotation legend:

| Mark            | Description                                        |
| --------------- | -------------------------------------------------- |
| !               | low level of priority                              |
| !!              | medium level of priority                           |
| !!!             | high level of priority                             |
| :red_circle:    | no work has been started                           |
| :yellow_circle: | actively being worked on or going to start working |
| :green_circle:  | work has been completed                            |

There are different categories on the roadmap. Items for versions `0.8–1.0` and potential future plans are included in each category. To make things quick and simple to view, the items are listed in a table.

> Roadmap is currently a WIP

### REPO/MISC:

| Status          | Priority | Description                                                          |
| --------------- | -------- | -------------------------------------------------------------------- |
| :red_circle:    | !        | Move Stitches to peer-deps (svelteui-core)                           |
| :green_circle:  | !!       | Upgrade to latest SvelteKit version (leverage Vite 3.0.0)            |
| :green_circle:  | !!       | Migrate package manager from `npm` to `yarn`                         |
| :yellow_circle: | !!       | Migrate dev environment to Storybook for all packages                |
| :red_circle:    | !!       | Add peerdeps fix to prepare:release script                           |
| :red_circle:    | !!       | Figure out how to get cjs,esm,umd distributions in release processes |
| :red_circle:    | !!!      | Figure out how to add minification to the release processes          |

**Version 1.0.0:**

**Future:**

### DOCS:

- [ ]

| Status          | Priority | Description            |
| --------------- | -------- | ---------------------- |
| :yellow_circle: | !!!      | Migration to SvelteKit |

**Version 1.0.0:**

**Future:**

### SVELTEUI-CORE:

> Component creation, deletion, and modification should always be discussed with a maintainer before taking any action (Discord, Issues, and Discussions)!

| Status         | Priority | Description                                          |
| -------------- | -------- | ---------------------------------------------------- |
| :red_circle:   | !        | Create `Section` component                           |
| :red_circle:   | !        | Create `ScrollArea` component                        |
| :red_circle:   | !        | Create `Accordion` component                         |
| :red_circle:   | !        | Create `ARIA` component                              |
| :red_circle:   | !        | Create `Slider` component                            |
| :red_circle:   | !        | Create `SegmentedControl` component                  |
| :green_circle: | !        | Create `Chip` component                              |
| :red_circle:   | !        | Create `Select` component                            |
| :green_circle: | !!!      | Find an effective solution to SSR in SSR mode (#172) |
| :green_circle: | !!!      | Find an effective solution to SSR in SSG mode (#107) |
| :red_circle:   | !!!      | Fix types for native events                          |

**Version 1.0.0:**

**Future:**

### SVELTEUI-COMPOSABLES:

> Composable creation and deletion should always be discussed with a maintainer before taking any action (Discord, Issues, and Discussions)!

| Status       | Priority | Description |
| ------------ | -------- | ----------- |
| :red_circle: | !        | Placeholder |

**Version 1.0.0:**

**Future:**

### SVELTEUI-DATES:

| Status          | Priority | Description                 |
| --------------- | -------- | --------------------------- |
| :red_circle:    | !!       | Create TimePicker component |
| :yellow_circle: | !!!      | Complete Calendar component |

**Version 1.0.0:**

**Future:**

### SVELTEUI-PREPROCESSORS:

**Version 1.0.0:**

**Future:**

- [ ] think of new preprocessors to create

### SVELTEUI-PRISM:

| Status       | Priority | Description                     |
| ------------ | -------- | ------------------------------- |
| :red_circle: | !        | Add more tokens to style object |
| :red_circle: | !!!      | Adapt new styling practices     |

**Version 1.0.0:**

**Future:**

### SVELTEUI-NOTIFICATIONS:

- [ ] create new notifications package

<p align="right">(<a href="#top">back to top</a>)</p>
