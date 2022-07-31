---
title: 'Contributing'
---

<script>
    import { CodeBlock, MinorHeading, BottomNav } from 'components'
    import { Demo, MiscDemos } from '@svelteuidev/demos';
    import { Alert } from '@svelteuidev/core';
    import { InfoCircled } from 'radix-icons-svelte';
    
    const styles = `<style id='svelteui-inject-body' type='text/css'>.article>*:nth-child(3){margin-top:1rem!important;}<\/style>`;
</script>

<svelte:head>
{@html styles}
</svelte:head>

<MinorHeading />

## Ways to contribute

- **Improve documentation:** fix incomplete or missing docs, bad wording, examples or explanations
- **Give feedback:** we are constantly working on making SvelteUI better, please share how you use SvelteUI, what features are missing and what is done good via GitHub Discussions
- **Share SvelteUI:** share link to SvelteUI docs with everyone who can be interested, share SvelteUI on Twitter
- **Contribute to codebase:** propose new feature via GitHub Issues or find an [existing one](https://github.com/svelteuidev/svelteui/labels/help%20wanted) that you are interested in and work on it
- **Give us a code review:** help us identify problems with [source code](https://github.com/svelteuidev/svelteui) or make SvelteUI more performant

## Contributing workflow

- Decide what you want to contribute
- If you want to implement new feature discuss it with a maintainer ([Discord](https://discord.gg/2J2xmzCS79) or [Discussions](https://github.com/svelteuidev/svelteui/discussions/categories/feature-requests)) before jumping into code
- After finalizing issue details work on code, please follow commit convention
- Submit a PR if everything is fine
- Get a code review and fix all issues noticed by a maintainer
- PR is merged, and we're done!

## Commit convention

SvelteUI is a monorepo and it is important to write clear commit messages to keep the git history clean.
All commits made in this repository are divided in 3 groups:

- **package commits** related to particular package
- **docs commits** related to documentation
- **core commits** only related to repository tooling and not associated with any package

This repo uses commitizen to make commits easier. In order to commit changes made, you should run the `yarn cm` command. Once you have done that, the commitizen cli messages will guide you through the commit process. Commit message consists of 2 parts:

```bash
[type]: Message
```

Examples:

- `[core]: Fix documentation deployment script` - Change made in repository script, it is not related to documentation or any package
- `[docs]: update report issues link` - Change related to documentation
- `[@svelteui/core]: updated SvelteUIProvider config` - Change in `@svelteui/core` package in SvelteUIProvider component
- `[@svelteui/actions]: added use-portal action` - Change in `@svelteui/actions` package by adding a new action

## Git branches

- **main** - When the project hits 1.0, this will be for the current version, and patches for current minor version (1.0.x)
- **next-minor** - Contains next minor version (1.x.0), most likely you would want to create a PR to this branch
- **experimental** - Up to date with next minor version (1.x.0), implementing some experimental features that may or may not be added

## Get started with SvelteUI locally

- Install [editorconfig](https://editorconfig.org/) extension for your editor
- **vscode users only** - install recommended extensions
- Fork [repository](https://github.com/svelteuidev/svelteui), clone or download your fork
- Install dependencies at the root of the monorepo with npm **(make sure to install with npm only)**
- After your node modules have installed:

**To start developing**

<Alert icon={InfoCircled}  title="Tip">
    It is very important to make sure you start from the root of the monorepo before following these steps
</Alert>

**`@svelteuidev/` scoped packages:**

1. run `yarn package`
   - If you want to watch for changes in one of the packages that they depend on, run `yarn watch` in their directory.
   - You will need two terminal sessions open at the very least. If this doesn't apply to your situation move on to step 2
2. cd into the package you want to develop on
3. run `yarn dev`

**`docs`:**

1. run `yarn package`
2. cd into the docs
3. run `yarn dev`

**Project Structure**

You won't need to pay attention to every file within the project. All of the packages follow a similar pattern, so you should always start your journey within the `src/lib` of whatever package you choose to work on.

<Demo demo={MiscDemos.contributing.tree} />

## NPM scripts

All packages npm scripts are located at [main package.json](https://github.com/svelteuidev/svelteui/blob/main/package.json),
individual packages have scripts, but they should not be interacted with directly. This is due to the nature of [TurboRepo](https://turborepo.org/). All scripts should be running from the root of the monorepo.

- `clean` - removes all unnecessary files and folders from packages (i.e. node_modules)
- `format` - runs prettier on packages folder
- `lint` - runs eslint on packages folder (run format before running lint)
- `test` - runs tests with [vitest](https://vitest.dev/)
- `package` - generates built versions of packages (needed for cross package development)
- `repo:prepush` - runs sort, format, lint and test (run this before pushing your code)
- `cm` - runs git commands to add and commit through commitizen (this is the recommended way to commit as it follows the convention automatically)

<BottomNav
both
slug={{ prev: 'basics', next: 'faq' }}
title={{ prev: 'Learn the Basics', next: 'FAQ' }}
group={{ prev: 'Getting Started', next: 'Getting Started' }}
/>
